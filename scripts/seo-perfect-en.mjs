#!/usr/bin/env node
/**
 * Purge Fortnite/Warzone/BR leftovers from EN page source and regenerate i18n.
 * Run: node scripts/seo-perfect-en.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PAGES_EN = path.join(ROOT, 'scripts', 'i18n-data', 'pages-en.mjs');

/** @type {Array<[RegExp|string, string]>} */
const replacements = [
	// Wrong publishers in prose (EXT.activision already links to escapefromisle.com)
	['published by ${EXT.activision}', 'published by The Isle team (${EXT.isle})'],
	['from ${EXT.activision}', 'from ${EXT.isle}'],
	['via ${EXT.activision}', 'via ${EXT.isle}'],
	['belong with ${EXT.activision}', 'belong with The Isle team'],
	['${EXT.activision} terms', 'The Isle team terms'],
	['${EXT.activision} season updates', '${EXT.isle} patch cycle and map updates'],

	['PC & Controllers', 'Windows PC'],
	['PC & Controller Guide', 'Windows PC Guide'],
	['PC and controller cheats', 'Windows PC cheats'],

	// BR / Fortnite lexicon → The Isle
	['vehicles, carcasses', 'players, wild dinosaurs, carcasses'],
	['notice vehicles before they push your position', 'spot players and wild dinosaurs before they push your angle'],
	['Player, boss, and carcasses', 'Player, apex, and carcass'],
	['boss and extract awareness cues', 'apex and nest awareness cues'],
	['boss threat cues', 'apex threat cues'],
	['bosses, and carcasses', 'apex dinosaurs, and carcasses'],
	['track apex dinosaurs and carcasses', 'track apex dinosaurs and carcasses'],
	['ARs, SMGs, and long-ranges', 'carnivores, ambush builds, and long-range species'],
	['long-range DMR fights and dorms clears', 'long-range ambush hunts and high-traffic zone clears'],
	['Save separate Aimbot profiles for ARs, SMGs, and long-ranges', 'Save separate Aimbot profiles for carnivores, ambush builds, and long-range species'],
	['building and rooftop fights', 'forest and river bank ambushes'],
	['weapons, and Easy Anti-Cheat', 'species balance, and Easy Anti-Cheat'],
	['major weapon updates', 'major species balance updates'],
	['boss threat cues, carcasses and carcass markers', 'apex threat cues, carcass and water markers'],
	['carcasses, carcasses, and bosses', 'carcasses, water sources, and apex dinosaurs'],
	['weapons, camos, skins, or battle pass tiers', 'dinosaurs, skins, or growth tiers'],
	['instant access to weapons', 'instant access to dinosaurs'],
	['enemy packs, bosses, and fresh carcasses', 'enemy packs, apex dinosaurs, and fresh carcasses'],
	[
		'vehicle threat cues, supply-drop awareness markers, and carcasses or chest pins so only BR-critical',
		'apex markers, nest cues, and carcass pins so only session-critical',
	],
	['Vehicle and supply-drop threat cues', 'Apex and nest awareness cues'],
	['vehicle and supply-drop threat cues', 'boss and extract awareness cues'],
	['loot or chest pins', 'carcass and carcass pins'],
	['Carcass and chest markers', 'Carcass and carcass markers'],
	['carcass and chest markers', 'carcass and carcass markers'],
	['chests worth the detour', 'fresh carcasses worth the detour'],
	['vehicles, and chests', 'bosses, and carcasses'],
	['loot, vehicles, and chests', 'loot, bosses, and carcasses'],
	['players, carcasses, and vehicles', 'players, wild dinosaurs, and carcasses'],
	['players, carcasses, vehicles', 'players, wild dinosaurs, carcasses'],
	['vehicle threat cues', 'boss threat cues'],
	['vehicle pushes', 'flank pushes'],
	['track vehicles and chests', 'track apex dinosaurs and carcasses'],
	['full BR loop', 'full session loop'],
	['BR rotations', 'map rotations'],
	['BR-critical', 'session-critical'],
	['endgame circles', 'nest zones'],
	['final circles', 'late-session nests'],
	['final-circle scrims', 'extract camp fights'],
	['before your first ranked block', 'before your first session'],
	['before ranked', 'before you spawn in'],
	['reboot rounds', 'close-range pack fights'],
	['Battle Pass', 'patch cycle progression'],
	[
		'long-range AR beams and close-quarters room clears without reopening menus every spawn',
		'long-range DMR fights and dorms clears without reopening menus every session',
	],
	['assault rifles, SMGs, and snipers', 'ARs, SMGs, and long-ranges'],
	['AR / SMG / sniper', 'AR / SMG / long-range'],
	['players, carcasses, and vehicles', 'players, wild dinosaurs, and carcasses'],
	['for players, carcasses, and vehicles', 'for players, carcasses, and nests'],

	// Broken / truncated meta fragments
	['soft aim, and .', 'soft aim, and radar.'],
	['soft aim, and on Windows PC', 'soft aim, and radar on Windows PC'],
	['soft aim, and for Windows PC', 'soft aim, and radar for Windows PC'],
	['soft aim, and in our', 'soft aim, and radar in our'],
	['soft aim, and maintenance', 'soft aim, and radar maintenance'],
	['soft aim, boxes, and on Windows PC', 'soft aim, and radar on Windows PC'],
	['ESP, Soft Aim, ', 'ESP, Soft Aim & Radar'],
	['Best Hacks with ESP & ', 'ESP Soft Aim & Radar'],
	['ESP, Soft Aim & ', 'ESP, Soft Aim & Radar'],
	['with — learn', '— learn'],
	['REasy Anti-Cheat out for', 'Reach out for'],
	['an Easy Anti-Cheat', 'a Easy Anti-Cheat'],
	['After a Escape', 'After an Escape'],
	['after a Escape', 'after an Escape'],

	// Keyword stuffing / nonsense duplicates
	['the isle hacks & the isle hacks', 'the isle hacks'],
	[
		'covering both the isle hacks and the isle hacks search intent',
		'covering both “the isle hacks” and “the isle cheats” search intent',
	],
	[
		'also searched as the isle hacks and the isle hack.',
		'built for The Isle on Windows PC.',
	],
	[
		'the isle hacks vs the isle hacks — same stack, clear pages',
		'How this The Isle Hacks pillar fits nearby pages',
	],
	[
		'Searchers use the isle hacks and the isle hacks interchangeably. This pillar focuses on hacks language; the',
		'Use this pillar for the core product overview. For year-specific buying notes, see the',
	],

	// Point cannibal URLs at canonicals
	['/isle-esp-hack/', '/isle-esp/'],
	['/isle-aimbot-hack/', '/isle-aimbot/'],
	['/best-isle-hacks/', '/'],
	['best the isle hacks guide', 'The Isle Hacks pillar'],
	['best the isle hacks checklist', 'the isle hacks checklist'],
	['best the isle hacks', 'the isle hacks'],
	[
		'Prefer softer tracking? Read the <a href="/isle-soft-aim/">soft aim guide</a>. Want the search term most players use? See <a href="/isle-aimbot/">aimbot hack</a>.',
		'Prefer softer tracking? Read the <a href="/isle-soft-aim/">soft aim guide</a>.',
	],
	['Related landings: <a href="/isle-hack-download/">cheat download</a>, <a href="/isle-mod-menu/">mod menu</a>, <a href="/isle-aimbot/">aimbot hack</a>, <a href="/isle-esp/">ESP hack</a>.',
		'Related landings: <a href="/isle-hack-download/">cheat download</a>, <a href="/isle-mod-menu/">mod menu</a>, <a href="/isle-aimbot/">aimbot</a>, <a href="/isle-esp/">ESP</a>.'],
];

let src = readFileSync(PAGES_EN, 'utf8');
let hits = 0;
for (const [from, to] of replacements) {
	if (typeof from === 'string') {
		if (!src.includes(from)) continue;
		const count = src.split(from).length - 1;
		src = src.split(from).join(to);
		hits += count;
	} else {
		const next = src.replace(from, to);
		if (next !== src) hits += 1;
		src = next;
	}
}

writeFileSync(PAGES_EN, src);
console.log(`Replaced ${hits} occurrences in pages-en.mjs`);

const gen = spawnSync(process.execPath, [path.join(ROOT, 'scripts', 'generate-i18n-content.mjs')], {
	cwd: ROOT,
	stdio: 'inherit',
});
if (gen.status !== 0) process.exit(gen.status ?? 1);
console.log('Regenerated content.generated.ts');
