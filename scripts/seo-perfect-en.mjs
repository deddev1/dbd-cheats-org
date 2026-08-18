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
	// Wrong publishers in prose (EXT.dbd already links to escapefromdbd.com)
	['published by ${EXT.dbd}', 'published by Behaviour Interactive (${EXT.dbd})'],
	['from ${EXT.dbd}', 'from ${EXT.dbd}'],
	['via ${EXT.dbd}', 'via ${EXT.dbd}'],
	['belong with ${EXT.dbd}', 'belong with Behaviour Interactive'],
	['${EXT.dbd} terms', 'Behaviour Interactive terms'],
	['${EXT.dbd} season updates', '${EXT.dbd} patch cycle and map updates'],

	['PC & Controllers', 'Windows PC'],
	['PC & Controller Guide', 'Windows PC Guide'],
	['PC and controller cheats', 'Windows PC cheats'],

	// BR / Fortnite lexicon → Dead by Daylight
	['survivors, killers, generators', 'survivors, killers, generators'],
	['notice vehicles before they push your position', 'spot survivors and killers before they push your angle'],
	['Player, killer, and generators', 'Player, apex, and generator'],
	['boss and extract awareness cues', 'killer and generator awareness cues'],
	['boss threat cues', 'killer threat cues'],
	['bosses, and generators', 'killers, and generators'],
	['track killers and generators', 'track killers and generators'],
	['ARs, SMGs, and skill-checks', 'killers, killer builds, and skill-check killers'],
	['skill-check DMR fights and dorms clears', 'skill-check killer chases and high-traffic zone clears'],
	['Save separate Aimbot profiles for ARs, SMGs, and skill-checks', 'Save separate Aimbot profiles for killers, killer builds, and skill-check killers'],
	['building and rooftop fights', 'forest and river bank ambushes'],
	['weapons, and Easy Anti-Cheat', 'killer balance, and Easy Anti-Cheat'],
	['major weapon updates', 'major killer balance updates'],
	['boss threat cues, generators and hook markers', 'killer threat cues, generator and hook markers'],
	['generators, generators, and killeres', 'generators, hook locations, and killers'],
	['weapons, camos, skins, or battle pass tiers', 'killers, skins, or killer tiers'],
	['instant access to weapons', 'instant access to killers'],
	['enemy teams, killeres, and high-value objectives', 'enemy teams, killers, and high-value objectives'],
	[
		'killer threat cues, supply-drop awareness markers, and generators or chest pins so only BR-critical',
		'killer markers, generator cues, and generator pins so only trial-critical',
	],
	['Vehicle and supply-drop threat cues', 'Killer and generator awareness cues'],
	['killer and supply-drop threat cues', 'boss and extract awareness cues'],
	['loot or chest pins', 'generator and generator pins'],
	['Generator and chest markers', 'Generator and hook markers'],
	['generator and chest markers', 'generator and hook markers'],
	['chests worth the detour', 'high-value objectives worth the detour'],
	['vehicles, and chests', 'bosses, and generators'],
	['loot, vehicles, and chests', 'loot, killeres, and generators'],
	['players, generators, and vehicles', 'survivors, killers, and generators'],
	['players, generators, vehicles', 'survivors, killers, generators'],
	['killer threat cues', 'boss threat cues'],
	['killer pushes', 'flank pushes'],
	['track vehicles and chests', 'track killers and generators'],
	['full BR loop', 'full trial loop'],
	['BR rotations', 'map rotations'],
	['BR-critical', 'trial-critical'],
	['endgame circles', 'hook zones'],
	['final circles', 'late-trial generators'],
	['final-circle scrims', 'extract camp fights'],
	['before your first ranked block', 'before your first trial'],
	['before ranked', 'before you queue'],
	['reboot rounds', 'close-range team chases'],
	['Battle Pass', 'patch cycle progression'],
	[
		'skill-check AR beams and close-quarters room clears without reopening menus every spawn',
		'skill-check DMR fights and dorms clears without reopening menus every trial',
	],
	['assault rifles, SMGs, and snipers', 'ARs, SMGs, and skill-checks'],
	['AR / SMG / sniper', 'killer / perk / skill-check'],
	['players, generators, and vehicles', 'survivors, killers, and generators'],
	['for players, generators, and vehicles', 'for players, generators, and generators'],

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
	['dbd cheats & dbd cheats', 'dbd cheats'],
	[
		'covering both dbd cheats and dbd cheats search intent',
		'covering both “dbd cheats” and “dbd cheats” search intent',
	],
	[
		'also searched as dbd cheats and dbd cheat.',
		'built for Dead by Daylight on Windows PC.',
	],
	[
		'dbd cheats vs dbd cheats — same stack, clear pages',
		'How this DBD Cheats pillar fits nearby pages',
	],
	[
		'Searchers use dbd cheats and dbd cheats interchangeably. This pillar focuses on hacks language; the',
		'Use this pillar for the core product overview. For year-specific buying notes, see the',
	],

	// Point cannibal URLs at canonicals
	['/dbd-esp-hack/', '/dbd-esp/'],
	['/dbd-aimbot-hack/', '/dbd-aimbot/'],
	['/best-dbd-cheats/', '/'],
	['best dbd cheats guide', 'DBD Cheats pillar'],
	['best dbd cheats checklist', 'dbd cheats checklist'],
	['best dbd cheats', 'dbd cheats'],
	[
		'Prefer softer tracking? Read the <a href="/dbd-soft-aim/">soft aim guide</a>. Want the search term most players use? See <a href="/dbd-aimbot/">aimbot hack</a>.',
		'Prefer softer tracking? Read the <a href="/dbd-soft-aim/">soft aim guide</a>.',
	],
	['Related landings: <a href="/dbd-cheat-download/">cheat download</a>, <a href="/dbd-mod-menu/">mod menu</a>, <a href="/dbd-aimbot/">aimbot hack</a>, <a href="/dbd-esp/">ESP hack</a>.',
		'Related landings: <a href="/dbd-cheat-download/">cheat download</a>, <a href="/dbd-mod-menu/">mod menu</a>, <a href="/dbd-aimbot/">aimbot</a>, <a href="/dbd-esp/">ESP</a>.'],
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
