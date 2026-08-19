#!/usr/bin/env node
/**
 * One-time migration: The Isle Hacks → DBD Cheats (Dead by Daylight).
 * Domain: dbdcheats.org
 * Run from project root: node scripts/adapt-dbd.mjs
 */
import { readFile, writeFile, readdir, rename } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const RENAME_PAGE_DIRS = [
	['isle-aimbot', 'dbd-aimbot'],
	['isle-esp', 'dbd-esp'],
	['isle-wallhack', 'dbd-wallhack'],
	['isle-radar-hack', 'dbd-radar-hack'],
	['undetected-isle-hacks', 'undetected-dbd-cheats'],
	['isle-hacks-2026', 'dbd-cheats-2026'],
	['the-isle-hacks', 'dead-by-daylight-cheats'],
	['isle-hack-download', 'dbd-cheat-download'],
	['isle-mod-menu', 'dbd-mod-menu'],
	['isle-soft-aim', 'dbd-soft-aim'],
	['best-isle-hacks', 'best-dbd-cheats'],
	['isle-aimbot-hack', 'dbd-aimbot-hack'],
	['isle-esp-hack', 'dbd-esp-hack'],
	['isle-unlock-all', 'dbd-unlock-all'],
];

/** Ordered replacements — specific patterns first. */
const REPLACEMENTS = [
	['https://www.theislehacks.org', 'https://www.dbdcheats.org'],
	['https://theislehacks.org', 'https://dbdcheats.org'],
	['www.theislehacks.org', 'www.dbdcheats.org'],
	['theislehacks.org', 'dbdcheats.org'],
	['support@theislehacks.org', 'support@dbdcheats.org'],
	['https://store.steampowered.com/app/376210/The_Isle/', 'https://store.steampowered.com/app/381210/Dead_by_Daylight/'],
	['store.steampowered.com/app/376210/The_Isle', 'store.steampowered.com/app/381210/Dead_by_Daylight'],
	['https://survivetheisle.com/', 'https://deadbydaylight.com/'],
	['survivetheisle.com', 'deadbydaylight.com'],
	['https://isle.fandom.com/wiki/The_Isle_Wiki', 'https://deadbydaylight.fandom.com/wiki/Dead_by_Daylight_Wiki'],
	['isle.fandom.com', 'deadbydaylight.fandom.com'],
	['/products/the-isle', '/products/dead-by-daylight'],
	['project-name=theislehacks', 'project-name=dbdcheats'],
	['name = "theislehacks"', 'name = "dbdcheats"'],
	['"name": "the-isle-hacks"', '"name": "dbd-cheats"'],
	['isle-esp-player-tags', 'dbd-esp-player-tags'],
	['isle-wallhack-skeleton', 'dbd-wallhack-skeleton'],
	['isle-aimbot-skeleton', 'dbd-aimbot-skeleton'],
	['isle-aimbot-sniper', 'dbd-aimbot-sniper'],
	['isle-esp-radar', 'dbd-esp-radar'],
	['isle-hacks-combat', 'dbd-cheats-combat'],
	['isle-hacks-wallhack', 'dbd-cheats-wallhack'],
	['isle-hacks-aimbot-view', 'dbd-cheats-aimbot-view'],
	['isle-hacks-aimbot', 'dbd-cheats-aimbot'],
	['isle-hacks-radar', 'dbd-cheats-radar'],
	['isle-hacks-hero', 'dbd-cheats-hero'],
	['isle-hacks-logo', 'dbd-cheats-logo'],
	['isle-hacks-session', 'dbd-cheats-match'],
	['isle-hacks-esp', 'dbd-cheats-esp'],
	['isle-hero-banner', 'dbd-hero-banner'],
	['isle-hero-ghost', 'dbd-hero-ghost'],
	['isle-hero-source', 'dbd-hero-source'],
	['undetected-isle-hacks', 'undetected-dbd-cheats'],
	['best-isle-hacks', 'best-dbd-cheats'],
	['isle-hack-download', 'dbd-cheat-download'],
	['isle-hacks-2026', 'dbd-cheats-2026'],
	['isle-radar-hack', 'dbd-radar-hack'],
	['isle-aimbot-hack', 'dbd-aimbot-hack'],
	['isle-esp-hack', 'dbd-esp-hack'],
	['isle-unlock-all', 'dbd-unlock-all'],
	['isle-soft-aim', 'dbd-soft-aim'],
	['isle-mod-menu', 'dbd-mod-menu'],
	['isle-wallhack', 'dbd-wallhack'],
	['the-isle-hacks', 'dead-by-daylight-cheats'],
	['isle-aimbot', 'dbd-aimbot'],
	['isle-esp', 'dbd-esp'],
	['IsleHacksSite', 'DbdCheatsSite'],
	['Isle Intel', 'DBD Intel'],
	['Isle Hacks', 'DBD Cheats'],
	['The Isle Hacks', 'DBD Cheats'],
	['Isle ESP', 'DBD ESP'],
	['Isle Aimbot', 'DBD Aimbot'],
	['Isle esp', 'dbd esp'],
	['Isle aimbot', 'dbd aimbot'],
	['Isle wallhack', 'dbd wallhack'],
	['Isle radar', 'dbd radar'],
	['isle wallhack', 'dbd wallhack'],
	['the isle hacks', 'dbd cheats'],
	['the isle cheats', 'dbd cheats'],
	['the isle hack', 'dbd cheat'],
	['undetected isle hacks', 'undetected dbd cheats'],
	['best isle hacks', 'best dbd cheats'],
	['Isla Spire, forests, and river zones', 'MacMillan Estate, Autohaven, and Coldwind Farm'],
	['Isla Spire, forests and river zones', 'MacMillan Estate, Autohaven and Coldwind Farm'],
	['herbivore and carnivore survival sessions', 'survivor and killer trials'],
	['herbivore and carnivore survival sessions', 'survivor and killer trials'],
	['herbivore & carnivore', 'survivor & killer'],
	['survival sessions', 'trials'],
	['survival session', 'trial'],
	['growth runs', 'chases'],
	['growth run', 'chase'],
	['players and wild dinosaurs', 'survivors and killers'],
	['players, wild dinosaurs', 'survivors, killers'],
	['wild dinosaurs', 'killers'],
	['nest and carcass markers', 'generator and hook markers'],
	['nest markers', 'generator markers'],
	['nest cues', 'generator cues'],
	['nest zones', 'hook zones'],
	['nest fights', 'chase fights'],
	['nest fight', 'chase fight'],
	['near nests and water', 'near generators and hooks'],
	['Nests', 'Generators'],
	['nests', 'generators'],
	['growth timer', 'trial timer'],
	['fresh carcasses', 'high-value objectives'],
	['hunting routes', 'loop routes'],
	['carcass markers', 'generator markers'],
	['carcass ESP', 'generator ESP'],
	['Carcass and water ESP', 'Generator and hook ESP'],
	['carcasses worth the detour', 'generators worth the detour'],
	['spawn rules', 'trial rules'],
	['growth tools', 'trial tools'],
	['The Isle team', 'Behaviour Interactive'],
	['last major update', 'last chapter update'],
	['this update cycle', 'this chapter cycle'],
	['Long-range', 'Skill-check'],
	['long-range', 'skill-check'],
	['Isla Spire', 'MacMillan Estate'],
	['in forest zones', 'on Autohaven Wreckers'],
	['in high-traffic zones', 'in high-traffic tiles'],
	['hunt', 'chase'],
	['hunts', 'chases'],
	['survival flow', 'trial flow'],
	['session rounds', 'trial rounds'],
	['survival tips', 'trial tips'],
	['island map', 'trial map'],
	['spawn in faster', 'queue faster'],
	['before you spawn in', 'before you queue'],
	['you spawn in', 'you queue'],
	['spawn in', 'queue'],
	[' a session', ' a trial'],
	[' sessions', ' trials'],
	[' session', ' trial'],
	['sessions', 'trials'],
	['session', 'trial'],
	['update cycle', 'chapter cycle'],
	['The Isle on Steam', 'Dead by Daylight on Steam'],
	['The Isle', 'Dead by Daylight'],
	['what-are-isle-hacks', 'what-are-dbd-cheats'],
	['are-isle-hacks-undetected-in-2026', 'are-dbd-cheats-undetected-in-2026'],
	['herbivore-and-carnivore-sessions', 'survivor-and-killer-trials'],
	['what-is-an-isle-wallhack', 'what-is-a-dbd-wallhack'],
	['does-isle-hacks-include-radar-hack', 'does-dbd-cheats-include-radar-hack'],
	['eac-anti-cheat-and-isle-hacks', 'eac-anti-cheat-and-dbd-cheats'],
	['buy-undetected-isle-hacks-windows-pc', 'buy-undetected-dbd-cheats-windows-pc'],
	['isle-soft-aim-review', 'dbd-soft-aim-review'],
	['isle-esp-growth-run-review', 'dbd-esp-chase-review'],
	['isle-cloud-dma-review', 'dbd-cloud-dma-review'],
	['isle-hack-setup-review', 'dbd-cheat-setup-review'],
	['isle-carcass-esp-review', 'dbd-generator-esp-review'],
	['isle-soft-aim-session-review', 'dbd-soft-aim-trial-review'],
	['isle-radar-hack-review', 'dbd-radar-hack-review'],
	['isle-eac-update-review', 'dbd-eac-update-review'],
	['isle-sniper-soft-aim-review', 'dbd-skill-check-soft-aim-review'],
	['xKrypt0_Isle', 'xKrypt0_DBD'],
	['vanLifeIsle', 'vanLifeDBD'],
	['isleImages', 'dbdImages'],
	["from './isle'", "from './dbd'"],
	["from '../data/isle'", "from '../data/dbd'"],
	["from '../../data/isle'", "from '../../data/dbd'"],
	['fetch-isle-images', 'fetch-dbd-images'],
	['isle-hack-overlays', 'dbd-hack-overlays'],
	['fix-isle-copy', 'fix-dbd-copy'],
	['adapt-theisle', 'adapt-dbd'],
	['trucos-isla', 'trucos-dbd'],
	['triche-isla', 'triche-dbd'],
	['cheats-isla', 'cheats-dbd'],
	['trucchi-isla', 'trucchi-dbd'],
	['cheaty-isla', 'cheaty-dbd'],
	['chity-isla', 'chity-dbd'],
	['chitov-isla', 'chitov-dbd'],
	['chitiv-isla', 'chitiv-dbd'],
	['cheatow-isla', 'cheatow-dbd'],
	['hile-isla', 'hile-dbd'],
	['isle-hile', 'dbd-hile'],
	['isle-esp-chity', 'dbd-esp-chity'],
	['isle-aimbot-chity', 'dbd-aimbot-chity'],
	['unentdeckte-isle-hacks', 'unentdeckte-dbd-cheats'],
	['cheats-isla-indetectaveis', 'cheats-dbd-indetectaveis'],
	['trucchi-isla-indetectabili', 'trucchi-dbd-indetectabili'],
	['niewykrywalne-cheats-isla', 'niewykrywalne-cheats-dbd'],
	['nedecektiruemye-chity-isla', 'nedecektiruemye-chity-dbd'],
	['tespit-edilemeyen-isle-hileleri', 'tespit-edilemeyen-dbd-hileleri'],
	['nedecektovani-chity-isla', 'nedecektovani-chity-dbd'],
	['cheats-isla-nedetectabile', 'cheats-dbd-nedetectabile'],
	['basta-isle-hacks', 'basta-dbd-cheats'],
	['isle-hacks-funktionen', 'dbd-cheats-funktionen'],
	['isle-hacks-functies', 'dbd-cheats-functies'],
	['caracteristicas-trucos-isla', 'caracteristicas-trucos-dbd'],
	['fonctionnalites-triche-isla', 'fonctionnalites-triche-dbd'],
	['recursos-cheats-isla', 'recursos-cheats-dbd'],
	['bestislecheats.com', 'bestdbdcheats.com'],
	['theislehack.org', 'dbdcheat.org'],
	['isle-screenshot', 'dbd-screenshot'],
	['per-species profiles', 'per-killer profiles'],
	['dinosaur tier list', 'killer tier list'],
	['dinosaur survival', 'horror survival'],
	['dinosaur', 'killer'],
	['herbivore', 'survivor'],
	['carnivore', 'killer'],
	['isle', 'dbd'],
];

