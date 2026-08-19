#!/usr/bin/env node
/** Rebuild routing.ts and constants.mjs from clea Dead by Daylight source. */
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
	['dbd-esp', 'dbd-esp'],
	['dbd-aimbot', 'dbd-aimbot'],
	['eac', 'eac'],
	['undetected-dbd-cheats', 'undetected-dbd-cheats'],
	['dbd-wallhack', 'dbd-wallhack'],
	['dbd-radar-hack', 'dbd-radar-hack'],
	['dbd-cheats-2026', 'dbd-cheats-2026'],
	['eac-bypass', 'eac-bypass'],
	['dbdcheats.org', 'dbdcheats.org'],
	['trucos-dbd', 'trucos-dbd'],
	['triche-dbd', 'triche-dbd'],
	['dead-by-daylight-cheats', 'dead-by-daylight-cheats'],
	['cheats-dbd', 'cheats-dbd'],
	['trucchi-dbd', 'trucchi-dbd'],
	['cheaty-dbd', 'cheaty-dbd'],
	['chity-dbd', 'chity-dbd'],
	['chitov-dbd', 'chitov-dbd'],
	['chitiv-dbd', 'chitiv-dbd'],
	['cheatow-dbd', 'cheatow-dbd'],
	['hile-dbd', 'hile-dbd'],
	['dbd-hile', 'dbd-hile'],
	['dbd-esp-chity', 'dbd-esp-chity'],
	['dbd-aimbot-chity', 'dbd-aimbot-chity'],
	['unentdeckte-dead-by-daylight-cheats', 'unentdeckte-dead-by-daylight-cheats'],
	['cheats-dbd-indetectaveis', 'cheats-dbd-indetectaveis'],
	['trucchi-dbd-indetectabili', 'trucchi-dbd-indetectabili'],
	['niewykrywalne-cheats-dbd', 'niewykrywalne-cheats-dbd'],
	['nedecektiruemye-chity-dbd', 'nedecektiruemye-chity-dbd'],
	['tespit-edilemeyen-dbd-hileleri', 'tespit-edilemeyen-dbd-hileleri'],
	['nedecektovani-chity-dbd', 'nedecektovani-chity-dbd'],
	['cheats-dbd-nedetectabile', 'cheats-dbd-nedetectabile'],
	['basta-dead-by-daylight-cheats', 'basta-dead-by-daylight-cheats'],
	['eac-bypass-trucos-dbd', 'eac-bypass-trucos-dbd'],
	['eac-bypass-triche-dbd', 'eac-bypass-triche-dbd'],
	['eac-bypass-cheats-dbd', 'eac-bypass-cheats-dbd'],
	['eac-bypass-chity-dbd', 'eac-bypass-chity-dbd'],
	['eac-bypass-dbd', 'eac-bypass'],
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
	const heroImages = `/** Hero image per page topic — keyword-rich dead-by-daylight-cheats paths. */
export const HERO_IMAGES = {
	home: '/images/the-dbd-cheats-hero.webp',
	'dbd-esp': '/images/the-dbd-cheats-esp-wallhack.webp',
	'dbd-aimbot': '/images/the-dbd-cheats-aimbot-combat.webp',
	features: '/images/dead-by-daylight-cheats-package.webp',
	pricing: '/images/dead-by-daylight-cheats-cover.webp',
	setup: '/images/dbd-loadout-builder.webp',
	updates: '/images/dbd-header-art.webp',
	faq: '/images/dbd-pack-fight.webp',
	support: '/images/dead-by-daylight-cheats-package.webp',
	undetected: '/images/dbd-survival-game-combat.webp',
	wallhack: '/images/the-dbd-cheats-esp-wallhack.webp',
	radar: '/images/dbd-player-esp.webp',
	'eac': '/images/dbd-reboot-van-fight.webp',
	'cheats-2026': '/images/the-dbd-cheats-hero.webp',
	privacy: '/images/the-dbd-cheats-aimbot-combat.webp',
	refund: '/images/dead-by-daylight-cheats-cover.webp',
	terms: '/images/dead-by-daylight-cheats-package.webp',
};`;

	let content = await readFile(path.join(SRC, 'scripts/i18n-data/constants.mjs'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) {
		content = content.replace(new RegExp(`'${id}',\\s*`, 'g'), '');
	}
	content = content.replace(
		/export const PAGE_IDS = \[[\s\S]*?\];/,
		`export const PAGE_IDS = [\n\t'home', 'dbd-esp', 'dbd-aimbot', 'features', 'pricing', 'setup',\n\t'updates', 'faq', 'support', 'undetected', 'wallhack', 'radar', 'eac',\n\t'cheats-2026', 'privacy', 'refund', 'terms',\n];`,
	);
	content = content.replace(/\/\*\* Hero image[\s\S]*?};/, heroImages);
	content = content.replace(
		/export type PageId = [^;]+;/,
		"export type PageId = 'home' | 'dbd-esp' | 'dbd-aimbot' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'radar' | 'eac' | 'cheats-2026' | 'privacy' | 'refund' | 'terms';",
	);
	content = content.replace(/operatorEsp/g, 'playerEsp');
	content = content.replace(/extractFight/g, 'chaseFight');
	content = content.replace(/alMazrah/g, 'trialMap');
	await writeFile(path.join(ROOT, 'scripts/i18n-data/constants.mjs'), content);
	console.log('Fixed constants.mjs');
}

await fixRouting();
await fixConstants();
