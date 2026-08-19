#!/usr/bin/env node
/**
 * Guardrails so production Worker never 301-loops sitemap.xml on the canonical host.
 */
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CANONICAL = 'dbdcheats.org';

function read(rel) {
	return readFileSync(path.join(ROOT, rel), 'utf8');
}

function fail(msg) {
	console.error(`✗ ${msg}`);
	process.exitCode = 1;
}

function ok(msg) {
	console.log(`✓ ${msg}`);
}

function extractLegacyHosts(src) {
	const block = src.match(/LEGACY_HOSTS\s*=\s*new Set\(\[([\s\S]*?)\]\)/);
	if (!block) return null;
	return [...block[1].matchAll(/'([^']+)'/g)].map((m) => m[1]);
}

const workerSrc = read('src/worker.ts');
const middlewareSrc = read('functions/_middleware.js');

for (const [label, src] of [
	['src/worker.ts', workerSrc],
	['functions/_middleware.js', middlewareSrc],
]) {
	const hosts = extractLegacyHosts(src);
	if (!hosts) {
		fail(`${label}: could not parse LEGACY_HOSTS`);
		continue;
	}
	if (hosts.includes(CANONICAL) || hosts.includes(`www.${CANONICAL}`)) {
		fail(`${label}: LEGACY_HOSTS must not include ${CANONICAL} (causes sitemap redirect loop)`);
	} else {
		ok(`${label}: canonical host excluded from LEGACY_HOSTS`);
	}
}

if (!workerSrc.includes('host === CANONICAL_HOST && proto === \'https\'')) {
	fail('src/worker.ts: missing canonical apex HTTPS early-return (sitemap loop guard)');
} else {
	ok('src/worker.ts: canonical apex HTTPS early-return present');
}

if (!workerSrc.includes('resolveSitemapAssetPath(url.pathname)')) {
	fail('src/worker.ts: must resolve sitemap aliases before any redirects');
} else {
	ok('src/worker.ts: resolves sitemap aliases before redirects');
}

const serveIdx = workerSrc.indexOf('const sitemapAsset = resolveSitemapAssetPath(url.pathname)');
const hostIdx = workerSrc.indexOf('const hostRedirect = canonicalHostRedirect(request, url)');
if (serveIdx === -1 || hostIdx === -1 || serveIdx > hostIdx) {
	fail('src/worker.ts: sitemap asset fetch must run before canonicalHostRedirect');
} else {
	ok('src/worker.ts: sitemap served before host/path redirects (avoids GSC HTTP 301)');
}

if (!workerSrc.includes('WWW_HOST && proto === \'https\' && isSitemapRelatedPath')) {
	fail('src/worker.ts: www host must serve sitemap XML directly for GSC URL-prefix properties');
} else {
	ok('src/worker.ts: www serves sitemap paths without apex redirect');
}

if (!middlewareSrc.includes('host === APEX_HOST && proto === \'https\'')) {
	fail('functions/_middleware.js: missing canonical apex HTTPS early-return');
} else {
	ok('functions/_middleware.js: canonical apex HTTPS early-return present');
}

if (process.exitCode) {
	process.exit(process.exitCode);
}

console.log('Worker sitemap redirect guards OK.');
