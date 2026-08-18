import { access, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

/** Custom DBD hero art — survivors, campfire, Trapper (Supabase CDN). */
const HERO_URL =
	'https://boqgsoiwnpbisvrxulbe.supabase.co/storage/v1/object/public/dbd/ChatGPT%20Image%20Aug%2017,%202026,%2007_41_23%20PM.png';
const SOURCE_FILE = path.resolve('public/images/dbd-hero-source.png');
const imagesDir = path.resolve('public/images');
const HERO_WEBP = { quality: 82, effort: 6, smartSubsample: true };

/** Match homepage hero bar — same wide banner ratio as before (3.15:1). */
const BANNER_RATIO = 3.15;

/** Letterbox padding when source art is taller than the banner (matches .hero background / canvas). */
const BANNER_BG = { r: 7, g: 8, b: 11, alpha: 1 };

async function loadHeroBuffer() {
	try {
		await access(SOURCE_FILE);
		console.log(`Using local hero source: ${SOURCE_FILE}`);
		return readFile(SOURCE_FILE);
	} catch {
		console.log(`Fetching hero source: ${HERO_URL}`);
		const bytes = await fetch(HERO_URL, {
			headers: { 'User-Agent': 'Mozilla/5.0 (compatible; TheDbdCheatsSite/1.0)' },
		}).then((r) => {
			if (!r.ok) throw new Error(`HTTP ${r.status}`);
			return r.arrayBuffer();
		});
		const heroBuffer = Buffer.from(bytes);
		await writeFile(SOURCE_FILE, heroBuffer);
		console.log(`Saved source → ${SOURCE_FILE}`);
		return heroBuffer;
	}
}

const heroBuffer = await loadHeroBuffer();

function bannerHeight(width) {
	return Math.round(width / BANNER_RATIO);
}

for (const width of [640, 1024, 1536]) {
	const height = bannerHeight(width);
	const webp = await sharp(heroBuffer)
		.resize(width, height, { fit: 'contain', position: 'centre', background: BANNER_BG })
		.webp(HERO_WEBP)
		.toBuffer();
	await writeFile(path.join(imagesDir, `dbd-cheats-hero-${width}w.webp`), webp);
	console.log(`✓ dbd-cheats-hero-${width}w.webp (${width}x${height}, ${Math.round(webp.length / 1024)}KB)`);
}

const canonicalHeight = bannerHeight(1024);
const canonical = await sharp(heroBuffer)
	.resize(1024, canonicalHeight, { fit: 'contain', position: 'centre', background: BANNER_BG })
	.webp(HERO_WEBP)
	.toBuffer();

for (const name of ['dbd-cheats-hero.webp', 'dbd-hero-banner.webp', 'hero-banner.webp']) {
	await writeFile(path.join(imagesDir, name), canonical);
}

await writeFile(
	path.join(imagesDir, 'dbd-cheats-hero.png'),
	await sharp(heroBuffer)
		.resize(1024, canonicalHeight, { fit: 'contain', position: 'centre', background: BANNER_BG })
		.png({ compressionLevel: 9 })
		.toBuffer(),
);

console.log(`Done — hero banner ${BANNER_RATIO}:1 (1024x${canonicalHeight})`);
