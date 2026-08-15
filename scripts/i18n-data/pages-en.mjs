import { HERO_IMAGES, clampTitle, clampDesc, section, stripZadeyoFromMeta, EXT } from './constants.mjs';

/** Richest English page content — source of truth for structure. */
export const enPages = {
	home: {
		title: 'The Isle Hacks | Undetected Aimbot, ESP & Wallhack 2026',
		description:
			'The Isle hacks for PC with aimbot, ESP and wallhack features. Explore gameplay features, pricing, setup information and the latest updates.',
		h1: 'The Isle Hacks — Undetected ESP, Wallhack & Aimbot',
		intro:
			'The Isle Hacks is the undetected The Isle Hacks package for Windows PC — built for The Isle on Windows PC. Isle ESP wallhack, 2D radar, and Isle Aimbot with Easy Anti-Cheat maintenance after every major patch.',
		imageAlt: "The Isle Hacks homepage hero — ESP and aimbot for The Isle",
		galleryTitle: 'The Isle Hacks gallery — ESP, Aimbot and wallhack visuals',
		ctaPrimary: 'Buy The Isle Hacks',
		ctaSecondary: 'See all features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'Why players choose the isle hacks in 2026',
				'The Isle rewards map awareness. The Isle Hacks combines ESP wallhack for enemy players and carcasses, radar-style threat cues, and configurable Aimbot so you can read fights before committing — on session, growth run, and official servers.',
				`Official seasons, patches, and anti-cheat updates come from ${EXT.isle} and ${EXT.eac}. We rebuild ESP, radar, and Aimbot modules when those patches require maintenance — then post status on the <a href="/updates/">Updates page</a>.`,
				'Licenses ship digitally after payment confirmation. Monthly ($35) and lifetime ($150) plans include Easy Anti-Cheat maintenance rebuilds when anti-cheat or game patches require updates.',
				'Start with the <a href="/isle-hacks/">The Isle Hacks pillar</a>, <a href="/isle-esp/">ESP guide</a>, <a href="/isle-aimbot/">Aimbot controls</a>, and <a href="/isle-hacks/">undetected status</a> pages if you are comparing tools before checkout.',
			),
			section(
				'ESP wallhack, radar hack, and Aimbot in one license',
				'Instead of stacking separate tools, The Isle Hacks bundles player ESP wallhack, carcass markers, 2D radar overlays, and Aimbot profiles in one undetected package built for herbivore and carnivore survival sessions — covering both “the isle hacks” and “the isle cheats” search intent.',
				'Browse the <a href="/isle-esp/">ESP</a>, <a href="/isle-aimbot/">Aimbot</a>, <a href="/isle-esp/">wallhack</a>, and <a href="/isle-radar-hack/">radar</a> pages for control details — or jump to <a href="/pricing/">Pricing</a> for monthly and lifetime options.',
				`Before patch days, check ${EXT.status} for The Isle team service health, then confirm our maintenance notes so you are not spawning in on an outdated build.`,
				'Ready to buy? Open <a href="/pricing/">Pricing</a>, follow <a href="/setup/">Setup</a> after delivery, and keep <a href="/faq/">FAQ</a> / <a href="/support/">Support</a> bookmarked for license questions.',
			),
		],
	},
	'isle-esp': {
		title: 'Isle ESP 2026 | Player Boxes & Wallhack',
		description:
			'Isle ESP for Windows PC — player boxes, carcass markers, and distance readouts. Part of our undetected the isle hacks for The Isle.',
		h1: 'Isle ESP — Player Boxes & Wallhack',
		intro:
			'Isle ESP visibility tools for session and growth run. Read enemy packs, players, wild dinosaurs, carcasses, and distance before you commit — toggleable Isle ESP wallhack overlays bundled in our The Isle Hacks package.',
		imageAlt: "Isle ESP player boxes and distance readouts in a session",
		galleryTitle: 'Isle ESP overlay visuals',
		ctaPrimary: 'Buy The Isle Hacks',
		ctaSecondary: 'isle wallhack guide',
		ctaSecondaryHref: '/isle-esp/',
		sections: [
			section(
				'What Isle ESP solves in sessions',
				'The Isle maps punish incomplete information. The Isle Hacks ESP wallhack helps you spot enemy packs early, spot players and wild dinosaurs before they push your angle, and mark fresh carcasses worth the detour.',
				'On session, growth run, and official servers, that visibility gap is often the difference between a clean third-player and a patched pack. ESP ships bundled with radar overlays and Aimbot in one license.',
				`The Isle’s live seasons and map updates are published by The Isle team (${EXT.isle}). When POIs or spawn rules shift, ESP categories stay useful because they track players and carcasses — not a single static landmark.`,
			),
			section(
				'Player, apex, and carcass ESP wallhack categories',
				'Toggle enemy player outlines, apex markers, nest cues, and carcass pins so only session-critical ESP wallhack overlays stay active during rotations.',
				'Distance readouts and snapline options help you control engagement range. Team and enemy colour coding supports herbivore and carnivore survival sessions lobbies alike.',
				'Compare category detail on the <a href="/isle-esp/">wallhack page</a> and pair visibility with the <a href="/isle-radar-hack/">radar hack</a> for flanks outside your FOV.',
				[
					'Enemy player ESP outlines with distance',
					'Carcass and carcass markers for faster rotations',
					'Apex and nest awareness cues',
					'Toggleable categories to reduce overlay noise',
				],
			),
			section(
				'Undetected ESP with Easy Anti-Cheat maintenance',
				'The Isle Hacks ESP wallhack is maintained for The Isle with rebuilds after Easy Anti-Cheat patches. Check the <a href="/updates/">Updates page</a> before you spawn in — no cheat guarantees permanent undetected status.',
				`Read ${EXT.eac} for how anti-cheat updates ship, then cross-check our <a href="/updates/">Easy Anti-Cheat maintenance guide</a> after major patches.`,
				'Checkout includes instant digital delivery for Windows 10 and 11. After purchase, follow the <a href="/setup/">Setup guide</a> and tune overlays before your first session.',
			),
			section(
				'ESP next steps — Aimbot, pricing, and support',
				'ESP alone wins information wars; Aimbot covers the hunt. Review <a href="/isle-aimbot/">Aimbot controls</a> if you want one license for visibility and assist.',
				'Compare monthly ($35) and lifetime ($150) on <a href="/pricing/">Pricing</a>, then keep <a href="/support/">Support</a> ready if activation needs a human reply.',
				'Still researching? The <a href="/isle-hacks/">The Isle Hacks pillar</a> and <a href="/isle-hacks/">2026 buyer guide</a> summarize the full stack.',
			),
		],
	},
	'isle-aimbot': {
		title: 'Isle Aimbot 2026 | Soft Aim for Windows PC',
		description:
			'Isle Aimbot with soft aim tuning for Windows PC. FOV, bone priority, and hotkeys bundled with ESP boxes in our The Isle Hacks package.',
		h1: 'Isle Aimbot — Soft Aim for Windows PC',
		intro:
			'Configurable Aimbot tools for The Isle hunts. Smoothness, FOV, bone priority, and per-species profiles — bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: "Isle Aimbot and soft aim controls on Windows PC",
		galleryTitle: 'Isle Aimbot combat previews',
		ctaPrimary: 'Buy The Isle Hacks',
		ctaSecondary: 'See ESP wallhack',
		ctaSecondaryHref: '/isle-esp/',
		sections: [
			section(
				'Aimbot tuned for The Isle combat pace',
				'The Isle mixes long-range mid-size hunts with close-quarters ambush rushes. The Isle Hacks Aimbot includes smoothness, FOV, and aim smoothing controls tuned for that pace — with hotkey toggles mid-match.',
				'Bone priority and target selection options cover closest player, lowest health, or highest-threat targets during pack fights and close-range pack fights.',
				`Weapon balance and season rules change via ${EXT.isle}. Revisit Aimbot FOV and smoothness after major combat patches so assist still matches the live kill speed windows.`,
			),
			section(
				'Per-species Aimbot profiles',
				'Save separate Aimbot profiles for carnivores, ambush builds, and long-range species. Switch between long-range ambush hunts and high-traffic zone clears without reopening menus every session.',
				'Prefer softer tracking? Read the <a href="/isle-aimbot/">soft aim guide</a>.',
				'Aimbot ships alongside <a href="/isle-esp/">ESP wallhack</a> and <a href="/isle-radar-hack/">2D radar</a> in the same The Isle Hacks license.',
				[
					'Smoothness, FOV, and aim smoothing sliders',
					'Bone priority and threat-based targeting',
					'Hotkeys to toggle Aimbot mid-match',
					'Per-species profile slots for AR / SMG / long-range',
				],
			),
			section(
				'Easy Anti-Cheat maintenance for undetected Aimbot',
				'The Isle Hacks rebuilds Aimbot behavior when Easy Anti-Cheat or major The Isle patches land. Maintenance notes appear on the <a href="/updates/">Updates page</a> so you know when a new build is live.',
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
		title: 'The Isle Hacks Features | ESP, Soft Aim & RadarRadar',
		description:
			'Full the isle hacks feature list: ESP boxes, soft aim, radar, and toggles for Windows PC. Review controls before checkout.',
		h1: 'The Isle Hacks Features — Full Control List',
		intro:
			'Every ESP wallhack, radar hack, and Aimbot control included in The Isle Hacks for The Isle on Windows PC — with Easy Anti-Cheat maintenance after major patches.',
		imageAlt: "The Isle Hacks features — ESP, soft aim, and radar screenshots",
		galleryTitle: 'The Isle Hacks feature gallery',
		ctaPrimary: 'Buy The Isle Hacks',
		ctaSecondary: 'View pricing',
		ctaSecondaryHref: '/pricing/',
		sections: [
			section(
				'ESP wallhack and visibility features',
				'Enemy player ESP wallhack, apex and nest awareness cues, carcass and water markers, distance readouts, snaplines, and toggleable ESP categories for session-critical overlays only.',
				'Team and enemy colour coding supports herbivore and carnivore survival sessions. Deep-dive the <a href="/isle-esp/">ESP page</a> and <a href="/isle-esp/">wallhack guide</a> for category-level detail.',
				`Map and carcasses systems evolve with ${EXT.isle} patch cycle and map updates — toggleable ESP categories keep overlays useful when POIs rotate.`,
			),
			section(
				'Radar hack and Aimbot controls',
				'2D radar overlay with directional threat cues, configurable range for rotations and late-session nests, plus Aimbot smoothness, FOV, bone priority, hotkeys, and per-species profiles.',
				'All tools share in-client toggles so you can adjust ESP, radar, and Aimbot during live The Isle sessions. See <a href="/isle-radar-hack/">radar</a> and <a href="/isle-aimbot/">Aimbot</a> for settings walkthroughs.',
				'Prefer a menu-first workflow? The <a href="/isle-hacks/">mod menu page</a> explains mid-match toggles without alt-tabbing.',
			),
			section(
				'Licensing, delivery, and Easy Anti-Cheat maintenance',
				'Monthly ($35) and lifetime ($150) licenses with instant digital delivery. Easy Anti-Cheat maintenance rebuilds publish on the <a href="/updates/">Updates page</a> after anti-cheat or game patches.',
				`Monitor ${EXT.status} on patch days, then confirm rebuild notes before you spawn in. Setup and billing help lives on <a href="/support/">Support</a> and support@theislehacks.org.`,
				'Next step: compare plans on <a href="/pricing/">Pricing</a> or read <a href="/isle-hacks/">how undetected maintenance works</a>.',
			),
		],
	},
	pricing: {
		title: 'The Isle Hacks Pricing | $35/mo or $150 Life',
		description:
			'the isle hacks pricing: $35/month or $150 lifetime for ESP, soft aim, and radar on Windows PC. Instant delivery — pick a plan.',
		h1: 'The Isle Hacks Pricing — Monthly & Lifetime',
		intro:
			'Choose monthly or lifetime access to undetected The Isle Hacks — ESP wallhack, radar hack, and Aimbot for The Isle on Windows PC. Instant digital delivery after payment.',
		imageAlt: "The Isle Hacks store plans for monthly and lifetime licenses",
		galleryTitle: 'The Isle Hacks package visuals',
		ctaPrimary: 'Buy The Isle Hacks',
		ctaSecondary: 'Read setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'Monthly and lifetime The Isle Hacks plans',
				'Monthly license: $35 USD for 30 days of full ESP wallhack, radar hack, and Aimbot access with Easy Anti-Cheat maintenance included during your term.',
				'Lifetime license: $150 USD for long-term access to the same undetected The Isle Hacks package — ideal if you play The Isle regularly across seasons.',
				'Both plans unlock the same feature stack described on <a href="/features/">Features</a>. Choose monthly to test, or lifetime if you already know you want the full toolkit.',
			),
			section(
				'What every plan includes',
				'Player ESP wallhack, carcass markers, 2D radar overlays, Aimbot controls, in-client toggles, and maintenance rebuilds after Easy Anti-Cheat or major The Isle patches.',
				`Season calendars and client updates come from ${EXT.isle}. Active licenses receive rebuild access when we publish maintenance on <a href="/updates/">Updates</a>.`,
				'Digital delivery starts after payment confirmation. Keep your order reference for <a href="/support/">Support</a> requests and follow <a href="/setup/">Setup</a> for first launch.',
			),
			section(
				'Refund, billing, and buying checklist',
				'Review the <a href="/refund-policy/">Refund Policy</a> before purchase. For billing or delivery issues, contact Support with your order details.',
				'Prices are listed in USD. Availability is worldwide for Windows 10 and 11 PCs.',
				'Still comparing tools? Read <a href="/isle-hacks/">the isle hacks</a>, <a href="/isle-hacks/">undetected status</a>, and <a href="/faq/">FAQ</a> before you checkout.',
			),
		],
	},
	setup: {
		title: 'The Isle Hacks Setup | Windows PC Guide',
		description:
			'Set up the isle hacks on Windows PC — activate ESP boxes, soft aim profiles, and . Check Easy Anti-Cheat updates before your first spawn in.',
		h1: 'The Isle Hacks Setup — Windows PC Guide',
		intro:
			'Install and configure The Isle Hacks for The Isle on Windows 10 or 11. Activate your license, load ESP wallhack and Aimbot profiles, and verify Easy Anti-Cheat maintenance status before spawning in.',
		imageAlt: "The Isle Hacks setup guide screenshot for Windows PC",
		galleryTitle: 'The Isle Hacks setup visuals',
		ctaPrimary: 'Buy The Isle Hacks',
		ctaSecondary: 'Contact support',
		ctaSecondaryHref: '/support/',
		sections: [
			section(
				'Before you install The Isle Hacks',
				'Confirm your order email and license details. Check the <a href="/updates/">Updates page</a> for the latest Easy Anti-Cheat maintenance build before launching The Isle.',
				`Also glance at ${EXT.status} if The Isle team services look unstable on patch day — a platform outage is not a license fault.`,
				'The Isle Hacks requires Windows 10 or 11. Close conflicting overlay software that may interfere with ESP wallhack or Aimbot toggles.',
			),
			section(
				'Activate ESP wallhack and Aimbot profiles',
				'Follow the delivery instructions in your license email. Load default ESP wallhack categories for players, wild dinosaurs, and carcasses — then tune radar range and Aimbot smoothness to your playstyle.',
				'Use in-client hotkeys to toggle ESP, radar, and Aimbot mid-match. Details for Easy Anti-Cheat module live on <a href="/isle-esp/">ESP</a>, <a href="/isle-aimbot/">Aimbot</a>, and <a href="/isle-hacks/">mod menu</a>.',
				'Prefer a soft tracking feel? Start with the <a href="/isle-aimbot/">soft aim</a> recommendations before raising aggressiveness.',
			),
			section(
				'After The Isle or Easy Anti-Cheat patches',
				'When The Isle team ships a major The Isle update or Easy Anti-Cheat patch, revisit Updates before spawning in. Download maintenance rebuilds when posted.',
				`Official anti-cheat background: ${EXT.eac}. Our practical workflow is documented on the <a href="/updates/">Easy Anti-Cheat bypass page</a> and <a href="/isle-hacks/">undetected guide</a>.`,
				'Contact <a href="/support/">Support</a> with your order ID if activation fails after a patch — include Windows version and error details for faster replies.',
			),
		],
	},
	updates: {
		title: 'The Isle Hacks Updates | Easy Anti-Cheat Maintenance Log',
		description:
			'the isle hacks update log: Easy Anti-Cheat rebuilds for ESP boxes, soft aim, and radar on Windows PC. Check status before spawning in after patches.',
		h1: 'The Isle Hacks Updates — Maintenance Log',
		intro:
			'Track Easy Anti-Cheat maintenance and The Isle patch rebuilds for the undetected ESP wallhack, radar hack, and Aimbot package. Check here before spawning in after major updates.',
		imageAlt: "The Isle Hacks live status after Easy Anti-Cheat and game patches",
		galleryTitle: 'The Isle patch and maintenance visuals',
		ctaPrimary: 'Buy The Isle Hacks',
		ctaSecondary: 'Undetected status guide',
		ctaSecondaryHref: '/isle-hacks/',
		sections: [
			section(
				'Why the Updates page matters',
				'The Isle and Easy Anti-Cheat receive frequent patches. The Isle Hacks publishes maintenance notes when ESP wallhack, radar, or Aimbot behavior needs a rebuild.',
				`Use ${EXT.status} for The Isle team platform health and this page for The Isle Hacks build status — both matter on big update days.`,
				'Checking this log before you spawn in reduces surprises after game days or seasonal launches on session and growth run.',
			),
			section(
				'What maintenance entries cover',
				'Entries note Easy Anti-Cheat compatibility status, rebuilt ESP wallhack overlays, radar range fixes, Aimbot tuning after species balance changes, and digital delivery of new builds to active licenses.',
				'Lifetime and monthly subscribers receive rebuild access during active license terms. See <a href="/pricing/">Pricing</a> if you need to renew.',
				'For context on why rebuilds happen, read the <a href="/updates/">Easy Anti-Cheat bypass guide</a> and <a href="/isle-hacks/">undetected the isle hacks</a> explainer.',
			),
			section(
				'Staying undetected after patches',
				'No cheat guarantees permanent undetected status. Combine maintenance updates with responsible in-game settings and patch awareness.',
				`Follow season notes from ${EXT.isle}, then confirm our rebuild is live before you spawn in.`,
				'For urgent status questions after a Easy Anti-Cheat update, contact <a href="/support/">Support</a> with your license tier and last played build version.',
			),
		],
	},
	faq: {
		title: 'The Isle Hacks FAQ | ESP, Soft Aim & RadarRadar Answers',
		description:
			'the isle hacks FAQ: ESP boxes, soft aim, Easy Anti-Cheat maintenance, and pricing for PC. Clear answers before you buy.',
		h1: 'The Isle Hacks FAQ — Common Questions',
		intro:
			'Answers about undetected The Isle Hacks — ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat maintenance, checkout, and The Isle compatibility on Windows PC.',
		imageAlt: "The Isle Hacks FAQ — delivery, setup, and update answers",
		galleryTitle: 'The Isle Hacks FAQ visuals',
		ctaPrimary: 'Buy The Isle Hacks',
		ctaSecondary: 'Contact support',
		ctaSecondaryHref: '/support/',
		sections: [
			section(
				'What is The Isle Hacks?',
				'The Isle Hacks is an undetected cheat package for The Isle on Windows PC. It includes ESP wallhack, 2D radar-style awareness, and Aimbot controls with Easy Anti-Cheat maintenance updates.',
				'Packages cover session and growth run. Explore <a href="/features/">Features</a> for the full control list and <a href="/isle-esp/">ESP</a> / <a href="/isle-aimbot/">Aimbot</a> for module detail.',
				`The Isle itself is published by The Isle team (${EXT.isle}). Cheats are third-player tools and may violate The Isle team' rules — use is at your own risk.`,
			),
			section(
				'Are The Isle Hacks undetected in 2026?',
				'The Isle Hacks is maintained with rebuilds after Easy Anti-Cheat and game patches. Check the <a href="/updates/">Updates page</a> for current status — no cheat can guarantee permanent undetected operation.',
				'Read <a href="/isle-hacks/">undetected the isle hacks</a> and the <a href="/updates/">Easy Anti-Cheat guide</a> for the maintenance workflow.',
				'Responsible settings and reading maintenance notes before spawning in are essential.',
			),
			section(
				'Delivery, pricing, and support',
				'Licenses deliver digitally after payment confirmation. Monthly is $35; lifetime is $150 USD — see <a href="/pricing/">Pricing</a>.',
				'Contact support@theislehacks.org or the <a href="/support/">Support page</a> with order details for setup or billing help. First launch steps are on <a href="/setup/">Setup</a>.',
				'Refund eligibility is covered in the <a href="/refund-policy/">Refund Policy</a>.',
			),
		],
	},
	support: {
		title: 'The Isle Hacks Support | Help & Contact',
		description:
			'Contact the isle hacks support for licenses, ESP setup, soft aim profiles, and on Windows PC. Include your order ID for faster help.',
		h1: 'The Isle Hacks Support — Contact Us',
		intro:
			'Get help with The Isle Hacks licenses, checkout, ESP wallhack setup, Aimbot profiles, and Easy Anti-Cheat maintenance for The Isle on Windows PC.',
		imageAlt: "The Isle Hacks support page for license and setup help",
		galleryTitle: 'The Isle Hacks support resources',
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
				'Support requests are reviewed daily. The Isle Hacks support covers delivery, billing, setup, and maintenance — not in-game coaching or account recovery for The Isle team bans.',
				`Account and game policy questions belong with The Isle team. We can help with license delivery and product configuration only.`,
				'Check the Updates page and FAQ before opening a ticket — many post-patch questions are answered there.',
			),
			section(
				'Self-service resources',
				'Setup guide, Features list, Updates log, Refund Policy, and Terms of Use are linked from the footer. Easy Anti-Cheat bypass notes live on the dedicated <a href="/updates/">Easy Anti-Cheat page</a>.',
				'Email: support@theislehacks.org',
				'Ready to purchase or renew? Open <a href="/pricing/">Pricing</a>. Need feature detail first? See <a href="/features/">Features</a>.',
			),
		],
	},
	undetected: {
		title: 'Undetected The Isle Hacks 2026 | Easy Anti-Cheat Maintenance',
		description:
			'Undetected the isle hacks with Easy Anti-Cheat maintenance for ESP boxes, soft aim, and radar on Windows PC. Check status before you spawn in.',
		h1: 'Undetected The Isle Hacks — Easy Anti-Cheat Maintenance',
		intro:
			'How The Isle Hacks stays maintained for The Isle after Easy Anti-Cheat patches — ESP wallhack, radar hack, and Aimbot rebuilds for Windows PC.',
		imageAlt: "The Isle Hacks undetected status overview for Windows PC",
		galleryTitle: 'Undetected The Isle Hacks visuals',
		ctaPrimary: 'Buy The Isle Hacks',
		ctaSecondary: 'Easy Anti-Cheat bypass guide',
		ctaSecondaryHref: '/updates/',
		sections: [
			section(
				'What undetected means for The Isle Hacks',
				'Undetected The Isle Hacks means the package is actively maintained against Easy Anti-Cheat and major The Isle patches — not that detection is impossible forever.',
				'Rebuilds target ESP wallhack overlays, radar behavior, and Aimbot signatures after Easy Anti-Cheat security updates.',
				`Anti-cheat technology is documented by ${EXT.eac}; The Isle client updates ship through ${EXT.activision}. Undetected status is an ongoing process tied to those releases.`,
			),
			section(
				'Easy Anti-Cheat maintenance workflow',
				'When Easy Anti-Cheat or The Isle updates ship, the team assesses ESP, radar, and Aimbot modules, publishes status on the <a href="/updates/">Updates page</a>, and delivers rebuilt builds to active licenses.',
				`On patch mornings, also check ${EXT.status} for launcher outages that can look like product failures.`,
				'Deep technical workflow: <a href="/updates/">Easy Anti-Cheat bypass The Isle guide</a>. Feature stack: <a href="/features/">Features</a>.',
			),
			section(
				'Responsible use and next steps',
				'Combine maintenance with conservative in-game settings. Read the <a href="/faq/">FAQ</a> and Updates log regularly — undetected status is not a one-time promise.',
				'Lifetime and monthly plans include rebuild access during active terms — see <a href="/pricing/">Pricing</a>.',
				'New buyers should also read <a href="/isle-hacks/">the isle hacks 2026</a> and complete <a href="/setup/">Setup</a> after delivery.',
			),
		],
	},
	wallhack: {
		title: 'The Isle Wallhack 2026 | ESP Boxes & Visibility',
		description:
			'isle wallhack ESP with player boxes and carcass markers for Windows PC. Undetected the isle hacks — learn overlays and buy.',
		h1: 'The Isle Wallhack — ESP Boxes & Visibility',
		intro:
			'Isle wallhack ESP for The Isle — see players, carcasses, apex dinosaurs, and water sources through toggleable wallhack overlays built for herbivore and carnivore survival sessions.',
		imageAlt: "isle wallhack visibility through walls in a session",
		galleryTitle: 'isle wallhack ESP gallery',
		ctaPrimary: 'Buy The Isle Hacks',
		ctaSecondary: 'Isle ESP page',
		ctaSecondaryHref: '/isle-esp/',
		sections: [
			section(
				'Wallhack ESP vs raw aim tools',
				'An Isle wallhack focuses on information — player outlines, carcass pins, apex threat cues — rather than automatic aiming. The Isle Hacks bundles wallhack ESP with radar and optional Aimbot in one license.',
				'Toggle categories so only the wallhack overlays you need stay active during rotations and nest zones.',
				'For the broader ESP keyword page see <a href="/isle-esp/">Isle ESP</a>; for combat assist see <a href="/isle-aimbot/">Aimbot</a>.',
			),
			section(
				'Map coverage for wallhack ESP',
				'Wallhack overlays support session, growth run, and official servers with distance readouts and snaplines for engagement control.',
				`Season maps and POI changes are announced via ${EXT.isle}. Wallhack remains useful because it tracks entities, not fixed landmarks alone.`,
				'Pair wallhack awareness with <a href="/isle-radar-hack/">radar hack</a> cues for flanks during forest and river bank ambushes.',
			),
			section(
				'Undetected wallhack maintenance',
				'ESP wallhack modules rebuild after Easy Anti-Cheat patches. Follow the <a href="/updates/">Updates page</a> and complete checkout for instant license delivery on Windows PC.',
				'Learn the full maintenance story on <a href="/isle-hacks/">undetected the isle hacks</a> and <a href="/updates/">Easy Anti-Cheat bypass</a>.',
				'Ready to buy? Compare <a href="/pricing/">Pricing</a> or continue to the <a href="/isle-esp/">ESP hack</a> landing for alternate search wording.',
			),
		],
	},
	radar: {
		title: 'The Isle Radar Hack 2026 | 2D Threat Overlay',
		description:
			'isle radar hack for flank awareness on Windows PC. Bundled with ESP boxes, soft aim, and radar in our The Isle Hacks package.',
		h1: 'The Isle Radar Hack — 2D Threat Awareness',
		intro:
			'2D radar-style overlay for The Isle — directional threat cues for nearby players outside your line of sight, bundled with ESP wallhack and Aimbot.',
		imageAlt: "The Isle 2D radar overlay showing nearby threats",
		galleryTitle: 'isle radar hack visuals',
		ctaPrimary: 'Buy The Isle Hacks',
		ctaSecondary: 'See ESP wallhack',
		ctaSecondaryHref: '/isle-esp/',
		sections: [
			section(
				'Why radar hack matters in The Isle',
				'survival hunts happen across open terrain — hills, forests, and river banks. A 2D radar overlay shows nearby player threats outside direct line of sight so you can reposition before a third player.',
				'The Isle Hacks radar complements <a href="/isle-esp/">ESP wallhack</a> markers during pack pushes and nest zone fights.',
				`Mode rules and seasonal changes come from ${EXT.isle}. Radar range remains configurable when map scale or mobility meta shifts.`,
			),
			section(
				'Configurable radar range',
				'Adjust radar range for early rotations versus tight nest zones. Directional cues highlight flanks during building clears and flank pushes across session and growth run.',
				'Toggle radar alongside ESP and Aimbot with in-client hotkeys during live matches — see the <a href="/isle-hacks/">mod menu</a> page.',
				'Combat follow-up lives on <a href="/isle-aimbot/">Aimbot</a> when you convert radar info into a fight.',
			),
			section(
				'Maintenance and licensing',
				'Radar hack modules receive Easy Anti-Cheat maintenance rebuilds with the full The Isle Hacks package. Monthly and lifetime licenses include digital delivery — see <a href="/pricing/">Pricing</a>.',
				'Check <a href="/updates/">Updates</a> after major The Isle patches before relying on previous radar configs.',
				'New to the stack? Start at <a href="/features/">Features</a> or <a href="/isle-hacks/">undetected status</a>.',
			),
		],
	},
	'eac': {
		title: 'Easy Anti-Cheat Bypass The Isle | The Isle Hacks Maintenance',
		description:
			'How the isle hacks rebuild after Easy Anti-Cheat patches — ESP boxes, soft aim, and radar maintenance for Windows PC. Read before spawning in.',
		h1: 'Easy Anti-Cheat Bypass — The Isle Hacks Maintenance',
		intro:
			'Understand Easy Anti-Cheat maintenance for The Isle Hacks — how ESP wallhack, radar hack, and Aimbot rebuild after The Isle security updates.',
		imageAlt: "The Isle Hacks maintenance after a Easy Anti-Cheat patch",
		galleryTitle: 'Easy Anti-Cheat maintenance visuals',
		ctaPrimary: 'Buy The Isle Hacks',
		ctaSecondary: 'Check updates',
		ctaSecondaryHref: '/updates/',
		sections: [
			section(
				'Easy Anti-Cheat overview',
				`Easy Anti-Cheat is The Isle team' anti-cheat for The Isle on PC (see ${EXT.eac}). Security updates can affect ESP wallhack, radar, and Aimbot behavior — requiring maintenance rebuilds for undetected packages.`,
				`The Isle Hacks monitors Easy Anti-Cheat patch notes and The Isle seasonal updates from ${EXT.isle} to schedule module reviews.`,
				'“Easy Anti-Cheat bypass” in our wording means timely maintenance — not a permanent free pass around anti-cheat.',
			),
			section(
				'What happens after a Easy Anti-Cheat patch',
				'The team tests ESP overlays, radar signatures, and Aimbot profiles against the new build, publishes status on <a href="/updates/">Updates</a>, and ships rebuilt packages to active licenses.',
				`Confirm The Isle team service health on ${EXT.status} if the launcher or matchmaking fails during the same window.`,
				'Avoid spawning in on old builds after major patch days until maintenance notes confirm a new release. Related reading: <a href="/isle-hacks/">undetected the isle hacks</a>.',
			),
			section(
				'No permanent bypass guarantee',
				'Easy Anti-Cheat bypass in practice means timely maintenance. Read the undetected guide, <a href="/faq/">FAQ</a>, and Updates log before every session.',
				'Contact <a href="/support/">Support</a> if activation fails immediately after a posted rebuild.',
				'Buying for the first time? Compare <a href="/pricing/">Pricing</a> and finish <a href="/setup/">Setup</a> only after Updates shows a live build.',
			),
		],
	},
	'cheats-2026': {
		title: 'The Isle Hacks 2026 | ESP Soft Aim & Radar',
		description:
			'Best the isle hacks 2026: ESP boxes, soft aim, and radar for Windows PC. Undetected the isle hacks with Easy Anti-Cheat maintenance — compare and buy.',
		h1: 'The Isle Hacks 2026 — ESP, Soft Aim & RadarRadar',
		intro:
			'The 2026 The Isle Hacks package for The Isle — undetected ESP wallhack, radar hack, and Aimbot with Easy Anti-Cheat maintenance, instant delivery, and Windows PC support.',
		imageAlt: "The Isle Hacks product overview for The Isle",
		galleryTitle: 'The Isle Hacks 2026 gallery',
		ctaPrimary: 'Buy The Isle Hacks',
		ctaSecondary: 'Compare features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'Why the isle hacks buyers choose The Isle Hacks in 2026',
				'2026 updates bring new maps, dinosaur balance changes, and Easy Anti-Cheat patches. The Isle Hacks bundles ESP wallhack, radar hack, and Aimbot with active maintenance — not a stale prior-year build.',
				`Track official season messaging on ${EXT.isle}, then use our <a href="/updates/">Updates log</a> for product rebuild timing.`,
				'Monthly ($35) and lifetime ($150) plans cover session and growth run loops — see <a href="/pricing/">Pricing</a>.',
			),
			section(
				'Full feature stack for 2026 buyers',
				'Player ESP wallhack, carcass markers, 2D radar overlays, Aimbot profiles, in-client toggles, and post-patch rebuilds — one license instead of stacking separate tools.',
				'Deep links: <a href="/isle-hacks/">The Isle Hacks pillar</a>, <a href="/isle-esp/">ESP</a>, <a href="/isle-aimbot/">Aimbot</a>, <a href="/isle-esp/">wallhack</a>, <a href="/isle-radar-hack/">radar</a>, <a href="/isle-hacks/">undetected</a>.',
				'Instant digital delivery after checkout confirmation worldwide.',
			),
			section(
				'Before you buy in 2026',
				'Read the <a href="/isle-hacks/">the isle hacks</a> pillar, Features, Pricing, Setup, and Updates pages. Check undetected status notes after every major patch — responsible use and maintenance awareness matter.',
				'Also compare the <a href="/isle-hacks/">the isle hacks</a> checklist, <a href="/blog/isle-hacks-2026-whats-new/">2026 blog guide</a>, and <a href="/faq/">FAQ</a>.',
				'Support is available at support@theislehacks.org via the <a href="/support/">Support page</a>.',
			),
		],
	},
	hacks: {
		title: 'The Isle Hacks 2026 | Undetected ESP Aimbot Guide',
		description:
			'the isle hacks for Windows PC: undetected ESP wallhack, radar hack, and Aimbot with Easy Anti-Cheat maintenance. Compare the isle hacks options and buy the full package.',
		h1: 'The Isle Hacks — Undetected ESP, Aimbot & Wallhack',
		intro:
			'the isle hacks for session and growth run combine ESP wallhack visibility, 2D radar-style threat cues, and Aimbot controls in one undetected Windows PC license — maintained after Easy Anti-Cheat patches. This is the pillar guide for the isle hacks in 2026.',
		imageAlt: "The Isle Hacks product page — ESP, aimbot, and radar",
		galleryTitle: 'the isle hacks gallery — ESP, Aimbot, wallhack',
		ctaPrimary: 'Buy The Isle Hacks',
		ctaSecondary: 'See undetected guide',
		ctaSecondaryHref: '/isle-hacks/',
		sections: [
			section(
				'What the isle hacks include in 2026',
				'Players searching for the isle hacks usually want visibility and combat tools without stacking separate downloads. The Isle Hacks bundles player ESP wallhack, carcass markers, 2D radar overlays, and configurable Aimbot in one maintained package — the same toolkit often called the isle hacks.',
				'Coverage spans session and growth run with in-client toggles for live matches. Monthly ($35) and lifetime ($150) licenses unlock the full stack.',
				`Official game updates come from ${EXT.isle}; our hacks package tracks those releases via the <a href="/updates/">Updates page</a>. Cross-check platform health on ${EXT.status} before patch-day spawn ins.`,
			),
			section(
				'How this The Isle Hacks pillar fits nearby pages',
				'Use this pillar for the core product overview. For year-specific buying notes, see the <a href="/isle-hacks/">the isle hacks 2026</a> and <a href="/isle-hacks/">the isle hacks</a> pages cover buyer comparisons in cheats wording.',
				'Deep-dive modules: <a href="/isle-esp/">Isle ESP</a>, <a href="/isle-aimbot/">Isle Aimbot</a>, <a href="/isle-esp/">wallhack</a>, <a href="/isle-radar-hack/">radar hack</a>, and <a href="/isle-aimbot/">soft aim</a>.',
				'Blog guides expand Easy Anti-Cheat keyword: <a href="/blog/isle-hacks-complete-guide-2026/">hacks complete guide</a>, <a href="/blog/isle-hacks-buyers-guide/">cheats buyers guide</a>, and <a href="/blog/undetected-isle-hacks-eac/">undetected Easy Anti-Cheat notes</a>.',
			),
			section(
				'the isle hacks vs single-feature tools',
				'Standalone hacks often cover only wallhack or only aim assist. The Isle Hacks maps the full survival loop: read enemy packs, track apex dinosaurs and carcasses, spot flanks on radar, and tune Aimbot per species.',
				'Compare the <a href="/isle-esp/">ESP</a>, <a href="/isle-aimbot/">Aimbot</a>, and <a href="/features/">Features</a> pages — or review <a href="/pricing/">Pricing</a> for monthly and lifetime licenses.',
				'Related landings: <a href="/setup/">cheat download</a>, <a href="/isle-hacks/">mod menu</a>, <a href="/isle-aimbot/">aimbot</a>, <a href="/isle-esp/">ESP</a>.',
			),
			section(
				'Undetected the isle hacks with Easy Anti-Cheat maintenance',
				'Undetected the isle hacks require rebuilds after Easy Anti-Cheat and major The Isle patches. Check Updates before spawning in — maintenance notes confirm when a new build is live. No package can promise permanent undetected status.',
				`See ${EXT.eac} for anti-cheat background and our <a href="/updates/">Easy Anti-Cheat bypass guide</a> for the practical workflow. Pair with <a href="/isle-hacks/">undetected the isle hacks</a> for status language buyers expect.`,
				'Digital delivery runs after checkout for Windows 10 and 11 PCs worldwide. After purchase, follow <a href="/setup/">Setup</a> and keep <a href="/support/">Support</a> ready with your order ID.',
			),
		],
	},
	'cheat-download': {
		title: 'The Isle Hack Download 2026 | Instant Access',
		description:
			'the isle hack download with instant license delivery — ESP boxes, soft aim, and radar for Windows PC. Buy, activate, and play.',
		h1: 'The Isle Hack Download — Instant License Delivery',
		intro:
			'How the isle hack download works for The Isle — digital license delivery after payment confirmation, with ESP wallhack, radar hack, and Aimbot access on Windows PC.',
		imageAlt: "The Isle Hacks download and install delivery flow",
		galleryTitle: 'the isle hack download visuals',
		ctaPrimary: 'Buy The Isle Hacks',
		ctaSecondary: 'Setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'How the isle hack download delivery works',
				'After checkout confirms payment, The Isle Hacks license details arrive digitally by email. No physical shipment — access begins once activation instructions are delivered.',
				'Keep your order confirmation and license email ready for the <a href="/setup/">Setup guide</a> and Support requests.',
				`If The Isle team services are down, check ${EXT.status} before assuming a download failure.`,
			),
			section(
				'What your download unlocks',
				'Every the isle hack download includes player ESP wallhack, carcasses and carcass markers, 2D radar overlays, Aimbot profiles, and in-client toggles for herbivore and carnivore survival sessions.',
				'Monthly ($35) and lifetime ($150) plans share the same feature stack — compare options on the <a href="/pricing/">Pricing page</a>.',
				'Feature detail: <a href="/features/">Features</a>. Module pages: <a href="/isle-esp/">ESP</a>, <a href="/isle-aimbot/">Aimbot</a>.',
			),
			section(
				'After purchase — setup and updates',
				'Follow Setup to activate ESP wallhack and Aimbot on Windows 10 or 11. When The Isle or Easy Anti-Cheat patches ship, check the <a href="/updates/">Updates page</a> for maintenance rebuilds.',
				'Contact <a href="/support/">Support</a> with your order ID if delivery or activation fails within 24 hours of purchase.',
				'Also read <a href="/isle-hacks/">undetected status</a> so you know what “download ready” means after a patch.',
			),
		],
	},
	'mod-menu': {
		title: 'The Isle Mod Menu 2026 | ESP & Soft Aim Toggles',
		description:
			'The Isle mod menu for in-match toggles — ESP boxes, soft aim, radar, and on Windows PC. Undetected The Isle Hacks package.',
		h1: 'The Isle Mod Menu — In-Client Control Panel',
		intro:
			'The Isle mod menu controls for The Isle — toggle ESP wallhack categories, radar range, and Aimbot profiles mid-match without leaving your The Isle session on Windows PC.',
		imageAlt: "The Isle Hacks in-game menu controls",
		galleryTitle: 'The Isle mod menu gallery',
		ctaPrimary: 'Buy The Isle Hacks',
		ctaSecondary: 'Full feature list',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'What a The Isle mod menu controls',
				'A The Isle mod menu is the in-client panel where you enable ESP wallhack overlays, adjust radar range, and switch Aimbot profiles during live matches. The Isle Hacks keeps those toggles accessible with hotkeys.',
				'Toggle player outlines, carcass markers, vehicle cues, and per-species Aimbot settings without alt-tabbing out of The Isle.',
				'Control deep-dives: <a href="/isle-esp/">ESP</a>, <a href="/isle-aimbot/">Aimbot</a>, <a href="/isle-radar-hack/">radar</a>.',
			),
			section(
				'Mod menu categories for herbivore and carnivore survival sessions',
				'Separate ESP wallhack categories for players, carcasses, water sources, and apex dinosaurs let you reduce overlay noise during rotations and nest zones.',
				'Radar hack range and Aimbot smoothness adjust from the same mod menu — useful when ${EXT.isle} seasons change fight distances and mobility.',
				'Soft tracking players should start with <a href="/isle-aimbot/">soft aim</a> profiles before aggressive FOV.',
			),
			section(
				'Maintained mod menu after Easy Anti-Cheat patches',
				'The Isle mod menu behavior is rebuilt when Easy Anti-Cheat or major The Isle updates land. Follow the <a href="/updates/">Updates page</a> and <a href="/updates/">Easy Anti-Cheat bypass guide</a> before spawning in on patch days.',
				'Checkout with instant digital delivery for monthly and lifetime licenses — see <a href="/pricing/">Pricing</a>.',
				'Need install steps? Open <a href="/setup/">Setup</a> after your license email arrives.',
			),
		],
	},
	'soft-aim': {
		title: 'The Isle Soft Aim 2026 | Smooth Aimbot Settings',
		description:
			'The Isle soft aim settings for natural tracking on Windows PC. Smoothness, FOV, and bone priority — included in our the isle hacks with ESP boxes.',
		h1: 'The Isle Soft Aim — Smooth Aimbot Controls',
		intro:
			'The Isle soft aim settings for The Isle — configurable Aimbot smoothness, FOV, bone priority, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: "The Isle soft aim FOV and smoothness settings",
		galleryTitle: 'The Isle soft aim gallery',
		ctaPrimary: 'Buy The Isle Hacks',
		ctaSecondary: 'Aimbot controls',
		ctaSecondaryHref: '/isle-aimbot/',
		sections: [
			section(
				'What The Isle soft aim means',
				'The Isle soft aim refers to Aimbot behavior tuned for smooth, natural-looking tracking rather than instant snap. The Isle Hacks exposes smoothness, FOV, and aim smoothing sliders so you control how assist feels in BR hunts.',
				'Bone priority and target selection cover closest player, lowest health, or highest-threat targets during pack fights.',
				'Full Aimbot documentation: <a href="/isle-aimbot/">Isle Aimbot</a>. Alternate wording: <a href="/isle-aimbot/">aimbot hack</a>.',
			),
			section(
				'Soft aim profiles per species',
				'Save separate soft aim profiles for carnivores, ambush builds, and long-range species. Switch between long-range ambush hunts and close pack fights with hotkeys mid-session.',
				`Weapon kill speeds shift with ${EXT.isle} balance patches — retune smoothness after major combat updates.`,
				'Soft aim ships alongside <a href="/isle-esp/">ESP wallhack</a> and <a href="/isle-radar-hack/">2D radar</a> overlays.',
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
		title: 'Best The Isle Hacks 2026 | Buyer Guide',
		description:
			'Best the isle hacks for 2026: ESP boxes, soft aim, and Easy Anti-Cheat maintenance on Windows PC. Use this checklist before checkout.',
		h1: 'Best The Isle Hacks — 2026 Buyer Guide',
		intro:
			'Compare the isle hacks for The Isle in 2026 — undetected ESP wallhack, radar hack, and Aimbot in one maintained package with Easy Anti-Cheat rebuilds and instant delivery.',
		imageAlt: "The Isle Hacks overview for The Isle on PC",
		galleryTitle: 'Best the isle hacks gallery',
		ctaPrimary: 'Buy The Isle Hacks',
		ctaSecondary: 'Compare pricing',
		ctaSecondaryHref: '/pricing/',
		sections: [
			section(
				'What makes the isle hacks in 2026',
				'The isle hacks combine active Easy Anti-Cheat maintenance, a full ESP wallhack and radar stack, configurable Aimbot, and clear update communication — not a stale build from a prior season.',
				'The Isle Hacks covers session and growth run with in-client toggles and post-patch rebuilds.',
				`Verify the live game is healthy via ${EXT.status}, then confirm our <a href="/updates/">Updates</a> note before you judge any package “best.”`,
			),
			section(
				'Best the isle hacks feature checklist',
				'Look for player ESP wallhack, carcass markers, 2D radar overlays, Aimbot profiles, hotkey toggles, and documented maintenance after The Isle patches.',
				'Review <a href="/features/">Features</a>, <a href="/isle-hacks/">undetected status</a>, and <a href="/isle-hacks/">the isle hacks 2026</a> before checkout — monthly ($35) and lifetime ($150) plans available.',
				'Module pages worth opening: <a href="/isle-esp/">ESP</a>, <a href="/isle-aimbot/">Aimbot</a>, <a href="/isle-hacks/">hacks</a>.',
			),
			section(
				'Buying the isle hacks safely',
				'Purchase through secure checkout for instant digital delivery. Read Setup, FAQ, and Updates pages before your first spawn in — and contact Support with order details if activation needs help.',
				'No cheat guarantees permanent undetected status — combine maintenance with responsible in-game settings.',
				`Remember: using cheats can violate The Isle team terms. Proceed only if you accept that risk.`,
			),
		],
	},
	'aimbot-hack': {
		title: 'Isle Aimbot Hack 2026 | Soft Aim Assist',
		description:
			'Isle Aimbot hack with soft aim for Windows PC. FOV, bone priority, and hotkeys — bundled with ESP boxes in our The Isle Hacks package.',
		h1: 'Isle Aimbot Hack — Soft Aim Assist',
		intro:
			'Isle Aimbot hack tools for The Isle — smoothness, FOV, bone priority, per-species profiles, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: "Isle Aimbot hack controls and bone priority",
		galleryTitle: 'Isle Aimbot hack gallery',
		ctaPrimary: 'Buy The Isle Hacks',
		ctaSecondary: 'Aimbot settings',
		ctaSecondaryHref: '/isle-aimbot/',
		sections: [
			section(
				'Isle Aimbot hack vs visibility tools',
				'A Isle Aimbot hack focuses on assisted targeting during hunts — while ESP wallhack and radar handle map awareness. The Isle Hacks bundles aimbot hack modules with visibility overlays in one license.',
				'Smoothness, FOV, and aim smoothing controls tune assist for The Isle combat pace across herbivore and carnivore survival sessions.',
				'Prefer softer tracking language? See <a href="/isle-aimbot/">soft aim</a>. Full settings: <a href="/isle-aimbot/">Aimbot page</a>.',
			),
			section(
				'Aimbot hack controls and hotkeys',
				'Bone priority options cover head, chest, or dynamic targets. Hotkeys enable or disable aimbot hack mid-match without opening menus during rotations or late-session nests.',
				'Per-species profile slots separate long-range AR tuning from close-quarters SMG settings.',
				`Balance patches from ${EXT.isle} can change ideal FOV — retune after major species balance updates.`,
			),
			section(
				'Undetected aimbot hack maintenance',
				'Aimbot hack signatures rebuild after Easy Anti-Cheat updates. Follow the <a href="/updates/">Updates page</a> and <a href="/updates/">Easy Anti-Cheat bypass guide</a> before spawning in after patch days.',
				'Checkout with instant digital delivery for Windows 10 and 11 — <a href="/pricing/">Pricing</a>.',
				'Pair with <a href="/isle-esp/">ESP</a> for the full information + assist loop.',
			),
		],
	},
	'esp-hack': {
		title: 'Isle ESP Hack 2026 | Player Boxes & Loot',
		description:
			'Isle ESP hack with player boxes and carcass markers for Windows PC. Undetected the isle hacks with — see overlays and buy.',
		h1: 'Isle ESP Hack — Player Boxes Guide',
		intro:
			'Isle ESP hack overlays for The Isle — player outlines, apex threat cues, carcass and water markers with distance readouts across session and growth run.',
		imageAlt: "Isle ESP hack boxes and carcass markers",
		galleryTitle: 'Isle ESP hack gallery',
		ctaPrimary: 'Buy The Isle Hacks',
		ctaSecondary: 'ESP controls',
		ctaSecondaryHref: '/isle-esp/',
		sections: [
			section(
				'What a Isle ESP hack shows',
				'A Isle ESP hack renders enemy player outlines, vehicle positions, and carcass pins through walls and terrain — closing the information gap before you commit to a fight.',
				'Distance readouts and snapline options help control engagement range during pack pushes and third-player scenarios.',
				'Canonical visibility guide: <a href="/isle-esp/">Isle ESP</a>. Wallhack wording: <a href="/isle-esp/">wallhack</a>.',
			),
			section(
				'ESP hack categories for sessions',
				'Toggle player ESP hack, carcass markers, chest pins, and vehicle cues independently so only session-critical overlays stay active during rotations.',
				'Team and enemy colour coding supports herbivore and carnivore survival sessions.',
				`POI and carcasses changes publish through ${EXT.activision} — keep categories toggled to what the current map rewards.`,
			),
			section(
				'Undetected ESP hack with Easy Anti-Cheat maintenance',
				'ESP hack modules rebuild after Easy Anti-Cheat and The Isle patches. Check the <a href="/updates/">Updates page</a> before spawning in — pair ESP hack awareness with <a href="/isle-radar-hack/">radar hack</a> for flank reads.',
				'Licenses deliver digitally after checkout on Windows PC — see <a href="/pricing/">Pricing</a>.',
				'Install steps: <a href="/setup/">Setup</a>. Status questions: <a href="/isle-hacks/">undetected guide</a>.',
			),
		],
	},
	'unlock-all': {
		title: 'The Isle Unlock All 2026 | What It Really Means',
		description:
			'The Isle unlock-all explained vs real the isle hacks — ESP boxes, soft aim, and radar for Windows PC. Know what you are buying.',
		h1: 'The Isle Unlock All — What Players Search For',
		intro:
			'The Isle unlock-all is a common search term for The Isle — this page clarifies what unlock-all tools claim versus the ESP wallhack, radar hack, and Aimbot tools The Isle Hacks actually provides on Windows PC.',
		imageAlt: "The Isle Hacks license features overview",
		galleryTitle: 'The Isle unlock-all guide visuals',
		ctaPrimary: 'Buy The Isle Hacks',
		ctaSecondary: 'See features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'What The Isle unlock-all usually means',
				'The Isle unlock-all searches often refer to instant access to dinosaurs, skins, or growth tiers. Those claims differ from visibility and combat-assist tools like ESP wallhack and Aimbot.',
				'The Isle Hacks focuses on in-match awareness — player ESP, carcass markers, radar overlays, and configurable Aimbot — not account-wide cosmetic unlocks.',
				`Cosmetics and patch cycle progression items are sold through ${EXT.isle}. Be wary of unlock-all downloads that promise free skins — they are often scams.`,
			),
			section(
				'Visibility tools vs unlock-all claims',
				'ESP wallhack helps you spot enemy packs, apex dinosaurs, and fresh carcasses during live sessions. Radar hack adds flank awareness; Aimbot covers combat assist with smoothness and hotkey controls.',
				'For loadout planning during a match, carcasses and carcass markers speed map rotations — see the <a href="/isle-esp/">ESP</a> and <a href="/features/">Features</a> pages for the full tool list.',
				'Related: <a href="/isle-hacks/">the isle hacks</a> and <a href="/isle-hacks/">the isle hacks</a>.',
			),
			section(
				'Buying The Isle Hacks for the right reasons',
				'If you need undetected ESP wallhack, radar hack, and Aimbot for The Isle on Windows PC, compare <a href="/pricing/">Pricing</a> and read the <a href="/setup/">Setup guide</a> before checkout.',
				'Check the <a href="/updates/">Updates page</a> after Easy Anti-Cheat patches — maintenance rebuilds publish for active licenses.',
				'Questions? <a href="/faq/">FAQ</a> and <a href="/support/">Support</a> cover delivery and configuration — not cosmetic unlocks.',
			),
		],
	},
	privacy: {
		title: 'Privacy Policy | The Isle Hacks',
		description:
			'Privacy policy for The Isle Hacks. How we handle support emails, order data, and checkout for the isle hacks licenses on theislehacks.org.',
		h1: 'Privacy Policy',
		intro: 'How The Isle Hacks handles information when you browse theislehacks.org or contact support about a The Isle license.',
		imageAlt: "The Isle Hacks privacy policy page",
		galleryTitle: 'The Isle Hacks legal resources',
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
				'Analytics may use aggregated traffic data without identifying individual The Isle Hacks customers.',
			),
			section(
				'Your choices and contact',
				'You may request correction or deletion of support email data by contacting support@theislehacks.org with your request details.',
				'Policy updates publish on this page. Continued use of theislehacks.org after updates means you accept the revised policy. Also see <a href="/terms/">Terms of Use</a> and <a href="/refund-policy/">Refund Policy</a>.',
			),
		],
	},
	refund: {
		title: 'Refund Policy | The Isle Hacks',
		description:
			'Refund policy for The Isle Hacks. Digital delivery terms and eligibility for The Isle Hacks packages with ESP, soft aim, and radar.',
		h1: 'Refund Policy',
		intro:
			'Refund terms for The Isle Hacks licenses — ESP wallhack, radar hack, and Aimbot packages purchased through checkout for The Isle.',
		imageAlt: "The Isle Hacks refund policy page",
		galleryTitle: 'The Isle Hacks billing resources',
		ctaPrimary: 'Contact support',
		ctaSecondary: 'Read privacy policy',
		ctaSecondaryHref: '/privacy-policy/',
		sections: [
			section(
				'Digital delivery and eligibility',
				'The Isle Hacks licenses deliver digitally after payment confirmation. Because access begins immediately, refunds are limited to cases outlined below.',
				'Submit refund requests within 24 hours of purchase with your order ID and reason.',
			),
			section(
				'When refunds may be approved',
				'Duplicate charges, failed delivery despite confirmed payment, or technical activation failures verified by support may qualify for review.',
				'Refund decisions are final. Chargebacks without contacting support first may result in license revocation. See also <a href="/terms/">Terms of Use</a>.',
			),
			section(
				'How to request a refund',
				'Email support@theislehacks.org with subject "Refund Request", your order ID, purchase date, and issue summary — or use the <a href="/support/">Support page</a>.',
				'Approved refunds process back to the original payment method when possible. Pricing details live on <a href="/pricing/">Pricing</a>.',
			),
		],
	},
	terms: {
		title: 'Terms of Use 2026 | The Isle Hacks Rules',
		description:
			'Terms of use for theislehacks.org and The Isle Hacks licenses. Usage rules, anti-cheat risk, and liability for Windows PC cheats.',
		h1: 'Terms of Use',
		intro: 'Terms governing use of theislehacks.org and The Isle Hacks licenses for The Isle on Windows PC.',
		imageAlt: "The Isle Hacks terms of use page",
		galleryTitle: 'The Isle Hacks legal pages',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read privacy policy',
		ctaSecondaryHref: '/privacy-policy/',
		sections: [
			section(
				'Acceptance and license scope',
				'By purchasing or using The Isle Hacks you agree to these terms. Licenses grant personal use of ESP wallhack, radar, and Aimbot tools for The Isle on Windows PC only.',
				'Sharing, reselling, or reverse-engineering the package violates these terms and may revoke access.',
			),
			section(
				'Risk and anti-cheat disclaimer',
				`Using cheats in The Isle may violate The Isle team terms and result in account penalties. The Isle Hacks provides maintenance but does not guarantee undetected status or account safety.`,
				'You assume all risk. We are not liable for bans, data loss, or damages arising from product use. See also <a href="/isle-hacks/">undetected status</a>.',
			),
			section(
				'Changes and governing law',
				'We may update these terms by posting revisions on this page. Continued use after changes constitutes acceptance.',
				'Contact support@theislehacks.org for questions. Related policies: <a href="/privacy-policy/">Privacy</a> and <a href="/refund-policy/">Refunds</a>.',
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
