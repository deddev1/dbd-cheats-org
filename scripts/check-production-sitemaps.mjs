#!/usr/bin/env node
/** Live production checks — GSC fails with "HTTP Error: 301" when sitemap URLs redirect. */
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

async function expect200(label, url) {
	const res = await fetch(url, { headers: { 'User-Agent': UA }, redirect: 'manual' });
	const ct = res.headers.get('content-type') || '';
	const text = res.ok ? await res.text() : '';

	if (res.status === 301 || res.status === 302) {
		fail(`${label} returned HTTP ${res.status} (GSC error) → ${res.headers.get('location')}`);
		return;
	}
	if (!res.ok) fail(`${label} HTTP ${res.status}`);
	else ok(`${label} HTTP ${res.status} (no redirect)`);

	if (!ct.includes('application/xml')) fail(`${label} Content-Type is ${ct}`);
	else ok(`${label} Content-Type: application/xml`);

	if (!text.includes('<')) fail(`${label} body is not XML`);
}

console.log('GSC requires HTTP 200 on the submitted sitemap URL — no 301/302.\n');

await expect200('https://dbdcheats.org/sitemap.xml', `${APEX}/sitemap.xml`);
await expect200('http://dbdcheats.org/sitemap.xml', `http://dbdcheats.org/sitemap.xml`);
await expect200('https://www.dbdcheats.org/sitemap.xml', `${WWW}/sitemap.xml`);
await expect200('http://www.dbdcheats.org/sitemap.xml', `http://www.dbdcheats.org/sitemap.xml`);
await expect200('sitemap.xml trailing slash', `${APEX}/sitemap.xml/`);
await expect200('Sitemap.xml mixed case', `${APEX}/Sitemap.xml`);
await expect200('legacy sitemap-index.xml', `${APEX}/sitemap-index.xml`);
await expect200('legacy sitemap-0.xml', `${APEX}/sitemap-0.xml`);

const indexRes = await fetch(`${APEX}/sitemap.xml`, { headers: { 'User-Agent': UA } });
const childLocs = [...(await indexRes.text()).matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
let childFails = 0;
for (const loc of childLocs) {
	const r = await fetch(loc, { headers: { 'User-Agent': UA }, redirect: 'manual' });
	if (!r.ok || r.status === 301 || r.status === 302) childFails += 1;
}
if (childFails === 0) ok(`All ${childLocs.length} child sitemaps return HTTP 200`);
else fail(`${childFails} child sitemap(s) redirect or error`);

if (process.exitCode) process.exit(process.exitCode);
console.log('\nAll sitemap URLs return HTTP 200 — safe for Google Search Console.');
