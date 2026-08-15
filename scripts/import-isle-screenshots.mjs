/**
 * Import The Isle gameplay screenshots from the Supabase zip bundle.
 * Writes simple crawl URLs: /images/isle-screenshot-01.webp … 15.webp
 * plus -480w / -960w responsive variants for fast page loads.
 */
import { mkdir, unlink, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const ZIP_URL =
	'https://boqgsoiwnpbisvrxulbe.supabase.co/storage/v1/object/public/isleimages/isle/the-isle-screenshots-for-cursor.zip';
const STEAM_LIBRARY_HERO =
	'https://boqgsoiwnpbisvrxulbe.supabase.co/storage/v1/object/public/isleimages/ChatGPT%20Image%20Aug%2015,%202026,%2009_04_18%20AM.png';
const imagesDir = path.resolve('public/images');
const tmpDir = path.resolve('tmp/isle-screenshots');

const CONTENT_WIDTHS = [480, 960];
const WEBP = { quality: 78, effort: 6, smartSubsample: true };
const HERO_WEBP = { quality: 82, effort: 6, smartSubsample: true };

const LEGACY_MAP = {
	'isle-screenshot-02': ['isle-hacks-esp.webp'],
	'isle-screenshot-03': ['isle-hacks-wallhack.webp'],
	'isle-screenshot-04': ['isle-hacks-aimbot.webp'],
	'isle-screenshot-05': ['isle-hacks-aimbot-view.webp'],
	'isle-screenshot-06': ['isle-hacks-radar.webp'],
	'isle-screenshot-07': ['isle-hacks-session.webp'],
	'isle-screenshot-08': ['isle-hacks-combat.webp'],
	'isle-screenshot-09': ['isle-esp-player-tags.webp', 'isle-esp-radar.webp'],
	'isle-screenshot-10': ['isle-aimbot-skeleton.webp', 'isle-aimbot-sniper.webp'],
	'isle-screenshot-11': ['isle-extract-fight.webp'],
	'isle-screenshot-12': ['isle-growth-run-combat.webp'],
	'isle-screenshot-13': ['isle-growth-run-mode.webp'],
	'isle-screenshot-14': ['isle-verdansk-map.webp'],
	'isle-screenshot-15': ['isle-wallhack-skeleton.webp'],
};

/** Drop heavy unused PNG masters left from older pipelines. */
const REMOVE_ORPHANS = [
	'isle-hacks-hero.png',
	'isle-hacks-hero-full.png',
	'isle-hacks-hero-1024w.png',
	'isle-hacks-hero-1536w.png',
	'isle-hacks-hero.tmp.png',
	'isle-hacks-esp.png',
	'isle-hacks-aimbot.png',
	'isle-hacks-wallhack.png',
	'hero-banner.png',
	'isle-hero-banner.png',
	'isle-hero-ghost.png',
	'isle-hero-ghost.webp',
	'isle-hero-ghost-2x.png',
	'isle-hero-ghost-hi.png',
	'isle-hero-source.png',
];

async function fetchZip() {
	await mkdir(tmpDir, { recursive: true });
	const zipPath = path.join(tmpDir, 'bundle.zip');
	const res = await fetch(ZIP_URL, {
		headers: { 'User-Agent': 'Mozilla/5.0 (compatible; TheIsleHacksSite/1.0)' },
	});
	if (!res.ok) throw new Error(`Download failed: HTTP ${res.status}`);
	await writeFile(zipPath, Buffer.from(await res.arrayBuffer()));
	return zipPath;
}

async function extractZip(zipPath) {
	const { execFile } = await import('node:child_process');
	const { promisify } = await import('node:util');
	const exec = promisify(execFile);
	const outDir = path.join(tmpDir, 'extracted');
	await mkdir(outDir, { recursive: true });
	await exec('unzip', ['-o', zipPath, '-d', outDir]);
	return path.join(outDir, 'the-isle-screenshots');
}

async function encodeWebp(input, width, options = WEBP) {
	const meta = await sharp(input).metadata();
	const nativeWidth = meta.width ?? width;
	const targetWidth = Math.min(width, nativeWidth);
	const height = Math.round(((meta.height ?? 595) / nativeWidth) * targetWidth);
	return sharp(input)
		.resize(targetWidth, height, { fit: 'inside', withoutEnlargement: true })
		.webp(options)
		.toBuffer();
}

async function writeScreenshotSet(pngPath, baseName) {
	const outputs = [];
	let canonical = null;

	for (const width of CONTENT_WIDTHS) {
		const file = `${baseName}-${width}w.webp`;
		const webp = await encodeWebp(pngPath, width);
		await writeFile(path.join(imagesDir, file), webp);
		outputs.push({ file, bytes: webp.length });
	}

	canonical = await encodeWebp(pngPath, 960);
	await writeFile(path.join(imagesDir, `${baseName}.webp`), canonical);
	outputs.push({ file: `${baseName}.webp`, bytes: canonical.length });

	return { outputs, canonical };
}

async function fetchSteamLibraryHero() {
	const res = await fetch(STEAM_LIBRARY_HERO, {
		headers: { 'User-Agent': 'Mozilla/5.0 (compatible; TheIsleHacksSite/1.0)' },
	});
	if (!res.ok) throw new Error(`Hero image download failed: HTTP ${res.status}`);
	return Buffer.from(await res.arrayBuffer());
}

async function writeHeroLadder(sourceBuffer) {
	const bannerHeight = (width) => Math.round(width / 3.15);

	for (const width of [640, 1024]) {
		const height = bannerHeight(width);
		const webp = await sharp(sourceBuffer)
			.resize(width, height, { fit: 'cover', position: 'centre' })
			.webp(HERO_WEBP)
			.toBuffer();
		await writeFile(path.join(imagesDir, `isle-hacks-hero-${width}w.webp`), webp);
		console.log(`  ✓ isle-hacks-hero-${width}w.webp (${Math.round(webp.length / 1024)}KB)`);
	}

	const canonical = await sharp(sourceBuffer)
		.resize(1024, bannerHeight(1024), { fit: 'cover', position: 'centre' })
		.webp(HERO_WEBP)
		.toBuffer();
	for (const name of ['isle-hacks-hero.webp', 'isle-hero-banner.webp', 'hero-banner.webp']) {
		await writeFile(path.join(imagesDir, name), canonical);
	}
}

async function cleanupOrphans() {
	for (const file of REMOVE_ORPHANS) {
		try {
			await unlink(path.join(imagesDir, file));
			console.log(`  removed orphan ${file}`);
		} catch {
			// already gone
		}
	}
}

await mkdir(imagesDir, { recursive: true });

console.log('Downloading screenshot bundle…');
const zipPath = await fetchZip();
console.log('Extracting…');
const sourceDir = await extractZip(zipPath);

let totalBytes = 0;

for (let n = 1; n <= 15; n += 1) {
	const num = String(n).padStart(2, '0');
	const base = `isle-screenshot-${num}`;
	const png = path.join(sourceDir, `${base}.png`);

	console.log(`Processing ${base}…`);
	const { outputs, canonical } = await writeScreenshotSet(png, base);
	for (const { file, bytes } of outputs) {
		totalBytes += bytes;
		console.log(`  ✓ ${file} (${Math.round(bytes / 1024)}KB)`);
	}

	for (const name of LEGACY_MAP[base] ?? []) {
		await writeFile(path.join(imagesDir, name), canonical);
	}

}

console.log('Generating hero ladder from Supabase hero…');
await writeHeroLadder(await fetchSteamLibraryHero());

console.log('\nCleaning unused heavy PNG masters…');
await cleanupOrphans();

console.log(`\nDone — 15 canonical URLs + 480w/960w variants (~${Math.round(totalBytes / 1024)}KB total webp)`);
