import { access, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

/** Custom DBD hero art — survivors, campfire, Trapper (Supabase CDN). */
const HERO_URL =
	'https://boqgsoiwnpbisvrxulbe.supabase.co/storage/v1/object/public/dbd/ChatGPT%20Image%20Aug%2017,%202026,%2007_41_23%20PM.png';
const SOURCE_FILE = path.resolve('public/images/dbd-hero-source.png');
const imagesDir = path.resolve('public/images');
const HERO_WEBP = { quality: 82, effort: 6, smartSubsample: true };

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
const meta = await sharp(heroBuffer).metadata();
const nativeWidth = meta.width ?? 1672;
const nativeHeight = meta.height ?? 941;

function scaledHeight(width) {
	return Math.round((nativeHeight / nativeWidth) * width);
}

for (const width of [640, 1024, 1536]) {
	const height = scaledHeight(width);
	const webp = await sharp(heroBuffer)
		.resize(width, height, { fit: 'inside', withoutEnlargement: true })
		.webp(HERO_WEBP)
		.toBuffer();
	await writeFile(path.join(imagesDir, `dbd-cheats-hero-${width}w.webp`), webp);
	console.log(`✓ dbd-cheats-hero-${width}w.webp (${width}x${height}, ${Math.round(webp.length / 1024)}KB)`);
}

const canonicalWidth = 1024;
const canonicalHeight = scaledHeight(canonicalWidth);
const canonical = await sharp(heroBuffer)
	.resize(canonicalWidth, canonicalHeight, { fit: 'inside', withoutEnlargement: true })
	.webp(HERO_WEBP)
	.toBuffer();

for (const name of ['dbd-cheats-hero.webp', 'dbd-hero-banner.webp', 'hero-banner.webp']) {
	await writeFile(path.join(imagesDir, name), canonical);
}

await writeFile(
	path.join(imagesDir, 'dbd-cheats-hero.png'),
	await sharp(heroBuffer)
		.resize(canonicalWidth, canonicalHeight, { fit: 'inside', withoutEnlargement: true })
		.png({ compressionLevel: 9 })
		.toBuffer(),
);

console.log(`Done — native hero ${nativeWidth}x${nativeHeight} (canonical ${canonicalWidth}x${canonicalHeight})`);
