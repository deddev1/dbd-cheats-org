#!/usr/bin/env node
/** Rebuild routing.ts and constants.mjs from clea The Isle source. */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const REMOVE_IDS = [
	'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all',
];

const REPLACEMENTS = [
	['isle-esp', 'isle-esp'],
	['isle-aimbot', 'isle-aimbot'],
	['eac', 'eac'],
	['undetected-isle-hacks', 'undetected-isle-hacks'],
	['isle-wallhack', 'isle-wallhack'],
	['isle-radar-hack', 'isle-radar-hack'],
	['isle-hacks-2026', 'isle-hacks-2026'],
	['eac-bypass', 'eac-bypass'],
	['theislehack.org', 'theislehack.org'],
	['trucos-isla', 'trucos-isla'],
	['triche-isla', 'triche-isla'],
	['the-isle-hacks', 'the-isle-hacks'],
	['cheats-isla', 'cheats-isla'],
	['trucchi-isla', 'trucchi-isla'],
	['cheaty-isla', 'cheaty-isla'],
	['chity-isla', 'chity-isla'],
	['chitov-isla', 'chitov-isla'],
	['chitiv-isla', 'chitiv-isla'],
	['cheatow-isla', 'cheatow-isla'],
	['hile-isla', 'hile-isla'],
	['isle-hile', 'isle-hile'],
	['isle-esp-chity', 'isle-esp-chity'],
	['isle-aimbot-chity', 'isle-aimbot-chity'],
	['unentdeckte-the-isle-hacks', 'unentdeckte-the-isle-hacks'],
	['cheats-isla-indetectaveis', 'cheats-isla-indetectaveis'],
	['trucchi-isla-indetectabili', 'trucchi-isla-indetectabili'],
	['niewykrywalne-cheats-isla', 'niewykrywalne-cheats-isla'],
	['nedecektiruemye-chity-isla', 'nedecektiruemye-chity-isla'],
	['tespit-edilemeyen-isle-hileleri', 'tespit-edilemeyen-isle-hileleri'],
	['nedecektovani-chity-isla', 'nedecektovani-chity-isla'],
	['cheats-isla-nedetectabile', 'cheats-isla-nedetectabile'],
	['basta-the-isle-hacks', 'basta-the-isle-hacks'],
	['eac-bypass-trucos-isla', 'eac-bypass-trucos-isla'],
	['eac-bypass-triche-isla', 'eac-bypass-triche-isla'],
	['eac-bypass-cheats-isla', 'eac-bypass-cheats-isla'],
	['eac-bypass-chity-isla', 'eac-bypass-chity-isla'],
	['eac-bypass-isle', 'eac-bypass'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

function removePageBlocks(content, pageId) {
	const keyPatterns = [
		new RegExp(`\\t${pageId.replace(/-/g, '\\-')}: \\{[\\s\\S]*?\\},\\n`, 'g'),
		new RegExp(`\\t'${pageId.replace(/-/g, '\\-')}': \\{[\\s\\S]*?\\},\\n`, 'g'),
	];
	let r = content;
	for (const p of keyPatterns) r = r.replace(p, '');
	// Remove from PageId union
	r = r.replace(new RegExp(`\\s*\\|\\s*'${pageId}'`, 'g'), '');
	// Remove from englishPaths single line
	r = r.replace(new RegExp(`\\t${pageId.replace(/-/g, '\\-')}: '[^']*',\\n`, 'g'), '');
	r = r.replace(new RegExp(`\\t'${pageId.replace(/-/g, '\\-')}': '[^']*',\\n`, 'g'), '');
	return r;
}

async function fixRouting() {
	let content = await readFile(path.join(SRC, 'src/data/i18n/routing.ts'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) content = removePageBlocks(content, id);
	// Fix eac key in englishPaths
	content = content.replace(/\teac: '/, "\t'eac': '");
	await writeFile(path.join(ROOT, 'src/data/i18n/routing.ts'), content);
	console.log('Fixed routing.ts');
}

async function fixConstants() {
	const heroImages = `/** Hero image per page topic — keyword-rich the-isle-hacks paths. */
export const HERO_IMAGES = {
	home: '/images/the-isle-hacks-hero.webp',
	'isle-esp': '/images/the-isle-hacks-esp-wallhack.webp',
	'isle-aimbot': '/images/the-isle-hacks-aimbot-combat.webp',
	features: '/images/the-isle-hacks-package.webp',
	pricing: '/images/the-isle-hacks-cover.webp',
	setup: '/images/isle-loadout-builder.webp',
	updates: '/images/isle-header-art.webp',
	faq: '/images/isle-pack-fight.webp',
	support: '/images/the-isle-hacks-package.webp',
	undetected: '/images/isle-survival-game-combat.webp',
	wallhack: '/images/the-isle-hacks-esp-wallhack.webp',
	radar: '/images/isle-player-esp.webp',
	'eac': '/images/isle-reboot-van-fight.webp',
	'cheats-2026': '/images/the-isle-hacks-hero.webp',
	privacy: '/images/the-isle-hacks-aimbot-combat.webp',
	refund: '/images/the-isle-hacks-cover.webp',
	terms: '/images/the-isle-hacks-package.webp',
};`;

	let content = await readFile(path.join(SRC, 'scripts/i18n-data/constants.mjs'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) {
		content = content.replace(new RegExp(`'${id}',\\s*`, 'g'), '');
	}
	content = content.replace(
		/export const PAGE_IDS = \[[\s\S]*?\];/,
		`export const PAGE_IDS = [\n\t'home', 'isle-esp', 'isle-aimbot', 'features', 'pricing', 'setup',\n\t'updates', 'faq', 'support', 'undetected', 'wallhack', 'radar', 'eac',\n\t'cheats-2026', 'privacy', 'refund', 'terms',\n];`,
	);
	content = content.replace(/\/\*\* Hero image[\s\S]*?};/, heroImages);
	content = content.replace(
		/export type PageId = [^;]+;/,
		"export type PageId = 'home' | 'isle-esp' | 'isle-aimbot' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'radar' | 'eac' | 'cheats-2026' | 'privacy' | 'refund' | 'terms';",
	);
	content = content.replace(/operatorEsp/g, 'dinoEsp');
	content = content.replace(/extractFight/g, 'ambushFight');
	content = content.replace(/alMazrah/g, 'survivalIsland');
	await writeFile(path.join(ROOT, 'scripts/i18n-data/constants.mjs'), content);
	console.log('Fixed constants.mjs');
}

await fixRouting();
await fixConstants();
