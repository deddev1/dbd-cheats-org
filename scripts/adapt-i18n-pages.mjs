#!/usr/bin/env node
/** Adapt pages-en.mjs and pages-i18n.mjs from The Isle source. */
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
	['isle-esp', 'isle-esp'],
	['isle-aimbot', 'isle-aimbot'],
	["'eac'", "'eac'"],
	['eac-bypass', 'eac-bypass'],
	['undetected-isle-hacks', 'undetected-isle-hacks'],
	['isle-wallhack', 'isle-wallhack'],
	['isle-radar-hack', 'isle-radar-hack'],
	['isle-hacks-2026', 'isle-hacks-2026'],
	['the-isle-hacks', 'the-isle-hacks'],
	['the-isle', 'isle'],
	['The Isle', 'The Isle'],
	['The Isle', 'The Isle'],
	['The Isle Hacks', 'The Isle Hacks'],
	['the isle hacks', 'the isle hacks'],
	['the isle hack', 'the isle hack'],
	['Isle ESP', 'The Isle ESP'],
	['Isle Aimbot', 'The Isle Aimbot'],
	['isle wallhack', 'The Isle wallhack'],
	['isle radar', 'The Isle radar'],
	['The Isle hunts', 'The Isle hunts'],
	['The Isle combat', 'The Isle combat'],
	['The Isle patches', 'The Isle patches'],
	['The Isle updates', 'The Isle updates'],
	['The Isle setup', 'The Isle setup'],
	['The Isle license', 'The Isle license'],
	['The Isle licenses', 'The Isle licenses'],
	['The Isle sessions', 'The Isle sessions'],
	['in The Isle', 'in The Isle'],
	['for The Isle', 'for The Isle'],
	['The Isle on', 'The Isle on'],
	['The Isle or', 'The Isle or'],
	['The Isle\'s', 'The Isle\'s'],
	['The Isle ', 'The Isle '],
	['Easy Anti-Cheat', 'Easy Anti-Cheat'],
	['Easy Anti-Cheat maintenance', 'Easy Anti-Cheat maintenance'],
	['Easy Anti-Cheat bypass', 'Easy Anti-Cheat bypass'],
	['Easy Anti-Cheat Bypass', 'Easy Anti-Cheat Bypass'],
	['Easy Anti-Cheat', 'Easy Anti-Cheat'],
	['eac', 'eac'],
	['support@theislehack.org', 'support@theislehack.org'],
	['Isla Spire, forests, and river zones', 'Isla Spire, forests, and river zones'],
	['Isla Spire, forests and river zones', 'Isla Spire, forests and river zones'],
	['nest fights', 'nest fights'],
	['nest fight', 'nest fight'],
	['session rounds', 'session rounds'],
	['extract', 'extract'],
	['players', 'players'],
	['operator', 'player'],
	['players', 'Players'],
	['Operator', 'Player'],
	['growth timer', 'growth timer'],
	['herbivore and carnivore survival sessions', 'herbivore and carnivore survival sessions'],
	['herbivore and carnivore survival sessions', 'herbivore and carnivore survival sessions'],
	['herbivore & carnivore', 'herbivore & carnivore'],
	['fresh carcasses', 'fresh carcasses'],
	['fresh carcasses', 'fresh carcasses'],
	['contracts', 'chests'],
	['contract', 'chest'],
	['Activision\'s', 'Epic Games\''],
	['Call of Duty combat pace', 'The Isle combat pace'],
	['COD', 'The Isle'],
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
	product: 'The Isle Hacks',
	game: 'The Isle',
	checkout: 'Zadeyo',
	eac: 'Easy Anti-Cheat',
};`,
);
phrases = phrases.replace(/KW\.eac/g, 'KW.eac');
phrases = phrases.replace(/maps: '[^']*'/g, "maps: 'Isla Spire, forests, and river zones'");
await writeFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), phrases);

console.log('Done adapting i18n pages.');
