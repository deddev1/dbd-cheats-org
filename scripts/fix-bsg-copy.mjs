#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';

const files = ['scripts/i18n-data/pages-en.mjs', 'scripts/generate-blog-posts.mjs'];
const pairs = [
	["Activision's", "The Isle team'"],
	['Activision\u2019', "The Isle team'"],
	['Activision services', 'The Isle team services'],
	['Activision service', 'The Isle team service'],
	['Activision platform', 'The Isle team platform'],
	['Activision outages', 'launcher outages'],
	['Activision bans', 'The Isle team bans'],
	['Activision security', 'Easy Anti-Cheat security'],
	['Activision Status', 'The Isle on Steam'],
	['Activision The Isle', 'The Isle'],
	['Activision Support', 'The Isle on Steam'],
	['Activision', 'The Isle team'],
	['EAC guide', 'Easy Anti-Cheat guide'],
	['undetected EAC notes', 'undetected Easy Anti-Cheat notes'],
	['status.epicgames.com', 'store.steampowered.com/app/376210/The_Isle'],
	['www.epicgames.com/isle', 'store.steampowered.com/app/376210/The_Isle'],
	['www.isle.com/official server', 'store.steampowered.com/app/376210/The_Isle'],
	['https://www.isle.com/', 'https://store.steampowered.com/app/376210/The_Isle/'],
	['The Isle.com', 'The Isle'],
	['The Isle Competitive', 'The Isle'],
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
