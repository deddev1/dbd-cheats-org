#!/usr/bin/env node
/** Adapt pages-en.mjs and pages-i18n.mjs from Dead by Daylight source. */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const REMOVE_PAGE_KEYS = [
	'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all',
];

const REPLACEMENTS = [
	['dbd-esp', 'dbd-esp'],
	['dbd-aimbot', 'dbd-aimbot'],
	["'eac'", "'eac'"],
	['eac-bypass', 'eac-bypass'],
	['undetected-dbd-cheats', 'undetected-dbd-cheats'],
	['dbd-wallhack', 'dbd-wallhack'],
	['dbd-radar-hack', 'dbd-radar-hack'],
	['dbd-cheats-2026', 'dbd-cheats-2026'],
	['dead-by-daylight-cheats', 'dead-by-daylight-cheats'],
	['the-dbd', 'dbd'],
	['Dead by Daylight', 'Dead by Daylight'],
	['Dead by Daylight', 'Dead by Daylight'],
	['The DBD Cheats', 'The DBD Cheats'],
	['dbd cheats', 'dbd cheats'],
	['dbd cheat', 'dbd cheat'],
	['DBD ESP', 'The DBD ESP'],
	['DBD Aimbot', 'The DBD Aimbot'],
	['dbd wallhack', 'The dbd wallhack'],
	['dbd radar', 'The dbd radar'],
	['Dead by Daylight chases', 'Dead by Daylight chases'],
	['Dead by Daylight combat', 'Dead by Daylight combat'],
	['Dead by Daylight patches', 'Dead by Daylight patches'],
	['Dead by Daylight updates', 'Dead by Daylight updates'],
	['Dead by Daylight setup', 'Dead by Daylight setup'],
	['Dead by Daylight license', 'Dead by Daylight license'],
	['Dead by Daylight licenses', 'Dead by Daylight licenses'],
	['Dead by Daylight trials', 'Dead by Daylight trials'],
	['in Dead by Daylight', 'in Dead by Daylight'],
	['for Dead by Daylight', 'for Dead by Daylight'],
	['Dead by Daylight on', 'Dead by Daylight on'],
	['Dead by Daylight or', 'Dead by Daylight or'],
	['Dead by Daylight\'s', 'Dead by Daylight\'s'],
	['Dead by Daylight ', 'Dead by Daylight '],
	['Easy Anti-Cheat', 'Easy Anti-Cheat'],
	['Easy Anti-Cheat maintenance', 'Easy Anti-Cheat maintenance'],
	['Easy Anti-Cheat bypass', 'Easy Anti-Cheat bypass'],
	['Easy Anti-Cheat Bypass', 'Easy Anti-Cheat Bypass'],
	['Easy Anti-Cheat', 'Easy Anti-Cheat'],
	['eac', 'eac'],
	['support@dbdcheats.org', 'support@dbdcheats.org'],
	['MacMillan Estate, Autohaven, and Coldwind Farm', 'MacMillan Estate, Autohaven, and Coldwind Farm'],
	['MacMillan Estate, Autohaven and Coldwind Farm', 'MacMillan Estate, Autohaven and Coldwind Farm'],
	['chase fights', 'chase fights'],
	['chase fight', 'chase fight'],
	['trial rounds', 'trial rounds'],
	['extract', 'extract'],
	['players', 'players'],
	['operator', 'player'],
	['players', 'Players'],
	['Operator', 'Player'],
	['trial timer', 'trial timer'],
	['survivor and killer trials', 'survivor and killer trials'],
	['survivor and killer trials', 'survivor and killer trials'],
	['survivor & killer', 'survivor & killer'],
	['high-value objectives', 'high-value objectives'],
	['high-value objectives', 'high-value objectives'],
	['contracts', 'chests'],
	['contract', 'chest'],
	['Activision\'s', 'Epic Games\''],
	['Call of Duty combat pace', 'Dead by Daylight combat pace'],
	['COD', 'Dead by Daylight'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

function removePageObjectBlocks(content) {
	let r = content;
	for (const key of REMOVE_PAGE_KEYS) {
		const quoted = `'${key}'`;
		const patterns = [
			new RegExp(`\\t${quoted}: \\{[\\s\\S]*?\\},\\n`, 'g'),
			new RegExp(`\\t${key.replace(/-/g, '\\-')}: \\{[\\s\\S]*?\\},\\n`, 'g'),
		];
		for (const p of patterns) r = r.replace(p, '');
	}
	return r;
}

async function adaptFile(rel) {
	let content = await readFile(path.join(SRC, rel), 'utf8');
	content = apply(content);
	content = removePageObjectBlocks(content);
	await writeFile(path.join(ROOT, rel), content);
	console.log('Adapted', rel);
}

await adaptFile('scripts/i18n-data/pages-en.mjs');
await adaptFile('scripts/i18n-data/pages-i18n.mjs');
await adaptFile('scripts/i18n-data/phrases.mjs');

// Patch phrases KW object
let phrases = await readFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), 'utf8');
phrases = phrases.replace(
	/const KW = \{[\s\S]*?\};/,
	`const KW = {
	esp: 'ESP wallhack',
	radar: 'radar hack',
	aimbot: 'Aimbot',
	product: 'The DBD Cheats',
	game: 'Dead by Daylight',
	checkout: 'Zadeyo',
	eac: 'Easy Anti-Cheat',
};`,
);
phrases = phrases.replace(/KW\.eac/g, 'KW.eac');
phrases = phrases.replace(/maps: '[^']*'/g, "maps: 'MacMillan Estate, Autohaven, and Coldwind Farm'");
await writeFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), phrases);

console.log('Done adapting i18n pages.');
