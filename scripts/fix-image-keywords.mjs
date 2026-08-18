#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';

const SIMPLE =
	"images: { hero: 'dbd cheats', espWallhack: 'dbd cheats wallhack', aimbotCombat: 'dbd cheats aimbot', packFight: 'dbd cheats', dinoEsp: 'dbd cheats esp', headerArt: 'dbd cheats aimbot', hacksPackage: 'dbd cheats radar', ambushFight: 'dbd cheats aimbot', battleRoyale: 'dbd cheats', survivalIsland: 'dbd cheats esp' }";

const re =
	/images: \{ hero: '[^']+', espWallhack: '[^']+', aimbotCombat: '[^']+', packFight: '[^']+', dinoEsp: '[^']+', headerArt: '[^']+', hacksPackage: '[^']+', ambushFight: '[^']+', battleRoyale: '[^']+', survivalIsland: '[^']+' \}/g;

for (const f of ['scripts/i18n-data/ui-strings-part1.mjs', 'scripts/i18n-data/ui-strings-part2.mjs']) {
	const c = readFileSync(f, 'utf8');
	const n = c.replace(re, SIMPLE);
	writeFileSync(f, n);
	console.log(f, (c.match(re) || []).length, 'image blocks simplified');
}

const altMap = [
	["imageAlt: 'DBD ESP player tags hack'", "imageAlt: 'dbd cheats esp'"],
	["imageAlt: 'DBD ESP radar hack'", "imageAlt: 'dbd cheats radar'"],
	["imageAlt: 'DBD Aimbot sniper kill'", "imageAlt: 'dbd cheats aimbot'"],
	["imageAlt: 'DBD Aimbot skeleton targeting'", "imageAlt: 'dbd cheats aimbot'"],
	["imageAlt: 'dbd cheats ADS combat'", "imageAlt: 'dbd cheats'"],
	["imageAlt: 'dbd cheats setup PC activation'", "imageAlt: 'dbd cheats'"],
	["imageAlt: 'dbd cheats updates Easy Anti-Cheat maintenance'", "imageAlt: 'dbd cheats'"],
	["imageAlt: 'dbd cheats FAQ ESP aimbot'", "imageAlt: 'dbd cheats'"],
	["imageAlt: 'dbd cheats support license help'", "imageAlt: 'dbd cheats'"],
	["imageAlt: 'Undetected dbd cheats ESP wallhack'", "imageAlt: 'undetected dbd cheats'"],
	["imageAlt: 'dbd wallhack skeleton ESP'", "imageAlt: 'dbd cheats wallhack'"],
	["imageAlt: 'Easy Anti-Cheat bypass dbd ESP aimbot'", "imageAlt: 'dbd cheats eac'"],
	["imageAlt: 'dbd cheats 2026 ESP aimbot'", "imageAlt: 'dbd cheats'"],
	["imageAlt: 'dbd cheats combat aimbot'", "imageAlt: 'dbd cheats'"],
	["imageAlt: 'dbd cheat download ESP aimbot'", "imageAlt: 'dbd cheats download'"],
	["imageAlt: 'Dead by Daylight mod menu ESP aimbot'", "imageAlt: 'dbd cheats mod menu'"],
	["imageAlt: 'Dead by Daylight soft aim aimbot settings'", "imageAlt: 'dbd cheats soft aim'"],
	["imageAlt: 'Best dbd cheats 2026 ESP'", "imageAlt: 'best dbd cheats'"],
	["imageAlt: 'DBD Aimbot hack combat'", "imageAlt: 'dbd cheats aimbot'"],
	["imageAlt: 'DBD ESP hack wallhack'", "imageAlt: 'dbd cheats esp'"],
	["imageAlt: 'Dead by Daylight unlock all species ESP aimbot guide'", "imageAlt: 'dbd cheats'"],
	["imageAlt: 'dbd cheats privacy policy'", "imageAlt: 'dbd cheats'"],
	["imageAlt: 'dbd cheats refund policy'", "imageAlt: 'dbd cheats'"],
	["imageAlt: 'dbd cheats terms of use'", "imageAlt: 'dbd cheats'"],
];

let pages = readFileSync('scripts/i18n-data/pages-en.mjs', 'utf8');
for (const [from, to] of altMap) pages = pages.split(from).join(to);
writeFileSync('scripts/i18n-data/pages-en.mjs', pages);
console.log('pages-en imageAlts simplified');

// productPage() imageAlt template in pages-i18n
let i18n = readFileSync('scripts/i18n-data/pages-i18n.mjs', 'utf8');
i18n = i18n
	.split("imageAlt: `Dead by Daylight ${meta.altKeyword}`")
	.join("imageAlt: 'dbd cheats'")
	.split("galleryTitle: `The DBD Cheats ${topicName}`")
	.join("galleryTitle: 'dbd cheats'")
	.split("imageAlt: `dbd cheats ${kind} policy`")
	.join("imageAlt: 'dbd cheats'")
	.split("galleryTitle: `The DBD Cheats ${kind} resources`")
	.join("galleryTitle: 'dbd cheats'");
writeFileSync('scripts/i18n-data/pages-i18n.mjs', i18n);
console.log('pages-i18n image alts simplified');
