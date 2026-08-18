#!/usr/bin/env node
/** Final pass: fix remaining Dead by Daylight references in src/. */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'src');
const REMOVE_PAGE_IDS = ['hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats', 'aimbot-hack', 'esp-hack', 'unlock-all'];

const REPLACEMENTS = [
	['dbdImages', 'dbdImages'],
	["from '../data/dbd'", "from '../data/dbd'"],
	["from './dbd'", "from './dbd'"],
	['/undetected-dbd-cheats/', '/undetected-dbd-cheats/'],
	['/dbd-wallhack/', '/dbd-wallhack/'],
	['/dbd-radar-hack/', '/dbd-radar-hack/'],
	['/eac-bypass/', '/eac-bypass/'],
	['/dbd-cheats-2026/', '/dbd-cheats-2026/'],
	['/dbd-aimbot/', '/dbd-aimbot/'],
	['/dbd-esp/', '/dbd-esp/'],
	['/dead-by-daylight-cheats/', '/dbd-esp/'],
	['DBD Cheats', 'DBD Cheats'],
	['dbd cheats', 'dbd cheats'],
	['dbd wallhack', 'DBD wallhack'],
	['dbd radar', 'DBD radar'],
	['DBD Aimbot', 'DBD Aimbot'],
	['DBD ESP', 'DBD ESP'],
	['Dead by Daylight', 'Dead by Daylight'],
	['Easy Anti-Cheat', 'Easy Anti-Cheat'],
	['eac', 'eac'],
	['dbdcheats.org', 'dbdcheats.org'],
	['operatorEsp', 'playerEsp'],
	['extractFight', 'chaseFight'],
	['alMazrah', 'trialMap'],
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
