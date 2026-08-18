/**
 * Replace all non-hero site screenshots from Supabase PNG uploads.
 * Keeps homepage hero assets (dbd-hero-source.png, dbd-cheats-hero*) untouched.
 */
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const BASE =
	'https://boqgsoiwnpbisvrxulbe.supabase.co/storage/v1/object/public/dbd/';

/** Nine user-provided Supabase screenshots (Aug 17 2026). */
const SOURCE_FILES = [
	'Screenshot%202026-08-17%20200326.png',
	'Screenshot%202026-08-17%20200334.png',
	'Screenshot%202026-08-17%20200343.png',
	'Screenshot%202026-08-17%20200351.png',
	'Screenshot%202026-08-17%20200432.png',
	'Screenshot%202026-08-17%20200443.png',
	'Screenshot%202026-08-17%20200536.png',
	'Screenshot%202026-08-17%20200632.png',
	'Screenshot%202026-08-17%20200646.png',
];

const imagesDir = path.resolve('public/images');
const tmpDir = path.resolve('tmp/dbd-user-screenshots');

const CONTENT_WIDTHS = [480, 960];
const WEBP = { quality: 78, effort: 6, smartSubsample: true };

/** Legacy filenames copied from canonical screenshot webp bytes. */
const LEGACY_MAP = {
	'dbd-screenshot-02': ['dbd-cheats-esp.webp'],
	'dbd-screenshot-03': ['dbd-cheats-wallhack.webp'],
	'dbd-screenshot-04': ['dbd-cheats-aimbot.webp'],
	'dbd-screenshot-05': ['dbd-cheats-aimbot-view.webp'],
	'dbd-screenshot-06': ['dbd-cheats-radar.webp'],
	'dbd-screenshot-07': ['dbd-cheats-match.webp', 'dbd-cheats-session.webp'],
	'dbd-screenshot-08': ['dbd-cheats-combat.webp'],
	'dbd-screenshot-09': ['dbd-esp-player-tags.webp', 'dbd-esp-radar.webp'],
	'dbd-screenshot-10': ['dbd-aimbot-skeleton.webp', 'dbd-aimbot-sniper.webp'],
	'dbd-screenshot-11': ['dbd-extract-fight.webp'],
	'dbd-screenshot-12': ['dbd-chase-combat.webp', 'dbd-growth-run-combat.webp'],
	'dbd-screenshot-13': ['dbd-chase-mode.webp', 'dbd-growth-run-mode.webp'],
	'dbd-screenshot-14': ['dbd-verdansk-map.webp'],
	'dbd-screenshot-15': ['dbd-wallhack-skeleton.webp'],
};

async function downloadSources() {
	await mkdir(tmpDir, { recursive: true });
	const buffers = [];

	for (let i = 0; i < SOURCE_FILES.length; i += 1) {
		const url = BASE + SOURCE_FILES[i];
		const res = await fetch(url, {
			headers: { 'User-Agent': 'Mozilla/5.0 (compatible; DBDCheatsSite/1.0)' },
		});
		if (!res.ok) throw new Error(`Download failed (${url}): HTTP ${res.status}`);
		const buffer = Buffer.from(await res.arrayBuffer());
		const localName = `source-${String(i + 1).padStart(2, '0')}.png`;
		await writeFile(path.join(tmpDir, localName), buffer);
		buffers.push(buffer);
		console.log(`✓ downloaded ${localName} (${Math.round(buffer.length / 1024)}KB)`);
	}

	return buffers;
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

async function writeScreenshotSet(sourceBuffer, baseName) {
	const outputs = [];
	let canonical = null;

	for (const width of CONTENT_WIDTHS) {
		const file = `${baseName}-${width}w.webp`;
		const webp = await encodeWebp(sourceBuffer, width);
		await writeFile(path.join(imagesDir, file), webp);
		outputs.push({ file, bytes: webp.length });
	}

	canonical = await encodeWebp(sourceBuffer, 960);
	await writeFile(path.join(imagesDir, `${baseName}.webp`), canonical);
	outputs.push({ file: `${baseName}.webp`, bytes: canonical.length });

	return { outputs, canonical };
}

await mkdir(imagesDir, { recursive: true });

console.log('Downloading 9 Supabase screenshots…');
const sources = await downloadSources();

let totalBytes = 0;
const canonicalByBase = {};

for (let n = 1; n <= 15; n += 1) {
	const num = String(n).padStart(2, '0');
	const base = `dbd-screenshot-${num}`;
	const source = sources[(n - 1) % sources.length];

	console.log(`Processing ${base} (source ${((n - 1) % sources.length) + 1})…`);
	const { outputs, canonical } = await writeScreenshotSet(source, base);
	canonicalByBase[base] = canonical;

	for (const { file, bytes } of outputs) {
		totalBytes += bytes;
		console.log(`  ✓ ${file} (${Math.round(bytes / 1024)}KB)`);
	}

	for (const name of LEGACY_MAP[base] ?? []) {
		await writeFile(path.join(imagesDir, name), canonical);
		console.log(`  → ${name}`);
	}
}

console.log(`\nDone — 15 screenshot slots from 9 sources (~${Math.round(totalBytes / 1024)}KB webp)`);
console.log('Hero + logo assets were not modified.');
