#!/usr/bin/env node
/**
 * Second-pass cleanup: fix broken partial replacements after adapt-dbd.mjs
 * Run: node scripts/fix-dbd-content.mjs
 */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const REPLACEMENTS = [
	// Broken slugs / URLs
	['dbd-growth-run-aggressive-strategies', 'dbd-growth-run-aggressive-strategies'],
	['dbd-growth-run-meta', 'dbd-growth-run-meta'],
	['dbd-chase', 'dbd-growth-run'],
	['escape from dbd', 'the dbd'],
	['escape-from-dbd', 'the-dbd'],
	['escape from the dbd', 'the dbd'],
	['escape-from-the-dbd', 'the-dbd'],
	['eft cheats', 'dbd cheats'],
	['eft hacks', 'dbd cheats'],
	['eft esp', 'dbd esp'],
	['eft undetected', 'dbd undetected'],
	['budget eft', 'budget dbd'],
	['EFT Cheat', 'Isle Hack'],
	['EFT cheat', 'dbd hack'],
	['EFT shops', 'dbd hack shops'],
	['EFT Shop', 'Isle Hack Shop'],
	['EFT ', 'Isle '],
	[' eft', ' dbd'],
	['"eft', '"dbd'],
	['eft"', 'dbd"'],

	// Tarkov maps → Isle locations
	['Streets of Dead by Daylight', 'MacMillan Estate river zones'],
	['Interchange', 'Gateway'],
	['Factory', 'high-traffic zones'],
	['Woods, and Interchange', 'forests, and river zones'],
	['Woods and Interchange', 'forests and river zones'],
	['on Autohaven Wreckers or in dark Gateway hallways', 'on Autohaven Wreckers or near river banks'],
	['on Autohaven Wreckers or dark Gateway interiors', 'on Autohaven Wreckers or dense river cover'],

	// Tarkov mechanics → Isle mechanics
	['PMC loadouts', 'killer builds'],
	['PMC loadout', 'killer build'],
	['PMC and Scav', 'survivor and killer'],
	['PMC and chases', 'survivor and killer'],
	['PMC fights', 'player chases'],
	['PMC fight', 'player chase'],
	['PMC queues', 'survival queues'],
	['PMC queue', 'survival queue'],
	['PMC block', 'trial block'],
	['PMC kit', 'grown killer'],
	['PMC kits', 'grown killers'],
	['PMC Raid', 'Survival Session'],
	['PMC Raids', 'Survival Sessions'],
	['PMC raid', 'trial'],
	['PMC raids', 'trials'],
	['PMC ', 'player '],
	[' PMC', ' player'],
	['PMCs', 'players'],
	['PMC', 'player'],
	['Scav Runs', 'Growth Runs'],
	['Scav Run', 'Growth Run'],
	['Scav runs', 'chases'],
	['Scav run', 'chase'],
	['Scav strategies', 'growth strategies'],
	['Scav player', 'juvenile player'],
	['Scav players', 'juvenile players'],
	['Scav kits', 'juvenile builds'],
	['Scav kit', 'juvenile build'],
	['Scav aggression', 'growth aggression'],
	['Scav strategies', 'growth strategies'],
	['Scav AI', 'AI killer'],
	['Scav ', 'juvenile '],
	[' Scav', ' juvenile'],
	['Scavs', 'juveniles'],
	['Scav', 'juvenile'],
	['scav fights', 'pack fights'],
	['scav fight', 'pack fight'],
	['scav AI', 'AI killer'],
	['scav strategies', 'growth strategies'],
	['scav run', 'chase'],
	['scav runs', 'chases'],

	// Weapons / loadout terms
	['weapon tier list', 'killer tier list'],
	['Weapon Tier List', 'Dinosaur Tier List'],
	['weapon tier', 'killer tier'],
	['Best Guns for Raids', 'Best Dinosaurs for Survival'],
	['What Wins Raids', 'What Wins Sessions'],
	['ARs, SMGs, skill-checks', 'killers, ambush builds, skill-check species'],
	['AR fights', 'mid-size chases'],
	['SMG pushes', 'ambush rushes'],
	['skill-check AR fights', 'skill-check ambush chases'],
	['Per-weapon', 'Per-species'],
	['per-weapon', 'per-species'],
	['Ammo tables', 'Growth stat tables'],
	['ammo economy', 'growth economy'],
	['ammo that win', 'stats that win'],
	['armor pen', 'damage output'],
	['armor classes', 'growth tiers'],
	['class-five plates', 'adult killers'],
	['M4 looks boring', 'mid-tier species looks boring'],
	['m4a1 dbd', 'rex dbd'],
	['Flea Market', 'in-game store'],
	['flea market', 'in-game store'],
	['flea money', 'in-game currency'],
	['roubles', 'growth points'],
	['growth stat tables', 'growth stat tables'],
	['stash', 'progress'],
	['meds', 'stamina recovery'],
	['healing items', 'stamina recovery'],
	['magazine reloads', 'ability cooldowns'],
	['mag ', 'ability '],
	['recoil', 'attack timing'],
	['TTK', 'kill speed'],
	['time-to-kill', 'kill speed'],
	['shooting range', 'practice server'],
	['offline mode', 'practice server'],
	['offline bots', 'AI killers'],
	['offline practice', 'practice server trials'],
	['peek practice', 'ambush practice'],
	['head height', 'bite height'],
	['sensitivity', 'aim smoothing'],
	['footsteps', 'killer calls'],
	['Operators', 'species'],
	['loadout drops', 'high-value objectives'],
	['loadout spine', 'growth path'],
	['loadout comparison', 'species comparison'],
	['Battle Royale', 'survival'],
	['battle-royale', 'survival-game'],
	['unlock all', 'unlock all species'],

	// Misc game terms
	['boss spawn rates', 'apex spawn rates'],
	['Boss and Scav filters', 'Apex and juvenile filters'],
	['Boss and extract', 'Apex and nest'],
	['boss markers', 'apex markers'],
	['boss and player', 'apex and player'],
	['container highlights', 'carcass highlights'],
	['containers', 'carcasses'],
	['container', 'carcass'],
	['Corpse and container', 'Corpse and carcass'],
	['Player gear', 'Player growth stage'],
	['third-party', 'third-player'],
	['third-parties', 'third-players'],
	['squad fights', 'pack fights'],
	['squad fight', 'pack fight'],
	['squad drops', 'pack spawns'],
	['squad', 'pack'],
	['duos', 'pairs'],
	['competitive lobbies', 'official servers'],
	['competitive', 'official server'],
	['tournament', 'community event'],
	['VOD', 'stream replay'],
	['spawn rich', 'spawn with growth advantage'],
	['spawn plans', 'nest plans'],
	['queue a juvenile', 'spawn as a juvenile'],
	['queue anyway', 'queue anyway'],
	['queueing', 'spawning in'],
	['queue', 'queue'],
	['an Dead by Daylight', 'a Dead by Daylight'],
	['what-are-dead-by-daylight-cheats', 'what-are-dbd-cheats'],
	['are-dead-by-daylight-cheats-undetected', 'are-dbd-hacks-undetected'],
	['what-is-a-dbd-wallhack', 'what-is-an-dbd-wallhack'],
	['pmc-trials-and-chases', 'survivor-and-killer-trials'],
	['PMC Raid and Scav Support', 'Herbivore and Carnivore Support'],
	['vanlifeeft', 'vanlifedbd'],
	['vanLifeDBD', 'vanLifeDBD'],
	['Easy Anti-Cheat Anti-Cheat', 'Easy Anti-Cheat'],
	['Easy Anti-Cheat bypass maintenance guide', 'Easy Anti-Cheat maintenance guide'],
	['Easy Anti-Cheat updates', 'Easy Anti-Cheat updates'],
	['chapter cycled', 'patched'],
	['chapter cycle update', 'major update'],
	['chapter cycle', 'patch cycle'],
	['chase-aggressive', 'growth-run-aggressive'],
	['chase strategies', 'growth-run strategies'],
	['chase player', 'growth-run player'],
	['chase,', 'chase,'],
	['chase.', 'chase.'],
	['chase ', 'chase '],
	['chases', 'chases'],
	['chase', 'chase'],
	['loot filters', 'carcass filters'],
	['loot pins', 'carcass pins'],
	['loot is worth looting', 'carcasses are worth chaseing'],
	['loot ESP', 'generator ESP'],
	['loot routes', 'loop routes'],
	['loot worth', 'carcass worth'],
	[' loot', ' carcasses'],
	['Loot and', 'Carcass and'],
	['loot and', 'carcass and'],
	['enemy players and loot', 'enemy players and carcasses'],
	['spotting loot', 'spotting carcasses'],
	['Print Loot', 'Find Carcasses'],
	['empty pockets', 'low growth'],
	['gear instead', 'growth instead'],
	['Leave With Gear', 'Leave With Growth'],
	['gear appearance', 'skin appearance'],
	['apparel', 'skins'],
	['cosmetic shop', 'in-game cosmetics'],
	['skin leaks', 'skin previews'],
	['Skin Leaks', 'Skin Previews'],
	['patch notes change player loadouts', 'patch notes change killer stats'],
	['Raids in 2026', 'Sessions in 2026'],
	['for Raids', 'for Sessions'],
	['Raids', 'Sessions'],
	['Raids', 'Sessions'],
	['Raids', 'Sessions'],
	['Raids', 'Sessions'],
	['Raids', 'Sessions'],
	['Raids', 'Sessions'],
	['Raids', 'Sessions'],
	['Raids', 'Sessions'],
	['Raids', 'Sessions'],
	['Raids', 'Sessions'],
	['before you queue a juvenile', 'before you spawn as a juvenile'],
	['Isle cheats pillar', 'The DBD Cheats pillar'],
	['dbd cheats pillar', 'The DBD Cheats pillar'],
	['"dbd cheats"', '"dbd cheats"'],
	['"escape from dbd cheats"', '"dbd cheats"'],
	['Isle cheats package', 'The DBD Cheats package'],
	['dbd cheats package', 'The DBD Cheats package'],
	['undetected dbd cheats', 'undetected dbd cheats'],
	['Isle cheats', 'The DBD Cheats'],
	['dbd cheats', 'dbd cheats'],
	['Isle cheat', 'Dead by Daylight hack'],
	['dbd cheat', 'dbd cheat'],
	['DBD Intel', 'DBD Intel'],
	['dbd esp', 'DBD ESP'],
	['dbd esp', 'DBD ESP'],
	['dbd aimbot', 'DBD Aimbot'],
	['dbd aimbot', 'DBD Aimbot'],
	['dbd wallhack', 'dbd wallhack'],
	['dbd radar', 'dbd radar'],
	['DBD Cheats vs Typical Budget EFT', 'The DBD Cheats vs Typical Budget Isle'],
	['Budget EFT Cheat Shops', 'Budget Isle Hack Shops'],
	['Budget EFT', 'Budget Isle'],
	['against budget EFT', 'against budget dbd'],
	['EFT Cheat Shops', 'Isle Hack Shops'],
	['scavRunCombat', 'growthRunCombat'],
	['scavRunMode', 'growthRunMode'],
	['battleRoyaleCombat', 'survivalCombat'],
	['battleRoyaleIsland', 'survivalIsland'],
	['rebootFight', 'ambushFight'],
	['squadFight', 'packFight'],
	['loadoutBuilder', 'nestBuilder'],
	['cheatsCombat', 'hacksCombat'],
	['cheatsPackage', 'hacksPackage'],
	['headerArt', 'headerArt'],
	['playerEsp', 'dinoEsp'],
	['aimbotCombat', 'aimbotCombat'],
	['espWallhack', 'espWallhack'],
	['heroImage', 'heroImage'],
	['Undetected EFT cheats for PC.', 'Undetected The DBD Cheats for PC.'],
	['besttarkovcheats.com', 'dbdcheats.org'],
	['www.besttarkovcheats.com', 'www.dbdcheats.org'],
];

