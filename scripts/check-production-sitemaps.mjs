#!/usr/bin/env node
/** Live production checks for Google Search Console sitemap fetch requirements. */
const APEX = 'https://dbdcheats.org';
const WWW = 'https://www.dbdcheats.org';
const UA = 'Googlebot/2.1 (+http://www.google.com/bot.html)';

function fail(msg) {
	console.error(`✗ ${msg}`);
	process.exitCode = 1;
}

function ok(msg) {
	console.log(`✓ ${msg}`);
}

async function fetchSitemap(url, { redirect = 'follow' } = {}) {
	return fetch(url, { headers: { 'User-Agent': UA }, redirect });
}

async function checkDirectXml(label, url) {
	const res = await fetchSitemap(url);
	const ct = res.headers.get('content-type') || '';
	const corp = res.headers.get('cross-origin-resource-policy');
	const csp = res.headers.get('content-security-policy');
	const text = await res.text();

	if (!res.ok) fail(`${label} HTTP ${res.status}`);
	else ok(`${label} HTTP ${res.status}`);

	if (!ct.includes('application/xml')) fail(`${label} Content-Type is ${ct}`);
	else ok(`${label} Content-Type: application/xml`);

	if (corp === 'same-origin') fail(`${label} has CORP same-origin`);
	if (csp) fail(`${label} has Content-Security-Policy`);

	if (!text.includes('<')) fail(`${label} body is not XML`);
	else ok(`${label} returns XML body (${text.length} bytes)`);
}

async function checkRedirect(label, url, expectedLocation) {
	const res = await fetchSitemap(url, { redirect: 'manual' });
	const location = res.headers.get('location') || '';
	if (res.status < 300 || res.status >= 400) {
		fail(`${label} expected redirect, got HTTP ${res.status}`);
		return;
	}
	if (!location.startsWith(expectedLocation)) {
		fail(`${label} redirects to ${location}, expected ${expectedLocation}`);
	} else {
		ok(`${label} redirects to ${expectedLocation}`);
	}
}

console.log('Checking apex sitemap…');
await checkDirectXml('dbdcheats.org/sitemap.xml', `${APEX}/sitemap.xml`);

console.log('\nChecking www sitemap (URL-prefix GSC)…');
await checkDirectXml('www.dbdcheats.org/sitemap.xml', `${WWW}/sitemap.xml`);

console.log('\nChecking legacy sitemap URLs…');
await checkRedirect('sitemap-index.xml', `${APEX}/sitemap-index.xml`, `${APEX}/sitemap.xml`);
await checkRedirect('sitemap-0.xml', `${APEX}/sitemap-0.xml`, `${APEX}/sitemap.xml`);
await checkRedirect('www sitemap-index.xml', `${WWW}/sitemap-index.xml`, `${WWW}/sitemap.xml`);

console.log('\nChecking sitemap index children…');
const indexRes = await fetchSitemap(`${APEX}/sitemap.xml`);
const indexXml = await indexRes.text();
const childLocs = [...indexXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
let childFails = 0;
for (const loc of childLocs) {
	const r = await fetch(loc, { headers: { 'User-Agent': UA } });
	const childCt = r.headers.get('content-type') || '';
	const childCorp = r.headers.get('cross-origin-resource-policy');
	if (!r.ok || !childCt.includes('application/xml') || childCorp === 'same-origin') {
		childFails += 1;
		console.error(`✗ child ${loc} status=${r.status} ct=${childCt} corp=${childCorp ?? 'none'}`);
	}
}
if (childFails === 0) ok(`All ${childLocs.length} index child sitemaps fetch OK`);

if (process.exitCode) process.exit(process.exitCode);
console.log('\nProduction sitemap fetch checks passed.');
