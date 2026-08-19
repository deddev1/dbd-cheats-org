/**
 * Cloudflare Worker — canonical host + path redirects before static assets.
 * Locale cannibal 301s live in functions/cannibal-redirects.json (not _redirects)
 * to stay under Cloudflare's 100 dynamic _redirects rule limit.
 */
import { applySecurityHeaders } from './lib/security-headers.js';
import { isBrandStudioPath, resolvePathRedirect } from './worker-redirects.js';

export interface Env {
	ASSETS: Fetcher;
}

const CANONICAL_ORIGIN = 'https://dbdcheats.org';
const CANONICAL_HOST = 'dbdcheats.org';
const WWW_HOST = `www.${CANONICAL_HOST}`;

/** Alternate domains only — never include CANONICAL_HOST or WWW_HOST (infinite redirect loop). */
const LEGACY_HOSTS = new Set([
	'bestdbdcheats.com',
	'www.bestdbdcheats.com',
	'dbdcheat.org',
	'www.dbdcheat.org',
]);

/** Built sitemap assets only — excludes legacy names like sitemap-index.xml / sitemap-0.xml. */
const BUILT_SITEMAP_PATH =
	/^\/sitemap(?:\.xml|-(?:en|i18n|images|es|fr|de|pt|it|nl|pl|ru|tr|ar|ja|ko|zh|hi|id|th|vi|uk|cs|ro|sv)\.xml)$/;

function isBuiltSitemapPath(pathname: string): boolean {
	return BUILT_SITEMAP_PATH.test(pathname);
}

function isSitemapRelatedPath(pathname: string): boolean {
	return /^\/sitemap/i.test(pathname);
}

function requestHost(request: Request, url: URL): string {
	return (request.headers.get('host') || url.hostname).split(':')[0].toLowerCase();
}

/** Keep www sitemap URLs on www — GSC URL-prefix properties require a direct 200 on the same host. */
function redirectOrigin(host: string, pathname: string): string {
	if (host === WWW_HOST && isSitemapRelatedPath(pathname)) {
		return `https://${WWW_HOST}`;
	}
	return CANONICAL_ORIGIN;
}

function getClientProtocol(request: Request, url: URL): string {
	const cfVisitor = request.headers.get('CF-Visitor');
	if (cfVisitor) {
		try {
			const scheme = JSON.parse(cfVisitor).scheme;
			if (scheme) return String(scheme).toLowerCase();
		} catch {
			// ignore malformed CF-Visitor
		}
	}

	const forwarded = request.headers.get('X-Forwarded-Proto');
	if (forwarded) {
		return forwarded.split(',')[0]?.trim().toLowerCase() ?? 'https';
	}

	return url.protocol.replace(':', '').toLowerCase();
}

function redirectResponse(target: string, status = 301): Response {
	const headers = new Headers({
		Location: target,
		'Cache-Control': 'no-store',
		'CDN-Cache-Control': 'no-store',
		'Cloudflare-CDN-Cache-Control': 'no-store',
	});
	applySecurityHeaders(headers);
	return new Response(null, { status, headers });
}

function canonicalHostRedirect(request: Request, url: URL): Response | null {
	const host = requestHost(request, url);
	const proto = getClientProtocol(request, url);

	// Never redirect the canonical apex over HTTPS (prevents self-redirect loops on sitemaps).
	if (host === CANONICAL_HOST && proto === 'https') {
		return null;
	}

	// Serve sitemap XML directly on www (do not 301 to apex — breaks www URL-prefix GSC properties).
	if (host === WWW_HOST && proto === 'https' && isSitemapRelatedPath(url.pathname)) {
		return null;
	}

	const isLegacy = LEGACY_HOSTS.has(host);
	const isWww = host === WWW_HOST || url.hostname === WWW_HOST;
	const needsHttps =
		proto !== 'https' && (host === CANONICAL_HOST || host === WWW_HOST || isLegacy);

	if (!isLegacy && !isWww && !needsHttps) return null;

	const mappedPath = resolvePathRedirect(url.pathname) ?? url.pathname;
	const target = new URL(mappedPath + url.search, CANONICAL_ORIGIN);
	if (target.href === url.href) return null;

	return redirectResponse(target.toString());
}

async function fetchSitemapAsset(env: Env, pathname: string): Promise<Response> {
	// Pathname-only fetch — hostname is ignored by the ASSETS binding.
	const assetRequest = new Request(new URL(pathname, 'https://assets.local'));
	const response = await env.ASSETS.fetch(assetRequest);
	const upstreamType = response.headers.get('Content-Type') || '';

	if (!response.ok || upstreamType.includes('text/html')) {
		const headers = new Headers();
		headers.set('Content-Type', 'text/plain; charset=utf-8');
		applySecurityHeaders(headers, { html: false, minimal: true });
		return new Response('Sitemap not found', { status: 404, headers });
	}

	// Fresh headers — do not copy ASSETS/_headers (duplicate Content-Type breaks browsers + GSC).
	const headers = new Headers();
	headers.set('Content-Type', 'application/xml; charset=utf-8');
	headers.set('Cache-Control', 'public, max-age=3600, must-revalidate');
	applySecurityHeaders(headers, { html: false, minimal: true });
	return new Response(response.body, {
		status: response.status,
		statusText: response.statusText,
		headers,
	});
}

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		const url = new URL(request.url);

		const hostRedirect = canonicalHostRedirect(request, url);
		if (hostRedirect) return hostRedirect;

		if (isBrandStudioPath(url.pathname)) {
			const notFoundUrl = new URL('/404.html', url.origin);
			const notFound = await env.ASSETS.fetch(new Request(notFoundUrl, request));
			const headers = new Headers(notFound.headers);
			applySecurityHeaders(headers, { html: true });
			return new Response(notFound.body, { status: 200, headers });
		}

		const host = requestHost(request, url);

		// Normalize /Sitemap.xml → /sitemap.xml before redirect/asset handling.
		if (isSitemapRelatedPath(url.pathname) && url.pathname !== url.pathname.toLowerCase()) {
			const target = new URL(
				url.pathname.toLowerCase() + url.search,
				redirectOrigin(host, url.pathname),
			);
			return redirectResponse(target.toString());
		}

		// Legacy sitemap URLs (sitemap-index.xml, sitemap-0.xml, trailing slashes) before asset fetch.
		const pathRedirect = resolvePathRedirect(url.pathname);
		if (pathRedirect) {
			const target = new URL(pathRedirect + url.search, redirectOrigin(host, url.pathname));
			return redirectResponse(target.toString());
		}

		if (isBuiltSitemapPath(url.pathname)) {
			return fetchSitemapAsset(env, url.pathname);
		}

		const response = await env.ASSETS.fetch(request);
		const headers = new Headers(response.headers);
		const contentType = headers.get('Content-Type') || '';
		const isHtml = contentType.includes('text/html');
		applySecurityHeaders(headers, { html: isHtml });

		return new Response(response.body, {
			status: response.status,
			statusText: response.statusText,
			headers,
		});
	},
};
