#!/usr/bin/env node
/**
 * Completes the-isle-hacks SEO audit: add missing pages, fix leftovers, strip Zadeyo from meta.
 * Run: node scripts/complete-seo-audit.mjs
 */
import { readFile, writeFile, mkdir, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const NODE = 'C:\\Program Files\\nodejs\\node.exe';

const EXTRA_PAGES = [
	{ id: 'hacks', dir: 'the-isle-hacks', pageId: 'hacks' },
	{ id: 'cheat-download', dir: 'isle-hack-download', pageId: 'cheat-download' },
	{ id: 'mod-menu', dir: 'isle-mod-menu', pageId: 'mod-menu' },
	{ id: 'soft-aim', dir: 'isle-soft-aim', pageId: 'soft-aim' },
	{ id: 'best-cheats', dir: 'best-isle-hacks', pageId: 'best-cheats' },
	{ id: 'aimbot-hack', dir: 'isle-aimbot-hack', pageId: 'aimbot-hack' },
	{ id: 'esp-hack', dir: 'isle-esp-hack', pageId: 'esp-hack' },
	{ id: 'unlock-all', dir: 'isle-unlock-all', pageId: 'unlock-all' },
];

const GLOBAL_REPLACEMENTS = [
	[/isle-isle/g, 'isle'],
	[/eac-bypass-isle/g, 'eac-bypass'],
	[/The Isle/g, 'The Isle'],
	[/The Isle/g, 'The Isle'],
	[/Call of Duty/g, 'The Isle'],
	[/The Isle Wallhack/g, 'The Isle Wallhack'],
	[/The Isle Radar Hack/g, 'The Isle Radar Hack'],
	[/The Isle Cheat Features/g, 'The Isle Cheat Features'],
	[/The Isle Cheat Pricing/g, 'The Isle Cheat Pricing'],
	[/The Isle Cheat Setup/g, 'The Isle Cheat Setup'],
	[/The Isle Cheat Status/g, 'The Isle Cheat Status'],
	[/The Isle Cheat Support/g, 'The Isle Cheat Support'],
	[/The Isle pack fight/g, 'The Isle pack fight'],
	[/The Isle pack builder/g, 'The Isle loadout builder'],
	[/The Isle store header/g, 'The Isle header'],
	[/The Isle wasteland combat/g, 'The Isle battle royale combat'],
	[/The Isle loadout builder/g, 'The Isle loadout builder'],
	[/The Isle pricing/g, 'The Isle pricing'],
	[/The Isle Easy Anti-Cheat/g, 'The Isle Easy Anti-Cheat'],
	[/on The Isle/g, 'on The Isle'],
	[/for The Isle/g, 'for The Isle'],
	[/The Isle guides/g, 'The Isle guides'],
	[/The Isle guide/g, 'The Isle guide'],
	[/The Isle hileleri/g, 'The Isle hileleri'],
	[/The Isle hile/g, 'The Isle hile'],
	[/The Isle hileleri/g, 'The Isle hileleri'],
	[/cheatów The Isle/g, 'cheatów The Isle'],
	[/cheat The Isle/g, 'cheat The Isle'],
	[/cheats The Isle/g, 'cheats The Isle'],
	[/trucos The Isle/g, 'trucos The Isle'],
	[/triche The Isle/g, 'triche The Isle'],
	[/trucchi The Isle/g, 'trucchi The Isle'],
	[/Wallhack The Isle/g, 'The Isle Wallhack'],
	[/cheat The Isle undetected/g, 'cheat The Isle undetected'],
	[/cheats The Isle undetected/g, 'cheats The Isle undetected'],
	[/Verdansk beams/g, 'long-range AR beams'],
	[/growth run room clears/g, 'close-quarters room clears'],
	[/Verdansk and Urzikstan/g, 'Verdansk and growth run'],
	[/Verdansk, Urzikstan/g, 'Verdansk, growth run'],
	[/session and growth run/g, 'session and growth run'],
	[/Activision's anti-cheat/g, "Epic Games' anti-cheat"],
	[/Activision anti-cheat/g, 'Epic Games anti-cheat'],
	[/Activision ships/g, 'Epic Games ships'],
	[/Activision security/g, 'Epic Games security'],
	[/Activision bans/g, 'Epic Games bans'],
	[/Activision/g, 'Epic Games'],
	[/eac/gi, 'eac'],
	[/Easy Anti-Cheat/g, 'Easy Anti-Cheat'],
	[/the-isle-hacks/g, 'the-isle-hacks'],
	[/the-isle/g, 'isle'],
	[/Undetected Wallhack for Call of Duty/g, 'Undetected Wallhack for The Isle'],
	[/How ESP wallhack, radar, and Aimbot rebuild after Call of Duty anti-cheat/g,
		'How ESP wallhack, radar, and Aimbot rebuild after The Isle anti-cheat'],
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
		.replace(/Buy on Zadeyo/g, 'Buy The Isle Hacks')
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
	content = content.replace(/The Isle guides/g, 'The Isle guides');
	content = content.replace(/The Isle guide/g, 'The Isle guide');
	content = content.replace(/The Isle hileleri/g, 'The Isle hileleri');
	content = content.replace(/The Isle hile/g, 'The Isle hile');
	content = content.replace(/cheat The Isle/g, 'cheat The Isle');
	content = content.replace(/cheats The Isle/g, 'cheats The Isle');
	content = content.replace(/trucos The Isle/g, 'trucos The Isle');
	content = content.replace(/triche The Isle/g, 'triche The Isle');
	content = content.replace(/trucchi The Isle/g, 'trucchi The Isle');
	content = content.replace(/cheatów The Isle/g, 'cheatów The Isle');
	content = content.replace(/читов The Isle/g, 'читов The Isle');
	content = content.replace(/читів The Isle/g, 'читів The Isle');
	content = content.replace(/The Isleチート/g, 'The Isleチート');
	content = content.replace(/The Isle 치트/g, 'The Isle 치트');
	content = content.replace(/The Isle作弊/g, 'The Isle作弊');
	content = content.replace(/The Isle rehberleri/g, 'The Isle rehberleri');
	content = content.replace(/The Isle gidsen/g, 'The Isle gidsen');
	content = content.replace(/The Isle průvodce/g, 'The Isle průvodce');
	content = content.replace(/The Isle guider/g, 'The Isle guider');
	content = content.replace(/The Isle related/g, 'The Isle related');
	content = content.replace(/The Isle ガイド/g, 'The Isle ガイド');
	content = content.replace(/The Isle 가이드/g, 'The Isle 가이드');
	content = content.replace(/The Isle指南/g, 'The Isle指南');
	content = content.replace(/The Isle गाइड/g, 'The Isle गाइड');
	content = content.replace(/The Isle panduan/g, 'The Isle panduan');
	content = content.replace(/The Isle คู่มือ/g, 'The Isle คู่มือ');
	content = content.replace(/The Isle hướng dẫn/g, 'The Isle hướng dẫn');
	await writeFile(file, content, 'utf8');
	console.log('Fixed locales.ts blogUi');
}

console.log('=== The Isle Hacks SEO completion ===\n');
await applyGlobalFixes();
await createExtraPages();
await fixLocalesBlogUi();
console.log('\nDone. Next: update routing.ts manually, then run generate:i18n, fetch:images, build:validate');
