#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';

const SIMPLE =
	"images: { hero: 'the isle hacks', espWallhack: 'the isle hacks wallhack', aimbotCombat: 'the isle hacks aimbot', packFight: 'the isle hacks', dinoEsp: 'the isle hacks esp', headerArt: 'the isle hacks aimbot', hacksPackage: 'the isle hacks radar', ambushFight: 'the isle hacks aimbot', battleRoyale: 'the isle hacks', survivalIsland: 'the isle hacks esp' }";

const re =
	/images: \{ hero: '[^']+', espWallhack: '[^']+', aimbotCombat: '[^']+', packFight: '[^']+', dinoEsp: '[^']+', headerArt: '[^']+', hacksPackage: '[^']+', ambushFight: '[^']+', battleRoyale: '[^']+', survivalIsland: '[^']+' \}/g;

for (const f of ['scripts/i18n-data/ui-strings-part1.mjs', 'scripts/i18n-data/ui-strings-part2.mjs']) {
	const c = readFileSync(f, 'utf8');
	const n = c.replace(re, SIMPLE);
	writeFileSync(f, n);
	console.log(f, (c.match(re) || []).length, 'image blocks simplified');
}

const altMap = [
	["imageAlt: 'Isle ESP player tags hack'", "imageAlt: 'the isle hacks esp'"],
	["imageAlt: 'Isle ESP radar hack'", "imageAlt: 'the isle hacks radar'"],
	["imageAlt: 'Isle Aimbot sniper kill'", "imageAlt: 'the isle hacks aimbot'"],
	["imageAlt: 'Isle Aimbot skeleton targeting'", "imageAlt: 'the isle hacks aimbot'"],
	["imageAlt: 'the isle hacks ADS combat'", "imageAlt: 'the isle hacks'"],
	["imageAlt: 'the isle hacks setup PC activation'", "imageAlt: 'the isle hacks'"],
	["imageAlt: 'the isle hacks updates Easy Anti-Cheat maintenance'", "imageAlt: 'the isle hacks'"],
	["imageAlt: 'the isle hacks FAQ ESP aimbot'", "imageAlt: 'the isle hacks'"],
	["imageAlt: 'the isle hacks support license help'", "imageAlt: 'the isle hacks'"],
	["imageAlt: 'Undetected the isle hacks ESP wallhack'", "imageAlt: 'undetected the isle hacks'"],
	["imageAlt: 'isle wallhack skeleton ESP'", "imageAlt: 'the isle hacks wallhack'"],
	["imageAlt: 'Easy Anti-Cheat bypass isle ESP aimbot'", "imageAlt: 'the isle hacks eac'"],
	["imageAlt: 'the isle hacks 2026 ESP aimbot'", "imageAlt: 'the isle hacks'"],
	["imageAlt: 'the isle hacks combat aimbot'", "imageAlt: 'the isle hacks'"],
	["imageAlt: 'the isle hack download ESP aimbot'", "imageAlt: 'the isle hacks download'"],
	["imageAlt: 'The Isle mod menu ESP aimbot'", "imageAlt: 'the isle hacks mod menu'"],
	["imageAlt: 'The Isle soft aim aimbot settings'", "imageAlt: 'the isle hacks soft aim'"],
	["imageAlt: 'Best the isle hacks 2026 ESP'", "imageAlt: 'best the isle hacks'"],
	["imageAlt: 'Isle Aimbot hack combat'", "imageAlt: 'the isle hacks aimbot'"],
	["imageAlt: 'Isle ESP hack wallhack'", "imageAlt: 'the isle hacks esp'"],
	["imageAlt: 'The Isle unlock all species ESP aimbot guide'", "imageAlt: 'the isle hacks'"],
	["imageAlt: 'the isle hacks privacy policy'", "imageAlt: 'the isle hacks'"],
	["imageAlt: 'the isle hacks refund policy'", "imageAlt: 'the isle hacks'"],
	["imageAlt: 'the isle hacks terms of use'", "imageAlt: 'the isle hacks'"],
];

let pages = readFileSync('scripts/i18n-data/pages-en.mjs', 'utf8');
for (const [from, to] of altMap) pages = pages.split(from).join(to);
writeFileSync('scripts/i18n-data/pages-en.mjs', pages);
console.log('pages-en imageAlts simplified');

// productPage() imageAlt template in pages-i18n
let i18n = readFileSync('scripts/i18n-data/pages-i18n.mjs', 'utf8');
i18n = i18n
	.split("imageAlt: `The Isle ${meta.altKeyword}`")
	.join("imageAlt: 'the isle hacks'")
	.split("galleryTitle: `The Isle Hacks ${topicName}`")
	.join("galleryTitle: 'the isle hacks'")
	.split("imageAlt: `the isle hacks ${kind} policy`")
	.join("imageAlt: 'the isle hacks'")
	.split("galleryTitle: `The Isle Hacks ${kind} resources`")
	.join("galleryTitle: 'the isle hacks'");
writeFileSync('scripts/i18n-data/pages-i18n.mjs', i18n);
console.log('pages-i18n image alts simplified');
