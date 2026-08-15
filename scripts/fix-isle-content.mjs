#!/usr/bin/env node
/**
 * Second-pass cleanup: fix broken partial replacements after adapt-theisle.mjs
 * Run: node scripts/fix-isle-content.mjs
 */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const REPLACEMENTS = [
	// Broken slugs / URLs
	['isle-growth-run-aggressive-strategies', 'isle-growth-run-aggressive-strategies'],
	['isle-growth-run-meta', 'isle-growth-run-meta'],
	['isle-growth run', 'isle-growth-run'],
	['escape from isle', 'the isle'],
	['escape-from-isle', 'the-isle'],
	['escape from the isle', 'the isle'],
	['escape-from-the-isle', 'the-isle'],
	['eft cheats', 'the isle cheats'],
	['eft hacks', 'the isle hacks'],
	['eft esp', 'isle esp'],
	['eft undetected', 'isle undetected'],
	['budget eft', 'budget isle'],
	['EFT Cheat', 'Isle Hack'],
	['EFT cheat', 'isle hack'],
	['EFT shops', 'isle hack shops'],
	['EFT Shop', 'Isle Hack Shop'],
	['EFT ', 'Isle '],
	[' eft', ' isle'],
	['"eft', '"isle'],
	['eft"', 'isle"'],

	// Tarkov maps → Isle locations
	['Streets of The Isle', 'Isla Spire river zones'],
	['Interchange', 'Gateway'],
	['Factory', 'high-traffic zones'],
	['Woods, and Interchange', 'forests, and river zones'],
	['Woods and Interchange', 'forests and river zones'],
	['in forest zones or in dark Gateway hallways', 'in forest zones or near river banks'],
	['in forest zones or dark Gateway interiors', 'in forest zones or dense river cover'],

	// Tarkov mechanics → Isle mechanics
	['PMC loadouts', 'dinosaur builds'],
	['PMC loadout', 'dinosaur build'],
	['PMC and Scav', 'herbivore and carnivore'],
	['PMC and growth runs', 'herbivore and carnivore'],
	['PMC fights', 'player hunts'],
	['PMC fight', 'player hunt'],
	['PMC queues', 'survival queues'],
	['PMC queue', 'survival queue'],
	['PMC block', 'session block'],
	['PMC kit', 'grown dinosaur'],
	['PMC kits', 'grown dinosaurs'],
	['PMC Raid', 'Survival Session'],
	['PMC Raids', 'Survival Sessions'],
	['PMC raid', 'survival session'],
	['PMC raids', 'survival sessions'],
	['PMC ', 'player '],
	[' PMC', ' player'],
	['PMCs', 'players'],
	['PMC', 'player'],
	['Scav Runs', 'Growth Runs'],
	['Scav Run', 'Growth Run'],
	['Scav runs', 'growth runs'],
	['Scav run', 'growth run'],
	['Scav strategies', 'growth strategies'],
	['Scav player', 'juvenile player'],
	['Scav players', 'juvenile players'],
	['Scav kits', 'juvenile builds'],
	['Scav kit', 'juvenile build'],
	['Scav aggression', 'growth aggression'],
	['Scav strategies', 'growth strategies'],
	['Scav AI', 'AI dinosaur'],
	['Scav ', 'juvenile '],
	[' Scav', ' juvenile'],
	['Scavs', 'juveniles'],
	['Scav', 'juvenile'],
	['scav fights', 'pack fights'],
	['scav fight', 'pack fight'],
	['scav AI', 'AI dinosaur'],
	['scav strategies', 'growth strategies'],
	['scav run', 'growth run'],
	['scav runs', 'growth runs'],

	// Weapons / loadout terms
	['weapon tier list', 'dinosaur tier list'],
	['Weapon Tier List', 'Dinosaur Tier List'],
	['weapon tier', 'dinosaur tier'],
	['Best Guns for Raids', 'Best Dinosaurs for Survival'],
	['What Wins Raids', 'What Wins Sessions'],
	['ARs, SMGs, long-ranges', 'carnivores, ambush builds, long-range species'],
	['AR fights', 'mid-size hunts'],
	['SMG pushes', 'ambush rushes'],
	['long-range AR fights', 'long-range ambush hunts'],
	['Per-weapon', 'Per-species'],
	['per-weapon', 'per-species'],
	['Ammo tables', 'Growth stat tables'],
	['ammo economy', 'growth economy'],
	['ammo that win', 'stats that win'],
	['armor pen', 'damage output'],
	['armor classes', 'growth tiers'],
	['class-five plates', 'adult carnivores'],
	['M4 looks boring', 'mid-tier species looks boring'],
	['m4a1 isle', 'rex isle'],
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
	['offline bots', 'AI dinosaurs'],
	['offline practice', 'practice server sessions'],
	['peek practice', 'ambush practice'],
	['head height', 'bite height'],
	['sensitivity', 'aim smoothing'],
	['footsteps', 'dinosaur calls'],
	['Operators', 'species'],
	['loadout drops', 'fresh carcasses'],
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
	['spawn in a juvenile', 'spawn as a juvenile'],
	['queue anyway', 'spawn in anyway'],
	['queueing', 'spawning in'],
	['queue', 'spawn in'],
	['an The Isle', 'a The Isle'],
	['what-are-the-isle-hacks', 'what-are-isle-hacks'],
	['are-the-isle-hacks-undetected', 'are-isle-hacks-undetected'],
	['what-is-a-isle-wallhack', 'what-is-an-isle-wallhack'],
	['pmc-sessions-and-growth runs', 'herbivore-and-carnivore-sessions'],
	['PMC Raid and Scav Support', 'Herbivore and Carnivore Support'],
	['vanlifeeft', 'vanlifeisle'],
	['vanLifeIsle', 'vanLifeIsle'],
	['Easy Anti-Cheat Anti-Cheat', 'Easy Anti-Cheat'],
	['Easy Anti-Cheat bypass maintenance guide', 'Easy Anti-Cheat maintenance guide'],
	['Easy Anti-Cheat updates', 'Easy Anti-Cheat updates'],
	['update cycled', 'patched'],
	['update cycle update', 'major update'],
	['update cycle', 'patch cycle'],
	['growth run-aggressive', 'growth-run-aggressive'],
	['growth run strategies', 'growth-run strategies'],
	['growth run player', 'growth-run player'],
	['growth run,', 'growth run,'],
	['growth run.', 'growth run.'],
	['growth run ', 'growth run '],
	['growth runs', 'growth runs'],
	['growth run', 'growth run'],
	['loot filters', 'carcass filters'],
	['loot pins', 'carcass pins'],
	['loot is worth looting', 'carcasses are worth hunting'],
	['loot ESP', 'carcass ESP'],
	['loot routes', 'hunting routes'],
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
	['patch notes change player loadouts', 'patch notes change dinosaur stats'],
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
	['before you spawn in a juvenile', 'before you spawn as a juvenile'],
	['Isle cheats pillar', 'The Isle Hacks pillar'],
	['the isle hacks pillar', 'The Isle Hacks pillar'],
	['"isle cheats"', '"the isle cheats"'],
	['"escape from isle cheats"', '"the isle cheats"'],
	['Isle cheats package', 'The Isle Hacks package'],
	['isle cheats package', 'The Isle Hacks package'],
	['undetected isle cheats', 'undetected the isle hacks'],
	['Isle cheats', 'The Isle Hacks'],
	['isle cheats', 'the isle hacks'],
	['Isle cheat', 'The Isle hack'],
	['isle cheat', 'the isle hack'],
	['Isle Intel', 'Isle Intel'],
	['Isle esp', 'Isle ESP'],
	['isle esp', 'Isle ESP'],
	['Isle aimbot', 'Isle Aimbot'],
	['isle aimbot', 'Isle Aimbot'],
	['Isle wallhack', 'Isle wallhack'],
	['Isle radar', 'Isle radar'],
	['Isle Hacks vs Typical Budget EFT', 'The Isle Hacks vs Typical Budget Isle'],
	['Budget EFT Cheat Shops', 'Budget Isle Hack Shops'],
	['Budget EFT', 'Budget Isle'],
	['against budget EFT', 'against budget isle'],
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
	['Undetected EFT cheats for PC.', 'Undetected The Isle Hacks for PC.'],
	['besttarkovcheats.com', 'theislehack.org'],
	['www.besttarkovcheats.com', 'www.theislehack.org'],
];

const TEXT_EXTENSIONS = new Set(['.ts', '.tsx', '.js', '.mjs', '.astro', '.json', '.md', '.mdc', '.txt']);
const TARGET_DIRS = ['src', 'scripts', 'public', 'functions'];
const SKIP_FILES = new Set(['adapt-tarkov.mjs', 'adapt-theisle.mjs', 'fix-isle-content.mjs']);

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
