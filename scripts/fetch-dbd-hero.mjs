import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

/** Official DBD main art (2022) — survivors, campfire, and killers. */
const HERO_URL =
	'https://pbs.twimg.com/media/FOExZQeXMAs5wty?format=jpg&name=4096x4096';
const imagesDir = path.resolve('public/images');
const HERO_WEBP = { quality: 82, effort: 6, smartSubsample: true };

/** Match homepage hero bar — same wide banner ratio as before (3.15:1). */
const BANNER_RATIO = 3.15;

const heroBuffer = Buffer.from(
	await fetch(HERO_URL, {
		headers: { 'User-Agent': 'Mozilla/5.0 (compatible; TheDbdCheatsSite/1.0)' },
	}).then((r) => {
		if (!r.ok) throw new Error(`HTTP ${r.status}`);
		return r.arrayBuffer();
	}),
);

function bannerHeight(width) {
	return Math.round(width / BANNER_RATIO);
}

for (const width of [640, 1024, 1536]) {
	const height = bannerHeight(width);
	const webp = await sharp(heroBuffer)
		.resize(width, height, { fit: 'cover', position: 'centre' })
		.webp(HERO_WEBP)
		.toBuffer();
	await writeFile(path.join(imagesDir, `dbd-cheats-hero-${width}w.webp`), webp);
	console.log(`✓ dbd-cheats-hero-${width}w.webp (${width}x${height}, ${Math.round(webp.length / 1024)}KB)`);
}

const canonicalHeight = bannerHeight(1024);
const canonical = await sharp(heroBuffer)
	.resize(1024, canonicalHeight, { fit: 'cover', position: 'centre' })
	.webp(HERO_WEBP)
	.toBuffer();

for (const name of ['dbd-cheats-hero.webp', 'dbd-hero-banner.webp', 'hero-banner.webp']) {
	await writeFile(path.join(imagesDir, name), canonical);
}

await writeFile(
	path.join(imagesDir, 'dbd-cheats-hero.png'),
	await sharp(heroBuffer)
		.resize(1024, canonicalHeight, { fit: 'cover', position: 'centre' })
		.png({ compressionLevel: 9 })
		.toBuffer(),
);

console.log(`Done — hero banner ${BANNER_RATIO}:1 (1024x${canonicalHeight})`);