const TEXT_EXTENSIONS = new Set([
	'.ts', '.tsx', '.js', '.mjs', '.astro', '.css', '.json', '.toml', '.txt', '.md', '.mdc',
]);

const SKIP_DIRS = new Set(['node_modules', 'dist', '.git', '.astro']);
const SKIP_FILES = new Set([
	'adapt-warzone.mjs',
	'adapt-fortnite.mjs',
	'adapt-tarkov.mjs',
	'adapt-theisle.mjs',
	'adapt-dbd.mjs',
]);

async function walk(dir, files = []) {
	const entries = await readdir(dir, { withFileTypes: true });
	for (const entry of entries) {
		if (SKIP_DIRS.has(entry.name)) continue;
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			await walk(full, files);
		} else {
			files.push(full);
		}
	}
	return files;
}

function applyReplacements(content) {
	let result = content;
	for (const [from, to] of REPLACEMENTS) {
		if (from === to) continue;
		result = result.split(from).join(to);
	}
	return result;
}

async function transformTextFiles() {
	const files = await walk(ROOT);
	let changed = 0;
	for (const file of files) {
		const ext = path.extname(file);
		if (!TEXT_EXTENSIONS.has(ext)) continue;
		if (SKIP_FILES.has(path.basename(file))) continue;
		const original = await readFile(file, 'utf8');
		const updated = applyReplacements(original);
		if (updated !== original) {
			await writeFile(file, updated, 'utf8');
			changed++;
		}
	}
	console.log(`Transformed ${changed} text files`);
}