const TEXT_EXTENSIONS = new Set(['.ts', '.tsx', '.js', '.mjs', '.astro', '.json', '.md', '.mdc', '.txt']);
const TARGET_DIRS = ['src', 'scripts', 'public', 'functions'];
const SKIP_FILES = new Set(['adapt-tarkov.mjs', 'adapt-dbd.mjs', 'fix-dbd-content.mjs']);

async function walk(dir, files = []) {
	const entries = await readdir(dir, { withFileTypes: true });
	for (const entry of entries) {
		if (entry.name === 'node_modules' || entry.name === 'dist' || entry.name === '.git') continue;
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) await walk(full, files);
		else files.push(full);
	}
	return files;
}

function applyReplacements(content) {
	let result = content;
	for (const [from, to] of REPLACEMENTS) {
		if (from === to) continue;
		result = result.split(from).join(to);
	}
	return result;
}

async function main() {
	let changed = 0;
	for (const dir of TARGET_DIRS) {
		const base = path.join(ROOT, dir);
		const files = await walk(base);
		for (const file of files) {
			if (!TEXT_EXTENSIONS.has(path.extname(file))) continue;
			if (SKIP_FILES.has(path.basename(file))) continue;
			const original = await readFile(file, 'utf8');
			const updated = applyReplacements(original);
			if (updated !== original) {
				await writeFile(file, updated, 'utf8');
				changed++;
			}
		}
	}
	console.log(`Fixed ${changed} files`);
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
