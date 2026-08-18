import { HERO_IMAGES, clampTitle, clampDesc, section, stripZadeyoFromMeta, EXT } from './constants.mjs';

/** Richest English page content — source of truth for structure. */
export const enPages = {
	home: {
		title: 'The DBD Cheats | Undetected Aimbot, ESP & Wallhack 2026',
		description:
			'Dead by Daylight hacks for PC with aimbot, ESP and wallhack features. Explore gameplay features, pricing, setup information and the latest updates.',
		h1: 'The DBD Cheats — Undetected ESP, Wallhack & Aimbot',
		intro:
			'The DBD Cheats is the undetected The DBD Cheats package for Windows PC — built for Dead by Daylight on Windows PC. DBD ESP wallhack, 2D radar, and DBD Aimbot with Easy Anti-Cheat maintenance after every major patch.',
		imageAlt: "The DBD Cheats homepage hero — ESP and aimbot for Dead by Daylight",
		galleryTitle: 'The DBD Cheats gallery — ESP, Aimbot and wallhack visuals',
		ctaPrimary: 'Buy The DBD Cheats',
		ctaSecondary: 'See all features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'Why players choose dbd cheats in 2026',
				'Dead by Daylight rewards map awareness. The DBD Cheats combines ESP wallhack for enemy players and carcasses, radar-style threat cues, and configurable Aimbot so you can read fights before committing — on trial, chase, and official servers.',
				`Official seasons, patches, and anti-cheat updates come from ${EXT.dbd} and ${EXT.eac}. We rebuild ESP, radar, and Aimbot modules when those patches require maintenance — then post status on the <a href="/updates/">Updates page</a>.`,
				'Licenses ship digitally after payment confirmation. Monthly ($35) and lifetime ($150) plans include Easy Anti-Cheat maintenance rebuilds when anti-cheat or game patches require updates.',
				'Start with the <a href="/dbd-hacks/">The DBD Cheats pillar</a>, <a href="/dbd-esp/">ESP guide</a>, <a href="/dbd-aimbot/">Aimbot controls</a>, and <a href="/dbd-hacks/">undetected status</a> pages if you are comparing tools before checkout.',
			),
			section(
				'ESP wallhack, radar hack, and Aimbot in one license',
				'Instead of stacking separate tools, The DBD Cheats bundles player ESP wallhack, generator markers, 2D radar overlays, and Aimbot profiles in one undetected package built for survivor and killer trials — covering both “dbd cheats” and “dbd cheats” search intent.',
				'Browse the <a href="/dbd-esp/">ESP</a>, <a href="/dbd-aimbot/">Aimbot</a>, <a href="/dbd-esp/">wallhack</a>, and <a href="/dbd-radar-hack/">radar</a> pages for control details — or jump to <a href="/pricing/">Pricing</a> for monthly and lifetime options.',
				`Before patch days, check ${EXT.status} for Behaviour Interactive service health, then confirm our maintenance notes so you are not spawning in on an outdated build.`,
				'Ready to buy? Open <a href="/pricing/">Pricing</a>, follow <a href="/setup/">Setup</a> after delivery, and keep <a href="/faq/">FAQ</a> / <a href="/support/">Support</a> bookmarked for license questions.',
			),
		],
	},
	'dbd-esp': {
		title: 'DBD ESP 2026 | Player Boxes & Wallhack',
		description:
			'DBD ESP for Windows PC — player boxes, generator markers, and distance readouts. Part of our undetected dbd cheats for Dead by Daylight.',
		h1: 'DBD ESP — Player Boxes & Wallhack',
		intro:
			'DBD ESP visibility tools for trial and chase. Read enemy packs, survivors, killers, carcasses, and distance before you commit — toggleable DBD ESP wallhack overlays bundled in our The DBD Cheats package.',
		imageAlt: "DBD ESP player boxes and distance readouts in a trial",
		galleryTitle: 'DBD ESP overlay visuals',
		ctaPrimary: 'Buy The DBD Cheats',
		ctaSecondary: 'dbd wallhack guide',
		ctaSecondaryHref: '/dbd-esp/',
		sections: [
			section(
				'What DBD ESP solves in trials',
				'Dead by Daylight maps punish incomplete information. The DBD Cheats ESP wallhack helps you spot enemy packs early, spot survivors and killers before they push your angle, and mark high-value objectives worth the detour.',
				'On trial, chase, and official servers, that visibility gap is often the difference between a clean third-player and a patched pack. ESP ships bundled with radar overlays and Aimbot in one license.',
				`Dead by Daylight’s live seasons and map updates are published by Behaviour Interactive (${EXT.dbd}). When POIs or trial rules shift, ESP categories stay useful because they track players and carcasses — not a single static landmark.`,
			),
			section(
				'Player, apex, and generator ESP wallhack categories',
				'Toggle enemy player outlines, apex markers, generator cues, and carcass pins so only trial-critical ESP wallhack overlays stay active during rotations.',
				'Distance readouts and snapline options help you control engagement range. Team and enemy colour coding supports survivor and killer trials lobbies alike.',
				'Compare category detail on the <a href="/dbd-esp/">wallhack page</a> and pair visibility with the <a href="/dbd-radar-hack/">radar hack</a> for flanks outside your FOV.',
				[
					'Enemy player ESP outlines with distance',
					'Carcass and generator markers for faster rotations',
					'Apex and nest awareness cues',
					'Toggleable categories to reduce overlay noise',
				],
			),
			section(
				'Undetected ESP with Easy Anti-Cheat maintenance',
				'The DBD Cheats ESP wallhack is maintained for Dead by Daylight with rebuilds after Easy Anti-Cheat patches. Check the <a href="/updates/">Updates page</a> before you queue — no cheat guarantees permanent undetected status.',
				`Read ${EXT.eac} for how anti-cheat updates ship, then cross-check our <a href="/updates/">Easy Anti-Cheat maintenance guide</a> after major patches.`,
				'Checkout includes instant digital delivery for Windows 10 and 11. After purchase, follow the <a href="/setup/">Setup guide</a> and tune overlays before your first trial.',
			),
			section(
				'ESP next steps — Aimbot, pricing, and support',
				'ESP alone wins information wars; Aimbot covers the chase. Review <a href="/dbd-aimbot/">Aimbot controls</a> if you want one license for visibility and assist.',
				'Compare monthly ($35) and lifetime ($150) on <a href="/pricing/">Pricing</a>, then keep <a href="/support/">Support</a> ready if activation needs a human reply.',
				'Still researching? The <a href="/dbd-hacks/">The DBD Cheats pillar</a> and <a href="/dbd-hacks/">2026 buyer guide</a> summarize the full stack.',
			),
		],
	},
	'dbd-aimbot': {
		title: 'DBD Aimbot 2026 | Soft Aim for Windows PC',
		description:
			'DBD Aimbot with soft aim tuning for Windows PC. FOV, bone priority, and hotkeys bundled with ESP boxes in our The DBD Cheats package.',
		h1: 'DBD Aimbot — Soft Aim for Windows PC',
		intro:
			'Configurable Aimbot tools for Dead by Daylight chases. Smoothness, FOV, bone priority, and per-killer profiles — bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: "DBD Aimbot and soft aim controls on Windows PC",
		galleryTitle: 'DBD Aimbot combat previews',
		ctaPrimary: 'Buy The DBD Cheats',
		ctaSecondary: 'See ESP wallhack',
		ctaSecondaryHref: '/dbd-esp/',
		sections: [
			section(
				'Aimbot tuned for Dead by Daylight combat pace',
				'Dead by Daylight mixes skill-check mid-size chases with close-quarters ambush rushes. The DBD Cheats Aimbot includes smoothness, FOV, and aim smoothing controls tuned for that pace — with hotkey toggles mid-match.',
				'Bone priority and target selection options cover closest player, lowest health, or highest-threat targets during pack fights and close-range pack fights.',
				`Weapon balance and season rules change via ${EXT.dbd}. Revisit Aimbot FOV and smoothness after major combat patches so assist still matches the live kill speed windows.`,
			),
			section(
				'Per-species Aimbot profiles',
				'Save separate Aimbot profiles for killers, ambush builds, and skill-check species. Switch between skill-check ambush chases and high-traffic zone clears without reopening menus every trial.',
				'Prefer softer tracking? Read the <a href="/dbd-aimbot/">soft aim guide</a>.',
				'Aimbot ships alongside <a href="/dbd-esp/">ESP wallhack</a> and <a href="/dbd-radar-hack/">2D radar</a> in the same The DBD Cheats license.',
				[
					'Smoothness, FOV, and aim smoothing sliders',
					'Bone priority and threat-based targeting',
					'Hotkeys to toggle Aimbot mid-match',
					'Per-species profile slots for AR / SMG / skill-check',
				],
			),
			section(
				'Easy Anti-Cheat maintenance for undetected Aimbot',
				'The DBD Cheats rebuilds Aimbot behavior when Easy Anti-Cheat or major Dead by Daylight patches land. Maintenance notes appear on the <a href="/updates/">Updates page</a> so you know when a new build is live.',
				`Cross-check service health on ${EXT.status} and anti-cheat context on ${EXT.eac}, then follow our <a href="/updates/">Easy Anti-Cheat maintenance guide</a> before spawning in on patch day.`,
				'Responsible settings matter — undetected status requires ongoing maintenance, not set-and-forget configs. Start with conservative smoothness, then tune.',
			),
			section(
				'Buy Aimbot with ESP — pricing and setup',
				'Every plan includes Aimbot plus ESP and radar. Compare options on <a href="/pricing/">Pricing</a>, then activate with the <a href="/setup/">Setup guide</a>.',
				'Questions about delivery or profiles? Use <a href="/faq/">FAQ</a> or email <a href="/support/">Support</a> with your order ID.',
				'Want the full control list first? Open <a href="/features/">Features</a> before checkout.',
			),
		],
	},
	features: {
		title: 'The DBD Cheats Features | ESP, Soft Aim & RadarRadar',
		description:
			'Full dbd cheats feature list: ESP boxes, soft aim, radar, and toggles for Windows PC. Review controls before checkout.',
		h1: 'The DBD Cheats Features — Full Control List',
		intro:
			'Every ESP wallhack, radar hack, and Aimbot control included in The DBD Cheats for Dead by Daylight on Windows PC — with Easy Anti-Cheat maintenance after major patches.',
		imageAlt: "The DBD Cheats features — ESP, soft aim, and radar screenshots",
		galleryTitle: 'The DBD Cheats feature gallery',
		ctaPrimary: 'Buy The DBD Cheats',
		ctaSecondary: 'View pricing',
		ctaSecondaryHref: '/pricing/',
		sections: [
			section(
				'ESP wallhack and visibility features',
				'Enemy player ESP wallhack, apex and nest awareness cues, carcass and water markers, distance readouts, snaplines, and toggleable ESP categories for trial-critical overlays only.',
				'Team and enemy colour coding supports survivor and killer trials. Deep-dive the <a href="/dbd-esp/">ESP page</a> and <a href="/dbd-esp/">wallhack guide</a> for category-level detail.',
				`Map and carcasses systems evolve with ${EXT.dbd} patch cycle and map updates — toggleable ESP categories keep overlays useful when POIs rotate.`,
			),
			section(
				'Radar hack and Aimbot controls',
				'2D radar overlay with directional threat cues, configurable range for rotations and late-trial generators, plus Aimbot smoothness, FOV, bone priority, hotkeys, and per-killer profiles.',
				'All tools share in-client toggles so you can adjust ESP, radar, and Aimbot during live Dead by Daylight trials. See <a href="/dbd-radar-hack/">radar</a> and <a href="/dbd-aimbot/">Aimbot</a> for settings walkthroughs.',
				'Prefer a menu-first workflow? The <a href="/dbd-hacks/">mod menu page</a> explains mid-match toggles without alt-tabbing.',
			),
			section(
				'Licensing, delivery, and Easy Anti-Cheat maintenance',
				'Monthly ($35) and lifetime ($150) licenses with instant digital delivery. Easy Anti-Cheat maintenance rebuilds publish on the <a href="/updates/">Updates page</a> after anti-cheat or game patches.',
				`Monitor ${EXT.status} on patch days, then confirm rebuild notes before you queue. Setup and billing help lives on <a href="/support/">Support</a> and support@dbdcheats.org.`,
				'Next step: compare plans on <a href="/pricing/">Pricing</a> or read <a href="/dbd-hacks/">how undetected maintenance works</a>.',
			),
		],
	},
	pricing: {
		title: 'The DBD Cheats Pricing | $35/mo or $150 Life',
		description:
			'dbd cheats pricing: $35/month or $150 lifetime for ESP, soft aim, and radar on Windows PC. Instant delivery — pick a plan.',
		h1: 'The DBD Cheats Pricing — Monthly & Lifetime',
		intro:
			'Choose monthly or lifetime access to undetected The DBD Cheats — ESP wallhack, radar hack, and Aimbot for Dead by Daylight on Windows PC. Instant digital delivery after payment.',
		imageAlt: "The DBD Cheats store plans for monthly and lifetime licenses",
		galleryTitle: 'The DBD Cheats package visuals',
		ctaPrimary: 'Buy The DBD Cheats',
		ctaSecondary: 'Read setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'Monthly and lifetime The DBD Cheats plans',
				'Monthly license: $35 USD for 30 days of full ESP wallhack, radar hack, and Aimbot access with Easy Anti-Cheat maintenance included during your term.',
				'Lifetime license: $150 USD for long-term access to the same undetected The DBD Cheats package — ideal if you play Dead by Daylight regularly across seasons.',
				'Both plans unlock the same feature stack described on <a href="/features/">Features</a>. Choose monthly to test, or lifetime if you already know you want the full toolkit.',
			),
			section(
				'What every plan includes',
				'Player ESP wallhack, generator markers, 2D radar overlays, Aimbot controls, in-client toggles, and maintenance rebuilds after Easy Anti-Cheat or major Dead by Daylight patches.',
				`Season calendars and client updates come from ${EXT.dbd}. Active licenses receive rebuild access when we publish maintenance on <a href="/updates/">Updates</a>.`,
				'Digital delivery starts after payment confirmation. Keep your order reference for <a href="/support/">Support</a> requests and follow <a href="/setup/">Setup</a> for first launch.',
			),
			section(
				'Refund, billing, and buying checklist',
				'Review the <a href="/refund-policy/">Refund Policy</a> before purchase. For billing or delivery issues, contact Support with your order details.',
				'Prices are listed in USD. Availability is worldwide for Windows 10 and 11 PCs.',
				'Still comparing tools? Read <a href="/dbd-hacks/">dbd cheats</a>, <a href="/dbd-hacks/">undetected status</a>, and <a href="/faq/">FAQ</a> before you checkout.',
			),
		],
	},
	setup: {
		title: 'The DBD Cheats Setup | Windows PC Guide',
		description:
			'Set up dbd cheats on Windows PC — activate ESP boxes, soft aim profiles, and . Check Easy Anti-Cheat updates before your first queue.',
		h1: 'The DBD Cheats Setup — Windows PC Guide',
		intro:
			'Install and configure The DBD Cheats for Dead by Daylight on Windows 10 or 11. Activate your license, load ESP wallhack and Aimbot profiles, and verify Easy Anti-Cheat maintenance status before spawning in.',
		imageAlt: "The DBD Cheats setup guide screenshot for Windows PC",
		galleryTitle: 'The DBD Cheats setup visuals',
		ctaPrimary: 'Buy The DBD Cheats',
		ctaSecondary: 'Contact support',
		ctaSecondaryHref: '/support/',
		sections: [
			section(
				'Before you install The DBD Cheats',
				'Confirm your order email and license details. Check the <a href="/updates/">Updates page</a> for the latest Easy Anti-Cheat maintenance build before launching Dead by Daylight.',
				`Also glance at ${EXT.status} if Behaviour Interactive services look unstable on patch day — a platform outage is not a license fault.`,
				'The DBD Cheats requires Windows 10 or 11. Close conflicting overlay software that may interfere with ESP wallhack or Aimbot toggles.',
			),
			section(
				'Activate ESP wallhack and Aimbot profiles',
				'Follow the delivery instructions in your license email. Load default ESP wallhack categories for survivors, killers, and carcasses — then tune radar range and Aimbot smoothness to your playstyle.',
				'Use in-client hotkeys to toggle ESP, radar, and Aimbot mid-match. Details for Easy Anti-Cheat module live on <a href="/dbd-esp/">ESP</a>, <a href="/dbd-aimbot/">Aimbot</a>, and <a href="/dbd-hacks/">mod menu</a>.',
				'Prefer a soft tracking feel? Start with the <a href="/dbd-aimbot/">soft aim</a> recommendations before raising aggressiveness.',
			),
			section(
				'After Dead by Daylight or Easy Anti-Cheat patches',
				'When Behaviour Interactive ships a major Dead by Daylight update or Easy Anti-Cheat patch, revisit Updates before spawning in. Download maintenance rebuilds when posted.',
				`Official anti-cheat background: ${EXT.eac}. Our practical workflow is documented on the <a href="/updates/">Easy Anti-Cheat bypass page</a> and <a href="/dbd-hacks/">undetected guide</a>.`,
				'Contact <a href="/support/">Support</a> with your order ID if activation fails after a patch — include Windows version and error details for faster replies.',
			),
		],
	},
	updates: {
		title: 'The DBD Cheats Updates | Easy Anti-Cheat Maintenance Log',
		description:
			'dbd cheats update log: Easy Anti-Cheat rebuilds for ESP boxes, soft aim, and radar on Windows PC. Check status before spawning in after patches.',
		h1: 'The DBD Cheats Updates — Maintenance Log',
		intro:
			'Track Easy Anti-Cheat maintenance and Dead by Daylight patch rebuilds for the undetected ESP wallhack, radar hack, and Aimbot package. Check here before spawning in after major updates.',
		imageAlt: "The DBD Cheats live status after Easy Anti-Cheat and game patches",
		galleryTitle: 'Dead by Daylight patch and maintenance visuals',
		ctaPrimary: 'Buy The DBD Cheats',
		ctaSecondary: 'Undetected status guide',
		ctaSecondaryHref: '/dbd-hacks/',
		sections: [
			section(
				'Why the Updates page matters',
				'Dead by Daylight and Easy Anti-Cheat receive frequent patches. The DBD Cheats publishes maintenance notes when ESP wallhack, radar, or Aimbot behavior needs a rebuild.',
				`Use ${EXT.status} for Behaviour Interactive platform health and this page for The DBD Cheats build status — both matter on big update days.`,
				'Checking this log before you queue reduces surprises after game days or seasonal launches on trial and chase.',
			),
			section(
				'What maintenance entries cover',
				'Entries note Easy Anti-Cheat compatibility status, rebuilt ESP wallhack overlays, radar range fixes, Aimbot tuning after species balance changes, and digital delivery of new builds to active licenses.',
				'Lifetime and monthly subscribers receive rebuild access during active license terms. See <a href="/pricing/">Pricing</a> if you need to renew.',
				'For context on why rebuilds happen, read the <a href="/updates/">Easy Anti-Cheat bypass guide</a> and <a href="/dbd-hacks/">undetected dbd cheats</a> explainer.',
			),
			section(
				'Staying undetected after patches',
				'No cheat guarantees permanent undetected status. Combine maintenance updates with responsible in-game settings and patch awareness.',
				`Follow season notes from ${EXT.dbd}, then confirm our rebuild is live before you queue.`,
				'For urgent status questions after a Easy Anti-Cheat update, contact <a href="/support/">Support</a> with your license tier and last played build version.',
			),
		],
	},
	faq: {
		title: 'The DBD Cheats FAQ | ESP, Soft Aim & RadarRadar Answers',
		description:
			'dbd cheats FAQ: ESP boxes, soft aim, Easy Anti-Cheat maintenance, and pricing for PC. Clear answers before you buy.',
		h1: 'The DBD Cheats FAQ — Common Questions',
		intro:
			'Answers about undetected The DBD Cheats — ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat maintenance, checkout, and Dead by Daylight compatibility on Windows PC.',
		imageAlt: "The DBD Cheats FAQ — delivery, setup, and update answers",
		galleryTitle: 'The DBD Cheats FAQ visuals',
		ctaPrimary: 'Buy The DBD Cheats',
		ctaSecondary: 'Contact support',
		ctaSecondaryHref: '/support/',
		sections: [
			section(
				'What is The DBD Cheats?',
				'The DBD Cheats is an undetected cheat package for Dead by Daylight on Windows PC. It includes ESP wallhack, 2D radar-style awareness, and Aimbot controls with Easy Anti-Cheat maintenance updates.',
				'Packages cover trial and chase. Explore <a href="/features/">Features</a> for the full control list and <a href="/dbd-esp/">ESP</a> / <a href="/dbd-aimbot/">Aimbot</a> for module detail.',
				`Dead by Daylight itself is published by Behaviour Interactive (${EXT.dbd}). Cheats are third-player tools and may violate Behaviour Interactive' rules — use is at your own risk.`,
			),
			section(
				'Are The DBD Cheats undetected in 2026?',
				'The DBD Cheats is maintained with rebuilds after Easy Anti-Cheat and game patches. Check the <a href="/updates/">Updates page</a> for current status — no cheat can guarantee permanent undetected operation.',
				'Read <a href="/dbd-hacks/">undetected dbd cheats</a> and the <a href="/updates/">Easy Anti-Cheat guide</a> for the maintenance workflow.',
				'Responsible settings and reading maintenance notes before spawning in are essential.',
			),
			section(
				'Delivery, pricing, and support',
				'Licenses deliver digitally after payment confirmation. Monthly is $35; lifetime is $150 USD — see <a href="/pricing/">Pricing</a>.',
				'Contact support@dbdcheats.org or the <a href="/support/">Support page</a> with order details for setup or billing help. First launch steps are on <a href="/setup/">Setup</a>.',
				'Refund eligibility is covered in the <a href="/refund-policy/">Refund Policy</a>.',
			),
		],
	},
	support: {
		title: 'The DBD Cheats Support | Help & Contact',
		description:
			'Contact dbd cheats support for licenses, ESP setup, soft aim profiles, and on Windows PC. Include your order ID for faster help.',
		h1: 'The DBD Cheats Support — Contact Us',
		intro:
			'Get help with The DBD Cheats licenses, checkout, ESP wallhack setup, Aimbot profiles, and Easy Anti-Cheat maintenance for Dead by Daylight on Windows PC.',
		imageAlt: "The DBD Cheats support page for license and setup help",
		galleryTitle: 'The DBD Cheats support resources',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'When to contact support',
				'Reach out for order issues, license activation failures, ESP wallhack or Aimbot setup questions, and post-patch problems after Easy Anti-Cheat maintenance rebuilds.',
				'Include your order ID, license tier (monthly or lifetime), Windows version, and a clear description of the issue.',
				'Many answers already live in <a href="/faq/">FAQ</a>, <a href="/setup/">Setup</a>, and <a href="/updates/">Updates</a> — check those first for faster resolution.',
			),
			section(
				'Response times and scope',
				'Support requests are reviewed daily. The DBD Cheats support covers delivery, billing, setup, and maintenance — not in-game coaching or account recovery for Behaviour Interactive bans.',
				`Account and game policy questions belong with Behaviour Interactive. We can help with license delivery and product configuration only.`,
				'Check the Updates page and FAQ before opening a ticket — many post-patch questions are answered there.',
			),
			section(
				'Self-service resources',
				'Setup guide, Features list, Updates log, Refund Policy, and Terms of Use are linked from the footer. Easy Anti-Cheat bypass notes live on the dedicated <a href="/updates/">Easy Anti-Cheat page</a>.',
				'Email: support@dbdcheats.org',
				'Ready to purchase or renew? Open <a href="/pricing/">Pricing</a>. Need feature detail first? See <a href="/features/">Features</a>.',
			),
		],
	},
	undetected: {
		title: 'Undetected The DBD Cheats 2026 | Easy Anti-Cheat Maintenance',
		description:
			'Undetected dbd cheats with Easy Anti-Cheat maintenance for ESP boxes, soft aim, and radar on Windows PC. Check status before you queue.',
		h1: 'Undetected The DBD Cheats — Easy Anti-Cheat Maintenance',
		intro:
			'How The DBD Cheats stays maintained for Dead by Daylight after Easy Anti-Cheat patches — ESP wallhack, radar hack, and Aimbot rebuilds for Windows PC.',
		imageAlt: "The DBD Cheats undetected status overview for Windows PC",
		galleryTitle: 'Undetected The DBD Cheats visuals',
		ctaPrimary: 'Buy The DBD Cheats',
		ctaSecondary: 'Easy Anti-Cheat bypass guide',
		ctaSecondaryHref: '/updates/',
		sections: [
			section(
				'What undetected means for The DBD Cheats',
				'Undetected The DBD Cheats means the package is actively maintained against Easy Anti-Cheat and major Dead by Daylight patches — not that detection is impossible forever.',
				'Rebuilds target ESP wallhack overlays, radar behavior, and Aimbot signatures after Easy Anti-Cheat security updates.',
				`Anti-cheat technology is documented by ${EXT.eac}; Dead by Daylight client updates ship through ${EXT.activision}. Undetected status is an ongoing process tied to those releases.`,
			),
			section(
				'Easy Anti-Cheat maintenance workflow',
				'When Easy Anti-Cheat or Dead by Daylight updates ship, the team assesses ESP, radar, and Aimbot modules, publishes status on the <a href="/updates/">Updates page</a>, and delivers rebuilt builds to active licenses.',
				`On patch mornings, also check ${EXT.status} for launcher outages that can look like product failures.`,
				'Deep technical workflow: <a href="/updates/">Easy Anti-Cheat bypass Dead by Daylight guide</a>. Feature stack: <a href="/features/">Features</a>.',
			),
			section(
				'Responsible use and next steps',
				'Combine maintenance with conservative in-game settings. Read the <a href="/faq/">FAQ</a> and Updates log regularly — undetected status is not a one-time promise.',
				'Lifetime and monthly plans include rebuild access during active terms — see <a href="/pricing/">Pricing</a>.',
				'New buyers should also read <a href="/dbd-hacks/">dbd cheats 2026</a> and complete <a href="/setup/">Setup</a> after delivery.',
			),
		],
	},
	wallhack: {
		title: 'Dead by Daylight Wallhack 2026 | ESP Boxes & Visibility',
		description:
			'dbd wallhack ESP with player boxes and generator markers for Windows PC. Undetected dbd cheats — learn overlays and buy.',
		h1: 'Dead by Daylight Wallhack — ESP Boxes & Visibility',
		intro:
			'dbd wallhack ESP for Dead by Daylight — see players, carcasses, apex killers, and water sources through toggleable wallhack overlays built for survivor and killer trials.',
		imageAlt: "dbd wallhack visibility through walls in a trial",
		galleryTitle: 'dbd wallhack ESP gallery',
		ctaPrimary: 'Buy The DBD Cheats',
		ctaSecondary: 'DBD ESP page',
		ctaSecondaryHref: '/dbd-esp/',
		sections: [
			section(
				'Wallhack ESP vs raw aim tools',
				'An dbd wallhack focuses on information — player outlines, carcass pins, apex threat cues — rather than automatic aiming. The DBD Cheats bundles wallhack ESP with radar and optional Aimbot in one license.',
				'Toggle categories so only the wallhack overlays you need stay active during rotations and hook zones.',
				'For the broader ESP keyword page see <a href="/dbd-esp/">DBD ESP</a>; for combat assist see <a href="/dbd-aimbot/">Aimbot</a>.',
			),
			section(
				'Map coverage for wallhack ESP',
				'Wallhack overlays support trial, chase, and official servers with distance readouts and snaplines for engagement control.',
				`Season maps and POI changes are announced via ${EXT.dbd}. Wallhack remains useful because it tracks entities, not fixed landmarks alone.`,
				'Pair wallhack awareness with <a href="/dbd-radar-hack/">radar hack</a> cues for flanks during forest and river bank ambushes.',
			),
			section(
				'Undetected wallhack maintenance',
				'ESP wallhack modules rebuild after Easy Anti-Cheat patches. Follow the <a href="/updates/">Updates page</a> and complete checkout for instant license delivery on Windows PC.',
				'Learn the full maintenance story on <a href="/dbd-hacks/">undetected dbd cheats</a> and <a href="/updates/">Easy Anti-Cheat bypass</a>.',
				'Ready to buy? Compare <a href="/pricing/">Pricing</a> or continue to the <a href="/dbd-esp/">ESP hack</a> landing for alternate search wording.',
			),
		],
	},
	radar: {
		title: 'Dead by Daylight Radar Hack 2026 | 2D Threat Overlay',
		description:
			'dbd radar hack for flank awareness on Windows PC. Bundled with ESP boxes, soft aim, and radar in our The DBD Cheats package.',
		h1: 'Dead by Daylight Radar Hack — 2D Threat Awareness',
		intro:
			'2D radar-style overlay for Dead by Daylight — directional threat cues for nearby players outside your line of sight, bundled with ESP wallhack and Aimbot.',
		imageAlt: "Dead by Daylight 2D radar overlay showing nearby threats",
		galleryTitle: 'dbd radar hack visuals',
		ctaPrimary: 'Buy The DBD Cheats',
		ctaSecondary: 'See ESP wallhack',
		ctaSecondaryHref: '/dbd-esp/',
		sections: [
			section(
				'Why radar hack matters in Dead by Daylight',
				'survival chases happen across open terrain — hills, forests, and river banks. A 2D radar overlay shows nearby player threats outside direct line of sight so you can reposition before a third player.',
				'The DBD Cheats radar complements <a href="/dbd-esp/">ESP wallhack</a> markers during pack pushes and nest zone fights.',
				`Mode rules and seasonal changes come from ${EXT.dbd}. Radar range remains configurable when map scale or mobility meta shifts.`,
			),
			section(
				'Configurable radar range',
				'Adjust radar range for early rotations versus tight hook zones. Directional cues highlight flanks during building clears and flank pushes across trial and chase.',
				'Toggle radar alongside ESP and Aimbot with in-client hotkeys during live matches — see the <a href="/dbd-hacks/">mod menu</a> page.',
				'Combat follow-up lives on <a href="/dbd-aimbot/">Aimbot</a> when you convert radar info into a fight.',
			),
			section(
				'Maintenance and licensing',
				'Radar hack modules receive Easy Anti-Cheat maintenance rebuilds with the full The DBD Cheats package. Monthly and lifetime licenses include digital delivery — see <a href="/pricing/">Pricing</a>.',
				'Check <a href="/updates/">Updates</a> after major Dead by Daylight patches before relying on previous radar configs.',
				'New to the stack? Start at <a href="/features/">Features</a> or <a href="/dbd-hacks/">undetected status</a>.',
			),
		],
	},
	'eac': {
		title: 'Easy Anti-Cheat Bypass Dead by Daylight | The DBD Cheats Maintenance',
		description:
			'How dbd cheats rebuild after Easy Anti-Cheat patches — ESP boxes, soft aim, and radar maintenance for Windows PC. Read before spawning in.',
		h1: 'Easy Anti-Cheat Bypass — The DBD Cheats Maintenance',
		intro:
			'Understand Easy Anti-Cheat maintenance for The DBD Cheats — how ESP wallhack, radar hack, and Aimbot rebuild after Dead by Daylight security updates.',
		imageAlt: "The DBD Cheats maintenance after a Easy Anti-Cheat patch",
		galleryTitle: 'Easy Anti-Cheat maintenance visuals',
		ctaPrimary: 'Buy The DBD Cheats',
		ctaSecondary: 'Check updates',
		ctaSecondaryHref: '/updates/',
		sections: [
			section(
				'Easy Anti-Cheat overview',
				`Easy Anti-Cheat is Behaviour Interactive' anti-cheat for Dead by Daylight on PC (see ${EXT.eac}). Security updates can affect ESP wallhack, radar, and Aimbot behavior — requiring maintenance rebuilds for undetected packages.`,
				`The DBD Cheats monitors Easy Anti-Cheat patch notes and Dead by Daylight seasonal updates from ${EXT.dbd} to schedule module reviews.`,
				'“Easy Anti-Cheat bypass” in our wording means timely maintenance — not a permanent free pass around anti-cheat.',
			),
			section(
				'What happens after a Easy Anti-Cheat patch',
				'The team tests ESP overlays, radar signatures, and Aimbot profiles against the new build, publishes status on <a href="/updates/">Updates</a>, and ships rebuilt packages to active licenses.',
				`Confirm Behaviour Interactive service health on ${EXT.status} if the launcher or matchmaking fails during the same window.`,
				'Avoid spawning in on old builds after major patch days until maintenance notes confirm a new release. Related reading: <a href="/dbd-hacks/">undetected dbd cheats</a>.',
			),
			section(
				'No permanent bypass guarantee',
				'Easy Anti-Cheat bypass in practice means timely maintenance. Read the undetected guide, <a href="/faq/">FAQ</a>, and Updates log before every trial.',
				'Contact <a href="/support/">Support</a> if activation fails immediately after a posted rebuild.',
				'Buying for the first time? Compare <a href="/pricing/">Pricing</a> and finish <a href="/setup/">Setup</a> only after Updates shows a live build.',
			),
		],
	},
	'cheats-2026': {
		title: 'The DBD Cheats 2026 | ESP Soft Aim & Radar',
		description:
			'Best dbd cheats 2026: ESP boxes, soft aim, and radar for Windows PC. Undetected dbd cheats with Easy Anti-Cheat maintenance — compare and buy.',
		h1: 'The DBD Cheats 2026 — ESP, Soft Aim & RadarRadar',
		intro:
			'The 2026 The DBD Cheats package for Dead by Daylight — undetected ESP wallhack, radar hack, and Aimbot with Easy Anti-Cheat maintenance, instant delivery, and Windows PC support.',
		imageAlt: "The DBD Cheats product overview for Dead by Daylight",
		galleryTitle: 'The DBD Cheats 2026 gallery',
		ctaPrimary: 'Buy The DBD Cheats',
		ctaSecondary: 'Compare features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'Why dbd cheats buyers choose The DBD Cheats in 2026',
				'2026 updates bring new maps, killer balance changes, and Easy Anti-Cheat patches. The DBD Cheats bundles ESP wallhack, radar hack, and Aimbot with active maintenance — not a stale prior-year build.',
				`Track official season messaging on ${EXT.dbd}, then use our <a href="/updates/">Updates log</a> for product rebuild timing.`,
				'Monthly ($35) and lifetime ($150) plans cover trial and chase loops — see <a href="/pricing/">Pricing</a>.',
			),
			section(
				'Full feature stack for 2026 buyers',
				'Player ESP wallhack, generator markers, 2D radar overlays, Aimbot profiles, in-client toggles, and post-patch rebuilds — one license instead of stacking separate tools.',
				'Deep links: <a href="/dbd-hacks/">The DBD Cheats pillar</a>, <a href="/dbd-esp/">ESP</a>, <a href="/dbd-aimbot/">Aimbot</a>, <a href="/dbd-esp/">wallhack</a>, <a href="/dbd-radar-hack/">radar</a>, <a href="/dbd-hacks/">undetected</a>.',
				'Instant digital delivery after checkout confirmation worldwide.',
			),
			section(
				'Before you buy in 2026',
				'Read the <a href="/dbd-hacks/">dbd cheats</a> pillar, Features, Pricing, Setup, and Updates pages. Check undetected status notes after every major patch — responsible use and maintenance awareness matter.',
				'Also compare the <a href="/dbd-hacks/">dbd cheats</a> checklist, <a href="/blog/dbd-cheats-2026-whats-new/">2026 blog guide</a>, and <a href="/faq/">FAQ</a>.',
				'Support is available at support@dbdcheats.org via the <a href="/support/">Support page</a>.',
			),
		],
	},
	hacks: {
		title: 'The DBD Cheats 2026 | Undetected ESP Aimbot Guide',
		description:
			'dbd cheats for Windows PC: undetected ESP wallhack, radar hack, and Aimbot with Easy Anti-Cheat maintenance. Compare dbd cheats options and buy the full package.',
		h1: 'The DBD Cheats — Undetected ESP, Aimbot & Wallhack',
		intro:
			'dbd cheats for trial and chase combine ESP wallhack visibility, 2D radar-style threat cues, and Aimbot controls in one undetected Windows PC license — maintained after Easy Anti-Cheat patches. This is the pillar guide for dbd cheats in 2026.',
		imageAlt: "The DBD Cheats product page — ESP, aimbot, and radar",
		galleryTitle: 'dbd cheats gallery — ESP, Aimbot, wallhack',
		ctaPrimary: 'Buy The DBD Cheats',
		ctaSecondary: 'See undetected guide',
		ctaSecondaryHref: '/dbd-hacks/',
		sections: [
			section(
				'What dbd cheats include in 2026',
				'Players searching for dbd cheats usually want visibility and combat tools without stacking separate downloads. The DBD Cheats bundles player ESP wallhack, generator markers, 2D radar overlays, and configurable Aimbot in one maintained package — the same toolkit often called dbd cheats.',
				'Coverage spans trial and chase with in-client toggles for live matches. Monthly ($35) and lifetime ($150) licenses unlock the full stack.',
				`Official game updates come from ${EXT.dbd}; our hacks package tracks those releases via the <a href="/updates/">Updates page</a>. Cross-check platform health on ${EXT.status} before patch-day queues.`,
			),
			section(
				'How this The DBD Cheats pillar fits nearby pages',
				'Use this pillar for the core product overview. For year-specific buying notes, see the <a href="/dbd-hacks/">dbd cheats 2026</a> and <a href="/dbd-hacks/">dbd cheats</a> pages cover buyer comparisons in cheats wording.',
				'Deep-dive modules: <a href="/dbd-esp/">DBD ESP</a>, <a href="/dbd-aimbot/">DBD Aimbot</a>, <a href="/dbd-esp/">wallhack</a>, <a href="/dbd-radar-hack/">radar hack</a>, and <a href="/dbd-aimbot/">soft aim</a>.',
				'Blog guides expand Easy Anti-Cheat keyword: <a href="/blog/dbd-hacks-complete-guide-2026/">hacks complete guide</a>, <a href="/blog/dbd-hacks-buyers-guide/">cheats buyers guide</a>, and <a href="/blog/undetected-dbd-cheats-eac/">undetected Easy Anti-Cheat notes</a>.',
			),
			section(
				'dbd cheats vs single-feature tools',
				'Standalone hacks often cover only wallhack or only aim assist. The DBD Cheats maps the full survival loop: read enemy packs, track apex killers and carcasses, spot flanks on radar, and tune Aimbot per species.',
				'Compare the <a href="/dbd-esp/">ESP</a>, <a href="/dbd-aimbot/">Aimbot</a>, and <a href="/features/">Features</a> pages — or review <a href="/pricing/">Pricing</a> for monthly and lifetime licenses.',
				'Related landings: <a href="/setup/">cheat download</a>, <a href="/dbd-hacks/">mod menu</a>, <a href="/dbd-aimbot/">aimbot</a>, <a href="/dbd-esp/">ESP</a>.',
			),
			section(
				'Undetected dbd cheats with Easy Anti-Cheat maintenance',
				'Undetected dbd cheats require rebuilds after Easy Anti-Cheat and major Dead by Daylight patches. Check Updates before spawning in — maintenance notes confirm when a new build is live. No package can promise permanent undetected status.',
				`See ${EXT.eac} for anti-cheat background and our <a href="/updates/">Easy Anti-Cheat bypass guide</a> for the practical workflow. Pair with <a href="/dbd-hacks/">undetected dbd cheats</a> for status language buyers expect.`,
				'Digital delivery runs after checkout for Windows 10 and 11 PCs worldwide. After purchase, follow <a href="/setup/">Setup</a> and keep <a href="/support/">Support</a> ready with your order ID.',
			),
		],
	},
	'cheat-download': {
		title: 'Dead by Daylight Hack Download 2026 | Instant Access',
		description:
			'dbd cheat download with instant license delivery — ESP boxes, soft aim, and radar for Windows PC. Buy, activate, and play.',
		h1: 'Dead by Daylight Hack Download — Instant License Delivery',
		intro:
			'How dbd cheat download works for Dead by Daylight — digital license delivery after payment confirmation, with ESP wallhack, radar hack, and Aimbot access on Windows PC.',
		imageAlt: "The DBD Cheats download and install delivery flow",
		galleryTitle: 'dbd cheat download visuals',
		ctaPrimary: 'Buy The DBD Cheats',
		ctaSecondary: 'Setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'How dbd cheat download delivery works',
				'After checkout confirms payment, The DBD Cheats license details arrive digitally by email. No physical shipment — access begins once activation instructions are delivered.',
				'Keep your order confirmation and license email ready for the <a href="/setup/">Setup guide</a> and Support requests.',
				`If Behaviour Interactive services are down, check ${EXT.status} before assuming a download failure.`,
			),
			section(
				'What your download unlocks',
				'Every dbd cheat download includes player ESP wallhack, carcasses and generator markers, 2D radar overlays, Aimbot profiles, and in-client toggles for survivor and killer trials.',
				'Monthly ($35) and lifetime ($150) plans share the same feature stack — compare options on the <a href="/pricing/">Pricing page</a>.',
				'Feature detail: <a href="/features/">Features</a>. Module pages: <a href="/dbd-esp/">ESP</a>, <a href="/dbd-aimbot/">Aimbot</a>.',
			),
			section(
				'After purchase — setup and updates',
				'Follow Setup to activate ESP wallhack and Aimbot on Windows 10 or 11. When Dead by Daylight or Easy Anti-Cheat patches ship, check the <a href="/updates/">Updates page</a> for maintenance rebuilds.',
				'Contact <a href="/support/">Support</a> with your order ID if delivery or activation fails within 24 hours of purchase.',
				'Also read <a href="/dbd-hacks/">undetected status</a> so you know what “download ready” means after a patch.',
			),
		],
	},
	'mod-menu': {
		title: 'Dead by Daylight Mod Menu 2026 | ESP & Soft Aim Toggles',
		description:
			'Dead by Daylight mod menu for in-match toggles — ESP boxes, soft aim, radar, and on Windows PC. Undetected The DBD Cheats package.',
		h1: 'Dead by Daylight Mod Menu — In-Client Control Panel',
		intro:
			'Dead by Daylight mod menu controls for Dead by Daylight — toggle ESP wallhack categories, radar range, and Aimbot profiles mid-match without leaving your Dead by Daylight trial on Windows PC.',
		imageAlt: "The DBD Cheats in-game menu controls",
		galleryTitle: 'Dead by Daylight mod menu gallery',
		ctaPrimary: 'Buy The DBD Cheats',
		ctaSecondary: 'Full feature list',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'What a Dead by Daylight mod menu controls',
				'A Dead by Daylight mod menu is the in-client panel where you enable ESP wallhack overlays, adjust radar range, and switch Aimbot profiles during live matches. The DBD Cheats keeps those toggles accessible with hotkeys.',
				'Toggle player outlines, generator markers, vehicle cues, and per-species Aimbot settings without alt-tabbing out of Dead by Daylight.',
				'Control deep-dives: <a href="/dbd-esp/">ESP</a>, <a href="/dbd-aimbot/">Aimbot</a>, <a href="/dbd-radar-hack/">radar</a>.',
			),
			section(
				'Mod menu categories for survivor and killer trials',
				'Separate ESP wallhack categories for players, carcasses, water sources, and apex killers let you reduce overlay noise during rotations and hook zones.',
				'Radar hack range and Aimbot smoothness adjust from the same mod menu — useful when ${EXT.dbd} seasons change fight distances and mobility.',
				'Soft tracking players should start with <a href="/dbd-aimbot/">soft aim</a> profiles before aggressive FOV.',
			),
			section(
				'Maintained mod menu after Easy Anti-Cheat patches',
				'Dead by Daylight mod menu behavior is rebuilt when Easy Anti-Cheat or major Dead by Daylight updates land. Follow the <a href="/updates/">Updates page</a> and <a href="/updates/">Easy Anti-Cheat bypass guide</a> before spawning in on patch days.',
				'Checkout with instant digital delivery for monthly and lifetime licenses — see <a href="/pricing/">Pricing</a>.',
				'Need install steps? Open <a href="/setup/">Setup</a> after your license email arrives.',
			),
		],
	},
	'soft-aim': {
		title: 'Dead by Daylight Soft Aim 2026 | Smooth Aimbot Settings',
		description:
			'Dead by Daylight soft aim settings for natural tracking on Windows PC. Smoothness, FOV, and bone priority — included in our dbd cheats with ESP boxes.',
		h1: 'Dead by Daylight Soft Aim — Smooth Aimbot Controls',
		intro:
			'Dead by Daylight soft aim settings for Dead by Daylight — configurable Aimbot smoothness, FOV, bone priority, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: "Dead by Daylight soft aim FOV and smoothness settings",
		galleryTitle: 'Dead by Daylight soft aim gallery',
		ctaPrimary: 'Buy The DBD Cheats',
		ctaSecondary: 'Aimbot controls',
		ctaSecondaryHref: '/dbd-aimbot/',
		sections: [
			section(
				'What Dead by Daylight soft aim means',
				'Dead by Daylight soft aim refers to Aimbot behavior tuned for smooth, natural-looking tracking rather than instant snap. The DBD Cheats exposes smoothness, FOV, and aim smoothing sliders so you control how assist feels in BR chases.',
				'Bone priority and target selection cover closest player, lowest health, or highest-threat targets during pack fights.',
				'Full Aimbot documentation: <a href="/dbd-aimbot/">DBD Aimbot</a>. Alternate wording: <a href="/dbd-aimbot/">aimbot hack</a>.',
			),
			section(
				'Soft aim profiles per species',
				'Save separate soft aim profiles for killers, ambush builds, and skill-check species. Switch between skill-check ambush chases and close pack fights with hotkeys mid-trial.',
				`Weapon kill speeds shift with ${EXT.dbd} balance patches — retune smoothness after major combat updates.`,
				'Soft aim ships alongside <a href="/dbd-esp/">ESP wallhack</a> and <a href="/dbd-radar-hack/">2D radar</a> overlays.',
			),
			section(
				'Undetected soft aim with Easy Anti-Cheat maintenance',
				'Aimbot modules rebuild after Easy Anti-Cheat patches. Check the <a href="/updates/">Updates page</a> before spawning in — responsible settings and maintenance awareness matter for undetected play.',
				'Monthly and lifetime licenses checkout with digital delivery on Windows PC — <a href="/pricing/">Pricing</a>.',
				'Activation help: <a href="/setup/">Setup</a> · status questions: <a href="/support/">Support</a>.',
			),
		],
	},
	'best-cheats': {
		title: 'Best The DBD Cheats 2026 | Buyer Guide',
		description:
			'Best dbd cheats for 2026: ESP boxes, soft aim, and Easy Anti-Cheat maintenance on Windows PC. Use this checklist before checkout.',
		h1: 'Best The DBD Cheats — 2026 Buyer Guide',
		intro:
			'Compare dbd cheats for Dead by Daylight in 2026 — undetected ESP wallhack, radar hack, and Aimbot in one maintained package with Easy Anti-Cheat rebuilds and instant delivery.',
		imageAlt: "The DBD Cheats overview for Dead by Daylight on PC",
		galleryTitle: 'Best dbd cheats gallery',
		ctaPrimary: 'Buy The DBD Cheats',
		ctaSecondary: 'Compare pricing',
		ctaSecondaryHref: '/pricing/',
		sections: [
			section(
				'What makes dbd cheats in 2026',
				'The dbd hacks combine active Easy Anti-Cheat maintenance, a full ESP wallhack and radar stack, configurable Aimbot, and clear update communication — not a stale build from a prior season.',
				'The DBD Cheats covers trial and chase with in-client toggles and post-patch rebuilds.',
				`Verify the live game is healthy via ${EXT.status}, then confirm our <a href="/updates/">Updates</a> note before you judge any package “best.”`,
			),
			section(
				'Best dbd cheats feature checklist',
				'Look for player ESP wallhack, generator markers, 2D radar overlays, Aimbot profiles, hotkey toggles, and documented maintenance after Dead by Daylight patches.',
				'Review <a href="/features/">Features</a>, <a href="/dbd-hacks/">undetected status</a>, and <a href="/dbd-hacks/">dbd cheats 2026</a> before checkout — monthly ($35) and lifetime ($150) plans available.',
				'Module pages worth opening: <a href="/dbd-esp/">ESP</a>, <a href="/dbd-aimbot/">Aimbot</a>, <a href="/dbd-hacks/">hacks</a>.',
			),
			section(
				'Buying dbd cheats safely',
				'Purchase through secure checkout for instant digital delivery. Read Setup, FAQ, and Updates pages before your first queue — and contact Support with order details if activation needs help.',
				'No cheat guarantees permanent undetected status — combine maintenance with responsible in-game settings.',
				`Remember: using cheats can violate Behaviour Interactive terms. Proceed only if you accept that risk.`,
			),
		],
	},
	'aimbot-hack': {
		title: 'DBD Aimbot Hack 2026 | Soft Aim Assist',
		description:
			'DBD Aimbot hack with soft aim for Windows PC. FOV, bone priority, and hotkeys — bundled with ESP boxes in our The DBD Cheats package.',
		h1: 'DBD Aimbot Hack — Soft Aim Assist',
		intro:
			'DBD Aimbot hack tools for Dead by Daylight — smoothness, FOV, bone priority, per-killer profiles, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: "DBD Aimbot hack controls and bone priority",
		galleryTitle: 'DBD Aimbot hack gallery',
		ctaPrimary: 'Buy The DBD Cheats',
		ctaSecondary: 'Aimbot settings',
		ctaSecondaryHref: '/dbd-aimbot/',
		sections: [
			section(
				'DBD Aimbot hack vs visibility tools',
				'A DBD Aimbot hack focuses on assisted targeting during chases — while ESP wallhack and radar handle map awareness. The DBD Cheats bundles aimbot hack modules with visibility overlays in one license.',
				'Smoothness, FOV, and aim smoothing controls tune assist for Dead by Daylight combat pace across survivor and killer trials.',
				'Prefer softer tracking language? See <a href="/dbd-aimbot/">soft aim</a>. Full settings: <a href="/dbd-aimbot/">Aimbot page</a>.',
			),
			section(
				'Aimbot hack controls and hotkeys',
				'Bone priority options cover head, chest, or dynamic targets. Hotkeys enable or disable aimbot hack mid-match without opening menus during rotations or late-trial generators.',
				'Per-species profile slots separate skill-check AR tuning from close-quarters SMG settings.',
				`Balance patches from ${EXT.dbd} can change ideal FOV — retune after major species balance updates.`,
			),
			section(
				'Undetected aimbot hack maintenance',
				'Aimbot hack signatures rebuild after Easy Anti-Cheat updates. Follow the <a href="/updates/">Updates page</a> and <a href="/updates/">Easy Anti-Cheat bypass guide</a> before spawning in after patch days.',
				'Checkout with instant digital delivery for Windows 10 and 11 — <a href="/pricing/">Pricing</a>.',
				'Pair with <a href="/dbd-esp/">ESP</a> for the full information + assist loop.',
			),
		],
	},
	'esp-hack': {
		title: 'DBD ESP Hack 2026 | Player Boxes & Loot',
		description:
			'DBD ESP hack with player boxes and generator markers for Windows PC. Undetected dbd cheats with — see overlays and buy.',
		h1: 'DBD ESP Hack — Player Boxes Guide',
		intro:
			'DBD ESP hack overlays for Dead by Daylight — player outlines, apex threat cues, carcass and water markers with distance readouts across trial and chase.',
		imageAlt: "DBD ESP hack boxes and generator markers",
		galleryTitle: 'DBD ESP hack gallery',
		ctaPrimary: 'Buy The DBD Cheats',
		ctaSecondary: 'ESP controls',
		ctaSecondaryHref: '/dbd-esp/',
		sections: [
			section(
				'What a DBD ESP hack shows',
				'A DBD ESP hack renders enemy player outlines, vehicle positions, and carcass pins through walls and terrain — closing the information gap before you commit to a fight.',
				'Distance readouts and snapline options help control engagement range during pack pushes and third-player scenarios.',
				'Canonical visibility guide: <a href="/dbd-esp/">DBD ESP</a>. Wallhack wording: <a href="/dbd-esp/">wallhack</a>.',
			),
			section(
				'ESP hack categories for trials',
				'Toggle player ESP hack, generator markers, chest pins, and vehicle cues independently so only trial-critical overlays stay active during rotations.',
				'Team and enemy colour coding supports survivor and killer trials.',
				`POI and carcasses changes publish through ${EXT.activision} — keep categories toggled to what the current map rewards.`,
			),
			section(
				'Undetected ESP hack with Easy Anti-Cheat maintenance',
				'ESP hack modules rebuild after Easy Anti-Cheat and Dead by Daylight patches. Check the <a href="/updates/">Updates page</a> before spawning in — pair ESP hack awareness with <a href="/dbd-radar-hack/">radar hack</a> for flank reads.',
				'Licenses deliver digitally after checkout on Windows PC — see <a href="/pricing/">Pricing</a>.',
				'Install steps: <a href="/setup/">Setup</a>. Status questions: <a href="/dbd-hacks/">undetected guide</a>.',
			),
		],
	},
	'unlock-all': {
		title: 'Dead by Daylight Unlock All 2026 | What It Really Means',
		description:
			'Dead by Daylight unlock-all explained vs real dbd cheats — ESP boxes, soft aim, and radar for Windows PC. Know what you are buying.',
		h1: 'Dead by Daylight Unlock All — What Players Search For',
		intro:
			'Dead by Daylight unlock-all is a common search term for Dead by Daylight — this page clarifies what unlock-all tools claim versus the ESP wallhack, radar hack, and Aimbot tools The DBD Cheats actually provides on Windows PC.',
		imageAlt: "The DBD Cheats license features overview",
		galleryTitle: 'Dead by Daylight unlock-all guide visuals',
		ctaPrimary: 'Buy The DBD Cheats',
		ctaSecondary: 'See features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'What Dead by Daylight unlock-all usually means',
				'Dead by Daylight unlock-all searches often refer to instant access to killers, skins, or growth tiers. Those claims differ from visibility and combat-assist tools like ESP wallhack and Aimbot.',
				'The DBD Cheats focuses on in-match awareness — player ESP, generator markers, radar overlays, and configurable Aimbot — not account-wide cosmetic unlocks.',
				`Cosmetics and patch cycle progression items are sold through ${EXT.dbd}. Be wary of unlock-all downloads that promise free skins — they are often scams.`,
			),
			section(
				'Visibility tools vs unlock-all claims',
				'ESP wallhack helps you spot enemy packs, apex killers, and high-value objectives during live trials. Radar hack adds flank awareness; Aimbot covers combat assist with smoothness and hotkey controls.',
				'For loadout planning during a match, carcasses and generator markers speed map rotations — see the <a href="/dbd-esp/">ESP</a> and <a href="/features/">Features</a> pages for the full tool list.',
				'Related: <a href="/dbd-hacks/">dbd cheats</a> and <a href="/dbd-hacks/">dbd cheats</a>.',
			),
			section(
				'Buying The DBD Cheats for the right reasons',
				'If you need undetected ESP wallhack, radar hack, and Aimbot for Dead by Daylight on Windows PC, compare <a href="/pricing/">Pricing</a> and read the <a href="/setup/">Setup guide</a> before checkout.',
				'Check the <a href="/updates/">Updates page</a> after Easy Anti-Cheat patches — maintenance rebuilds publish for active licenses.',
				'Questions? <a href="/faq/">FAQ</a> and <a href="/support/">Support</a> cover delivery and configuration — not cosmetic unlocks.',
			),
		],
	},
	privacy: {
		title: 'Privacy Policy | The DBD Cheats',
		description:
			'Privacy policy for The DBD Cheats. How we handle support emails, order data, and checkout for dbd cheats licenses on dbdcheats.org.',
		h1: 'Privacy Policy',
		intro: 'How The DBD Cheats handles information when you browse dbdcheats.org or contact support about a Dead by Daylight license.',
		imageAlt: "The DBD Cheats privacy policy page",
		galleryTitle: 'The DBD Cheats legal resources',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read terms of use',
		ctaSecondaryHref: '/terms/',
		sections: [
			section(
				'Information we may collect',
				'We may collect contact details you send by email, order references needed to resolve support requests, and basic technical data used to operate and secure the website.',
				'We do not sell personal data. Checkout payment details are processed by the checkout provider — review their privacy terms for transaction data.',
				['Contact details you send by email', 'Order references for support requests', 'Basic technical data for site security'],
			),
			section(
				'How information is used',
				'Information is used to respond to support requests, process order issues, improve site reliability, and meet legal obligations when required.',
				'Analytics may use aggregated traffic data without identifying individual The DBD Cheats customers.',
			),
			section(
				'Your choices and contact',
				'You may request correction or deletion of support email data by contacting support@dbdcheats.org with your request details.',
				'Policy updates publish on this page. Continued use of dbdcheats.org after updates means you accept the revised policy. Also see <a href="/terms/">Terms of Use</a> and <a href="/refund-policy/">Refund Policy</a>.',
			),
		],
	},
	refund: {
		title: 'Refund Policy | The DBD Cheats',
		description:
			'Refund policy for The DBD Cheats. Digital delivery terms and eligibility for The DBD Cheats packages with ESP, soft aim, and radar.',
		h1: 'Refund Policy',
		intro:
			'Refund terms for The DBD Cheats licenses — ESP wallhack, radar hack, and Aimbot packages purchased through checkout for Dead by Daylight.',
		imageAlt: "The DBD Cheats refund policy page",
		galleryTitle: 'The DBD Cheats billing resources',
		ctaPrimary: 'Contact support',
		ctaSecondary: 'Read privacy policy',
		ctaSecondaryHref: '/privacy-policy/',
		sections: [
			section(
				'Digital delivery and eligibility',
				'The DBD Cheats licenses deliver digitally after payment confirmation. Because access begins immediately, refunds are limited to cases outlined below.',
				'Submit refund requests within 24 hours of purchase with your order ID and reason.',
			),
			section(
				'When refunds may be approved',
				'Duplicate charges, failed delivery despite confirmed payment, or technical activation failures verified by support may qualify for review.',
				'Refund decisions are final. Chargebacks without contacting support first may result in license revocation. See also <a href="/terms/">Terms of Use</a>.',
			),
			section(
				'How to request a refund',
				'Email support@dbdcheats.org with subject "Refund Request", your order ID, purchase date, and issue summary — or use the <a href="/support/">Support page</a>.',
				'Approved refunds process back to the original payment method when possible. Pricing details live on <a href="/pricing/">Pricing</a>.',
			),
		],
	},
	terms: {
		title: 'Terms of Use 2026 | The DBD Cheats Rules',
		description:
			'Terms of use for dbdcheats.org and The DBD Cheats licenses. Usage rules, anti-cheat risk, and liability for Windows PC cheats.',
		h1: 'Terms of Use',
		intro: 'Terms governing use of dbdcheats.org and The DBD Cheats licenses for Dead by Daylight on Windows PC.',
		imageAlt: "The DBD Cheats terms of use page",
		galleryTitle: 'The DBD Cheats legal pages',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read privacy policy',
		ctaSecondaryHref: '/privacy-policy/',
		sections: [
			section(
				'Acceptance and license scope',
				'By purchasing or using The DBD Cheats you agree to these terms. Licenses grant personal use of ESP wallhack, radar, and Aimbot tools for Dead by Daylight on Windows PC only.',
				'Sharing, reselling, or reverse-engineering the package violates these terms and may revoke access.',
			),
			section(
				'Risk and anti-cheat disclaimer',
				`Using cheats in Dead by Daylight may violate Behaviour Interactive terms and result in account penalties. The DBD Cheats provides maintenance but does not guarantee undetected status or account safety.`,
				'You assume all risk. We are not liable for bans, data loss, or damages arising from product use. See also <a href="/dbd-hacks/">undetected status</a>.',
			),
			section(
				'Changes and governing law',
				'We may update these terms by posting revisions on this page. Continued use after changes constitutes acceptance.',
				'Contact support@dbdcheats.org for questions. Related policies: <a href="/privacy-policy/">Privacy</a> and <a href="/refund-policy/">Refunds</a>.',
			),
		],
	},
};

/** Attach heroImage paths and clamp meta lengths. */
export function finalizePage(pageId, page) {
	return {
		...page,
		title: clampTitle(stripZadeyoFromMeta(page.title)),
		description: clampDesc(stripZadeyoFromMeta(page.description)),
		heroImage: HERO_IMAGES[pageId],
	};
}

export function finalizePages(pages) {
	const out = {};
	for (const [id, page] of Object.entries(pages)) {
		out[id] = finalizePage(id, page);
	}
	return out;
}

export const englishPagesFinal = finalizePages(enPages);
