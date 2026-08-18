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
	// Wrong publishers in prose (EXT.activision already links to escapefromdbd.com)
	['published by ${EXT.activision}', 'published by Behaviour Interactive (${EXT.dbd})'],
	['from ${EXT.activision}', 'from ${EXT.dbd}'],
	['via ${EXT.activision}', 'via ${EXT.dbd}'],
	['belong with ${EXT.activision}', 'belong with Behaviour Interactive'],
	['${EXT.activision} terms', 'Behaviour Interactive terms'],
	['${EXT.activision} season updates', '${EXT.dbd} patch cycle and map updates'],

	['PC & Controllers', 'Windows PC'],
	['PC & Controller Guide', 'Windows PC Guide'],
	['PC and controller cheats', 'Windows PC cheats'],

	// BR / Fortnite lexicon → Dead by Daylight
	['vehicles, carcasses', 'survivors, killers, carcasses'],
	['notice vehicles before they push your position', 'spot survivors and killers before they push your angle'],
	['Player, boss, and carcasses', 'Player, apex, and carcass'],
	['boss and extract awareness cues', 'apex and nest awareness cues'],
	['boss threat cues', 'apex threat cues'],
	['bosses, and carcasses', 'apex killers, and carcasses'],
	['track apex killers and carcasses', 'track apex killers and carcasses'],
	['ARs, SMGs, and skill-checks', 'killers, ambush builds, and skill-check species'],
	['skill-check DMR fights and dorms clears', 'skill-check ambush chases and high-traffic zone clears'],
	['Save separate Aimbot profiles for ARs, SMGs, and skill-checks', 'Save separate Aimbot profiles for killers, ambush builds, and skill-check species'],
	['building and rooftop fights', 'forest and river bank ambushes'],
	['weapons, and Easy Anti-Cheat', 'species balance, and Easy Anti-Cheat'],
	['major weapon updates', 'major species balance updates'],
	['boss threat cues, carcasses and generator markers', 'apex threat cues, carcass and water markers'],
	['carcasses, carcasses, and bosses', 'carcasses, water sources, and apex killers'],
	['weapons, camos, skins, or battle pass tiers', 'killers, skins, or growth tiers'],
	['instant access to weapons', 'instant access to killers'],
	['enemy packs, bosses, and high-value objectives', 'enemy packs, apex killers, and high-value objectives'],
	[
		'vehicle threat cues, supply-drop awareness markers, and carcasses or chest pins so only BR-critical',
		'apex markers, generator cues, and carcass pins so only trial-critical',
	],
	['Vehicle and supply-drop threat cues', 'Apex and nest awareness cues'],
	['vehicle and supply-drop threat cues', 'boss and extract awareness cues'],
	['loot or chest pins', 'carcass and carcass pins'],
	['Carcass and chest markers', 'Carcass and generator markers'],
	['carcass and chest markers', 'carcass and generator markers'],
	['chests worth the detour', 'high-value objectives worth the detour'],
	['vehicles, and chests', 'bosses, and carcasses'],
	['loot, vehicles, and chests', 'loot, bosses, and carcasses'],
	['players, carcasses, and vehicles', 'survivors, killers, and carcasses'],
	['players, carcasses, vehicles', 'survivors, killers, carcasses'],
	['vehicle threat cues', 'boss threat cues'],
	['vehicle pushes', 'flank pushes'],
	['track vehicles and chests', 'track apex killers and carcasses'],
	['full BR loop', 'full trial loop'],
	['BR rotations', 'map rotations'],
	['BR-critical', 'trial-critical'],
	['endgame circles', 'hook zones'],
	['final circles', 'late-trial generators'],
	['final-circle scrims', 'extract camp fights'],
	['before your first ranked block', 'before your first trial'],
	['before ranked', 'before you queue'],
	['reboot rounds', 'close-range pack fights'],
	['Battle Pass', 'patch cycle progression'],
	[
		'skill-check AR beams and close-quarters room clears without reopening menus every spawn',
		'skill-check DMR fights and dorms clears without reopening menus every trial',
	],
	['assault rifles, SMGs, and snipers', 'ARs, SMGs, and skill-checks'],
	['AR / SMG / sniper', 'AR / SMG / skill-check'],
	['players, carcasses, and vehicles', 'survivors, killers, and carcasses'],
	['for players, carcasses, and vehicles', 'for players, carcasses, and generators'],

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
		'How this The DBD Cheats pillar fits nearby pages',
	],
	[
		'Searchers use dbd cheats and dbd cheats interchangeably. This pillar focuses on hacks language; the',
		'Use this pillar for the core product overview. For year-specific buying notes, see the',
	],

	// Point cannibal URLs at canonicals
	['/dbd-esp-hack/', '/dbd-esp/'],
	['/dbd-aimbot-hack/', '/dbd-aimbot/'],
	['/best-dbd-cheats/', '/'],
	['best dbd cheats guide', 'The DBD Cheats pillar'],
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
