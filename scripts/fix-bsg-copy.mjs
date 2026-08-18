#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';

const files = ['scripts/i18n-data/pages-en.mjs', 'scripts/generate-blog-posts.mjs'];
const pairs = [
	["Activision's", "Behaviour Interactive'"],
	['Activision\u2019', "Behaviour Interactive'"],
	['Activision services', 'Behaviour Interactive services'],
	['Activision service', 'Behaviour Interactive service'],
	['Activision platform', 'Behaviour Interactive platform'],
	['Activision outages', 'launcher outages'],
	['Activision bans', 'Behaviour Interactive bans'],
	['Activision security', 'Easy Anti-Cheat security'],
	['Activision Status', 'Dead by Daylight on Steam'],
	['Activision Dead by Daylight', 'Dead by Daylight'],
	['Activision Support', 'Dead by Daylight on Steam'],
	['Activision', 'Behaviour Interactive'],
	['EAC guide', 'Easy Anti-Cheat guide'],
	['undetected EAC notes', 'undetected Easy Anti-Cheat notes'],
	['status.epicgames.com', 'store.steampowered.com/app/381210/Dead_by_Daylight'],
	['www.epicgames.com/dbd', 'store.steampowered.com/app/381210/Dead_by_Daylight'],
	['www.dbd.com/official server', 'store.steampowered.com/app/381210/Dead_by_Daylight'],
	['https://www.dbd.com/', 'https://store.steampowered.com/app/381210/Dead_by_Daylight/'],
	['Dead by Daylight.com', 'Dead by Daylight'],
	['Dead by Daylight Competitive', 'Dead by Daylight'],
];

for (const f of files) {
	let c = readFileSync(f, 'utf8');
	const orig = c;
	for (const [a, b] of pairs) c = c.split(a).join(b);
	if (c !== orig) {
		writeFileSync(f, c);
		console.log('updated', f);
	} else {
		console.log('no change', f);
	}
}