async function renamePageDirs() {
	for (const [from, to] of RENAME_PAGE_DIRS) {
		const src = path.join(ROOT, 'src', 'pages', from);
		const dest = path.join(ROOT, 'src', 'pages', to);
		try {
			await rename(src, dest);
			console.log(`Renamed page: ${from} → ${to}`);
		} catch (e) {
			console.warn(`Skip rename ${from}: ${e.message}`);
		}
	}
}

async function renameIsleTs() {
	const from = path.join(ROOT, 'src', 'data', 'isle.ts');
	const to = path.join(ROOT, 'src', 'data', 'dbd.ts');
	try {
		await rename(from, to);
		console.log('Renamed isle.ts → dbd.ts');
	} catch (e) {
		console.warn(`isle.ts rename: ${e.message}`);
	}
}

async function renameScripts() {
	const pairs = [
		['fetch-isle-images.mjs', 'fetch-dbd-images.mjs'],
		['fetch-isle-hero.mjs', 'fetch-dbd-hero.mjs'],
		['import-isle-screenshots.mjs', 'import-dbd-screenshots.mjs'],
		['isle-hack-overlays.mjs', 'dbd-hack-overlays.mjs'],
		['fix-isle-copy.mjs', 'fix-dbd-copy.mjs'],
		['fix-isle-content.mjs', 'fix-dbd-content.mjs'],
	];
	for (const [from, to] of pairs) {
		try {
			await rename(path.join(ROOT, 'scripts', from), path.join(ROOT, 'scripts', to));
			console.log(`Renamed script: ${from} → ${to}`);
		} catch (e) {
			console.warn(`Skip script rename ${from}: ${e.message}`);
		}
	}
}

