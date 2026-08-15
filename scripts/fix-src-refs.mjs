#!/usr/bin/env node
/** Final pass: fix remaining The Isle references in src/. */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'src');
const REMOVE_PAGE_IDS = ['hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats', 'aimbot-hack', 'esp-hack', 'unlock-all'];

const REPLACEMENTS = [
	['isleImages', 'isleImages'],
	["from '../data/isle'", "from '../data/isle'"],
	["from './isle'", "from './isle'"],
	['/undetected-isle-hacks/', '/undetected-isle-hacks/'],
	['/isle-wallhack/', '/isle-wallhack/'],
	['/isle-radar-hack/', '/isle-radar-hack/'],
	['/eac-bypass/', '/eac-bypass/'],
	['/isle-hacks-2026/', '/isle-hacks-2026/'],
	['/isle-aimbot/', '/isle-aimbot/'],
	['/isle-esp/', '/isle-esp/'],
	['/the-isle-hacks/', '/isle-esp/'],
	['The Isle Hacks', 'The Isle Hacks'],
	['the isle hacks', 'the isle hacks'],
	['isle wallhack', 'The Isle wallhack'],
	['isle radar', 'The Isle radar'],
	['Isle Aimbot', 'The Isle Aimbot'],
	['Isle ESP', 'The Isle ESP'],
	['The Isle', 'The Isle'],
	['Easy Anti-Cheat', 'Easy Anti-Cheat'],
	['eac', 'eac'],
	['theislehack.org', 'theislehack.org'],
	['operatorEsp', 'dinoEsp'],
	['extractFight', 'ambushFight'],
	['alMazrah', 'survivalIsland'],
];

async function walk(dir, files = []) {
	for (const entry of await readdir(dir, { withFileTypes: true })) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) await walk(full, files);
		else if (/\.(ts|astro|js)$/.test(entry.name)) files.push(full);
	}
	return files;
}

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	for (const id of REMOVE_PAGE_IDS) {
		r = r.replace(new RegExp(`\\t'${id}':[^\\n]*\\n`, 'g'), '');
		r = r.replace(new RegExp(`\\{ label:[^}]*href: '/[^']*${id}[^']*/' \\},\\n`, 'g'), '');
	}
	return r;
}

for (const file of await walk(ROOT)) {
	const orig = await readFile(file, 'utf8');
	const updated = apply(orig);
	if (updated !== orig) {
		await writeFile(file, updated);
		console.log('Fixed', path.relative(ROOT, file));
	}
}
