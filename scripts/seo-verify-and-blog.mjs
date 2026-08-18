#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';

const pages = readFileSync('scripts/i18n-data/pages-en.mjs', 'utf8');
const bad = [
	'supply-drop',
	'BR-critical',
	'BR loop',
	'vehicles',
	'ranked block',
	'Controllers',
	'Battle Pass',
	'reboot rounds',
	'endgame circles',
	'Verdansk',
	'Activision',
	'soft aim, and .',
	'ESP, Soft Aim,',
	'best-dbd-cheats',
	'dbd-esp-hack',
	'dbd-aimbot-hack',
];
console.log('--- pages-en leftovers ---');
for (const b of bad) {
	const n = pages.split(b).length - 1;
	if (n) console.log(`${b}: ${n}`);
}

const gen = readFileSync('src/data/i18n/content.generated.ts', 'utf8');
const enEnd = gen.indexOf('\n\t\tes:');
const en = enEnd > 0 ? gen.slice(0, enEnd) : gen.slice(0, 120000);
console.log('--- EN generated leftovers ---');
for (const b of [
	'supply-drop',
	'BR-critical',
	'full BR',
	'vehicles before',
	'Controllers',
	'Battle Pass',
	'REasy Anti-Cheat',
	'soft aim, and .',
	'best-dbd-cheats',
	'dbd-esp-hack',
]) {
	const n = en.split(b).length - 1;
	if (n) console.log(`${b}: ${n}`);
}

const blog = readFileSync('src/data/blog/posts.generated.ts', 'utf8');
const reps = [
	['V-Bucks', 'growth points'],
	['Item Shop', 'in-game store'],
	['Battle Pass', 'patch cycle progression'],
	['FNCS', 'Dead by Daylight community event'],
	['Hammer AR', 'M4A1'],
	['mythics', 'meta guns'],
	['island codes', 'practice server trials maps'],
	['Creative 1v1s', 'aim training'],
	['creative 1v1s', 'aim training'],
	['Epic health', 'Battlestate status'],
	['Epic terms', 'Behaviour Interactive terms'],
	["Epic's Easy Anti-Cheat", 'Easy Anti-Cheat'],
	['Epic patch', 'Dead by Daylight patch'],
	['EliteFN', 'a Fortnite cheat shop'],
	['GhostWare', 'a slim cheat vendor'],
	['CheatVault', 'another cheat shop'],
	['/dbd-aimbot-hack/', '/dbd-aimbot/'],
	['/dbd-esp-hack/', '/dbd-esp/'],
	['/best-dbd-cheats/', '/'],
	['best dbd cheats', 'dbd cheats'],
	['hot drops', 'hot spawns'],
	['ranked grinders', 'trial grinders'],
	['before Ranked', 'before a trial'],
];
let s = blog;
let n = 0;
for (const [a, b] of reps) {
	if (s.includes(a)) {
		s = s.split(a).join(b);
		n += 1;
	}
}
writeFileSync('src/data/blog/posts.generated.ts', s);
console.log('blog patterns fixed:', n);
