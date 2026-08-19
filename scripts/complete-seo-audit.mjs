#!/usr/bin/env node
/**
 * Completes dead-by-daylight-cheats SEO audit: add missing pages, fix leftovers, strip Zadeyo from meta.
 * Run: node scripts/complete-seo-audit.mjs
 */
import { readFile, writeFile, mkdir, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const NODE = 'C:\\Program Files\\nodejs\\node.exe';

const EXTRA_PAGES = [
	{ id: 'hacks', dir: 'dead-by-daylight-cheats', pageId: 'hacks' },
	{ id: 'cheat-download', dir: 'dbd-cheat-download', pageId: 'cheat-download' },
	{ id: 'mod-menu', dir: 'dbd-mod-menu', pageId: 'mod-menu' },
	{ id: 'soft-aim', dir: 'dbd-soft-aim', pageId: 'soft-aim' },
	{ id: 'best-cheats', dir: 'best-dbd-cheats', pageId: 'best-cheats' },
	{ id: 'aimbot-hack', dir: 'dbd-aimbot-hack', pageId: 'aimbot-hack' },
	{ id: 'esp-hack', dir: 'dbd-esp-hack', pageId: 'esp-hack' },
	{ id: 'unlock-all', dir: 'dbd-unlock-all', pageId: 'unlock-all' },
];

const GLOBAL_REPLACEMENTS = [
	[/dbd-dbd/g, 'dbd'],
	[/eac-bypass-dbd/g, 'eac-bypass'],
	[/Dead by Daylight/g, 'Dead by Daylight'],
	[/Dead by Daylight/g, 'Dead by Daylight'],
	[/Call of Duty/g, 'Dead by Daylight'],
	[/Dead by Daylight Wallhack/g, 'Dead by Daylight Wallhack'],
	[/Dead by Daylight Radar Hack/g, 'Dead by Daylight Radar Hack'],
	[/Dead by Daylight Cheat Features/g, 'Dead by Daylight Cheat Features'],
	[/Dead by Daylight Cheat Pricing/g, 'Dead by Daylight Cheat Pricing'],
	[/Dead by Daylight Cheat Setup/g, 'Dead by Daylight Cheat Setup'],
	[/Dead by Daylight Cheat Status/g, 'Dead by Daylight Cheat Status'],
	[/Dead by Daylight Cheat Support/g, 'Dead by Daylight Cheat Support'],
	[/Dead by Daylight team chase/g, 'Dead by Daylight team chase'],
	[/Dead by Daylight team builder/g, 'Dead by Daylight loadout builder'],
	[/Dead by Daylight store header/g, 'Dead by Daylight header'],
	[/Dead by Daylight wasteland combat/g, 'Dead by Daylight battle royale combat'],
	[/Dead by Daylight loadout builder/g, 'Dead by Daylight loadout builder'],
	[/Dead by Daylight pricing/g, 'Dead by Daylight pricing'],
	[/Dead by Daylight Easy Anti-Cheat/g, 'Dead by Daylight Easy Anti-Cheat'],
	[/on Dead by Daylight/g, 'on Dead by Daylight'],
	[/for Dead by Daylight/g, 'for Dead by Daylight'],
	[/Dead by Daylight guides/g, 'Dead by Daylight guides'],
	[/Dead by Daylight guide/g, 'Dead by Daylight guide'],
	[/Dead by Daylight hileleri/g, 'Dead by Daylight hileleri'],
	[/Dead by Daylight hile/g, 'Dead by Daylight hile'],
	[/Dead by Daylight hileleri/g, 'Dead by Daylight hileleri'],
	[/cheatów Dead by Daylight/g, 'cheatów Dead by Daylight'],
	[/cheat Dead by Daylight/g, 'cheat Dead by Daylight'],
	[/cheats Dead by Daylight/g, 'cheats Dead by Daylight'],
	[/trucos Dead by Daylight/g, 'trucos Dead by Daylight'],
	[/triche Dead by Daylight/g, 'triche Dead by Daylight'],
	[/trucchi Dead by Daylight/g, 'trucchi Dead by Daylight'],
	[/Wallhack Dead by Daylight/g, 'Dead by Daylight Wallhack'],
	[/cheat Dead by Daylight undetected/g, 'cheat Dead by Daylight undetected'],
	[/cheats Dead by Daylight undetected/g, 'cheats Dead by Daylight undetected'],
	[/trial map beams/g, 'skill-check AR beams'],
	[/chase room clears/g, 'close-quarters room clears'],
	[/trial map and Urzikstan/g, 'trial map and chase'],
	[/trial map, Urzikstan/g, 'trial map, chase'],
	[/trial and chase/g, 'trial and chase'],
	[/Activision's anti-cheat/g, "Epic Games' anti-cheat"],
	[/Activision anti-cheat/g, 'Epic Games anti-cheat'],
	[/Activision ships/g, 'Epic Games ships'],
	[/Activision security/g, 'Epic Games security'],
	[/Activision bans/g, 'Epic Games bans'],
	[/Activision/g, 'Epic Games'],
	[/eac/gi, 'eac'],
	[/Easy Anti-Cheat/g, 'Easy Anti-Cheat'],
	[/dead-by-daylight-cheats/g, 'dead-by-daylight-cheats'],
	[/the-dbd/g, 'dbd'],
	[/Undetected Wallhack for Call of Duty/g, 'Undetected Wallhack for Dead by Daylight'],
	[/How ESP wallhack, radar, and Aimbot rebuild after Call of Duty anti-cheat/g,
		'How ESP wallhack, radar, and Aimbot rebuild after Dead by Daylight anti-cheat'],
];

/** Remove Zadeyo from meta description/title strings only */
function stripZadeyoFromMeta(text) {
	return text
		.replace(/\s*[—–-]\s*checkout via Zadeyo\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout en Zadeyo\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout via Zadeyo\.?/gi, '.')
		.replace(/\s*with Zadeyo checkout\.?/gi, '.')
		.replace(/\s*via Zadeyo checkout\.?/gi, '.')
		.replace(/\s*Checkout via Zadeyo\.?/gi, '')
		.replace(/\s*Zadeyo checkout,?\s*/gi, ' ')
		.replace(/\s*Zadeyo delivery\.?/gi, 'instant digital delivery.')
		.replace(/\s*and Zadeyo delivery\.?/gi, ' and instant digital delivery.')
		.replace(/\|\s*Instant Zadeyo Delivery/g, '| Instant Digital Delivery')
		.replace(/Buy on Zadeyo/g, 'Buy DBD Cheats')
		.replace(/\s{2,}/g, ' ')
		.trim();
}

async function walkFiles(dir, exts, files = []) {
	const entries = await import('node:fs/promises').then((fs) => fs.readdir(dir, { withFileTypes: true }));
	for (const e of entries) {
		if (e.name === 'node_modules' || e.name === 'dist' || e.name === '.git') continue;
		const full = path.join(dir, e.name);
		if (e.isDirectory()) await walkFiles(full, exts, files);
		else if (exts.some((x) => e.name.endsWith(x))) files.push(full);
	}
	return files;
}

async function applyGlobalFixes() {
	const targets = await walkFiles(path.join(ROOT, 'src'), ['.ts', '.astro']);
	targets.push(
		path.join(ROOT, 'scripts', 'i18n-data', 'pages-en.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'pages-i18n.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'ui-strings-part1.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'ui-strings-part2.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'phrases.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'gallery-ui.ts'),
		path.join(ROOT, 'src', 'data', 'i18n', 'gallery-ui.ts'),
		path.join(ROOT, 'functions', '_middleware.js'),
	);

	for (const file of targets) {
		try {
			await access(file);
		} catch {
			continue;
		}
		let content = await readFile(file, 'utf8');
		const original = content;
		for (const [pattern, replacement] of GLOBAL_REPLACEMENTS) {
			content = content.replace(pattern, replacement);
		}
		if (file.endsWith('pages-en.mjs')) {
			// Strip Zadeyo from description: and title: lines
			content = content.replace(/(description:\s*['"])([^'"]+)(['"])/g, (_, pre, body, post) =>
				pre + stripZadeyoFromMeta(body) + post,
			);
			content = content.replace(/(title:\s*['"])([^'"]+)(['"])/g, (_, pre, body, post) =>
				pre + stripZadeyoFromMeta(body) + post,
			);
		}
		if (content !== original) {
			await writeFile(file, content, 'utf8');
			console.log(`Fixed: ${path.relative(ROOT, file)}`);
		}
	}
}

async function createExtraPages() {
	const template = `---
import LocalizedPage from '../../components/LocalizedPage.astro';
---

<LocalizedPage locale="en" pageId="PAGE_ID" />
`;
	for (const page of EXTRA_PAGES) {
		const dir = path.join(ROOT, 'src', 'pages', page.dir);
		await mkdir(dir, { recursive: true });
		const file = path.join(dir, 'index.astro');
		try {
			await access(file);
		} catch {
			await writeFile(file, template.replace('PAGE_ID', page.pageId), 'utf8');
			console.log(`Created page: src/pages/${page.dir}/index.astro`);
		}
	}
}

async function fixLocalesBlogUi() {
	const file = path.join(ROOT, 'src', 'data', 'i18n', 'locales.ts');
	let content = await readFile(file, 'utf8');
	content = content.replace(/Dead by Daylight guides/g, 'Dead by Daylight guides');
	content = content.replace(/Dead by Daylight guide/g, 'Dead by Daylight guide');
	content = content.replace(/Dead by Daylight hileleri/g, 'Dead by Daylight hileleri');
	content = content.replace(/Dead by Daylight hile/g, 'Dead by Daylight hile');
	content = content.replace(/cheat Dead by Daylight/g, 'cheat Dead by Daylight');
	content = content.replace(/cheats Dead by Daylight/g, 'cheats Dead by Daylight');
	content = content.replace(/trucos Dead by Daylight/g, 'trucos Dead by Daylight');
	content = content.replace(/triche Dead by Daylight/g, 'triche Dead by Daylight');
	content = content.replace(/trucchi Dead by Daylight/g, 'trucchi Dead by Daylight');
	content = content.replace(/cheatów Dead by Daylight/g, 'cheatów Dead by Daylight');
	content = content.replace(/читов Dead by Daylight/g, 'читов Dead by Daylight');
	content = content.replace(/читів Dead by Daylight/g, 'читів Dead by Daylight');
	content = content.replace(/Dead by Daylightチート/g, 'Dead by Daylightチート');
	content = content.replace(/Dead by Daylight 치트/g, 'Dead by Daylight 치트');
	content = content.replace(/Dead by Daylight作弊/g, 'Dead by Daylight作弊');
	content = content.replace(/Dead by Daylight rehberleri/g, 'Dead by Daylight rehberleri');
	content = content.replace(/Dead by Daylight gidsen/g, 'Dead by Daylight gidsen');
	content = content.replace(/Dead by Daylight průvodce/g, 'Dead by Daylight průvodce');
	content = content.replace(/Dead by Daylight guider/g, 'Dead by Daylight guider');
	content = content.replace(/Dead by Daylight related/g, 'Dead by Daylight related');
	content = content.replace(/Dead by Daylight ガイド/g, 'Dead by Daylight ガイド');
	content = content.replace(/Dead by Daylight 가이드/g, 'Dead by Daylight 가이드');
	content = content.replace(/Dead by Daylight指南/g, 'Dead by Daylight指南');
	content = content.replace(/Dead by Daylight गाइड/g, 'Dead by Daylight गाइड');
	content = content.replace(/Dead by Daylight panduan/g, 'Dead by Daylight panduan');
	content = content.replace(/Dead by Daylight คู่มือ/g, 'Dead by Daylight คู่มือ');
	content = content.replace(/Dead by Daylight hướng dẫn/g, 'Dead by Daylight hướng dẫn');
	await writeFile(file, content, 'utf8');
	console.log('Fixed locales.ts blogUi');
}

console.log('=== DBD Cheats SEO completion ===\n');
await applyGlobalFixes();
await createExtraPages();
await fixLocalesBlogUi();
console.log('\nDone. Next: update routing.ts manually, then run generate:i18n, fetch:images, build:validate');
