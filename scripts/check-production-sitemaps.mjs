#!/usr/bin/env node
/** Quick live check of production sitemap fetchability (for GSC debugging). */
const SITE = 'https://dbdcheats.org';

function fail(msg) {
	console.error(`✗ ${msg}`);
	process.exitCode = 1;
}

function ok(msg) {
	console.log(`✓ ${msg}`);
}

async function head(path) {
	const res = await fetch(`${SITE}${path}`, {
		headers: { 'User-Agent': 'Googlebot/2.1 (+http://www.google.com/bot.html)' },
		redirect: 'follow',
	});
	return res;
}

const indexRes = await head('/sitemap.xml');
const ct = indexRes.headers.get('content-type') || '';
const corp = indexRes.headers.get('cross-origin-resource-policy');
const csp = indexRes.headers.get('content-security-policy');

if (!indexRes.ok) fail(`sitemap.xml HTTP ${indexRes.status}`);
else ok(`sitemap.xml HTTP ${indexRes.status}`);

if (!ct.includes('application/xml')) fail(`sitemap.xml Content-Type is ${ct}`);
else ok(`sitemap.xml Content-Type: ${ct.split(';')[0]}`);

if (corp === 'same-origin') {
	fail('sitemap.xml has Cross-Origin-Resource-Policy: same-origin (can block GSC fetch)');
} else {
	ok('sitemap.xml has no restrictive CORP header');
}

if (csp) fail('sitemap.xml should not include Content-Security-Policy');
else ok('sitemap.xml has no CSP header');

const indexXml = await indexRes.text();
if (!indexXml.includes('<sitemapindex')) fail('sitemap.xml is not a sitemap index');
else ok('sitemap.xml body is valid sitemap index XML');

const childLocs = [...indexXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
let childFails = 0;
for (const loc of childLocs) {
	const r = await fetch(loc, {
		headers: { 'User-Agent': 'Googlebot/2.1 (+http://www.google.com/bot.html)' },
	});
	const childCt = r.headers.get('content-type') || '';
	const childCorp = r.headers.get('cross-origin-resource-policy');
	if (!r.ok || !childCt.includes('application/xml') || childCorp === 'same-origin') {
		childFails += 1;
		console.error(`✗ child ${loc} status=${r.status} ct=${childCt} corp=${childCorp ?? 'none'}`);
	}
}
if (childFails === 0) ok(`All ${childLocs.length} index child sitemaps fetch OK for Googlebot`);
else fail(`${childFails} child sitemap(s) failed Googlebot fetch checks`);

if (process.exitCode) process.exit(process.exitCode);
console.log('\nProduction sitemap fetch checks passed.');