async function updatePageAstroFiles() {
	const idMap = {
		'dbd-aimbot': 'dbd-aimbot',
		'dbd-esp': 'dbd-esp',
		'dbd-wallhack': 'wallhack',
		'dbd-radar-hack': 'radar',
		'undetected-dbd-cheats': 'undetected',
		'dbd-cheats-2026': 'cheats-2026',
		'eac-bypass': 'eac',
		'dead-by-daylight-cheats': 'hacks',
		'dbd-cheat-download': 'cheat-download',
		'dbd-mod-menu': 'mod-menu',
		'dbd-soft-aim': 'soft-aim',
		'best-dbd-cheats': 'best-cheats',
		'dbd-aimbot-hack': 'aimbot-hack',
		'dbd-esp-hack': 'esp-hack',
		'dbd-unlock-all': 'unlock-all',
	};

	for (const [dir, pageId] of Object.entries(idMap)) {
		const file = path.join(ROOT, 'src', 'pages', dir, 'index.astro');
		try {
			const content = `---
import LocalizedPage from '../../components/LocalizedPage.astro';
---

<LocalizedPage locale="en" pageId="${pageId}" />
`;
			await writeFile(file, content, 'utf8');
		} catch {
			// ignore missing dirs
		}
	}
}

async function renameImages() {
	const imagesDir = path.join(ROOT, 'public', 'images');
	let files;
	try {
		files = await readdir(imagesDir);
	} catch {
		return;
	}
	for (const file of files) {
		if (!file.includes('isle')) continue;
		const newName = file
			.replace(/isle-hacks/g, 'dbd-cheats')
			.replace(/isle/g, 'dbd');
		if (newName !== file) {
			try {
				await rename(path.join(imagesDir, file), path.join(imagesDir, newName));
				console.log(`Renamed image: ${file} → ${newName}`);
			} catch (e) {
				console.warn(`Skip image ${file}: ${e.message}`);
			}
		}
	}
}

async function main() {
	console.log('Adapting The Isle Hacks → DBD Cheats (dbdcheats.org)...\n');
	await renamePageDirs();
	await renameIsleTs();
	await renameScripts();
	await transformTextFiles();
	await updatePageAstroFiles();
	await renameImages();
	console.log('\nDone. Next: sync:brand, regenerate i18n/blog.');
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
