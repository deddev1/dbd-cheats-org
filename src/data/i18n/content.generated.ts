import type { LocaleCode } from './locales';

export type PageSection = { h2: string; paragraphs: string[]; list?: string[] };
export type PageContent = {
	title: string;
	description: string;
	h1: string;
	intro: string;
	imageAlt: string;
	galleryTitle: string;
	heroImage: string;
	sections: PageSection[];
	ctaPrimary: string;
	ctaSecondary?: string;
	ctaSecondaryHref?: string;
};
export type LocaleUi = {
	nav: { home: string; hacks: string; aimbot: string; esp: string; features: string; pricing: string; setup: string; updates: string; faq: string; buyNow: string };
	hero: { accent: string; accentShort: string; subtitle: string; subtitleShort: string; buyNow: string; seeFeatures: string };
	trust: { status: string; statusNote: string; statusShort: string; delivery: string; platform: string; antiCheat: string; antiCheatShort: string };
	product: { title: string; addToCart: string; monthly: string; lifetime: string; available: string; gameBadge: string; platformBadge: string; statusBadge: string };
	reviews: { title: string; subtitle: string; outOf: string; countLabel: string };
	common: { buyNow: string; readGuide: string; language: string; officialLanguageNote: string; relatedPages: string };
	footer: { explore: string; help: string; tagline: string };
	images: {
		hero: string; espWallhack: string; aimbotCombat: string; packFight: string; dinoEsp: string;
		headerArt: string; hacksPackage: string; ambushFight: string; battleRoyale: string; survivalIsland: string;
	};
};
export type PageId = 'home' | 'isle-esp' | 'isle-aimbot' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'radar' | 'eac' | 'cheats-2026' | 'hacks' | 'cheat-download' | 'mod-menu' | 'soft-aim' | 'best-cheats' | 'aimbot-hack' | 'esp-hack' | 'unlock-all' | 'privacy' | 'refund' | 'terms';

export const i18nContent: Record<LocaleCode, { ui: LocaleUi; pages: Record<PageId, PageContent> }> = {
		en: {
			ui: {
				nav: {
					home: "Home",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Features",
					pricing: "Pricing",
					setup: "Setup",
					updates: "Updates",
					faq: "FAQ",
					buyNow: "Buy Now",
				},
				hero: {
					accent: "2026 — Undetected ESP, Aimbot & Wallhack",
					accentShort: "Undetected the isle hacks 2026",
					subtitle: "the isle hacks with Isle ESP, radar hack and Isle Aimbot for Windows PC — Easy Anti-Cheat maintenance included.",
					subtitleShort: "Isle ESP, radar & aimbot for PC",
					buyNow: "Buy The Isle Hacks",
					seeFeatures: "See Features",
				},
				trust: {
					status: "Online",
					statusNote: "The Isle Hacks — undetected the isle hacks live for The Isle on Windows PC.",
					statusShort: "Live",
					delivery: "Instant digital delivery",
					platform: "Windows 10 & 11",
					antiCheat: "Easy Anti-Cheat maintenance supported",
					antiCheatShort: "Easy Anti-Cheat supported",
				},
				product: {
					title: "The Isle Hacks",
					addToCart: "Add to Cart",
					monthly: "Monthly",
					lifetime: "Lifetime",
					available: "Available now",
					gameBadge: "The Isle",
					platformBadge: "Windows PC",
					statusBadge: "Undetected the isle hacks",
				},
				reviews: {
					title: "What players say",
					subtitle: "Recent feedback from The Isle Hacks buyers",
					outOf: "out of 5",
					countLabel: "reviews",
				},
				common: {
					buyNow: "Buy The Isle Hacks",
					readGuide: "Read guide",
					language: "Language",
					officialLanguageNote: "English is official; other locales are translated.",
					relatedPages: "Related pages",
				},
				footer: {
					explore: "Explore",
					help: "Help & legal",
					tagline: "Undetected the isle hacks for PC.\nESP, wallhack, radar & aimbot.",
				},
				images: {
					hero: "The Isle Hacks hero — ESP and aimbot overlay in The Isle",
					espWallhack: "Wallhack outlines showing players and wild dinosaurs through walls",
					aimbotCombat: "Soft aim assist overlay during a The Isle session",
					packFight: "The Isle Hacks combat overlay during a pack fight",
					dinoEsp: "Player ESP boxes and distance readouts in a The Isle session",
					headerArt: "Aimbot view and bone priority controls for The Isle",
					hacksPackage: "2D radar threat overlay for The Isle",
					ambushFight: "Aimbot assist during a The Isle hunt",
					battleRoyale: "The Isle Hacks in-session overview for Windows PC",
					survivalIsland: "ESP markers for carcasses and nests in The Isle",
				},
			},
			pages: {
				home: {
					title: "The Isle Hacks | Undetected Aimbot, ESP & Wallhack 2026",
					description: "The Isle hacks for PC with aimbot, ESP and wallhack features. Explore gameplay features, pricing, setup information and the latest updates.",
					h1: "The Isle Hacks — Undetected ESP, Wallhack & Aimbot",
					intro: "The Isle Hacks is the undetected The Isle Hacks package for Windows PC — built for The Isle on Windows PC. Isle ESP wallhack, 2D radar, and Isle Aimbot with Easy Anti-Cheat maintenance after every major patch.",
					imageAlt: "The Isle Hacks homepage hero — ESP and aimbot for The Isle",
					galleryTitle: "The Isle Hacks gallery — ESP, Aimbot and wallhack visuals",
					ctaPrimary: "Buy The Isle Hacks",
					ctaSecondary: "See all features",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Why players choose the isle hacks in 2026",
							paragraphs: [
								"The Isle rewards map awareness. The Isle Hacks combines ESP wallhack for enemy players and carcasses, radar-style threat cues, and configurable Aimbot so you can read fights before committing — on session, growth run, and official servers.",
								"Official seasons, patches, and anti-cheat updates come from <a href=\"https://store.steampowered.com/app/376210/The_Isle/\" target=\"_blank\" rel=\"noopener noreferrer\">The Isle</a> and <a href=\"https://www.easy.ac/\" target=\"_blank\" rel=\"noopener noreferrer\">Easy Anti-Cheat</a>. We rebuild ESP, radar, and Aimbot modules when those patches require maintenance — then post status on the <a href=\"/updates/\">Updates page</a>.",
								"Licenses ship digitally after payment confirmation. Monthly ($35) and lifetime ($150) plans include Easy Anti-Cheat maintenance rebuilds when anti-cheat or game patches require updates.",
								"Start with the <a href=\"/isle-hacks/\">The Isle Hacks pillar</a>, <a href=\"/isle-esp/\">ESP guide</a>, <a href=\"/isle-aimbot/\">Aimbot controls</a>, and <a href=\"/isle-hacks/\">undetected status</a> pages if you are comparing tools before checkout.",
							],
						},
						{
							h2: "ESP wallhack, radar hack, and Aimbot in one license",
							paragraphs: [
								"Instead of stacking separate tools, The Isle Hacks bundles player ESP wallhack, carcass markers, 2D radar overlays, and Aimbot profiles in one undetected package built for herbivore and carnivore survival sessions — covering both “the isle hacks” and “the isle cheats” search intent.",
								"Browse the <a href=\"/isle-esp/\">ESP</a>, <a href=\"/isle-aimbot/\">Aimbot</a>, <a href=\"/isle-esp/\">wallhack</a>, and <a href=\"/isle-radar-hack/\">radar</a> pages for control details — or jump to <a href=\"/pricing/\">Pricing</a> for monthly and lifetime options.",
								"Before patch days, check <a href=\"https://store.steampowered.com/app/376210/The_Isle/\" target=\"_blank\" rel=\"noopener noreferrer\">The Isle on Steam</a> for The Isle team service health, then confirm our maintenance notes so you are not spawning in on an outdated build.",
								"Ready to buy? Open <a href=\"/pricing/\">Pricing</a>, follow <a href=\"/setup/\">Setup</a> after delivery, and keep <a href=\"/faq/\">FAQ</a> / <a href=\"/support/\">Support</a> bookmarked for license questions.",
							],
						},
					],
					heroImage: "/images/isle-hacks-esp.webp",
				},
				"isle-esp": {
					title: "Isle ESP 2026 | Player Boxes & Wallhack",
					description: "Isle ESP for Windows PC — player boxes, carcass markers, and distance readouts. Part of our undetected the isle hacks for The Isle.",
					h1: "Isle ESP — Player Boxes & Wallhack",
					intro: "Isle ESP visibility tools for session and growth run. Read enemy packs, players, wild dinosaurs, carcasses, and distance before you commit — toggleable Isle ESP wallhack overlays bundled in our The Isle Hacks package.",
					imageAlt: "Isle ESP player boxes and distance readouts in a session",
					galleryTitle: "Isle ESP overlay visuals",
					ctaPrimary: "Buy The Isle Hacks",
					ctaSecondary: "isle wallhack guide",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "What Isle ESP solves in sessions",
							paragraphs: [
								"The Isle maps punish incomplete information. The Isle Hacks ESP wallhack helps you spot enemy packs early, spot players and wild dinosaurs before they push your angle, and mark fresh carcasses worth the detour.",
								"On session, growth run, and official servers, that visibility gap is often the difference between a clean third-player and a patched pack. ESP ships bundled with radar overlays and Aimbot in one license.",
								"The Isle’s live seasons and map updates are published by The Isle team (<a href=\"https://store.steampowered.com/app/376210/The_Isle/\" target=\"_blank\" rel=\"noopener noreferrer\">The Isle</a>). When POIs or spawn rules shift, ESP categories stay useful because they track players and carcasses — not a single static landmark.",
							],
						},
						{
							h2: "Player, apex, and carcass ESP wallhack categories",
							paragraphs: [
								"Toggle enemy player outlines, apex markers, nest cues, and carcass pins so only session-critical ESP wallhack overlays stay active during rotations.",
								"Distance readouts and snapline options help you control engagement range. Team and enemy colour coding supports herbivore and carnivore survival sessions lobbies alike.",
								"Compare category detail on the <a href=\"/isle-esp/\">wallhack page</a> and pair visibility with the <a href=\"/isle-radar-hack/\">radar hack</a> for flanks outside your FOV.",
							],
							list: [
								"Enemy player ESP outlines with distance",
								"Carcass and carcass markers for faster rotations",
								"Apex and nest awareness cues",
								"Toggleable categories to reduce overlay noise",
							],
						},
						{
							h2: "Undetected ESP with Easy Anti-Cheat maintenance",
							paragraphs: [
								"The Isle Hacks ESP wallhack is maintained for The Isle with rebuilds after Easy Anti-Cheat patches. Check the <a href=\"/updates/\">Updates page</a> before you spawn in — no cheat guarantees permanent undetected status.",
								"Read <a href=\"https://www.easy.ac/\" target=\"_blank\" rel=\"noopener noreferrer\">Easy Anti-Cheat</a> for how anti-cheat updates ship, then cross-check our <a href=\"/updates/\">Easy Anti-Cheat maintenance guide</a> after major patches.",
								"Checkout includes instant digital delivery for Windows 10 and 11. After purchase, follow the <a href=\"/setup/\">Setup guide</a> and tune overlays before your first session.",
							],
						},
						{
							h2: "ESP next steps — Aimbot, pricing, and support",
							paragraphs: [
								"ESP alone wins information wars; Aimbot covers the hunt. Review <a href=\"/isle-aimbot/\">Aimbot controls</a> if you want one license for visibility and assist.",
								"Compare monthly ($35) and lifetime ($150) on <a href=\"/pricing/\">Pricing</a>, then keep <a href=\"/support/\">Support</a> ready if activation needs a human reply.",
								"Still researching? The <a href=\"/isle-hacks/\">The Isle Hacks pillar</a> and <a href=\"/isle-hacks/\">2026 buyer guide</a> summarize the full stack.",
							],
						},
					],
					heroImage: "/images/isle-hacks-radar.webp",
				},
				"isle-aimbot": {
					title: "Isle Aimbot 2026 | Soft Aim for Windows PC",
					description: "Isle Aimbot with soft aim tuning for Windows PC. FOV, bone priority, and hotkeys bundled with ESP boxes in our The Isle Hacks package.",
					h1: "Isle Aimbot — Soft Aim for Windows PC",
					intro: "Configurable Aimbot tools for The Isle hunts. Smoothness, FOV, bone priority, and per-species profiles — bundled with ESP wallhack and radar in one undetected license.",
					imageAlt: "Isle Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Isle Aimbot combat previews",
					ctaPrimary: "Buy The Isle Hacks",
					ctaSecondary: "See ESP wallhack",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "Aimbot tuned for The Isle combat pace",
							paragraphs: [
								"The Isle mixes long-range mid-size hunts with close-quarters ambush rushes. The Isle Hacks Aimbot includes smoothness, FOV, and aim smoothing controls tuned for that pace — with hotkey toggles mid-match.",
								"Bone priority and target selection options cover closest player, lowest health, or highest-threat targets during pack fights and close-range pack fights.",
								"Weapon balance and season rules change via <a href=\"https://store.steampowered.com/app/376210/The_Isle/\" target=\"_blank\" rel=\"noopener noreferrer\">The Isle</a>. Revisit Aimbot FOV and smoothness after major combat patches so assist still matches the live kill speed windows.",
							],
						},
						{
							h2: "Per-species Aimbot profiles",
							paragraphs: [
								"Save separate Aimbot profiles for carnivores, ambush builds, and long-range species. Switch between long-range ambush hunts and high-traffic zone clears without reopening menus every session.",
								"Prefer softer tracking? Read the <a href=\"/isle-aimbot/\">soft aim guide</a>.",
								"Aimbot ships alongside <a href=\"/isle-esp/\">ESP wallhack</a> and <a href=\"/isle-radar-hack/\">2D radar</a> in the same The Isle Hacks license.",
							],
							list: [
								"Smoothness, FOV, and aim smoothing sliders",
								"Bone priority and threat-based targeting",
								"Hotkeys to toggle Aimbot mid-match",
								"Per-species profile slots for AR / SMG / long-range",
							],
						},
						{
							h2: "Easy Anti-Cheat maintenance for undetected Aimbot",
							paragraphs: [
								"The Isle Hacks rebuilds Aimbot behavior when Easy Anti-Cheat or major The Isle patches land. Maintenance notes appear on the <a href=\"/updates/\">Updates page</a> so you know when a new build is live.",
								"Cross-check service health on <a href=\"https://store.steampowered.com/app/376210/The_Isle/\" target=\"_blank\" rel=\"noopener noreferrer\">The Isle on Steam</a> and anti-cheat context on <a href=\"https://www.easy.ac/\" target=\"_blank\" rel=\"noopener noreferrer\">Easy Anti-Cheat</a>, then follow our <a href=\"/updates/\">Easy Anti-Cheat maintenance guide</a> before spawning in on patch day.",
								"Responsible settings matter — undetected status requires ongoing maintenance, not set-and-forget configs. Start with conservative smoothness, then tune.",
							],
						},
						{
							h2: "Buy Aimbot with ESP — pricing and setup",
							paragraphs: [
								"Every plan includes Aimbot plus ESP and radar. Compare options on <a href=\"/pricing/\">Pricing</a>, then activate with the <a href=\"/setup/\">Setup guide</a>.",
								"Questions about delivery or profiles? Use <a href=\"/faq/\">FAQ</a> or email <a href=\"/support/\">Support</a> with your order ID.",
								"Want the full control list first? Open <a href=\"/features/\">Features</a> before checkout.",
							],
						},
					],
					heroImage: "/images/isle-hacks-aimbot.webp",
				},
				features: {
					title: "The Isle Hacks Features | ESP, Soft Aim & RadarRadar",
					description: "Full the isle hacks feature list: ESP boxes, soft aim, radar, and toggles for Windows PC. Review controls before checkout.",
					h1: "The Isle Hacks Features — Full Control List",
					intro: "Every ESP wallhack, radar hack, and Aimbot control included in The Isle Hacks for The Isle on Windows PC — with Easy Anti-Cheat maintenance after major patches.",
					imageAlt: "The Isle Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "The Isle Hacks feature gallery",
					ctaPrimary: "Buy The Isle Hacks",
					ctaSecondary: "View pricing",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "ESP wallhack and visibility features",
							paragraphs: [
								"Enemy player ESP wallhack, apex and nest awareness cues, carcass and water markers, distance readouts, snaplines, and toggleable ESP categories for session-critical overlays only.",
								"Team and enemy colour coding supports herbivore and carnivore survival sessions. Deep-dive the <a href=\"/isle-esp/\">ESP page</a> and <a href=\"/isle-esp/\">wallhack guide</a> for category-level detail.",
								"Map and carcasses systems evolve with <a href=\"https://store.steampowered.com/app/376210/The_Isle/\" target=\"_blank\" rel=\"noopener noreferrer\">The Isle</a> patch cycle and map updates — toggleable ESP categories keep overlays useful when POIs rotate.",
							],
						},
						{
							h2: "Radar hack and Aimbot controls",
							paragraphs: [
								"2D radar overlay with directional threat cues, configurable range for rotations and late-session nests, plus Aimbot smoothness, FOV, bone priority, hotkeys, and per-species profiles.",
								"All tools share in-client toggles so you can adjust ESP, radar, and Aimbot during live The Isle sessions. See <a href=\"/isle-radar-hack/\">radar</a> and <a href=\"/isle-aimbot/\">Aimbot</a> for settings walkthroughs.",
								"Prefer a menu-first workflow? The <a href=\"/isle-hacks/\">mod menu page</a> explains mid-match toggles without alt-tabbing.",
							],
						},
						{
							h2: "Licensing, delivery, and Easy Anti-Cheat maintenance",
							paragraphs: [
								"Monthly ($35) and lifetime ($150) licenses with instant digital delivery. Easy Anti-Cheat maintenance rebuilds publish on the <a href=\"/updates/\">Updates page</a> after anti-cheat or game patches.",
								"Monitor <a href=\"https://store.steampowered.com/app/376210/The_Isle/\" target=\"_blank\" rel=\"noopener noreferrer\">The Isle on Steam</a> on patch days, then confirm rebuild notes before you spawn in. Setup and billing help lives on <a href=\"/support/\">Support</a> and support@theislehack.org.",
								"Next step: compare plans on <a href=\"/pricing/\">Pricing</a> or read <a href=\"/isle-hacks/\">how undetected maintenance works</a>.",
							],
						},
					],
					heroImage: "/images/isle-hacks-aimbot-view.webp",
				},
				pricing: {
					title: "The Isle Hacks Pricing | $35/mo or $150 Life",
					description: "the isle hacks pricing: $35/month or $150 lifetime for ESP, soft aim, and radar on Windows PC. Instant delivery — pick a plan.",
					h1: "The Isle Hacks Pricing — Monthly & Lifetime",
					intro: "Choose monthly or lifetime access to undetected The Isle Hacks — ESP wallhack, radar hack, and Aimbot for The Isle on Windows PC. Instant digital delivery after payment.",
					imageAlt: "The Isle Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "The Isle Hacks package visuals",
					ctaPrimary: "Buy The Isle Hacks",
					ctaSecondary: "Read setup guide",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Monthly and lifetime The Isle Hacks plans",
							paragraphs: [
								"Monthly license: $35 USD for 30 days of full ESP wallhack, radar hack, and Aimbot access with Easy Anti-Cheat maintenance included during your term.",
								"Lifetime license: $150 USD for long-term access to the same undetected The Isle Hacks package — ideal if you play The Isle regularly across seasons.",
								"Both plans unlock the same feature stack described on <a href=\"/features/\">Features</a>. Choose monthly to test, or lifetime if you already know you want the full toolkit.",
							],
						},
						{
							h2: "What every plan includes",
							paragraphs: [
								"Player ESP wallhack, carcass markers, 2D radar overlays, Aimbot controls, in-client toggles, and maintenance rebuilds after Easy Anti-Cheat or major The Isle patches.",
								"Season calendars and client updates come from <a href=\"https://store.steampowered.com/app/376210/The_Isle/\" target=\"_blank\" rel=\"noopener noreferrer\">The Isle</a>. Active licenses receive rebuild access when we publish maintenance on <a href=\"/updates/\">Updates</a>.",
								"Digital delivery starts after payment confirmation. Keep your order reference for <a href=\"/support/\">Support</a> requests and follow <a href=\"/setup/\">Setup</a> for first launch.",
							],
						},
						{
							h2: "Refund, billing, and buying checklist",
							paragraphs: [
								"Review the <a href=\"/refund-policy/\">Refund Policy</a> before purchase. For billing or delivery issues, contact Support with your order details.",
								"Prices are listed in USD. Availability is worldwide for Windows 10 and 11 PCs.",
								"Still comparing tools? Read <a href=\"/isle-hacks/\">the isle hacks</a>, <a href=\"/isle-hacks/\">undetected status</a>, and <a href=\"/faq/\">FAQ</a> before you checkout.",
							],
						},
					],
					heroImage: "/images/isle-hacks-session.webp",
				},
				setup: {
					title: "The Isle Hacks Setup | Windows PC Guide",
					description: "Set up the isle hacks on Windows PC — activate ESP boxes, soft aim profiles, and . Check Easy Anti-Cheat updates before your first spawn in.",
					h1: "The Isle Hacks Setup — Windows PC Guide",
					intro: "Install and configure The Isle Hacks for The Isle on Windows 10 or 11. Activate your license, load ESP wallhack and Aimbot profiles, and verify Easy Anti-Cheat maintenance status before spawning in.",
					imageAlt: "The Isle Hacks setup guide screenshot for Windows PC",
					galleryTitle: "The Isle Hacks setup visuals",
					ctaPrimary: "Buy The Isle Hacks",
					ctaSecondary: "Contact support",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Before you install The Isle Hacks",
							paragraphs: [
								"Confirm your order email and license details. Check the <a href=\"/updates/\">Updates page</a> for the latest Easy Anti-Cheat maintenance build before launching The Isle.",
								"Also glance at <a href=\"https://store.steampowered.com/app/376210/The_Isle/\" target=\"_blank\" rel=\"noopener noreferrer\">The Isle on Steam</a> if The Isle team services look unstable on patch day — a platform outage is not a license fault.",
								"The Isle Hacks requires Windows 10 or 11. Close conflicting overlay software that may interfere with ESP wallhack or Aimbot toggles.",
							],
						},
						{
							h2: "Activate ESP wallhack and Aimbot profiles",
							paragraphs: [
								"Follow the delivery instructions in your license email. Load default ESP wallhack categories for players, wild dinosaurs, and carcasses — then tune radar range and Aimbot smoothness to your playstyle.",
								"Use in-client hotkeys to toggle ESP, radar, and Aimbot mid-match. Details for Easy Anti-Cheat module live on <a href=\"/isle-esp/\">ESP</a>, <a href=\"/isle-aimbot/\">Aimbot</a>, and <a href=\"/isle-hacks/\">mod menu</a>.",
								"Prefer a soft tracking feel? Start with the <a href=\"/isle-aimbot/\">soft aim</a> recommendations before raising aggressiveness.",
							],
						},
						{
							h2: "After The Isle or Easy Anti-Cheat patches",
							paragraphs: [
								"When The Isle team ships a major The Isle update or Easy Anti-Cheat patch, revisit Updates before spawning in. Download maintenance rebuilds when posted.",
								"Official anti-cheat background: <a href=\"https://www.easy.ac/\" target=\"_blank\" rel=\"noopener noreferrer\">Easy Anti-Cheat</a>. Our practical workflow is documented on the <a href=\"/updates/\">Easy Anti-Cheat bypass page</a> and <a href=\"/isle-hacks/\">undetected guide</a>.",
								"Contact <a href=\"/support/\">Support</a> with your order ID if activation fails after a patch — include Windows version and error details for faster replies.",
							],
						},
					],
					heroImage: "/images/isle-hacks-radar.webp",
				},
				updates: {
					title: "The Isle Hacks Updates | Easy Anti-Cheat Maintenance Log",
					description: "the isle hacks update log: Easy Anti-Cheat rebuilds for ESP boxes, soft aim, and radar on Windows PC. Check status before spawning in after patches.",
					h1: "The Isle Hacks Updates — Maintenance Log",
					intro: "Track Easy Anti-Cheat maintenance and The Isle patch rebuilds for the undetected ESP wallhack, radar hack, and Aimbot package. Check here before spawning in after major updates.",
					imageAlt: "The Isle Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle: "The Isle patch and maintenance visuals",
					ctaPrimary: "Buy The Isle Hacks",
					ctaSecondary: "Undetected status guide",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "Why the Updates page matters",
							paragraphs: [
								"The Isle and Easy Anti-Cheat receive frequent patches. The Isle Hacks publishes maintenance notes when ESP wallhack, radar, or Aimbot behavior needs a rebuild.",
								"Use <a href=\"https://store.steampowered.com/app/376210/The_Isle/\" target=\"_blank\" rel=\"noopener noreferrer\">The Isle on Steam</a> for The Isle team platform health and this page for The Isle Hacks build status — both matter on big update days.",
								"Checking this log before you spawn in reduces surprises after game days or seasonal launches on session and growth run.",
							],
						},
						{
							h2: "What maintenance entries cover",
							paragraphs: [
								"Entries note Easy Anti-Cheat compatibility status, rebuilt ESP wallhack overlays, radar range fixes, Aimbot tuning after species balance changes, and digital delivery of new builds to active licenses.",
								"Lifetime and monthly subscribers receive rebuild access during active license terms. See <a href=\"/pricing/\">Pricing</a> if you need to renew.",
								"For context on why rebuilds happen, read the <a href=\"/updates/\">Easy Anti-Cheat bypass guide</a> and <a href=\"/isle-hacks/\">undetected the isle hacks</a> explainer.",
							],
						},
						{
							h2: "Staying undetected after patches",
							paragraphs: [
								"No cheat guarantees permanent undetected status. Combine maintenance updates with responsible in-game settings and patch awareness.",
								"Follow season notes from <a href=\"https://store.steampowered.com/app/376210/The_Isle/\" target=\"_blank\" rel=\"noopener noreferrer\">The Isle</a>, then confirm our rebuild is live before you spawn in.",
								"For urgent status questions after a Easy Anti-Cheat update, contact <a href=\"/support/\">Support</a> with your license tier and last played build version.",
							],
						},
					],
					heroImage: "/images/isle-hacks-esp.webp",
				},
				faq: {
					title: "The Isle Hacks FAQ | ESP, Soft Aim & RadarRadar Answers",
					description: "the isle hacks FAQ: ESP boxes, soft aim, Easy Anti-Cheat maintenance, and pricing for PC. Clear answers before you buy.",
					h1: "The Isle Hacks FAQ — Common Questions",
					intro: "Answers about undetected The Isle Hacks — ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat maintenance, checkout, and The Isle compatibility on Windows PC.",
					imageAlt: "The Isle Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "The Isle Hacks FAQ visuals",
					ctaPrimary: "Buy The Isle Hacks",
					ctaSecondary: "Contact support",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "What is The Isle Hacks?",
							paragraphs: [
								"The Isle Hacks is an undetected cheat package for The Isle on Windows PC. It includes ESP wallhack, 2D radar-style awareness, and Aimbot controls with Easy Anti-Cheat maintenance updates.",
								"Packages cover session and growth run. Explore <a href=\"/features/\">Features</a> for the full control list and <a href=\"/isle-esp/\">ESP</a> / <a href=\"/isle-aimbot/\">Aimbot</a> for module detail.",
								"The Isle itself is published by The Isle team (<a href=\"https://store.steampowered.com/app/376210/The_Isle/\" target=\"_blank\" rel=\"noopener noreferrer\">The Isle</a>). Cheats are third-player tools and may violate The Isle team' rules — use is at your own risk.",
							],
						},
						{
							h2: "Are The Isle Hacks undetected in 2026?",
							paragraphs: [
								"The Isle Hacks is maintained with rebuilds after Easy Anti-Cheat and game patches. Check the <a href=\"/updates/\">Updates page</a> for current status — no cheat can guarantee permanent undetected operation.",
								"Read <a href=\"/isle-hacks/\">undetected the isle hacks</a> and the <a href=\"/updates/\">Easy Anti-Cheat guide</a> for the maintenance workflow.",
								"Responsible settings and reading maintenance notes before spawning in are essential.",
							],
						},
						{
							h2: "Delivery, pricing, and support",
							paragraphs: [
								"Licenses deliver digitally after payment confirmation. Monthly is $35; lifetime is $150 USD — see <a href=\"/pricing/\">Pricing</a>.",
								"Contact support@theislehack.org or the <a href=\"/support/\">Support page</a> with order details for setup or billing help. First launch steps are on <a href=\"/setup/\">Setup</a>.",
								"Refund eligibility is covered in the <a href=\"/refund-policy/\">Refund Policy</a>.",
							],
						},
					],
					heroImage: "/images/isle-hacks-aimbot-view.webp",
				},
				support: {
					title: "The Isle Hacks Support | Help & Contact",
					description: "Contact the isle hacks support for licenses, ESP setup, soft aim profiles, and on Windows PC. Include your order ID for faster help.",
					h1: "The Isle Hacks Support — Contact Us",
					intro: "Get help with The Isle Hacks licenses, checkout, ESP wallhack setup, Aimbot profiles, and Easy Anti-Cheat maintenance for The Isle on Windows PC.",
					imageAlt: "The Isle Hacks support page for license and setup help",
					galleryTitle: "The Isle Hacks support resources",
					ctaPrimary: "Email support",
					ctaSecondary: "Read setup guide",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "When to contact support",
							paragraphs: [
								"Reach out for order issues, license activation failures, ESP wallhack or Aimbot setup questions, and post-patch problems after Easy Anti-Cheat maintenance rebuilds.",
								"Include your order ID, license tier (monthly or lifetime), Windows version, and a clear description of the issue.",
								"Many answers already live in <a href=\"/faq/\">FAQ</a>, <a href=\"/setup/\">Setup</a>, and <a href=\"/updates/\">Updates</a> — check those first for faster resolution.",
							],
						},
						{
							h2: "Response times and scope",
							paragraphs: [
								"Support requests are reviewed daily. The Isle Hacks support covers delivery, billing, setup, and maintenance — not in-game coaching or account recovery for The Isle team bans.",
								"Account and game policy questions belong with The Isle team. We can help with license delivery and product configuration only.",
								"Check the Updates page and FAQ before opening a ticket — many post-patch questions are answered there.",
							],
						},
						{
							h2: "Self-service resources",
							paragraphs: [
								"Setup guide, Features list, Updates log, Refund Policy, and Terms of Use are linked from the footer. Easy Anti-Cheat bypass notes live on the dedicated <a href=\"/updates/\">Easy Anti-Cheat page</a>.",
								"Email: support@theislehack.org",
								"Ready to purchase or renew? Open <a href=\"/pricing/\">Pricing</a>. Need feature detail first? See <a href=\"/features/\">Features</a>.",
							],
						},
					],
					heroImage: "/images/isle-hacks-session.webp",
				},
				undetected: {
					title: "Undetected The Isle Hacks 2026 | Easy Anti-Cheat Maintenance",
					description: "Undetected the isle hacks with Easy Anti-Cheat maintenance for ESP boxes, soft aim, and radar on Windows PC. Check status before you spawn in.",
					h1: "Undetected The Isle Hacks — Easy Anti-Cheat Maintenance",
					intro: "How The Isle Hacks stays maintained for The Isle after Easy Anti-Cheat patches — ESP wallhack, radar hack, and Aimbot rebuilds for Windows PC.",
					imageAlt: "The Isle Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected The Isle Hacks visuals",
					ctaPrimary: "Buy The Isle Hacks",
					ctaSecondary: "Easy Anti-Cheat bypass guide",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "What undetected means for The Isle Hacks",
							paragraphs: [
								"Undetected The Isle Hacks means the package is actively maintained against Easy Anti-Cheat and major The Isle patches — not that detection is impossible forever.",
								"Rebuilds target ESP wallhack overlays, radar behavior, and Aimbot signatures after Easy Anti-Cheat security updates.",
								"Anti-cheat technology is documented by <a href=\"https://www.easy.ac/\" target=\"_blank\" rel=\"noopener noreferrer\">Easy Anti-Cheat</a>; The Isle client updates ship through <a href=\"https://store.steampowered.com/app/376210/The_Isle/\" target=\"_blank\" rel=\"noopener noreferrer\">The Isle</a>. Undetected status is an ongoing process tied to those releases.",
							],
						},
						{
							h2: "Easy Anti-Cheat maintenance workflow",
							paragraphs: [
								"When Easy Anti-Cheat or The Isle updates ship, the team assesses ESP, radar, and Aimbot modules, publishes status on the <a href=\"/updates/\">Updates page</a>, and delivers rebuilt builds to active licenses.",
								"On patch mornings, also check <a href=\"https://store.steampowered.com/app/376210/The_Isle/\" target=\"_blank\" rel=\"noopener noreferrer\">The Isle on Steam</a> for launcher outages that can look like product failures.",
								"Deep technical workflow: <a href=\"/updates/\">Easy Anti-Cheat bypass The Isle guide</a>. Feature stack: <a href=\"/features/\">Features</a>.",
							],
						},
						{
							h2: "Responsible use and next steps",
							paragraphs: [
								"Combine maintenance with conservative in-game settings. Read the <a href=\"/faq/\">FAQ</a> and Updates log regularly — undetected status is not a one-time promise.",
								"Lifetime and monthly plans include rebuild access during active terms — see <a href=\"/pricing/\">Pricing</a>.",
								"New buyers should also read <a href=\"/isle-hacks/\">the isle hacks 2026</a> and complete <a href=\"/setup/\">Setup</a> after delivery.",
							],
						},
					],
					heroImage: "/images/isle-hacks-wallhack.webp",
				},
				wallhack: {
					title: "The Isle Wallhack 2026 | ESP Boxes & Visibility",
					description: "isle wallhack ESP with player boxes and carcass markers for Windows PC. Undetected the isle hacks — learn overlays and buy.",
					h1: "The Isle Wallhack — ESP Boxes & Visibility",
					intro: "Isle wallhack ESP for The Isle — see players, carcasses, apex dinosaurs, and water sources through toggleable wallhack overlays built for herbivore and carnivore survival sessions.",
					imageAlt: "isle wallhack visibility through walls in a session",
					galleryTitle: "isle wallhack ESP gallery",
					ctaPrimary: "Buy The Isle Hacks",
					ctaSecondary: "Isle ESP page",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "Wallhack ESP vs raw aim tools",
							paragraphs: [
								"An Isle wallhack focuses on information — player outlines, carcass pins, apex threat cues — rather than automatic aiming. The Isle Hacks bundles wallhack ESP with radar and optional Aimbot in one license.",
								"Toggle categories so only the wallhack overlays you need stay active during rotations and nest zones.",
								"For the broader ESP keyword page see <a href=\"/isle-esp/\">Isle ESP</a>; for combat assist see <a href=\"/isle-aimbot/\">Aimbot</a>.",
							],
						},
						{
							h2: "Map coverage for wallhack ESP",
							paragraphs: [
								"Wallhack overlays support session, growth run, and official servers with distance readouts and snaplines for engagement control.",
								"Season maps and POI changes are announced via <a href=\"https://store.steampowered.com/app/376210/The_Isle/\" target=\"_blank\" rel=\"noopener noreferrer\">The Isle</a>. Wallhack remains useful because it tracks entities, not fixed landmarks alone.",
								"Pair wallhack awareness with <a href=\"/isle-radar-hack/\">radar hack</a> cues for flanks during forest and river bank ambushes.",
							],
						},
						{
							h2: "Undetected wallhack maintenance",
							paragraphs: [
								"ESP wallhack modules rebuild after Easy Anti-Cheat patches. Follow the <a href=\"/updates/\">Updates page</a> and complete checkout for instant license delivery on Windows PC.",
								"Learn the full maintenance story on <a href=\"/isle-hacks/\">undetected the isle hacks</a> and <a href=\"/updates/\">Easy Anti-Cheat bypass</a>.",
								"Ready to buy? Compare <a href=\"/pricing/\">Pricing</a> or continue to the <a href=\"/isle-esp/\">ESP hack</a> landing for alternate search wording.",
							],
						},
					],
					heroImage: "/images/isle-hacks-wallhack.webp",
				},
				radar: {
					title: "The Isle Radar Hack 2026 | 2D Threat Overlay",
					description: "isle radar hack for flank awareness on Windows PC. Bundled with ESP boxes, soft aim, and radar in our The Isle Hacks package.",
					h1: "The Isle Radar Hack — 2D Threat Awareness",
					intro: "2D radar-style overlay for The Isle — directional threat cues for nearby players outside your line of sight, bundled with ESP wallhack and Aimbot.",
					imageAlt: "The Isle 2D radar overlay showing nearby threats",
					galleryTitle: "isle radar hack visuals",
					ctaPrimary: "Buy The Isle Hacks",
					ctaSecondary: "See ESP wallhack",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "Why radar hack matters in The Isle",
							paragraphs: [
								"survival hunts happen across open terrain — hills, forests, and river banks. A 2D radar overlay shows nearby player threats outside direct line of sight so you can reposition before a third player.",
								"The Isle Hacks radar complements <a href=\"/isle-esp/\">ESP wallhack</a> markers during pack pushes and nest zone fights.",
								"Mode rules and seasonal changes come from <a href=\"https://store.steampowered.com/app/376210/The_Isle/\" target=\"_blank\" rel=\"noopener noreferrer\">The Isle</a>. Radar range remains configurable when map scale or mobility meta shifts.",
							],
						},
						{
							h2: "Configurable radar range",
							paragraphs: [
								"Adjust radar range for early rotations versus tight nest zones. Directional cues highlight flanks during building clears and flank pushes across session and growth run.",
								"Toggle radar alongside ESP and Aimbot with in-client hotkeys during live matches — see the <a href=\"/isle-hacks/\">mod menu</a> page.",
								"Combat follow-up lives on <a href=\"/isle-aimbot/\">Aimbot</a> when you convert radar info into a fight.",
							],
						},
						{
							h2: "Maintenance and licensing",
							paragraphs: [
								"Radar hack modules receive Easy Anti-Cheat maintenance rebuilds with the full The Isle Hacks package. Monthly and lifetime licenses include digital delivery — see <a href=\"/pricing/\">Pricing</a>.",
								"Check <a href=\"/updates/\">Updates</a> after major The Isle patches before relying on previous radar configs.",
								"New to the stack? Start at <a href=\"/features/\">Features</a> or <a href=\"/isle-hacks/\">undetected status</a>.",
							],
						},
					],
					heroImage: "/images/isle-hacks-radar.webp",
				},
				eac: {
					title: "Easy Anti-Cheat Bypass The Isle | The Isle Hacks Maintenance",
					description: "How the isle hacks rebuild after Easy Anti-Cheat patches — ESP boxes, soft aim, and radar maintenance for Windows PC. Read before spawning in.",
					h1: "Easy Anti-Cheat Bypass — The Isle Hacks Maintenance",
					intro: "Understand Easy Anti-Cheat maintenance for The Isle Hacks — how ESP wallhack, radar hack, and Aimbot rebuild after The Isle security updates.",
					imageAlt: "The Isle Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Easy Anti-Cheat maintenance visuals",
					ctaPrimary: "Buy The Isle Hacks",
					ctaSecondary: "Check updates",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Easy Anti-Cheat overview",
							paragraphs: [
								"Easy Anti-Cheat is The Isle team' anti-cheat for The Isle on PC (see <a href=\"https://www.easy.ac/\" target=\"_blank\" rel=\"noopener noreferrer\">Easy Anti-Cheat</a>). Security updates can affect ESP wallhack, radar, and Aimbot behavior — requiring maintenance rebuilds for undetected packages.",
								"The Isle Hacks monitors Easy Anti-Cheat patch notes and The Isle seasonal updates from <a href=\"https://store.steampowered.com/app/376210/The_Isle/\" target=\"_blank\" rel=\"noopener noreferrer\">The Isle</a> to schedule module reviews.",
								"“Easy Anti-Cheat bypass” in our wording means timely maintenance — not a permanent free pass around anti-cheat.",
							],
						},
						{
							h2: "What happens after a Easy Anti-Cheat patch",
							paragraphs: [
								"The team tests ESP overlays, radar signatures, and Aimbot profiles against the new build, publishes status on <a href=\"/updates/\">Updates</a>, and ships rebuilt packages to active licenses.",
								"Confirm The Isle team service health on <a href=\"https://store.steampowered.com/app/376210/The_Isle/\" target=\"_blank\" rel=\"noopener noreferrer\">The Isle on Steam</a> if the launcher or matchmaking fails during the same window.",
								"Avoid spawning in on old builds after major patch days until maintenance notes confirm a new release. Related reading: <a href=\"/isle-hacks/\">undetected the isle hacks</a>.",
							],
						},
						{
							h2: "No permanent bypass guarantee",
							paragraphs: [
								"Easy Anti-Cheat bypass in practice means timely maintenance. Read the undetected guide, <a href=\"/faq/\">FAQ</a>, and Updates log before every session.",
								"Contact <a href=\"/support/\">Support</a> if activation fails immediately after a posted rebuild.",
								"Buying for the first time? Compare <a href=\"/pricing/\">Pricing</a> and finish <a href=\"/setup/\">Setup</a> only after Updates shows a live build.",
							],
						},
					],
					heroImage: "/images/isle-hacks-aimbot.webp",
				},
				"cheats-2026": {
					title: "The Isle Hacks 2026 | ESP Soft Aim & Radar",
					description: "Best the isle hacks 2026: ESP boxes, soft aim, and radar for Windows PC. Undetected the isle hacks with Easy Anti-Cheat maintenance — compare and buy.",
					h1: "The Isle Hacks 2026 — ESP, Soft Aim & RadarRadar",
					intro: "The 2026 The Isle Hacks package for The Isle — undetected ESP wallhack, radar hack, and Aimbot with Easy Anti-Cheat maintenance, instant delivery, and Windows PC support.",
					imageAlt: "The Isle Hacks product overview for The Isle",
					galleryTitle: "The Isle Hacks 2026 gallery",
					ctaPrimary: "Buy The Isle Hacks",
					ctaSecondary: "Compare features",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Why the isle hacks buyers choose The Isle Hacks in 2026",
							paragraphs: [
								"2026 updates bring new maps, dinosaur balance changes, and Easy Anti-Cheat patches. The Isle Hacks bundles ESP wallhack, radar hack, and Aimbot with active maintenance — not a stale prior-year build.",
								"Track official season messaging on <a href=\"https://store.steampowered.com/app/376210/The_Isle/\" target=\"_blank\" rel=\"noopener noreferrer\">The Isle</a>, then use our <a href=\"/updates/\">Updates log</a> for product rebuild timing.",
								"Monthly ($35) and lifetime ($150) plans cover session and growth run loops — see <a href=\"/pricing/\">Pricing</a>.",
							],
						},
						{
							h2: "Full feature stack for 2026 buyers",
							paragraphs: [
								"Player ESP wallhack, carcass markers, 2D radar overlays, Aimbot profiles, in-client toggles, and post-patch rebuilds — one license instead of stacking separate tools.",
								"Deep links: <a href=\"/isle-hacks/\">The Isle Hacks pillar</a>, <a href=\"/isle-esp/\">ESP</a>, <a href=\"/isle-aimbot/\">Aimbot</a>, <a href=\"/isle-esp/\">wallhack</a>, <a href=\"/isle-radar-hack/\">radar</a>, <a href=\"/isle-hacks/\">undetected</a>.",
								"Instant digital delivery after checkout confirmation worldwide.",
							],
						},
						{
							h2: "Before you buy in 2026",
							paragraphs: [
								"Read the <a href=\"/isle-hacks/\">the isle hacks</a> pillar, Features, Pricing, Setup, and Updates pages. Check undetected status notes after every major patch — responsible use and maintenance awareness matter.",
								"Also compare the <a href=\"/isle-hacks/\">the isle hacks</a> checklist, <a href=\"/blog/isle-hacks-2026-whats-new/\">2026 blog guide</a>, and <a href=\"/faq/\">FAQ</a>.",
								"Support is available at support@theislehack.org via the <a href=\"/support/\">Support page</a>.",
							],
						},
					],
					heroImage: "/images/isle-hacks-esp.webp",
				},
				hacks: {
					title: "The Isle Hacks 2026 | Undetected ESP Aimbot Guide",
					description: "the isle hacks for Windows PC: undetected ESP wallhack, radar hack, and Aimbot with Easy Anti-Cheat maintenance. Compare the isle hacks options and buy the",
					h1: "The Isle Hacks — Undetected ESP, Aimbot & Wallhack",
					intro: "the isle hacks for session and growth run combine ESP wallhack visibility, 2D radar-style threat cues, and Aimbot controls in one undetected Windows PC license — maintained after Easy Anti-Cheat patches. This is the pillar guide for the isle hacks in 2026.",
					imageAlt: "The Isle Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "the isle hacks gallery — ESP, Aimbot, wallhack",
					ctaPrimary: "Buy The Isle Hacks",
					ctaSecondary: "See undetected guide",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "What the isle hacks include in 2026",
							paragraphs: [
								"Players searching for the isle hacks usually want visibility and combat tools without stacking separate downloads. The Isle Hacks bundles player ESP wallhack, carcass markers, 2D radar overlays, and configurable Aimbot in one maintained package — the same toolkit often called the isle hacks.",
								"Coverage spans session and growth run with in-client toggles for live matches. Monthly ($35) and lifetime ($150) licenses unlock the full stack.",
								"Official game updates come from <a href=\"https://store.steampowered.com/app/376210/The_Isle/\" target=\"_blank\" rel=\"noopener noreferrer\">The Isle</a>; our hacks package tracks those releases via the <a href=\"/updates/\">Updates page</a>. Cross-check platform health on <a href=\"https://store.steampowered.com/app/376210/The_Isle/\" target=\"_blank\" rel=\"noopener noreferrer\">The Isle on Steam</a> before patch-day spawn ins.",
							],
						},
						{
							h2: "How this The Isle Hacks pillar fits nearby pages",
							paragraphs: [
								"Use this pillar for the core product overview. For year-specific buying notes, see the <a href=\"/isle-hacks/\">the isle hacks 2026</a> and <a href=\"/isle-hacks/\">the isle hacks</a> pages cover buyer comparisons in cheats wording.",
								"Deep-dive modules: <a href=\"/isle-esp/\">Isle ESP</a>, <a href=\"/isle-aimbot/\">Isle Aimbot</a>, <a href=\"/isle-esp/\">wallhack</a>, <a href=\"/isle-radar-hack/\">radar hack</a>, and <a href=\"/isle-aimbot/\">soft aim</a>.",
								"Blog guides expand Easy Anti-Cheat keyword: <a href=\"/blog/isle-hacks-complete-guide-2026/\">hacks complete guide</a>, <a href=\"/blog/isle-hacks-buyers-guide/\">cheats buyers guide</a>, and <a href=\"/blog/undetected-isle-hacks-eac/\">undetected Easy Anti-Cheat notes</a>.",
							],
						},
						{
							h2: "the isle hacks vs single-feature tools",
							paragraphs: [
								"Standalone hacks often cover only wallhack or only aim assist. The Isle Hacks maps the full survival loop: read enemy packs, track apex dinosaurs and carcasses, spot flanks on radar, and tune Aimbot per species.",
								"Compare the <a href=\"/isle-esp/\">ESP</a>, <a href=\"/isle-aimbot/\">Aimbot</a>, and <a href=\"/features/\">Features</a> pages — or review <a href=\"/pricing/\">Pricing</a> for monthly and lifetime licenses.",
								"Related landings: <a href=\"/setup/\">cheat download</a>, <a href=\"/isle-hacks/\">mod menu</a>, <a href=\"/isle-aimbot/\">aimbot</a>, <a href=\"/isle-esp/\">ESP</a>.",
							],
						},
						{
							h2: "Undetected the isle hacks with Easy Anti-Cheat maintenance",
							paragraphs: [
								"Undetected the isle hacks require rebuilds after Easy Anti-Cheat and major The Isle patches. Check Updates before spawning in — maintenance notes confirm when a new build is live. No package can promise permanent undetected status.",
								"See <a href=\"https://www.easy.ac/\" target=\"_blank\" rel=\"noopener noreferrer\">Easy Anti-Cheat</a> for anti-cheat background and our <a href=\"/updates/\">Easy Anti-Cheat bypass guide</a> for the practical workflow. Pair with <a href=\"/isle-hacks/\">undetected the isle hacks</a> for status language buyers expect.",
								"Digital delivery runs after checkout for Windows 10 and 11 PCs worldwide. After purchase, follow <a href=\"/setup/\">Setup</a> and keep <a href=\"/support/\">Support</a> ready with your order ID.",
							],
						},
					],
					heroImage: "/images/isle-hacks-session.webp",
				},
				"cheat-download": {
					title: "The Isle Hack Download 2026 | Instant Access",
					description: "the isle hack download with instant license delivery — ESP boxes, soft aim, and radar for Windows PC. Buy, activate, and play.",
					h1: "The Isle Hack Download — Instant License Delivery",
					intro: "How the isle hack download works for The Isle — digital license delivery after payment confirmation, with ESP wallhack, radar hack, and Aimbot access on Windows PC.",
					imageAlt: "The Isle Hacks download and install delivery flow",
					galleryTitle: "the isle hack download visuals",
					ctaPrimary: "Buy The Isle Hacks",
					ctaSecondary: "Setup guide",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "How the isle hack download delivery works",
							paragraphs: [
								"After checkout confirms payment, The Isle Hacks license details arrive digitally by email. No physical shipment — access begins once activation instructions are delivered.",
								"Keep your order confirmation and license email ready for the <a href=\"/setup/\">Setup guide</a> and Support requests.",
								"If The Isle team services are down, check <a href=\"https://store.steampowered.com/app/376210/The_Isle/\" target=\"_blank\" rel=\"noopener noreferrer\">The Isle on Steam</a> before assuming a download failure.",
							],
						},
						{
							h2: "What your download unlocks",
							paragraphs: [
								"Every the isle hack download includes player ESP wallhack, carcasses and carcass markers, 2D radar overlays, Aimbot profiles, and in-client toggles for herbivore and carnivore survival sessions.",
								"Monthly ($35) and lifetime ($150) plans share the same feature stack — compare options on the <a href=\"/pricing/\">Pricing page</a>.",
								"Feature detail: <a href=\"/features/\">Features</a>. Module pages: <a href=\"/isle-esp/\">ESP</a>, <a href=\"/isle-aimbot/\">Aimbot</a>.",
							],
						},
						{
							h2: "After purchase — setup and updates",
							paragraphs: [
								"Follow Setup to activate ESP wallhack and Aimbot on Windows 10 or 11. When The Isle or Easy Anti-Cheat patches ship, check the <a href=\"/updates/\">Updates page</a> for maintenance rebuilds.",
								"Contact <a href=\"/support/\">Support</a> with your order ID if delivery or activation fails within 24 hours of purchase.",
								"Also read <a href=\"/isle-hacks/\">undetected status</a> so you know what “download ready” means after a patch.",
							],
						},
					],
					heroImage: "/images/isle-hacks-session.webp",
				},
				"mod-menu": {
					title: "The Isle Mod Menu 2026 | ESP & Soft Aim Toggles",
					description: "The Isle mod menu for in-match toggles — ESP boxes, soft aim, radar, and on Windows PC. Undetected The Isle Hacks package.",
					h1: "The Isle Mod Menu — In-Client Control Panel",
					intro: "The Isle mod menu controls for The Isle — toggle ESP wallhack categories, radar range, and Aimbot profiles mid-match without leaving your The Isle session on Windows PC.",
					imageAlt: "The Isle Hacks in-game menu controls",
					galleryTitle: "The Isle mod menu gallery",
					ctaPrimary: "Buy The Isle Hacks",
					ctaSecondary: "Full feature list",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "What a The Isle mod menu controls",
							paragraphs: [
								"A The Isle mod menu is the in-client panel where you enable ESP wallhack overlays, adjust radar range, and switch Aimbot profiles during live matches. The Isle Hacks keeps those toggles accessible with hotkeys.",
								"Toggle player outlines, carcass markers, vehicle cues, and per-species Aimbot settings without alt-tabbing out of The Isle.",
								"Control deep-dives: <a href=\"/isle-esp/\">ESP</a>, <a href=\"/isle-aimbot/\">Aimbot</a>, <a href=\"/isle-radar-hack/\">radar</a>.",
							],
						},
						{
							h2: "Mod menu categories for herbivore and carnivore survival sessions",
							paragraphs: [
								"Separate ESP wallhack categories for players, carcasses, water sources, and apex dinosaurs let you reduce overlay noise during rotations and nest zones.",
								"Radar hack range and Aimbot smoothness adjust from the same mod menu — useful when ${EXT.isle} seasons change fight distances and mobility.",
								"Soft tracking players should start with <a href=\"/isle-aimbot/\">soft aim</a> profiles before aggressive FOV.",
							],
						},
						{
							h2: "Maintained mod menu after Easy Anti-Cheat patches",
							paragraphs: [
								"The Isle mod menu behavior is rebuilt when Easy Anti-Cheat or major The Isle updates land. Follow the <a href=\"/updates/\">Updates page</a> and <a href=\"/updates/\">Easy Anti-Cheat bypass guide</a> before spawning in on patch days.",
								"Checkout with instant digital delivery for monthly and lifetime licenses — see <a href=\"/pricing/\">Pricing</a>.",
								"Need install steps? Open <a href=\"/setup/\">Setup</a> after your license email arrives.",
							],
						},
					],
					heroImage: "/images/isle-hacks-radar.webp",
				},
				"soft-aim": {
					title: "The Isle Soft Aim 2026 | Smooth Aimbot Settings",
					description: "The Isle soft aim settings for natural tracking on Windows PC. Smoothness, FOV, and bone priority — included in our the isle hacks with ESP boxes.",
					h1: "The Isle Soft Aim — Smooth Aimbot Controls",
					intro: "The Isle soft aim settings for The Isle — configurable Aimbot smoothness, FOV, bone priority, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.",
					imageAlt: "The Isle soft aim FOV and smoothness settings",
					galleryTitle: "The Isle soft aim gallery",
					ctaPrimary: "Buy The Isle Hacks",
					ctaSecondary: "Aimbot controls",
					ctaSecondaryHref: "/isle-aimbot/",
					sections: [
						{
							h2: "What The Isle soft aim means",
							paragraphs: [
								"The Isle soft aim refers to Aimbot behavior tuned for smooth, natural-looking tracking rather than instant snap. The Isle Hacks exposes smoothness, FOV, and aim smoothing sliders so you control how assist feels in BR hunts.",
								"Bone priority and target selection cover closest player, lowest health, or highest-threat targets during pack fights.",
								"Full Aimbot documentation: <a href=\"/isle-aimbot/\">Isle Aimbot</a>. Alternate wording: <a href=\"/isle-aimbot/\">aimbot hack</a>.",
							],
						},
						{
							h2: "Soft aim profiles per species",
							paragraphs: [
								"Save separate soft aim profiles for carnivores, ambush builds, and long-range species. Switch between long-range ambush hunts and close pack fights with hotkeys mid-session.",
								"Weapon kill speeds shift with <a href=\"https://store.steampowered.com/app/376210/The_Isle/\" target=\"_blank\" rel=\"noopener noreferrer\">The Isle</a> balance patches — retune smoothness after major combat updates.",
								"Soft aim ships alongside <a href=\"/isle-esp/\">ESP wallhack</a> and <a href=\"/isle-radar-hack/\">2D radar</a> overlays.",
							],
						},
						{
							h2: "Undetected soft aim with Easy Anti-Cheat maintenance",
							paragraphs: [
								"Aimbot modules rebuild after Easy Anti-Cheat patches. Check the <a href=\"/updates/\">Updates page</a> before spawning in — responsible settings and maintenance awareness matter for undetected play.",
								"Monthly and lifetime licenses checkout with digital delivery on Windows PC — <a href=\"/pricing/\">Pricing</a>.",
								"Activation help: <a href=\"/setup/\">Setup</a> · status questions: <a href=\"/support/\">Support</a>.",
							],
						},
					],
					heroImage: "/images/isle-hacks-aimbot-view.webp",
				},
				"best-cheats": {
					title: "Best The Isle Hacks 2026 | Buyer Guide",
					description: "Best the isle hacks for 2026: ESP boxes, soft aim, and Easy Anti-Cheat maintenance on Windows PC. Use this checklist before checkout.",
					h1: "Best The Isle Hacks — 2026 Buyer Guide",
					intro: "Compare the isle hacks for The Isle in 2026 — undetected ESP wallhack, radar hack, and Aimbot in one maintained package with Easy Anti-Cheat rebuilds and instant delivery.",
					imageAlt: "The Isle Hacks overview for The Isle on PC",
					galleryTitle: "Best the isle hacks gallery",
					ctaPrimary: "Buy The Isle Hacks",
					ctaSecondary: "Compare pricing",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "What makes the isle hacks in 2026",
							paragraphs: [
								"The isle hacks combine active Easy Anti-Cheat maintenance, a full ESP wallhack and radar stack, configurable Aimbot, and clear update communication — not a stale build from a prior season.",
								"The Isle Hacks covers session and growth run with in-client toggles and post-patch rebuilds.",
								"Verify the live game is healthy via <a href=\"https://store.steampowered.com/app/376210/The_Isle/\" target=\"_blank\" rel=\"noopener noreferrer\">The Isle on Steam</a>, then confirm our <a href=\"/updates/\">Updates</a> note before you judge any package “best.”",
							],
						},
						{
							h2: "Best the isle hacks feature checklist",
							paragraphs: [
								"Look for player ESP wallhack, carcass markers, 2D radar overlays, Aimbot profiles, hotkey toggles, and documented maintenance after The Isle patches.",
								"Review <a href=\"/features/\">Features</a>, <a href=\"/isle-hacks/\">undetected status</a>, and <a href=\"/isle-hacks/\">the isle hacks 2026</a> before checkout — monthly ($35) and lifetime ($150) plans available.",
								"Module pages worth opening: <a href=\"/isle-esp/\">ESP</a>, <a href=\"/isle-aimbot/\">Aimbot</a>, <a href=\"/isle-hacks/\">hacks</a>.",
							],
						},
						{
							h2: "Buying the isle hacks safely",
							paragraphs: [
								"Purchase through secure checkout for instant digital delivery. Read Setup, FAQ, and Updates pages before your first spawn in — and contact Support with order details if activation needs help.",
								"No cheat guarantees permanent undetected status — combine maintenance with responsible in-game settings.",
								"Remember: using cheats can violate The Isle team terms. Proceed only if you accept that risk.",
							],
						},
					],
					heroImage: "/images/isle-hacks-esp.webp",
				},
				"aimbot-hack": {
					title: "Isle Aimbot Hack 2026 | Soft Aim Assist",
					description: "Isle Aimbot hack with soft aim for Windows PC. FOV, bone priority, and hotkeys — bundled with ESP boxes in our The Isle Hacks package.",
					h1: "Isle Aimbot Hack — Soft Aim Assist",
					intro: "Isle Aimbot hack tools for The Isle — smoothness, FOV, bone priority, per-species profiles, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.",
					imageAlt: "Isle Aimbot hack controls and bone priority",
					galleryTitle: "Isle Aimbot hack gallery",
					ctaPrimary: "Buy The Isle Hacks",
					ctaSecondary: "Aimbot settings",
					ctaSecondaryHref: "/isle-aimbot/",
					sections: [
						{
							h2: "Isle Aimbot hack vs visibility tools",
							paragraphs: [
								"A Isle Aimbot hack focuses on assisted targeting during hunts — while ESP wallhack and radar handle map awareness. The Isle Hacks bundles aimbot hack modules with visibility overlays in one license.",
								"Smoothness, FOV, and aim smoothing controls tune assist for The Isle combat pace across herbivore and carnivore survival sessions.",
								"Prefer softer tracking language? See <a href=\"/isle-aimbot/\">soft aim</a>. Full settings: <a href=\"/isle-aimbot/\">Aimbot page</a>.",
							],
						},
						{
							h2: "Aimbot hack controls and hotkeys",
							paragraphs: [
								"Bone priority options cover head, chest, or dynamic targets. Hotkeys enable or disable aimbot hack mid-match without opening menus during rotations or late-session nests.",
								"Per-species profile slots separate long-range AR tuning from close-quarters SMG settings.",
								"Balance patches from <a href=\"https://store.steampowered.com/app/376210/The_Isle/\" target=\"_blank\" rel=\"noopener noreferrer\">The Isle</a> can change ideal FOV — retune after major species balance updates.",
							],
						},
						{
							h2: "Undetected aimbot hack maintenance",
							paragraphs: [
								"Aimbot hack signatures rebuild after Easy Anti-Cheat updates. Follow the <a href=\"/updates/\">Updates page</a> and <a href=\"/updates/\">Easy Anti-Cheat bypass guide</a> before spawning in after patch days.",
								"Checkout with instant digital delivery for Windows 10 and 11 — <a href=\"/pricing/\">Pricing</a>.",
								"Pair with <a href=\"/isle-esp/\">ESP</a> for the full information + assist loop.",
							],
						},
					],
					heroImage: "/images/isle-hacks-aimbot-view.webp",
				},
				"esp-hack": {
					title: "Isle ESP Hack 2026 | Player Boxes & Loot",
					description: "Isle ESP hack with player boxes and carcass markers for Windows PC. Undetected the isle hacks with — see overlays and buy.",
					h1: "Isle ESP Hack — Player Boxes Guide",
					intro: "Isle ESP hack overlays for The Isle — player outlines, apex threat cues, carcass and water markers with distance readouts across session and growth run.",
					imageAlt: "Isle ESP hack boxes and carcass markers",
					galleryTitle: "Isle ESP hack gallery",
					ctaPrimary: "Buy The Isle Hacks",
					ctaSecondary: "ESP controls",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "What a Isle ESP hack shows",
							paragraphs: [
								"A Isle ESP hack renders enemy player outlines, vehicle positions, and carcass pins through walls and terrain — closing the information gap before you commit to a fight.",
								"Distance readouts and snapline options help control engagement range during pack pushes and third-player scenarios.",
								"Canonical visibility guide: <a href=\"/isle-esp/\">Isle ESP</a>. Wallhack wording: <a href=\"/isle-esp/\">wallhack</a>.",
							],
						},
						{
							h2: "ESP hack categories for sessions",
							paragraphs: [
								"Toggle player ESP hack, carcass markers, chest pins, and vehicle cues independently so only session-critical overlays stay active during rotations.",
								"Team and enemy colour coding supports herbivore and carnivore survival sessions.",
								"POI and carcasses changes publish through <a href=\"https://store.steampowered.com/app/376210/The_Isle/\" target=\"_blank\" rel=\"noopener noreferrer\">The Isle</a> — keep categories toggled to what the current map rewards.",
							],
						},
						{
							h2: "Undetected ESP hack with Easy Anti-Cheat maintenance",
							paragraphs: [
								"ESP hack modules rebuild after Easy Anti-Cheat and The Isle patches. Check the <a href=\"/updates/\">Updates page</a> before spawning in — pair ESP hack awareness with <a href=\"/isle-radar-hack/\">radar hack</a> for flank reads.",
								"Licenses deliver digitally after checkout on Windows PC — see <a href=\"/pricing/\">Pricing</a>.",
								"Install steps: <a href=\"/setup/\">Setup</a>. Status questions: <a href=\"/isle-hacks/\">undetected guide</a>.",
							],
						},
					],
					heroImage: "/images/isle-hacks-wallhack.webp",
				},
				"unlock-all": {
					title: "The Isle Unlock All 2026 | What It Really Means",
					description: "The Isle unlock-all explained vs real the isle hacks — ESP boxes, soft aim, and radar for Windows PC. Know what you are buying.",
					h1: "The Isle Unlock All — What Players Search For",
					intro: "The Isle unlock-all is a common search term for The Isle — this page clarifies what unlock-all tools claim versus the ESP wallhack, radar hack, and Aimbot tools The Isle Hacks actually provides on Windows PC.",
					imageAlt: "The Isle Hacks license features overview",
					galleryTitle: "The Isle unlock-all guide visuals",
					ctaPrimary: "Buy The Isle Hacks",
					ctaSecondary: "See features",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "What The Isle unlock-all usually means",
							paragraphs: [
								"The Isle unlock-all searches often refer to instant access to dinosaurs, skins, or growth tiers. Those claims differ from visibility and combat-assist tools like ESP wallhack and Aimbot.",
								"The Isle Hacks focuses on in-match awareness — player ESP, carcass markers, radar overlays, and configurable Aimbot — not account-wide cosmetic unlocks.",
								"Cosmetics and patch cycle progression items are sold through <a href=\"https://store.steampowered.com/app/376210/The_Isle/\" target=\"_blank\" rel=\"noopener noreferrer\">The Isle</a>. Be wary of unlock-all downloads that promise free skins — they are often scams.",
							],
						},
						{
							h2: "Visibility tools vs unlock-all claims",
							paragraphs: [
								"ESP wallhack helps you spot enemy packs, apex dinosaurs, and fresh carcasses during live sessions. Radar hack adds flank awareness; Aimbot covers combat assist with smoothness and hotkey controls.",
								"For loadout planning during a match, carcasses and carcass markers speed map rotations — see the <a href=\"/isle-esp/\">ESP</a> and <a href=\"/features/\">Features</a> pages for the full tool list.",
								"Related: <a href=\"/isle-hacks/\">the isle hacks</a> and <a href=\"/isle-hacks/\">the isle hacks</a>.",
							],
						},
						{
							h2: "Buying The Isle Hacks for the right reasons",
							paragraphs: [
								"If you need undetected ESP wallhack, radar hack, and Aimbot for The Isle on Windows PC, compare <a href=\"/pricing/\">Pricing</a> and read the <a href=\"/setup/\">Setup guide</a> before checkout.",
								"Check the <a href=\"/updates/\">Updates page</a> after Easy Anti-Cheat patches — maintenance rebuilds publish for active licenses.",
								"Questions? <a href=\"/faq/\">FAQ</a> and <a href=\"/support/\">Support</a> cover delivery and configuration — not cosmetic unlocks.",
							],
						},
					],
					heroImage: "/images/isle-hacks-radar.webp",
				},
				privacy: {
					title: "Privacy Policy | The Isle Hacks",
					description: "Privacy policy for The Isle Hacks. How we handle support emails, order data, and checkout for the isle hacks licenses on theislehack.org.",
					h1: "Privacy Policy",
					intro: "How The Isle Hacks handles information when you browse theislehack.org or contact support about a The Isle license.",
					imageAlt: "The Isle Hacks privacy policy page",
					galleryTitle: "The Isle Hacks legal resources",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms of use",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we may collect",
							paragraphs: [
								"We may collect contact details you send by email, order references needed to resolve support requests, and basic technical data used to operate and secure the website.",
								"We do not sell personal data. Checkout payment details are processed by the checkout provider — review their privacy terms for transaction data.",
							],
							list: [
								"Contact details you send by email",
								"Order references for support requests",
								"Basic technical data for site security",
							],
						},
						{
							h2: "How information is used",
							paragraphs: [
								"Information is used to respond to support requests, process order issues, improve site reliability, and meet legal obligations when required.",
								"Analytics may use aggregated traffic data without identifying individual The Isle Hacks customers.",
							],
						},
						{
							h2: "Your choices and contact",
							paragraphs: [
								"You may request correction or deletion of support email data by contacting support@theislehack.org with your request details.",
								"Policy updates publish on this page. Continued use of theislehack.org after updates means you accept the revised policy. Also see <a href=\"/terms/\">Terms of Use</a> and <a href=\"/refund-policy/\">Refund Policy</a>.",
							],
						},
					],
					heroImage: "/images/isle-hacks-aimbot.webp",
				},
				refund: {
					title: "Refund Policy | The Isle Hacks",
					description: "Refund policy for The Isle Hacks. Digital delivery terms and eligibility for The Isle Hacks packages with ESP, soft aim, and radar.",
					h1: "Refund Policy",
					intro: "Refund terms for The Isle Hacks licenses — ESP wallhack, radar hack, and Aimbot packages purchased through checkout for The Isle.",
					imageAlt: "The Isle Hacks refund policy page",
					galleryTitle: "The Isle Hacks billing resources",
					ctaPrimary: "Contact support",
					ctaSecondary: "Read privacy policy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery and eligibility",
							paragraphs: [
								"The Isle Hacks licenses deliver digitally after payment confirmation. Because access begins immediately, refunds are limited to cases outlined below.",
								"Submit refund requests within 24 hours of purchase with your order ID and reason.",
							],
						},
						{
							h2: "When refunds may be approved",
							paragraphs: [
								"Duplicate charges, failed delivery despite confirmed payment, or technical activation failures verified by support may qualify for review.",
								"Refund decisions are final. Chargebacks without contacting support first may result in license revocation. See also <a href=\"/terms/\">Terms of Use</a>.",
							],
						},
						{
							h2: "How to request a refund",
							paragraphs: [
								"Email support@theislehack.org with subject \"Refund Request\", your order ID, purchase date, and issue summary — or use the <a href=\"/support/\">Support page</a>.",
								"Approved refunds process back to the original payment method when possible. Pricing details live on <a href=\"/pricing/\">Pricing</a>.",
							],
						},
					],
					heroImage: "/images/isle-hacks-session.webp",
				},
				terms: {
					title: "Terms of Use 2026 | The Isle Hacks Rules",
					description: "Terms of use for theislehack.org and The Isle Hacks licenses. Usage rules, anti-cheat risk, and liability for Windows PC cheats.",
					h1: "Terms of Use",
					intro: "Terms governing use of theislehack.org and The Isle Hacks licenses for The Isle on Windows PC.",
					imageAlt: "The Isle Hacks terms of use page",
					galleryTitle: "The Isle Hacks legal pages",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy policy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance and license scope",
							paragraphs: [
								"By purchasing or using The Isle Hacks you agree to these terms. Licenses grant personal use of ESP wallhack, radar, and Aimbot tools for The Isle on Windows PC only.",
								"Sharing, reselling, or reverse-engineering the package violates these terms and may revoke access.",
							],
						},
						{
							h2: "Risk and anti-cheat disclaimer",
							paragraphs: [
								"Using cheats in The Isle may violate The Isle team terms and result in account penalties. The Isle Hacks provides maintenance but does not guarantee undetected status or account safety.",
								"You assume all risk. We are not liable for bans, data loss, or damages arising from product use. See also <a href=\"/isle-hacks/\">undetected status</a>.",
							],
						},
						{
							h2: "Changes and governing law",
							paragraphs: [
								"We may update these terms by posting revisions on this page. Continued use after changes constitutes acceptance.",
								"Contact support@theislehack.org for questions. Related policies: <a href=\"/privacy-policy/\">Privacy</a> and <a href=\"/refund-policy/\">Refunds</a>.",
							],
						},
					],
					heroImage: "/images/isle-hacks-aimbot-view.webp",
				},
			},
		},
		es: {
			ui: {
				nav: {
					home: "Inicio",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funciones",
					pricing: "Precios",
					setup: "Instalación",
					updates: "Actualizaciones",
					faq: "FAQ",
					buyNow: "Comprar",
				},
				hero: {
					accent: "Trucos The Isle indetectables",
					accentShort: "The Isle Hacks",
					subtitle: "ESP wallhack, radar hack y Aimbot para The Isle en PC Windows — mantenimiento Easy Anti-Cheat incluido.",
					subtitleShort: "ESP, radar y Aimbot para The Isle PC",
					buyNow: "Comprar ahora",
					seeFeatures: "Ver funciones",
				},
				trust: {
					status: "En línea",
					statusNote: "El paquete The Isle Hacks está activo para The Isle en PC Windows.",
					statusShort: "Activo",
					delivery: "Entrega digital instantánea",
					platform: "Windows 10 y 11",
					antiCheat: "Mantenimiento Easy Anti-Cheat incluido",
					antiCheatShort: "Easy Anti-Cheat incluido",
				},
				product: {
					title: "The Isle Hacks",
					addToCart: "Añadir al carrito",
					monthly: "Mensual",
					lifetime: "De por vida",
					available: "Disponible ahora",
					gameBadge: "The Isle",
					platformBadge: "PC Windows",
					statusBadge: "Paquete indetectable",
				},
				reviews: {
					title: "Lo que dicen los jugadores",
					subtitle: "Comentarios recientes de compradores de The Isle Hacks",
					outOf: "de 5",
					countLabel: "reseñas",
				},
				common: {
					buyNow: "Comprar ahora",
					readGuide: "Leer guía",
					language: "Idioma",
					officialLanguageNote: "El inglés es el idioma oficial. Otras versiones están traducidas para SEO global.",
					relatedPages: "Páginas relacionadas",
				},
				footer: {
					explore: "Explorar",
					help: "Ayuda y legal",
					tagline: "ESP, wallhack, radar y Aimbot indetectables para The Isle — checkout en Zadeyo.",
				},
				images: {
					hero: "The Isle Hacks hero — ESP and aimbot overlay in The Isle",
					espWallhack: "Wallhack outlines showing players and wild dinosaurs through walls",
					aimbotCombat: "Soft aim assist overlay during a The Isle session",
					packFight: "The Isle Hacks combat overlay during a pack fight",
					dinoEsp: "Player ESP boxes and distance readouts in a The Isle session",
					headerArt: "Aimbot view and bone priority controls for The Isle",
					hacksPackage: "2D radar threat overlay for The Isle",
					ambushFight: "Aimbot assist during a The Isle hunt",
					battleRoyale: "The Isle Hacks in-session overview for Windows PC",
					survivalIsland: "ESP markers for carcasses and nests in The Isle",
				},
			},
			pages: {
				home: {
					title: "The Isle Hacks 2026 | ESP, Wallhack y Aimbot",
					description: "Trucos The Isle indetectables para The Isle en PC. ESP wallhack, radar hack y Aimbot con mantenimiento Easy Anti-Cheat. Entrega digital instantánea.",
					h1: "The Isle Hacks — ESP, Wallhack y Aimbot indetectables",
					intro: "Paquete undetected para The Isle en Windows PC: ESP wallhack, radar y Aimbot con mantenimiento Easy Anti-Cheat tras cada parche.",
					imageAlt: "Isle ESP — etiquetas de jugador hack",
					galleryTitle: "Galería The Isle Hacks — ESP, Aimbot y wallhack",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "Comprar The Isle Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Por qué eligen The Isle Hacks en 2026",
							paragraphs: [
								"The Isle Hacks ofrece ESP wallhack, radar hack y Isle Aimbot indetectables para The Isle en Windows PC. Ideal para leer escuadrones enemigos en BR y growth run.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar y Aimbot en una licencia",
							paragraphs: [
								"The Isle Hacks ofrece ESP wallhack, radar hack y Isle Aimbot indetectables para The Isle en Windows PC. Una licencia en lugar de herramientas separadas.",
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
							],
						},
					],
				},
				"isle-esp": {
					title: "ESP The Isle | Cajas de jugador y wallhack",
					description: "ESP The Isle: cajas de jugador, marcadores de carcasa y overlays wallhack. entrega digital instantánea. indetectables — Windows PC.",
					h1: "ESP The Isle",
					intro: "The Isle Hacks ofrece ESP wallhack, radar hack y Isle Aimbot indetectables para The Isle en Windows PC. ESP The Isle.",
					imageAlt: "Isle ESP player boxes and distance readouts in a session",
					galleryTitle: "ESP The Isle",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "Comprar The Isle Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "ESP The Isle",
							paragraphs: [
								"The Isle Hacks ofrece ESP wallhack, radar hack y Isle Aimbot indetectables para The Isle en Windows PC. cajas de jugador, marcadores de carcasa y overlays wallhack.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
								"Contacta support@theislehack.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"isle-aimbot": {
					title: "Aimbot The Isle | Controles soft aim",
					description: "Aimbot The Isle: soft aim, FOV y perfiles Aimbot por especie. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Aimbot The Isle",
					intro: "The Isle Hacks ofrece ESP wallhack, radar hack y Isle Aimbot indetectables para The Isle en Windows PC. Aimbot The Isle.",
					imageAlt: "Isle Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot The Isle",
					heroImage: "/images/isle-hacks-aimbot.webp",
					ctaPrimary: "Comprar The Isle Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "Aimbot The Isle",
							paragraphs: [
								"The Isle Hacks ofrece ESP wallhack, radar hack y Isle Aimbot indetectables para The Isle en Windows PC. soft aim, FOV y perfiles Aimbot por especie.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
								"Contacta support@theislehack.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				features: {
					title: "Funciones | Lista completa de funciones",
					description: "Funciones: ESP, soft aim, controles de radar. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Funciones",
					intro: "The Isle Hacks ofrece ESP wallhack, radar hack y Isle Aimbot indetectables para The Isle en Windows PC. Funciones.",
					imageAlt: "The Isle Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funciones",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "Comprar The Isle Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funciones",
							paragraphs: [
								"The Isle Hacks ofrece ESP wallhack, radar hack y Isle Aimbot indetectables para The Isle en Windows PC. ESP, soft aim, controles de radar.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
								"Contacta support@theislehack.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				pricing: {
					title: "Precios | Mensual y de por vida",
					description: "Precios: licencias de $35 mensuales o $150 de por vida. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Precios",
					intro: "The Isle Hacks ofrece ESP wallhack, radar hack y Isle Aimbot indetectables para The Isle en Windows PC. Precios.",
					imageAlt: "The Isle Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Precios",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "Comprar The Isle Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Precios",
							paragraphs: [
								"The Isle Hacks ofrece ESP wallhack, radar hack y Isle Aimbot indetectables para The Isle en Windows PC. licencias de $35 mensuales o $150 de por vida.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
								"Contacta support@theislehack.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				setup: {
					title: "Instalación | Guía de instalación PC",
					description: "Instalación: activación en Windows PC y configuración del primer arranque. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Instalación",
					intro: "The Isle Hacks ofrece ESP wallhack, radar hack y Isle Aimbot indetectables para The Isle en Windows PC. Instalación.",
					imageAlt: "The Isle Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Instalación",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "Comprar The Isle Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalación",
							paragraphs: [
								"The Isle Hacks ofrece ESP wallhack, radar hack y Isle Aimbot indetectables para The Isle en Windows PC. activación en Windows PC y configuración del primer arranque.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
								"Contacta support@theislehack.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				updates: {
					title: "Actualizaciones | Registro Easy Anti-Cheat",
					description: "Actualizaciones: estado de parches Easy Anti-Cheat y notas de reconstrucción. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Actualizaciones",
					intro: "The Isle Hacks ofrece ESP wallhack, radar hack y Isle Aimbot indetectables para The Isle en Windows PC. Actualizaciones.",
					imageAlt: "The Isle Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Actualizaciones",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "Comprar The Isle Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "Actualizaciones",
							paragraphs: [
								"The Isle Hacks ofrece ESP wallhack, radar hack y Isle Aimbot indetectables para The Isle en Windows PC. estado de parches Easy Anti-Cheat y notas de reconstrucción.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
								"Contacta support@theislehack.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Preguntas frecuentes",
					description: "FAQ: preguntas sobre ESP, soft aim, entrega y Easy Anti-Cheat. entrega digital instantánea. indetectables — Windows PC.",
					h1: "FAQ",
					intro: "The Isle Hacks ofrece ESP wallhack, radar hack y Isle Aimbot indetectables para The Isle en Windows PC. FAQ.",
					imageAlt: "The Isle Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "Comprar The Isle Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"The Isle Hacks ofrece ESP wallhack, radar hack y Isle Aimbot indetectables para The Isle en Windows PC. preguntas sobre ESP, soft aim, entrega y Easy Anti-Cheat.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
								"Contacta support@theislehack.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				support: {
					title: "Soporte | Ayuda y contacto",
					description: "Soporte: ayuda con pedidos y contacto de soporte de licencias. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Soporte",
					intro: "The Isle Hacks ofrece ESP wallhack, radar hack y Isle Aimbot indetectables para The Isle en Windows PC. Soporte.",
					imageAlt: "The Isle Hacks support page for license and setup help",
					galleryTitle: "Soporte",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "Comprar The Isle Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Soporte",
							paragraphs: [
								"The Isle Hacks ofrece ESP wallhack, radar hack y Isle Aimbot indetectables para The Isle en Windows PC. ayuda con pedidos y contacto de soporte de licencias.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
								"Contacta support@theislehack.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				undetected: {
					title: "Trucos indetectables | Estado indetectable",
					description: "Trucos indetectables: mantenimiento undetected tras parches Easy Anti-Cheat. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Trucos indetectables",
					intro: "The Isle Hacks ofrece ESP wallhack, radar hack y Isle Aimbot indetectables para The Isle en Windows PC. Trucos indetectables.",
					imageAlt: "The Isle Hacks undetected status overview for Windows PC",
					galleryTitle: "Trucos indetectables",
					heroImage: "/images/isle-hacks-wallhack.webp",
					ctaPrimary: "Comprar The Isle Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "Trucos indetectables",
							paragraphs: [
								"The Isle Hacks ofrece ESP wallhack, radar hack y Isle Aimbot indetectables para The Isle en Windows PC. mantenimiento undetected tras parches Easy Anti-Cheat.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
								"Contacta support@theislehack.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				wallhack: {
					title: "The Isle Wallhack | Visibilidad ESP",
					description: "The Isle Wallhack: wallhack ESP para jugadores, carcasses y distancia. entrega digital instantánea. indetectables — Windows PC.",
					h1: "The Isle Wallhack",
					intro: "The Isle Hacks ofrece ESP wallhack, radar hack y Isle Aimbot indetectables para The Isle en Windows PC. The Isle Wallhack.",
					imageAlt: "isle wallhack visibility through walls in a session",
					galleryTitle: "The Isle Wallhack",
					heroImage: "/images/isle-hacks-wallhack.webp",
					ctaPrimary: "Comprar The Isle Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "The Isle Wallhack",
							paragraphs: [
								"The Isle Hacks ofrece ESP wallhack, radar hack y Isle Aimbot indetectables para The Isle en Windows PC. wallhack ESP para jugadores, carcasses y distancia.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
								"Contacta support@theislehack.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | Radar 2D de amenazas",
					description: "Radar hack: señales de radar 2D para flancos y rotaciones. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Radar hack",
					intro: "The Isle Hacks ofrece ESP wallhack, radar hack y Isle Aimbot indetectables para The Isle en Windows PC. Radar hack.",
					imageAlt: "The Isle 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "Comprar The Isle Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"The Isle Hacks ofrece ESP wallhack, radar hack y Isle Aimbot indetectables para The Isle en Windows PC. señales de radar 2D para flancos y rotaciones.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
								"Contacta support@theislehack.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Mantenimiento de parches",
					description: "Bypass Easy Anti-Cheat: cómo se gestionan las actualizaciones Easy Anti-Cheat para The Isle hacks. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "The Isle Hacks ofrece ESP wallhack, radar hack y Isle Aimbot indetectables para The Isle en Windows PC. Bypass Easy Anti-Cheat.",
					imageAlt: "The Isle Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/isle-hacks-aimbot.webp",
					ctaPrimary: "Comprar The Isle Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"The Isle Hacks ofrece ESP wallhack, radar hack y Isle Aimbot indetectables para The Isle en Windows PC. cómo se gestionan las actualizaciones Easy Anti-Cheat para The Isle hacks.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
								"Contacta support@theislehack.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Trucos The Isle 2026 | Guía del comprador",
					description: "Trucos The Isle 2026: checklist de the isle hacks 2026 antes del checkout. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Trucos The Isle 2026",
					intro: "The Isle Hacks ofrece ESP wallhack, radar hack y Isle Aimbot indetectables para The Isle en Windows PC. Trucos The Isle 2026.",
					imageAlt: "The Isle Hacks product overview for The Isle",
					galleryTitle: "Trucos The Isle 2026",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "Comprar The Isle Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "Trucos The Isle 2026",
							paragraphs: [
								"The Isle Hacks ofrece ESP wallhack, radar hack y Isle Aimbot indetectables para The Isle en Windows PC. checklist de the isle hacks 2026 antes del checkout.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
								"Contacta support@theislehack.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				hacks: {
					title: "Trucos The Isle | Guía ESP y Aimbot",
					description: "Trucos The Isle: pilar The Isle Hacks para ESP y Aimbot. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Trucos The Isle",
					intro: "The Isle Hacks ofrece ESP wallhack, radar hack y Isle Aimbot indetectables para The Isle en Windows PC. Trucos The Isle.",
					imageAlt: "The Isle Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Trucos The Isle",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "Comprar The Isle Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Trucos The Isle",
							paragraphs: [
								"The Isle Hacks ofrece ESP wallhack, radar hack y Isle Aimbot indetectables para The Isle en Windows PC. pilar The Isle Hacks para ESP y Aimbot.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
								"Contacta support@theislehack.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Descarga The Isle Hacks | Acceso instantáneo",
					description: "Descarga The Isle Hacks: descarga de licencia digital tras el pago. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Descarga The Isle Hacks",
					intro: "The Isle Hacks ofrece ESP wallhack, radar hack y Isle Aimbot indetectables para The Isle en Windows PC. Descarga The Isle Hacks.",
					imageAlt: "The Isle Hacks download and install delivery flow",
					galleryTitle: "Descarga The Isle Hacks",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "Comprar The Isle Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Descarga The Isle Hacks",
							paragraphs: [
								"The Isle Hacks ofrece ESP wallhack, radar hack y Isle Aimbot indetectables para The Isle en Windows PC. descarga de licencia digital tras el pago.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
								"Contacta support@theislehack.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Menú mod The Isle | Controles en partida",
					description: "Menú mod The Isle: toggles de ESP y soft aim en el cliente. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Menú mod The Isle",
					intro: "The Isle Hacks ofrece ESP wallhack, radar hack y Isle Aimbot indetectables para The Isle en Windows PC. Menú mod The Isle.",
					imageAlt: "The Isle Hacks in-game menu controls",
					galleryTitle: "Menú mod The Isle",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "Comprar The Isle Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menú mod The Isle",
							paragraphs: [
								"The Isle Hacks ofrece ESP wallhack, radar hack y Isle Aimbot indetectables para The Isle en Windows PC. toggles de ESP y soft aim en el cliente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
								"Contacta support@theislehack.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim The Isle | Ajustes soft aim",
					description: "Soft aim The Isle: ajustes suaves de soft aim para Windows PC. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Soft aim The Isle",
					intro: "The Isle Hacks ofrece ESP wallhack, radar hack y Isle Aimbot indetectables para The Isle en Windows PC. Soft aim The Isle.",
					imageAlt: "The Isle soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim The Isle",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "Comprar The Isle Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/isle-aimbot/",
					sections: [
						{
							h2: "Soft aim The Isle",
							paragraphs: [
								"The Isle Hacks ofrece ESP wallhack, radar hack y Isle Aimbot indetectables para The Isle en Windows PC. ajustes suaves de soft aim para Windows PC.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
								"Contacta support@theislehack.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Mejores trucos The Isle | Lista de compra",
					description: "Mejores trucos The Isle: qué comparar antes de comprar the isle hacks. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Mejores trucos The Isle",
					intro: "The Isle Hacks ofrece ESP wallhack, radar hack y Isle Aimbot indetectables para The Isle en Windows PC. Mejores trucos The Isle.",
					imageAlt: "The Isle Hacks overview for The Isle on PC",
					galleryTitle: "Mejores trucos The Isle",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "Comprar The Isle Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Mejores trucos The Isle",
							paragraphs: [
								"The Isle Hacks ofrece ESP wallhack, radar hack y Isle Aimbot indetectables para The Isle en Windows PC. qué comparar antes de comprar the isle hacks.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
								"Contacta support@theislehack.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot The Isle | Asistencia soft aim",
					description: "Hack aimbot The Isle: asistencia undetected de hack Aimbot para The Isle. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Hack aimbot The Isle",
					intro: "The Isle Hacks ofrece ESP wallhack, radar hack y Isle Aimbot indetectables para The Isle en Windows PC. Hack aimbot The Isle.",
					imageAlt: "Isle Aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot The Isle",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "Comprar The Isle Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/isle-aimbot/",
					sections: [
						{
							h2: "Hack aimbot The Isle",
							paragraphs: [
								"The Isle Hacks ofrece ESP wallhack, radar hack y Isle Aimbot indetectables para The Isle en Windows PC. asistencia undetected de hack Aimbot para The Isle.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
								"Contacta support@theislehack.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP The Isle | Cajas y carcasses",
					description: "Hack ESP The Isle: cajas ESP hack, pins de carcasa y distancia. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Hack ESP The Isle",
					intro: "The Isle Hacks ofrece ESP wallhack, radar hack y Isle Aimbot indetectables para The Isle en Windows PC. Hack ESP The Isle.",
					imageAlt: "Isle ESP hack boxes and carcass markers",
					galleryTitle: "Hack ESP The Isle",
					heroImage: "/images/isle-hacks-wallhack.webp",
					ctaPrimary: "Comprar The Isle Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "Hack ESP The Isle",
							paragraphs: [
								"The Isle Hacks ofrece ESP wallhack, radar hack y Isle Aimbot indetectables para The Isle en Windows PC. cajas ESP hack, pins de carcasa y distancia.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
								"Contacta support@theislehack.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all The Isle | Qué significa",
					description: "Unlock all The Isle: búsquedas unlock-all vs herramientas reales ESP y Aimbot. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Unlock all The Isle",
					intro: "The Isle Hacks ofrece ESP wallhack, radar hack y Isle Aimbot indetectables para The Isle en Windows PC. Unlock all The Isle.",
					imageAlt: "The Isle Hacks license features overview",
					galleryTitle: "Unlock all The Isle",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "Comprar The Isle Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all The Isle",
							paragraphs: [
								"The Isle Hacks ofrece ESP wallhack, radar hack y Isle Aimbot indetectables para The Isle en Windows PC. búsquedas unlock-all vs herramientas reales ESP y Aimbot.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
								"Contacta support@theislehack.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				privacy: {
					title: "Política de privacidad | The Isle Hacks",
					description: "Política de privacidad para The Isle Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Política de privacidad",
					intro: "The Isle Hacks ofrece ESP wallhack, radar hack y Isle Aimbot indetectables para The Isle en Windows PC. Política de privacidad para theislehack.org y licencias de The Isle.",
					imageAlt: "The Isle Hacks",
					galleryTitle: "The Isle Hacks",
					heroImage: "/images/isle-hacks-aimbot.webp",
					ctaPrimary: "Correo al soporte",
					ctaSecondary: "Leer términos",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Información que recopilamos",
							paragraphs: [
								"The Isle Hacks ofrece ESP wallhack, radar hack y Isle Aimbot indetectables para The Isle en Windows PC. Correo de contacto, referencias de pedido Zadeyo y datos básicos de seguridad del sitio.",
								"Los datos de pago se procesan en el checkout de Zadeyo — no se almacenan en theislehack.org.",
							],
						},
						{
							h2: "Cómo usamos los datos",
							paragraphs: [
								"The Isle Hacks ofrece ESP wallhack, radar hack y Isle Aimbot indetectables para The Isle en Windows PC. Respuestas de soporte, resolución de pedidos y cumplimiento legal cuando sea necesario.",
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
							],
						},
						{
							h2: "Tus derechos",
							paragraphs: [
								"Contacta support@theislehack.org para solicitudes legales o de soporte.",
								"Correo: support@theislehack.org",
							],
						},
					],
				},
				refund: {
					title: "Política de reembolso | The Isle Hacks",
					description: "Política de reembolso para The Isle Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Política de reembolso",
					intro: "The Isle Hacks ofrece ESP wallhack, radar hack y Isle Aimbot indetectables para The Isle en Windows PC. Política de reembolso para theislehack.org y licencias de The Isle.",
					imageAlt: "The Isle Hacks",
					galleryTitle: "The Isle Hacks",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "Correo al soporte",
					ctaSecondary: "Leer privacidad",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Entrega digital",
							paragraphs: [
								"The Isle Hacks ofrece ESP wallhack, radar hack y Isle Aimbot indetectables para The Isle en Windows PC. Correo de contacto, referencias de pedido Zadeyo y datos básicos de seguridad del sitio.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "Aprobación de reembolso",
							paragraphs: [
								"The Isle Hacks ofrece ESP wallhack, radar hack y Isle Aimbot indetectables para The Isle en Windows PC. Respuestas de soporte, resolución de pedidos y cumplimiento legal cuando sea necesario.",
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
							],
						},
						{
							h2: "Cómo solicitar",
							paragraphs: [
								"Contacta support@theislehack.org para solicitudes legales o de soporte.",
								"Correo: support@theislehack.org",
							],
						},
					],
				},
				terms: {
					title: "Términos de uso | The Isle Hacks",
					description: "Términos de uso para The Isle Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Términos de uso",
					intro: "The Isle Hacks ofrece ESP wallhack, radar hack y Isle Aimbot indetectables para The Isle en Windows PC. Términos de uso para theislehack.org y licencias de The Isle.",
					imageAlt: "The Isle Hacks",
					galleryTitle: "The Isle Hacks",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "Correo al soporte",
					ctaSecondary: "Leer privacidad",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Aceptación de términos",
							paragraphs: [
								"The Isle Hacks ofrece ESP wallhack, radar hack y Isle Aimbot indetectables para The Isle en Windows PC. Correo de contacto, referencias de pedido Zadeyo y datos básicos de seguridad del sitio.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "Aviso de riesgos",
							paragraphs: [
								"The Isle Hacks ofrece ESP wallhack, radar hack y Isle Aimbot indetectables para The Isle en Windows PC. Respuestas de soporte, resolución de pedidos y cumplimiento legal cuando sea necesario.",
								"Usar cheats puede violar los términos del equipo de The Isle — asumes todo riesgo de ban.",
							],
						},
						{
							h2: "Cambios de política",
							paragraphs: [
								"Contacta support@theislehack.org para solicitudes legales o de soporte.",
								"Correo: support@theislehack.org",
							],
						},
					],
				},
			},
		},
		fr: {
			ui: {
				nav: {
					home: "Accueil",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Fonctions",
					pricing: "Tarifs",
					setup: "Installation",
					updates: "Mises à jour",
					faq: "FAQ",
					buyNow: "Acheter",
				},
				hero: {
					accent: "Triches The Isle indétectables",
					accentShort: "The Isle Hacks",
					subtitle: "ESP wallhack, radar hack et Aimbot pour The Isle sur PC Windows — maintenance Easy Anti-Cheat incluse.",
					subtitleShort: "ESP, radar et Aimbot pour The Isle PC",
					buyNow: "Acheter",
					seeFeatures: "Voir les fonctions",
				},
				trust: {
					status: "En ligne",
					statusNote: "Le pack The Isle Hacks est actif pour The Isle sur PC Windows.",
					statusShort: "Actif",
					delivery: "Livraison numérique instantanée",
					platform: "Windows 10 et 11",
					antiCheat: "Maintenance Easy Anti-Cheat incluse",
					antiCheatShort: "Easy Anti-Cheat inclus",
				},
				product: {
					title: "The Isle Hacks",
					addToCart: "Ajouter au panier",
					monthly: "Mensuel",
					lifetime: "À vie",
					available: "Disponible",
					gameBadge: "The Isle",
					platformBadge: "PC Windows",
					statusBadge: "Pack indétectable",
				},
				reviews: {
					title: "Ce que disent les joueurs",
					subtitle: "Avis récents des acheteurs The Isle Hacks",
					outOf: "sur 5",
					countLabel: "avis",
				},
				common: {
					buyNow: "Acheter",
					readGuide: "Lire le guide",
					language: "Langue",
					officialLanguageNote: "L'anglais est la langue officielle. Les autres versions sont traduites pour le SEO mondial.",
					relatedPages: "Pages associées",
				},
				footer: {
					explore: "Explorer",
					help: "Aide et légal",
					tagline: "ESP, wallhack, radar et Aimbot indétectables pour The Isle — checkout via Zadeyo.",
				},
				images: {
					hero: "The Isle Hacks hero — ESP and aimbot overlay in The Isle",
					espWallhack: "Wallhack outlines showing players and wild dinosaurs through walls",
					aimbotCombat: "Soft aim assist overlay during a The Isle session",
					packFight: "The Isle Hacks combat overlay during a pack fight",
					dinoEsp: "Player ESP boxes and distance readouts in a The Isle session",
					headerArt: "Aimbot view and bone priority controls for The Isle",
					hacksPackage: "2D radar threat overlay for The Isle",
					ambushFight: "Aimbot assist during a The Isle hunt",
					battleRoyale: "The Isle Hacks in-session overview for Windows PC",
					survivalIsland: "ESP markers for carcasses and nests in The Isle",
				},
			},
			pages: {
				home: {
					title: "The Isle Hacks 2026 | ESP, Wallhack et Aimbot",
					description: "Triches The Isle indétectables pour The Isle sur PC. ESP wallhack, radar hack et Aimbot avec maintenance Easy Anti-Cheat. Livraison numérique instantanée.",
					h1: "The Isle Hacks — ESP, Wallhack et Aimbot indétectables",
					intro: "Pack undetected pour The Isle sur PC Windows : ESP wallhack, radar et Aimbot avec maintenance Easy Anti-Cheat après chaque patch.",
					imageAlt: "Isle ESP — tags joueur hack",
					galleryTitle: "Galerie The Isle Hacks — ESP, Aimbot et wallhack",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "Acheter The Isle Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Pourquoi choisir The Isle Hacks en 2026",
							paragraphs: [
								"The Isle Hacks combine ESP wallhack, radar hack et Isle Aimbot indétectables pour The Isle sur PC Windows. Parfait pour lire les escouades ennemies en BR et growth run.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar et Aimbot en une licence",
							paragraphs: [
								"The Isle Hacks combine ESP wallhack, radar hack et Isle Aimbot indétectables pour The Isle sur PC Windows. Une licence au lieu d'outils séparés.",
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
							],
						},
					],
				},
				"isle-esp": {
					title: "ESP The Isle | Boîtes joueur et wallhack",
					description: "ESP The Isle: boîtes joueur, marqueurs de carcasse et overlays wallhack. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "ESP The Isle",
					intro: "The Isle Hacks combine ESP wallhack, radar hack et Isle Aimbot indétectables pour The Isle sur PC Windows. ESP The Isle.",
					imageAlt: "Isle ESP player boxes and distance readouts in a session",
					galleryTitle: "ESP The Isle",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "Acheter The Isle Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "ESP The Isle",
							paragraphs: [
								"The Isle Hacks combine ESP wallhack, radar hack et Isle Aimbot indétectables pour The Isle sur PC Windows. boîtes joueur, marqueurs de carcasse et overlays wallhack.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@theislehack.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				"isle-aimbot": {
					title: "Aimbot The Isle | Contrôles soft aim",
					description: "Aimbot The Isle: soft aim, FOV et profils Aimbot par espèce. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Aimbot The Isle",
					intro: "The Isle Hacks combine ESP wallhack, radar hack et Isle Aimbot indétectables pour The Isle sur PC Windows. Aimbot The Isle.",
					imageAlt: "Isle Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot The Isle",
					heroImage: "/images/isle-hacks-aimbot.webp",
					ctaPrimary: "Acheter The Isle Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "Aimbot The Isle",
							paragraphs: [
								"The Isle Hacks combine ESP wallhack, radar hack et Isle Aimbot indétectables pour The Isle sur PC Windows. soft aim, FOV et profils Aimbot par espèce.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@theislehack.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				features: {
					title: "Fonctions | Liste complète des fonctions",
					description: "Fonctions: ESP, soft aim, contrôles radar. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Fonctions",
					intro: "The Isle Hacks combine ESP wallhack, radar hack et Isle Aimbot indétectables pour The Isle sur PC Windows. Fonctions.",
					imageAlt: "The Isle Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Fonctions",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "Acheter The Isle Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Fonctions",
							paragraphs: [
								"The Isle Hacks combine ESP wallhack, radar hack et Isle Aimbot indétectables pour The Isle sur PC Windows. ESP, soft aim, contrôles radar.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@theislehack.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				pricing: {
					title: "Tarifs | Mensuel et à vie",
					description: "Tarifs: licences à $35/mois ou $150 à vie. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Tarifs",
					intro: "The Isle Hacks combine ESP wallhack, radar hack et Isle Aimbot indétectables pour The Isle sur PC Windows. Tarifs.",
					imageAlt: "The Isle Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Tarifs",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "Acheter The Isle Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Tarifs",
							paragraphs: [
								"The Isle Hacks combine ESP wallhack, radar hack et Isle Aimbot indétectables pour The Isle sur PC Windows. licences à $35/mois ou $150 à vie.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@theislehack.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				setup: {
					title: "Installation | Guide d'installation PC",
					description: "Installation: activation Windows PC et configuration au premier lancement. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Installation",
					intro: "The Isle Hacks combine ESP wallhack, radar hack et Isle Aimbot indétectables pour The Isle sur PC Windows. Installation.",
					imageAlt: "The Isle Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Installation",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "Acheter The Isle Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Installation",
							paragraphs: [
								"The Isle Hacks combine ESP wallhack, radar hack et Isle Aimbot indétectables pour The Isle sur PC Windows. activation Windows PC et configuration au premier lancement.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@theislehack.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				updates: {
					title: "Mises à jour | Journal Easy Anti-Cheat",
					description: "Mises à jour: statut des patchs Easy Anti-Cheat et notes de rebuild. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Mises à jour",
					intro: "The Isle Hacks combine ESP wallhack, radar hack et Isle Aimbot indétectables pour The Isle sur PC Windows. Mises à jour.",
					imageAlt: "The Isle Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Mises à jour",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "Acheter The Isle Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "Mises à jour",
							paragraphs: [
								"The Isle Hacks combine ESP wallhack, radar hack et Isle Aimbot indétectables pour The Isle sur PC Windows. statut des patchs Easy Anti-Cheat et notes de rebuild.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@theislehack.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Questions fréquentes",
					description: "FAQ: questions ESP, soft aim, livraison et Easy Anti-Cheat. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "FAQ",
					intro: "The Isle Hacks combine ESP wallhack, radar hack et Isle Aimbot indétectables pour The Isle sur PC Windows. FAQ.",
					imageAlt: "The Isle Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "Acheter The Isle Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"The Isle Hacks combine ESP wallhack, radar hack et Isle Aimbot indétectables pour The Isle sur PC Windows. questions ESP, soft aim, livraison et Easy Anti-Cheat.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@theislehack.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				support: {
					title: "Support | Aide et contact",
					description: "Support: aide commande et contact support licence. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Support",
					intro: "The Isle Hacks combine ESP wallhack, radar hack et Isle Aimbot indétectables pour The Isle sur PC Windows. Support.",
					imageAlt: "The Isle Hacks support page for license and setup help",
					galleryTitle: "Support",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "Acheter The Isle Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Support",
							paragraphs: [
								"The Isle Hacks combine ESP wallhack, radar hack et Isle Aimbot indétectables pour The Isle sur PC Windows. aide commande et contact support licence.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@theislehack.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				undetected: {
					title: "Triches indétectables | Statut indétectable",
					description: "Triches indétectables: maintenance undetected après patchs Easy Anti-Cheat. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Triches indétectables",
					intro: "The Isle Hacks combine ESP wallhack, radar hack et Isle Aimbot indétectables pour The Isle sur PC Windows. Triches indétectables.",
					imageAlt: "The Isle Hacks undetected status overview for Windows PC",
					galleryTitle: "Triches indétectables",
					heroImage: "/images/isle-hacks-wallhack.webp",
					ctaPrimary: "Acheter The Isle Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "Triches indétectables",
							paragraphs: [
								"The Isle Hacks combine ESP wallhack, radar hack et Isle Aimbot indétectables pour The Isle sur PC Windows. maintenance undetected après patchs Easy Anti-Cheat.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@theislehack.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				wallhack: {
					title: "The Isle Wallhack | Visibilité ESP",
					description: "The Isle Wallhack: wallhack ESP pour joueurs, carcasses et distance. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "The Isle Wallhack",
					intro: "The Isle Hacks combine ESP wallhack, radar hack et Isle Aimbot indétectables pour The Isle sur PC Windows. The Isle Wallhack.",
					imageAlt: "isle wallhack visibility through walls in a session",
					galleryTitle: "The Isle Wallhack",
					heroImage: "/images/isle-hacks-wallhack.webp",
					ctaPrimary: "Acheter The Isle Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "The Isle Wallhack",
							paragraphs: [
								"The Isle Hacks combine ESP wallhack, radar hack et Isle Aimbot indétectables pour The Isle sur PC Windows. wallhack ESP pour joueurs, carcasses et distance.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@theislehack.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | Radar 2D des menaces",
					description: "Radar hack: indices radar 2D pour flancs et rotations. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Radar hack",
					intro: "The Isle Hacks combine ESP wallhack, radar hack et Isle Aimbot indétectables pour The Isle sur PC Windows. Radar hack.",
					imageAlt: "The Isle 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "Acheter The Isle Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"The Isle Hacks combine ESP wallhack, radar hack et Isle Aimbot indétectables pour The Isle sur PC Windows. indices radar 2D pour flancs et rotations.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@theislehack.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Maintenance des patchs",
					description: "Bypass Easy Anti-Cheat: gestion des mises à jour Easy Anti-Cheat pour The Isle hacks. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "The Isle Hacks combine ESP wallhack, radar hack et Isle Aimbot indétectables pour The Isle sur PC Windows. Bypass Easy Anti-Cheat.",
					imageAlt: "The Isle Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/isle-hacks-aimbot.webp",
					ctaPrimary: "Acheter The Isle Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"The Isle Hacks combine ESP wallhack, radar hack et Isle Aimbot indétectables pour The Isle sur PC Windows. gestion des mises à jour Easy Anti-Cheat pour The Isle hacks.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@theislehack.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Triches The Isle 2026 | Guide acheteur",
					description: "Triches The Isle 2026: checklist the isle hacks 2026 avant checkout. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Triches The Isle 2026",
					intro: "The Isle Hacks combine ESP wallhack, radar hack et Isle Aimbot indétectables pour The Isle sur PC Windows. Triches The Isle 2026.",
					imageAlt: "The Isle Hacks product overview for The Isle",
					galleryTitle: "Triches The Isle 2026",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "Acheter The Isle Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "Triches The Isle 2026",
							paragraphs: [
								"The Isle Hacks combine ESP wallhack, radar hack et Isle Aimbot indétectables pour The Isle sur PC Windows. checklist the isle hacks 2026 avant checkout.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@theislehack.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				hacks: {
					title: "Triches The Isle | Guide ESP et Aimbot",
					description: "Triches The Isle: pilier The Isle Hacks pour ESP et Aimbot. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Triches The Isle",
					intro: "The Isle Hacks combine ESP wallhack, radar hack et Isle Aimbot indétectables pour The Isle sur PC Windows. Triches The Isle.",
					imageAlt: "The Isle Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Triches The Isle",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "Acheter The Isle Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Triches The Isle",
							paragraphs: [
								"The Isle Hacks combine ESP wallhack, radar hack et Isle Aimbot indétectables pour The Isle sur PC Windows. pilier The Isle Hacks pour ESP et Aimbot.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@theislehack.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Téléchargement The Isle Hacks | Accès instantané",
					description: "Téléchargement The Isle Hacks: téléchargement licence numérique après paiement. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Téléchargement The Isle Hacks",
					intro: "The Isle Hacks combine ESP wallhack, radar hack et Isle Aimbot indétectables pour The Isle sur PC Windows. Téléchargement The Isle Hacks.",
					imageAlt: "The Isle Hacks download and install delivery flow",
					galleryTitle: "Téléchargement The Isle Hacks",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "Acheter The Isle Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Téléchargement The Isle Hacks",
							paragraphs: [
								"The Isle Hacks combine ESP wallhack, radar hack et Isle Aimbot indétectables pour The Isle sur PC Windows. téléchargement licence numérique après paiement.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@theislehack.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Menu mod The Isle | Contrôles en jeu",
					description: "Menu mod The Isle: toggles ESP et soft aim in-client. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Menu mod The Isle",
					intro: "The Isle Hacks combine ESP wallhack, radar hack et Isle Aimbot indétectables pour The Isle sur PC Windows. Menu mod The Isle.",
					imageAlt: "The Isle Hacks in-game menu controls",
					galleryTitle: "Menu mod The Isle",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "Acheter The Isle Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menu mod The Isle",
							paragraphs: [
								"The Isle Hacks combine ESP wallhack, radar hack et Isle Aimbot indétectables pour The Isle sur PC Windows. toggles ESP et soft aim in-client.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@theislehack.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim The Isle | Réglages soft aim",
					description: "Soft aim The Isle: réglages soft aim fluides pour Windows PC. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Soft aim The Isle",
					intro: "The Isle Hacks combine ESP wallhack, radar hack et Isle Aimbot indétectables pour The Isle sur PC Windows. Soft aim The Isle.",
					imageAlt: "The Isle soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim The Isle",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "Acheter The Isle Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/isle-aimbot/",
					sections: [
						{
							h2: "Soft aim The Isle",
							paragraphs: [
								"The Isle Hacks combine ESP wallhack, radar hack et Isle Aimbot indétectables pour The Isle sur PC Windows. réglages soft aim fluides pour Windows PC.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@theislehack.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Meilleures triches The Isle | Checklist acheteur",
					description: "Meilleures triches The Isle: quoi comparer avant d'acheter the isle hacks. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Meilleures triches The Isle",
					intro: "The Isle Hacks combine ESP wallhack, radar hack et Isle Aimbot indétectables pour The Isle sur PC Windows. Meilleures triches The Isle.",
					imageAlt: "The Isle Hacks overview for The Isle on PC",
					galleryTitle: "Meilleures triches The Isle",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "Acheter The Isle Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Meilleures triches The Isle",
							paragraphs: [
								"The Isle Hacks combine ESP wallhack, radar hack et Isle Aimbot indétectables pour The Isle sur PC Windows. quoi comparer avant d'acheter the isle hacks.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@theislehack.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot The Isle | Assistance soft aim",
					description: "Hack aimbot The Isle: assist hack Aimbot undetected pour The Isle. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Hack aimbot The Isle",
					intro: "The Isle Hacks combine ESP wallhack, radar hack et Isle Aimbot indétectables pour The Isle sur PC Windows. Hack aimbot The Isle.",
					imageAlt: "Isle Aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot The Isle",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "Acheter The Isle Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/isle-aimbot/",
					sections: [
						{
							h2: "Hack aimbot The Isle",
							paragraphs: [
								"The Isle Hacks combine ESP wallhack, radar hack et Isle Aimbot indétectables pour The Isle sur PC Windows. assist hack Aimbot undetected pour The Isle.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@theislehack.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP The Isle | Boîtes et carcasses",
					description: "Hack ESP The Isle: boîtes ESP hack, pins carcasse et distance. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Hack ESP The Isle",
					intro: "The Isle Hacks combine ESP wallhack, radar hack et Isle Aimbot indétectables pour The Isle sur PC Windows. Hack ESP The Isle.",
					imageAlt: "Isle ESP hack boxes and carcass markers",
					galleryTitle: "Hack ESP The Isle",
					heroImage: "/images/isle-hacks-wallhack.webp",
					ctaPrimary: "Acheter The Isle Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "Hack ESP The Isle",
							paragraphs: [
								"The Isle Hacks combine ESP wallhack, radar hack et Isle Aimbot indétectables pour The Isle sur PC Windows. boîtes ESP hack, pins carcasse et distance.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@theislehack.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all The Isle | Ce que ça signifie",
					description: "Unlock all The Isle: recherches unlock-all vs vrais outils ESP et Aimbot. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Unlock all The Isle",
					intro: "The Isle Hacks combine ESP wallhack, radar hack et Isle Aimbot indétectables pour The Isle sur PC Windows. Unlock all The Isle.",
					imageAlt: "The Isle Hacks license features overview",
					galleryTitle: "Unlock all The Isle",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "Acheter The Isle Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all The Isle",
							paragraphs: [
								"The Isle Hacks combine ESP wallhack, radar hack et Isle Aimbot indétectables pour The Isle sur PC Windows. recherches unlock-all vs vrais outils ESP et Aimbot.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@theislehack.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				privacy: {
					title: "Politique de confidentialité | The Isle Hacks",
					description: "Politique de confidentialité pour The Isle Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politique de confidentialité",
					intro: "The Isle Hacks combine ESP wallhack, radar hack et Isle Aimbot indétectables pour The Isle sur PC Windows. Politique de confidentialité pour theislehack.org et les licences The Isle.",
					imageAlt: "The Isle Hacks",
					galleryTitle: "The Isle Hacks",
					heroImage: "/images/isle-hacks-aimbot.webp",
					ctaPrimary: "Contacter le support",
					ctaSecondary: "Lire les conditions",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Informations collectées",
							paragraphs: [
								"The Isle Hacks combine ESP wallhack, radar hack et Isle Aimbot indétectables pour The Isle sur PC Windows. E-mail de contact, références de commande Zadeyo et données de sécurité de base du site.",
								"Les détails de paiement sont traités par le checkout Zadeyo — non stockés sur theislehack.org.",
							],
						},
						{
							h2: "Utilisation des données",
							paragraphs: [
								"The Isle Hacks combine ESP wallhack, radar hack et Isle Aimbot indétectables pour The Isle sur PC Windows. Réponses du support, résolution des commandes et conformité légale si requis.",
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
							],
						},
						{
							h2: "Vos droits",
							paragraphs: [
								"Contactez support@theislehack.org pour le support ou les demandes légales.",
								"E-mail : support@theislehack.org",
							],
						},
					],
				},
				refund: {
					title: "Politique de remboursement | The Isle Hacks",
					description: "Politique de remboursement pour The Isle Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politique de remboursement",
					intro: "The Isle Hacks combine ESP wallhack, radar hack et Isle Aimbot indétectables pour The Isle sur PC Windows. Politique de remboursement pour theislehack.org et les licences The Isle.",
					imageAlt: "The Isle Hacks",
					galleryTitle: "The Isle Hacks",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "Contacter le support",
					ctaSecondary: "Lire la confidentialité",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Livraison numérique",
							paragraphs: [
								"The Isle Hacks combine ESP wallhack, radar hack et Isle Aimbot indétectables pour The Isle sur PC Windows. E-mail de contact, références de commande Zadeyo et données de sécurité de base du site.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "Approbation du remboursement",
							paragraphs: [
								"The Isle Hacks combine ESP wallhack, radar hack et Isle Aimbot indétectables pour The Isle sur PC Windows. Réponses du support, résolution des commandes et conformité légale si requis.",
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
							],
						},
						{
							h2: "Comment demander",
							paragraphs: [
								"Contactez support@theislehack.org pour le support ou les demandes légales.",
								"E-mail : support@theislehack.org",
							],
						},
					],
				},
				terms: {
					title: "Conditions d'utilisation | The Isle Hacks",
					description: "Conditions d'utilisation pour The Isle Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Conditions d'utilisation",
					intro: "The Isle Hacks combine ESP wallhack, radar hack et Isle Aimbot indétectables pour The Isle sur PC Windows. Conditions d'utilisation pour theislehack.org et les licences The Isle.",
					imageAlt: "The Isle Hacks",
					galleryTitle: "The Isle Hacks",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "Contacter le support",
					ctaSecondary: "Lire la confidentialité",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptation des conditions",
							paragraphs: [
								"The Isle Hacks combine ESP wallhack, radar hack et Isle Aimbot indétectables pour The Isle sur PC Windows. E-mail de contact, références de commande Zadeyo et données de sécurité de base du site.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "Avertissement sur les risques",
							paragraphs: [
								"The Isle Hacks combine ESP wallhack, radar hack et Isle Aimbot indétectables pour The Isle sur PC Windows. Réponses du support, résolution des commandes et conformité légale si requis.",
								"Utiliser des cheats peut enfreindre les conditions de l'équipe The Isle — vous assumez tout risque de bannissement.",
							],
						},
						{
							h2: "Modifications",
							paragraphs: [
								"Contactez support@theislehack.org pour le support ou les demandes légales.",
								"E-mail : support@theislehack.org",
							],
						},
					],
				},
			},
		},
		de: {
			ui: {
				nav: {
					home: "Start",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Features",
					pricing: "Preise",
					setup: "Setup",
					updates: "Updates",
					faq: "FAQ",
					buyNow: "Kaufen",
				},
				hero: {
					accent: "Undetected The Isle Hacks",
					accentShort: "The Isle Hacks",
					subtitle: "ESP Wallhack, Radar Hack und Aimbot für The Isle auf Windows PC — Easy Anti-Cheat-Wartung inklusive.",
					subtitleShort: "ESP, Radar & Aimbot für The Isle PC",
					buyNow: "Jetzt kaufen",
					seeFeatures: "Features ansehen",
				},
				trust: {
					status: "Online",
					statusNote: "The Isle Hacks Paket ist live für The Isle auf Windows PC.",
					statusShort: "Live",
					delivery: "Sofortige digitale Lieferung",
					platform: "Windows 10 & 11",
					antiCheat: "Easy Anti-Cheat-Wartung unterstützt",
					antiCheatShort: "Easy Anti-Cheat Support",
				},
				product: {
					title: "The Isle Hacks",
					addToCart: "In den Warenkorb",
					monthly: "Monatlich",
					lifetime: "Lifetime",
					available: "Jetzt verfügbar",
					gameBadge: "The Isle",
					platformBadge: "Windows PC",
					statusBadge: "Undetected Paket",
				},
				reviews: {
					title: "Was Spieler sagen",
					subtitle: "Aktuelles Feedback von The Isle Hacks Käufern",
					outOf: "von 5",
					countLabel: "Bewertungen",
				},
				common: {
					buyNow: "Jetzt kaufen",
					readGuide: "Guide lesen",
					language: "Sprache",
					officialLanguageNote: "Englisch ist die offizielle Sprache. Andere Locales sind für globales SEO übersetzt.",
					relatedPages: "Verwandte Seiten",
				},
				footer: {
					explore: "Entdecken",
					help: "Hilfe & Rechtliches",
					tagline: "Undetected ESP, Wallhack, Radar und Aimbot für The Isle — Checkout über Zadeyo.",
				},
				images: {
					hero: "The Isle Hacks hero — ESP and aimbot overlay in The Isle",
					espWallhack: "Wallhack outlines showing players and wild dinosaurs through walls",
					aimbotCombat: "Soft aim assist overlay during a The Isle session",
					packFight: "The Isle Hacks combat overlay during a pack fight",
					dinoEsp: "Player ESP boxes and distance readouts in a The Isle session",
					headerArt: "Aimbot view and bone priority controls for The Isle",
					hacksPackage: "2D radar threat overlay for The Isle",
					ambushFight: "Aimbot assist during a The Isle hunt",
					battleRoyale: "The Isle Hacks in-session overview for Windows PC",
					survivalIsland: "ESP markers for carcasses and nests in The Isle",
				},
			},
			pages: {
				home: {
					title: "The Isle Hacks 2026 | ESP, Wallhack & Aimbot",
					description: "Undetected The Isle Hacks für The Isle auf PC. ESP Wallhack, Radar Hack und Aimbot mit Easy Anti-Cheat-Wartung. Sofortige digitale Lieferung.",
					h1: "The Isle Hacks — Undetected ESP, Wallhack und Aimbot",
					intro: "Undetected Windows PC Paket für The Isle: ESP Wallhack, Radar und Aimbot mit Easy Anti-Cheat-Wartung nach jedem Patch.",
					imageAlt: "Isle ESP — Spieler-Tags Hack",
					galleryTitle: "The Isle Hacks Galerie — ESP, Aimbot und Wallhack",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "The Isle Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Warum The Isle Hacks 2026 führt",
							paragraphs: [
								"The Isle Hacks bündelt ESP wallhack, radar hack und Isle Aimbot als undetected Paket für The Isle auf Windows PC. Ideal um feindliche Squads in BR und growth run zu lesen.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "ESP Wallhack, Radar und Aimbot in einer Lizenz",
							paragraphs: [
								"The Isle Hacks bündelt ESP wallhack, radar hack und Isle Aimbot als undetected Paket für The Isle auf Windows PC. Eine Lizenz statt separater Tools.",
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
							],
						},
					],
				},
				"isle-esp": {
					title: "Isle ESP | Spielerboxen & Wallhack",
					description: "Isle ESP: Spielerboxen, Kadaver-Marker und Wallhack-Overlays. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Isle ESP",
					intro: "The Isle Hacks bündelt ESP wallhack, radar hack und Isle Aimbot als undetected Paket für The Isle auf Windows PC. Isle ESP.",
					imageAlt: "Isle ESP player boxes and distance readouts in a session",
					galleryTitle: "Isle ESP",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "The Isle Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "Isle ESP",
							paragraphs: [
								"The Isle Hacks bündelt ESP wallhack, radar hack und Isle Aimbot als undetected Paket für The Isle auf Windows PC. Spielerboxen, Kadaver-Marker und Wallhack-Overlays.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@theislehack.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"isle-aimbot": {
					title: "Isle Aimbot | Soft-Aim Steuerung",
					description: "Isle Aimbot: Soft Aim, FOV und Aimbot-Profile pro Spezies. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Isle Aimbot",
					intro: "The Isle Hacks bündelt ESP wallhack, radar hack und Isle Aimbot als undetected Paket für The Isle auf Windows PC. Isle Aimbot.",
					imageAlt: "Isle Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Isle Aimbot",
					heroImage: "/images/isle-hacks-aimbot.webp",
					ctaPrimary: "The Isle Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "Isle Aimbot",
							paragraphs: [
								"The Isle Hacks bündelt ESP wallhack, radar hack und Isle Aimbot als undetected Paket für The Isle auf Windows PC. Soft Aim, FOV und Aimbot-Profile pro Spezies.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@theislehack.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				features: {
					title: "Features | Vollständige Feature-Liste",
					description: "Features: ESP, Soft Aim, Radar-Steuerung. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Features",
					intro: "The Isle Hacks bündelt ESP wallhack, radar hack und Isle Aimbot als undetected Paket für The Isle auf Windows PC. Features.",
					imageAlt: "The Isle Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Features",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "The Isle Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Features",
							paragraphs: [
								"The Isle Hacks bündelt ESP wallhack, radar hack und Isle Aimbot als undetected Paket für The Isle auf Windows PC. ESP, Soft Aim, Radar-Steuerung.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@theislehack.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				pricing: {
					title: "Preise | Monatlich & Lifetime",
					description: "Preise: $35 monatliche oder $150 Lifetime-Lizenzen. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Preise",
					intro: "The Isle Hacks bündelt ESP wallhack, radar hack und Isle Aimbot als undetected Paket für The Isle auf Windows PC. Preise.",
					imageAlt: "The Isle Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Preise",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "The Isle Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Preise",
							paragraphs: [
								"The Isle Hacks bündelt ESP wallhack, radar hack und Isle Aimbot als undetected Paket für The Isle auf Windows PC. $35 monatliche oder $150 Lifetime-Lizenzen.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@theislehack.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				setup: {
					title: "Setup | PC Setup-Anleitung",
					description: "Setup: Windows PC Aktivierung und Erststart-Setup. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Setup",
					intro: "The Isle Hacks bündelt ESP wallhack, radar hack und Isle Aimbot als undetected Paket für The Isle auf Windows PC. Setup.",
					imageAlt: "The Isle Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Setup",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "The Isle Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Setup",
							paragraphs: [
								"The Isle Hacks bündelt ESP wallhack, radar hack und Isle Aimbot als undetected Paket für The Isle auf Windows PC. Windows PC Aktivierung und Erststart-Setup.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@theislehack.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				updates: {
					title: "Updates | Easy Anti-Cheat Wartungslog",
					description: "Updates: Easy Anti-Cheat Patch-Status und Rebuild-Notizen. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Updates",
					intro: "The Isle Hacks bündelt ESP wallhack, radar hack und Isle Aimbot als undetected Paket für The Isle auf Windows PC. Updates.",
					imageAlt: "The Isle Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Updates",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "The Isle Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "Updates",
							paragraphs: [
								"The Isle Hacks bündelt ESP wallhack, radar hack und Isle Aimbot als undetected Paket für The Isle auf Windows PC. Easy Anti-Cheat Patch-Status und Rebuild-Notizen.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@theislehack.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Häufige Fragen",
					description: "FAQ: Fragen zu ESP, Soft Aim, Lieferung und Easy Anti-Cheat. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "FAQ",
					intro: "The Isle Hacks bündelt ESP wallhack, radar hack und Isle Aimbot als undetected Paket für The Isle auf Windows PC. FAQ.",
					imageAlt: "The Isle Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "The Isle Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"The Isle Hacks bündelt ESP wallhack, radar hack und Isle Aimbot als undetected Paket für The Isle auf Windows PC. Fragen zu ESP, Soft Aim, Lieferung und Easy Anti-Cheat.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@theislehack.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				support: {
					title: "Support | Hilfe & Kontakt",
					description: "Support: Bestellhilfe und Lizenz-Support-Kontakt. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Support",
					intro: "The Isle Hacks bündelt ESP wallhack, radar hack und Isle Aimbot als undetected Paket für The Isle auf Windows PC. Support.",
					imageAlt: "The Isle Hacks support page for license and setup help",
					galleryTitle: "Support",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "The Isle Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Support",
							paragraphs: [
								"The Isle Hacks bündelt ESP wallhack, radar hack und Isle Aimbot als undetected Paket für The Isle auf Windows PC. Bestellhilfe und Lizenz-Support-Kontakt.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@theislehack.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected Cheats | Undetected Status",
					description: "Undetected Cheats: Undetected-Wartung nach Easy Anti-Cheat Patches. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Undetected Cheats",
					intro: "The Isle Hacks bündelt ESP wallhack, radar hack und Isle Aimbot als undetected Paket für The Isle auf Windows PC. Undetected Cheats.",
					imageAlt: "The Isle Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected Cheats",
					heroImage: "/images/isle-hacks-wallhack.webp",
					ctaPrimary: "The Isle Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "Undetected Cheats",
							paragraphs: [
								"The Isle Hacks bündelt ESP wallhack, radar hack und Isle Aimbot als undetected Paket für The Isle auf Windows PC. Undetected-Wartung nach Easy Anti-Cheat Patches.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@theislehack.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				wallhack: {
					title: "The Isle Wallhack | ESP Sichtbarkeit",
					description: "The Isle Wallhack: Wallhack ESP für Spieler, Kadaver und Entfernung. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "The Isle Wallhack",
					intro: "The Isle Hacks bündelt ESP wallhack, radar hack und Isle Aimbot als undetected Paket für The Isle auf Windows PC. The Isle Wallhack.",
					imageAlt: "isle wallhack visibility through walls in a session",
					galleryTitle: "The Isle Wallhack",
					heroImage: "/images/isle-hacks-wallhack.webp",
					ctaPrimary: "The Isle Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "The Isle Wallhack",
							paragraphs: [
								"The Isle Hacks bündelt ESP wallhack, radar hack und Isle Aimbot als undetected Paket für The Isle auf Windows PC. Wallhack ESP für Spieler, Kadaver und Entfernung.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@theislehack.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Bedrohungsradar",
					description: "Radar Hack: 2D-Radar-Hinweise für Flanken und Rotationen. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "The Isle Hacks bündelt ESP wallhack, radar hack und Isle Aimbot als undetected Paket für The Isle auf Windows PC. Radar Hack.",
					imageAlt: "The Isle 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "The Isle Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"The Isle Hacks bündelt ESP wallhack, radar hack und Isle Aimbot als undetected Paket für The Isle auf Windows PC. 2D-Radar-Hinweise für Flanken und Rotationen.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@theislehack.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				eac: {
					title: "Easy Anti-Cheat Bypass | Patch-Wartung",
					description: "Easy Anti-Cheat Bypass: wie Easy Anti-Cheat Updates für The Isle Hacks gehandhabt werden. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Easy Anti-Cheat Bypass",
					intro: "The Isle Hacks bündelt ESP wallhack, radar hack und Isle Aimbot als undetected Paket für The Isle auf Windows PC. Easy Anti-Cheat Bypass.",
					imageAlt: "The Isle Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Easy Anti-Cheat Bypass",
					heroImage: "/images/isle-hacks-aimbot.webp",
					ctaPrimary: "The Isle Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Easy Anti-Cheat Bypass",
							paragraphs: [
								"The Isle Hacks bündelt ESP wallhack, radar hack und Isle Aimbot als undetected Paket für The Isle auf Windows PC. wie Easy Anti-Cheat Updates für The Isle Hacks gehandhabt werden.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@theislehack.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "The Isle Hacks 2026 | Käuferleitfaden",
					description: "The Isle Hacks 2026: 2026 the isle hacks Checkliste vor dem Checkout. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "The Isle Hacks 2026",
					intro: "The Isle Hacks bündelt ESP wallhack, radar hack und Isle Aimbot als undetected Paket für The Isle auf Windows PC. The Isle Hacks 2026.",
					imageAlt: "The Isle Hacks product overview for The Isle",
					galleryTitle: "The Isle Hacks 2026",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "The Isle Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "The Isle Hacks 2026",
							paragraphs: [
								"The Isle Hacks bündelt ESP wallhack, radar hack und Isle Aimbot als undetected Paket für The Isle auf Windows PC. 2026 the isle hacks Checkliste vor dem Checkout.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@theislehack.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				hacks: {
					title: "The Isle Hacks | ESP Aimbot Guide",
					description: "The Isle Hacks: The Isle Hacks Säule für ESP und Aimbot. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "The Isle Hacks",
					intro: "The Isle Hacks bündelt ESP wallhack, radar hack und Isle Aimbot als undetected Paket für The Isle auf Windows PC. The Isle Hacks.",
					imageAlt: "The Isle Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "The Isle Hacks",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "The Isle Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "The Isle Hacks",
							paragraphs: [
								"The Isle Hacks bündelt ESP wallhack, radar hack und Isle Aimbot als undetected Paket für The Isle auf Windows PC. The Isle Hacks Säule für ESP und Aimbot.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@theislehack.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"cheat-download": {
					title: "The Isle Cheat Download | Sofortzugang",
					description: "The Isle Cheat Download: digitaler Lizenz-Download nach Zahlung. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "The Isle Cheat Download",
					intro: "The Isle Hacks bündelt ESP wallhack, radar hack und Isle Aimbot als undetected Paket für The Isle auf Windows PC. The Isle Cheat Download.",
					imageAlt: "The Isle Hacks download and install delivery flow",
					galleryTitle: "The Isle Cheat Download",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "The Isle Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "The Isle Cheat Download",
							paragraphs: [
								"The Isle Hacks bündelt ESP wallhack, radar hack und Isle Aimbot als undetected Paket für The Isle auf Windows PC. digitaler Lizenz-Download nach Zahlung.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@theislehack.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"mod-menu": {
					title: "The Isle Mod-Menü | In-Game Toggles",
					description: "The Isle Mod-Menü: In-Client ESP- und Soft-Aim-Toggles. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "The Isle Mod-Menü",
					intro: "The Isle Hacks bündelt ESP wallhack, radar hack und Isle Aimbot als undetected Paket für The Isle auf Windows PC. The Isle Mod-Menü.",
					imageAlt: "The Isle Hacks in-game menu controls",
					galleryTitle: "The Isle Mod-Menü",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "The Isle Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "The Isle Mod-Menü",
							paragraphs: [
								"The Isle Hacks bündelt ESP wallhack, radar hack und Isle Aimbot als undetected Paket für The Isle auf Windows PC. In-Client ESP- und Soft-Aim-Toggles.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@theislehack.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"soft-aim": {
					title: "The Isle Soft Aim | Soft-Aim Einstellungen",
					description: "The Isle Soft Aim: sanfte Soft-Aim-Einstellungen für Windows PC. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "The Isle Soft Aim",
					intro: "The Isle Hacks bündelt ESP wallhack, radar hack und Isle Aimbot als undetected Paket für The Isle auf Windows PC. The Isle Soft Aim.",
					imageAlt: "The Isle soft aim FOV and smoothness settings",
					galleryTitle: "The Isle Soft Aim",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "The Isle Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/isle-aimbot/",
					sections: [
						{
							h2: "The Isle Soft Aim",
							paragraphs: [
								"The Isle Hacks bündelt ESP wallhack, radar hack und Isle Aimbot als undetected Paket für The Isle auf Windows PC. sanfte Soft-Aim-Einstellungen für Windows PC.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@theislehack.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Beste The Isle Hacks | Käufer-Checkliste",
					description: "Beste The Isle Hacks: was vor dem Kauf der isle hacks verglichen werden sollte. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Beste The Isle Hacks",
					intro: "The Isle Hacks bündelt ESP wallhack, radar hack und Isle Aimbot als undetected Paket für The Isle auf Windows PC. Beste The Isle Hacks.",
					imageAlt: "The Isle Hacks overview for The Isle on PC",
					galleryTitle: "Beste The Isle Hacks",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "The Isle Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Beste The Isle Hacks",
							paragraphs: [
								"The Isle Hacks bündelt ESP wallhack, radar hack und Isle Aimbot als undetected Paket für The Isle auf Windows PC. was vor dem Kauf der isle hacks verglichen werden sollte.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@theislehack.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Isle Aimbot Hack | Soft-Aim Assist",
					description: "Isle Aimbot Hack: undetected Aimbot-Hack-Assist für The Isle. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Isle Aimbot Hack",
					intro: "The Isle Hacks bündelt ESP wallhack, radar hack und Isle Aimbot als undetected Paket für The Isle auf Windows PC. Isle Aimbot Hack.",
					imageAlt: "Isle Aimbot hack controls and bone priority",
					galleryTitle: "Isle Aimbot Hack",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "The Isle Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/isle-aimbot/",
					sections: [
						{
							h2: "Isle Aimbot Hack",
							paragraphs: [
								"The Isle Hacks bündelt ESP wallhack, radar hack und Isle Aimbot als undetected Paket für The Isle auf Windows PC. undetected Aimbot-Hack-Assist für The Isle.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@theislehack.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Isle ESP Hack | Boxen & Loot",
					description: "Isle ESP Hack: ESP-Hack-Boxen, Kadaver-Pins und Entfernung. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Isle ESP Hack",
					intro: "The Isle Hacks bündelt ESP wallhack, radar hack und Isle Aimbot als undetected Paket für The Isle auf Windows PC. Isle ESP Hack.",
					imageAlt: "Isle ESP hack boxes and carcass markers",
					galleryTitle: "Isle ESP Hack",
					heroImage: "/images/isle-hacks-wallhack.webp",
					ctaPrimary: "The Isle Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "Isle ESP Hack",
							paragraphs: [
								"The Isle Hacks bündelt ESP wallhack, radar hack und Isle Aimbot als undetected Paket für The Isle auf Windows PC. ESP-Hack-Boxen, Kadaver-Pins und Entfernung.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@theislehack.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"unlock-all": {
					title: "The Isle Unlock All | Was es bedeutet",
					description: "The Isle Unlock All: unlock-all Suchen vs echte ESP- und Aimbot-Tools. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "The Isle Unlock All",
					intro: "The Isle Hacks bündelt ESP wallhack, radar hack und Isle Aimbot als undetected Paket für The Isle auf Windows PC. The Isle Unlock All.",
					imageAlt: "The Isle Hacks license features overview",
					galleryTitle: "The Isle Unlock All",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "The Isle Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "The Isle Unlock All",
							paragraphs: [
								"The Isle Hacks bündelt ESP wallhack, radar hack und Isle Aimbot als undetected Paket für The Isle auf Windows PC. unlock-all Suchen vs echte ESP- und Aimbot-Tools.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@theislehack.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				privacy: {
					title: "Datenschutz | The Isle Hacks",
					description: "Datenschutz für The Isle Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Datenschutz",
					intro: "The Isle Hacks bündelt ESP wallhack, radar hack und Isle Aimbot als undetected Paket für The Isle auf Windows PC. Datenschutz für theislehack.org und The Isle-Lizenzen.",
					imageAlt: "The Isle Hacks",
					galleryTitle: "The Isle Hacks",
					heroImage: "/images/isle-hacks-aimbot.webp",
					ctaPrimary: "Support per E-Mail",
					ctaSecondary: "Nutzungsbedingungen",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Erhobene Daten",
							paragraphs: [
								"The Isle Hacks bündelt ESP wallhack, radar hack und Isle Aimbot als undetected Paket für The Isle auf Windows PC. Kontakt-E-Mail, Zadeyo-Bestellreferenzen und grundlegende Sicherheitsdaten der Website.",
								"Zahlungsdaten werden über Zadeyo-Checkout verarbeitet — nicht auf theislehack.org gespeichert.",
							],
						},
						{
							h2: "Datennutzung",
							paragraphs: [
								"The Isle Hacks bündelt ESP wallhack, radar hack und Isle Aimbot als undetected Paket für The Isle auf Windows PC. Support-Antworten, Auftragsabwicklung und rechtliche Compliance bei Bedarf.",
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
							],
						},
						{
							h2: "Ihre Rechte",
							paragraphs: [
								"support@theislehack.org für Support und rechtliche Anfragen.",
								"E-Mail: support@theislehack.org",
							],
						},
					],
				},
				refund: {
					title: "Rückerstattung | The Isle Hacks",
					description: "Rückerstattung für The Isle Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Rückerstattung",
					intro: "The Isle Hacks bündelt ESP wallhack, radar hack und Isle Aimbot als undetected Paket für The Isle auf Windows PC. Rückerstattung für theislehack.org und The Isle-Lizenzen.",
					imageAlt: "The Isle Hacks",
					galleryTitle: "The Isle Hacks",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "Support per E-Mail",
					ctaSecondary: "Datenschutz lesen",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digitale Lieferung",
							paragraphs: [
								"The Isle Hacks bündelt ESP wallhack, radar hack und Isle Aimbot als undetected Paket für The Isle auf Windows PC. Kontakt-E-Mail, Zadeyo-Bestellreferenzen und grundlegende Sicherheitsdaten der Website.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "Rückerstattungsgenehmigung",
							paragraphs: [
								"The Isle Hacks bündelt ESP wallhack, radar hack und Isle Aimbot als undetected Paket für The Isle auf Windows PC. Support-Antworten, Auftragsabwicklung und rechtliche Compliance bei Bedarf.",
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
							],
						},
						{
							h2: "So beantragen",
							paragraphs: [
								"support@theislehack.org für Support und rechtliche Anfragen.",
								"E-Mail: support@theislehack.org",
							],
						},
					],
				},
				terms: {
					title: "Nutzungsbedingungen | The Isle Hacks",
					description: "Nutzungsbedingungen für The Isle Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Nutzungsbedingungen",
					intro: "The Isle Hacks bündelt ESP wallhack, radar hack und Isle Aimbot als undetected Paket für The Isle auf Windows PC. Nutzungsbedingungen für theislehack.org und The Isle-Lizenzen.",
					imageAlt: "The Isle Hacks",
					galleryTitle: "The Isle Hacks",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "Support per E-Mail",
					ctaSecondary: "Datenschutz lesen",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Annahme der Bedingungen",
							paragraphs: [
								"The Isle Hacks bündelt ESP wallhack, radar hack und Isle Aimbot als undetected Paket für The Isle auf Windows PC. Kontakt-E-Mail, Zadeyo-Bestellreferenzen und grundlegende Sicherheitsdaten der Website.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "Risikohinweis",
							paragraphs: [
								"The Isle Hacks bündelt ESP wallhack, radar hack und Isle Aimbot als undetected Paket für The Isle auf Windows PC. Support-Antworten, Auftragsabwicklung und rechtliche Compliance bei Bedarf.",
								"Cheats können gegen die Nutzungsbedingungen des The Isle Teams verstoßen — Sie tragen das volle Ban-Risiko.",
							],
						},
						{
							h2: "Richtlinienänderungen",
							paragraphs: [
								"support@theislehack.org für Support und rechtliche Anfragen.",
								"E-Mail: support@theislehack.org",
							],
						},
					],
				},
			},
		},
		pt: {
			ui: {
				nav: {
					home: "Início",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Recursos",
					pricing: "Preços",
					setup: "Instalação",
					updates: "Atualizações",
					faq: "FAQ",
					buyNow: "Comprar",
				},
				hero: {
					accent: "Cheats The Isle indetectáveis",
					accentShort: "The Isle Hacks",
					subtitle: "ESP wallhack, radar hack e Aimbot para The Isle no PC Windows — manutenção Easy Anti-Cheat incluída.",
					subtitleShort: "ESP, radar e Aimbot para The Isle PC",
					buyNow: "Comprar agora",
					seeFeatures: "Ver recursos",
				},
				trust: {
					status: "Online",
					statusNote: "O pacote The Isle Hacks está ativo para The Isle no PC Windows.",
					statusShort: "Ativo",
					delivery: "Entrega digital instantânea",
					platform: "Windows 10 e 11",
					antiCheat: "Manutenção Easy Anti-Cheat incluída",
					antiCheatShort: "Easy Anti-Cheat incluído",
				},
				product: {
					title: "The Isle Hacks",
					addToCart: "Adicionar ao carrinho",
					monthly: "Mensal",
					lifetime: "Vitalício",
					available: "Disponível agora",
					gameBadge: "The Isle",
					platformBadge: "PC Windows",
					statusBadge: "Pacote indetectável",
				},
				reviews: {
					title: "O que os jogadores dizem",
					subtitle: "Feedback recente de compradores The Isle Hacks",
					outOf: "de 5",
					countLabel: "avaliações",
				},
				common: {
					buyNow: "Comprar agora",
					readGuide: "Ler guia",
					language: "Idioma",
					officialLanguageNote: "Inglês é o idioma oficial. Outros idiomas são traduzidos para SEO global.",
					relatedPages: "Páginas relacionadas",
				},
				footer: {
					explore: "Explorar",
					help: "Ajuda e legal",
					tagline: "ESP, wallhack, radar e Aimbot indetectáveis para The Isle — checkout via Zadeyo.",
				},
				images: {
					hero: "The Isle Hacks hero — ESP and aimbot overlay in The Isle",
					espWallhack: "Wallhack outlines showing players and wild dinosaurs through walls",
					aimbotCombat: "Soft aim assist overlay during a The Isle session",
					packFight: "The Isle Hacks combat overlay during a pack fight",
					dinoEsp: "Player ESP boxes and distance readouts in a The Isle session",
					headerArt: "Aimbot view and bone priority controls for The Isle",
					hacksPackage: "2D radar threat overlay for The Isle",
					ambushFight: "Aimbot assist during a The Isle hunt",
					battleRoyale: "The Isle Hacks in-session overview for Windows PC",
					survivalIsland: "ESP markers for carcasses and nests in The Isle",
				},
			},
			pages: {
				home: {
					title: "The Isle Hacks 2026 | ESP, Wallhack e Aimbot",
					description: "Cheats The Isle indetectáveis para The Isle no PC. ESP wallhack, radar hack e Aimbot com manutenção Easy Anti-Cheat. Entrega digital instantánea.",
					h1: "The Isle Hacks — ESP, Wallhack e Aimbot indetectáveis",
					intro: "Pacote undetected para The Isle no Windows PC: ESP wallhack, radar e Aimbot com manutenção Easy Anti-Cheat após cada patch.",
					imageAlt: "Isle ESP player tags hack",
					galleryTitle: "Galeria The Isle Hacks — ESP, Aimbot e wallhack",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "Comprar The Isle Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Por que escolher The Isle Hacks em 2026",
							paragraphs: [
								"The Isle Hacks reúne ESP wallhack, radar hack e Isle Aimbot indetectáveis para The Isle no PC Windows. Ideal para ler epackrões inimigos em BR e growth run.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar e Aimbot numa licença",
							paragraphs: [
								"The Isle Hacks reúne ESP wallhack, radar hack e Isle Aimbot indetectáveis para The Isle no PC Windows. Uma licença em vez de ferramentas separadas.",
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
							],
						},
					],
				},
				"isle-esp": {
					title: "ESP The Isle | Caixas de jogador e wallhack",
					description: "ESP The Isle: caixas de jogador, marcadores de carcaça e overlays wallhack. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "ESP The Isle",
					intro: "The Isle Hacks reúne ESP wallhack, radar hack e Isle Aimbot indetectáveis para The Isle no PC Windows. ESP The Isle.",
					imageAlt: "Isle ESP player boxes and distance readouts in a session",
					galleryTitle: "ESP The Isle",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "Comprar The Isle Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "ESP The Isle",
							paragraphs: [
								"The Isle Hacks reúne ESP wallhack, radar hack e Isle Aimbot indetectáveis para The Isle no PC Windows. caixas de jogador, marcadores de carcaça e overlays wallhack.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@theislehack.org para suporte ou questões legais.",
							],
						},
					],
				},
				"isle-aimbot": {
					title: "Aimbot The Isle | Controles soft aim",
					description: "Aimbot The Isle: soft aim, FOV e perfis Aimbot por espécie. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Aimbot The Isle",
					intro: "The Isle Hacks reúne ESP wallhack, radar hack e Isle Aimbot indetectáveis para The Isle no PC Windows. Aimbot The Isle.",
					imageAlt: "Isle Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot The Isle",
					heroImage: "/images/isle-hacks-aimbot.webp",
					ctaPrimary: "Comprar The Isle Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "Aimbot The Isle",
							paragraphs: [
								"The Isle Hacks reúne ESP wallhack, radar hack e Isle Aimbot indetectáveis para The Isle no PC Windows. soft aim, FOV e perfis Aimbot por espécie.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@theislehack.org para suporte ou questões legais.",
							],
						},
					],
				},
				features: {
					title: "Recursos | Lista completa de recursos",
					description: "Recursos: ESP, soft aim, controles de radar. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Recursos",
					intro: "The Isle Hacks reúne ESP wallhack, radar hack e Isle Aimbot indetectáveis para The Isle no PC Windows. Recursos.",
					imageAlt: "The Isle Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Recursos",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "Comprar The Isle Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Recursos",
							paragraphs: [
								"The Isle Hacks reúne ESP wallhack, radar hack e Isle Aimbot indetectáveis para The Isle no PC Windows. ESP, soft aim, controles de radar.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@theislehack.org para suporte ou questões legais.",
							],
						},
					],
				},
				pricing: {
					title: "Preços | Mensal e vitalício",
					description: "Preços: licenças de $35 mensais ou $150 vitalícias. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Preços",
					intro: "The Isle Hacks reúne ESP wallhack, radar hack e Isle Aimbot indetectáveis para The Isle no PC Windows. Preços.",
					imageAlt: "The Isle Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Preços",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "Comprar The Isle Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Preços",
							paragraphs: [
								"The Isle Hacks reúne ESP wallhack, radar hack e Isle Aimbot indetectáveis para The Isle no PC Windows. licenças de $35 mensais ou $150 vitalícias.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@theislehack.org para suporte ou questões legais.",
							],
						},
					],
				},
				setup: {
					title: "Instalação | Guia de instalação PC",
					description: "Instalação: ativação no Windows PC e configuração do primeiro lançamento. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Instalação",
					intro: "The Isle Hacks reúne ESP wallhack, radar hack e Isle Aimbot indetectáveis para The Isle no PC Windows. Instalação.",
					imageAlt: "The Isle Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Instalação",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "Comprar The Isle Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalação",
							paragraphs: [
								"The Isle Hacks reúne ESP wallhack, radar hack e Isle Aimbot indetectáveis para The Isle no PC Windows. ativação no Windows PC e configuração do primeiro lançamento.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@theislehack.org para suporte ou questões legais.",
							],
						},
					],
				},
				updates: {
					title: "Atualizações | Registro Easy Anti-Cheat",
					description: "Atualizações: status de patches Easy Anti-Cheat e notas de rebuild. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Atualizações",
					intro: "The Isle Hacks reúne ESP wallhack, radar hack e Isle Aimbot indetectáveis para The Isle no PC Windows. Atualizações.",
					imageAlt: "The Isle Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Atualizações",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "Comprar The Isle Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "Atualizações",
							paragraphs: [
								"The Isle Hacks reúne ESP wallhack, radar hack e Isle Aimbot indetectáveis para The Isle no PC Windows. status de patches Easy Anti-Cheat e notas de rebuild.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@theislehack.org para suporte ou questões legais.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Perguntas frequentes",
					description: "FAQ: perguntas sobre ESP, soft aim, entrega e Easy Anti-Cheat. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "FAQ",
					intro: "The Isle Hacks reúne ESP wallhack, radar hack e Isle Aimbot indetectáveis para The Isle no PC Windows. FAQ.",
					imageAlt: "The Isle Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "Comprar The Isle Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"The Isle Hacks reúne ESP wallhack, radar hack e Isle Aimbot indetectáveis para The Isle no PC Windows. perguntas sobre ESP, soft aim, entrega e Easy Anti-Cheat.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@theislehack.org para suporte ou questões legais.",
							],
						},
					],
				},
				support: {
					title: "Suporte | Ajuda e contato",
					description: "Suporte: ajuda com pedidos e contato de suporte de licenças. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Suporte",
					intro: "The Isle Hacks reúne ESP wallhack, radar hack e Isle Aimbot indetectáveis para The Isle no PC Windows. Suporte.",
					imageAlt: "The Isle Hacks support page for license and setup help",
					galleryTitle: "Suporte",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "Comprar The Isle Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Suporte",
							paragraphs: [
								"The Isle Hacks reúne ESP wallhack, radar hack e Isle Aimbot indetectáveis para The Isle no PC Windows. ajuda com pedidos e contato de suporte de licenças.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@theislehack.org para suporte ou questões legais.",
							],
						},
					],
				},
				undetected: {
					title: "Cheats indetectáveis | Status indetectável",
					description: "Cheats indetectáveis: manutenção undetected após patches Easy Anti-Cheat. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Cheats indetectáveis",
					intro: "The Isle Hacks reúne ESP wallhack, radar hack e Isle Aimbot indetectáveis para The Isle no PC Windows. Cheats indetectáveis.",
					imageAlt: "The Isle Hacks undetected status overview for Windows PC",
					galleryTitle: "Cheats indetectáveis",
					heroImage: "/images/isle-hacks-wallhack.webp",
					ctaPrimary: "Comprar The Isle Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "Cheats indetectáveis",
							paragraphs: [
								"The Isle Hacks reúne ESP wallhack, radar hack e Isle Aimbot indetectáveis para The Isle no PC Windows. manutenção undetected após patches Easy Anti-Cheat.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@theislehack.org para suporte ou questões legais.",
							],
						},
					],
				},
				wallhack: {
					title: "The Isle Wallhack | Visibilidade ESP",
					description: "The Isle Wallhack: wallhack ESP para jogadores, carcaças e distância. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "The Isle Wallhack",
					intro: "The Isle Hacks reúne ESP wallhack, radar hack e Isle Aimbot indetectáveis para The Isle no PC Windows. The Isle Wallhack.",
					imageAlt: "isle wallhack visibility through walls in a session",
					galleryTitle: "The Isle Wallhack",
					heroImage: "/images/isle-hacks-wallhack.webp",
					ctaPrimary: "Comprar The Isle Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "The Isle Wallhack",
							paragraphs: [
								"The Isle Hacks reúne ESP wallhack, radar hack e Isle Aimbot indetectáveis para The Isle no PC Windows. wallhack ESP para jogadores, carcaças e distância.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@theislehack.org para suporte ou questões legais.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | Radar 2D de ameaças",
					description: "Radar hack: sinais de radar 2D para flancos e rotações. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Radar hack",
					intro: "The Isle Hacks reúne ESP wallhack, radar hack e Isle Aimbot indetectáveis para The Isle no PC Windows. Radar hack.",
					imageAlt: "The Isle 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "Comprar The Isle Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"The Isle Hacks reúne ESP wallhack, radar hack e Isle Aimbot indetectáveis para The Isle no PC Windows. sinais de radar 2D para flancos e rotações.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@theislehack.org para suporte ou questões legais.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Manutenção de patches",
					description: "Bypass Easy Anti-Cheat: como as atualizações Easy Anti-Cheat são tratadas para The Isle hacks. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "The Isle Hacks reúne ESP wallhack, radar hack e Isle Aimbot indetectáveis para The Isle no PC Windows. Bypass Easy Anti-Cheat.",
					imageAlt: "The Isle Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/isle-hacks-aimbot.webp",
					ctaPrimary: "Comprar The Isle Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"The Isle Hacks reúne ESP wallhack, radar hack e Isle Aimbot indetectáveis para The Isle no PC Windows. como as atualizações Easy Anti-Cheat são tratadas para The Isle hacks.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@theislehack.org para suporte ou questões legais.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheats The Isle 2026 | Guia do comprador",
					description: "Cheats The Isle 2026: checklist de the isle hacks 2026 antes do checkout. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Cheats The Isle 2026",
					intro: "The Isle Hacks reúne ESP wallhack, radar hack e Isle Aimbot indetectáveis para The Isle no PC Windows. Cheats The Isle 2026.",
					imageAlt: "The Isle Hacks product overview for The Isle",
					galleryTitle: "Cheats The Isle 2026",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "Comprar The Isle Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "Cheats The Isle 2026",
							paragraphs: [
								"The Isle Hacks reúne ESP wallhack, radar hack e Isle Aimbot indetectáveis para The Isle no PC Windows. checklist de the isle hacks 2026 antes do checkout.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@theislehack.org para suporte ou questões legais.",
							],
						},
					],
				},
				hacks: {
					title: "Cheats The Isle | Guia ESP e Aimbot",
					description: "Cheats The Isle: pilar The Isle Hacks para ESP e Aimbot. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Cheats The Isle",
					intro: "The Isle Hacks reúne ESP wallhack, radar hack e Isle Aimbot indetectáveis para The Isle no PC Windows. Cheats The Isle.",
					imageAlt: "The Isle Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Cheats The Isle",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "Comprar The Isle Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheats The Isle",
							paragraphs: [
								"The Isle Hacks reúne ESP wallhack, radar hack e Isle Aimbot indetectáveis para The Isle no PC Windows. pilar The Isle Hacks para ESP e Aimbot.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@theislehack.org para suporte ou questões legais.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Download The Isle Hacks | Acesso instantâneo",
					description: "Download The Isle Hacks: download de licença digital após pagamento. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Download The Isle Hacks",
					intro: "The Isle Hacks reúne ESP wallhack, radar hack e Isle Aimbot indetectáveis para The Isle no PC Windows. Download The Isle Hacks.",
					imageAlt: "The Isle Hacks download and install delivery flow",
					galleryTitle: "Download The Isle Hacks",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "Comprar The Isle Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Download The Isle Hacks",
							paragraphs: [
								"The Isle Hacks reúne ESP wallhack, radar hack e Isle Aimbot indetectáveis para The Isle no PC Windows. download de licença digital após pagamento.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@theislehack.org para suporte ou questões legais.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Menu mod The Isle | Controles in-game",
					description: "Menu mod The Isle: toggles de ESP e soft aim no cliente. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Menu mod The Isle",
					intro: "The Isle Hacks reúne ESP wallhack, radar hack e Isle Aimbot indetectáveis para The Isle no PC Windows. Menu mod The Isle.",
					imageAlt: "The Isle Hacks in-game menu controls",
					galleryTitle: "Menu mod The Isle",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "Comprar The Isle Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menu mod The Isle",
							paragraphs: [
								"The Isle Hacks reúne ESP wallhack, radar hack e Isle Aimbot indetectáveis para The Isle no PC Windows. toggles de ESP e soft aim no cliente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@theislehack.org para suporte ou questões legais.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim The Isle | Ajustes soft aim",
					description: "Soft aim The Isle: ajustes suaves de soft aim para Windows PC. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Soft aim The Isle",
					intro: "The Isle Hacks reúne ESP wallhack, radar hack e Isle Aimbot indetectáveis para The Isle no PC Windows. Soft aim The Isle.",
					imageAlt: "The Isle soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim The Isle",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "Comprar The Isle Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/isle-aimbot/",
					sections: [
						{
							h2: "Soft aim The Isle",
							paragraphs: [
								"The Isle Hacks reúne ESP wallhack, radar hack e Isle Aimbot indetectáveis para The Isle no PC Windows. ajustes suaves de soft aim para Windows PC.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@theislehack.org para suporte ou questões legais.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Melhores cheats The Isle | Checklist do comprador",
					description: "Melhores cheats The Isle: o que comparar antes de comprar the isle hacks. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Melhores cheats The Isle",
					intro: "The Isle Hacks reúne ESP wallhack, radar hack e Isle Aimbot indetectáveis para The Isle no PC Windows. Melhores cheats The Isle.",
					imageAlt: "The Isle Hacks overview for The Isle on PC",
					galleryTitle: "Melhores cheats The Isle",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "Comprar The Isle Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Melhores cheats The Isle",
							paragraphs: [
								"The Isle Hacks reúne ESP wallhack, radar hack e Isle Aimbot indetectáveis para The Isle no PC Windows. o que comparar antes de comprar the isle hacks.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@theislehack.org para suporte ou questões legais.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot The Isle | Assistência soft aim",
					description: "Hack aimbot The Isle: assistência undetected de hack Aimbot para The Isle. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Hack aimbot The Isle",
					intro: "The Isle Hacks reúne ESP wallhack, radar hack e Isle Aimbot indetectáveis para The Isle no PC Windows. Hack aimbot The Isle.",
					imageAlt: "Isle Aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot The Isle",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "Comprar The Isle Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/isle-aimbot/",
					sections: [
						{
							h2: "Hack aimbot The Isle",
							paragraphs: [
								"The Isle Hacks reúne ESP wallhack, radar hack e Isle Aimbot indetectáveis para The Isle no PC Windows. assistência undetected de hack Aimbot para The Isle.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@theislehack.org para suporte ou questões legais.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP The Isle | Caixas e carcasses",
					description: "Hack ESP The Isle: caixas ESP hack, pins de carcaça e distância. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Hack ESP The Isle",
					intro: "The Isle Hacks reúne ESP wallhack, radar hack e Isle Aimbot indetectáveis para The Isle no PC Windows. Hack ESP The Isle.",
					imageAlt: "Isle ESP hack boxes and carcass markers",
					galleryTitle: "Hack ESP The Isle",
					heroImage: "/images/isle-hacks-wallhack.webp",
					ctaPrimary: "Comprar The Isle Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "Hack ESP The Isle",
							paragraphs: [
								"The Isle Hacks reúne ESP wallhack, radar hack e Isle Aimbot indetectáveis para The Isle no PC Windows. caixas ESP hack, pins de carcaça e distância.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@theislehack.org para suporte ou questões legais.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all The Isle | O que significa",
					description: "Unlock all The Isle: buscas unlock-all vs ferramentas reais ESP e Aimbot. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Unlock all The Isle",
					intro: "The Isle Hacks reúne ESP wallhack, radar hack e Isle Aimbot indetectáveis para The Isle no PC Windows. Unlock all The Isle.",
					imageAlt: "The Isle Hacks license features overview",
					galleryTitle: "Unlock all The Isle",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "Comprar The Isle Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all The Isle",
							paragraphs: [
								"The Isle Hacks reúne ESP wallhack, radar hack e Isle Aimbot indetectáveis para The Isle no PC Windows. buscas unlock-all vs ferramentas reais ESP e Aimbot.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@theislehack.org para suporte ou questões legais.",
							],
						},
					],
				},
				privacy: {
					title: "Política de privacidade | The Isle Hacks",
					description: "Política de privacidade para The Isle Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Política de privacidade",
					intro: "The Isle Hacks reúne ESP wallhack, radar hack e Isle Aimbot indetectáveis para The Isle no PC Windows. Política de privacidade para theislehack.org e licenças The Isle.",
					imageAlt: "The Isle Hacks",
					galleryTitle: "The Isle Hacks",
					heroImage: "/images/isle-hacks-aimbot.webp",
					ctaPrimary: "E-mail ao suporte",
					ctaSecondary: "Ler termos",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Informações que coletamos",
							paragraphs: [
								"The Isle Hacks reúne ESP wallhack, radar hack e Isle Aimbot indetectáveis para The Isle no PC Windows. E-mail de contato, referências de pedido Zadeyo e dados básicos de segurança do site.",
								"Detalhes de pagamento são processados pelo checkout Zadeyo — não armazenados em theislehack.org.",
							],
						},
						{
							h2: "Como usamos os dados",
							paragraphs: [
								"The Isle Hacks reúne ESP wallhack, radar hack e Isle Aimbot indetectáveis para The Isle no PC Windows. Respostas de suporte, resolução de pedidos e conformidade legal quando necessário.",
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
							],
						},
						{
							h2: "Seus direitos",
							paragraphs: [
								"Contacte support@theislehack.org para suporte ou questões legais.",
								"E-mail: support@theislehack.org",
							],
						},
					],
				},
				refund: {
					title: "Política de reembolso | The Isle Hacks",
					description: "Política de reembolso para The Isle Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Política de reembolso",
					intro: "The Isle Hacks reúne ESP wallhack, radar hack e Isle Aimbot indetectáveis para The Isle no PC Windows. Política de reembolso para theislehack.org e licenças The Isle.",
					imageAlt: "The Isle Hacks",
					galleryTitle: "The Isle Hacks",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "E-mail ao suporte",
					ctaSecondary: "Ler privacidade",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Entrega digital",
							paragraphs: [
								"The Isle Hacks reúne ESP wallhack, radar hack e Isle Aimbot indetectáveis para The Isle no PC Windows. E-mail de contato, referências de pedido Zadeyo e dados básicos de segurança do site.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "Aprovação de reembolso",
							paragraphs: [
								"The Isle Hacks reúne ESP wallhack, radar hack e Isle Aimbot indetectáveis para The Isle no PC Windows. Respostas de suporte, resolução de pedidos e conformidade legal quando necessário.",
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
							],
						},
						{
							h2: "Como solicitar",
							paragraphs: [
								"Contacte support@theislehack.org para suporte ou questões legais.",
								"E-mail: support@theislehack.org",
							],
						},
					],
				},
				terms: {
					title: "Termos de uso | The Isle Hacks",
					description: "Termos de uso para The Isle Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Termos de uso",
					intro: "The Isle Hacks reúne ESP wallhack, radar hack e Isle Aimbot indetectáveis para The Isle no PC Windows. Termos de uso para theislehack.org e licenças The Isle.",
					imageAlt: "The Isle Hacks",
					galleryTitle: "The Isle Hacks",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "E-mail ao suporte",
					ctaSecondary: "Ler privacidade",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Aceitação dos termos",
							paragraphs: [
								"The Isle Hacks reúne ESP wallhack, radar hack e Isle Aimbot indetectáveis para The Isle no PC Windows. E-mail de contato, referências de pedido Zadeyo e dados básicos de segurança do site.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "Aviso de risco",
							paragraphs: [
								"The Isle Hacks reúne ESP wallhack, radar hack e Isle Aimbot indetectáveis para The Isle no PC Windows. Respostas de suporte, resolução de pedidos e conformidade legal quando necessário.",
								"Usar cheats pode violar os termos da equipe The Isle — você assume todo risco de ban.",
							],
						},
						{
							h2: "Alterações de política",
							paragraphs: [
								"Contacte support@theislehack.org para suporte ou questões legais.",
								"E-mail: support@theislehack.org",
							],
						},
					],
				},
			},
		},
		it: {
			ui: {
				nav: {
					home: "Home",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funzioni",
					pricing: "Prezzi",
					setup: "Setup",
					updates: "Aggiornamenti",
					faq: "FAQ",
					buyNow: "Acquista",
				},
				hero: {
					accent: "Cheat The Isle indetectable",
					accentShort: "The Isle Hacks",
					subtitle: "ESP wallhack, radar hack e Aimbot per The Isle su PC Windows — manutenzione Easy Anti-Cheat inclusa.",
					subtitleShort: "ESP, radar e Aimbot per The Isle PC",
					buyNow: "Acquista ora",
					seeFeatures: "Vedi funzioni",
				},
				trust: {
					status: "Online",
					statusNote: "Il pacchetto The Isle Hacks è attivo per The Isle su PC Windows.",
					statusShort: "Attivo",
					delivery: "Consegna digitale istantanea",
					platform: "Windows 10 e 11",
					antiCheat: "Manutenzione Easy Anti-Cheat supportata",
					antiCheatShort: "Easy Anti-Cheat supportato",
				},
				product: {
					title: "The Isle Hacks",
					addToCart: "Aggiungi al carrello",
					monthly: "Mensile",
					lifetime: "A vita",
					available: "Disponibile ora",
					gameBadge: "The Isle",
					platformBadge: "PC Windows",
					statusBadge: "Pacchetto indetectable",
				},
				reviews: {
					title: "Cosa dicono i giocatori",
					subtitle: "Feedback recente dagli acquirenti The Isle Hacks",
					outOf: "su 5",
					countLabel: "recensioni",
				},
				common: {
					buyNow: "Acquista ora",
					readGuide: "Leggi guida",
					language: "Lingua",
					officialLanguageNote: "L'inglese è la lingua ufficiale. Altre versioni sono tradotte per SEO globale.",
					relatedPages: "Pagine correlate",
				},
				footer: {
					explore: "Esplora",
					help: "Aiuto e legale",
					tagline: "ESP, wallhack, radar e Aimbot indetectable per The Isle — checkout via Zadeyo.",
				},
				images: {
					hero: "The Isle Hacks hero — ESP and aimbot overlay in The Isle",
					espWallhack: "Wallhack outlines showing players and wild dinosaurs through walls",
					aimbotCombat: "Soft aim assist overlay during a The Isle session",
					packFight: "The Isle Hacks combat overlay during a pack fight",
					dinoEsp: "Player ESP boxes and distance readouts in a The Isle session",
					headerArt: "Aimbot view and bone priority controls for The Isle",
					hacksPackage: "2D radar threat overlay for The Isle",
					ambushFight: "Aimbot assist during a The Isle hunt",
					battleRoyale: "The Isle Hacks in-session overview for Windows PC",
					survivalIsland: "ESP markers for carcasses and nests in The Isle",
				},
			},
			pages: {
				home: {
					title: "The Isle Hacks 2026 | ESP, Wallhack e Aimbot",
					description: "Cheat The Isle indetectable per The Isle su PC. ESP wallhack, radar hack e Aimbot con manutenzione Easy Anti-Cheat. Consegna digitale istantanea.",
					h1: "The Isle Hacks — ESP, Wallhack e Aimbot indetectable",
					intro: "Pacchetto undetected per The Isle su PC Windows: ESP wallhack, radar e Aimbot con manutenzione Easy Anti-Cheat dopo ogni patch.",
					imageAlt: "Isle ESP player tags hack",
					galleryTitle: "Galleria The Isle Hacks — ESP, Aimbot e wallhack",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "Acquista The Isle Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Perché scegliere The Isle Hacks nel 2026",
							paragraphs: [
								"The Isle Hacks unisce ESP wallhack, radar hack e Isle Aimbot indetectable per The Isle su PC Windows. Ideale per leggere packre nemiche in BR e growth run.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar e Aimbot in una licenza",
							paragraphs: [
								"The Isle Hacks unisce ESP wallhack, radar hack e Isle Aimbot indetectable per The Isle su PC Windows. Una licenza invece di tool separati.",
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
							],
						},
					],
				},
				"isle-esp": {
					title: "ESP The Isle | Box giocatore e wallhack",
					description: "ESP The Isle: box giocatore, marcatori carcassa e overlay wallhack. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "ESP The Isle",
					intro: "The Isle Hacks unisce ESP wallhack, radar hack e Isle Aimbot indetectable per The Isle su PC Windows. ESP The Isle.",
					imageAlt: "Isle ESP player boxes and distance readouts in a session",
					galleryTitle: "ESP The Isle",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "Acquista The Isle Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "ESP The Isle",
							paragraphs: [
								"The Isle Hacks unisce ESP wallhack, radar hack e Isle Aimbot indetectable per The Isle su PC Windows. box giocatore, marcatori carcassa e overlay wallhack.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@theislehack.org per supporto o richieste legali.",
							],
						},
					],
				},
				"isle-aimbot": {
					title: "Aimbot The Isle | Controlli soft aim",
					description: "Aimbot The Isle: soft aim, FOV e profili Aimbot per specie. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Aimbot The Isle",
					intro: "The Isle Hacks unisce ESP wallhack, radar hack e Isle Aimbot indetectable per The Isle su PC Windows. Aimbot The Isle.",
					imageAlt: "Isle Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot The Isle",
					heroImage: "/images/isle-hacks-aimbot.webp",
					ctaPrimary: "Acquista The Isle Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "Aimbot The Isle",
							paragraphs: [
								"The Isle Hacks unisce ESP wallhack, radar hack e Isle Aimbot indetectable per The Isle su PC Windows. soft aim, FOV e profili Aimbot per specie.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@theislehack.org per supporto o richieste legali.",
							],
						},
					],
				},
				features: {
					title: "Funzioni | Elenco completo funzioni",
					description: "Funzioni: ESP, soft aim, controlli radar. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Funzioni",
					intro: "The Isle Hacks unisce ESP wallhack, radar hack e Isle Aimbot indetectable per The Isle su PC Windows. Funzioni.",
					imageAlt: "The Isle Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funzioni",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "Acquista The Isle Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funzioni",
							paragraphs: [
								"The Isle Hacks unisce ESP wallhack, radar hack e Isle Aimbot indetectable per The Isle su PC Windows. ESP, soft aim, controlli radar.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@theislehack.org per supporto o richieste legali.",
							],
						},
					],
				},
				pricing: {
					title: "Prezzi | Mensile e lifetime",
					description: "Prezzi: licenze $35 mensili o $150 lifetime. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Prezzi",
					intro: "The Isle Hacks unisce ESP wallhack, radar hack e Isle Aimbot indetectable per The Isle su PC Windows. Prezzi.",
					imageAlt: "The Isle Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Prezzi",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "Acquista The Isle Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Prezzi",
							paragraphs: [
								"The Isle Hacks unisce ESP wallhack, radar hack e Isle Aimbot indetectable per The Isle su PC Windows. licenze $35 mensili o $150 lifetime.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@theislehack.org per supporto o richieste legali.",
							],
						},
					],
				},
				setup: {
					title: "Setup | Guida setup PC",
					description: "Setup: attivazione Windows PC e setup al primo avvio. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Setup",
					intro: "The Isle Hacks unisce ESP wallhack, radar hack e Isle Aimbot indetectable per The Isle su PC Windows. Setup.",
					imageAlt: "The Isle Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Setup",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "Acquista The Isle Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Setup",
							paragraphs: [
								"The Isle Hacks unisce ESP wallhack, radar hack e Isle Aimbot indetectable per The Isle su PC Windows. attivazione Windows PC e setup al primo avvio.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@theislehack.org per supporto o richieste legali.",
							],
						},
					],
				},
				updates: {
					title: "Aggiornamenti | Log manutenzione Easy Anti-Cheat",
					description: "Aggiornamenti: stato patch Easy Anti-Cheat e note di rebuild. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Aggiornamenti",
					intro: "The Isle Hacks unisce ESP wallhack, radar hack e Isle Aimbot indetectable per The Isle su PC Windows. Aggiornamenti.",
					imageAlt: "The Isle Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Aggiornamenti",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "Acquista The Isle Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "Aggiornamenti",
							paragraphs: [
								"The Isle Hacks unisce ESP wallhack, radar hack e Isle Aimbot indetectable per The Isle su PC Windows. stato patch Easy Anti-Cheat e note di rebuild.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@theislehack.org per supporto o richieste legali.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Domande frequenti",
					description: "FAQ: domande su ESP, soft aim, consegna e Easy Anti-Cheat. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "FAQ",
					intro: "The Isle Hacks unisce ESP wallhack, radar hack e Isle Aimbot indetectable per The Isle su PC Windows. FAQ.",
					imageAlt: "The Isle Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "Acquista The Isle Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"The Isle Hacks unisce ESP wallhack, radar hack e Isle Aimbot indetectable per The Isle su PC Windows. domande su ESP, soft aim, consegna e Easy Anti-Cheat.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@theislehack.org per supporto o richieste legali.",
							],
						},
					],
				},
				support: {
					title: "Supporto | Aiuto e contatto",
					description: "Supporto: aiuto ordini e contatto supporto licenze. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Supporto",
					intro: "The Isle Hacks unisce ESP wallhack, radar hack e Isle Aimbot indetectable per The Isle su PC Windows. Supporto.",
					imageAlt: "The Isle Hacks support page for license and setup help",
					galleryTitle: "Supporto",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "Acquista The Isle Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Supporto",
							paragraphs: [
								"The Isle Hacks unisce ESP wallhack, radar hack e Isle Aimbot indetectable per The Isle su PC Windows. aiuto ordini e contatto supporto licenze.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@theislehack.org per supporto o richieste legali.",
							],
						},
					],
				},
				undetected: {
					title: "Cheat indetectable | Stato indetectable",
					description: "Cheat indetectable: manutenzione undetected dopo patch Easy Anti-Cheat. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Cheat indetectable",
					intro: "The Isle Hacks unisce ESP wallhack, radar hack e Isle Aimbot indetectable per The Isle su PC Windows. Cheat indetectable.",
					imageAlt: "The Isle Hacks undetected status overview for Windows PC",
					galleryTitle: "Cheat indetectable",
					heroImage: "/images/isle-hacks-wallhack.webp",
					ctaPrimary: "Acquista The Isle Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "Cheat indetectable",
							paragraphs: [
								"The Isle Hacks unisce ESP wallhack, radar hack e Isle Aimbot indetectable per The Isle su PC Windows. manutenzione undetected dopo patch Easy Anti-Cheat.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@theislehack.org per supporto o richieste legali.",
							],
						},
					],
				},
				wallhack: {
					title: "The Isle Wallhack | Visibilità ESP",
					description: "The Isle Wallhack: wallhack ESP per giocatori, carcasses e distanza. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "The Isle Wallhack",
					intro: "The Isle Hacks unisce ESP wallhack, radar hack e Isle Aimbot indetectable per The Isle su PC Windows. The Isle Wallhack.",
					imageAlt: "isle wallhack visibility through walls in a session",
					galleryTitle: "The Isle Wallhack",
					heroImage: "/images/isle-hacks-wallhack.webp",
					ctaPrimary: "Acquista The Isle Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "The Isle Wallhack",
							paragraphs: [
								"The Isle Hacks unisce ESP wallhack, radar hack e Isle Aimbot indetectable per The Isle su PC Windows. wallhack ESP per giocatori, carcasses e distanza.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@theislehack.org per supporto o richieste legali.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | Radar 2D minacce",
					description: "Radar hack: segnali radar 2D per flanchi e rotazioni. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Radar hack",
					intro: "The Isle Hacks unisce ESP wallhack, radar hack e Isle Aimbot indetectable per The Isle su PC Windows. Radar hack.",
					imageAlt: "The Isle 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "Acquista The Isle Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"The Isle Hacks unisce ESP wallhack, radar hack e Isle Aimbot indetectable per The Isle su PC Windows. segnali radar 2D per flanchi e rotazioni.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@theislehack.org per supporto o richieste legali.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Manutenzione patch",
					description: "Bypass Easy Anti-Cheat: come vengono gestiti gli aggiornamenti Easy Anti-Cheat per The Isle hacks. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "The Isle Hacks unisce ESP wallhack, radar hack e Isle Aimbot indetectable per The Isle su PC Windows. Bypass Easy Anti-Cheat.",
					imageAlt: "The Isle Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/isle-hacks-aimbot.webp",
					ctaPrimary: "Acquista The Isle Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"The Isle Hacks unisce ESP wallhack, radar hack e Isle Aimbot indetectable per The Isle su PC Windows. come vengono gestiti gli aggiornamenti Easy Anti-Cheat per The Isle hacks.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@theislehack.org per supporto o richieste legali.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheat The Isle 2026 | Guida acquirente",
					description: "Cheat The Isle 2026: checklist the isle hacks 2026 prima del checkout. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Cheat The Isle 2026",
					intro: "The Isle Hacks unisce ESP wallhack, radar hack e Isle Aimbot indetectable per The Isle su PC Windows. Cheat The Isle 2026.",
					imageAlt: "The Isle Hacks product overview for The Isle",
					galleryTitle: "Cheat The Isle 2026",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "Acquista The Isle Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "Cheat The Isle 2026",
							paragraphs: [
								"The Isle Hacks unisce ESP wallhack, radar hack e Isle Aimbot indetectable per The Isle su PC Windows. checklist the isle hacks 2026 prima del checkout.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@theislehack.org per supporto o richieste legali.",
							],
						},
					],
				},
				hacks: {
					title: "Cheat The Isle | Guida ESP e Aimbot",
					description: "Cheat The Isle: pilastro The Isle Hacks per ESP e Aimbot. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Cheat The Isle",
					intro: "The Isle Hacks unisce ESP wallhack, radar hack e Isle Aimbot indetectable per The Isle su PC Windows. Cheat The Isle.",
					imageAlt: "The Isle Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Cheat The Isle",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "Acquista The Isle Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheat The Isle",
							paragraphs: [
								"The Isle Hacks unisce ESP wallhack, radar hack e Isle Aimbot indetectable per The Isle su PC Windows. pilastro The Isle Hacks per ESP e Aimbot.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@theislehack.org per supporto o richieste legali.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Download The Isle Hacks | Accesso istantaneo",
					description: "Download The Isle Hacks: download licenza digitale dopo il pagamento. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Download The Isle Hacks",
					intro: "The Isle Hacks unisce ESP wallhack, radar hack e Isle Aimbot indetectable per The Isle su PC Windows. Download The Isle Hacks.",
					imageAlt: "The Isle Hacks download and install delivery flow",
					galleryTitle: "Download The Isle Hacks",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "Acquista The Isle Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Download The Isle Hacks",
							paragraphs: [
								"The Isle Hacks unisce ESP wallhack, radar hack e Isle Aimbot indetectable per The Isle su PC Windows. download licenza digitale dopo il pagamento.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@theislehack.org per supporto o richieste legali.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Mod menu The Isle | Toggle in-game",
					description: "Mod menu The Isle: toggle ESP e soft aim in-client. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Mod menu The Isle",
					intro: "The Isle Hacks unisce ESP wallhack, radar hack e Isle Aimbot indetectable per The Isle su PC Windows. Mod menu The Isle.",
					imageAlt: "The Isle Hacks in-game menu controls",
					galleryTitle: "Mod menu The Isle",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "Acquista The Isle Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Mod menu The Isle",
							paragraphs: [
								"The Isle Hacks unisce ESP wallhack, radar hack e Isle Aimbot indetectable per The Isle su PC Windows. toggle ESP e soft aim in-client.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@theislehack.org per supporto o richieste legali.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim The Isle | Impostazioni soft aim",
					description: "Soft aim The Isle: impostazioni soft aim fluide per Windows PC. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Soft aim The Isle",
					intro: "The Isle Hacks unisce ESP wallhack, radar hack e Isle Aimbot indetectable per The Isle su PC Windows. Soft aim The Isle.",
					imageAlt: "The Isle soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim The Isle",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "Acquista The Isle Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/isle-aimbot/",
					sections: [
						{
							h2: "Soft aim The Isle",
							paragraphs: [
								"The Isle Hacks unisce ESP wallhack, radar hack e Isle Aimbot indetectable per The Isle su PC Windows. impostazioni soft aim fluide per Windows PC.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@theislehack.org per supporto o richieste legali.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Migliori cheat The Isle | Checklist acquirente",
					description: "Migliori cheat The Isle: cosa confrontare prima di acquistare the isle hacks. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Migliori cheat The Isle",
					intro: "The Isle Hacks unisce ESP wallhack, radar hack e Isle Aimbot indetectable per The Isle su PC Windows. Migliori cheat The Isle.",
					imageAlt: "The Isle Hacks overview for The Isle on PC",
					galleryTitle: "Migliori cheat The Isle",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "Acquista The Isle Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Migliori cheat The Isle",
							paragraphs: [
								"The Isle Hacks unisce ESP wallhack, radar hack e Isle Aimbot indetectable per The Isle su PC Windows. cosa confrontare prima di acquistare the isle hacks.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@theislehack.org per supporto o richieste legali.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot The Isle | Assist soft aim",
					description: "Hack aimbot The Isle: assist undetected hack Aimbot per The Isle. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Hack aimbot The Isle",
					intro: "The Isle Hacks unisce ESP wallhack, radar hack e Isle Aimbot indetectable per The Isle su PC Windows. Hack aimbot The Isle.",
					imageAlt: "Isle Aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot The Isle",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "Acquista The Isle Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/isle-aimbot/",
					sections: [
						{
							h2: "Hack aimbot The Isle",
							paragraphs: [
								"The Isle Hacks unisce ESP wallhack, radar hack e Isle Aimbot indetectable per The Isle su PC Windows. assist undetected hack Aimbot per The Isle.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@theislehack.org per supporto o richieste legali.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP The Isle | Box e carcasses",
					description: "Hack ESP The Isle: box ESP hack, pin carcassa e distanza. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Hack ESP The Isle",
					intro: "The Isle Hacks unisce ESP wallhack, radar hack e Isle Aimbot indetectable per The Isle su PC Windows. Hack ESP The Isle.",
					imageAlt: "Isle ESP hack boxes and carcass markers",
					galleryTitle: "Hack ESP The Isle",
					heroImage: "/images/isle-hacks-wallhack.webp",
					ctaPrimary: "Acquista The Isle Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "Hack ESP The Isle",
							paragraphs: [
								"The Isle Hacks unisce ESP wallhack, radar hack e Isle Aimbot indetectable per The Isle su PC Windows. box ESP hack, pin carcassa e distanza.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@theislehack.org per supporto o richieste legali.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all The Isle | Cosa significa",
					description: "Unlock all The Isle: ricerche unlock-all vs veri strumenti ESP e Aimbot. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Unlock all The Isle",
					intro: "The Isle Hacks unisce ESP wallhack, radar hack e Isle Aimbot indetectable per The Isle su PC Windows. Unlock all The Isle.",
					imageAlt: "The Isle Hacks license features overview",
					galleryTitle: "Unlock all The Isle",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "Acquista The Isle Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all The Isle",
							paragraphs: [
								"The Isle Hacks unisce ESP wallhack, radar hack e Isle Aimbot indetectable per The Isle su PC Windows. ricerche unlock-all vs veri strumenti ESP e Aimbot.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@theislehack.org per supporto o richieste legali.",
							],
						},
					],
				},
				privacy: {
					title: "Informativa privacy | The Isle Hacks",
					description: "Informativa privacy per The Isle Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Informativa privacy",
					intro: "The Isle Hacks unisce ESP wallhack, radar hack e Isle Aimbot indetectable per The Isle su PC Windows. Informativa privacy per theislehack.org e licenze The Isle.",
					imageAlt: "The Isle Hacks",
					galleryTitle: "The Isle Hacks",
					heroImage: "/images/isle-hacks-aimbot.webp",
					ctaPrimary: "Email al supporto",
					ctaSecondary: "Leggi i termini",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Informazioni raccolte",
							paragraphs: [
								"The Isle Hacks unisce ESP wallhack, radar hack e Isle Aimbot indetectable per The Isle su PC Windows. Email di contatto, riferimenti ordine Zadeyo e dati di sicurezza di base del sito.",
								"I dati di pagamento sono elaborati dal checkout Zadeyo — non memorizzati su theislehack.org.",
							],
						},
						{
							h2: "Uso dei dati",
							paragraphs: [
								"The Isle Hacks unisce ESP wallhack, radar hack e Isle Aimbot indetectable per The Isle su PC Windows. Risposte di supporto, risoluzione ordini e conformità legale quando richiesto.",
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
							],
						},
						{
							h2: "I tuoi diritti",
							paragraphs: [
								"Contatta support@theislehack.org per supporto o richieste legali.",
								"Email: support@theislehack.org",
							],
						},
					],
				},
				refund: {
					title: "Politica di rimborso | The Isle Hacks",
					description: "Politica di rimborso per The Isle Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politica di rimborso",
					intro: "The Isle Hacks unisce ESP wallhack, radar hack e Isle Aimbot indetectable per The Isle su PC Windows. Politica di rimborso per theislehack.org e licenze The Isle.",
					imageAlt: "The Isle Hacks",
					galleryTitle: "The Isle Hacks",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "Email al supporto",
					ctaSecondary: "Leggi la privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Consegna digitale",
							paragraphs: [
								"The Isle Hacks unisce ESP wallhack, radar hack e Isle Aimbot indetectable per The Isle su PC Windows. Email di contatto, riferimenti ordine Zadeyo e dati di sicurezza di base del sito.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "Approvazione rimborso",
							paragraphs: [
								"The Isle Hacks unisce ESP wallhack, radar hack e Isle Aimbot indetectable per The Isle su PC Windows. Risposte di supporto, risoluzione ordini e conformità legale quando richiesto.",
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
							],
						},
						{
							h2: "Come richiedere",
							paragraphs: [
								"Contatta support@theislehack.org per supporto o richieste legali.",
								"Email: support@theislehack.org",
							],
						},
					],
				},
				terms: {
					title: "Termini di utilizzo | The Isle Hacks",
					description: "Termini di utilizzo per The Isle Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Termini di utilizzo",
					intro: "The Isle Hacks unisce ESP wallhack, radar hack e Isle Aimbot indetectable per The Isle su PC Windows. Termini di utilizzo per theislehack.org e licenze The Isle.",
					imageAlt: "The Isle Hacks",
					galleryTitle: "The Isle Hacks",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "Email al supporto",
					ctaSecondary: "Leggi la privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Accettazione dei termini",
							paragraphs: [
								"The Isle Hacks unisce ESP wallhack, radar hack e Isle Aimbot indetectable per The Isle su PC Windows. Email di contatto, riferimenti ordine Zadeyo e dati di sicurezza di base del sito.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "Avviso sui rischi",
							paragraphs: [
								"The Isle Hacks unisce ESP wallhack, radar hack e Isle Aimbot indetectable per The Isle su PC Windows. Risposte di supporto, risoluzione ordini e conformità legale quando richiesto.",
								"Usare cheat può violare i termini del team The Isle — assumi tutto il rischio di ban.",
							],
						},
						{
							h2: "Modifiche alla policy",
							paragraphs: [
								"Contatta support@theislehack.org per supporto o richieste legali.",
								"Email: support@theislehack.org",
							],
						},
					],
				},
			},
		},
		nl: {
			ui: {
				nav: {
					home: "Home",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Functies",
					pricing: "Prijzen",
					setup: "Setup",
					updates: "Updates",
					faq: "FAQ",
					buyNow: "Kopen",
				},
				hero: {
					accent: "Undetected The Isle Hacks",
					accentShort: "The Isle Hacks",
					subtitle: "ESP wallhack, radar hack en Aimbot voor The Isle op Windows PC — Easy Anti-Cheat-onderhoud inbegrepen.",
					subtitleShort: "ESP, radar & Aimbot voor The Isle PC",
					buyNow: "Nu kopen",
					seeFeatures: "Bekijk functies",
				},
				trust: {
					status: "Online",
					statusNote: "The Isle Hacks pakket is live voor The Isle op Windows PC.",
					statusShort: "Live",
					delivery: "Directe digitale levering",
					platform: "Windows 10 & 11",
					antiCheat: "Easy Anti-Cheat-onderhoud ondersteund",
					antiCheatShort: "Easy Anti-Cheat support",
				},
				product: {
					title: "The Isle Hacks",
					addToCart: "In winkelwagen",
					monthly: "Maandelijks",
					lifetime: "Lifetime",
					available: "Nu beschikbaar",
					gameBadge: "The Isle",
					platformBadge: "Windows PC",
					statusBadge: "Undetected pakket",
				},
				reviews: {
					title: "Wat spelers zeggen",
					subtitle: "Recente feedback va The Isle Hacks kopers",
					outOf: "van 5",
					countLabel: "reviews",
				},
				common: {
					buyNow: "Nu kopen",
					readGuide: "Lees gids",
					language: "Taal",
					officialLanguageNote: "Engels is de officiële taal. Andere talen zijn vertaald voor wereldwijde SEO.",
					relatedPages: "Gerelateerde pagina's",
				},
				footer: {
					explore: "Verkennen",
					help: "Help & juridisch",
					tagline: "Undetected ESP, wallhack, radar en Aimbot voor The Isle — checkout via Zadeyo.",
				},
				images: {
					hero: "The Isle Hacks hero — ESP and aimbot overlay in The Isle",
					espWallhack: "Wallhack outlines showing players and wild dinosaurs through walls",
					aimbotCombat: "Soft aim assist overlay during a The Isle session",
					packFight: "The Isle Hacks combat overlay during a pack fight",
					dinoEsp: "Player ESP boxes and distance readouts in a The Isle session",
					headerArt: "Aimbot view and bone priority controls for The Isle",
					hacksPackage: "2D radar threat overlay for The Isle",
					ambushFight: "Aimbot assist during a The Isle hunt",
					battleRoyale: "The Isle Hacks in-session overview for Windows PC",
					survivalIsland: "ESP markers for carcasses and nests in The Isle",
				},
			},
			pages: {
				home: {
					title: "The Isle Hacks 2026 | ESP, Wallhack & Aimbot",
					description: "Undetected the isle hacks voor The Isle op PC. ESP wallhack, radar hack en Aimbot met Easy Anti-Cheat-onderhoud. Directe digitale levering.",
					h1: "The Isle Hacks — Undetected ESP, Wallhack & Aimbot",
					intro: "Undetected Windows PC pakket voor The Isle: ESP wallhack, radar en Aimbot met Easy Anti-Cheat-onderhoud na elke patch.",
					imageAlt: "Isle ESP player tags hack",
					galleryTitle: "The Isle Hacks galerij — ESP, Aimbot en wallhack",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "The Isle Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Waarom The Isle Hacks in 2026",
							paragraphs: [
								"The Isle Hacks bundelt ESP wallhack, radar hack en Isle Aimbot als undetected pakket voor The Isle op Windows PC. Ideaal om vijandelijke packs te lezen in BR en growth run.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "ESP wallhack, radar en Aimbot in één licentie",
							paragraphs: [
								"The Isle Hacks bundelt ESP wallhack, radar hack en Isle Aimbot als undetected pakket voor The Isle op Windows PC. Eén licentie in plaats van losse tools.",
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
							],
						},
					],
				},
				"isle-esp": {
					title: "Isle ESP | Player Boxes & Wallhack",
					description: "Isle ESP: spelerboxen, karkas-markers en wallhack overlays. directe digitale levering. undetected — Windows PC.",
					h1: "Isle ESP",
					intro: "The Isle Hacks bundelt ESP wallhack, radar hack en Isle Aimbot als undetected pakket voor The Isle op Windows PC. Isle ESP.",
					imageAlt: "Isle ESP player boxes and distance readouts in a session",
					galleryTitle: "Isle ESP",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "The Isle Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "Isle ESP",
							paragraphs: [
								"The Isle Hacks bundelt ESP wallhack, radar hack en Isle Aimbot als undetected pakket voor The Isle op Windows PC. spelerboxen, karkas-markers en wallhack overlays.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@theislehack.org voor support en juridische vragen.",
							],
						},
					],
				},
				"isle-aimbot": {
					title: "Isle Aimbot | Soft Aim Controls",
					description: "Isle Aimbot: soft aim, FOV en Aimbot-profielen per soort. directe digitale levering. undetected — Windows PC.",
					h1: "Isle Aimbot",
					intro: "The Isle Hacks bundelt ESP wallhack, radar hack en Isle Aimbot als undetected pakket voor The Isle op Windows PC. Isle Aimbot.",
					imageAlt: "Isle Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Isle Aimbot",
					heroImage: "/images/isle-hacks-aimbot.webp",
					ctaPrimary: "The Isle Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "Isle Aimbot",
							paragraphs: [
								"The Isle Hacks bundelt ESP wallhack, radar hack en Isle Aimbot als undetected pakket voor The Isle op Windows PC. soft aim, FOV en Aimbot-profielen per soort.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@theislehack.org voor support en juridische vragen.",
							],
						},
					],
				},
				features: {
					title: "Functies | Full Feature List",
					description: "Functies: ESP, soft aim, radar bediening. directe digitale levering. undetected — Windows PC.",
					h1: "Functies",
					intro: "The Isle Hacks bundelt ESP wallhack, radar hack en Isle Aimbot als undetected pakket voor The Isle op Windows PC. Functies.",
					imageAlt: "The Isle Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Functies",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "The Isle Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Functies",
							paragraphs: [
								"The Isle Hacks bundelt ESP wallhack, radar hack en Isle Aimbot als undetected pakket voor The Isle op Windows PC. ESP, soft aim, radar bediening.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@theislehack.org voor support en juridische vragen.",
							],
						},
					],
				},
				pricing: {
					title: "Prijzen | Monthly & Lifetime",
					description: "Prijzen: $35 maandelijkse of $150 lifetime licenties. directe digitale levering. undetected — Windows PC.",
					h1: "Prijzen",
					intro: "The Isle Hacks bundelt ESP wallhack, radar hack en Isle Aimbot als undetected pakket voor The Isle op Windows PC. Prijzen.",
					imageAlt: "The Isle Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Prijzen",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "The Isle Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Prijzen",
							paragraphs: [
								"The Isle Hacks bundelt ESP wallhack, radar hack en Isle Aimbot als undetected pakket voor The Isle op Windows PC. $35 maandelijkse of $150 lifetime licenties.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@theislehack.org voor support en juridische vragen.",
							],
						},
					],
				},
				setup: {
					title: "Setup | PC Setup Guide",
					description: "Setup: Windows PC activatie en eerste-start setup. directe digitale levering. undetected — Windows PC.",
					h1: "Setup",
					intro: "The Isle Hacks bundelt ESP wallhack, radar hack en Isle Aimbot als undetected pakket voor The Isle op Windows PC. Setup.",
					imageAlt: "The Isle Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Setup",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "The Isle Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Setup",
							paragraphs: [
								"The Isle Hacks bundelt ESP wallhack, radar hack en Isle Aimbot als undetected pakket voor The Isle op Windows PC. Windows PC activatie en eerste-start setup.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@theislehack.org voor support en juridische vragen.",
							],
						},
					],
				},
				updates: {
					title: "Updates | Easy Anti-Cheat Maintenance Log",
					description: "Updates: Easy Anti-Cheat patchstatus en rebuild-notities. directe digitale levering. undetected — Windows PC.",
					h1: "Updates",
					intro: "The Isle Hacks bundelt ESP wallhack, radar hack en Isle Aimbot als undetected pakket voor The Isle op Windows PC. Updates.",
					imageAlt: "The Isle Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Updates",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "The Isle Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "Updates",
							paragraphs: [
								"The Isle Hacks bundelt ESP wallhack, radar hack en Isle Aimbot als undetected pakket voor The Isle op Windows PC. Easy Anti-Cheat patchstatus en rebuild-notities.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@theislehack.org voor support en juridische vragen.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: vragen over ESP, soft aim, levering en Easy Anti-Cheat. directe digitale levering. undetected — Windows PC.",
					h1: "FAQ",
					intro: "The Isle Hacks bundelt ESP wallhack, radar hack en Isle Aimbot als undetected pakket voor The Isle op Windows PC. FAQ.",
					imageAlt: "The Isle Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "The Isle Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"The Isle Hacks bundelt ESP wallhack, radar hack en Isle Aimbot als undetected pakket voor The Isle op Windows PC. vragen over ESP, soft aim, levering en Easy Anti-Cheat.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@theislehack.org voor support en juridische vragen.",
							],
						},
					],
				},
				support: {
					title: "Support | Help & Contact",
					description: "Support: bestelhulp en licentie support contact. directe digitale levering. undetected — Windows PC.",
					h1: "Support",
					intro: "The Isle Hacks bundelt ESP wallhack, radar hack en Isle Aimbot als undetected pakket voor The Isle op Windows PC. Support.",
					imageAlt: "The Isle Hacks support page for license and setup help",
					galleryTitle: "Support",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "The Isle Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Support",
							paragraphs: [
								"The Isle Hacks bundelt ESP wallhack, radar hack en Isle Aimbot als undetected pakket voor The Isle op Windows PC. bestelhulp en licentie support contact.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@theislehack.org voor support en juridische vragen.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected Cheats | Easy Anti-Cheat Safe Status",
					description: "Undetected Cheats: undetected onderhoud na Easy Anti-Cheat patches. directe digitale levering. undetected — Windows PC.",
					h1: "Undetected Cheats",
					intro: "The Isle Hacks bundelt ESP wallhack, radar hack en Isle Aimbot als undetected pakket voor The Isle op Windows PC. Undetected Cheats.",
					imageAlt: "The Isle Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected Cheats",
					heroImage: "/images/isle-hacks-wallhack.webp",
					ctaPrimary: "The Isle Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "Undetected Cheats",
							paragraphs: [
								"The Isle Hacks bundelt ESP wallhack, radar hack en Isle Aimbot als undetected pakket voor The Isle op Windows PC. undetected onderhoud na Easy Anti-Cheat patches.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@theislehack.org voor support en juridische vragen.",
							],
						},
					],
				},
				wallhack: {
					title: "The Isle Wallhack | ESP Visibility",
					description: "The Isle Wallhack: wallhack ESP voor spelers, karkassen en afstand. directe digitale levering. undetected — Windows PC.",
					h1: "The Isle Wallhack",
					intro: "The Isle Hacks bundelt ESP wallhack, radar hack en Isle Aimbot als undetected pakket voor The Isle op Windows PC. The Isle Wallhack.",
					imageAlt: "isle wallhack visibility through walls in a session",
					galleryTitle: "The Isle Wallhack",
					heroImage: "/images/isle-hacks-wallhack.webp",
					ctaPrimary: "The Isle Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "The Isle Wallhack",
							paragraphs: [
								"The Isle Hacks bundelt ESP wallhack, radar hack en Isle Aimbot als undetected pakket voor The Isle op Windows PC. wallhack ESP voor spelers, karkassen en afstand.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@theislehack.org voor support en juridische vragen.",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar signalen voor flanks en rotaties. directe digitale levering. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "The Isle Hacks bundelt ESP wallhack, radar hack en Isle Aimbot als undetected pakket voor The Isle op Windows PC. Radar Hack.",
					imageAlt: "The Isle 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "The Isle Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"The Isle Hacks bundelt ESP wallhack, radar hack en Isle Aimbot als undetected pakket voor The Isle op Windows PC. 2D radar signalen voor flanks en rotaties.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@theislehack.org voor support en juridische vragen.",
							],
						},
					],
				},
				eac: {
					title: "Easy Anti-Cheat Bypass | Patch Maintenance",
					description: "Easy Anti-Cheat Bypass: hoe Easy Anti-Cheat updates worden afgehandeld voor The Isle hacks. directe digitale levering. undetected — Windows PC.",
					h1: "Easy Anti-Cheat Bypass",
					intro: "The Isle Hacks bundelt ESP wallhack, radar hack en Isle Aimbot als undetected pakket voor The Isle op Windows PC. Easy Anti-Cheat Bypass.",
					imageAlt: "The Isle Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Easy Anti-Cheat Bypass",
					heroImage: "/images/isle-hacks-aimbot.webp",
					ctaPrimary: "The Isle Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Easy Anti-Cheat Bypass",
							paragraphs: [
								"The Isle Hacks bundelt ESP wallhack, radar hack en Isle Aimbot als undetected pakket voor The Isle op Windows PC. hoe Easy Anti-Cheat updates worden afgehandeld voor The Isle hacks.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@theislehack.org voor support en juridische vragen.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "The Isle Hacks 2026 | Buyer Guide",
					description: "The Isle Hacks 2026: 2026 the isle hacks checklist vóór checkout. directe digitale levering. undetected — Windows PC.",
					h1: "The Isle Hacks 2026",
					intro: "The Isle Hacks bundelt ESP wallhack, radar hack en Isle Aimbot als undetected pakket voor The Isle op Windows PC. The Isle Hacks 2026.",
					imageAlt: "The Isle Hacks product overview for The Isle",
					galleryTitle: "The Isle Hacks 2026",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "The Isle Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "The Isle Hacks 2026",
							paragraphs: [
								"The Isle Hacks bundelt ESP wallhack, radar hack en Isle Aimbot als undetected pakket voor The Isle op Windows PC. 2026 the isle hacks checklist vóór checkout.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@theislehack.org voor support en juridische vragen.",
							],
						},
					],
				},
				hacks: {
					title: "The Isle Hacks | ESP Aimbot Guide",
					description: "The Isle Hacks: The Isle Hacks pijler voor ESP en Aimbot. directe digitale levering. undetected — Windows PC.",
					h1: "The Isle Hacks",
					intro: "The Isle Hacks bundelt ESP wallhack, radar hack en Isle Aimbot als undetected pakket voor The Isle op Windows PC. The Isle Hacks.",
					imageAlt: "The Isle Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "The Isle Hacks",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "The Isle Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "The Isle Hacks",
							paragraphs: [
								"The Isle Hacks bundelt ESP wallhack, radar hack en Isle Aimbot als undetected pakket voor The Isle op Windows PC. The Isle Hacks pijler voor ESP en Aimbot.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@theislehack.org voor support en juridische vragen.",
							],
						},
					],
				},
				"cheat-download": {
					title: "The Isle Cheat Download | Instant Access",
					description: "The Isle Cheat Download: digitale licentiedownload na betaling. directe digitale levering. undetected — Windows PC.",
					h1: "The Isle Cheat Download",
					intro: "The Isle Hacks bundelt ESP wallhack, radar hack en Isle Aimbot als undetected pakket voor The Isle op Windows PC. The Isle Cheat Download.",
					imageAlt: "The Isle Hacks download and install delivery flow",
					galleryTitle: "The Isle Cheat Download",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "The Isle Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "The Isle Cheat Download",
							paragraphs: [
								"The Isle Hacks bundelt ESP wallhack, radar hack en Isle Aimbot als undetected pakket voor The Isle op Windows PC. digitale licentiedownload na betaling.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@theislehack.org voor support en juridische vragen.",
							],
						},
					],
				},
				"mod-menu": {
					title: "The Isle Mod Menu | In-Game Toggles",
					description: "The Isle Mod Menu: in-client ESP en soft aim toggles. directe digitale levering. undetected — Windows PC.",
					h1: "The Isle Mod Menu",
					intro: "The Isle Hacks bundelt ESP wallhack, radar hack en Isle Aimbot als undetected pakket voor The Isle op Windows PC. The Isle Mod Menu.",
					imageAlt: "The Isle Hacks in-game menu controls",
					galleryTitle: "The Isle Mod Menu",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "The Isle Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "The Isle Mod Menu",
							paragraphs: [
								"The Isle Hacks bundelt ESP wallhack, radar hack en Isle Aimbot als undetected pakket voor The Isle op Windows PC. in-client ESP en soft aim toggles.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@theislehack.org voor support en juridische vragen.",
							],
						},
					],
				},
				"soft-aim": {
					title: "The Isle Soft Aim | Smooth Aim Settings",
					description: "The Isle Soft Aim: vloeiende soft aim instellingen voor Windows PC. directe digitale levering. undetected — Windows PC.",
					h1: "The Isle Soft Aim",
					intro: "The Isle Hacks bundelt ESP wallhack, radar hack en Isle Aimbot als undetected pakket voor The Isle op Windows PC. The Isle Soft Aim.",
					imageAlt: "The Isle soft aim FOV and smoothness settings",
					galleryTitle: "The Isle Soft Aim",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "The Isle Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/isle-aimbot/",
					sections: [
						{
							h2: "The Isle Soft Aim",
							paragraphs: [
								"The Isle Hacks bundelt ESP wallhack, radar hack en Isle Aimbot als undetected pakket voor The Isle op Windows PC. vloeiende soft aim instellingen voor Windows PC.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@theislehack.org voor support en juridische vragen.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Beste The Isle Hacks | Buyer Checklist",
					description: "Beste The Isle Hacks: wat te vergelijken vóór aankoop van the isle hacks. directe digitale levering. undetected — Windows PC.",
					h1: "Beste The Isle Hacks",
					intro: "The Isle Hacks bundelt ESP wallhack, radar hack en Isle Aimbot als undetected pakket voor The Isle op Windows PC. Beste The Isle Hacks.",
					imageAlt: "The Isle Hacks overview for The Isle on PC",
					galleryTitle: "Beste The Isle Hacks",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "The Isle Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Beste The Isle Hacks",
							paragraphs: [
								"The Isle Hacks bundelt ESP wallhack, radar hack en Isle Aimbot als undetected pakket voor The Isle op Windows PC. wat te vergelijken vóór aankoop van the isle hacks.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@theislehack.org voor support en juridische vragen.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Isle Aimbot Hack | Soft Aim Assist",
					description: "Isle Aimbot Hack: undetected Aimbot hack assist voor The Isle. directe digitale levering. undetected — Windows PC.",
					h1: "Isle Aimbot Hack",
					intro: "The Isle Hacks bundelt ESP wallhack, radar hack en Isle Aimbot als undetected pakket voor The Isle op Windows PC. Isle Aimbot Hack.",
					imageAlt: "Isle Aimbot hack controls and bone priority",
					galleryTitle: "Isle Aimbot Hack",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "The Isle Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/isle-aimbot/",
					sections: [
						{
							h2: "Isle Aimbot Hack",
							paragraphs: [
								"The Isle Hacks bundelt ESP wallhack, radar hack en Isle Aimbot als undetected pakket voor The Isle op Windows PC. undetected Aimbot hack assist voor The Isle.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@theislehack.org voor support en juridische vragen.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Isle ESP Hack | Boxes & Loot",
					description: "Isle ESP Hack: ESP hack boxen, karkas pins en afstand. directe digitale levering. undetected — Windows PC.",
					h1: "Isle ESP Hack",
					intro: "The Isle Hacks bundelt ESP wallhack, radar hack en Isle Aimbot als undetected pakket voor The Isle op Windows PC. Isle ESP Hack.",
					imageAlt: "Isle ESP hack boxes and carcass markers",
					galleryTitle: "Isle ESP Hack",
					heroImage: "/images/isle-hacks-wallhack.webp",
					ctaPrimary: "The Isle Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "Isle ESP Hack",
							paragraphs: [
								"The Isle Hacks bundelt ESP wallhack, radar hack en Isle Aimbot als undetected pakket voor The Isle op Windows PC. ESP hack boxen, karkas pins en afstand.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@theislehack.org voor support en juridische vragen.",
							],
						},
					],
				},
				"unlock-all": {
					title: "The Isle Unlock All | What It Means",
					description: "The Isle Unlock All: unlock-all zoekopdrachten vs echte ESP en Aimbot tools. directe digitale levering. undetected — Windows PC.",
					h1: "The Isle Unlock All",
					intro: "The Isle Hacks bundelt ESP wallhack, radar hack en Isle Aimbot als undetected pakket voor The Isle op Windows PC. The Isle Unlock All.",
					imageAlt: "The Isle Hacks license features overview",
					galleryTitle: "The Isle Unlock All",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "The Isle Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "The Isle Unlock All",
							paragraphs: [
								"The Isle Hacks bundelt ESP wallhack, radar hack en Isle Aimbot als undetected pakket voor The Isle op Windows PC. unlock-all zoekopdrachten vs echte ESP en Aimbot tools.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@theislehack.org voor support en juridische vragen.",
							],
						},
					],
				},
				privacy: {
					title: "Privacybeleid | The Isle Hacks",
					description: "Privacybeleid voor The Isle Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Privacybeleid",
					intro: "The Isle Hacks bundelt ESP wallhack, radar hack en Isle Aimbot als undetected pakket voor The Isle op Windows PC. Privacybeleid voor theislehack.org en The Isle-licenties.",
					imageAlt: "The Isle Hacks",
					galleryTitle: "The Isle Hacks",
					heroImage: "/images/isle-hacks-aimbot.webp",
					ctaPrimary: "E-mail support",
					ctaSecondary: "Voorwaarden lezen",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Informatie die we verzamelen",
							paragraphs: [
								"The Isle Hacks bundelt ESP wallhack, radar hack en Isle Aimbot als undetected pakket voor The Isle op Windows PC. Contact-e-mail, Zadeyo-orderreferenties en basisbeveiligingsgegevens van de site.",
								"Betalingsgegevens worden verwerkt via Zadeyo checkout — niet opgeslagen op theislehack.org.",
							],
						},
						{
							h2: "Hoe we gegevens gebruiken",
							paragraphs: [
								"The Isle Hacks bundelt ESP wallhack, radar hack en Isle Aimbot als undetected pakket voor The Isle op Windows PC. Supportreacties, orderafhandeling en wettelijke naleving indien vereist.",
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
							],
						},
						{
							h2: "Uw rechten",
							paragraphs: [
								"support@theislehack.org voor support en juridische vragen.",
								"E-mail: support@theislehack.org",
							],
						},
					],
				},
				refund: {
					title: "Restitutiebeleid | The Isle Hacks",
					description: "Restitutiebeleid voor The Isle Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Restitutiebeleid",
					intro: "The Isle Hacks bundelt ESP wallhack, radar hack en Isle Aimbot als undetected pakket voor The Isle op Windows PC. Restitutiebeleid voor theislehack.org en The Isle-licenties.",
					imageAlt: "The Isle Hacks",
					galleryTitle: "The Isle Hacks",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "E-mail support",
					ctaSecondary: "Privacy lezen",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digitale levering",
							paragraphs: [
								"The Isle Hacks bundelt ESP wallhack, radar hack en Isle Aimbot als undetected pakket voor The Isle op Windows PC. Contact-e-mail, Zadeyo-orderreferenties en basisbeveiligingsgegevens van de site.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "Restitutiegoedkeuring",
							paragraphs: [
								"The Isle Hacks bundelt ESP wallhack, radar hack en Isle Aimbot als undetected pakket voor The Isle op Windows PC. Supportreacties, orderafhandeling en wettelijke naleving indien vereist.",
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
							],
						},
						{
							h2: "Hoe aanvragen",
							paragraphs: [
								"support@theislehack.org voor support en juridische vragen.",
								"E-mail: support@theislehack.org",
							],
						},
					],
				},
				terms: {
					title: "Gebruiksvoorwaarden | The Isle Hacks",
					description: "Gebruiksvoorwaarden voor The Isle Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Gebruiksvoorwaarden",
					intro: "The Isle Hacks bundelt ESP wallhack, radar hack en Isle Aimbot als undetected pakket voor The Isle op Windows PC. Gebruiksvoorwaarden voor theislehack.org en The Isle-licenties.",
					imageAlt: "The Isle Hacks",
					galleryTitle: "The Isle Hacks",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "E-mail support",
					ctaSecondary: "Privacy lezen",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptatie van voorwaarden",
							paragraphs: [
								"The Isle Hacks bundelt ESP wallhack, radar hack en Isle Aimbot als undetected pakket voor The Isle op Windows PC. Contact-e-mail, Zadeyo-orderreferenties en basisbeveiligingsgegevens van de site.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "Risicowaarschuwing",
							paragraphs: [
								"The Isle Hacks bundelt ESP wallhack, radar hack en Isle Aimbot als undetected pakket voor The Isle op Windows PC. Supportreacties, orderafhandeling en wettelijke naleving indien vereist.",
								"Cheats gebruiken kan in strijd zijn met de voorwaarden van het The Isle team — u neemt alle ban-risico's op u.",
							],
						},
						{
							h2: "Beleidswijzigingen",
							paragraphs: [
								"support@theislehack.org voor support en juridische vragen.",
								"E-mail: support@theislehack.org",
							],
						},
					],
				},
			},
		},
		pl: {
			ui: {
				nav: {
					home: "Strona główna",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funkcje",
					pricing: "Cennik",
					setup: "Instalacja",
					updates: "Aktualizacje",
					faq: "FAQ",
					buyNow: "Kup teraz",
				},
				hero: {
					accent: "Undetected cheaty The Isle",
					accentShort: "The Isle Hacks",
					subtitle: "ESP wallhack, radar hack i Aimbot do The Isle na PC Windows — konserwacja Easy Anti-Cheat w cenie.",
					subtitleShort: "ESP, radar i Aimbot dla The Isle PC",
					buyNow: "Kup teraz",
					seeFeatures: "Zobacz funkcje",
				},
				trust: {
					status: "Online",
					statusNote: "Pakiet The Isle Hacks jest aktywny dla The Isle na PC Windows.",
					statusShort: "Aktywny",
					delivery: "Natychmiastowa dostawa cyfrowa",
					platform: "Windows 10 i 11",
					antiCheat: "Wsparcie konserwacji Easy Anti-Cheat",
					antiCheatShort: "Easy Anti-Cheat wsparcie",
				},
				product: {
					title: "The Isle Hacks",
					addToCart: "Dodaj do koszyka",
					monthly: "Miesięcznie",
					lifetime: "Dożywotnio",
					available: "Dostępne teraz",
					gameBadge: "The Isle",
					platformBadge: "PC Windows",
					statusBadge: "Pakiet undetected",
				},
				reviews: {
					title: "Co mówią gracze",
					subtitle: "Ostatnie opinie kupujących The Isle Hacks",
					outOf: "na 5",
					countLabel: "opinii",
				},
				common: {
					buyNow: "Kup teraz",
					readGuide: "Czytaj poradnik",
					language: "Język",
					officialLanguageNote: "Angielski jest językiem oficjalnym. Inne wersje są tłumaczone dla globalnego SEO.",
					relatedPages: "Powiązane strony",
				},
				footer: {
					explore: "Odkrywaj",
					help: "Pomoc i prawo",
					tagline: "Undetected ESP, wallhack, radar i Aimbot dla The Isle — checkout przez Zadeyo.",
				},
				images: {
					hero: "The Isle Hacks hero — ESP and aimbot overlay in The Isle",
					espWallhack: "Wallhack outlines showing players and wild dinosaurs through walls",
					aimbotCombat: "Soft aim assist overlay during a The Isle session",
					packFight: "The Isle Hacks combat overlay during a pack fight",
					dinoEsp: "Player ESP boxes and distance readouts in a The Isle session",
					headerArt: "Aimbot view and bone priority controls for The Isle",
					hacksPackage: "2D radar threat overlay for The Isle",
					ambushFight: "Aimbot assist during a The Isle hunt",
					battleRoyale: "The Isle Hacks in-session overview for Windows PC",
					survivalIsland: "ESP markers for carcasses and nests in The Isle",
				},
			},
			pages: {
				home: {
					title: "The Isle Hacks 2026 | ESP, Wallhack i Aimbot",
					description: "Undetected cheaty The Isle dla The Isle na PC. ESP wallhack, radar hack i Aimbot z konserwacją Easy Anti-Cheat. Natychmiastowa dostawa cyfrowa.",
					h1: "The Isle Hacks — Undetected ESP, Wallhack i Aimbot",
					intro: "Pakiet undetected dla The Isle na Windows PC: ESP wallhack, radar i Aimbot z konserwacją Easy Anti-Cheat po każdym patchu.",
					imageAlt: "Isle ESP player tags hack",
					galleryTitle: "Galeria The Isle Hacks — ESP, Aimbot i wallhack",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "Kup The Isle Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Dlaczego The Isle Hacks w 2026",
							paragraphs: [
								"The Isle Hacks łączy ESP wallhack, radar hack i Isle Aimbot jako pakiet undetected dla The Isle na PC Windows. Idealny do czytania wrogich packów w BR i growth run.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar i Aimbot w jednej licencji",
							paragraphs: [
								"The Isle Hacks łączy ESP wallhack, radar hack i Isle Aimbot jako pakiet undetected dla The Isle na PC Windows. Jedna licencja zamiast osobnych narzędzi.",
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
							],
						},
					],
				},
				"isle-esp": {
					title: "ESP The Isle | Player Boxes & Wallhack",
					description: "ESP The Isle: boxy graczy, markery tusz i overlay wallhack. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "ESP The Isle",
					intro: "The Isle Hacks łączy ESP wallhack, radar hack i Isle Aimbot jako pakiet undetected dla The Isle na PC Windows. ESP The Isle.",
					imageAlt: "Isle ESP player boxes and distance readouts in a session",
					galleryTitle: "ESP The Isle",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "Kup The Isle Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "ESP The Isle",
							paragraphs: [
								"The Isle Hacks łączy ESP wallhack, radar hack i Isle Aimbot jako pakiet undetected dla The Isle na PC Windows. boxy graczy, markery tusz i overlay wallhack.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@theislehack.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"isle-aimbot": {
					title: "Aimbot The Isle | Soft Aim Controls",
					description: "Aimbot The Isle: soft aim, FOV i profile Aimbot per gatunek. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Aimbot The Isle",
					intro: "The Isle Hacks łączy ESP wallhack, radar hack i Isle Aimbot jako pakiet undetected dla The Isle na PC Windows. Aimbot The Isle.",
					imageAlt: "Isle Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot The Isle",
					heroImage: "/images/isle-hacks-aimbot.webp",
					ctaPrimary: "Kup The Isle Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "Aimbot The Isle",
							paragraphs: [
								"The Isle Hacks łączy ESP wallhack, radar hack i Isle Aimbot jako pakiet undetected dla The Isle na PC Windows. soft aim, FOV i profile Aimbot per gatunek.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@theislehack.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				features: {
					title: "Funkcje | Full Feature List",
					description: "Funkcje: ESP, soft aim, sterowanie radar. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Funkcje",
					intro: "The Isle Hacks łączy ESP wallhack, radar hack i Isle Aimbot jako pakiet undetected dla The Isle na PC Windows. Funkcje.",
					imageAlt: "The Isle Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funkcje",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "Kup The Isle Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funkcje",
							paragraphs: [
								"The Isle Hacks łączy ESP wallhack, radar hack i Isle Aimbot jako pakiet undetected dla The Isle na PC Windows. ESP, soft aim, sterowanie radar.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@theislehack.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				pricing: {
					title: "Cennik | Monthly & Lifetime",
					description: "Cennik: licencje $35 miesięcznie lub $150 lifetime. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Cennik",
					intro: "The Isle Hacks łączy ESP wallhack, radar hack i Isle Aimbot jako pakiet undetected dla The Isle na PC Windows. Cennik.",
					imageAlt: "The Isle Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Cennik",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "Kup The Isle Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Cennik",
							paragraphs: [
								"The Isle Hacks łączy ESP wallhack, radar hack i Isle Aimbot jako pakiet undetected dla The Isle na PC Windows. licencje $35 miesięcznie lub $150 lifetime.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@theislehack.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				setup: {
					title: "Instalacja | PC Setup Guide",
					description: "Instalacja: aktywacja Windows PC i konfiguracja pierwszego uruchomienia. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Instalacja",
					intro: "The Isle Hacks łączy ESP wallhack, radar hack i Isle Aimbot jako pakiet undetected dla The Isle na PC Windows. Instalacja.",
					imageAlt: "The Isle Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Instalacja",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "Kup The Isle Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalacja",
							paragraphs: [
								"The Isle Hacks łączy ESP wallhack, radar hack i Isle Aimbot jako pakiet undetected dla The Isle na PC Windows. aktywacja Windows PC i konfiguracja pierwszego uruchomienia.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@theislehack.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				updates: {
					title: "Aktualizacje | Easy Anti-Cheat Maintenance Log",
					description: "Aktualizacje: status patchy Easy Anti-Cheat i notatki rebuild. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Aktualizacje",
					intro: "The Isle Hacks łączy ESP wallhack, radar hack i Isle Aimbot jako pakiet undetected dla The Isle na PC Windows. Aktualizacje.",
					imageAlt: "The Isle Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Aktualizacje",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "Kup The Isle Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "Aktualizacje",
							paragraphs: [
								"The Isle Hacks łączy ESP wallhack, radar hack i Isle Aimbot jako pakiet undetected dla The Isle na PC Windows. status patchy Easy Anti-Cheat i notatki rebuild.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@theislehack.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: pytania o ESP, soft aim, dostawę i Easy Anti-Cheat. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "FAQ",
					intro: "The Isle Hacks łączy ESP wallhack, radar hack i Isle Aimbot jako pakiet undetected dla The Isle na PC Windows. FAQ.",
					imageAlt: "The Isle Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "Kup The Isle Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"The Isle Hacks łączy ESP wallhack, radar hack i Isle Aimbot jako pakiet undetected dla The Isle na PC Windows. pytania o ESP, soft aim, dostawę i Easy Anti-Cheat.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@theislehack.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				support: {
					title: "Wsparcie | Help & Contact",
					description: "Wsparcie: pomoc przy zamówieniu i kontakt wsparcia licencji. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Wsparcie",
					intro: "The Isle Hacks łączy ESP wallhack, radar hack i Isle Aimbot jako pakiet undetected dla The Isle na PC Windows. Wsparcie.",
					imageAlt: "The Isle Hacks support page for license and setup help",
					galleryTitle: "Wsparcie",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "Kup The Isle Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Wsparcie",
							paragraphs: [
								"The Isle Hacks łączy ESP wallhack, radar hack i Isle Aimbot jako pakiet undetected dla The Isle na PC Windows. pomoc przy zamówieniu i kontakt wsparcia licencji.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@theislehack.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				undetected: {
					title: "Cheaty undetected | Easy Anti-Cheat Safe Status",
					description: "Cheaty undetected: undetected konserwacja po patchach Easy Anti-Cheat. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Cheaty undetected",
					intro: "The Isle Hacks łączy ESP wallhack, radar hack i Isle Aimbot jako pakiet undetected dla The Isle na PC Windows. Cheaty undetected.",
					imageAlt: "The Isle Hacks undetected status overview for Windows PC",
					galleryTitle: "Cheaty undetected",
					heroImage: "/images/isle-hacks-wallhack.webp",
					ctaPrimary: "Kup The Isle Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "Cheaty undetected",
							paragraphs: [
								"The Isle Hacks łączy ESP wallhack, radar hack i Isle Aimbot jako pakiet undetected dla The Isle na PC Windows. undetected konserwacja po patchach Easy Anti-Cheat.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@theislehack.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				wallhack: {
					title: "The Isle Wallhack | ESP Visibility",
					description: "The Isle Wallhack: wallhack ESP dla graczy, tusz i dystansu. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "The Isle Wallhack",
					intro: "The Isle Hacks łączy ESP wallhack, radar hack i Isle Aimbot jako pakiet undetected dla The Isle na PC Windows. The Isle Wallhack.",
					imageAlt: "isle wallhack visibility through walls in a session",
					galleryTitle: "The Isle Wallhack",
					heroImage: "/images/isle-hacks-wallhack.webp",
					ctaPrimary: "Kup The Isle Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "The Isle Wallhack",
							paragraphs: [
								"The Isle Hacks łączy ESP wallhack, radar hack i Isle Aimbot jako pakiet undetected dla The Isle na PC Windows. wallhack ESP dla graczy, tusz i dystansu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@theislehack.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: 2D radar wskazówki dla flank i rotacji. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Radar hack",
					intro: "The Isle Hacks łączy ESP wallhack, radar hack i Isle Aimbot jako pakiet undetected dla The Isle na PC Windows. Radar hack.",
					imageAlt: "The Isle 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "Kup The Isle Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"The Isle Hacks łączy ESP wallhack, radar hack i Isle Aimbot jako pakiet undetected dla The Isle na PC Windows. 2D radar wskazówki dla flank i rotacji.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@theislehack.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Patch Maintenance",
					description: "Bypass Easy Anti-Cheat: jak obsługiwane są aktualizacje Easy Anti-Cheat dla The Isle hacks. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "The Isle Hacks łączy ESP wallhack, radar hack i Isle Aimbot jako pakiet undetected dla The Isle na PC Windows. Bypass Easy Anti-Cheat.",
					imageAlt: "The Isle Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/isle-hacks-aimbot.webp",
					ctaPrimary: "Kup The Isle Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"The Isle Hacks łączy ESP wallhack, radar hack i Isle Aimbot jako pakiet undetected dla The Isle na PC Windows. jak obsługiwane są aktualizacje Easy Anti-Cheat dla The Isle hacks.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@theislehack.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheaty The Isle 2026 | Buyer Guide",
					description: "Cheaty The Isle 2026: checklista the isle hacks 2026 przed checkout. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Cheaty The Isle 2026",
					intro: "The Isle Hacks łączy ESP wallhack, radar hack i Isle Aimbot jako pakiet undetected dla The Isle na PC Windows. Cheaty The Isle 2026.",
					imageAlt: "The Isle Hacks product overview for The Isle",
					galleryTitle: "Cheaty The Isle 2026",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "Kup The Isle Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "Cheaty The Isle 2026",
							paragraphs: [
								"The Isle Hacks łączy ESP wallhack, radar hack i Isle Aimbot jako pakiet undetected dla The Isle na PC Windows. checklista the isle hacks 2026 przed checkout.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@theislehack.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				hacks: {
					title: "Cheaty The Isle | ESP Aimbot Guide",
					description: "Cheaty The Isle: filary The Isle Hacks dla ESP i Aimbot. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Cheaty The Isle",
					intro: "The Isle Hacks łączy ESP wallhack, radar hack i Isle Aimbot jako pakiet undetected dla The Isle na PC Windows. Cheaty The Isle.",
					imageAlt: "The Isle Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Cheaty The Isle",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "Kup The Isle Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheaty The Isle",
							paragraphs: [
								"The Isle Hacks łączy ESP wallhack, radar hack i Isle Aimbot jako pakiet undetected dla The Isle na PC Windows. filary The Isle Hacks dla ESP i Aimbot.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@theislehack.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Pobieranie The Isle Hacks | Instant Access",
					description: "Pobieranie The Isle Hacks: cyfrowe pobranie licencji po płatności. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Pobieranie The Isle Hacks",
					intro: "The Isle Hacks łączy ESP wallhack, radar hack i Isle Aimbot jako pakiet undetected dla The Isle na PC Windows. Pobieranie The Isle Hacks.",
					imageAlt: "The Isle Hacks download and install delivery flow",
					galleryTitle: "Pobieranie The Isle Hacks",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "Kup The Isle Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Pobieranie The Isle Hacks",
							paragraphs: [
								"The Isle Hacks łączy ESP wallhack, radar hack i Isle Aimbot jako pakiet undetected dla The Isle na PC Windows. cyfrowe pobranie licencji po płatności.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@theislehack.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Mod menu The Isle | In-Game Toggles",
					description: "Mod menu The Isle: przełączniki ESP i soft aim w kliencie. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Mod menu The Isle",
					intro: "The Isle Hacks łączy ESP wallhack, radar hack i Isle Aimbot jako pakiet undetected dla The Isle na PC Windows. Mod menu The Isle.",
					imageAlt: "The Isle Hacks in-game menu controls",
					galleryTitle: "Mod menu The Isle",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "Kup The Isle Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Mod menu The Isle",
							paragraphs: [
								"The Isle Hacks łączy ESP wallhack, radar hack i Isle Aimbot jako pakiet undetected dla The Isle na PC Windows. przełączniki ESP i soft aim w kliencie.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@theislehack.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim The Isle | Smooth Aim Settings",
					description: "Soft aim The Isle: płynne ustawienia soft aim dla Windows PC. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Soft aim The Isle",
					intro: "The Isle Hacks łączy ESP wallhack, radar hack i Isle Aimbot jako pakiet undetected dla The Isle na PC Windows. Soft aim The Isle.",
					imageAlt: "The Isle soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim The Isle",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "Kup The Isle Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/isle-aimbot/",
					sections: [
						{
							h2: "Soft aim The Isle",
							paragraphs: [
								"The Isle Hacks łączy ESP wallhack, radar hack i Isle Aimbot jako pakiet undetected dla The Isle na PC Windows. płynne ustawienia soft aim dla Windows PC.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@theislehack.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Najlepsze cheaty The Isle | Buyer Checklist",
					description: "Najlepsze cheaty The Isle: co porównać przed zakupem the isle hacks. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Najlepsze cheaty The Isle",
					intro: "The Isle Hacks łączy ESP wallhack, radar hack i Isle Aimbot jako pakiet undetected dla The Isle na PC Windows. Najlepsze cheaty The Isle.",
					imageAlt: "The Isle Hacks overview for The Isle on PC",
					galleryTitle: "Najlepsze cheaty The Isle",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "Kup The Isle Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Najlepsze cheaty The Isle",
							paragraphs: [
								"The Isle Hacks łączy ESP wallhack, radar hack i Isle Aimbot jako pakiet undetected dla The Isle na PC Windows. co porównać przed zakupem the isle hacks.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@theislehack.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot The Isle | Soft Aim Assist",
					description: "Hack aimbot The Isle: undetected Aimbot hack assist dla The Isle. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Hack aimbot The Isle",
					intro: "The Isle Hacks łączy ESP wallhack, radar hack i Isle Aimbot jako pakiet undetected dla The Isle na PC Windows. Hack aimbot The Isle.",
					imageAlt: "Isle Aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot The Isle",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "Kup The Isle Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/isle-aimbot/",
					sections: [
						{
							h2: "Hack aimbot The Isle",
							paragraphs: [
								"The Isle Hacks łączy ESP wallhack, radar hack i Isle Aimbot jako pakiet undetected dla The Isle na PC Windows. undetected Aimbot hack assist dla The Isle.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@theislehack.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP The Isle | Boxes & Loot",
					description: "Hack ESP The Isle: boxy ESP hack, piny tusz i dystans. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Hack ESP The Isle",
					intro: "The Isle Hacks łączy ESP wallhack, radar hack i Isle Aimbot jako pakiet undetected dla The Isle na PC Windows. Hack ESP The Isle.",
					imageAlt: "Isle ESP hack boxes and carcass markers",
					galleryTitle: "Hack ESP The Isle",
					heroImage: "/images/isle-hacks-wallhack.webp",
					ctaPrimary: "Kup The Isle Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "Hack ESP The Isle",
							paragraphs: [
								"The Isle Hacks łączy ESP wallhack, radar hack i Isle Aimbot jako pakiet undetected dla The Isle na PC Windows. boxy ESP hack, piny tusz i dystans.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@theislehack.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all The Isle | What It Means",
					description: "Unlock all The Isle: wyszukiwania unlock-all vs prawdziwe narzędzia ESP i Aimbot. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Unlock all The Isle",
					intro: "The Isle Hacks łączy ESP wallhack, radar hack i Isle Aimbot jako pakiet undetected dla The Isle na PC Windows. Unlock all The Isle.",
					imageAlt: "The Isle Hacks license features overview",
					galleryTitle: "Unlock all The Isle",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "Kup The Isle Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all The Isle",
							paragraphs: [
								"The Isle Hacks łączy ESP wallhack, radar hack i Isle Aimbot jako pakiet undetected dla The Isle na PC Windows. wyszukiwania unlock-all vs prawdziwe narzędzia ESP i Aimbot.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@theislehack.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				privacy: {
					title: "Polityka prywatności | The Isle Hacks",
					description: "Polityka prywatności dla The Isle Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Polityka prywatności",
					intro: "The Isle Hacks łączy ESP wallhack, radar hack i Isle Aimbot jako pakiet undetected dla The Isle na PC Windows. Polityka prywatności dla theislehack.org i licencji The Isle.",
					imageAlt: "The Isle Hacks",
					galleryTitle: "The Isle Hacks",
					heroImage: "/images/isle-hacks-aimbot.webp",
					ctaPrimary: "E-mail do supportu",
					ctaSecondary: "Przeczytaj warunki",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Informacje, które zbieramy",
							paragraphs: [
								"The Isle Hacks łączy ESP wallhack, radar hack i Isle Aimbot jako pakiet undetected dla The Isle na PC Windows. E-mail kontaktowy, referencje zamówień Zadeyo i podstawowe dane bezpieczeństwa witryny.",
								"Dane płatności są przetwarzane przez checkout Zadeyo — nie przechowywane na theislehack.org.",
							],
						},
						{
							h2: "Jak wykorzystujemy dane",
							paragraphs: [
								"The Isle Hacks łączy ESP wallhack, radar hack i Isle Aimbot jako pakiet undetected dla The Isle na PC Windows. Odpowiedzi wsparcia, rozwiązywanie zamówień i zgodność prawna w razie potrzeby.",
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
							],
						},
						{
							h2: "Twoje prawa",
							paragraphs: [
								"support@theislehack.org w sprawach wsparcia i prawnych.",
								"E-mail: support@theislehack.org",
							],
						},
					],
				},
				refund: {
					title: "Polityka zwrotów | The Isle Hacks",
					description: "Polityka zwrotów dla The Isle Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Polityka zwrotów",
					intro: "The Isle Hacks łączy ESP wallhack, radar hack i Isle Aimbot jako pakiet undetected dla The Isle na PC Windows. Polityka zwrotów dla theislehack.org i licencji The Isle.",
					imageAlt: "The Isle Hacks",
					galleryTitle: "The Isle Hacks",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "E-mail do supportu",
					ctaSecondary: "Przeczytaj politykę prywatności",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Dostawa cyfrowa",
							paragraphs: [
								"The Isle Hacks łączy ESP wallhack, radar hack i Isle Aimbot jako pakiet undetected dla The Isle na PC Windows. E-mail kontaktowy, referencje zamówień Zadeyo i podstawowe dane bezpieczeństwa witryny.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "Zatwierdzenie zwrotu",
							paragraphs: [
								"The Isle Hacks łączy ESP wallhack, radar hack i Isle Aimbot jako pakiet undetected dla The Isle na PC Windows. Odpowiedzi wsparcia, rozwiązywanie zamówień i zgodność prawna w razie potrzeby.",
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
							],
						},
						{
							h2: "Jak złożyć wniosek",
							paragraphs: [
								"support@theislehack.org w sprawach wsparcia i prawnych.",
								"E-mail: support@theislehack.org",
							],
						},
					],
				},
				terms: {
					title: "Warunki użytkowania | The Isle Hacks",
					description: "Warunki użytkowania dla The Isle Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Warunki użytkowania",
					intro: "The Isle Hacks łączy ESP wallhack, radar hack i Isle Aimbot jako pakiet undetected dla The Isle na PC Windows. Warunki użytkowania dla theislehack.org i licencji The Isle.",
					imageAlt: "The Isle Hacks",
					galleryTitle: "The Isle Hacks",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "E-mail do supportu",
					ctaSecondary: "Przeczytaj politykę prywatności",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Akceptacja warunków",
							paragraphs: [
								"The Isle Hacks łączy ESP wallhack, radar hack i Isle Aimbot jako pakiet undetected dla The Isle na PC Windows. E-mail kontaktowy, referencje zamówień Zadeyo i podstawowe dane bezpieczeństwa witryny.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "Ostrzeżenie o ryzyku",
							paragraphs: [
								"The Isle Hacks łączy ESP wallhack, radar hack i Isle Aimbot jako pakiet undetected dla The Isle na PC Windows. Odpowiedzi wsparcia, rozwiązywanie zamówień i zgodność prawna w razie potrzeby.",
								"Korzystanie z cheatów może naruszać warunki zespołu The Isle — bierzesz na siebie ryzyko bana.",
							],
						},
						{
							h2: "Zmiany polityki",
							paragraphs: [
								"support@theislehack.org w sprawach wsparcia i prawnych.",
								"E-mail: support@theislehack.org",
							],
						},
					],
				},
			},
		},
		ru: {
			ui: {
				nav: {
					home: "Главная",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Функции",
					pricing: "Цены",
					setup: "Установка",
					updates: "Обновления",
					faq: "FAQ",
					buyNow: "Купить",
				},
				hero: {
					accent: "Undetected читы The Isle",
					accentShort: "The Isle Hacks",
					subtitle: "ESP wallhack, radar hack и Aimbot для The Isle на Windows PC — обслуживание Easy Anti-Cheat включено.",
					subtitleShort: "ESP, radar и Aimbot для The Isle PC",
					buyNow: "Купить",
					seeFeatures: "Смотреть функции",
				},
				trust: {
					status: "Онлайн",
					statusNote: "Пакет The Isle Hacks активен для The Isle на Windows PC.",
					statusShort: "Активен",
					delivery: "Мгновенная цифровая доставка",
					platform: "Windows 10 и 11",
					antiCheat: "Поддержка обслуживания Easy Anti-Cheat",
					antiCheatShort: "Easy Anti-Cheat поддержка",
				},
				product: {
					title: "The Isle Hacks",
					addToCart: "В корзину",
					monthly: "Месяц",
					lifetime: "Навсегда",
					available: "Доступно сейчас",
					gameBadge: "The Isle",
					platformBadge: "Windows PC",
					statusBadge: "Undetected пакет",
				},
				reviews: {
					title: "Что говорят игроки",
					subtitle: "Недавние отзывы покупателей The Isle Hacks",
					outOf: "из 5",
					countLabel: "отзывов",
				},
				common: {
					buyNow: "Купить",
					readGuide: "Читать гайд",
					language: "Язык",
					officialLanguageNote: "Английский — официальный язык. Другие версии переведены для глобального SEO.",
					relatedPages: "Похожие страницы",
				},
				footer: {
					explore: "Обзор",
					help: "Помощь и право",
					tagline: "Undetected ESP, wallhack, radar и Aimbot для The Isle — оплата через Zadeyo.",
				},
				images: {
					hero: "The Isle Hacks hero — ESP and aimbot overlay in The Isle",
					espWallhack: "Wallhack outlines showing players and wild dinosaurs through walls",
					aimbotCombat: "Soft aim assist overlay during a The Isle session",
					packFight: "The Isle Hacks combat overlay during a pack fight",
					dinoEsp: "Player ESP boxes and distance readouts in a The Isle session",
					headerArt: "Aimbot view and bone priority controls for The Isle",
					hacksPackage: "2D radar threat overlay for The Isle",
					ambushFight: "Aimbot assist during a The Isle hunt",
					battleRoyale: "The Isle Hacks in-session overview for Windows PC",
					survivalIsland: "ESP markers for carcasses and nests in The Isle",
				},
			},
			pages: {
				home: {
					title: "The Isle Hacks 2026 | ESP, Wallhack и Aimbot",
					description: "Undetected читы The Isle для The Isle на PC. ESP wallhack, radar hack и Aimbot с обслуживанием Easy Anti-Cheat. Мгновенная цифровая доставка.",
					h1: "The Isle Hacks — Undetected ESP, Wallhack и Aimbot",
					intro: "Undetected пакет для The Isle на Windows PC: ESP wallhack, radar и Aimbot с обслуживанием Easy Anti-Cheat после патчей.",
					imageAlt: "Isle ESP — теги игроков hack",
					galleryTitle: "Галерея The Isle Hacks — ESP, Aimbot и wallhack",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "Купить The Isle Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Почему выбирают The Isle Hacks в 2026",
							paragraphs: [
								"The Isle Hacks объединяет ESP wallhack, radar hack и Isle Aimbot в undetected пакете для The Isle на Windows PC. Идеально для чтения вражеских отрядов в BR и growth run.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar и Aimbot в одной лицензии",
							paragraphs: [
								"The Isle Hacks объединяет ESP wallhack, radar hack и Isle Aimbot в undetected пакете для The Isle на Windows PC. Одна лицензия вместо отдельных инструментов.",
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
							],
						},
					],
				},
				"isle-esp": {
					title: "ESP The Isle | Боксы игроков и wallhack",
					description: "ESP The Isle: боксы игроков, маркеры туш и wallhack overlays. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "ESP The Isle",
					intro: "The Isle Hacks объединяет ESP wallhack, radar hack и Isle Aimbot в undetected пакете для The Isle на Windows PC. ESP The Isle.",
					imageAlt: "Isle ESP player boxes and distance readouts in a session",
					galleryTitle: "ESP The Isle",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "Купить The Isle Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "ESP The Isle",
							paragraphs: [
								"The Isle Hacks объединяет ESP wallhack, radar hack и Isle Aimbot в undetected пакете для The Isle на Windows PC. боксы игроков, маркеры туш и wallhack overlays.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@theislehack.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"isle-aimbot": {
					title: "Aimbot The Isle | Управление soft aim",
					description: "Aimbot The Isle: soft aim, FOV и профили Aimbot по видам. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Aimbot The Isle",
					intro: "The Isle Hacks объединяет ESP wallhack, radar hack и Isle Aimbot в undetected пакете для The Isle на Windows PC. Aimbot The Isle.",
					imageAlt: "Isle Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot The Isle",
					heroImage: "/images/isle-hacks-aimbot.webp",
					ctaPrimary: "Купить The Isle Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "Aimbot The Isle",
							paragraphs: [
								"The Isle Hacks объединяет ESP wallhack, radar hack и Isle Aimbot в undetected пакете для The Isle на Windows PC. soft aim, FOV и профили Aimbot по видам.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@theislehack.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				features: {
					title: "Функции | Полный список функций",
					description: "Функции: ESP, soft aim, управление radar. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Функции",
					intro: "The Isle Hacks объединяет ESP wallhack, radar hack и Isle Aimbot в undetected пакете для The Isle на Windows PC. Функции.",
					imageAlt: "The Isle Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Функции",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "Купить The Isle Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Функции",
							paragraphs: [
								"The Isle Hacks объединяет ESP wallhack, radar hack и Isle Aimbot в undetected пакете для The Isle на Windows PC. ESP, soft aim, управление radar.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@theislehack.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				pricing: {
					title: "Цены | Месяц и lifetime",
					description: "Цены: лицензии $35 в месяц или $150 lifetime. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Цены",
					intro: "The Isle Hacks объединяет ESP wallhack, radar hack и Isle Aimbot в undetected пакете для The Isle на Windows PC. Цены.",
					imageAlt: "The Isle Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Цены",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "Купить The Isle Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Цены",
							paragraphs: [
								"The Isle Hacks объединяет ESP wallhack, radar hack и Isle Aimbot в undetected пакете для The Isle на Windows PC. лицензии $35 в месяц или $150 lifetime.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@theislehack.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				setup: {
					title: "Установка | Гайд по установке",
					description: "Установка: активация на Windows PC и настройка первого запуска. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Установка",
					intro: "The Isle Hacks объединяет ESP wallhack, radar hack и Isle Aimbot в undetected пакете для The Isle на Windows PC. Установка.",
					imageAlt: "The Isle Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Установка",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "Купить The Isle Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Установка",
							paragraphs: [
								"The Isle Hacks объединяет ESP wallhack, radar hack и Isle Aimbot в undetected пакете для The Isle на Windows PC. активация на Windows PC и настройка первого запуска.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@theislehack.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				updates: {
					title: "Обновления | Журнал Easy Anti-Cheat",
					description: "Обновления: статус патчей Easy Anti-Cheat и заметки о rebuild. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Обновления",
					intro: "The Isle Hacks объединяет ESP wallhack, radar hack и Isle Aimbot в undetected пакете для The Isle на Windows PC. Обновления.",
					imageAlt: "The Isle Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Обновления",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "Купить The Isle Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "Обновления",
							paragraphs: [
								"The Isle Hacks объединяет ESP wallhack, radar hack и Isle Aimbot в undetected пакете для The Isle на Windows PC. статус патчей Easy Anti-Cheat и заметки о rebuild.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@theislehack.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Частые вопросы",
					description: "FAQ: вопросы об ESP, soft aim, доставке и Easy Anti-Cheat. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "FAQ",
					intro: "The Isle Hacks объединяет ESP wallhack, radar hack и Isle Aimbot в undetected пакете для The Isle на Windows PC. FAQ.",
					imageAlt: "The Isle Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "Купить The Isle Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"The Isle Hacks объединяет ESP wallhack, radar hack и Isle Aimbot в undetected пакете для The Isle на Windows PC. вопросы об ESP, soft aim, доставке и Easy Anti-Cheat.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@theislehack.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				support: {
					title: "Поддержка | Помощь и контакт",
					description: "Поддержка: помощь с заказом и контакт поддержки лицензий. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Поддержка",
					intro: "The Isle Hacks объединяет ESP wallhack, radar hack и Isle Aimbot в undetected пакете для The Isle на Windows PC. Поддержка.",
					imageAlt: "The Isle Hacks support page for license and setup help",
					galleryTitle: "Поддержка",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "Купить The Isle Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Поддержка",
							paragraphs: [
								"The Isle Hacks объединяет ESP wallhack, radar hack и Isle Aimbot в undetected пакете для The Isle на Windows PC. помощь с заказом и контакт поддержки лицензий.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@theislehack.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected читы | Статус undetected",
					description: "Undetected читы: undetected обслуживание после патчей Easy Anti-Cheat. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Undetected читы",
					intro: "The Isle Hacks объединяет ESP wallhack, radar hack и Isle Aimbot в undetected пакете для The Isle на Windows PC. Undetected читы.",
					imageAlt: "The Isle Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected читы",
					heroImage: "/images/isle-hacks-wallhack.webp",
					ctaPrimary: "Купить The Isle Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "Undetected читы",
							paragraphs: [
								"The Isle Hacks объединяет ESP wallhack, radar hack и Isle Aimbot в undetected пакете для The Isle на Windows PC. undetected обслуживание после патчей Easy Anti-Cheat.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@theislehack.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				wallhack: {
					title: "The Isle Wallhack | Видимость ESP",
					description: "The Isle Wallhack: wallhack ESP для игроков, туш и дистанции. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "The Isle Wallhack",
					intro: "The Isle Hacks объединяет ESP wallhack, radar hack и Isle Aimbot в undetected пакете для The Isle на Windows PC. The Isle Wallhack.",
					imageAlt: "isle wallhack visibility through walls in a session",
					galleryTitle: "The Isle Wallhack",
					heroImage: "/images/isle-hacks-wallhack.webp",
					ctaPrimary: "Купить The Isle Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "The Isle Wallhack",
							paragraphs: [
								"The Isle Hacks объединяет ESP wallhack, radar hack и Isle Aimbot в undetected пакете для The Isle на Windows PC. wallhack ESP для игроков, туш и дистанции.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@theislehack.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D радар угроз",
					description: "Radar hack: 2D radar подсказки для флангов и ротаций. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Radar hack",
					intro: "The Isle Hacks объединяет ESP wallhack, radar hack и Isle Aimbot в undetected пакете для The Isle на Windows PC. Radar hack.",
					imageAlt: "The Isle 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "Купить The Isle Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"The Isle Hacks объединяет ESP wallhack, radar hack и Isle Aimbot в undetected пакете для The Isle на Windows PC. 2D radar подсказки для флангов и ротаций.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@theislehack.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Обслуживание патчей",
					description: "Bypass Easy Anti-Cheat: как обрабатываются обновления Easy Anti-Cheat для The Isle hacks. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "The Isle Hacks объединяет ESP wallhack, radar hack и Isle Aimbot в undetected пакете для The Isle на Windows PC. Bypass Easy Anti-Cheat.",
					imageAlt: "The Isle Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/isle-hacks-aimbot.webp",
					ctaPrimary: "Купить The Isle Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"The Isle Hacks объединяет ESP wallhack, radar hack и Isle Aimbot в undetected пакете для The Isle на Windows PC. как обрабатываются обновления Easy Anti-Cheat для The Isle hacks.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@theislehack.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Читы The Isle 2026 | Гайд покупателя",
					description: "Читы The Isle 2026: чеклист the isle hacks 2026 перед checkout. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Читы The Isle 2026",
					intro: "The Isle Hacks объединяет ESP wallhack, radar hack и Isle Aimbot в undetected пакете для The Isle на Windows PC. Читы The Isle 2026.",
					imageAlt: "The Isle Hacks product overview for The Isle",
					galleryTitle: "Читы The Isle 2026",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "Купить The Isle Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "Читы The Isle 2026",
							paragraphs: [
								"The Isle Hacks объединяет ESP wallhack, radar hack и Isle Aimbot в undetected пакете для The Isle на Windows PC. чеклист the isle hacks 2026 перед checkout.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@theislehack.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				hacks: {
					title: "Читы The Isle | Гайд ESP и Aimbot",
					description: "Читы The Isle: столп The Isle Hacks для ESP и Aimbot. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Читы The Isle",
					intro: "The Isle Hacks объединяет ESP wallhack, radar hack и Isle Aimbot в undetected пакете для The Isle на Windows PC. Читы The Isle.",
					imageAlt: "The Isle Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Читы The Isle",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "Купить The Isle Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Читы The Isle",
							paragraphs: [
								"The Isle Hacks объединяет ESP wallhack, radar hack и Isle Aimbot в undetected пакете для The Isle на Windows PC. столп The Isle Hacks для ESP и Aimbot.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@theislehack.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Скачать The Isle Hacks | Мгновенный доступ",
					description: "Скачать The Isle Hacks: цифровая загрузка лицензии после оплаты. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Скачать The Isle Hacks",
					intro: "The Isle Hacks объединяет ESP wallhack, radar hack и Isle Aimbot в undetected пакете для The Isle на Windows PC. Скачать The Isle Hacks.",
					imageAlt: "The Isle Hacks download and install delivery flow",
					galleryTitle: "Скачать The Isle Hacks",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "Купить The Isle Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Скачать The Isle Hacks",
							paragraphs: [
								"The Isle Hacks объединяет ESP wallhack, radar hack и Isle Aimbot в undetected пакете для The Isle на Windows PC. цифровая загрузка лицензии после оплаты.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@theislehack.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Мод-меню The Isle | Игровые переключатели",
					description: "Мод-меню The Isle: переключатели ESP и soft aim в клиенте. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Мод-меню The Isle",
					intro: "The Isle Hacks объединяет ESP wallhack, radar hack и Isle Aimbot в undetected пакете для The Isle на Windows PC. Мод-меню The Isle.",
					imageAlt: "The Isle Hacks in-game menu controls",
					galleryTitle: "Мод-меню The Isle",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "Купить The Isle Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Мод-меню The Isle",
							paragraphs: [
								"The Isle Hacks объединяет ESP wallhack, radar hack и Isle Aimbot в undetected пакете для The Isle на Windows PC. переключатели ESP и soft aim в клиенте.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@theislehack.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim The Isle | Настройки soft aim",
					description: "Soft aim The Isle: плавные настройки soft aim для Windows PC. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Soft aim The Isle",
					intro: "The Isle Hacks объединяет ESP wallhack, radar hack и Isle Aimbot в undetected пакете для The Isle на Windows PC. Soft aim The Isle.",
					imageAlt: "The Isle soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim The Isle",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "Купить The Isle Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/isle-aimbot/",
					sections: [
						{
							h2: "Soft aim The Isle",
							paragraphs: [
								"The Isle Hacks объединяет ESP wallhack, radar hack и Isle Aimbot в undetected пакете для The Isle на Windows PC. плавные настройки soft aim для Windows PC.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@theislehack.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Лучшие читы The Isle | Чеклист покупателя",
					description: "Лучшие читы The Isle: что сравнить перед покупкой the isle hacks. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Лучшие читы The Isle",
					intro: "The Isle Hacks объединяет ESP wallhack, radar hack и Isle Aimbot в undetected пакете для The Isle на Windows PC. Лучшие читы The Isle.",
					imageAlt: "The Isle Hacks overview for The Isle on PC",
					galleryTitle: "Лучшие читы The Isle",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "Купить The Isle Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Лучшие читы The Isle",
							paragraphs: [
								"The Isle Hacks объединяет ESP wallhack, radar hack и Isle Aimbot в undetected пакете для The Isle на Windows PC. что сравнить перед покупкой the isle hacks.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@theislehack.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Хак aimbot The Isle | Soft aim ассист",
					description: "Хак aimbot The Isle: undetected Aimbot hack assist для The Isle. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Хак aimbot The Isle",
					intro: "The Isle Hacks объединяет ESP wallhack, radar hack и Isle Aimbot в undetected пакете для The Isle на Windows PC. Хак aimbot The Isle.",
					imageAlt: "Isle Aimbot hack controls and bone priority",
					galleryTitle: "Хак aimbot The Isle",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "Купить The Isle Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/isle-aimbot/",
					sections: [
						{
							h2: "Хак aimbot The Isle",
							paragraphs: [
								"The Isle Hacks объединяет ESP wallhack, radar hack и Isle Aimbot в undetected пакете для The Isle на Windows PC. undetected Aimbot hack assist для The Isle.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@theislehack.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Хак ESP The Isle | Боксы и лут",
					description: "Хак ESP The Isle: ESP hack боксы, pins туш и дистанция. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Хак ESP The Isle",
					intro: "The Isle Hacks объединяет ESP wallhack, radar hack и Isle Aimbot в undetected пакете для The Isle на Windows PC. Хак ESP The Isle.",
					imageAlt: "Isle ESP hack boxes and carcass markers",
					galleryTitle: "Хак ESP The Isle",
					heroImage: "/images/isle-hacks-wallhack.webp",
					ctaPrimary: "Купить The Isle Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "Хак ESP The Isle",
							paragraphs: [
								"The Isle Hacks объединяет ESP wallhack, radar hack и Isle Aimbot в undetected пакете для The Isle на Windows PC. ESP hack боксы, pins туш и дистанция.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@theislehack.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all The Isle | Что это значит",
					description: "Unlock all The Isle: поиски unlock-all vs настоящие ESP и Aimbot инструменты. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Unlock all The Isle",
					intro: "The Isle Hacks объединяет ESP wallhack, radar hack и Isle Aimbot в undetected пакете для The Isle на Windows PC. Unlock all The Isle.",
					imageAlt: "The Isle Hacks license features overview",
					galleryTitle: "Unlock all The Isle",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "Купить The Isle Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all The Isle",
							paragraphs: [
								"The Isle Hacks объединяет ESP wallhack, radar hack и Isle Aimbot в undetected пакете для The Isle на Windows PC. поиски unlock-all vs настоящие ESP и Aimbot инструменты.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@theislehack.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				privacy: {
					title: "Политика конфиденциальности | The Isle Hacks",
					description: "Политика конфиденциальности для The Isle Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Политика конфиденциальности",
					intro: "The Isle Hacks объединяет ESP wallhack, radar hack и Isle Aimbot в undetected пакете для The Isle на Windows PC. Политика конфиденциальности для theislehack.org и лицензий The Isle.",
					imageAlt: "The Isle Hacks",
					galleryTitle: "The Isle Hacks",
					heroImage: "/images/isle-hacks-aimbot.webp",
					ctaPrimary: "Написать в поддержку",
					ctaSecondary: "Читать условия",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Информация, которую мы собираем",
							paragraphs: [
								"The Isle Hacks объединяет ESP wallhack, radar hack и Isle Aimbot в undetected пакете для The Isle на Windows PC. Контактный email, ссылки на заказы Zadeyo и базовые данные безопасности сайта.",
								"Платёжные данные обрабатываются через checkout Zadeyo — не хранятся на theislehack.org.",
							],
						},
						{
							h2: "Как мы используем данные",
							paragraphs: [
								"The Isle Hacks объединяет ESP wallhack, radar hack и Isle Aimbot в undetected пакете для The Isle на Windows PC. Ответы поддержки, решение заказов и соблюдение законодательства при необходимости.",
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
							],
						},
						{
							h2: "Ваши права",
							paragraphs: [
								"support@theislehack.org для поддержки и юридических вопросов.",
								"Email: support@theislehack.org",
							],
						},
					],
				},
				refund: {
					title: "Политика возврата | The Isle Hacks",
					description: "Политика возврата для The Isle Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Политика возврата",
					intro: "The Isle Hacks объединяет ESP wallhack, radar hack и Isle Aimbot в undetected пакете для The Isle на Windows PC. Политика возврата для theislehack.org и лицензий The Isle.",
					imageAlt: "The Isle Hacks",
					galleryTitle: "The Isle Hacks",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "Написать в поддержку",
					ctaSecondary: "Читать политику конфиденциальности",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Цифровая доставка",
							paragraphs: [
								"The Isle Hacks объединяет ESP wallhack, radar hack и Isle Aimbot в undetected пакете для The Isle на Windows PC. Контактный email, ссылки на заказы Zadeyo и базовые данные безопасности сайта.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "Одобрение возврата",
							paragraphs: [
								"The Isle Hacks объединяет ESP wallhack, radar hack и Isle Aimbot в undetected пакете для The Isle на Windows PC. Ответы поддержки, решение заказов и соблюдение законодательства при необходимости.",
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
							],
						},
						{
							h2: "Как запросить",
							paragraphs: [
								"support@theislehack.org для поддержки и юридических вопросов.",
								"Email: support@theislehack.org",
							],
						},
					],
				},
				terms: {
					title: "Условия использования | The Isle Hacks",
					description: "Условия использования для The Isle Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Условия использования",
					intro: "The Isle Hacks объединяет ESP wallhack, radar hack и Isle Aimbot в undetected пакете для The Isle на Windows PC. Условия использования для theislehack.org и лицензий The Isle.",
					imageAlt: "The Isle Hacks",
					galleryTitle: "The Isle Hacks",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "Написать в поддержку",
					ctaSecondary: "Читать политику конфиденциальности",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Принятие условий",
							paragraphs: [
								"The Isle Hacks объединяет ESP wallhack, radar hack и Isle Aimbot в undetected пакете для The Isle на Windows PC. Контактный email, ссылки на заказы Zadeyo и базовые данные безопасности сайта.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "Предупреждение о рисках",
							paragraphs: [
								"The Isle Hacks объединяет ESP wallhack, radar hack и Isle Aimbot в undetected пакете для The Isle на Windows PC. Ответы поддержки, решение заказов и соблюдение законодательства при необходимости.",
								"Использование читов может нарушать условия команды The Isle — вы принимаете на себя риск бана.",
							],
						},
						{
							h2: "Изменения политики",
							paragraphs: [
								"support@theislehack.org для поддержки и юридических вопросов.",
								"Email: support@theislehack.org",
							],
						},
					],
				},
			},
		},
		tr: {
			ui: {
				nav: {
					home: "Ana sayfa",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Özellikler",
					pricing: "Fiyatlar",
					setup: "Kurulum",
					updates: "Güncellemeler",
					faq: "SSS",
					buyNow: "Satın al",
				},
				hero: {
					accent: "Undetected The Isle hileleri",
					accentShort: "The Isle Hacks",
					subtitle: "The Isle Windows PC için ESP wallhack, radar hack ve Aimbot — Easy Anti-Cheat bakımı dahil.",
					subtitleShort: "The Isle PC için ESP, radar ve Aimbot",
					buyNow: "Satın al",
					seeFeatures: "Özellikleri gör",
				},
				trust: {
					status: "Çevrimiçi",
					statusNote: "The Isle Hacks paketi The Isle Windows PC için aktif.",
					statusShort: "Aktif",
					delivery: "Anında dijital teslimat",
					platform: "Windows 10 ve 11",
					antiCheat: "Easy Anti-Cheat bakım desteği",
					antiCheatShort: "Easy Anti-Cheat destek",
				},
				product: {
					title: "The Isle Hacks",
					addToCart: "Sepete ekle",
					monthly: "Aylık",
					lifetime: "Ömür boyu",
					available: "Şimdi mevcut",
					gameBadge: "The Isle",
					platformBadge: "Windows PC",
					statusBadge: "Undetected paket",
				},
				reviews: {
					title: "Oyuncular ne diyor",
					subtitle: "The Isle Hacks alıcılarından son geri bildirimler",
					outOf: "/5",
					countLabel: "yorum",
				},
				common: {
					buyNow: "Satın al",
					readGuide: "Rehberi oku",
					language: "Dil",
					officialLanguageNote: "Resmi dil İngilizcedir. Diğer diller küresel SEO için çevrilmiştir.",
					relatedPages: "İlgili sayfalar",
				},
				footer: {
					explore: "Keşfet",
					help: "Yardım ve yasal",
					tagline: "The Isle için undetected ESP, wallhack, radar ve Aimbot — Zadeyo checkout.",
				},
				images: {
					hero: "The Isle Hacks hero — ESP and aimbot overlay in The Isle",
					espWallhack: "Wallhack outlines showing players and wild dinosaurs through walls",
					aimbotCombat: "Soft aim assist overlay during a The Isle session",
					packFight: "The Isle Hacks combat overlay during a pack fight",
					dinoEsp: "Player ESP boxes and distance readouts in a The Isle session",
					headerArt: "Aimbot view and bone priority controls for The Isle",
					hacksPackage: "2D radar threat overlay for The Isle",
					ambushFight: "Aimbot assist during a The Isle hunt",
					battleRoyale: "The Isle Hacks in-session overview for Windows PC",
					survivalIsland: "ESP markers for carcasses and nests in The Isle",
				},
			},
			pages: {
				home: {
					title: "The Isle Hacks 2026 | ESP, Wallhack ve Aimbot",
					description: "The Isle için undetected hileler. ESP wallhack, radar hack ve Aimbot — Easy Anti-Cheat bakımı. Anında dijital teslimat.",
					h1: "The Isle Hacks — Undetected ESP, Wallhack ve Aimbot",
					intro: "The Isle Windows PC undetected paketi: ESP wallhack, radar ve Aimbot — Easy Anti-Cheat bakımı dahil.",
					imageAlt: "Isle ESP player tags hack",
					galleryTitle: "The Isle Hacks galeri — ESP, Aimbot ve wallhack",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "The Isle Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026'da neden The Isle Hacks",
							paragraphs: [
								"The Isle Hacks, The Isle için Windows PC üzerinde ESP wallhack, radar hack ve Isle Aimbot undetected paket sunar. BR ve growth run'da düşman pack okumak için ideal.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "ESP wallhack, radar ve Aimbot tek lisans",
							paragraphs: [
								"The Isle Hacks, The Isle için Windows PC üzerinde ESP wallhack, radar hack ve Isle Aimbot undetected paket sunar. Ayrı araçlar yerine tek lisans.",
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
							],
						},
					],
				},
				"isle-esp": {
					title: "Isle ESP | Player Boxes & Wallhack",
					description: "Isle ESP: oyuncu kutuları, leş işaretleri ve wallhack overlay'leri. anında dijital teslimat. undetected — Windows PC.",
					h1: "Isle ESP",
					intro: "The Isle Hacks, The Isle için Windows PC üzerinde ESP wallhack, radar hack ve Isle Aimbot undetected paket sunar. Isle ESP.",
					imageAlt: "Isle ESP player boxes and distance readouts in a session",
					galleryTitle: "Isle ESP",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "The Isle Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "Isle ESP",
							paragraphs: [
								"The Isle Hacks, The Isle için Windows PC üzerinde ESP wallhack, radar hack ve Isle Aimbot undetected paket sunar. oyuncu kutuları, leş işaretleri ve wallhack overlay'leri.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@theislehack.org.",
							],
						},
					],
				},
				"isle-aimbot": {
					title: "Isle Aimbot | Soft Aim Controls",
					description: "Isle Aimbot: soft aim, FOV ve türe özel Aimbot profilleri. anında dijital teslimat. undetected — Windows PC.",
					h1: "Isle Aimbot",
					intro: "The Isle Hacks, The Isle için Windows PC üzerinde ESP wallhack, radar hack ve Isle Aimbot undetected paket sunar. Isle Aimbot.",
					imageAlt: "Isle Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Isle Aimbot",
					heroImage: "/images/isle-hacks-aimbot.webp",
					ctaPrimary: "The Isle Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "Isle Aimbot",
							paragraphs: [
								"The Isle Hacks, The Isle için Windows PC üzerinde ESP wallhack, radar hack ve Isle Aimbot undetected paket sunar. soft aim, FOV ve türe özel Aimbot profilleri.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@theislehack.org.",
							],
						},
					],
				},
				features: {
					title: "Özellikler | Full Feature List",
					description: "Özellikler: ESP, soft aim, radar kontrolleri. anında dijital teslimat. undetected — Windows PC.",
					h1: "Özellikler",
					intro: "The Isle Hacks, The Isle için Windows PC üzerinde ESP wallhack, radar hack ve Isle Aimbot undetected paket sunar. Özellikler.",
					imageAlt: "The Isle Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Özellikler",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "The Isle Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Özellikler",
							paragraphs: [
								"The Isle Hacks, The Isle için Windows PC üzerinde ESP wallhack, radar hack ve Isle Aimbot undetected paket sunar. ESP, soft aim, radar kontrolleri.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@theislehack.org.",
							],
						},
					],
				},
				pricing: {
					title: "Fiyatlar | Monthly & Lifetime",
					description: "Fiyatlar: aylık $35 veya lifetime $150 lisanslar. anında dijital teslimat. undetected — Windows PC.",
					h1: "Fiyatlar",
					intro: "The Isle Hacks, The Isle için Windows PC üzerinde ESP wallhack, radar hack ve Isle Aimbot undetected paket sunar. Fiyatlar.",
					imageAlt: "The Isle Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Fiyatlar",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "The Isle Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Fiyatlar",
							paragraphs: [
								"The Isle Hacks, The Isle için Windows PC üzerinde ESP wallhack, radar hack ve Isle Aimbot undetected paket sunar. aylık $35 veya lifetime $150 lisanslar.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@theislehack.org.",
							],
						},
					],
				},
				setup: {
					title: "Kurulum | PC Setup Guide",
					description: "Kurulum: Windows PC aktivasyonu ve ilk açılış kurulumu. anında dijital teslimat. undetected — Windows PC.",
					h1: "Kurulum",
					intro: "The Isle Hacks, The Isle için Windows PC üzerinde ESP wallhack, radar hack ve Isle Aimbot undetected paket sunar. Kurulum.",
					imageAlt: "The Isle Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Kurulum",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "The Isle Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Kurulum",
							paragraphs: [
								"The Isle Hacks, The Isle için Windows PC üzerinde ESP wallhack, radar hack ve Isle Aimbot undetected paket sunar. Windows PC aktivasyonu ve ilk açılış kurulumu.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@theislehack.org.",
							],
						},
					],
				},
				updates: {
					title: "Güncellemeler | Easy Anti-Cheat Maintenance Log",
					description: "Güncellemeler: Easy Anti-Cheat yama durumu ve rebuild notları. anında dijital teslimat. undetected — Windows PC.",
					h1: "Güncellemeler",
					intro: "The Isle Hacks, The Isle için Windows PC üzerinde ESP wallhack, radar hack ve Isle Aimbot undetected paket sunar. Güncellemeler.",
					imageAlt: "The Isle Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Güncellemeler",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "The Isle Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "Güncellemeler",
							paragraphs: [
								"The Isle Hacks, The Isle için Windows PC üzerinde ESP wallhack, radar hack ve Isle Aimbot undetected paket sunar. Easy Anti-Cheat yama durumu ve rebuild notları.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@theislehack.org.",
							],
						},
					],
				},
				faq: {
					title: "SSS | Common Answers",
					description: "SSS: ESP, soft aim, teslimat ve Easy Anti-Cheat soruları. anında dijital teslimat. undetected — Windows PC.",
					h1: "SSS",
					intro: "The Isle Hacks, The Isle için Windows PC üzerinde ESP wallhack, radar hack ve Isle Aimbot undetected paket sunar. SSS.",
					imageAlt: "The Isle Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "SSS",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "The Isle Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "SSS",
							paragraphs: [
								"The Isle Hacks, The Isle için Windows PC üzerinde ESP wallhack, radar hack ve Isle Aimbot undetected paket sunar. ESP, soft aim, teslimat ve Easy Anti-Cheat soruları.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@theislehack.org.",
							],
						},
					],
				},
				support: {
					title: "Destek | Help & Contact",
					description: "Destek: sipariş yardımı ve lisans destek iletişimi. anında dijital teslimat. undetected — Windows PC.",
					h1: "Destek",
					intro: "The Isle Hacks, The Isle için Windows PC üzerinde ESP wallhack, radar hack ve Isle Aimbot undetected paket sunar. Destek.",
					imageAlt: "The Isle Hacks support page for license and setup help",
					galleryTitle: "Destek",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "The Isle Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Destek",
							paragraphs: [
								"The Isle Hacks, The Isle için Windows PC üzerinde ESP wallhack, radar hack ve Isle Aimbot undetected paket sunar. sipariş yardımı ve lisans destek iletişimi.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@theislehack.org.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected hileler | Easy Anti-Cheat Safe Status",
					description: "Undetected hileler: Easy Anti-Cheat yamalarından sonra undetected bakım. anında dijital teslimat. undetected — Windows PC.",
					h1: "Undetected hileler",
					intro: "The Isle Hacks, The Isle için Windows PC üzerinde ESP wallhack, radar hack ve Isle Aimbot undetected paket sunar. Undetected hileler.",
					imageAlt: "The Isle Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected hileler",
					heroImage: "/images/isle-hacks-wallhack.webp",
					ctaPrimary: "The Isle Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "Undetected hileler",
							paragraphs: [
								"The Isle Hacks, The Isle için Windows PC üzerinde ESP wallhack, radar hack ve Isle Aimbot undetected paket sunar. Easy Anti-Cheat yamalarından sonra undetected bakım.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@theislehack.org.",
							],
						},
					],
				},
				wallhack: {
					title: "The Isle Wallhack | ESP Visibility",
					description: "The Isle Wallhack: oyuncular, leşler ve mesafe için wallhack ESP. anında dijital teslimat. undetected — Windows PC.",
					h1: "The Isle Wallhack",
					intro: "The Isle Hacks, The Isle için Windows PC üzerinde ESP wallhack, radar hack ve Isle Aimbot undetected paket sunar. The Isle Wallhack.",
					imageAlt: "isle wallhack visibility through walls in a session",
					galleryTitle: "The Isle Wallhack",
					heroImage: "/images/isle-hacks-wallhack.webp",
					ctaPrimary: "The Isle Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "The Isle Wallhack",
							paragraphs: [
								"The Isle Hacks, The Isle için Windows PC üzerinde ESP wallhack, radar hack ve Isle Aimbot undetected paket sunar. oyuncular, leşler ve mesafe için wallhack ESP.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@theislehack.org.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: flank ve rotasyonlar için 2D radar ipuçları. anında dijital teslimat. undetected — Windows PC.",
					h1: "Radar hack",
					intro: "The Isle Hacks, The Isle için Windows PC üzerinde ESP wallhack, radar hack ve Isle Aimbot undetected paket sunar. Radar hack.",
					imageAlt: "The Isle 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "The Isle Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"The Isle Hacks, The Isle için Windows PC üzerinde ESP wallhack, radar hack ve Isle Aimbot undetected paket sunar. flank ve rotasyonlar için 2D radar ipuçları.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@theislehack.org.",
							],
						},
					],
				},
				eac: {
					title: "Easy Anti-Cheat bypass | Patch Maintenance",
					description: "Easy Anti-Cheat bypass: The Isle hacks için Easy Anti-Cheat güncellemelerinin nasıl yönetildiği. anında dijital teslimat. undetected — Windows PC.",
					h1: "Easy Anti-Cheat bypass",
					intro: "The Isle Hacks, The Isle için Windows PC üzerinde ESP wallhack, radar hack ve Isle Aimbot undetected paket sunar. Easy Anti-Cheat bypass.",
					imageAlt: "The Isle Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Easy Anti-Cheat bypass",
					heroImage: "/images/isle-hacks-aimbot.webp",
					ctaPrimary: "The Isle Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Easy Anti-Cheat bypass",
							paragraphs: [
								"The Isle Hacks, The Isle için Windows PC üzerinde ESP wallhack, radar hack ve Isle Aimbot undetected paket sunar. The Isle hacks için Easy Anti-Cheat güncellemelerinin nasıl yönetildiği.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@theislehack.org.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "The Isle Hileleri 2026 | Buyer Guide",
					description: "The Isle Hileleri 2026: checkout öncesi 2026 the isle hacks kontrol listesi. anında dijital teslimat. undetected — Windows PC.",
					h1: "The Isle Hileleri 2026",
					intro: "The Isle Hacks, The Isle için Windows PC üzerinde ESP wallhack, radar hack ve Isle Aimbot undetected paket sunar. The Isle Hileleri 2026.",
					imageAlt: "The Isle Hacks product overview for The Isle",
					galleryTitle: "The Isle Hileleri 2026",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "The Isle Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "The Isle Hileleri 2026",
							paragraphs: [
								"The Isle Hacks, The Isle için Windows PC üzerinde ESP wallhack, radar hack ve Isle Aimbot undetected paket sunar. checkout öncesi 2026 the isle hacks kontrol listesi.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@theislehack.org.",
							],
						},
					],
				},
				hacks: {
					title: "The Isle Hileleri | ESP Aimbot Guide",
					description: "The Isle Hileleri: ESP ve Aimbot için The Isle Hacks sütunu. anında dijital teslimat. undetected — Windows PC.",
					h1: "The Isle Hileleri",
					intro: "The Isle Hacks, The Isle için Windows PC üzerinde ESP wallhack, radar hack ve Isle Aimbot undetected paket sunar. The Isle Hileleri.",
					imageAlt: "The Isle Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "The Isle Hileleri",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "The Isle Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "The Isle Hileleri",
							paragraphs: [
								"The Isle Hacks, The Isle için Windows PC üzerinde ESP wallhack, radar hack ve Isle Aimbot undetected paket sunar. ESP ve Aimbot için The Isle Hacks sütunu.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@theislehack.org.",
							],
						},
					],
				},
				"cheat-download": {
					title: "The Isle Hile İndir | Instant Access",
					description: "The Isle Hile İndir: ödeme sonrası dijital lisans indirme. anında dijital teslimat. undetected — Windows PC.",
					h1: "The Isle Hile İndir",
					intro: "The Isle Hacks, The Isle için Windows PC üzerinde ESP wallhack, radar hack ve Isle Aimbot undetected paket sunar. The Isle Hile İndir.",
					imageAlt: "The Isle Hacks download and install delivery flow",
					galleryTitle: "The Isle Hile İndir",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "The Isle Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "The Isle Hile İndir",
							paragraphs: [
								"The Isle Hacks, The Isle için Windows PC üzerinde ESP wallhack, radar hack ve Isle Aimbot undetected paket sunar. ödeme sonrası dijital lisans indirme.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@theislehack.org.",
							],
						},
					],
				},
				"mod-menu": {
					title: "The Isle Mod Menü | In-Game Toggles",
					description: "The Isle Mod Menü: istemci içi ESP ve soft aim toggle'ları. anında dijital teslimat. undetected — Windows PC.",
					h1: "The Isle Mod Menü",
					intro: "The Isle Hacks, The Isle için Windows PC üzerinde ESP wallhack, radar hack ve Isle Aimbot undetected paket sunar. The Isle Mod Menü.",
					imageAlt: "The Isle Hacks in-game menu controls",
					galleryTitle: "The Isle Mod Menü",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "The Isle Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "The Isle Mod Menü",
							paragraphs: [
								"The Isle Hacks, The Isle için Windows PC üzerinde ESP wallhack, radar hack ve Isle Aimbot undetected paket sunar. istemci içi ESP ve soft aim toggle'ları.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@theislehack.org.",
							],
						},
					],
				},
				"soft-aim": {
					title: "The Isle Soft Aim | Smooth Aim Settings",
					description: "The Isle Soft Aim: Windows PC için akıcı soft aim ayarları. anında dijital teslimat. undetected — Windows PC.",
					h1: "The Isle Soft Aim",
					intro: "The Isle Hacks, The Isle için Windows PC üzerinde ESP wallhack, radar hack ve Isle Aimbot undetected paket sunar. The Isle Soft Aim.",
					imageAlt: "The Isle soft aim FOV and smoothness settings",
					galleryTitle: "The Isle Soft Aim",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "The Isle Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/isle-aimbot/",
					sections: [
						{
							h2: "The Isle Soft Aim",
							paragraphs: [
								"The Isle Hacks, The Isle için Windows PC üzerinde ESP wallhack, radar hack ve Isle Aimbot undetected paket sunar. Windows PC için akıcı soft aim ayarları.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@theislehack.org.",
							],
						},
					],
				},
				"best-cheats": {
					title: "En İyi The Isle Hileleri | Buyer Checklist",
					description: "En İyi The Isle Hileleri: the isle hacks satın almadan önce ne karşılaştırılmalı. anında dijital teslimat. undetected — Windows PC.",
					h1: "En İyi The Isle Hileleri",
					intro: "The Isle Hacks, The Isle için Windows PC üzerinde ESP wallhack, radar hack ve Isle Aimbot undetected paket sunar. En İyi The Isle Hileleri.",
					imageAlt: "The Isle Hacks overview for The Isle on PC",
					galleryTitle: "En İyi The Isle Hileleri",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "The Isle Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "En İyi The Isle Hileleri",
							paragraphs: [
								"The Isle Hacks, The Isle için Windows PC üzerinde ESP wallhack, radar hack ve Isle Aimbot undetected paket sunar. the isle hacks satın almadan önce ne karşılaştırılmalı.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@theislehack.org.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Isle Aimbot Hilesi | Soft Aim Assist",
					description: "Isle Aimbot Hilesi: The Isle için undetected Aimbot hack assist. anında dijital teslimat. undetected — Windows PC.",
					h1: "Isle Aimbot Hilesi",
					intro: "The Isle Hacks, The Isle için Windows PC üzerinde ESP wallhack, radar hack ve Isle Aimbot undetected paket sunar. Isle Aimbot Hilesi.",
					imageAlt: "Isle Aimbot hack controls and bone priority",
					galleryTitle: "Isle Aimbot Hilesi",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "The Isle Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/isle-aimbot/",
					sections: [
						{
							h2: "Isle Aimbot Hilesi",
							paragraphs: [
								"The Isle Hacks, The Isle için Windows PC üzerinde ESP wallhack, radar hack ve Isle Aimbot undetected paket sunar. The Isle için undetected Aimbot hack assist.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@theislehack.org.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Isle ESP Hilesi | Boxes & Loot",
					description: "Isle ESP Hilesi: ESP hack kutuları, leş pinleri ve mesafe. anında dijital teslimat. undetected — Windows PC.",
					h1: "Isle ESP Hilesi",
					intro: "The Isle Hacks, The Isle için Windows PC üzerinde ESP wallhack, radar hack ve Isle Aimbot undetected paket sunar. Isle ESP Hilesi.",
					imageAlt: "Isle ESP hack boxes and carcass markers",
					galleryTitle: "Isle ESP Hilesi",
					heroImage: "/images/isle-hacks-wallhack.webp",
					ctaPrimary: "The Isle Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "Isle ESP Hilesi",
							paragraphs: [
								"The Isle Hacks, The Isle için Windows PC üzerinde ESP wallhack, radar hack ve Isle Aimbot undetected paket sunar. ESP hack kutuları, leş pinleri ve mesafe.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@theislehack.org.",
							],
						},
					],
				},
				"unlock-all": {
					title: "The Isle Unlock All | What It Means",
					description: "The Isle Unlock All: unlock-all aramaları vs gerçek ESP ve Aimbot araçları. anında dijital teslimat. undetected — Windows PC.",
					h1: "The Isle Unlock All",
					intro: "The Isle Hacks, The Isle için Windows PC üzerinde ESP wallhack, radar hack ve Isle Aimbot undetected paket sunar. The Isle Unlock All.",
					imageAlt: "The Isle Hacks license features overview",
					galleryTitle: "The Isle Unlock All",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "The Isle Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "The Isle Unlock All",
							paragraphs: [
								"The Isle Hacks, The Isle için Windows PC üzerinde ESP wallhack, radar hack ve Isle Aimbot undetected paket sunar. unlock-all aramaları vs gerçek ESP ve Aimbot araçları.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@theislehack.org.",
							],
						},
					],
				},
				privacy: {
					title: "Gizlilik politikası | The Isle Hacks",
					description: "Gizlilik politikası The Isle Hacks — ESP wallhack, Aimbot için, Windows PC.",
					h1: "Gizlilik politikası",
					intro: "The Isle Hacks, The Isle için Windows PC üzerinde ESP wallhack, radar hack ve Isle Aimbot undetected paket sunar. Gizlilik politikası theislehack.org ve The Isle lisansları için.",
					imageAlt: "The Isle Hacks",
					galleryTitle: "The Isle Hacks",
					heroImage: "/images/isle-hacks-aimbot.webp",
					ctaPrimary: "Destek e-postası",
					ctaSecondary: "Şartları oku",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Topladığımız bilgiler",
							paragraphs: [
								"The Isle Hacks, The Isle için Windows PC üzerinde ESP wallhack, radar hack ve Isle Aimbot undetected paket sunar. İletişim e-postası, Zadeyo sipariş referansları ve temel site güvenlik verileri.",
								"Ödeme bilgileri Zadeyo checkout ile işlenir — theislehack.org'da saklanmaz.",
							],
						},
						{
							h2: "Verileri nasıl kullanıyoruz",
							paragraphs: [
								"The Isle Hacks, The Isle için Windows PC üzerinde ESP wallhack, radar hack ve Isle Aimbot undetected paket sunar. Destek yanıtları, sipariş çözümü ve gerektiğinde yasal uyum.",
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
							],
						},
						{
							h2: "Haklarınız",
							paragraphs: [
								"Destek ve yasal sorular için support@theislehack.org.",
								"E-posta: support@theislehack.org",
							],
						},
					],
				},
				refund: {
					title: "İade politikası | The Isle Hacks",
					description: "İade politikası The Isle Hacks — ESP wallhack, Aimbot için, Windows PC.",
					h1: "İade politikası",
					intro: "The Isle Hacks, The Isle için Windows PC üzerinde ESP wallhack, radar hack ve Isle Aimbot undetected paket sunar. İade politikası theislehack.org ve The Isle lisansları için.",
					imageAlt: "The Isle Hacks",
					galleryTitle: "The Isle Hacks",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "Destek e-postası",
					ctaSecondary: "Gizliliği oku",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Dijital teslimat",
							paragraphs: [
								"The Isle Hacks, The Isle için Windows PC üzerinde ESP wallhack, radar hack ve Isle Aimbot undetected paket sunar. İletişim e-postası, Zadeyo sipariş referansları ve temel site güvenlik verileri.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "İade onayı",
							paragraphs: [
								"The Isle Hacks, The Isle için Windows PC üzerinde ESP wallhack, radar hack ve Isle Aimbot undetected paket sunar. Destek yanıtları, sipariş çözümü ve gerektiğinde yasal uyum.",
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
							],
						},
						{
							h2: "Nasıl talep edilir",
							paragraphs: [
								"Destek ve yasal sorular için support@theislehack.org.",
								"E-posta: support@theislehack.org",
							],
						},
					],
				},
				terms: {
					title: "Kullanım şartları | The Isle Hacks",
					description: "Kullanım şartları The Isle Hacks — ESP wallhack, Aimbot için, Windows PC.",
					h1: "Kullanım şartları",
					intro: "The Isle Hacks, The Isle için Windows PC üzerinde ESP wallhack, radar hack ve Isle Aimbot undetected paket sunar. Kullanım şartları theislehack.org ve The Isle lisansları için.",
					imageAlt: "The Isle Hacks",
					galleryTitle: "The Isle Hacks",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "Destek e-postası",
					ctaSecondary: "Gizliliği oku",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Şartların kabulü",
							paragraphs: [
								"The Isle Hacks, The Isle için Windows PC üzerinde ESP wallhack, radar hack ve Isle Aimbot undetected paket sunar. İletişim e-postası, Zadeyo sipariş referansları ve temel site güvenlik verileri.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "Risk uyarısı",
							paragraphs: [
								"The Isle Hacks, The Isle için Windows PC üzerinde ESP wallhack, radar hack ve Isle Aimbot undetected paket sunar. Destek yanıtları, sipariş çözümü ve gerektiğinde yasal uyum.",
								"Hile kullanmak The Isle ekibi şartlarını ihlal edebilir — tüm ban riskini üstlenirsiniz.",
							],
						},
						{
							h2: "Politika değişiklikleri",
							paragraphs: [
								"Destek ve yasal sorular için support@theislehack.org.",
								"E-posta: support@theislehack.org",
							],
						},
					],
				},
			},
		},
		ar: {
			ui: {
				nav: {
					home: "الرئيسية",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "الميزات",
					pricing: "الأسعار",
					setup: "التثبيت",
					updates: "التحديثات",
					faq: "الأسئلة",
					buyNow: "اشترِ الآن",
				},
				hero: {
					accent: "غش The Isle غير مكتشف",
					accentShort: "The Isle Hacks",
					subtitle: "ESP wallhack ورadar hack وAimbot لـ The Isle على Windows PC — صيانة Easy Anti-Cheat مشمولة.",
					subtitleShort: "ESP ورadar وAimbot لـ The Isle PC",
					buyNow: "اشترِ الآن",
					seeFeatures: "عرض الميزات",
				},
				trust: {
					status: "متصل",
					statusNote: "حزمة The Isle Hacks نشطة لـ The Isle على Windows PC.",
					statusShort: "نشط",
					delivery: "تسليم رقمي فوري",
					platform: "Windows 10 و11",
					antiCheat: "دعم صيانة Easy Anti-Cheat",
					antiCheatShort: "دعم Easy Anti-Cheat",
				},
				product: {
					title: "The Isle Hacks",
					addToCart: "أضف إلى السلة",
					monthly: "شهري",
					lifetime: "مدى الحياة",
					available: "متوفر الآن",
					gameBadge: "The Isle",
					platformBadge: "Windows PC",
					statusBadge: "حزمة غير مكتشفة",
				},
				reviews: {
					title: "ماذا يقول اللاعبون",
					subtitle: "آراء حديثة من مشتري The Isle Hacks",
					outOf: "من 5",
					countLabel: "مراجعات",
				},
				common: {
					buyNow: "اشترِ الآن",
					readGuide: "اقرأ الدليل",
					language: "اللغة",
					officialLanguageNote: "الإنجليزية هي اللغة الرسمية. اللغات الأخرى مترجمة لتحسين SEO العالمي.",
					relatedPages: "صفحات ذات صلة",
				},
				footer: {
					explore: "استكشف",
					help: "المساعدة والقانون",
					tagline: "ESP وwallhack ورadar وAimbot غير مكتشف لـ The Isle — الدفع عبر Zadeyo.",
				},
				images: {
					hero: "The Isle Hacks hero — ESP and aimbot overlay in The Isle",
					espWallhack: "Wallhack outlines showing players and wild dinosaurs through walls",
					aimbotCombat: "Soft aim assist overlay during a The Isle session",
					packFight: "The Isle Hacks combat overlay during a pack fight",
					dinoEsp: "Player ESP boxes and distance readouts in a The Isle session",
					headerArt: "Aimbot view and bone priority controls for The Isle",
					hacksPackage: "2D radar threat overlay for The Isle",
					ambushFight: "Aimbot assist during a The Isle hunt",
					battleRoyale: "The Isle Hacks in-session overview for Windows PC",
					survivalIsland: "ESP markers for carcasses and nests in The Isle",
				},
			},
			pages: {
				home: {
					title: "The Isle Hacks 2026 | ESP وWallhack وAimbot",
					description: "غش The Isle undetected لـ The Isle على PC. ESP wallhack ورadar hack وAimbot مع صيانة Easy Anti-Cheat. تسليم رقمي فوري.",
					h1: "The Isle Hacks — ESP وWallhack وAimbot غير مكتشف",
					intro: "حزمة undetected لـ The Isle على Windows PC: ESP wallhack ورadar وAimbot مع صيانة Easy Anti-Cheat.",
					imageAlt: "Isle ESP player tags hack",
					galleryTitle: "معرض The Isle Hacks — ESP وAimbot وwallhack",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "اشترِ The Isle Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "لماذا The Isle Hacks في 2026",
							paragraphs: [
								"The Isle Hacks يجمع ESP wallhack وradar hack وIsle Aimbot غير مكتشف لـ The Isle على Windows PC. مثالي لقراءة فرق العدو في BR وgrowth run.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack ورadar وAimbot في ترخيص واحد",
							paragraphs: [
								"The Isle Hacks يجمع ESP wallhack وradar hack وIsle Aimbot غير مكتشف لـ The Isle على Windows PC. ترخيص واحد بدلاً من أدوات منفصلة.",
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
							],
						},
					],
				},
				"isle-esp": {
					title: "ESP The Isle | Player Boxes & Wallhack",
					description: "ESP The Isle: صناديق اللاعبين وعلامات الجيفة وoverlays wallhack. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "ESP The Isle",
					intro: "The Isle Hacks يجمع ESP wallhack وradar hack وIsle Aimbot غير مكتشف لـ The Isle على Windows PC. ESP The Isle.",
					imageAlt: "Isle ESP player boxes and distance readouts in a session",
					galleryTitle: "ESP The Isle",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "اشترِ The Isle Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "ESP The Isle",
							paragraphs: [
								"The Isle Hacks يجمع ESP wallhack وradar hack وIsle Aimbot غير مكتشف لـ The Isle على Windows PC. صناديق اللاعبين وعلامات الجيفة وoverlays wallhack.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@theislehack.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"isle-aimbot": {
					title: "Aimbot The Isle | Soft Aim Controls",
					description: "Aimbot The Isle: soft aim وFOV وملفات Aimbot لكل نوع. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Aimbot The Isle",
					intro: "The Isle Hacks يجمع ESP wallhack وradar hack وIsle Aimbot غير مكتشف لـ The Isle على Windows PC. Aimbot The Isle.",
					imageAlt: "Isle Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot The Isle",
					heroImage: "/images/isle-hacks-aimbot.webp",
					ctaPrimary: "اشترِ The Isle Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "Aimbot The Isle",
							paragraphs: [
								"The Isle Hacks يجمع ESP wallhack وradar hack وIsle Aimbot غير مكتشف لـ The Isle على Windows PC. soft aim وFOV وملفات Aimbot لكل نوع.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@theislehack.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				features: {
					title: "الميزات | Full Feature List",
					description: "الميزات: ESP وsoft aim وضوابط radar. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "الميزات",
					intro: "The Isle Hacks يجمع ESP wallhack وradar hack وIsle Aimbot غير مكتشف لـ The Isle على Windows PC. الميزات.",
					imageAlt: "The Isle Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "الميزات",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "اشترِ The Isle Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "الميزات",
							paragraphs: [
								"The Isle Hacks يجمع ESP wallhack وradar hack وIsle Aimbot غير مكتشف لـ The Isle على Windows PC. ESP وsoft aim وضوابط radar.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@theislehack.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				pricing: {
					title: "الأسعار | Monthly & Lifetime",
					description: "الأسعار: تراخيص $35 شهرياً أو $150 lifetime. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "الأسعار",
					intro: "The Isle Hacks يجمع ESP wallhack وradar hack وIsle Aimbot غير مكتشف لـ The Isle على Windows PC. الأسعار.",
					imageAlt: "The Isle Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "الأسعار",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "اشترِ The Isle Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "الأسعار",
							paragraphs: [
								"The Isle Hacks يجمع ESP wallhack وradar hack وIsle Aimbot غير مكتشف لـ The Isle على Windows PC. تراخيص $35 شهرياً أو $150 lifetime.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@theislehack.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				setup: {
					title: "التثبيت | PC Setup Guide",
					description: "التثبيت: تفعيل Windows PC وإعداد أول تشغيل. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "التثبيت",
					intro: "The Isle Hacks يجمع ESP wallhack وradar hack وIsle Aimbot غير مكتشف لـ The Isle على Windows PC. التثبيت.",
					imageAlt: "The Isle Hacks setup guide screenshot for Windows PC",
					galleryTitle: "التثبيت",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "اشترِ The Isle Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "التثبيت",
							paragraphs: [
								"The Isle Hacks يجمع ESP wallhack وradar hack وIsle Aimbot غير مكتشف لـ The Isle على Windows PC. تفعيل Windows PC وإعداد أول تشغيل.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@theislehack.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				updates: {
					title: "التحديثات | Easy Anti-Cheat Maintenance Log",
					description: "التحديثات: حالة patch Easy Anti-Cheat وملاحظات rebuild. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "التحديثات",
					intro: "The Isle Hacks يجمع ESP wallhack وradar hack وIsle Aimbot غير مكتشف لـ The Isle على Windows PC. التحديثات.",
					imageAlt: "The Isle Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle: "التحديثات",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "اشترِ The Isle Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "التحديثات",
							paragraphs: [
								"The Isle Hacks يجمع ESP wallhack وradar hack وIsle Aimbot غير مكتشف لـ The Isle على Windows PC. حالة patch Easy Anti-Cheat وملاحظات rebuild.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@theislehack.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				faq: {
					title: "الأسئلة | Common Answers",
					description: "الأسئلة: أسئلة ESP وsoft aim والتسليم وEasy Anti-Cheat. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "الأسئلة",
					intro: "The Isle Hacks يجمع ESP wallhack وradar hack وIsle Aimbot غير مكتشف لـ The Isle على Windows PC. الأسئلة.",
					imageAlt: "The Isle Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "الأسئلة",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "اشترِ The Isle Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "الأسئلة",
							paragraphs: [
								"The Isle Hacks يجمع ESP wallhack وradar hack وIsle Aimbot غير مكتشف لـ The Isle على Windows PC. أسئلة ESP وsoft aim والتسليم وEasy Anti-Cheat.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@theislehack.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				support: {
					title: "الدعم | Help & Contact",
					description: "الدعم: مساعدة الطلبات واتصال دعم التراخيص. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "الدعم",
					intro: "The Isle Hacks يجمع ESP wallhack وradar hack وIsle Aimbot غير مكتشف لـ The Isle على Windows PC. الدعم.",
					imageAlt: "The Isle Hacks support page for license and setup help",
					galleryTitle: "الدعم",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "اشترِ The Isle Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "الدعم",
							paragraphs: [
								"The Isle Hacks يجمع ESP wallhack وradar hack وIsle Aimbot غير مكتشف لـ The Isle على Windows PC. مساعدة الطلبات واتصال دعم التراخيص.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@theislehack.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				undetected: {
					title: "غش undetected | Easy Anti-Cheat Safe Status",
					description: "غش undetected: صيانة undetected بعد patch Easy Anti-Cheat. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "غش undetected",
					intro: "The Isle Hacks يجمع ESP wallhack وradar hack وIsle Aimbot غير مكتشف لـ The Isle على Windows PC. غش undetected.",
					imageAlt: "The Isle Hacks undetected status overview for Windows PC",
					galleryTitle: "غش undetected",
					heroImage: "/images/isle-hacks-wallhack.webp",
					ctaPrimary: "اشترِ The Isle Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "غش undetected",
							paragraphs: [
								"The Isle Hacks يجمع ESP wallhack وradar hack وIsle Aimbot غير مكتشف لـ The Isle على Windows PC. صيانة undetected بعد patch Easy Anti-Cheat.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@theislehack.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				wallhack: {
					title: "The Isle Wallhack | ESP Visibility",
					description: "The Isle Wallhack: wallhack ESP للاعبين والجيف والمسافة. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "The Isle Wallhack",
					intro: "The Isle Hacks يجمع ESP wallhack وradar hack وIsle Aimbot غير مكتشف لـ The Isle على Windows PC. The Isle Wallhack.",
					imageAlt: "isle wallhack visibility through walls in a session",
					galleryTitle: "The Isle Wallhack",
					heroImage: "/images/isle-hacks-wallhack.webp",
					ctaPrimary: "اشترِ The Isle Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "The Isle Wallhack",
							paragraphs: [
								"The Isle Hacks يجمع ESP wallhack وradar hack وIsle Aimbot غير مكتشف لـ The Isle على Windows PC. wallhack ESP للاعبين والجيف والمسافة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@theislehack.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: إشارات radar ثنائية الأبعاد للهجمات الجانبية والتدوير. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Radar hack",
					intro: "The Isle Hacks يجمع ESP wallhack وradar hack وIsle Aimbot غير مكتشف لـ The Isle على Windows PC. Radar hack.",
					imageAlt: "The Isle 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "اشترِ The Isle Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"The Isle Hacks يجمع ESP wallhack وradar hack وIsle Aimbot غير مكتشف لـ The Isle على Windows PC. إشارات radar ثنائية الأبعاد للهجمات الجانبية والتدوير.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@theislehack.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Patch Maintenance",
					description: "Bypass Easy Anti-Cheat: كيف تُدار تحديثات Easy Anti-Cheat لـ The Isle hacks. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "The Isle Hacks يجمع ESP wallhack وradar hack وIsle Aimbot غير مكتشف لـ The Isle على Windows PC. Bypass Easy Anti-Cheat.",
					imageAlt: "The Isle Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/isle-hacks-aimbot.webp",
					ctaPrimary: "اشترِ The Isle Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"The Isle Hacks يجمع ESP wallhack وradar hack وIsle Aimbot غير مكتشف لـ The Isle على Windows PC. كيف تُدار تحديثات Easy Anti-Cheat لـ The Isle hacks.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@theislehack.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "غش The Isle 2026 | Buyer Guide",
					description: "غش The Isle 2026: قائمة the isle hacks 2026 قبل checkout. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "غش The Isle 2026",
					intro: "The Isle Hacks يجمع ESP wallhack وradar hack وIsle Aimbot غير مكتشف لـ The Isle على Windows PC. غش The Isle 2026.",
					imageAlt: "The Isle Hacks product overview for The Isle",
					galleryTitle: "غش The Isle 2026",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "اشترِ The Isle Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "غش The Isle 2026",
							paragraphs: [
								"The Isle Hacks يجمع ESP wallhack وradar hack وIsle Aimbot غير مكتشف لـ The Isle على Windows PC. قائمة the isle hacks 2026 قبل checkout.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@theislehack.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				hacks: {
					title: "غش The Isle | ESP Aimbot Guide",
					description: "غش The Isle: ركيزة The Isle Hacks لـ ESP وAimbot. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "غش The Isle",
					intro: "The Isle Hacks يجمع ESP wallhack وradar hack وIsle Aimbot غير مكتشف لـ The Isle على Windows PC. غش The Isle.",
					imageAlt: "The Isle Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "غش The Isle",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "اشترِ The Isle Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "غش The Isle",
							paragraphs: [
								"The Isle Hacks يجمع ESP wallhack وradar hack وIsle Aimbot غير مكتشف لـ The Isle على Windows PC. ركيزة The Isle Hacks لـ ESP وAimbot.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@theislehack.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"cheat-download": {
					title: "تحميل The Isle Hacks | Instant Access",
					description: "تحميل The Isle Hacks: تنزيل ترخيص رقمي بعد الدفع. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "تحميل The Isle Hacks",
					intro: "The Isle Hacks يجمع ESP wallhack وradar hack وIsle Aimbot غير مكتشف لـ The Isle على Windows PC. تحميل The Isle Hacks.",
					imageAlt: "The Isle Hacks download and install delivery flow",
					galleryTitle: "تحميل The Isle Hacks",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "اشترِ The Isle Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "تحميل The Isle Hacks",
							paragraphs: [
								"The Isle Hacks يجمع ESP wallhack وradar hack وIsle Aimbot غير مكتشف لـ The Isle على Windows PC. تنزيل ترخيص رقمي بعد الدفع.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@theislehack.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"mod-menu": {
					title: "قائمة مود The Isle | In-Game Toggles",
					description: "قائمة مود The Isle: مفاتيح ESP وsoft aim داخل العميل. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "قائمة مود The Isle",
					intro: "The Isle Hacks يجمع ESP wallhack وradar hack وIsle Aimbot غير مكتشف لـ The Isle على Windows PC. قائمة مود The Isle.",
					imageAlt: "The Isle Hacks in-game menu controls",
					galleryTitle: "قائمة مود The Isle",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "اشترِ The Isle Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "قائمة مود The Isle",
							paragraphs: [
								"The Isle Hacks يجمع ESP wallhack وradar hack وIsle Aimbot غير مكتشف لـ The Isle على Windows PC. مفاتيح ESP وsoft aim داخل العميل.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@theislehack.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim The Isle | Smooth Aim Settings",
					description: "Soft aim The Isle: إعدادات soft aim سلسة لـ Windows PC. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Soft aim The Isle",
					intro: "The Isle Hacks يجمع ESP wallhack وradar hack وIsle Aimbot غير مكتشف لـ The Isle على Windows PC. Soft aim The Isle.",
					imageAlt: "The Isle soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim The Isle",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "اشترِ The Isle Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/isle-aimbot/",
					sections: [
						{
							h2: "Soft aim The Isle",
							paragraphs: [
								"The Isle Hacks يجمع ESP wallhack وradar hack وIsle Aimbot غير مكتشف لـ The Isle على Windows PC. إعدادات soft aim سلسة لـ Windows PC.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@theislehack.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"best-cheats": {
					title: "أفضل غش The Isle | Buyer Checklist",
					description: "أفضل غش The Isle: ما يجب مقارنته قبل شراء the isle hacks. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "أفضل غش The Isle",
					intro: "The Isle Hacks يجمع ESP wallhack وradar hack وIsle Aimbot غير مكتشف لـ The Isle على Windows PC. أفضل غش The Isle.",
					imageAlt: "The Isle Hacks overview for The Isle on PC",
					galleryTitle: "أفضل غش The Isle",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "اشترِ The Isle Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "أفضل غش The Isle",
							paragraphs: [
								"The Isle Hacks يجمع ESP wallhack وradar hack وIsle Aimbot غير مكتشف لـ The Isle على Windows PC. ما يجب مقارنته قبل شراء the isle hacks.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@theislehack.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "هاك Aimbot The Isle | Soft Aim Assist",
					description: "هاك Aimbot The Isle: مساعدة hack Aimbot undetected لـ The Isle. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "هاك Aimbot The Isle",
					intro: "The Isle Hacks يجمع ESP wallhack وradar hack وIsle Aimbot غير مكتشف لـ The Isle على Windows PC. هاك Aimbot The Isle.",
					imageAlt: "Isle Aimbot hack controls and bone priority",
					galleryTitle: "هاك Aimbot The Isle",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "اشترِ The Isle Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/isle-aimbot/",
					sections: [
						{
							h2: "هاك Aimbot The Isle",
							paragraphs: [
								"The Isle Hacks يجمع ESP wallhack وradar hack وIsle Aimbot غير مكتشف لـ The Isle على Windows PC. مساعدة hack Aimbot undetected لـ The Isle.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@theislehack.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"esp-hack": {
					title: "هاك ESP The Isle | Boxes & Loot",
					description: "هاك ESP The Isle: صناديق ESP hack وpins الجيف والمسافة. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "هاك ESP The Isle",
					intro: "The Isle Hacks يجمع ESP wallhack وradar hack وIsle Aimbot غير مكتشف لـ The Isle على Windows PC. هاك ESP The Isle.",
					imageAlt: "Isle ESP hack boxes and carcass markers",
					galleryTitle: "هاك ESP The Isle",
					heroImage: "/images/isle-hacks-wallhack.webp",
					ctaPrimary: "اشترِ The Isle Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "هاك ESP The Isle",
							paragraphs: [
								"The Isle Hacks يجمع ESP wallhack وradar hack وIsle Aimbot غير مكتشف لـ The Isle على Windows PC. صناديق ESP hack وpins الجيف والمسافة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@theislehack.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all The Isle | What It Means",
					description: "Unlock all The Isle: بحث unlock-all مقابل أدوات ESP وAimbot الحقيقية. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Unlock all The Isle",
					intro: "The Isle Hacks يجمع ESP wallhack وradar hack وIsle Aimbot غير مكتشف لـ The Isle على Windows PC. Unlock all The Isle.",
					imageAlt: "The Isle Hacks license features overview",
					galleryTitle: "Unlock all The Isle",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "اشترِ The Isle Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all The Isle",
							paragraphs: [
								"The Isle Hacks يجمع ESP wallhack وradar hack وIsle Aimbot غير مكتشف لـ The Isle على Windows PC. بحث unlock-all مقابل أدوات ESP وAimbot الحقيقية.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@theislehack.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				privacy: {
					title: "سياسة الخصوصية | The Isle Hacks",
					description: "سياسة الخصوصية لـ The Isle Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "سياسة الخصوصية",
					intro: "The Isle Hacks يجمع ESP wallhack وradar hack وIsle Aimbot غير مكتشف لـ The Isle على Windows PC. سياسة الخصوصية لـ theislehack.org وتراخيص The Isle.",
					imageAlt: "The Isle Hacks",
					galleryTitle: "The Isle Hacks",
					heroImage: "/images/isle-hacks-aimbot.webp",
					ctaPrimary: "مراسلة الدعم",
					ctaSecondary: "اقرأ الشروط",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "المعلومات التي نجمعها",
							paragraphs: [
								"The Isle Hacks يجمع ESP wallhack وradar hack وIsle Aimbot غير مكتشف لـ The Isle على Windows PC. بريد الاتصال ومراجع طلبات Zadeyo وبيانات أمان الموقع الأساسية.",
								"تُعالَج تفاصيل الدفع عبر checkout Zadeyo — ولا تُخزَّن على theislehack.org.",
							],
						},
						{
							h2: "كيف نستخدم البيانات",
							paragraphs: [
								"The Isle Hacks يجمع ESP wallhack وradar hack وIsle Aimbot غير مكتشف لـ The Isle على Windows PC. ردود الدعم وحل الطلبات والامتثال القانوني عند الحاجة.",
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
							],
						},
						{
							h2: "حقوقك",
							paragraphs: [
								"support@theislehack.org للدعم والطلبات القانونية.",
								"البريد: support@theislehack.org",
							],
						},
					],
				},
				refund: {
					title: "سياسة الاسترداد | The Isle Hacks",
					description: "سياسة الاسترداد لـ The Isle Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "سياسة الاسترداد",
					intro: "The Isle Hacks يجمع ESP wallhack وradar hack وIsle Aimbot غير مكتشف لـ The Isle على Windows PC. سياسة الاسترداد لـ theislehack.org وتراخيص The Isle.",
					imageAlt: "The Isle Hacks",
					galleryTitle: "The Isle Hacks",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "مراسلة الدعم",
					ctaSecondary: "اقرأ الخصوصية",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "التسليم الرقمي",
							paragraphs: [
								"The Isle Hacks يجمع ESP wallhack وradar hack وIsle Aimbot غير مكتشف لـ The Isle على Windows PC. بريد الاتصال ومراجع طلبات Zadeyo وبيانات أمان الموقع الأساسية.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "موافقة الاسترداد",
							paragraphs: [
								"The Isle Hacks يجمع ESP wallhack وradar hack وIsle Aimbot غير مكتشف لـ The Isle على Windows PC. ردود الدعم وحل الطلبات والامتثال القانوني عند الحاجة.",
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
							],
						},
						{
							h2: "كيفية الطلب",
							paragraphs: [
								"support@theislehack.org للدعم والطلبات القانونية.",
								"البريد: support@theislehack.org",
							],
						},
					],
				},
				terms: {
					title: "شروط الاستخدام | The Isle Hacks",
					description: "شروط الاستخدام لـ The Isle Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "شروط الاستخدام",
					intro: "The Isle Hacks يجمع ESP wallhack وradar hack وIsle Aimbot غير مكتشف لـ The Isle على Windows PC. شروط الاستخدام لـ theislehack.org وتراخيص The Isle.",
					imageAlt: "The Isle Hacks",
					galleryTitle: "The Isle Hacks",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "مراسلة الدعم",
					ctaSecondary: "اقرأ الخصوصية",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "قبول الشروط",
							paragraphs: [
								"The Isle Hacks يجمع ESP wallhack وradar hack وIsle Aimbot غير مكتشف لـ The Isle على Windows PC. بريد الاتصال ومراجع طلبات Zadeyo وبيانات أمان الموقع الأساسية.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "إخلاء المسؤولية عن المخاطر",
							paragraphs: [
								"The Isle Hacks يجمع ESP wallhack وradar hack وIsle Aimbot غير مكتشف لـ The Isle على Windows PC. ردود الدعم وحل الطلبات والامتثال القانوني عند الحاجة.",
								"استخدام الغش قد ينتهك شروط فريق The Isle — أنت تتحمل كل مخاطر الحظر.",
							],
						},
						{
							h2: "تغييرات السياسة",
							paragraphs: [
								"support@theislehack.org للدعم والطلبات القانونية.",
								"البريد: support@theislehack.org",
							],
						},
					],
				},
			},
		},
		ja: {
			ui: {
				nav: {
					home: "ホーム",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "機能",
					pricing: "料金",
					setup: "セットアップ",
					updates: "更新",
					faq: "FAQ",
					buyNow: "今すぐ購入",
				},
				hero: {
					accent: "Undetected The Isleチート",
					accentShort: "The Isle Hacks",
					subtitle: "The Isle Windows PC向けESP wallhack、radar hack、Aimbot — Easy Anti-Cheatメンテナンス付き。",
					subtitleShort: "The Isle PC向けESP・radar・Aimbot",
					buyNow: "今すぐ購入",
					seeFeatures: "機能を見る",
				},
				trust: {
					status: "オンライン",
					statusNote: "The Isle HacksパッケージはThe Isle Windows PCで利用可能です。",
					statusShort: "稼働中",
					delivery: "即時デジタル配信",
					platform: "Windows 10 & 11",
					antiCheat: "Easy Anti-Cheatメンテナンス対応",
					antiCheatShort: "Easy Anti-Cheat対応",
				},
				product: {
					title: "The Isle Hacks",
					addToCart: "カートに追加",
					monthly: "月額",
					lifetime: "永久",
					available: "現在利用可能",
					gameBadge: "The Isle",
					platformBadge: "Windows PC",
					statusBadge: "Undetectedパッケージ",
				},
				reviews: {
					title: "プレイヤーの声",
					subtitle: "The Isle Hacks購入者からの最近のフィードバック",
					outOf: "/5",
					countLabel: "件のレビュー",
				},
				common: {
					buyNow: "今すぐ購入",
					readGuide: "ガイドを読む",
					language: "言語",
					officialLanguageNote: "英語が公式言語です。他言語はグローバルSEO向けに翻訳されています。",
					relatedPages: "関連ページ",
				},
				footer: {
					explore: "探索",
					help: "ヘルプと法務",
					tagline: "The Isle向けundetected ESP、wallhack、radar、Aimbot — Zadeyoで購入。",
				},
				images: {
					hero: "The Isle Hacks hero — ESP and aimbot overlay in The Isle",
					espWallhack: "Wallhack outlines showing players and wild dinosaurs through walls",
					aimbotCombat: "Soft aim assist overlay during a The Isle session",
					packFight: "The Isle Hacks combat overlay during a pack fight",
					dinoEsp: "Player ESP boxes and distance readouts in a The Isle session",
					headerArt: "Aimbot view and bone priority controls for The Isle",
					hacksPackage: "2D radar threat overlay for The Isle",
					ambushFight: "Aimbot assist during a The Isle hunt",
					battleRoyale: "The Isle Hacks in-session overview for Windows PC",
					survivalIsland: "ESP markers for carcasses and nests in The Isle",
				},
			},
			pages: {
				home: {
					title: "The Isle Hacks 2026 | ESP・Wallhack・Aimbot",
					description: "The Isle向けundetectedチート。ESP wallhack、radar hack、Aimbot、Easy Anti-Cheatメンテナンス。即時デジタル配信。",
					h1: "The Isle Hacks — Undetected ESP・Wallhack・Aimbot",
					intro: "The Isle Windows PC向けundetectedパッケージ：ESP wallhack、radar、Aimbot、Easy Anti-Cheatメンテナンス付き。",
					imageAlt: "the isle hacks hero ESP aimbot wallhack",
					galleryTitle: "The Isle Hacksギャラリー — ESP、Aimbot、wallhack",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "The Isle Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026年にThe Isle Hacksを選ぶ理由",
							paragraphs: [
								"The Isle HacksはThe Isle向けWindows PC用ESP wallhack、radar hack、Isle Aimbotのundetectedパッケージです。BRとgrowth runで敵スクワッドを読むのに最適。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "ESP wallhack、radar、Aimbotが1ライセンス",
							paragraphs: [
								"The Isle HacksはThe Isle向けWindows PC用ESP wallhack、radar hack、Isle Aimbotのundetectedパッケージです。別ツールではなく1ライセンス。",
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
							],
						},
					],
				},
				"isle-esp": {
					title: "Isle ESP | Player Boxes & Wallhack",
					description: "Isle ESP: プレイヤーボックス、死体マーカー、wallhackオーバーレイ. 即時デジタル配信. undetected — Windows PC.",
					h1: "Isle ESP",
					intro: "The Isle HacksはThe Isle向けWindows PC用ESP wallhack、radar hack、Isle Aimbotのundetectedパッケージです。Isle ESP.",
					imageAlt: "Isle ESP player boxes and distance readouts in a session",
					galleryTitle: "Isle ESP",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "The Isle Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "Isle ESP",
							paragraphs: [
								"The Isle HacksはThe Isle向けWindows PC用ESP wallhack、radar hack、Isle Aimbotのundetectedパッケージです。プレイヤーボックス、死体マーカー、wallhackオーバーレイ.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@theislehack.org",
							],
						},
					],
				},
				"isle-aimbot": {
					title: "Isle Aimbot | Soft Aim Controls",
					description: "Isle Aimbot: soft aim、FOV、種別ごとのAimbotプロファイル. 即時デジタル配信. undetected — Windows PC.",
					h1: "Isle Aimbot",
					intro: "The Isle HacksはThe Isle向けWindows PC用ESP wallhack、radar hack、Isle Aimbotのundetectedパッケージです。Isle Aimbot.",
					imageAlt: "Isle Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Isle Aimbot",
					heroImage: "/images/isle-hacks-aimbot.webp",
					ctaPrimary: "The Isle Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "Isle Aimbot",
							paragraphs: [
								"The Isle HacksはThe Isle向けWindows PC用ESP wallhack、radar hack、Isle Aimbotのundetectedパッケージです。soft aim、FOV、種別ごとのAimbotプロファイル.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@theislehack.org",
							],
						},
					],
				},
				features: {
					title: "機能 | Full Feature List",
					description: "機能: ESP、soft aim、radarコントロール. 即時デジタル配信. undetected — Windows PC.",
					h1: "機能",
					intro: "The Isle HacksはThe Isle向けWindows PC用ESP wallhack、radar hack、Isle Aimbotのundetectedパッケージです。機能.",
					imageAlt: "The Isle Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "機能",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "The Isle Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "機能",
							paragraphs: [
								"The Isle HacksはThe Isle向けWindows PC用ESP wallhack、radar hack、Isle Aimbotのundetectedパッケージです。ESP、soft aim、radarコントロール.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@theislehack.org",
							],
						},
					],
				},
				pricing: {
					title: "料金 | Monthly & Lifetime",
					description: "料金: 月額$35またはlifetime $150ライセンス. 即時デジタル配信. undetected — Windows PC.",
					h1: "料金",
					intro: "The Isle HacksはThe Isle向けWindows PC用ESP wallhack、radar hack、Isle Aimbotのundetectedパッケージです。料金.",
					imageAlt: "The Isle Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "料金",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "The Isle Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "料金",
							paragraphs: [
								"The Isle HacksはThe Isle向けWindows PC用ESP wallhack、radar hack、Isle Aimbotのundetectedパッケージです。月額$35またはlifetime $150ライセンス.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@theislehack.org",
							],
						},
					],
				},
				setup: {
					title: "セットアップ | PC Setup Guide",
					description: "セットアップ: Windows PCアクティベーションと初回起動セットアップ. 即時デジタル配信. undetected — Windows PC.",
					h1: "セットアップ",
					intro: "The Isle HacksはThe Isle向けWindows PC用ESP wallhack、radar hack、Isle Aimbotのundetectedパッケージです。セットアップ.",
					imageAlt: "The Isle Hacks setup guide screenshot for Windows PC",
					galleryTitle: "セットアップ",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "The Isle Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "セットアップ",
							paragraphs: [
								"The Isle HacksはThe Isle向けWindows PC用ESP wallhack、radar hack、Isle Aimbotのundetectedパッケージです。Windows PCアクティベーションと初回起動セットアップ.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@theislehack.org",
							],
						},
					],
				},
				updates: {
					title: "更新 | Easy Anti-Cheat Maintenance Log",
					description: "更新: Easy Anti-Cheatパッチ状況とrebuildメモ. 即時デジタル配信. undetected — Windows PC.",
					h1: "更新",
					intro: "The Isle HacksはThe Isle向けWindows PC用ESP wallhack、radar hack、Isle Aimbotのundetectedパッケージです。更新.",
					imageAlt: "The Isle Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle: "更新",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "The Isle Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "更新",
							paragraphs: [
								"The Isle HacksはThe Isle向けWindows PC用ESP wallhack、radar hack、Isle Aimbotのundetectedパッケージです。Easy Anti-Cheatパッチ状況とrebuildメモ.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@theislehack.org",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP、soft aim、配信、Easy Anti-Cheatに関する質問. 即時デジタル配信. undetected — Windows PC.",
					h1: "FAQ",
					intro: "The Isle HacksはThe Isle向けWindows PC用ESP wallhack、radar hack、Isle Aimbotのundetectedパッケージです。FAQ.",
					imageAlt: "The Isle Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "The Isle Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"The Isle HacksはThe Isle向けWindows PC用ESP wallhack、radar hack、Isle Aimbotのundetectedパッケージです。ESP、soft aim、配信、Easy Anti-Cheatに関する質問.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@theislehack.org",
							],
						},
					],
				},
				support: {
					title: "サポート | Help & Contact",
					description: "サポート: 注文ヘルプとライセンスサポート連絡先. 即時デジタル配信. undetected — Windows PC.",
					h1: "サポート",
					intro: "The Isle HacksはThe Isle向けWindows PC用ESP wallhack、radar hack、Isle Aimbotのundetectedパッケージです。サポート.",
					imageAlt: "The Isle Hacks support page for license and setup help",
					galleryTitle: "サポート",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "The Isle Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "サポート",
							paragraphs: [
								"The Isle HacksはThe Isle向けWindows PC用ESP wallhack、radar hack、Isle Aimbotのundetectedパッケージです。注文ヘルプとライセンスサポート連絡先.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@theislehack.org",
							],
						},
					],
				},
				undetected: {
					title: "Undetectedチート | Easy Anti-Cheat Safe Status",
					description: "Undetectedチート: Easy Anti-Cheatパッチ後のundetectedメンテナンス. 即時デジタル配信. undetected — Windows PC.",
					h1: "Undetectedチート",
					intro: "The Isle HacksはThe Isle向けWindows PC用ESP wallhack、radar hack、Isle Aimbotのundetectedパッケージです。Undetectedチート.",
					imageAlt: "The Isle Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetectedチート",
					heroImage: "/images/isle-hacks-wallhack.webp",
					ctaPrimary: "The Isle Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "Undetectedチート",
							paragraphs: [
								"The Isle HacksはThe Isle向けWindows PC用ESP wallhack、radar hack、Isle Aimbotのundetectedパッケージです。Easy Anti-Cheatパッチ後のundetectedメンテナンス.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@theislehack.org",
							],
						},
					],
				},
				wallhack: {
					title: "The Isle Wallhack | ESP Visibility",
					description: "The Isle Wallhack: プレイヤー、死体、距離向けwallhack ESP. 即時デジタル配信. undetected — Windows PC.",
					h1: "The Isle Wallhack",
					intro: "The Isle HacksはThe Isle向けWindows PC用ESP wallhack、radar hack、Isle Aimbotのundetectedパッケージです。The Isle Wallhack.",
					imageAlt: "isle wallhack visibility through walls in a session",
					galleryTitle: "The Isle Wallhack",
					heroImage: "/images/isle-hacks-wallhack.webp",
					ctaPrimary: "The Isle Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "The Isle Wallhack",
							paragraphs: [
								"The Isle HacksはThe Isle向けWindows PC用ESP wallhack、radar hack、Isle Aimbotのundetectedパッケージです。プレイヤー、死体、距離向けwallhack ESP.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@theislehack.org",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 側面攻撃とローテーション向け2D radarキュー. 即時デジタル配信. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "The Isle HacksはThe Isle向けWindows PC用ESP wallhack、radar hack、Isle Aimbotのundetectedパッケージです。Radar Hack.",
					imageAlt: "The Isle 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "The Isle Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"The Isle HacksはThe Isle向けWindows PC用ESP wallhack、radar hack、Isle Aimbotのundetectedパッケージです。側面攻撃とローテーション向け2D radarキュー.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@theislehack.org",
							],
						},
					],
				},
				eac: {
					title: "Easy Anti-Cheat Bypass | Patch Maintenance",
					description: "Easy Anti-Cheat Bypass: The Isle hacks向けEasy Anti-Cheat更新の対応方法. 即時デジタル配信. undetected — Windows PC.",
					h1: "Easy Anti-Cheat Bypass",
					intro: "The Isle HacksはThe Isle向けWindows PC用ESP wallhack、radar hack、Isle Aimbotのundetectedパッケージです。Easy Anti-Cheat Bypass.",
					imageAlt: "The Isle Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Easy Anti-Cheat Bypass",
					heroImage: "/images/isle-hacks-aimbot.webp",
					ctaPrimary: "The Isle Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Easy Anti-Cheat Bypass",
							paragraphs: [
								"The Isle HacksはThe Isle向けWindows PC用ESP wallhack、radar hack、Isle Aimbotのundetectedパッケージです。The Isle hacks向けEasy Anti-Cheat更新の対応方法.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@theislehack.org",
							],
						},
					],
				},
				"cheats-2026": {
					title: "The Isle Hacks 2026 | Buyer Guide",
					description: "The Isle Hacks 2026: checkout前の2026 the isle hacksチェックリスト. 即時デジタル配信. undetected — Windows PC.",
					h1: "The Isle Hacks 2026",
					intro: "The Isle HacksはThe Isle向けWindows PC用ESP wallhack、radar hack、Isle Aimbotのundetectedパッケージです。The Isle Hacks 2026.",
					imageAlt: "The Isle Hacks product overview for The Isle",
					galleryTitle: "The Isle Hacks 2026",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "The Isle Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "The Isle Hacks 2026",
							paragraphs: [
								"The Isle HacksはThe Isle向けWindows PC用ESP wallhack、radar hack、Isle Aimbotのundetectedパッケージです。checkout前の2026 the isle hacksチェックリスト.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@theislehack.org",
							],
						},
					],
				},
				hacks: {
					title: "The Isle Hacks | ESP Aimbot Guide",
					description: "The Isle Hacks: ESPとAimbotのThe Isle Hacks柱. 即時デジタル配信. undetected — Windows PC.",
					h1: "The Isle Hacks",
					intro: "The Isle HacksはThe Isle向けWindows PC用ESP wallhack、radar hack、Isle Aimbotのundetectedパッケージです。The Isle Hacks.",
					imageAlt: "The Isle Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "The Isle Hacks",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "The Isle Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "The Isle Hacks",
							paragraphs: [
								"The Isle HacksはThe Isle向けWindows PC用ESP wallhack、radar hack、Isle Aimbotのundetectedパッケージです。ESPとAimbotのThe Isle Hacks柱.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@theislehack.org",
							],
						},
					],
				},
				"cheat-download": {
					title: "The Isle Cheat Download | Instant Access",
					description: "The Isle Cheat Download: 支払い後のデジタルライセンスダウンロード. 即時デジタル配信. undetected — Windows PC.",
					h1: "The Isle Cheat Download",
					intro: "The Isle HacksはThe Isle向けWindows PC用ESP wallhack、radar hack、Isle Aimbotのundetectedパッケージです。The Isle Cheat Download.",
					imageAlt: "The Isle Hacks download and install delivery flow",
					galleryTitle: "The Isle Cheat Download",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "The Isle Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "The Isle Cheat Download",
							paragraphs: [
								"The Isle HacksはThe Isle向けWindows PC用ESP wallhack、radar hack、Isle Aimbotのundetectedパッケージです。支払い後のデジタルライセンスダウンロード.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@theislehack.org",
							],
						},
					],
				},
				"mod-menu": {
					title: "The Isle Mod Menu | In-Game Toggles",
					description: "The Isle Mod Menu: クライアント内ESPとsoft aimトグル. 即時デジタル配信. undetected — Windows PC.",
					h1: "The Isle Mod Menu",
					intro: "The Isle HacksはThe Isle向けWindows PC用ESP wallhack、radar hack、Isle Aimbotのundetectedパッケージです。The Isle Mod Menu.",
					imageAlt: "The Isle Hacks in-game menu controls",
					galleryTitle: "The Isle Mod Menu",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "The Isle Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "The Isle Mod Menu",
							paragraphs: [
								"The Isle HacksはThe Isle向けWindows PC用ESP wallhack、radar hack、Isle Aimbotのundetectedパッケージです。クライアント内ESPとsoft aimトグル.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@theislehack.org",
							],
						},
					],
				},
				"soft-aim": {
					title: "The Isle Soft Aim | Smooth Aim Settings",
					description: "The Isle Soft Aim: Windows PC向けスムーズなsoft aim設定. 即時デジタル配信. undetected — Windows PC.",
					h1: "The Isle Soft Aim",
					intro: "The Isle HacksはThe Isle向けWindows PC用ESP wallhack、radar hack、Isle Aimbotのundetectedパッケージです。The Isle Soft Aim.",
					imageAlt: "The Isle soft aim FOV and smoothness settings",
					galleryTitle: "The Isle Soft Aim",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "The Isle Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/isle-aimbot/",
					sections: [
						{
							h2: "The Isle Soft Aim",
							paragraphs: [
								"The Isle HacksはThe Isle向けWindows PC用ESP wallhack、radar hack、Isle Aimbotのundetectedパッケージです。Windows PC向けスムーズなsoft aim設定.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@theislehack.org",
							],
						},
					],
				},
				"best-cheats": {
					title: "最強The Isleチート | Buyer Checklist",
					description: "最強The Isleチート: the isle hacks購入前に比較すべき点. 即時デジタル配信. undetected — Windows PC.",
					h1: "最強The Isleチート",
					intro: "The Isle HacksはThe Isle向けWindows PC用ESP wallhack、radar hack、Isle Aimbotのundetectedパッケージです。最強The Isleチート.",
					imageAlt: "The Isle Hacks overview for The Isle on PC",
					galleryTitle: "最強The Isleチート",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "The Isle Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "最強The Isleチート",
							paragraphs: [
								"The Isle HacksはThe Isle向けWindows PC用ESP wallhack、radar hack、Isle Aimbotのundetectedパッケージです。the isle hacks購入前に比較すべき点.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@theislehack.org",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Isle Aimbot Hack | Soft Aim Assist",
					description: "Isle Aimbot Hack: The Isle向けundetected Aimbot hack assist. 即時デジタル配信. undetected — Windows PC.",
					h1: "Isle Aimbot Hack",
					intro: "The Isle HacksはThe Isle向けWindows PC用ESP wallhack、radar hack、Isle Aimbotのundetectedパッケージです。Isle Aimbot Hack.",
					imageAlt: "Isle Aimbot hack controls and bone priority",
					galleryTitle: "Isle Aimbot Hack",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "The Isle Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/isle-aimbot/",
					sections: [
						{
							h2: "Isle Aimbot Hack",
							paragraphs: [
								"The Isle HacksはThe Isle向けWindows PC用ESP wallhack、radar hack、Isle Aimbotのundetectedパッケージです。The Isle向けundetected Aimbot hack assist.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@theislehack.org",
							],
						},
					],
				},
				"esp-hack": {
					title: "Isle ESP Hack | Boxes & Loot",
					description: "Isle ESP Hack: ESP hackボックス、死体pin、距離. 即時デジタル配信. undetected — Windows PC.",
					h1: "Isle ESP Hack",
					intro: "The Isle HacksはThe Isle向けWindows PC用ESP wallhack、radar hack、Isle Aimbotのundetectedパッケージです。Isle ESP Hack.",
					imageAlt: "Isle ESP hack boxes and carcass markers",
					galleryTitle: "Isle ESP Hack",
					heroImage: "/images/isle-hacks-wallhack.webp",
					ctaPrimary: "The Isle Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "Isle ESP Hack",
							paragraphs: [
								"The Isle HacksはThe Isle向けWindows PC用ESP wallhack、radar hack、Isle Aimbotのundetectedパッケージです。ESP hackボックス、死体pin、距離.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@theislehack.org",
							],
						},
					],
				},
				"unlock-all": {
					title: "The Isle Unlock All | What It Means",
					description: "The Isle Unlock All: unlock-all検索 vs 本物のESPとAimbotツール. 即時デジタル配信. undetected — Windows PC.",
					h1: "The Isle Unlock All",
					intro: "The Isle HacksはThe Isle向けWindows PC用ESP wallhack、radar hack、Isle Aimbotのundetectedパッケージです。The Isle Unlock All.",
					imageAlt: "The Isle Hacks license features overview",
					galleryTitle: "The Isle Unlock All",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "The Isle Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "The Isle Unlock All",
							paragraphs: [
								"The Isle HacksはThe Isle向けWindows PC用ESP wallhack、radar hack、Isle Aimbotのundetectedパッケージです。unlock-all検索 vs 本物のESPとAimbotツール.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@theislehack.org",
							],
						},
					],
				},
				privacy: {
					title: "プライバシーポリシー | The Isle Hacks",
					description: "プライバシーポリシー The Isle Hacks — ESP wallhack、Aimbot向け, Windows PC.",
					h1: "プライバシーポリシー",
					intro: "The Isle HacksはThe Isle向けWindows PC用ESP wallhack、radar hack、Isle Aimbotのundetectedパッケージです。プライバシーポリシー theislehack.orgおよびThe Isleライセンス向け。",
					imageAlt: "The Isle Hacks",
					galleryTitle: "The Isle Hacks",
					heroImage: "/images/isle-hacks-aimbot.webp",
					ctaPrimary: "サポートにメール",
					ctaSecondary: "利用規約を読む",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "収集する情報",
							paragraphs: [
								"The Isle HacksはThe Isle向けWindows PC用ESP wallhack、radar hack、Isle Aimbotのundetectedパッケージです。連絡メール、Zadeyo注文参照、基本的なサイトセキュリティデータ。",
								"支払い情報はZadeyo checkoutで処理され、theislehack.orgには保存されません。",
							],
						},
						{
							h2: "データの利用方法",
							paragraphs: [
								"The Isle HacksはThe Isle向けWindows PC用ESP wallhack、radar hack、Isle Aimbotのundetectedパッケージです。サポート対応、注文処理、必要時の法的遵守。",
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
							],
						},
						{
							h2: "あなたの権利",
							paragraphs: [
								"サポート・法務: support@theislehack.org",
								"メール: support@theislehack.org",
							],
						},
					],
				},
				refund: {
					title: "返金ポリシー | The Isle Hacks",
					description: "返金ポリシー The Isle Hacks — ESP wallhack、Aimbot向け, Windows PC.",
					h1: "返金ポリシー",
					intro: "The Isle HacksはThe Isle向けWindows PC用ESP wallhack、radar hack、Isle Aimbotのundetectedパッケージです。返金ポリシー theislehack.orgおよびThe Isleライセンス向け。",
					imageAlt: "The Isle Hacks",
					galleryTitle: "The Isle Hacks",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "サポートにメール",
					ctaSecondary: "プライバシーを読む",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "デジタル配信",
							paragraphs: [
								"The Isle HacksはThe Isle向けWindows PC用ESP wallhack、radar hack、Isle Aimbotのundetectedパッケージです。連絡メール、Zadeyo注文参照、基本的なサイトセキュリティデータ。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "返金承認",
							paragraphs: [
								"The Isle HacksはThe Isle向けWindows PC用ESP wallhack、radar hack、Isle Aimbotのundetectedパッケージです。サポート対応、注文処理、必要時の法的遵守。",
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
							],
						},
						{
							h2: "申請方法",
							paragraphs: [
								"サポート・法務: support@theislehack.org",
								"メール: support@theislehack.org",
							],
						},
					],
				},
				terms: {
					title: "利用規約 | The Isle Hacks",
					description: "利用規約 The Isle Hacks — ESP wallhack、Aimbot向け, Windows PC.",
					h1: "利用規約",
					intro: "The Isle HacksはThe Isle向けWindows PC用ESP wallhack、radar hack、Isle Aimbotのundetectedパッケージです。利用規約 theislehack.orgおよびThe Isleライセンス向け。",
					imageAlt: "The Isle Hacks",
					galleryTitle: "The Isle Hacks",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "サポートにメール",
					ctaSecondary: "プライバシーを読む",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "規約への同意",
							paragraphs: [
								"The Isle HacksはThe Isle向けWindows PC用ESP wallhack、radar hack、Isle Aimbotのundetectedパッケージです。連絡メール、Zadeyo注文参照、基本的なサイトセキュリティデータ。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "リスク免責",
							paragraphs: [
								"The Isle HacksはThe Isle向けWindows PC用ESP wallhack、radar hack、Isle Aimbotのundetectedパッケージです。サポート対応、注文処理、必要時の法的遵守。",
								"チートの使用はThe Isleチームの利用規約に違反する可能性があり、BANリスクはすべて自己負担です。",
							],
						},
						{
							h2: "ポリシー変更",
							paragraphs: [
								"サポート・法務: support@theislehack.org",
								"メール: support@theislehack.org",
							],
						},
					],
				},
			},
		},
		ko: {
			ui: {
				nav: {
					home: "홈",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "기능",
					pricing: "가격",
					setup: "설치",
					updates: "업데이트",
					faq: "FAQ",
					buyNow: "구매하기",
				},
				hero: {
					accent: "Undetected The Isle 치트",
					accentShort: "The Isle Hacks",
					subtitle: "The Isle Windows PC용 ESP wallhack, radar hack, Aimbot — Easy Anti-Cheat 유지보수 포함.",
					subtitleShort: "The Isle PC용 ESP, radar, Aimbot",
					buyNow: "지금 구매",
					seeFeatures: "기능 보기",
				},
				trust: {
					status: "온라인",
					statusNote: "The Isle Hacks 패키지는 The Isle Windows PC에서 이용 가능합니다.",
					statusShort: "가동 중",
					delivery: "즉시 디지털 배송",
					platform: "Windows 10 & 11",
					antiCheat: "Easy Anti-Cheat 유지보수 지원",
					antiCheatShort: "Easy Anti-Cheat 지원",
				},
				product: {
					title: "The Isle Hacks",
					addToCart: "장바구니에 추가",
					monthly: "월간",
					lifetime: "평생",
					available: "지금 이용 가능",
					gameBadge: "The Isle",
					platformBadge: "Windows PC",
					statusBadge: "Undetected 패키지",
				},
				reviews: {
					title: "플레이어 후기",
					subtitle: "The Isle Hacks 구매자 최근 피드백",
					outOf: "/5",
					countLabel: "리뷰",
				},
				common: {
					buyNow: "지금 구매",
					readGuide: "가이드 읽기",
					language: "언어",
					officialLanguageNote: "영어가 공식 언어입니다. 다른 언어는 글로벌 SEO를 위해 번역되었습니다.",
					relatedPages: "관련 페이지",
				},
				footer: {
					explore: "탐색",
					help: "도움말 및 법적",
					tagline: "The Isle용 undetected ESP, wallhack, radar, Aimbot — Zadeyo 결제.",
				},
				images: {
					hero: "The Isle Hacks hero — ESP and aimbot overlay in The Isle",
					espWallhack: "Wallhack outlines showing players and wild dinosaurs through walls",
					aimbotCombat: "Soft aim assist overlay during a The Isle session",
					packFight: "The Isle Hacks combat overlay during a pack fight",
					dinoEsp: "Player ESP boxes and distance readouts in a The Isle session",
					headerArt: "Aimbot view and bone priority controls for The Isle",
					hacksPackage: "2D radar threat overlay for The Isle",
					ambushFight: "Aimbot assist during a The Isle hunt",
					battleRoyale: "The Isle Hacks in-session overview for Windows PC",
					survivalIsland: "ESP markers for carcasses and nests in The Isle",
				},
			},
			pages: {
				home: {
					title: "The Isle Hacks 2026 | ESP, Wallhack, Aimbot",
					description: "The Isle undetected 치트. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat 유지보수. 즉시 디지털 배송.",
					h1: "The Isle Hacks — Undetected ESP, Wallhack, Aimbot",
					intro: "The Isle Windows PC undetected 패키지: ESP wallhack, radar, Aimbot, Easy Anti-Cheat 유지보수 포함.",
					imageAlt: "the isle hacks hero ESP aimbot wallhack",
					galleryTitle: "The Isle Hacks 갤러리 — ESP, Aimbot, wallhack",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "The Isle Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026년 The Isle Hacks를 선택하는 이유",
							paragraphs: [
								"The Isle Hacks는 The Isle Windows PC용 ESP wallhack, radar hack, Isle Aimbot undetected 패키지입니다. BR 및 growth run에서 적 분대 읽기에 이상적.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot 단일 라이선스",
							paragraphs: [
								"The Isle Hacks는 The Isle Windows PC용 ESP wallhack, radar hack, Isle Aimbot undetected 패키지입니다. 별도 도구 대신 단일 라이선스.",
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
							],
						},
					],
				},
				"isle-esp": {
					title: "Isle ESP | Player Boxes & Wallhack",
					description: "Isle ESP: 플레이어 박스, 시체 마커, wallhack 오버레이. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Isle ESP",
					intro: "The Isle Hacks는 The Isle Windows PC용 ESP wallhack, radar hack, Isle Aimbot undetected 패키지입니다. Isle ESP.",
					imageAlt: "Isle ESP player boxes and distance readouts in a session",
					galleryTitle: "Isle ESP",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "The Isle Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "Isle ESP",
							paragraphs: [
								"The Isle Hacks는 The Isle Windows PC용 ESP wallhack, radar hack, Isle Aimbot undetected 패키지입니다. 플레이어 박스, 시체 마커, wallhack 오버레이.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@theislehack.org",
							],
						},
					],
				},
				"isle-aimbot": {
					title: "Isle Aimbot | Soft Aim Controls",
					description: "Isle Aimbot: soft aim, FOV, 종별 Aimbot 프로필. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Isle Aimbot",
					intro: "The Isle Hacks는 The Isle Windows PC용 ESP wallhack, radar hack, Isle Aimbot undetected 패키지입니다. Isle Aimbot.",
					imageAlt: "Isle Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Isle Aimbot",
					heroImage: "/images/isle-hacks-aimbot.webp",
					ctaPrimary: "The Isle Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "Isle Aimbot",
							paragraphs: [
								"The Isle Hacks는 The Isle Windows PC용 ESP wallhack, radar hack, Isle Aimbot undetected 패키지입니다. soft aim, FOV, 종별 Aimbot 프로필.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@theislehack.org",
							],
						},
					],
				},
				features: {
					title: "기능 | Full Feature List",
					description: "기능: ESP, soft aim, radar 컨트롤. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "기능",
					intro: "The Isle Hacks는 The Isle Windows PC용 ESP wallhack, radar hack, Isle Aimbot undetected 패키지입니다. 기능.",
					imageAlt: "The Isle Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "기능",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "The Isle Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "기능",
							paragraphs: [
								"The Isle Hacks는 The Isle Windows PC용 ESP wallhack, radar hack, Isle Aimbot undetected 패키지입니다. ESP, soft aim, radar 컨트롤.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@theislehack.org",
							],
						},
					],
				},
				pricing: {
					title: "가격 | Monthly & Lifetime",
					description: "가격: 월 $35 또는 lifetime $150 라이선스. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "가격",
					intro: "The Isle Hacks는 The Isle Windows PC용 ESP wallhack, radar hack, Isle Aimbot undetected 패키지입니다. 가격.",
					imageAlt: "The Isle Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "가격",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "The Isle Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "가격",
							paragraphs: [
								"The Isle Hacks는 The Isle Windows PC용 ESP wallhack, radar hack, Isle Aimbot undetected 패키지입니다. 월 $35 또는 lifetime $150 라이선스.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@theislehack.org",
							],
						},
					],
				},
				setup: {
					title: "설치 | PC Setup Guide",
					description: "설치: Windows PC 활성화 및 첫 실행 설정. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "설치",
					intro: "The Isle Hacks는 The Isle Windows PC용 ESP wallhack, radar hack, Isle Aimbot undetected 패키지입니다. 설치.",
					imageAlt: "The Isle Hacks setup guide screenshot for Windows PC",
					galleryTitle: "설치",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "The Isle Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "설치",
							paragraphs: [
								"The Isle Hacks는 The Isle Windows PC용 ESP wallhack, radar hack, Isle Aimbot undetected 패키지입니다. Windows PC 활성화 및 첫 실행 설정.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@theislehack.org",
							],
						},
					],
				},
				updates: {
					title: "업데이트 | Easy Anti-Cheat Maintenance Log",
					description: "업데이트: Easy Anti-Cheat 패치 상태 및 rebuild 메모. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "업데이트",
					intro: "The Isle Hacks는 The Isle Windows PC용 ESP wallhack, radar hack, Isle Aimbot undetected 패키지입니다. 업데이트.",
					imageAlt: "The Isle Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle: "업데이트",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "The Isle Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "업데이트",
							paragraphs: [
								"The Isle Hacks는 The Isle Windows PC용 ESP wallhack, radar hack, Isle Aimbot undetected 패키지입니다. Easy Anti-Cheat 패치 상태 및 rebuild 메모.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@theislehack.org",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, 배송, Easy Anti-Cheat 질문. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "FAQ",
					intro: "The Isle Hacks는 The Isle Windows PC용 ESP wallhack, radar hack, Isle Aimbot undetected 패키지입니다. FAQ.",
					imageAlt: "The Isle Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "The Isle Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"The Isle Hacks는 The Isle Windows PC용 ESP wallhack, radar hack, Isle Aimbot undetected 패키지입니다. ESP, soft aim, 배송, Easy Anti-Cheat 질문.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@theislehack.org",
							],
						},
					],
				},
				support: {
					title: "지원 | Help & Contact",
					description: "지원: 주문 도움 및 라이선스 지원 연락처. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "지원",
					intro: "The Isle Hacks는 The Isle Windows PC용 ESP wallhack, radar hack, Isle Aimbot undetected 패키지입니다. 지원.",
					imageAlt: "The Isle Hacks support page for license and setup help",
					galleryTitle: "지원",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "The Isle Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "지원",
							paragraphs: [
								"The Isle Hacks는 The Isle Windows PC용 ESP wallhack, radar hack, Isle Aimbot undetected 패키지입니다. 주문 도움 및 라이선스 지원 연락처.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@theislehack.org",
							],
						},
					],
				},
				undetected: {
					title: "Undetected 치트 | Easy Anti-Cheat Safe Status",
					description: "Undetected 치트: Easy Anti-Cheat 패치 후 undetected 유지보수. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Undetected 치트",
					intro: "The Isle Hacks는 The Isle Windows PC용 ESP wallhack, radar hack, Isle Aimbot undetected 패키지입니다. Undetected 치트.",
					imageAlt: "The Isle Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected 치트",
					heroImage: "/images/isle-hacks-wallhack.webp",
					ctaPrimary: "The Isle Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "Undetected 치트",
							paragraphs: [
								"The Isle Hacks는 The Isle Windows PC용 ESP wallhack, radar hack, Isle Aimbot undetected 패키지입니다. Easy Anti-Cheat 패치 후 undetected 유지보수.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@theislehack.org",
							],
						},
					],
				},
				wallhack: {
					title: "The Isle Wallhack | ESP Visibility",
					description: "The Isle Wallhack: 플레이어, 시체, 거리용 wallhack ESP. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "The Isle Wallhack",
					intro: "The Isle Hacks는 The Isle Windows PC용 ESP wallhack, radar hack, Isle Aimbot undetected 패키지입니다. The Isle Wallhack.",
					imageAlt: "isle wallhack visibility through walls in a session",
					galleryTitle: "The Isle Wallhack",
					heroImage: "/images/isle-hacks-wallhack.webp",
					ctaPrimary: "The Isle Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "The Isle Wallhack",
							paragraphs: [
								"The Isle Hacks는 The Isle Windows PC용 ESP wallhack, radar hack, Isle Aimbot undetected 패키지입니다. 플레이어, 시체, 거리용 wallhack ESP.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@theislehack.org",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 측면 공격과 로테이션용 2D radar 신호. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "The Isle Hacks는 The Isle Windows PC용 ESP wallhack, radar hack, Isle Aimbot undetected 패키지입니다. Radar Hack.",
					imageAlt: "The Isle 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "The Isle Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"The Isle Hacks는 The Isle Windows PC용 ESP wallhack, radar hack, Isle Aimbot undetected 패키지입니다. 측면 공격과 로테이션용 2D radar 신호.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@theislehack.org",
							],
						},
					],
				},
				eac: {
					title: "Easy Anti-Cheat Bypass | Patch Maintenance",
					description: "Easy Anti-Cheat Bypass: The Isle hacks용 Easy Anti-Cheat 업데이트 처리 방법. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Easy Anti-Cheat Bypass",
					intro: "The Isle Hacks는 The Isle Windows PC용 ESP wallhack, radar hack, Isle Aimbot undetected 패키지입니다. Easy Anti-Cheat Bypass.",
					imageAlt: "The Isle Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Easy Anti-Cheat Bypass",
					heroImage: "/images/isle-hacks-aimbot.webp",
					ctaPrimary: "The Isle Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Easy Anti-Cheat Bypass",
							paragraphs: [
								"The Isle Hacks는 The Isle Windows PC용 ESP wallhack, radar hack, Isle Aimbot undetected 패키지입니다. The Isle hacks용 Easy Anti-Cheat 업데이트 처리 방법.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@theislehack.org",
							],
						},
					],
				},
				"cheats-2026": {
					title: "The Isle Hacks 2026 | Buyer Guide",
					description: "The Isle Hacks 2026: checkout 전 2026 the isle hacks 체크리스트. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "The Isle Hacks 2026",
					intro: "The Isle Hacks는 The Isle Windows PC용 ESP wallhack, radar hack, Isle Aimbot undetected 패키지입니다. The Isle Hacks 2026.",
					imageAlt: "The Isle Hacks product overview for The Isle",
					galleryTitle: "The Isle Hacks 2026",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "The Isle Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "The Isle Hacks 2026",
							paragraphs: [
								"The Isle Hacks는 The Isle Windows PC용 ESP wallhack, radar hack, Isle Aimbot undetected 패키지입니다. checkout 전 2026 the isle hacks 체크리스트.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@theislehack.org",
							],
						},
					],
				},
				hacks: {
					title: "The Isle Hacks | ESP Aimbot Guide",
					description: "The Isle Hacks: ESP와 Aimbot을 위한 The Isle Hacks 기둥. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "The Isle Hacks",
					intro: "The Isle Hacks는 The Isle Windows PC용 ESP wallhack, radar hack, Isle Aimbot undetected 패키지입니다. The Isle Hacks.",
					imageAlt: "The Isle Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "The Isle Hacks",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "The Isle Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "The Isle Hacks",
							paragraphs: [
								"The Isle Hacks는 The Isle Windows PC용 ESP wallhack, radar hack, Isle Aimbot undetected 패키지입니다. ESP와 Aimbot을 위한 The Isle Hacks 기둥.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@theislehack.org",
							],
						},
					],
				},
				"cheat-download": {
					title: "The Isle Cheat Download | Instant Access",
					description: "The Isle Cheat Download: 결제 후 디지털 라이선스 다운로드. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "The Isle Cheat Download",
					intro: "The Isle Hacks는 The Isle Windows PC용 ESP wallhack, radar hack, Isle Aimbot undetected 패키지입니다. The Isle Cheat Download.",
					imageAlt: "The Isle Hacks download and install delivery flow",
					galleryTitle: "The Isle Cheat Download",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "The Isle Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "The Isle Cheat Download",
							paragraphs: [
								"The Isle Hacks는 The Isle Windows PC용 ESP wallhack, radar hack, Isle Aimbot undetected 패키지입니다. 결제 후 디지털 라이선스 다운로드.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@theislehack.org",
							],
						},
					],
				},
				"mod-menu": {
					title: "The Isle 모드 메뉴 | In-Game Toggles",
					description: "The Isle 모드 메뉴: 클라이언트 내 ESP 및 soft aim 토글. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "The Isle 모드 메뉴",
					intro: "The Isle Hacks는 The Isle Windows PC용 ESP wallhack, radar hack, Isle Aimbot undetected 패키지입니다. The Isle 모드 메뉴.",
					imageAlt: "The Isle Hacks in-game menu controls",
					galleryTitle: "The Isle 모드 메뉴",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "The Isle Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "The Isle 모드 메뉴",
							paragraphs: [
								"The Isle Hacks는 The Isle Windows PC용 ESP wallhack, radar hack, Isle Aimbot undetected 패키지입니다. 클라이언트 내 ESP 및 soft aim 토글.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@theislehack.org",
							],
						},
					],
				},
				"soft-aim": {
					title: "The Isle Soft Aim | Smooth Aim Settings",
					description: "The Isle Soft Aim: Windows PC용 부드러운 soft aim 설정. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "The Isle Soft Aim",
					intro: "The Isle Hacks는 The Isle Windows PC용 ESP wallhack, radar hack, Isle Aimbot undetected 패키지입니다. The Isle Soft Aim.",
					imageAlt: "The Isle soft aim FOV and smoothness settings",
					galleryTitle: "The Isle Soft Aim",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "The Isle Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/isle-aimbot/",
					sections: [
						{
							h2: "The Isle Soft Aim",
							paragraphs: [
								"The Isle Hacks는 The Isle Windows PC용 ESP wallhack, radar hack, Isle Aimbot undetected 패키지입니다. Windows PC용 부드러운 soft aim 설정.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@theislehack.org",
							],
						},
					],
				},
				"best-cheats": {
					title: "최고의 The Isle 치트 | Buyer Checklist",
					description: "최고의 The Isle 치트: the isle hacks 구매 전 비교할 항목. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "최고의 The Isle 치트",
					intro: "The Isle Hacks는 The Isle Windows PC용 ESP wallhack, radar hack, Isle Aimbot undetected 패키지입니다. 최고의 The Isle 치트.",
					imageAlt: "The Isle Hacks overview for The Isle on PC",
					galleryTitle: "최고의 The Isle 치트",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "The Isle Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "최고의 The Isle 치트",
							paragraphs: [
								"The Isle Hacks는 The Isle Windows PC용 ESP wallhack, radar hack, Isle Aimbot undetected 패키지입니다. the isle hacks 구매 전 비교할 항목.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@theislehack.org",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "The Isle 에임봇 핵 | Soft Aim Assist",
					description: "The Isle 에임봇 핵: The Isle용 undetected Aimbot hack assist. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "The Isle 에임봇 핵",
					intro: "The Isle Hacks는 The Isle Windows PC용 ESP wallhack, radar hack, Isle Aimbot undetected 패키지입니다. The Isle 에임봇 핵.",
					imageAlt: "Isle Aimbot hack controls and bone priority",
					galleryTitle: "The Isle 에임봇 핵",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "The Isle Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/isle-aimbot/",
					sections: [
						{
							h2: "The Isle 에임봇 핵",
							paragraphs: [
								"The Isle Hacks는 The Isle Windows PC용 ESP wallhack, radar hack, Isle Aimbot undetected 패키지입니다. The Isle용 undetected Aimbot hack assist.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@theislehack.org",
							],
						},
					],
				},
				"esp-hack": {
					title: "Isle ESP 핵 | Boxes & Loot",
					description: "Isle ESP 핵: ESP hack 박스, 시체 pin, 거리. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Isle ESP 핵",
					intro: "The Isle Hacks는 The Isle Windows PC용 ESP wallhack, radar hack, Isle Aimbot undetected 패키지입니다. Isle ESP 핵.",
					imageAlt: "Isle ESP hack boxes and carcass markers",
					galleryTitle: "Isle ESP 핵",
					heroImage: "/images/isle-hacks-wallhack.webp",
					ctaPrimary: "The Isle Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "Isle ESP 핵",
							paragraphs: [
								"The Isle Hacks는 The Isle Windows PC용 ESP wallhack, radar hack, Isle Aimbot undetected 패키지입니다. ESP hack 박스, 시체 pin, 거리.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@theislehack.org",
							],
						},
					],
				},
				"unlock-all": {
					title: "The Isle Unlock All | What It Means",
					description: "The Isle Unlock All: unlock-all 검색 vs 실제 ESP 및 Aimbot 도구. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "The Isle Unlock All",
					intro: "The Isle Hacks는 The Isle Windows PC용 ESP wallhack, radar hack, Isle Aimbot undetected 패키지입니다. The Isle Unlock All.",
					imageAlt: "The Isle Hacks license features overview",
					galleryTitle: "The Isle Unlock All",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "The Isle Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "The Isle Unlock All",
							paragraphs: [
								"The Isle Hacks는 The Isle Windows PC용 ESP wallhack, radar hack, Isle Aimbot undetected 패키지입니다. unlock-all 검색 vs 실제 ESP 및 Aimbot 도구.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@theislehack.org",
							],
						},
					],
				},
				privacy: {
					title: "개인정보 처리방침 | The Isle Hacks",
					description: "개인정보 처리방침 The Isle Hacks — ESP wallhack, Aimbot용, Windows PC.",
					h1: "개인정보 처리방침",
					intro: "The Isle Hacks는 The Isle Windows PC용 ESP wallhack, radar hack, Isle Aimbot undetected 패키지입니다. 개인정보 처리방침 theislehack.org 및 The Isle 라이선스용.",
					imageAlt: "The Isle Hacks",
					galleryTitle: "The Isle Hacks",
					heroImage: "/images/isle-hacks-aimbot.webp",
					ctaPrimary: "지원 이메일",
					ctaSecondary: "이용 약관 읽기",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "수집하는 정보",
							paragraphs: [
								"The Isle Hacks는 The Isle Windows PC용 ESP wallhack, radar hack, Isle Aimbot undetected 패키지입니다. 연락 이메일, Zadeyo 주문 참조 및 기본 사이트 보안 데이터.",
								"결제 정보는 Zadeyo checkout에서 처리되며 theislehack.org에 저장되지 않습니다.",
							],
						},
						{
							h2: "데이터 사용 방법",
							paragraphs: [
								"The Isle Hacks는 The Isle Windows PC용 ESP wallhack, radar hack, Isle Aimbot undetected 패키지입니다. 지원 응답, 주문 해결 및 필요 시 법적 준수.",
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
							],
						},
						{
							h2: "귀하의 권리",
							paragraphs: [
								"지원 및 법무: support@theislehack.org",
								"이메일: support@theislehack.org",
							],
						},
					],
				},
				refund: {
					title: "환불 정책 | The Isle Hacks",
					description: "환불 정책 The Isle Hacks — ESP wallhack, Aimbot용, Windows PC.",
					h1: "환불 정책",
					intro: "The Isle Hacks는 The Isle Windows PC용 ESP wallhack, radar hack, Isle Aimbot undetected 패키지입니다. 환불 정책 theislehack.org 및 The Isle 라이선스용.",
					imageAlt: "The Isle Hacks",
					galleryTitle: "The Isle Hacks",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "지원 이메일",
					ctaSecondary: "개인정보 읽기",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "디지털 배송",
							paragraphs: [
								"The Isle Hacks는 The Isle Windows PC용 ESP wallhack, radar hack, Isle Aimbot undetected 패키지입니다. 연락 이메일, Zadeyo 주문 참조 및 기본 사이트 보안 데이터.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "환불 승인",
							paragraphs: [
								"The Isle Hacks는 The Isle Windows PC용 ESP wallhack, radar hack, Isle Aimbot undetected 패키지입니다. 지원 응답, 주문 해결 및 필요 시 법적 준수.",
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
							],
						},
						{
							h2: "신청 방법",
							paragraphs: [
								"지원 및 법무: support@theislehack.org",
								"이메일: support@theislehack.org",
							],
						},
					],
				},
				terms: {
					title: "이용 약관 | The Isle Hacks",
					description: "이용 약관 The Isle Hacks — ESP wallhack, Aimbot용, Windows PC.",
					h1: "이용 약관",
					intro: "The Isle Hacks는 The Isle Windows PC용 ESP wallhack, radar hack, Isle Aimbot undetected 패키지입니다. 이용 약관 theislehack.org 및 The Isle 라이선스용.",
					imageAlt: "The Isle Hacks",
					galleryTitle: "The Isle Hacks",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "지원 이메일",
					ctaSecondary: "개인정보 읽기",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "약관 동의",
							paragraphs: [
								"The Isle Hacks는 The Isle Windows PC용 ESP wallhack, radar hack, Isle Aimbot undetected 패키지입니다. 연락 이메일, Zadeyo 주문 참조 및 기본 사이트 보안 데이터.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "위험 고지",
							paragraphs: [
								"The Isle Hacks는 The Isle Windows PC용 ESP wallhack, radar hack, Isle Aimbot undetected 패키지입니다. 지원 응답, 주문 해결 및 필요 시 법적 준수.",
								"치트 사용은 The Isle 팀 약관 위반일 수 있으며 모든 밴 위험은 본인 부담입니다.",
							],
						},
						{
							h2: "정책 변경",
							paragraphs: [
								"지원 및 법무: support@theislehack.org",
								"이메일: support@theislehack.org",
							],
						},
					],
				},
			},
		},
		zh: {
			ui: {
				nav: {
					home: "首页",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "功能",
					pricing: "价格",
					setup: "安装",
					updates: "更新",
					faq: "常见问题",
					buyNow: "立即购买",
				},
				hero: {
					accent: "Undetected The Isle作弊",
					accentShort: "The Isle Hacks",
					subtitle: "适用于The Isle Windows PC的ESP wallhack、radar hack和Aimbot — 含Easy Anti-Cheat维护。",
					subtitleShort: "The Isle PC版ESP、radar与Aimbot",
					buyNow: "立即购买",
					seeFeatures: "查看功能",
				},
				trust: {
					status: "在线",
					statusNote: "The Isle Hacks套餐已在The Isle Windows PC上线。",
					statusShort: "运行中",
					delivery: "即时数字交付",
					platform: "Windows 10 和 11",
					antiCheat: "支持Easy Anti-Cheat维护",
					antiCheatShort: "Easy Anti-Cheat支持",
				},
				product: {
					title: "The Isle Hacks",
					addToCart: "加入购物车",
					monthly: "月付",
					lifetime: "终身",
					available: "现已可用",
					gameBadge: "The Isle",
					platformBadge: "Windows PC",
					statusBadge: "Undetected套餐",
				},
				reviews: {
					title: "玩家评价",
					subtitle: "The Isle Hacks 买家近期反馈",
					outOf: "/5",
					countLabel: "条评价",
				},
				common: {
					buyNow: "立即购买",
					readGuide: "阅读指南",
					language: "语言",
					officialLanguageNote: "英语为官方语言。其他语言为全球SEO翻译版本。",
					relatedPages: "相关页面",
				},
				footer: {
					explore: "探索",
					help: "帮助与法律",
					tagline: "The Isle undetected ESP、wallhack、radar与Aimbot — 通过Zadeyo结账。",
				},
				images: {
					hero: "The Isle Hacks hero — ESP and aimbot overlay in The Isle",
					espWallhack: "Wallhack outlines showing players and wild dinosaurs through walls",
					aimbotCombat: "Soft aim assist overlay during a The Isle session",
					packFight: "The Isle Hacks combat overlay during a pack fight",
					dinoEsp: "Player ESP boxes and distance readouts in a The Isle session",
					headerArt: "Aimbot view and bone priority controls for The Isle",
					hacksPackage: "2D radar threat overlay for The Isle",
					ambushFight: "Aimbot assist during a The Isle hunt",
					battleRoyale: "The Isle Hacks in-session overview for Windows PC",
					survivalIsland: "ESP markers for carcasses and nests in The Isle",
				},
			},
			pages: {
				home: {
					title: "The Isle Hacks 2026 | ESP、Wallhack、Aimbot",
					description: "The Isle undetected作弊。ESP wallhack、radar hack、Aimbot、Easy Anti-Cheat维护。即时数字交付。",
					h1: "The Isle Hacks — Undetected ESP、Wallhack、Aimbot",
					intro: "The Isle Windows PC undetected套餐：ESP wallhack、radar、Aimbot，含Easy Anti-Cheat维护。",
					imageAlt: "the isle hacks hero ESP aimbot wallhack",
					galleryTitle: "The Isle Hacks图库 — ESP、Aimbot、wallhack",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "购买 The Isle Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026年选择The Isle Hacks的原因",
							paragraphs: [
								"The Isle Hacks为The IsleWindows PC提供ESP wallhack、radar hack和Isle Aimbotundetected套餐。适合在BR和growth run中读取敌方小队。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "ESP wallhack、radar、Aimbot单一许可证",
							paragraphs: [
								"The Isle Hacks为The IsleWindows PC提供ESP wallhack、radar hack和Isle Aimbotundetected套餐。一个许可证而非多个工具。",
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
							],
						},
					],
				},
				"isle-esp": {
					title: "Isle ESP | Player Boxes & Wallhack",
					description: "Isle ESP: 玩家方框、尸体标记和wallhack overlay. 即时数字交付. undetected — Windows PC.",
					h1: "Isle ESP",
					intro: "The Isle Hacks为The IsleWindows PC提供ESP wallhack、radar hack和Isle Aimbotundetected套餐。Isle ESP.",
					imageAlt: "Isle ESP player boxes and distance readouts in a session",
					galleryTitle: "Isle ESP",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "购买 The Isle Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "Isle ESP",
							paragraphs: [
								"The Isle Hacks为The IsleWindows PC提供ESP wallhack、radar hack和Isle Aimbotundetected套餐。玩家方框、尸体标记和wallhack overlay.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@theislehack.org",
							],
						},
					],
				},
				"isle-aimbot": {
					title: "Isle Aimbot | Soft Aim Controls",
					description: "Isle Aimbot: soft aim、FOV和按物种的Aimbot配置. 即时数字交付. undetected — Windows PC.",
					h1: "Isle Aimbot",
					intro: "The Isle Hacks为The IsleWindows PC提供ESP wallhack、radar hack和Isle Aimbotundetected套餐。Isle Aimbot.",
					imageAlt: "Isle Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Isle Aimbot",
					heroImage: "/images/isle-hacks-aimbot.webp",
					ctaPrimary: "购买 The Isle Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "Isle Aimbot",
							paragraphs: [
								"The Isle Hacks为The IsleWindows PC提供ESP wallhack、radar hack和Isle Aimbotundetected套餐。soft aim、FOV和按物种的Aimbot配置.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@theislehack.org",
							],
						},
					],
				},
				features: {
					title: "功能 | Full Feature List",
					description: "功能: ESP、soft aim、radar控制. 即时数字交付. undetected — Windows PC.",
					h1: "功能",
					intro: "The Isle Hacks为The IsleWindows PC提供ESP wallhack、radar hack和Isle Aimbotundetected套餐。功能.",
					imageAlt: "The Isle Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "功能",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "购买 The Isle Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "功能",
							paragraphs: [
								"The Isle Hacks为The IsleWindows PC提供ESP wallhack、radar hack和Isle Aimbotundetected套餐。ESP、soft aim、radar控制.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@theislehack.org",
							],
						},
					],
				},
				pricing: {
					title: "价格 | Monthly & Lifetime",
					description: "价格: 月付$35或lifetime $150许可证. 即时数字交付. undetected — Windows PC.",
					h1: "价格",
					intro: "The Isle Hacks为The IsleWindows PC提供ESP wallhack、radar hack和Isle Aimbotundetected套餐。价格.",
					imageAlt: "The Isle Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "价格",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "购买 The Isle Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "价格",
							paragraphs: [
								"The Isle Hacks为The IsleWindows PC提供ESP wallhack、radar hack和Isle Aimbotundetected套餐。月付$35或lifetime $150许可证.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@theislehack.org",
							],
						},
					],
				},
				setup: {
					title: "安装 | PC Setup Guide",
					description: "安装: Windows PC激活和首次启动设置. 即时数字交付. undetected — Windows PC.",
					h1: "安装",
					intro: "The Isle Hacks为The IsleWindows PC提供ESP wallhack、radar hack和Isle Aimbotundetected套餐。安装.",
					imageAlt: "The Isle Hacks setup guide screenshot for Windows PC",
					galleryTitle: "安装",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "购买 The Isle Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "安装",
							paragraphs: [
								"The Isle Hacks为The IsleWindows PC提供ESP wallhack、radar hack和Isle Aimbotundetected套餐。Windows PC激活和首次启动设置.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@theislehack.org",
							],
						},
					],
				},
				updates: {
					title: "更新 | Easy Anti-Cheat Maintenance Log",
					description: "更新: Easy Anti-Cheat补丁状态和rebuild说明. 即时数字交付. undetected — Windows PC.",
					h1: "更新",
					intro: "The Isle Hacks为The IsleWindows PC提供ESP wallhack、radar hack和Isle Aimbotundetected套餐。更新.",
					imageAlt: "The Isle Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle: "更新",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "购买 The Isle Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "更新",
							paragraphs: [
								"The Isle Hacks为The IsleWindows PC提供ESP wallhack、radar hack和Isle Aimbotundetected套餐。Easy Anti-Cheat补丁状态和rebuild说明.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@theislehack.org",
							],
						},
					],
				},
				faq: {
					title: "常见问题 | Common Answers",
					description: "常见问题: ESP、soft aim、交付和Easy Anti-Cheat问题. 即时数字交付. undetected — Windows PC.",
					h1: "常见问题",
					intro: "The Isle Hacks为The IsleWindows PC提供ESP wallhack、radar hack和Isle Aimbotundetected套餐。常见问题.",
					imageAlt: "The Isle Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "常见问题",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "购买 The Isle Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "常见问题",
							paragraphs: [
								"The Isle Hacks为The IsleWindows PC提供ESP wallhack、radar hack和Isle Aimbotundetected套餐。ESP、soft aim、交付和Easy Anti-Cheat问题.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@theislehack.org",
							],
						},
					],
				},
				support: {
					title: "支持 | Help & Contact",
					description: "支持: 订单帮助和许可证支持联系方式. 即时数字交付. undetected — Windows PC.",
					h1: "支持",
					intro: "The Isle Hacks为The IsleWindows PC提供ESP wallhack、radar hack和Isle Aimbotundetected套餐。支持.",
					imageAlt: "The Isle Hacks support page for license and setup help",
					galleryTitle: "支持",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "购买 The Isle Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "支持",
							paragraphs: [
								"The Isle Hacks为The IsleWindows PC提供ESP wallhack、radar hack和Isle Aimbotundetected套餐。订单帮助和许可证支持联系方式.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@theislehack.org",
							],
						},
					],
				},
				undetected: {
					title: "Undetected作弊 | Easy Anti-Cheat Safe Status",
					description: "Undetected作弊: Easy Anti-Cheat补丁后的undetected维护. 即时数字交付. undetected — Windows PC.",
					h1: "Undetected作弊",
					intro: "The Isle Hacks为The IsleWindows PC提供ESP wallhack、radar hack和Isle Aimbotundetected套餐。Undetected作弊.",
					imageAlt: "The Isle Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected作弊",
					heroImage: "/images/isle-hacks-wallhack.webp",
					ctaPrimary: "购买 The Isle Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "Undetected作弊",
							paragraphs: [
								"The Isle Hacks为The IsleWindows PC提供ESP wallhack、radar hack和Isle Aimbotundetected套餐。Easy Anti-Cheat补丁后的undetected维护.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@theislehack.org",
							],
						},
					],
				},
				wallhack: {
					title: "The Isle Wallhack | ESP Visibility",
					description: "The Isle Wallhack: 玩家、尸体和距离的wallhack ESP. 即时数字交付. undetected — Windows PC.",
					h1: "The Isle Wallhack",
					intro: "The Isle Hacks为The IsleWindows PC提供ESP wallhack、radar hack和Isle Aimbotundetected套餐。The Isle Wallhack.",
					imageAlt: "isle wallhack visibility through walls in a session",
					galleryTitle: "The Isle Wallhack",
					heroImage: "/images/isle-hacks-wallhack.webp",
					ctaPrimary: "购买 The Isle Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "The Isle Wallhack",
							paragraphs: [
								"The Isle Hacks为The IsleWindows PC提供ESP wallhack、radar hack和Isle Aimbotundetected套餐。玩家、尸体和距离的wallhack ESP.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@theislehack.org",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 侧翼和轮换的2D radar提示. 即时数字交付. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "The Isle Hacks为The IsleWindows PC提供ESP wallhack、radar hack和Isle Aimbotundetected套餐。Radar Hack.",
					imageAlt: "The Isle 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "购买 The Isle Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"The Isle Hacks为The IsleWindows PC提供ESP wallhack、radar hack和Isle Aimbotundetected套餐。侧翼和轮换的2D radar提示.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@theislehack.org",
							],
						},
					],
				},
				eac: {
					title: "Easy Anti-Cheat Bypass | Patch Maintenance",
					description: "Easy Anti-Cheat Bypass: The Isle hacks的Easy Anti-Cheat更新处理方式. 即时数字交付. undetected — Windows PC.",
					h1: "Easy Anti-Cheat Bypass",
					intro: "The Isle Hacks为The IsleWindows PC提供ESP wallhack、radar hack和Isle Aimbotundetected套餐。Easy Anti-Cheat Bypass.",
					imageAlt: "The Isle Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Easy Anti-Cheat Bypass",
					heroImage: "/images/isle-hacks-aimbot.webp",
					ctaPrimary: "购买 The Isle Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Easy Anti-Cheat Bypass",
							paragraphs: [
								"The Isle Hacks为The IsleWindows PC提供ESP wallhack、radar hack和Isle Aimbotundetected套餐。The Isle hacks的Easy Anti-Cheat更新处理方式.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@theislehack.org",
							],
						},
					],
				},
				"cheats-2026": {
					title: "The Isle作弊 2026 | Buyer Guide",
					description: "The Isle作弊 2026: checkout前的2026 the isle hacks清单. 即时数字交付. undetected — Windows PC.",
					h1: "The Isle作弊 2026",
					intro: "The Isle Hacks为The IsleWindows PC提供ESP wallhack、radar hack和Isle Aimbotundetected套餐。The Isle作弊 2026.",
					imageAlt: "The Isle Hacks product overview for The Isle",
					galleryTitle: "The Isle作弊 2026",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "购买 The Isle Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "The Isle作弊 2026",
							paragraphs: [
								"The Isle Hacks为The IsleWindows PC提供ESP wallhack、radar hack和Isle Aimbotundetected套餐。checkout前的2026 the isle hacks清单.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@theislehack.org",
							],
						},
					],
				},
				hacks: {
					title: "The Isle作弊 | ESP Aimbot Guide",
					description: "The Isle作弊: ESP和Aimbot的The Isle Hacks支柱. 即时数字交付. undetected — Windows PC.",
					h1: "The Isle作弊",
					intro: "The Isle Hacks为The IsleWindows PC提供ESP wallhack、radar hack和Isle Aimbotundetected套餐。The Isle作弊.",
					imageAlt: "The Isle Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "The Isle作弊",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "购买 The Isle Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "The Isle作弊",
							paragraphs: [
								"The Isle Hacks为The IsleWindows PC提供ESP wallhack、radar hack和Isle Aimbotundetected套餐。ESP和Aimbot的The Isle Hacks支柱.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@theislehack.org",
							],
						},
					],
				},
				"cheat-download": {
					title: "The Isle作弊下载 | Instant Access",
					description: "The Isle作弊下载: 付款后的数字许可证下载. 即时数字交付. undetected — Windows PC.",
					h1: "The Isle作弊下载",
					intro: "The Isle Hacks为The IsleWindows PC提供ESP wallhack、radar hack和Isle Aimbotundetected套餐。The Isle作弊下载.",
					imageAlt: "The Isle Hacks download and install delivery flow",
					galleryTitle: "The Isle作弊下载",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "购买 The Isle Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "The Isle作弊下载",
							paragraphs: [
								"The Isle Hacks为The IsleWindows PC提供ESP wallhack、radar hack和Isle Aimbotundetected套餐。付款后的数字许可证下载.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@theislehack.org",
							],
						},
					],
				},
				"mod-menu": {
					title: "The Isle修改菜单 | In-Game Toggles",
					description: "The Isle修改菜单: 客户端内ESP和soft aim开关. 即时数字交付. undetected — Windows PC.",
					h1: "The Isle修改菜单",
					intro: "The Isle Hacks为The IsleWindows PC提供ESP wallhack、radar hack和Isle Aimbotundetected套餐。The Isle修改菜单.",
					imageAlt: "The Isle Hacks in-game menu controls",
					galleryTitle: "The Isle修改菜单",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "购买 The Isle Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "The Isle修改菜单",
							paragraphs: [
								"The Isle Hacks为The IsleWindows PC提供ESP wallhack、radar hack和Isle Aimbotundetected套餐。客户端内ESP和soft aim开关.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@theislehack.org",
							],
						},
					],
				},
				"soft-aim": {
					title: "The Isle Soft Aim | Smooth Aim Settings",
					description: "The Isle Soft Aim: Windows PC的流畅soft aim设置. 即时数字交付. undetected — Windows PC.",
					h1: "The Isle Soft Aim",
					intro: "The Isle Hacks为The IsleWindows PC提供ESP wallhack、radar hack和Isle Aimbotundetected套餐。The Isle Soft Aim.",
					imageAlt: "The Isle soft aim FOV and smoothness settings",
					galleryTitle: "The Isle Soft Aim",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "购买 The Isle Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/isle-aimbot/",
					sections: [
						{
							h2: "The Isle Soft Aim",
							paragraphs: [
								"The Isle Hacks为The IsleWindows PC提供ESP wallhack、radar hack和Isle Aimbotundetected套餐。Windows PC的流畅soft aim设置.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@theislehack.org",
							],
						},
					],
				},
				"best-cheats": {
					title: "最佳The Isle作弊 | Buyer Checklist",
					description: "最佳The Isle作弊: 购买the isle hacks前应比较的内容. 即时数字交付. undetected — Windows PC.",
					h1: "最佳The Isle作弊",
					intro: "The Isle Hacks为The IsleWindows PC提供ESP wallhack、radar hack和Isle Aimbotundetected套餐。最佳The Isle作弊.",
					imageAlt: "The Isle Hacks overview for The Isle on PC",
					galleryTitle: "最佳The Isle作弊",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "购买 The Isle Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "最佳The Isle作弊",
							paragraphs: [
								"The Isle Hacks为The IsleWindows PC提供ESP wallhack、radar hack和Isle Aimbotundetected套餐。购买the isle hacks前应比较的内容.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@theislehack.org",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "The Isle自瞄外挂 | Soft Aim Assist",
					description: "The Isle自瞄外挂: The Isle的undetected Aimbot hack assist. 即时数字交付. undetected — Windows PC.",
					h1: "The Isle自瞄外挂",
					intro: "The Isle Hacks为The IsleWindows PC提供ESP wallhack、radar hack和Isle Aimbotundetected套餐。The Isle自瞄外挂.",
					imageAlt: "Isle Aimbot hack controls and bone priority",
					galleryTitle: "The Isle自瞄外挂",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "购买 The Isle Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/isle-aimbot/",
					sections: [
						{
							h2: "The Isle自瞄外挂",
							paragraphs: [
								"The Isle Hacks为The IsleWindows PC提供ESP wallhack、radar hack和Isle Aimbotundetected套餐。The Isle的undetected Aimbot hack assist.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@theislehack.org",
							],
						},
					],
				},
				"esp-hack": {
					title: "Isle ESP外挂 | Boxes & Loot",
					description: "Isle ESP外挂: ESP hack方框、尸体pin和距离. 即时数字交付. undetected — Windows PC.",
					h1: "Isle ESP外挂",
					intro: "The Isle Hacks为The IsleWindows PC提供ESP wallhack、radar hack和Isle Aimbotundetected套餐。Isle ESP外挂.",
					imageAlt: "Isle ESP hack boxes and carcass markers",
					galleryTitle: "Isle ESP外挂",
					heroImage: "/images/isle-hacks-wallhack.webp",
					ctaPrimary: "购买 The Isle Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "Isle ESP外挂",
							paragraphs: [
								"The Isle Hacks为The IsleWindows PC提供ESP wallhack、radar hack和Isle Aimbotundetected套餐。ESP hack方框、尸体pin和距离.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@theislehack.org",
							],
						},
					],
				},
				"unlock-all": {
					title: "The Isle Unlock All | What It Means",
					description: "The Isle Unlock All: unlock-all搜索 vs 真正的ESP和Aimbot工具. 即时数字交付. undetected — Windows PC.",
					h1: "The Isle Unlock All",
					intro: "The Isle Hacks为The IsleWindows PC提供ESP wallhack、radar hack和Isle Aimbotundetected套餐。The Isle Unlock All.",
					imageAlt: "The Isle Hacks license features overview",
					galleryTitle: "The Isle Unlock All",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "购买 The Isle Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "The Isle Unlock All",
							paragraphs: [
								"The Isle Hacks为The IsleWindows PC提供ESP wallhack、radar hack和Isle Aimbotundetected套餐。unlock-all搜索 vs 真正的ESP和Aimbot工具.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@theislehack.org",
							],
						},
					],
				},
				privacy: {
					title: "隐私政策 | The Isle Hacks",
					description: "隐私政策 The Isle Hacks — ESP wallhack、Aimbot, Windows PC.",
					h1: "隐私政策",
					intro: "The Isle Hacks为The IsleWindows PC提供ESP wallhack、radar hack和Isle Aimbotundetected套餐。隐私政策 适用于 theislehack.org 和 The Isle 许可证。",
					imageAlt: "The Isle Hacks",
					galleryTitle: "The Isle Hacks",
					heroImage: "/images/isle-hacks-aimbot.webp",
					ctaPrimary: "邮件支持",
					ctaSecondary: "阅读使用条款",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "我们收集的信息",
							paragraphs: [
								"The Isle Hacks为The IsleWindows PC提供ESP wallhack、radar hack和Isle Aimbotundetected套餐。联系邮箱、Zadeyo 订单参考及基本网站安全数据。",
								"支付详情由 Zadeyo checkout 处理 — 不存储在 theislehack.org。",
							],
						},
						{
							h2: "数据使用方式",
							paragraphs: [
								"The Isle Hacks为The IsleWindows PC提供ESP wallhack、radar hack和Isle Aimbotundetected套餐。支持回复、订单处理及必要时的法律合规。",
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
							],
						},
						{
							h2: "您的权利",
							paragraphs: [
								"支持与法务：support@theislehack.org",
								"邮箱: support@theislehack.org",
							],
						},
					],
				},
				refund: {
					title: "退款政策 | The Isle Hacks",
					description: "退款政策 The Isle Hacks — ESP wallhack、Aimbot, Windows PC.",
					h1: "退款政策",
					intro: "The Isle Hacks为The IsleWindows PC提供ESP wallhack、radar hack和Isle Aimbotundetected套餐。退款政策 适用于 theislehack.org 和 The Isle 许可证。",
					imageAlt: "The Isle Hacks",
					galleryTitle: "The Isle Hacks",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "邮件支持",
					ctaSecondary: "阅读隐私政策",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "数字交付",
							paragraphs: [
								"The Isle Hacks为The IsleWindows PC提供ESP wallhack、radar hack和Isle Aimbotundetected套餐。联系邮箱、Zadeyo 订单参考及基本网站安全数据。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "退款批准",
							paragraphs: [
								"The Isle Hacks为The IsleWindows PC提供ESP wallhack、radar hack和Isle Aimbotundetected套餐。支持回复、订单处理及必要时的法律合规。",
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
							],
						},
						{
							h2: "如何申请",
							paragraphs: [
								"支持与法务：support@theislehack.org",
								"邮箱: support@theislehack.org",
							],
						},
					],
				},
				terms: {
					title: "使用条款 | The Isle Hacks",
					description: "使用条款 The Isle Hacks — ESP wallhack、Aimbot, Windows PC.",
					h1: "使用条款",
					intro: "The Isle Hacks为The IsleWindows PC提供ESP wallhack、radar hack和Isle Aimbotundetected套餐。使用条款 适用于 theislehack.org 和 The Isle 许可证。",
					imageAlt: "The Isle Hacks",
					galleryTitle: "The Isle Hacks",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "邮件支持",
					ctaSecondary: "阅读隐私政策",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "接受条款",
							paragraphs: [
								"The Isle Hacks为The IsleWindows PC提供ESP wallhack、radar hack和Isle Aimbotundetected套餐。联系邮箱、Zadeyo 订单参考及基本网站安全数据。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "风险免责声明",
							paragraphs: [
								"The Isle Hacks为The IsleWindows PC提供ESP wallhack、radar hack和Isle Aimbotundetected套餐。支持回复、订单处理及必要时的法律合规。",
								"使用作弊可能违反 The Isle 团队条款 — 您承担所有封禁风险。",
							],
						},
						{
							h2: "政策变更",
							paragraphs: [
								"支持与法务：support@theislehack.org",
								"邮箱: support@theislehack.org",
							],
						},
					],
				},
			},
		},
		hi: {
			ui: {
				nav: {
					home: "होम",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "फ़ीचर्स",
					pricing: "कीमत",
					setup: "सेटअप",
					updates: "अपडेट",
					faq: "FAQ",
					buyNow: "अभी खरीदें",
				},
				hero: {
					accent: "Undetected the isle hacks",
					accentShort: "The Isle Hacks",
					subtitle: "The Isle Windows PC के लिए ESP wallhack, radar hack और Aimbot — Easy Anti-Cheat maintenance शामिल।",
					subtitleShort: "The Isle PC के लिए ESP, radar और Aimbot",
					buyNow: "अभी खरीदें",
					seeFeatures: "फ़ीचर्स देखें",
				},
				trust: {
					status: "ऑनलाइन",
					statusNote: "The Isle Hacks पैकेज The Isle Windows PC के लिए सक्रिय है।",
					statusShort: "सक्रिय",
					delivery: "तुरंत डिजिटल डिलीवरी",
					platform: "Windows 10 और 11",
					antiCheat: "Easy Anti-Cheat maintenance समर्थित",
					antiCheatShort: "Easy Anti-Cheat समर्थित",
				},
				product: {
					title: "The Isle Hacks",
					addToCart: "कार्ट में जोड़ें",
					monthly: "मासिक",
					lifetime: "लाइफ़टाइम",
					available: "अभी उपलब्ध",
					gameBadge: "The Isle",
					platformBadge: "Windows PC",
					statusBadge: "Undetected पैकेज",
				},
				reviews: {
					title: "खिलाड़ी क्या कहते हैं",
					subtitle: "The Isle Hacks खरीदारों की हाल की प्रतिक्रिया",
					outOf: "/5",
					countLabel: "समीक्षाएँ",
				},
				common: {
					buyNow: "अभी खरीदें",
					readGuide: "गाइड पढ़ें",
					language: "भाषा",
					officialLanguageNote: "अंग्रेज़ी आधिकारिक भाषा है। अन्य भाषाएँ वैश्विक SEO के लिए अनुवादित हैं।",
					relatedPages: "संबंधित पेज",
				},
				footer: {
					explore: "एक्सप्लोर",
					help: "सहायता और कानूनी",
					tagline: "The Isle के लिए undetected ESP, wallhack, radar और Aimbot — Zadeyo checkout।",
				},
				images: {
					hero: "The Isle Hacks hero — ESP and aimbot overlay in The Isle",
					espWallhack: "Wallhack outlines showing players and wild dinosaurs through walls",
					aimbotCombat: "Soft aim assist overlay during a The Isle session",
					packFight: "The Isle Hacks combat overlay during a pack fight",
					dinoEsp: "Player ESP boxes and distance readouts in a The Isle session",
					headerArt: "Aimbot view and bone priority controls for The Isle",
					hacksPackage: "2D radar threat overlay for The Isle",
					ambushFight: "Aimbot assist during a The Isle hunt",
					battleRoyale: "The Isle Hacks in-session overview for Windows PC",
					survivalIsland: "ESP markers for carcasses and nests in The Isle",
				},
			},
			pages: {
				home: {
					title: "The Isle Hacks 2026 | ESP, Wallhack और Aimbot",
					description: "The Isle undetected cheats. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat maintenance. Instant digital delivery.",
					h1: "The Isle Hacks — Undetected ESP, Wallhack और Aimbot",
					intro: "The Isle Windows PC undetected पैकेज: ESP wallhack, radar, Aimbot, Easy Anti-Cheat maintenance सहित.",
					imageAlt: "the isle hacks hero ESP aimbot wallhack",
					galleryTitle: "The Isle Hacks gallery — ESP, Aimbot, wallhack",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "The Isle Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026 में The Isle Hacks क्यों",
							paragraphs: [
								"The Isle Hacks The Isle के लिए Windows PC पर ESP wallhack, radar hack और Isle Aimbot undetected पैकेज देता है। BR और growth run में दुश्मन pack पढ़ने के लिए आदर्श.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot एक लाइसेंस में",
							paragraphs: [
								"The Isle Hacks The Isle के लिए Windows PC पर ESP wallhack, radar hack और Isle Aimbot undetected पैकेज देता है। अलग टूल्स के बजाय एक लाइसेंस.",
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
							],
						},
					],
				},
				"isle-esp": {
					title: "Isle ESP | Player Boxes & Wallhack",
					description: "Isle ESP: प्लेयर बॉक्स, carcass markers और wallhack overlays. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Isle ESP",
					intro: "The Isle Hacks The Isle के लिए Windows PC पर ESP wallhack, radar hack और Isle Aimbot undetected पैकेज देता है। Isle ESP.",
					imageAlt: "Isle ESP player boxes and distance readouts in a session",
					galleryTitle: "Isle ESP",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "The Isle Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "Isle ESP",
							paragraphs: [
								"The Isle Hacks The Isle के लिए Windows PC पर ESP wallhack, radar hack और Isle Aimbot undetected पैकेज देता है। प्लेयर बॉक्स, carcass markers और wallhack overlays.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@theislehack.org",
							],
						},
					],
				},
				"isle-aimbot": {
					title: "Isle Aimbot | Soft Aim Controls",
					description: "Isle Aimbot: soft aim, FOV और प्रजाति-वार Aimbot profiles. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Isle Aimbot",
					intro: "The Isle Hacks The Isle के लिए Windows PC पर ESP wallhack, radar hack और Isle Aimbot undetected पैकेज देता है। Isle Aimbot.",
					imageAlt: "Isle Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Isle Aimbot",
					heroImage: "/images/isle-hacks-aimbot.webp",
					ctaPrimary: "The Isle Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "Isle Aimbot",
							paragraphs: [
								"The Isle Hacks The Isle के लिए Windows PC पर ESP wallhack, radar hack और Isle Aimbot undetected पैकेज देता है। soft aim, FOV और प्रजाति-वार Aimbot profiles.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@theislehack.org",
							],
						},
					],
				},
				features: {
					title: "फ़ीचर्स | Full Feature List",
					description: "फ़ीचर्स: ESP, soft aim, radar controls. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "फ़ीचर्स",
					intro: "The Isle Hacks The Isle के लिए Windows PC पर ESP wallhack, radar hack और Isle Aimbot undetected पैकेज देता है। फ़ीचर्स.",
					imageAlt: "The Isle Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "फ़ीचर्स",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "The Isle Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "फ़ीचर्स",
							paragraphs: [
								"The Isle Hacks The Isle के लिए Windows PC पर ESP wallhack, radar hack और Isle Aimbot undetected पैकेज देता है। ESP, soft aim, radar controls.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@theislehack.org",
							],
						},
					],
				},
				pricing: {
					title: "कीमत | Monthly & Lifetime",
					description: "कीमत: $35 monthly या $150 lifetime licenses. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "कीमत",
					intro: "The Isle Hacks The Isle के लिए Windows PC पर ESP wallhack, radar hack और Isle Aimbot undetected पैकेज देता है। कीमत.",
					imageAlt: "The Isle Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "कीमत",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "The Isle Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "कीमत",
							paragraphs: [
								"The Isle Hacks The Isle के लिए Windows PC पर ESP wallhack, radar hack और Isle Aimbot undetected पैकेज देता है। $35 monthly या $150 lifetime licenses.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@theislehack.org",
							],
						},
					],
				},
				setup: {
					title: "सेटअप | PC Setup Guide",
					description: "सेटअप: Windows PC activation और first-launch setup. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "सेटअप",
					intro: "The Isle Hacks The Isle के लिए Windows PC पर ESP wallhack, radar hack और Isle Aimbot undetected पैकेज देता है। सेटअप.",
					imageAlt: "The Isle Hacks setup guide screenshot for Windows PC",
					galleryTitle: "सेटअप",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "The Isle Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "सेटअप",
							paragraphs: [
								"The Isle Hacks The Isle के लिए Windows PC पर ESP wallhack, radar hack और Isle Aimbot undetected पैकेज देता है। Windows PC activation और first-launch setup.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@theislehack.org",
							],
						},
					],
				},
				updates: {
					title: "अपडेट | Easy Anti-Cheat Maintenance Log",
					description: "अपडेट: Easy Anti-Cheat patch status और rebuild notes. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "अपडेट",
					intro: "The Isle Hacks The Isle के लिए Windows PC पर ESP wallhack, radar hack और Isle Aimbot undetected पैकेज देता है। अपडेट.",
					imageAlt: "The Isle Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle: "अपडेट",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "The Isle Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "अपडेट",
							paragraphs: [
								"The Isle Hacks The Isle के लिए Windows PC पर ESP wallhack, radar hack और Isle Aimbot undetected पैकेज देता है। Easy Anti-Cheat patch status और rebuild notes.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@theislehack.org",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery और Easy Anti-Cheat questions. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "FAQ",
					intro: "The Isle Hacks The Isle के लिए Windows PC पर ESP wallhack, radar hack और Isle Aimbot undetected पैकेज देता है। FAQ.",
					imageAlt: "The Isle Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "The Isle Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"The Isle Hacks The Isle के लिए Windows PC पर ESP wallhack, radar hack और Isle Aimbot undetected पैकेज देता है। ESP, soft aim, delivery और Easy Anti-Cheat questions.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@theislehack.org",
							],
						},
					],
				},
				support: {
					title: "सहायता | Help & Contact",
					description: "सहायता: order help और license support contact. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "सहायता",
					intro: "The Isle Hacks The Isle के लिए Windows PC पर ESP wallhack, radar hack और Isle Aimbot undetected पैकेज देता है। सहायता.",
					imageAlt: "The Isle Hacks support page for license and setup help",
					galleryTitle: "सहायता",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "The Isle Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "सहायता",
							paragraphs: [
								"The Isle Hacks The Isle के लिए Windows PC पर ESP wallhack, radar hack और Isle Aimbot undetected पैकेज देता है। order help और license support contact.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@theislehack.org",
							],
						},
					],
				},
				undetected: {
					title: "Undetected cheats | Easy Anti-Cheat Safe Status",
					description: "Undetected cheats: Easy Anti-Cheat patches के बाद undetected maintenance. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Undetected cheats",
					intro: "The Isle Hacks The Isle के लिए Windows PC पर ESP wallhack, radar hack और Isle Aimbot undetected पैकेज देता है। Undetected cheats.",
					imageAlt: "The Isle Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected cheats",
					heroImage: "/images/isle-hacks-wallhack.webp",
					ctaPrimary: "The Isle Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "Undetected cheats",
							paragraphs: [
								"The Isle Hacks The Isle के लिए Windows PC पर ESP wallhack, radar hack और Isle Aimbot undetected पैकेज देता है। Easy Anti-Cheat patches के बाद undetected maintenance.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@theislehack.org",
							],
						},
					],
				},
				wallhack: {
					title: "The Isle Wallhack | ESP Visibility",
					description: "The Isle Wallhack: players, carcasses और distance के लिए wallhack ESP. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "The Isle Wallhack",
					intro: "The Isle Hacks The Isle के लिए Windows PC पर ESP wallhack, radar hack और Isle Aimbot undetected पैकेज देता है। The Isle Wallhack.",
					imageAlt: "isle wallhack visibility through walls in a session",
					galleryTitle: "The Isle Wallhack",
					heroImage: "/images/isle-hacks-wallhack.webp",
					ctaPrimary: "The Isle Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "The Isle Wallhack",
							paragraphs: [
								"The Isle Hacks The Isle के लिए Windows PC पर ESP wallhack, radar hack और Isle Aimbot undetected पैकेज देता है। players, carcasses और distance के लिए wallhack ESP.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@theislehack.org",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: flanks और rotations के लिए 2D radar cues. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "The Isle Hacks The Isle के लिए Windows PC पर ESP wallhack, radar hack और Isle Aimbot undetected पैकेज देता है। Radar Hack.",
					imageAlt: "The Isle 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "The Isle Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"The Isle Hacks The Isle के लिए Windows PC पर ESP wallhack, radar hack और Isle Aimbot undetected पैकेज देता है। flanks और rotations के लिए 2D radar cues.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@theislehack.org",
							],
						},
					],
				},
				eac: {
					title: "Easy Anti-Cheat Bypass | Patch Maintenance",
					description: "Easy Anti-Cheat Bypass: The Isle hacks के लिए Easy Anti-Cheat updates कैसे handle होते हैं. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Easy Anti-Cheat Bypass",
					intro: "The Isle Hacks The Isle के लिए Windows PC पर ESP wallhack, radar hack और Isle Aimbot undetected पैकेज देता है। Easy Anti-Cheat Bypass.",
					imageAlt: "The Isle Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Easy Anti-Cheat Bypass",
					heroImage: "/images/isle-hacks-aimbot.webp",
					ctaPrimary: "The Isle Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Easy Anti-Cheat Bypass",
							paragraphs: [
								"The Isle Hacks The Isle के लिए Windows PC पर ESP wallhack, radar hack और Isle Aimbot undetected पैकेज देता है। The Isle hacks के लिए Easy Anti-Cheat updates कैसे handle होते हैं.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@theislehack.org",
							],
						},
					],
				},
				"cheats-2026": {
					title: "The Isle Hacks 2026 | Buyer Guide",
					description: "The Isle Hacks 2026: checkout से पहले 2026 the isle hacks checklist. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "The Isle Hacks 2026",
					intro: "The Isle Hacks The Isle के लिए Windows PC पर ESP wallhack, radar hack और Isle Aimbot undetected पैकेज देता है। The Isle Hacks 2026.",
					imageAlt: "The Isle Hacks product overview for The Isle",
					galleryTitle: "The Isle Hacks 2026",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "The Isle Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "The Isle Hacks 2026",
							paragraphs: [
								"The Isle Hacks The Isle के लिए Windows PC पर ESP wallhack, radar hack और Isle Aimbot undetected पैकेज देता है। checkout से पहले 2026 the isle hacks checklist.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@theislehack.org",
							],
						},
					],
				},
				hacks: {
					title: "The Isle Hacks | ESP Aimbot Guide",
					description: "The Isle Hacks: ESP और Aimbot के लिए The Isle Hacks pillar. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "The Isle Hacks",
					intro: "The Isle Hacks The Isle के लिए Windows PC पर ESP wallhack, radar hack और Isle Aimbot undetected पैकेज देता है। The Isle Hacks.",
					imageAlt: "The Isle Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "The Isle Hacks",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "The Isle Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "The Isle Hacks",
							paragraphs: [
								"The Isle Hacks The Isle के लिए Windows PC पर ESP wallhack, radar hack और Isle Aimbot undetected पैकेज देता है। ESP और Aimbot के लिए The Isle Hacks pillar.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@theislehack.org",
							],
						},
					],
				},
				"cheat-download": {
					title: "The Isle Cheat Download | Instant Access",
					description: "The Isle Cheat Download: payment के बाद digital license download. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "The Isle Cheat Download",
					intro: "The Isle Hacks The Isle के लिए Windows PC पर ESP wallhack, radar hack और Isle Aimbot undetected पैकेज देता है। The Isle Cheat Download.",
					imageAlt: "The Isle Hacks download and install delivery flow",
					galleryTitle: "The Isle Cheat Download",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "The Isle Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "The Isle Cheat Download",
							paragraphs: [
								"The Isle Hacks The Isle के लिए Windows PC पर ESP wallhack, radar hack और Isle Aimbot undetected पैकेज देता है। payment के बाद digital license download.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@theislehack.org",
							],
						},
					],
				},
				"mod-menu": {
					title: "The Isle Mod Menu | In-Game Toggles",
					description: "The Isle Mod Menu: in-client ESP और soft aim toggles. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "The Isle Mod Menu",
					intro: "The Isle Hacks The Isle के लिए Windows PC पर ESP wallhack, radar hack और Isle Aimbot undetected पैकेज देता है। The Isle Mod Menu.",
					imageAlt: "The Isle Hacks in-game menu controls",
					galleryTitle: "The Isle Mod Menu",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "The Isle Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "The Isle Mod Menu",
							paragraphs: [
								"The Isle Hacks The Isle के लिए Windows PC पर ESP wallhack, radar hack और Isle Aimbot undetected पैकेज देता है। in-client ESP और soft aim toggles.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@theislehack.org",
							],
						},
					],
				},
				"soft-aim": {
					title: "The Isle Soft Aim | Smooth Aim Settings",
					description: "The Isle Soft Aim: Windows PC के लिए smooth soft aim settings. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "The Isle Soft Aim",
					intro: "The Isle Hacks The Isle के लिए Windows PC पर ESP wallhack, radar hack और Isle Aimbot undetected पैकेज देता है। The Isle Soft Aim.",
					imageAlt: "The Isle soft aim FOV and smoothness settings",
					galleryTitle: "The Isle Soft Aim",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "The Isle Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/isle-aimbot/",
					sections: [
						{
							h2: "The Isle Soft Aim",
							paragraphs: [
								"The Isle Hacks The Isle के लिए Windows PC पर ESP wallhack, radar hack और Isle Aimbot undetected पैकेज देता है। Windows PC के लिए smooth soft aim settings.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@theislehack.org",
							],
						},
					],
				},
				"best-cheats": {
					title: "सर्वश्रेष्ठ The Isle Hacks | Buyer Checklist",
					description: "सर्वश्रेष्ठ The Isle Hacks: the isle hacks खरीदने से पहले क्या compare करें. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "सर्वश्रेष्ठ The Isle Hacks",
					intro: "The Isle Hacks The Isle के लिए Windows PC पर ESP wallhack, radar hack और Isle Aimbot undetected पैकेज देता है। सर्वश्रेष्ठ The Isle Hacks.",
					imageAlt: "The Isle Hacks overview for The Isle on PC",
					galleryTitle: "सर्वश्रेष्ठ The Isle Hacks",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "The Isle Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "सर्वश्रेष्ठ The Isle Hacks",
							paragraphs: [
								"The Isle Hacks The Isle के लिए Windows PC पर ESP wallhack, radar hack और Isle Aimbot undetected पैकेज देता है। the isle hacks खरीदने से पहले क्या compare करें.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@theislehack.org",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Isle Aimbot Hack | Soft Aim Assist",
					description: "Isle Aimbot Hack: The Isle के लिए undetected Aimbot hack assist. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Isle Aimbot Hack",
					intro: "The Isle Hacks The Isle के लिए Windows PC पर ESP wallhack, radar hack और Isle Aimbot undetected पैकेज देता है। Isle Aimbot Hack.",
					imageAlt: "Isle Aimbot hack controls and bone priority",
					galleryTitle: "Isle Aimbot Hack",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "The Isle Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/isle-aimbot/",
					sections: [
						{
							h2: "Isle Aimbot Hack",
							paragraphs: [
								"The Isle Hacks The Isle के लिए Windows PC पर ESP wallhack, radar hack और Isle Aimbot undetected पैकेज देता है। The Isle के लिए undetected Aimbot hack assist.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@theislehack.org",
							],
						},
					],
				},
				"esp-hack": {
					title: "Isle ESP Hack | Boxes & Loot",
					description: "Isle ESP Hack: ESP hack boxes, carcass pins और distance. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Isle ESP Hack",
					intro: "The Isle Hacks The Isle के लिए Windows PC पर ESP wallhack, radar hack और Isle Aimbot undetected पैकेज देता है। Isle ESP Hack.",
					imageAlt: "Isle ESP hack boxes and carcass markers",
					galleryTitle: "Isle ESP Hack",
					heroImage: "/images/isle-hacks-wallhack.webp",
					ctaPrimary: "The Isle Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "Isle ESP Hack",
							paragraphs: [
								"The Isle Hacks The Isle के लिए Windows PC पर ESP wallhack, radar hack और Isle Aimbot undetected पैकेज देता है। ESP hack boxes, carcass pins और distance.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@theislehack.org",
							],
						},
					],
				},
				"unlock-all": {
					title: "The Isle Unlock All | What It Means",
					description: "The Isle Unlock All: unlock-all searches vs real ESP और Aimbot tools. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "The Isle Unlock All",
					intro: "The Isle Hacks The Isle के लिए Windows PC पर ESP wallhack, radar hack और Isle Aimbot undetected पैकेज देता है। The Isle Unlock All.",
					imageAlt: "The Isle Hacks license features overview",
					galleryTitle: "The Isle Unlock All",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "The Isle Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "The Isle Unlock All",
							paragraphs: [
								"The Isle Hacks The Isle के लिए Windows PC पर ESP wallhack, radar hack और Isle Aimbot undetected पैकेज देता है। unlock-all searches vs real ESP और Aimbot tools.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@theislehack.org",
							],
						},
					],
				},
				privacy: {
					title: "गोपनीयता नीति | The Isle Hacks",
					description: "गोपनीयता नीति The Isle Hacks — ESP wallhack, Aimbot के लिए, Windows PC.",
					h1: "गोपनीयता नीति",
					intro: "The Isle Hacks The Isle के लिए Windows PC पर ESP wallhack, radar hack और Isle Aimbot undetected पैकेज देता है। गोपनीयता नीति theislehack.org और The Isle लाइसेंस के लिए।",
					imageAlt: "The Isle Hacks",
					galleryTitle: "The Isle Hacks",
					heroImage: "/images/isle-hacks-aimbot.webp",
					ctaPrimary: "सहायता ईमेल",
					ctaSecondary: "शर्तें पढ़ें",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "हम जो जानकारी एकत्र करते हैं",
							paragraphs: [
								"The Isle Hacks The Isle के लिए Windows PC पर ESP wallhack, radar hack और Isle Aimbot undetected पैकेज देता है। संपर्क ईमेल, Zadeyo ऑर्डर संदर्भ और बुनियादी साइट सुरक्षा डेटा।",
								"भुगतान विवरण Zadeyo checkout द्वारा संसाधित — theislehack.org पर संग्रहीत नहीं।",
							],
						},
						{
							h2: "हम डेटा का उपयोग कैसे करते हैं",
							paragraphs: [
								"The Isle Hacks The Isle के लिए Windows PC पर ESP wallhack, radar hack और Isle Aimbot undetected पैकेज देता है। सहायता प्रतिक्रिया, ऑर्डर समाधान और आवश्यकता पर कानूनी अनुपालन।",
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
							],
						},
						{
							h2: "आपके अधिकार",
							paragraphs: [
								"सहायता: support@theislehack.org",
								"ईमेल: support@theislehack.org",
							],
						},
					],
				},
				refund: {
					title: "रिफंड नीति | The Isle Hacks",
					description: "रिफंड नीति The Isle Hacks — ESP wallhack, Aimbot के लिए, Windows PC.",
					h1: "रिफंड नीति",
					intro: "The Isle Hacks The Isle के लिए Windows PC पर ESP wallhack, radar hack और Isle Aimbot undetected पैकेज देता है। रिफंड नीति theislehack.org और The Isle लाइसेंस के लिए।",
					imageAlt: "The Isle Hacks",
					galleryTitle: "The Isle Hacks",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "सहायता ईमेल",
					ctaSecondary: "गोपनीयता पढ़ें",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "डिजिटल डिलीवरी",
							paragraphs: [
								"The Isle Hacks The Isle के लिए Windows PC पर ESP wallhack, radar hack और Isle Aimbot undetected पैकेज देता है। संपर्क ईमेल, Zadeyo ऑर्डर संदर्भ और बुनियादी साइट सुरक्षा डेटा।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "रिफंड स्वीकृति",
							paragraphs: [
								"The Isle Hacks The Isle के लिए Windows PC पर ESP wallhack, radar hack और Isle Aimbot undetected पैकेज देता है। सहायता प्रतिक्रिया, ऑर्डर समाधान और आवश्यकता पर कानूनी अनुपालन।",
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
							],
						},
						{
							h2: "कैसे अनुरोध करें",
							paragraphs: [
								"सहायता: support@theislehack.org",
								"ईमेल: support@theislehack.org",
							],
						},
					],
				},
				terms: {
					title: "उपयोग की शर्तें | The Isle Hacks",
					description: "उपयोग की शर्तें The Isle Hacks — ESP wallhack, Aimbot के लिए, Windows PC.",
					h1: "उपयोग की शर्तें",
					intro: "The Isle Hacks The Isle के लिए Windows PC पर ESP wallhack, radar hack और Isle Aimbot undetected पैकेज देता है। उपयोग की शर्तें theislehack.org और The Isle लाइसेंस के लिए।",
					imageAlt: "The Isle Hacks",
					galleryTitle: "The Isle Hacks",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "सहायता ईमेल",
					ctaSecondary: "गोपनीयता पढ़ें",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "शर्तों की स्वीकृति",
							paragraphs: [
								"The Isle Hacks The Isle के लिए Windows PC पर ESP wallhack, radar hack और Isle Aimbot undetected पैकेज देता है। संपर्क ईमेल, Zadeyo ऑर्डर संदर्भ और बुनियादी साइट सुरक्षा डेटा।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "जोखिम अस्वीकरण",
							paragraphs: [
								"The Isle Hacks The Isle के लिए Windows PC पर ESP wallhack, radar hack और Isle Aimbot undetected पैकेज देता है। सहायता प्रतिक्रिया, ऑर्डर समाधान और आवश्यकता पर कानूनी अनुपालन।",
								"cheat का उपयोग The Isle टीम की शर्तों का उल्लंघन हो सकता है — आप सभी ban जोखिम स्वीकार करते हैं।",
							],
						},
						{
							h2: "नीति परिवर्तन",
							paragraphs: [
								"सहायता: support@theislehack.org",
								"ईमेल: support@theislehack.org",
							],
						},
					],
				},
			},
		},
		id: {
			ui: {
				nav: {
					home: "Beranda",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Fitur",
					pricing: "Harga",
					setup: "Setup",
					updates: "Pembaruan",
					faq: "FAQ",
					buyNow: "Beli sekarang",
				},
				hero: {
					accent: "Cheat The Isle undetected",
					accentShort: "The Isle Hacks",
					subtitle: "ESP wallhack, radar hack, dan Aimbot untuk The Isle di PC Windows — pemeliharaan Easy Anti-Cheat termasuk.",
					subtitleShort: "ESP, radar & Aimbot untuk The Isle PC",
					buyNow: "Beli sekarang",
					seeFeatures: "Lihat fitur",
				},
				trust: {
					status: "Online",
					statusNote: "Paket The Isle Hacks aktif untuk The Isle di PC Windows.",
					statusShort: "Aktif",
					delivery: "Pengiriman digital instan",
					platform: "Windows 10 & 11",
					antiCheat: "Pemeliharaan Easy Anti-Cheat didukung",
					antiCheatShort: "Easy Anti-Cheat didukung",
				},
				product: {
					title: "The Isle Hacks",
					addToCart: "Tambah ke keranjang",
					monthly: "Bulanan",
					lifetime: "Seumur hidup",
					available: "Tersedia sekarang",
					gameBadge: "The Isle",
					platformBadge: "Windows PC",
					statusBadge: "Paket undetected",
				},
				reviews: {
					title: "Apa kata pemain",
					subtitle: "Umpan balik terbaru dari pembeli The Isle Hacks",
					outOf: "dari 5",
					countLabel: "ulasan",
				},
				common: {
					buyNow: "Beli sekarang",
					readGuide: "Baca panduan",
					language: "Bahasa",
					officialLanguageNote: "Bahasa Inggris adalah bahasa resmi. Bahasa lain diterjemahkan untuk SEO global.",
					relatedPages: "Halaman terkait",
				},
				footer: {
					explore: "Jelajahi",
					help: "Bantuan & legal",
					tagline: "ESP, wallhack, radar, dan Aimbot undetected untuk The Isle — checkout via Zadeyo.",
				},
				images: {
					hero: "The Isle Hacks hero — ESP and aimbot overlay in The Isle",
					espWallhack: "Wallhack outlines showing players and wild dinosaurs through walls",
					aimbotCombat: "Soft aim assist overlay during a The Isle session",
					packFight: "The Isle Hacks combat overlay during a pack fight",
					dinoEsp: "Player ESP boxes and distance readouts in a The Isle session",
					headerArt: "Aimbot view and bone priority controls for The Isle",
					hacksPackage: "2D radar threat overlay for The Isle",
					ambushFight: "Aimbot assist during a The Isle hunt",
					battleRoyale: "The Isle Hacks in-session overview for Windows PC",
					survivalIsland: "ESP markers for carcasses and nests in The Isle",
				},
			},
			pages: {
				home: {
					title: "The Isle Hacks 2026 | ESP, Wallhack & Aimbot",
					description: "Cheat The Isle undetected untuk The Isle di PC. ESP wallhack, radar hack, Aimbot, pemeliharaan Easy Anti-Cheat. Pengiriman digital instan.",
					h1: "The Isle Hacks — Undetected ESP, Wallhack & Aimbot",
					intro: "Paket undetected The Isle di Windows PC: ESP wallhack, radar, Aimbot dengan pemeliharaan Easy Anti-Cheat.",
					imageAlt: "Isle ESP player tags hack",
					galleryTitle: "Galeri The Isle Hacks — ESP, Aimbot, wallhack",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "Beli The Isle Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Mengapa The Isle Hacks di 2026",
							paragraphs: [
								"The Isle Hacks menyediakan ESP wallhack, radar hack, dan Isle Aimbot undetected untuk The Isle di PC Windows. Ideal membaca pack musuh di BR dan growth run.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot dalam satu lisensi",
							paragraphs: [
								"The Isle Hacks menyediakan ESP wallhack, radar hack, dan Isle Aimbot undetected untuk The Isle di PC Windows. Satu lisensi alih-alih alat terpisah.",
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
							],
						},
					],
				},
				"isle-esp": {
					title: "ESP The Isle | Player Boxes & Wallhack",
					description: "ESP The Isle: kotak pemain, penanda bangkai, dan overlay wallhack. pengiriman digital instan. undetected — PC Windows.",
					h1: "ESP The Isle",
					intro: "The Isle Hacks menyediakan ESP wallhack, radar hack, dan Isle Aimbot undetected untuk The Isle di PC Windows. ESP The Isle.",
					imageAlt: "Isle ESP player boxes and distance readouts in a session",
					galleryTitle: "ESP The Isle",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "Beli The Isle Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "ESP The Isle",
							paragraphs: [
								"The Isle Hacks menyediakan ESP wallhack, radar hack, dan Isle Aimbot undetected untuk The Isle di PC Windows. kotak pemain, penanda bangkai, dan overlay wallhack.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@theislehack.org untuk dukungan dan legal.",
							],
						},
					],
				},
				"isle-aimbot": {
					title: "Aimbot The Isle | Soft Aim Controls",
					description: "Aimbot The Isle: soft aim, FOV, dan profil Aimbot per spesies. pengiriman digital instan. undetected — PC Windows.",
					h1: "Aimbot The Isle",
					intro: "The Isle Hacks menyediakan ESP wallhack, radar hack, dan Isle Aimbot undetected untuk The Isle di PC Windows. Aimbot The Isle.",
					imageAlt: "Isle Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot The Isle",
					heroImage: "/images/isle-hacks-aimbot.webp",
					ctaPrimary: "Beli The Isle Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "Aimbot The Isle",
							paragraphs: [
								"The Isle Hacks menyediakan ESP wallhack, radar hack, dan Isle Aimbot undetected untuk The Isle di PC Windows. soft aim, FOV, dan profil Aimbot per spesies.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@theislehack.org untuk dukungan dan legal.",
							],
						},
					],
				},
				features: {
					title: "Fitur | Full Feature List",
					description: "Fitur: ESP, soft aim, kontrol radar. pengiriman digital instan. undetected — PC Windows.",
					h1: "Fitur",
					intro: "The Isle Hacks menyediakan ESP wallhack, radar hack, dan Isle Aimbot undetected untuk The Isle di PC Windows. Fitur.",
					imageAlt: "The Isle Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Fitur",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "Beli The Isle Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Fitur",
							paragraphs: [
								"The Isle Hacks menyediakan ESP wallhack, radar hack, dan Isle Aimbot undetected untuk The Isle di PC Windows. ESP, soft aim, kontrol radar.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@theislehack.org untuk dukungan dan legal.",
							],
						},
					],
				},
				pricing: {
					title: "Harga | Monthly & Lifetime",
					description: "Harga: lisensi $35 bulanan atau $150 lifetime. pengiriman digital instan. undetected — PC Windows.",
					h1: "Harga",
					intro: "The Isle Hacks menyediakan ESP wallhack, radar hack, dan Isle Aimbot undetected untuk The Isle di PC Windows. Harga.",
					imageAlt: "The Isle Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Harga",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "Beli The Isle Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Harga",
							paragraphs: [
								"The Isle Hacks menyediakan ESP wallhack, radar hack, dan Isle Aimbot undetected untuk The Isle di PC Windows. lisensi $35 bulanan atau $150 lifetime.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@theislehack.org untuk dukungan dan legal.",
							],
						},
					],
				},
				setup: {
					title: "Setup | PC Setup Guide",
					description: "Setup: aktivasi Windows PC dan setup peluncuran pertama. pengiriman digital instan. undetected — PC Windows.",
					h1: "Setup",
					intro: "The Isle Hacks menyediakan ESP wallhack, radar hack, dan Isle Aimbot undetected untuk The Isle di PC Windows. Setup.",
					imageAlt: "The Isle Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Setup",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "Beli The Isle Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Setup",
							paragraphs: [
								"The Isle Hacks menyediakan ESP wallhack, radar hack, dan Isle Aimbot undetected untuk The Isle di PC Windows. aktivasi Windows PC dan setup peluncuran pertama.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@theislehack.org untuk dukungan dan legal.",
							],
						},
					],
				},
				updates: {
					title: "Pembaruan | Easy Anti-Cheat Maintenance Log",
					description: "Pembaruan: status patch Easy Anti-Cheat dan catatan rebuild. pengiriman digital instan. undetected — PC Windows.",
					h1: "Pembaruan",
					intro: "The Isle Hacks menyediakan ESP wallhack, radar hack, dan Isle Aimbot undetected untuk The Isle di PC Windows. Pembaruan.",
					imageAlt: "The Isle Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Pembaruan",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "Beli The Isle Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "Pembaruan",
							paragraphs: [
								"The Isle Hacks menyediakan ESP wallhack, radar hack, dan Isle Aimbot undetected untuk The Isle di PC Windows. status patch Easy Anti-Cheat dan catatan rebuild.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@theislehack.org untuk dukungan dan legal.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: pertanyaan ESP, soft aim, pengiriman, dan Easy Anti-Cheat. pengiriman digital instan. undetected — PC Windows.",
					h1: "FAQ",
					intro: "The Isle Hacks menyediakan ESP wallhack, radar hack, dan Isle Aimbot undetected untuk The Isle di PC Windows. FAQ.",
					imageAlt: "The Isle Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "Beli The Isle Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"The Isle Hacks menyediakan ESP wallhack, radar hack, dan Isle Aimbot undetected untuk The Isle di PC Windows. pertanyaan ESP, soft aim, pengiriman, dan Easy Anti-Cheat.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@theislehack.org untuk dukungan dan legal.",
							],
						},
					],
				},
				support: {
					title: "Dukungan | Help & Contact",
					description: "Dukungan: bantuan pesanan dan kontak dukungan lisensi. pengiriman digital instan. undetected — PC Windows.",
					h1: "Dukungan",
					intro: "The Isle Hacks menyediakan ESP wallhack, radar hack, dan Isle Aimbot undetected untuk The Isle di PC Windows. Dukungan.",
					imageAlt: "The Isle Hacks support page for license and setup help",
					galleryTitle: "Dukungan",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "Beli The Isle Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Dukungan",
							paragraphs: [
								"The Isle Hacks menyediakan ESP wallhack, radar hack, dan Isle Aimbot undetected untuk The Isle di PC Windows. bantuan pesanan dan kontak dukungan lisensi.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@theislehack.org untuk dukungan dan legal.",
							],
						},
					],
				},
				undetected: {
					title: "Cheat undetected | Easy Anti-Cheat Safe Status",
					description: "Cheat undetected: pemeliharaan undetected setelah patch Easy Anti-Cheat. pengiriman digital instan. undetected — PC Windows.",
					h1: "Cheat undetected",
					intro: "The Isle Hacks menyediakan ESP wallhack, radar hack, dan Isle Aimbot undetected untuk The Isle di PC Windows. Cheat undetected.",
					imageAlt: "The Isle Hacks undetected status overview for Windows PC",
					galleryTitle: "Cheat undetected",
					heroImage: "/images/isle-hacks-wallhack.webp",
					ctaPrimary: "Beli The Isle Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "Cheat undetected",
							paragraphs: [
								"The Isle Hacks menyediakan ESP wallhack, radar hack, dan Isle Aimbot undetected untuk The Isle di PC Windows. pemeliharaan undetected setelah patch Easy Anti-Cheat.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@theislehack.org untuk dukungan dan legal.",
							],
						},
					],
				},
				wallhack: {
					title: "The Isle Wallhack | ESP Visibility",
					description: "The Isle Wallhack: wallhack ESP untuk pemain, bangkai, dan jarak. pengiriman digital instan. undetected — PC Windows.",
					h1: "The Isle Wallhack",
					intro: "The Isle Hacks menyediakan ESP wallhack, radar hack, dan Isle Aimbot undetected untuk The Isle di PC Windows. The Isle Wallhack.",
					imageAlt: "isle wallhack visibility through walls in a session",
					galleryTitle: "The Isle Wallhack",
					heroImage: "/images/isle-hacks-wallhack.webp",
					ctaPrimary: "Beli The Isle Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "The Isle Wallhack",
							paragraphs: [
								"The Isle Hacks menyediakan ESP wallhack, radar hack, dan Isle Aimbot undetected untuk The Isle di PC Windows. wallhack ESP untuk pemain, bangkai, dan jarak.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@theislehack.org untuk dukungan dan legal.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: petunjuk radar 2D untuk flanking dan rotasi. pengiriman digital instan. undetected — PC Windows.",
					h1: "Radar hack",
					intro: "The Isle Hacks menyediakan ESP wallhack, radar hack, dan Isle Aimbot undetected untuk The Isle di PC Windows. Radar hack.",
					imageAlt: "The Isle 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "Beli The Isle Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"The Isle Hacks menyediakan ESP wallhack, radar hack, dan Isle Aimbot undetected untuk The Isle di PC Windows. petunjuk radar 2D untuk flanking dan rotasi.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@theislehack.org untuk dukungan dan legal.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Patch Maintenance",
					description: "Bypass Easy Anti-Cheat: cara pembaruan Easy Anti-Cheat ditangani untuk The Isle hacks. pengiriman digital instan. undetected — PC Windows.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "The Isle Hacks menyediakan ESP wallhack, radar hack, dan Isle Aimbot undetected untuk The Isle di PC Windows. Bypass Easy Anti-Cheat.",
					imageAlt: "The Isle Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/isle-hacks-aimbot.webp",
					ctaPrimary: "Beli The Isle Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"The Isle Hacks menyediakan ESP wallhack, radar hack, dan Isle Aimbot undetected untuk The Isle di PC Windows. cara pembaruan Easy Anti-Cheat ditangani untuk The Isle hacks.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@theislehack.org untuk dukungan dan legal.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheat The Isle 2026 | Buyer Guide",
					description: "Cheat The Isle 2026: checklist the isle hacks 2026 sebelum checkout. pengiriman digital instan. undetected — PC Windows.",
					h1: "Cheat The Isle 2026",
					intro: "The Isle Hacks menyediakan ESP wallhack, radar hack, dan Isle Aimbot undetected untuk The Isle di PC Windows. Cheat The Isle 2026.",
					imageAlt: "The Isle Hacks product overview for The Isle",
					galleryTitle: "Cheat The Isle 2026",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "Beli The Isle Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "Cheat The Isle 2026",
							paragraphs: [
								"The Isle Hacks menyediakan ESP wallhack, radar hack, dan Isle Aimbot undetected untuk The Isle di PC Windows. checklist the isle hacks 2026 sebelum checkout.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@theislehack.org untuk dukungan dan legal.",
							],
						},
					],
				},
				hacks: {
					title: "Cheat The Isle | ESP Aimbot Guide",
					description: "Cheat The Isle: pilar The Isle Hacks untuk ESP dan Aimbot. pengiriman digital instan. undetected — PC Windows.",
					h1: "Cheat The Isle",
					intro: "The Isle Hacks menyediakan ESP wallhack, radar hack, dan Isle Aimbot undetected untuk The Isle di PC Windows. Cheat The Isle.",
					imageAlt: "The Isle Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Cheat The Isle",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "Beli The Isle Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheat The Isle",
							paragraphs: [
								"The Isle Hacks menyediakan ESP wallhack, radar hack, dan Isle Aimbot undetected untuk The Isle di PC Windows. pilar The Isle Hacks untuk ESP dan Aimbot.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@theislehack.org untuk dukungan dan legal.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Download Cheat The Isle | Instant Access",
					description: "Download Cheat The Isle: unduhan lisensi digital setelah pembayaran. pengiriman digital instan. undetected — PC Windows.",
					h1: "Download Cheat The Isle",
					intro: "The Isle Hacks menyediakan ESP wallhack, radar hack, dan Isle Aimbot undetected untuk The Isle di PC Windows. Download Cheat The Isle.",
					imageAlt: "The Isle Hacks download and install delivery flow",
					galleryTitle: "Download Cheat The Isle",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "Beli The Isle Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Download Cheat The Isle",
							paragraphs: [
								"The Isle Hacks menyediakan ESP wallhack, radar hack, dan Isle Aimbot undetected untuk The Isle di PC Windows. unduhan lisensi digital setelah pembayaran.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@theislehack.org untuk dukungan dan legal.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Menu mod The Isle | In-Game Toggles",
					description: "Menu mod The Isle: toggle ESP dan soft aim in-client. pengiriman digital instan. undetected — PC Windows.",
					h1: "Menu mod The Isle",
					intro: "The Isle Hacks menyediakan ESP wallhack, radar hack, dan Isle Aimbot undetected untuk The Isle di PC Windows. Menu mod The Isle.",
					imageAlt: "The Isle Hacks in-game menu controls",
					galleryTitle: "Menu mod The Isle",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "Beli The Isle Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menu mod The Isle",
							paragraphs: [
								"The Isle Hacks menyediakan ESP wallhack, radar hack, dan Isle Aimbot undetected untuk The Isle di PC Windows. toggle ESP dan soft aim in-client.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@theislehack.org untuk dukungan dan legal.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim The Isle | Smooth Aim Settings",
					description: "Soft aim The Isle: pengaturan soft aim halus untuk Windows PC. pengiriman digital instan. undetected — PC Windows.",
					h1: "Soft aim The Isle",
					intro: "The Isle Hacks menyediakan ESP wallhack, radar hack, dan Isle Aimbot undetected untuk The Isle di PC Windows. Soft aim The Isle.",
					imageAlt: "The Isle soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim The Isle",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "Beli The Isle Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/isle-aimbot/",
					sections: [
						{
							h2: "Soft aim The Isle",
							paragraphs: [
								"The Isle Hacks menyediakan ESP wallhack, radar hack, dan Isle Aimbot undetected untuk The Isle di PC Windows. pengaturan soft aim halus untuk Windows PC.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@theislehack.org untuk dukungan dan legal.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Cheat The Isle terbaik | Buyer Checklist",
					description: "Cheat The Isle terbaik: apa yang dibandingkan sebelum membeli the isle hacks. pengiriman digital instan. undetected — PC Windows.",
					h1: "Cheat The Isle terbaik",
					intro: "The Isle Hacks menyediakan ESP wallhack, radar hack, dan Isle Aimbot undetected untuk The Isle di PC Windows. Cheat The Isle terbaik.",
					imageAlt: "The Isle Hacks overview for The Isle on PC",
					galleryTitle: "Cheat The Isle terbaik",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "Beli The Isle Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Cheat The Isle terbaik",
							paragraphs: [
								"The Isle Hacks menyediakan ESP wallhack, radar hack, dan Isle Aimbot undetected untuk The Isle di PC Windows. apa yang dibandingkan sebelum membeli the isle hacks.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@theislehack.org untuk dukungan dan legal.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot The Isle | Soft Aim Assist",
					description: "Hack aimbot The Isle: assist hack Aimbot undetected untuk The Isle. pengiriman digital instan. undetected — PC Windows.",
					h1: "Hack aimbot The Isle",
					intro: "The Isle Hacks menyediakan ESP wallhack, radar hack, dan Isle Aimbot undetected untuk The Isle di PC Windows. Hack aimbot The Isle.",
					imageAlt: "Isle Aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot The Isle",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "Beli The Isle Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/isle-aimbot/",
					sections: [
						{
							h2: "Hack aimbot The Isle",
							paragraphs: [
								"The Isle Hacks menyediakan ESP wallhack, radar hack, dan Isle Aimbot undetected untuk The Isle di PC Windows. assist hack Aimbot undetected untuk The Isle.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@theislehack.org untuk dukungan dan legal.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP The Isle | Boxes & Loot",
					description: "Hack ESP The Isle: kotak ESP hack, pin bangkai, dan jarak. pengiriman digital instan. undetected — PC Windows.",
					h1: "Hack ESP The Isle",
					intro: "The Isle Hacks menyediakan ESP wallhack, radar hack, dan Isle Aimbot undetected untuk The Isle di PC Windows. Hack ESP The Isle.",
					imageAlt: "Isle ESP hack boxes and carcass markers",
					galleryTitle: "Hack ESP The Isle",
					heroImage: "/images/isle-hacks-wallhack.webp",
					ctaPrimary: "Beli The Isle Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "Hack ESP The Isle",
							paragraphs: [
								"The Isle Hacks menyediakan ESP wallhack, radar hack, dan Isle Aimbot undetected untuk The Isle di PC Windows. kotak ESP hack, pin bangkai, dan jarak.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@theislehack.org untuk dukungan dan legal.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all The Isle | What It Means",
					description: "Unlock all The Isle: pencarian unlock-all vs alat ESP dan Aimbot asli. pengiriman digital instan. undetected — PC Windows.",
					h1: "Unlock all The Isle",
					intro: "The Isle Hacks menyediakan ESP wallhack, radar hack, dan Isle Aimbot undetected untuk The Isle di PC Windows. Unlock all The Isle.",
					imageAlt: "The Isle Hacks license features overview",
					galleryTitle: "Unlock all The Isle",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "Beli The Isle Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all The Isle",
							paragraphs: [
								"The Isle Hacks menyediakan ESP wallhack, radar hack, dan Isle Aimbot undetected untuk The Isle di PC Windows. pencarian unlock-all vs alat ESP dan Aimbot asli.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@theislehack.org untuk dukungan dan legal.",
							],
						},
					],
				},
				privacy: {
					title: "Kebijakan privasi | The Isle Hacks",
					description: "Kebijakan privasi untuk The Isle Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Kebijakan privasi",
					intro: "The Isle Hacks menyediakan ESP wallhack, radar hack, dan Isle Aimbot undetected untuk The Isle di PC Windows. Kebijakan privasi untuk theislehack.org dan lisensi The Isle.",
					imageAlt: "The Isle Hacks",
					galleryTitle: "The Isle Hacks",
					heroImage: "/images/isle-hacks-aimbot.webp",
					ctaPrimary: "Email dukungan",
					ctaSecondary: "Baca syarat",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Informasi yang kami kumpulkan",
							paragraphs: [
								"The Isle Hacks menyediakan ESP wallhack, radar hack, dan Isle Aimbot undetected untuk The Isle di PC Windows. Email kontak, referensi pesanan Zadeyo, dan data keamanan situs dasar.",
								"Detail pembayaran diproses oleh checkout Zadeyo — tidak disimpan di theislehack.org.",
							],
						},
						{
							h2: "Cara kami menggunakan data",
							paragraphs: [
								"The Isle Hacks menyediakan ESP wallhack, radar hack, dan Isle Aimbot undetected untuk The Isle di PC Windows. Respons dukungan, penyelesaian pesanan, dan kepatuhan hukum jika diperlukan.",
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
							],
						},
						{
							h2: "Hak Anda",
							paragraphs: [
								"support@theislehack.org untuk dukungan dan legal.",
								"Email: support@theislehack.org",
							],
						},
					],
				},
				refund: {
					title: "Kebijakan refund | The Isle Hacks",
					description: "Kebijakan refund untuk The Isle Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Kebijakan refund",
					intro: "The Isle Hacks menyediakan ESP wallhack, radar hack, dan Isle Aimbot undetected untuk The Isle di PC Windows. Kebijakan refund untuk theislehack.org dan lisensi The Isle.",
					imageAlt: "The Isle Hacks",
					galleryTitle: "The Isle Hacks",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "Email dukungan",
					ctaSecondary: "Baca privasi",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Pengiriman digital",
							paragraphs: [
								"The Isle Hacks menyediakan ESP wallhack, radar hack, dan Isle Aimbot undetected untuk The Isle di PC Windows. Email kontak, referensi pesanan Zadeyo, dan data keamanan situs dasar.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "Persetujuan refund",
							paragraphs: [
								"The Isle Hacks menyediakan ESP wallhack, radar hack, dan Isle Aimbot undetected untuk The Isle di PC Windows. Respons dukungan, penyelesaian pesanan, dan kepatuhan hukum jika diperlukan.",
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
							],
						},
						{
							h2: "Cara meminta",
							paragraphs: [
								"support@theislehack.org untuk dukungan dan legal.",
								"Email: support@theislehack.org",
							],
						},
					],
				},
				terms: {
					title: "Syarat penggunaan | The Isle Hacks",
					description: "Syarat penggunaan untuk The Isle Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Syarat penggunaan",
					intro: "The Isle Hacks menyediakan ESP wallhack, radar hack, dan Isle Aimbot undetected untuk The Isle di PC Windows. Syarat penggunaan untuk theislehack.org dan lisensi The Isle.",
					imageAlt: "The Isle Hacks",
					galleryTitle: "The Isle Hacks",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "Email dukungan",
					ctaSecondary: "Baca privasi",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Penerimaan syarat",
							paragraphs: [
								"The Isle Hacks menyediakan ESP wallhack, radar hack, dan Isle Aimbot undetected untuk The Isle di PC Windows. Email kontak, referensi pesanan Zadeyo, dan data keamanan situs dasar.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "Penyangkalan risiko",
							paragraphs: [
								"The Isle Hacks menyediakan ESP wallhack, radar hack, dan Isle Aimbot undetected untuk The Isle di PC Windows. Respons dukungan, penyelesaian pesanan, dan kepatuhan hukum jika diperlukan.",
								"Menggunakan cheat dapat melanggar ketentuan tim The Isle — Anda menanggung semua risiko ban.",
							],
						},
						{
							h2: "Perubahan kebijakan",
							paragraphs: [
								"support@theislehack.org untuk dukungan dan legal.",
								"Email: support@theislehack.org",
							],
						},
					],
				},
			},
		},
		th: {
			ui: {
				nav: {
					home: "หน้าแรก",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "ฟีเจอร์",
					pricing: "ราคา",
					setup: "ติดตั้ง",
					updates: "อัปเดต",
					faq: "FAQ",
					buyNow: "ซื้อเลย",
				},
				hero: {
					accent: "the isle hacks ไม่ถูกตรวจจับ",
					accentShort: "The Isle Hacks",
					subtitle: "ESP wallhack, radar hack และ Aimbot สำหรับ The Isle บน Windows PC — รวมการดูแล Easy Anti-Cheat",
					subtitleShort: "ESP, radar และ Aimbot สำหรับ The Isle PC",
					buyNow: "ซื้อเลย",
					seeFeatures: "ดูฟีเจอร์",
				},
				trust: {
					status: "ออนไลน์",
					statusNote: "แพ็กเกจ The Isle Hacks พร้อมใช้งานสำหรับ The Isle บน Windows PC",
					statusShort: "ใช้งาน",
					delivery: "จัดส่งดิจิทัลทันที",
					platform: "Windows 10 และ 11",
					antiCheat: "รองรับการดูแล Easy Anti-Cheat",
					antiCheatShort: "Easy Anti-Cheat รองรับ",
				},
				product: {
					title: "The Isle Hacks",
					addToCart: "เพิ่มในตะกร้า",
					monthly: "รายเดือน",
					lifetime: "ตลอดชีพ",
					available: "พร้อมใช้งาน",
					gameBadge: "The Isle",
					platformBadge: "Windows PC",
					statusBadge: "แพ็กเกจ undetected",
				},
				reviews: {
					title: "ผู้เล่นพูดว่าอย่างไร",
					subtitle: "ความคิดเห็นล่าสุดจากผู้ซื้อ The Isle Hacks",
					outOf: "จาก 5",
					countLabel: "รีวิว",
				},
				common: {
					buyNow: "ซื้อเลย",
					readGuide: "อ่านคู่มือ",
					language: "ภาษา",
					officialLanguageNote: "ภาษาอังกฤษเป็นภาษาทางการ ภาษาอื่นแปลเพื่อ SEO ระดับโลก",
					relatedPages: "หน้าที่เกี่ยวข้อง",
				},
				footer: {
					explore: "สำรวจ",
					help: "ช่วยเหลือและกฎหมาย",
					tagline: "ESP, wallhack, radar และ Aimbot ไม่ถูกตรวจจับสำหรับ The Isle — ชำระผ่าน Zadeyo",
				},
				images: {
					hero: "The Isle Hacks hero — ESP and aimbot overlay in The Isle",
					espWallhack: "Wallhack outlines showing players and wild dinosaurs through walls",
					aimbotCombat: "Soft aim assist overlay during a The Isle session",
					packFight: "The Isle Hacks combat overlay during a pack fight",
					dinoEsp: "Player ESP boxes and distance readouts in a The Isle session",
					headerArt: "Aimbot view and bone priority controls for The Isle",
					hacksPackage: "2D radar threat overlay for The Isle",
					ambushFight: "Aimbot assist during a The Isle hunt",
					battleRoyale: "The Isle Hacks in-session overview for Windows PC",
					survivalIsland: "ESP markers for carcasses and nests in The Isle",
				},
			},
			pages: {
				home: {
					title: "The Isle Hacks 2026 | ESP, Wallhack และ Aimbot",
					description: "Cheat The Isle undetected สำหรับ The Isle บน PC. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat maintenance. จัดส่งดิจิทัลทันที.",
					h1: "The Isle Hacks — Undetected ESP, Wallhack และ Aimbot",
					intro: "แพ็ก undetected สำหรับ The Isle บน Windows PC: ESP wallhack, radar, Aimbot พร้อม Easy Anti-Cheat maintenance",
					imageAlt: "Isle ESP player tags hack",
					galleryTitle: "แกลเลอรี The Isle Hacks — ESP, Aimbot, wallhack",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "ซื้อ The Isle Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "ทำไมเลือก The Isle Hacks ปี 2026",
							paragraphs: [
								"The Isle Hacks รวม ESP wallhack, radar hack และ Isle Aimbot แบบ undetected สำหรับ The Isle บน Windows PC เหมาะสำหรับอ่าน pack ศัตรูใน BR และ growth run",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot ในใบอนุญาตเดียว",
							paragraphs: [
								"The Isle Hacks รวม ESP wallhack, radar hack และ Isle Aimbot แบบ undetected สำหรับ The Isle บน Windows PC ใบอนุญาตเดียวแทนเครื่องมือแยก",
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
							],
						},
					],
				},
				"isle-esp": {
					title: "Isle ESP | Player Boxes & Wallhack",
					description: "Isle ESP: กล่องผู้เล่น มาร์กเกอร์ซาก และ overlay wallhack. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Isle ESP",
					intro: "The Isle Hacks รวม ESP wallhack, radar hack และ Isle Aimbot แบบ undetected สำหรับ The Isle บน Windows PC Isle ESP.",
					imageAlt: "Isle ESP player boxes and distance readouts in a session",
					galleryTitle: "Isle ESP",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "ซื้อ The Isle Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "Isle ESP",
							paragraphs: [
								"The Isle Hacks รวม ESP wallhack, radar hack และ Isle Aimbot แบบ undetected สำหรับ The Isle บน Windows PC กล่องผู้เล่น มาร์กเกอร์ซาก และ overlay wallhack.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@theislehack.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				"isle-aimbot": {
					title: "Isle Aimbot | Soft Aim Controls",
					description: "Isle Aimbot: soft aim, FOV และโปรไฟล์ Aimbot ตามสายพันธุ์. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Isle Aimbot",
					intro: "The Isle Hacks รวม ESP wallhack, radar hack และ Isle Aimbot แบบ undetected สำหรับ The Isle บน Windows PC Isle Aimbot.",
					imageAlt: "Isle Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Isle Aimbot",
					heroImage: "/images/isle-hacks-aimbot.webp",
					ctaPrimary: "ซื้อ The Isle Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "Isle Aimbot",
							paragraphs: [
								"The Isle Hacks รวม ESP wallhack, radar hack และ Isle Aimbot แบบ undetected สำหรับ The Isle บน Windows PC soft aim, FOV และโปรไฟล์ Aimbot ตามสายพันธุ์.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@theislehack.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				features: {
					title: "ฟีเจอร์ | Full Feature List",
					description: "ฟีเจอร์: ESP, soft aim, การควบคุม radar. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "ฟีเจอร์",
					intro: "The Isle Hacks รวม ESP wallhack, radar hack และ Isle Aimbot แบบ undetected สำหรับ The Isle บน Windows PC ฟีเจอร์.",
					imageAlt: "The Isle Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "ฟีเจอร์",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "ซื้อ The Isle Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "ฟีเจอร์",
							paragraphs: [
								"The Isle Hacks รวม ESP wallhack, radar hack และ Isle Aimbot แบบ undetected สำหรับ The Isle บน Windows PC ESP, soft aim, การควบคุม radar.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@theislehack.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				pricing: {
					title: "ราคา | Monthly & Lifetime",
					description: "ราคา: ใบอนุญาต $35 รายเดือนหรือ $150 lifetime. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "ราคา",
					intro: "The Isle Hacks รวม ESP wallhack, radar hack และ Isle Aimbot แบบ undetected สำหรับ The Isle บน Windows PC ราคา.",
					imageAlt: "The Isle Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "ราคา",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "ซื้อ The Isle Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "ราคา",
							paragraphs: [
								"The Isle Hacks รวม ESP wallhack, radar hack และ Isle Aimbot แบบ undetected สำหรับ The Isle บน Windows PC ใบอนุญาต $35 รายเดือนหรือ $150 lifetime.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@theislehack.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				setup: {
					title: "ติดตั้ง | PC Setup Guide",
					description: "ติดตั้ง: การเปิดใช้งาน Windows PC และการตั้งค่าเปิดครั้งแรก. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "ติดตั้ง",
					intro: "The Isle Hacks รวม ESP wallhack, radar hack และ Isle Aimbot แบบ undetected สำหรับ The Isle บน Windows PC ติดตั้ง.",
					imageAlt: "The Isle Hacks setup guide screenshot for Windows PC",
					galleryTitle: "ติดตั้ง",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "ซื้อ The Isle Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "ติดตั้ง",
							paragraphs: [
								"The Isle Hacks รวม ESP wallhack, radar hack และ Isle Aimbot แบบ undetected สำหรับ The Isle บน Windows PC การเปิดใช้งาน Windows PC และการตั้งค่าเปิดครั้งแรก.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@theislehack.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				updates: {
					title: "อัปเดต | Easy Anti-Cheat Maintenance Log",
					description: "อัปเดต: สถานะ patch Easy Anti-Cheat และบันทึก rebuild. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "อัปเดต",
					intro: "The Isle Hacks รวม ESP wallhack, radar hack และ Isle Aimbot แบบ undetected สำหรับ The Isle บน Windows PC อัปเดต.",
					imageAlt: "The Isle Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle: "อัปเดต",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "ซื้อ The Isle Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "อัปเดต",
							paragraphs: [
								"The Isle Hacks รวม ESP wallhack, radar hack และ Isle Aimbot แบบ undetected สำหรับ The Isle บน Windows PC สถานะ patch Easy Anti-Cheat และบันทึก rebuild.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@theislehack.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: คำถาม ESP, soft aim, การจัดส่ง และ Easy Anti-Cheat. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "FAQ",
					intro: "The Isle Hacks รวม ESP wallhack, radar hack และ Isle Aimbot แบบ undetected สำหรับ The Isle บน Windows PC FAQ.",
					imageAlt: "The Isle Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "ซื้อ The Isle Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"The Isle Hacks รวม ESP wallhack, radar hack และ Isle Aimbot แบบ undetected สำหรับ The Isle บน Windows PC คำถาม ESP, soft aim, การจัดส่ง และ Easy Anti-Cheat.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@theislehack.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				support: {
					title: "สนับสนุน | Help & Contact",
					description: "สนับสนุน: ความช่วยเหลือคำสั่งซื้อและติดต่อสนับสนุนใบอนุญาต. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "สนับสนุน",
					intro: "The Isle Hacks รวม ESP wallhack, radar hack และ Isle Aimbot แบบ undetected สำหรับ The Isle บน Windows PC สนับสนุน.",
					imageAlt: "The Isle Hacks support page for license and setup help",
					galleryTitle: "สนับสนุน",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "ซื้อ The Isle Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "สนับสนุน",
							paragraphs: [
								"The Isle Hacks รวม ESP wallhack, radar hack และ Isle Aimbot แบบ undetected สำหรับ The Isle บน Windows PC ความช่วยเหลือคำสั่งซื้อและติดต่อสนับสนุนใบอนุญาต.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@theislehack.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				undetected: {
					title: "Cheats undetected | Easy Anti-Cheat Safe Status",
					description: "Cheats undetected: การบำรุงรักษา undetected หลัง patch Easy Anti-Cheat. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Cheats undetected",
					intro: "The Isle Hacks รวม ESP wallhack, radar hack และ Isle Aimbot แบบ undetected สำหรับ The Isle บน Windows PC Cheats undetected.",
					imageAlt: "The Isle Hacks undetected status overview for Windows PC",
					galleryTitle: "Cheats undetected",
					heroImage: "/images/isle-hacks-wallhack.webp",
					ctaPrimary: "ซื้อ The Isle Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "Cheats undetected",
							paragraphs: [
								"The Isle Hacks รวม ESP wallhack, radar hack และ Isle Aimbot แบบ undetected สำหรับ The Isle บน Windows PC การบำรุงรักษา undetected หลัง patch Easy Anti-Cheat.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@theislehack.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				wallhack: {
					title: "The Isle Wallhack | ESP Visibility",
					description: "The Isle Wallhack: wallhack ESP สำหรับผู้เล่น ซาก และระยะทาง. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "The Isle Wallhack",
					intro: "The Isle Hacks รวม ESP wallhack, radar hack และ Isle Aimbot แบบ undetected สำหรับ The Isle บน Windows PC The Isle Wallhack.",
					imageAlt: "isle wallhack visibility through walls in a session",
					galleryTitle: "The Isle Wallhack",
					heroImage: "/images/isle-hacks-wallhack.webp",
					ctaPrimary: "ซื้อ The Isle Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "The Isle Wallhack",
							paragraphs: [
								"The Isle Hacks รวม ESP wallhack, radar hack และ Isle Aimbot แบบ undetected สำหรับ The Isle บน Windows PC wallhack ESP สำหรับผู้เล่น ซาก และระยะทาง.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@theislehack.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: สัญญาณ radar 2D สำหรับการโจมตีด้านข้างและการหมุน. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "The Isle Hacks รวม ESP wallhack, radar hack และ Isle Aimbot แบบ undetected สำหรับ The Isle บน Windows PC Radar Hack.",
					imageAlt: "The Isle 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "ซื้อ The Isle Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"The Isle Hacks รวม ESP wallhack, radar hack และ Isle Aimbot แบบ undetected สำหรับ The Isle บน Windows PC สัญญาณ radar 2D สำหรับการโจมตีด้านข้างและการหมุน.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@theislehack.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				eac: {
					title: "Easy Anti-Cheat Bypass | Patch Maintenance",
					description: "Easy Anti-Cheat Bypass: วิธีจัดการอัปเดต Easy Anti-Cheat สำหรับ The Isle hacks. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Easy Anti-Cheat Bypass",
					intro: "The Isle Hacks รวม ESP wallhack, radar hack และ Isle Aimbot แบบ undetected สำหรับ The Isle บน Windows PC Easy Anti-Cheat Bypass.",
					imageAlt: "The Isle Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Easy Anti-Cheat Bypass",
					heroImage: "/images/isle-hacks-aimbot.webp",
					ctaPrimary: "ซื้อ The Isle Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Easy Anti-Cheat Bypass",
							paragraphs: [
								"The Isle Hacks รวม ESP wallhack, radar hack และ Isle Aimbot แบบ undetected สำหรับ The Isle บน Windows PC วิธีจัดการอัปเดต Easy Anti-Cheat สำหรับ The Isle hacks.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@theislehack.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				"cheats-2026": {
					title: "The Isle Hacks 2026 | Buyer Guide",
					description: "The Isle Hacks 2026: checklist the isle hacks 2026 ก่อน checkout. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "The Isle Hacks 2026",
					intro: "The Isle Hacks รวม ESP wallhack, radar hack และ Isle Aimbot แบบ undetected สำหรับ The Isle บน Windows PC The Isle Hacks 2026.",
					imageAlt: "The Isle Hacks product overview for The Isle",
					galleryTitle: "The Isle Hacks 2026",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "ซื้อ The Isle Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "The Isle Hacks 2026",
							paragraphs: [
								"The Isle Hacks รวม ESP wallhack, radar hack และ Isle Aimbot แบบ undetected สำหรับ The Isle บน Windows PC checklist the isle hacks 2026 ก่อน checkout.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@theislehack.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				hacks: {
					title: "The Isle Hacks | ESP Aimbot Guide",
					description: "The Isle Hacks: เสาหลัก The Isle Hacks สำหรับ ESP และ Aimbot. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "The Isle Hacks",
					intro: "The Isle Hacks รวม ESP wallhack, radar hack และ Isle Aimbot แบบ undetected สำหรับ The Isle บน Windows PC The Isle Hacks.",
					imageAlt: "The Isle Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "The Isle Hacks",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "ซื้อ The Isle Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "The Isle Hacks",
							paragraphs: [
								"The Isle Hacks รวม ESP wallhack, radar hack และ Isle Aimbot แบบ undetected สำหรับ The Isle บน Windows PC เสาหลัก The Isle Hacks สำหรับ ESP และ Aimbot.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@theislehack.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				"cheat-download": {
					title: "ดาวน์โหลด The Isle Hacks | Instant Access",
					description: "ดาวน์โหลด The Isle Hacks: ดาวน์โหลดใบอนุญาตดิจิทัลหลังชำระเงิน. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "ดาวน์โหลด The Isle Hacks",
					intro: "The Isle Hacks รวม ESP wallhack, radar hack และ Isle Aimbot แบบ undetected สำหรับ The Isle บน Windows PC ดาวน์โหลด The Isle Hacks.",
					imageAlt: "The Isle Hacks download and install delivery flow",
					galleryTitle: "ดาวน์โหลด The Isle Hacks",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "ซื้อ The Isle Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "ดาวน์โหลด The Isle Hacks",
							paragraphs: [
								"The Isle Hacks รวม ESP wallhack, radar hack และ Isle Aimbot แบบ undetected สำหรับ The Isle บน Windows PC ดาวน์โหลดใบอนุญาตดิจิทัลหลังชำระเงิน.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@theislehack.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				"mod-menu": {
					title: "เมนูมอด The Isle | In-Game Toggles",
					description: "เมนูมอด The Isle: สวิตช์ ESP และ soft aim ในไคลเอนต์. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "เมนูมอด The Isle",
					intro: "The Isle Hacks รวม ESP wallhack, radar hack และ Isle Aimbot แบบ undetected สำหรับ The Isle บน Windows PC เมนูมอด The Isle.",
					imageAlt: "The Isle Hacks in-game menu controls",
					galleryTitle: "เมนูมอด The Isle",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "ซื้อ The Isle Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "เมนูมอด The Isle",
							paragraphs: [
								"The Isle Hacks รวม ESP wallhack, radar hack และ Isle Aimbot แบบ undetected สำหรับ The Isle บน Windows PC สวิตช์ ESP และ soft aim ในไคลเอนต์.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@theislehack.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				"soft-aim": {
					title: "The Isle Soft Aim | Smooth Aim Settings",
					description: "The Isle Soft Aim: การตั้งค่า soft aim ที่ลื่นไหลสำหรับ Windows PC. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "The Isle Soft Aim",
					intro: "The Isle Hacks รวม ESP wallhack, radar hack และ Isle Aimbot แบบ undetected สำหรับ The Isle บน Windows PC The Isle Soft Aim.",
					imageAlt: "The Isle soft aim FOV and smoothness settings",
					galleryTitle: "The Isle Soft Aim",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "ซื้อ The Isle Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/isle-aimbot/",
					sections: [
						{
							h2: "The Isle Soft Aim",
							paragraphs: [
								"The Isle Hacks รวม ESP wallhack, radar hack และ Isle Aimbot แบบ undetected สำหรับ The Isle บน Windows PC การตั้งค่า soft aim ที่ลื่นไหลสำหรับ Windows PC.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@theislehack.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				"best-cheats": {
					title: "Cheat The Isle ที่ดีที่สุด | Buyer Checklist",
					description: "Cheat The Isle ที่ดีที่สุด: สิ่งที่ควรเปรียบเทียบก่อนซื้อ the isle hacks. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Cheat The Isle ที่ดีที่สุด",
					intro: "The Isle Hacks รวม ESP wallhack, radar hack และ Isle Aimbot แบบ undetected สำหรับ The Isle บน Windows PC Cheat The Isle ที่ดีที่สุด.",
					imageAlt: "The Isle Hacks overview for The Isle on PC",
					galleryTitle: "Cheat The Isle ที่ดีที่สุด",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "ซื้อ The Isle Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Cheat The Isle ที่ดีที่สุด",
							paragraphs: [
								"The Isle Hacks รวม ESP wallhack, radar hack และ Isle Aimbot แบบ undetected สำหรับ The Isle บน Windows PC สิ่งที่ควรเปรียบเทียบก่อนซื้อ the isle hacks.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@theislehack.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack Aimbot The Isle | Soft Aim Assist",
					description: "Hack Aimbot The Isle: assist hack Aimbot undetected สำหรับ The Isle. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Hack Aimbot The Isle",
					intro: "The Isle Hacks รวม ESP wallhack, radar hack และ Isle Aimbot แบบ undetected สำหรับ The Isle บน Windows PC Hack Aimbot The Isle.",
					imageAlt: "Isle Aimbot hack controls and bone priority",
					galleryTitle: "Hack Aimbot The Isle",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "ซื้อ The Isle Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/isle-aimbot/",
					sections: [
						{
							h2: "Hack Aimbot The Isle",
							paragraphs: [
								"The Isle Hacks รวม ESP wallhack, radar hack และ Isle Aimbot แบบ undetected สำหรับ The Isle บน Windows PC assist hack Aimbot undetected สำหรับ The Isle.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@theislehack.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP The Isle | Boxes & Loot",
					description: "Hack ESP The Isle: กล่อง ESP hack, pin ซาก และระยะทาง. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Hack ESP The Isle",
					intro: "The Isle Hacks รวม ESP wallhack, radar hack และ Isle Aimbot แบบ undetected สำหรับ The Isle บน Windows PC Hack ESP The Isle.",
					imageAlt: "Isle ESP hack boxes and carcass markers",
					galleryTitle: "Hack ESP The Isle",
					heroImage: "/images/isle-hacks-wallhack.webp",
					ctaPrimary: "ซื้อ The Isle Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "Hack ESP The Isle",
							paragraphs: [
								"The Isle Hacks รวม ESP wallhack, radar hack และ Isle Aimbot แบบ undetected สำหรับ The Isle บน Windows PC กล่อง ESP hack, pin ซาก และระยะทาง.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@theislehack.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				"unlock-all": {
					title: "The Isle Unlock All | What It Means",
					description: "The Isle Unlock All: การค้นหา unlock-all vs เครื่องมือ ESP และ Aimbot จริง. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "The Isle Unlock All",
					intro: "The Isle Hacks รวม ESP wallhack, radar hack และ Isle Aimbot แบบ undetected สำหรับ The Isle บน Windows PC The Isle Unlock All.",
					imageAlt: "The Isle Hacks license features overview",
					galleryTitle: "The Isle Unlock All",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "ซื้อ The Isle Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "The Isle Unlock All",
							paragraphs: [
								"The Isle Hacks รวม ESP wallhack, radar hack และ Isle Aimbot แบบ undetected สำหรับ The Isle บน Windows PC การค้นหา unlock-all vs เครื่องมือ ESP และ Aimbot จริง.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@theislehack.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				privacy: {
					title: "นโยบายความเป็นส่วนตัว | The Isle Hacks",
					description: "นโยบายความเป็นส่วนตัว สำหรับ The Isle Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "นโยบายความเป็นส่วนตัว",
					intro: "The Isle Hacks รวม ESP wallhack, radar hack และ Isle Aimbot แบบ undetected สำหรับ The Isle บน Windows PC นโยบายความเป็นส่วนตัว สำหรับ theislehack.org และใบอนุญาต The Isle",
					imageAlt: "The Isle Hacks",
					galleryTitle: "The Isle Hacks",
					heroImage: "/images/isle-hacks-aimbot.webp",
					ctaPrimary: "อีเมลฝ่ายสนับสนุน",
					ctaSecondary: "อ่านข้อกำหนด",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "ข้อมูลที่เราเก็บ",
							paragraphs: [
								"The Isle Hacks รวม ESP wallhack, radar hack และ Isle Aimbot แบบ undetected สำหรับ The Isle บน Windows PC อีเมลติดต่อ อ้างอิงคำสั่งซื้อ Zadeyo และข้อมูลความปลอดภัยพื้นฐานของเว็บไซต์",
								"รายละเอียดการชำระเงินประมวลผลผ่าน checkout Zadeyo — ไม่เก็บบน theislehack.org",
							],
						},
						{
							h2: "การใช้ข้อมูล",
							paragraphs: [
								"The Isle Hacks รวม ESP wallhack, radar hack และ Isle Aimbot แบบ undetected สำหรับ The Isle บน Windows PC การตอบกลับฝ่ายสนับสนุน การแก้ไขคำสั่งซื้อ และการปฏิบัติตามกฎหมายเมื่อจำเป็น",
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
							],
						},
						{
							h2: "สิทธิของคุณ",
							paragraphs: [
								"support@theislehack.org สำหรับการสนับสนุน",
								"อีเมล: support@theislehack.org",
							],
						},
					],
				},
				refund: {
					title: "นโยบายการคืนเงิน | The Isle Hacks",
					description: "นโยบายการคืนเงิน สำหรับ The Isle Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "นโยบายการคืนเงิน",
					intro: "The Isle Hacks รวม ESP wallhack, radar hack และ Isle Aimbot แบบ undetected สำหรับ The Isle บน Windows PC นโยบายการคืนเงิน สำหรับ theislehack.org และใบอนุญาต The Isle",
					imageAlt: "The Isle Hacks",
					galleryTitle: "The Isle Hacks",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "อีเมลฝ่ายสนับสนุน",
					ctaSecondary: "อ่านนโยบายความเป็นส่วนตัว",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "การจัดส่งดิจิทัล",
							paragraphs: [
								"The Isle Hacks รวม ESP wallhack, radar hack และ Isle Aimbot แบบ undetected สำหรับ The Isle บน Windows PC อีเมลติดต่อ อ้างอิงคำสั่งซื้อ Zadeyo และข้อมูลความปลอดภัยพื้นฐานของเว็บไซต์",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "การอนุมัติคืนเงิน",
							paragraphs: [
								"The Isle Hacks รวม ESP wallhack, radar hack และ Isle Aimbot แบบ undetected สำหรับ The Isle บน Windows PC การตอบกลับฝ่ายสนับสนุน การแก้ไขคำสั่งซื้อ และการปฏิบัติตามกฎหมายเมื่อจำเป็น",
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
							],
						},
						{
							h2: "วิธีขอคืนเงิน",
							paragraphs: [
								"support@theislehack.org สำหรับการสนับสนุน",
								"อีเมล: support@theislehack.org",
							],
						},
					],
				},
				terms: {
					title: "ข้อกำหนดการใช้งาน | The Isle Hacks",
					description: "ข้อกำหนดการใช้งาน สำหรับ The Isle Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "ข้อกำหนดการใช้งาน",
					intro: "The Isle Hacks รวม ESP wallhack, radar hack และ Isle Aimbot แบบ undetected สำหรับ The Isle บน Windows PC ข้อกำหนดการใช้งาน สำหรับ theislehack.org และใบอนุญาต The Isle",
					imageAlt: "The Isle Hacks",
					galleryTitle: "The Isle Hacks",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "อีเมลฝ่ายสนับสนุน",
					ctaSecondary: "อ่านนโยบายความเป็นส่วนตัว",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "การยอมรับข้อกำหนด",
							paragraphs: [
								"The Isle Hacks รวม ESP wallhack, radar hack และ Isle Aimbot แบบ undetected สำหรับ The Isle บน Windows PC อีเมลติดต่อ อ้างอิงคำสั่งซื้อ Zadeyo และข้อมูลความปลอดภัยพื้นฐานของเว็บไซต์",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "ข้อจำกัดความรับผิดชอบด้านความเสี่ยง",
							paragraphs: [
								"The Isle Hacks รวม ESP wallhack, radar hack และ Isle Aimbot แบบ undetected สำหรับ The Isle บน Windows PC การตอบกลับฝ่ายสนับสนุน การแก้ไขคำสั่งซื้อ และการปฏิบัติตามกฎหมายเมื่อจำเป็น",
								"การใช้ cheat อาจละเมิดข้อกำหนดของทีม The Isle — คุณรับความเสี่ยง ban ทั้งหมด",
							],
						},
						{
							h2: "การเปลี่ยนแปลงนโยบาย",
							paragraphs: [
								"support@theislehack.org สำหรับการสนับสนุน",
								"อีเมล: support@theislehack.org",
							],
						},
					],
				},
			},
		},
		vi: {
			ui: {
				nav: {
					home: "Trang chủ",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Tính năng",
					pricing: "Giá",
					setup: "Cài đặt",
					updates: "Cập nhật",
					faq: "FAQ",
					buyNow: "Mua ngay",
				},
				hero: {
					accent: "Cheat The Isle undetected",
					accentShort: "The Isle Hacks",
					subtitle: "ESP wallhack, radar hack và Aimbot cho The Isle trên PC Windows — bảo trì Easy Anti-Cheat bao gồm.",
					subtitleShort: "ESP, radar & Aimbot cho The Isle PC",
					buyNow: "Mua ngay",
					seeFeatures: "Xem tính năng",
				},
				trust: {
					status: "Trực tuyến",
					statusNote: "Gói The Isle Hacks đang hoạt động cho The Isle trên PC Windows.",
					statusShort: "Hoạt động",
					delivery: "Giao hàng kỹ thuật số tức thì",
					platform: "Windows 10 & 11",
					antiCheat: "Hỗ trợ bảo trì Easy Anti-Cheat",
					antiCheatShort: "Hỗ trợ Easy Anti-Cheat",
				},
				product: {
					title: "The Isle Hacks",
					addToCart: "Thêm vào giỏ",
					monthly: "Hàng tháng",
					lifetime: "Trọn đời",
					available: "Có sẵn ngay",
					gameBadge: "The Isle",
					platformBadge: "Windows PC",
					statusBadge: "Gói undetected",
				},
				reviews: {
					title: "Người chơi nói gì",
					subtitle: "Phản hồi gần đây từ người mua The Isle Hacks",
					outOf: "/5",
					countLabel: "đánh giá",
				},
				common: {
					buyNow: "Mua ngay",
					readGuide: "Đọc hướng dẫn",
					language: "Ngôn ngữ",
					officialLanguageNote: "Tiếng Anh là ngôn ngữ chính thức. Các ngôn ngữ khác được dịch cho SEO toàn cầu.",
					relatedPages: "Trang liên quan",
				},
				footer: {
					explore: "Khám phá",
					help: "Trợ giúp & pháp lý",
					tagline: "ESP, wallhack, radar và Aimbot undetected cho The Isle — thanh toán qua Zadeyo.",
				},
				images: {
					hero: "The Isle Hacks hero — ESP and aimbot overlay in The Isle",
					espWallhack: "Wallhack outlines showing players and wild dinosaurs through walls",
					aimbotCombat: "Soft aim assist overlay during a The Isle session",
					packFight: "The Isle Hacks combat overlay during a pack fight",
					dinoEsp: "Player ESP boxes and distance readouts in a The Isle session",
					headerArt: "Aimbot view and bone priority controls for The Isle",
					hacksPackage: "2D radar threat overlay for The Isle",
					ambushFight: "Aimbot assist during a The Isle hunt",
					battleRoyale: "The Isle Hacks in-session overview for Windows PC",
					survivalIsland: "ESP markers for carcasses and nests in The Isle",
				},
			},
			pages: {
				home: {
					title: "The Isle Hacks 2026 | ESP, Wallhack & Aimbot",
					description: "Cheat The Isle undetected cho The Isle trên PC. ESP wallhack, radar hack, Aimbot, bảo trì Easy Anti-Cheat. Giao hàng kỹ thuật số tức thì.",
					h1: "The Isle Hacks — Undetected ESP, Wallhack & Aimbot",
					intro: "Gói undetected The Isle trên Windows PC: ESP wallhack, radar, Aimbot với bảo trì Easy Anti-Cheat.",
					imageAlt: "Isle ESP player tags hack",
					galleryTitle: "Thư viện The Isle Hacks — ESP, Aimbot, wallhack",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "Mua The Isle Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Vì sao chọn The Isle Hacks 2026",
							paragraphs: [
								"The Isle Hacks cung cấp ESP wallhack, radar hack và Isle Aimbot undetected cho The Isle trên PC Windows. Lý tưởng đọc pack địch trong BR và growth run.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot trong một giấy phép",
							paragraphs: [
								"The Isle Hacks cung cấp ESP wallhack, radar hack và Isle Aimbot undetected cho The Isle trên PC Windows. Một giấy phép thay vì công cụ riêng.",
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
							],
						},
					],
				},
				"isle-esp": {
					title: "ESP The Isle | Player Boxes & Wallhack",
					description: "ESP The Isle: hộp người chơi, đánh dấu xác thịt và overlay wallhack. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "ESP The Isle",
					intro: "The Isle Hacks cung cấp ESP wallhack, radar hack và Isle Aimbot undetected cho The Isle trên PC Windows. ESP The Isle.",
					imageAlt: "Isle ESP player boxes and distance readouts in a session",
					galleryTitle: "ESP The Isle",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "Mua The Isle Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "ESP The Isle",
							paragraphs: [
								"The Isle Hacks cung cấp ESP wallhack, radar hack và Isle Aimbot undetected cho The Isle trên PC Windows. hộp người chơi, đánh dấu xác thịt và overlay wallhack.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@theislehack.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"isle-aimbot": {
					title: "Aimbot The Isle | Soft Aim Controls",
					description: "Aimbot The Isle: soft aim, FOV và hồ sơ Aimbot theo loài. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Aimbot The Isle",
					intro: "The Isle Hacks cung cấp ESP wallhack, radar hack và Isle Aimbot undetected cho The Isle trên PC Windows. Aimbot The Isle.",
					imageAlt: "Isle Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot The Isle",
					heroImage: "/images/isle-hacks-aimbot.webp",
					ctaPrimary: "Mua The Isle Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "Aimbot The Isle",
							paragraphs: [
								"The Isle Hacks cung cấp ESP wallhack, radar hack và Isle Aimbot undetected cho The Isle trên PC Windows. soft aim, FOV và hồ sơ Aimbot theo loài.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@theislehack.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				features: {
					title: "Tính năng | Full Feature List",
					description: "Tính năng: ESP, soft aim, điều khiển radar. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Tính năng",
					intro: "The Isle Hacks cung cấp ESP wallhack, radar hack và Isle Aimbot undetected cho The Isle trên PC Windows. Tính năng.",
					imageAlt: "The Isle Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Tính năng",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "Mua The Isle Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Tính năng",
							paragraphs: [
								"The Isle Hacks cung cấp ESP wallhack, radar hack và Isle Aimbot undetected cho The Isle trên PC Windows. ESP, soft aim, điều khiển radar.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@theislehack.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				pricing: {
					title: "Giá | Monthly & Lifetime",
					description: "Giá: giấy phép $35 hàng tháng hoặc $150 lifetime. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Giá",
					intro: "The Isle Hacks cung cấp ESP wallhack, radar hack và Isle Aimbot undetected cho The Isle trên PC Windows. Giá.",
					imageAlt: "The Isle Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Giá",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "Mua The Isle Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Giá",
							paragraphs: [
								"The Isle Hacks cung cấp ESP wallhack, radar hack và Isle Aimbot undetected cho The Isle trên PC Windows. giấy phép $35 hàng tháng hoặc $150 lifetime.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@theislehack.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				setup: {
					title: "Cài đặt | PC Setup Guide",
					description: "Cài đặt: kích hoạt Windows PC và thiết lập lần chạy đầu. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cài đặt",
					intro: "The Isle Hacks cung cấp ESP wallhack, radar hack và Isle Aimbot undetected cho The Isle trên PC Windows. Cài đặt.",
					imageAlt: "The Isle Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Cài đặt",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "Mua The Isle Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Cài đặt",
							paragraphs: [
								"The Isle Hacks cung cấp ESP wallhack, radar hack và Isle Aimbot undetected cho The Isle trên PC Windows. kích hoạt Windows PC và thiết lập lần chạy đầu.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@theislehack.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				updates: {
					title: "Cập nhật | Easy Anti-Cheat Maintenance Log",
					description: "Cập nhật: trạng thái patch Easy Anti-Cheat và ghi chú rebuild. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cập nhật",
					intro: "The Isle Hacks cung cấp ESP wallhack, radar hack và Isle Aimbot undetected cho The Isle trên PC Windows. Cập nhật.",
					imageAlt: "The Isle Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Cập nhật",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "Mua The Isle Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "Cập nhật",
							paragraphs: [
								"The Isle Hacks cung cấp ESP wallhack, radar hack và Isle Aimbot undetected cho The Isle trên PC Windows. trạng thái patch Easy Anti-Cheat và ghi chú rebuild.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@theislehack.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: câu hỏi ESP, soft aim, giao hàng và Easy Anti-Cheat. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "FAQ",
					intro: "The Isle Hacks cung cấp ESP wallhack, radar hack và Isle Aimbot undetected cho The Isle trên PC Windows. FAQ.",
					imageAlt: "The Isle Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "Mua The Isle Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"The Isle Hacks cung cấp ESP wallhack, radar hack và Isle Aimbot undetected cho The Isle trên PC Windows. câu hỏi ESP, soft aim, giao hàng và Easy Anti-Cheat.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@theislehack.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				support: {
					title: "Hỗ trợ | Help & Contact",
					description: "Hỗ trợ: trợ giúp đơn hàng và liên hệ hỗ trợ giấy phép. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Hỗ trợ",
					intro: "The Isle Hacks cung cấp ESP wallhack, radar hack và Isle Aimbot undetected cho The Isle trên PC Windows. Hỗ trợ.",
					imageAlt: "The Isle Hacks support page for license and setup help",
					galleryTitle: "Hỗ trợ",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "Mua The Isle Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Hỗ trợ",
							paragraphs: [
								"The Isle Hacks cung cấp ESP wallhack, radar hack và Isle Aimbot undetected cho The Isle trên PC Windows. trợ giúp đơn hàng và liên hệ hỗ trợ giấy phép.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@theislehack.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				undetected: {
					title: "Cheat undetected | Easy Anti-Cheat Safe Status",
					description: "Cheat undetected: bảo trì undetected sau patch Easy Anti-Cheat. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cheat undetected",
					intro: "The Isle Hacks cung cấp ESP wallhack, radar hack và Isle Aimbot undetected cho The Isle trên PC Windows. Cheat undetected.",
					imageAlt: "The Isle Hacks undetected status overview for Windows PC",
					galleryTitle: "Cheat undetected",
					heroImage: "/images/isle-hacks-wallhack.webp",
					ctaPrimary: "Mua The Isle Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "Cheat undetected",
							paragraphs: [
								"The Isle Hacks cung cấp ESP wallhack, radar hack và Isle Aimbot undetected cho The Isle trên PC Windows. bảo trì undetected sau patch Easy Anti-Cheat.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@theislehack.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				wallhack: {
					title: "The Isle Wallhack | ESP Visibility",
					description: "The Isle Wallhack: wallhack ESP cho người chơi, xác thịt và khoảng cách. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "The Isle Wallhack",
					intro: "The Isle Hacks cung cấp ESP wallhack, radar hack và Isle Aimbot undetected cho The Isle trên PC Windows. The Isle Wallhack.",
					imageAlt: "isle wallhack visibility through walls in a session",
					galleryTitle: "The Isle Wallhack",
					heroImage: "/images/isle-hacks-wallhack.webp",
					ctaPrimary: "Mua The Isle Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "The Isle Wallhack",
							paragraphs: [
								"The Isle Hacks cung cấp ESP wallhack, radar hack và Isle Aimbot undetected cho The Isle trên PC Windows. wallhack ESP cho người chơi, xác thịt và khoảng cách.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@theislehack.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: tín hiệu radar 2D cho đánh hông và xoay vòng. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Radar hack",
					intro: "The Isle Hacks cung cấp ESP wallhack, radar hack và Isle Aimbot undetected cho The Isle trên PC Windows. Radar hack.",
					imageAlt: "The Isle 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "Mua The Isle Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"The Isle Hacks cung cấp ESP wallhack, radar hack và Isle Aimbot undetected cho The Isle trên PC Windows. tín hiệu radar 2D cho đánh hông và xoay vòng.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@theislehack.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Patch Maintenance",
					description: "Bypass Easy Anti-Cheat: cách xử lý cập nhật Easy Anti-Cheat cho The Isle hacks. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "The Isle Hacks cung cấp ESP wallhack, radar hack và Isle Aimbot undetected cho The Isle trên PC Windows. Bypass Easy Anti-Cheat.",
					imageAlt: "The Isle Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/isle-hacks-aimbot.webp",
					ctaPrimary: "Mua The Isle Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"The Isle Hacks cung cấp ESP wallhack, radar hack và Isle Aimbot undetected cho The Isle trên PC Windows. cách xử lý cập nhật Easy Anti-Cheat cho The Isle hacks.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@theislehack.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheat The Isle 2026 | Buyer Guide",
					description: "Cheat The Isle 2026: checklist the isle hacks 2026 trước checkout. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cheat The Isle 2026",
					intro: "The Isle Hacks cung cấp ESP wallhack, radar hack và Isle Aimbot undetected cho The Isle trên PC Windows. Cheat The Isle 2026.",
					imageAlt: "The Isle Hacks product overview for The Isle",
					galleryTitle: "Cheat The Isle 2026",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "Mua The Isle Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "Cheat The Isle 2026",
							paragraphs: [
								"The Isle Hacks cung cấp ESP wallhack, radar hack và Isle Aimbot undetected cho The Isle trên PC Windows. checklist the isle hacks 2026 trước checkout.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@theislehack.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				hacks: {
					title: "Cheat The Isle | ESP Aimbot Guide",
					description: "Cheat The Isle: trụ cột The Isle Hacks cho ESP và Aimbot. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cheat The Isle",
					intro: "The Isle Hacks cung cấp ESP wallhack, radar hack và Isle Aimbot undetected cho The Isle trên PC Windows. Cheat The Isle.",
					imageAlt: "The Isle Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Cheat The Isle",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "Mua The Isle Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheat The Isle",
							paragraphs: [
								"The Isle Hacks cung cấp ESP wallhack, radar hack và Isle Aimbot undetected cho The Isle trên PC Windows. trụ cột The Isle Hacks cho ESP và Aimbot.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@theislehack.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Tải Cheat The Isle | Instant Access",
					description: "Tải Cheat The Isle: tải giấy phép kỹ thuật số sau thanh toán. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Tải Cheat The Isle",
					intro: "The Isle Hacks cung cấp ESP wallhack, radar hack và Isle Aimbot undetected cho The Isle trên PC Windows. Tải Cheat The Isle.",
					imageAlt: "The Isle Hacks download and install delivery flow",
					galleryTitle: "Tải Cheat The Isle",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "Mua The Isle Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Tải Cheat The Isle",
							paragraphs: [
								"The Isle Hacks cung cấp ESP wallhack, radar hack và Isle Aimbot undetected cho The Isle trên PC Windows. tải giấy phép kỹ thuật số sau thanh toán.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@theislehack.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Mod menu The Isle | In-Game Toggles",
					description: "Mod menu The Isle: công tắc ESP và soft aim trong client. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Mod menu The Isle",
					intro: "The Isle Hacks cung cấp ESP wallhack, radar hack và Isle Aimbot undetected cho The Isle trên PC Windows. Mod menu The Isle.",
					imageAlt: "The Isle Hacks in-game menu controls",
					galleryTitle: "Mod menu The Isle",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "Mua The Isle Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Mod menu The Isle",
							paragraphs: [
								"The Isle Hacks cung cấp ESP wallhack, radar hack và Isle Aimbot undetected cho The Isle trên PC Windows. công tắc ESP và soft aim trong client.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@theislehack.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim The Isle | Smooth Aim Settings",
					description: "Soft aim The Isle: cài đặt soft aim mượt cho Windows PC. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Soft aim The Isle",
					intro: "The Isle Hacks cung cấp ESP wallhack, radar hack và Isle Aimbot undetected cho The Isle trên PC Windows. Soft aim The Isle.",
					imageAlt: "The Isle soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim The Isle",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "Mua The Isle Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/isle-aimbot/",
					sections: [
						{
							h2: "Soft aim The Isle",
							paragraphs: [
								"The Isle Hacks cung cấp ESP wallhack, radar hack và Isle Aimbot undetected cho The Isle trên PC Windows. cài đặt soft aim mượt cho Windows PC.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@theislehack.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Cheat The Isle tốt nhất | Buyer Checklist",
					description: "Cheat The Isle tốt nhất: nên so sánh gì trước khi mua the isle hacks. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cheat The Isle tốt nhất",
					intro: "The Isle Hacks cung cấp ESP wallhack, radar hack và Isle Aimbot undetected cho The Isle trên PC Windows. Cheat The Isle tốt nhất.",
					imageAlt: "The Isle Hacks overview for The Isle on PC",
					galleryTitle: "Cheat The Isle tốt nhất",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "Mua The Isle Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Cheat The Isle tốt nhất",
							paragraphs: [
								"The Isle Hacks cung cấp ESP wallhack, radar hack và Isle Aimbot undetected cho The Isle trên PC Windows. nên so sánh gì trước khi mua the isle hacks.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@theislehack.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot The Isle | Soft Aim Assist",
					description: "Hack aimbot The Isle: hỗ trợ hack Aimbot undetected cho The Isle. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Hack aimbot The Isle",
					intro: "The Isle Hacks cung cấp ESP wallhack, radar hack và Isle Aimbot undetected cho The Isle trên PC Windows. Hack aimbot The Isle.",
					imageAlt: "Isle Aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot The Isle",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "Mua The Isle Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/isle-aimbot/",
					sections: [
						{
							h2: "Hack aimbot The Isle",
							paragraphs: [
								"The Isle Hacks cung cấp ESP wallhack, radar hack và Isle Aimbot undetected cho The Isle trên PC Windows. hỗ trợ hack Aimbot undetected cho The Isle.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@theislehack.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP The Isle | Boxes & Loot",
					description: "Hack ESP The Isle: hộp ESP hack, pin xác thịt và khoảng cách. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Hack ESP The Isle",
					intro: "The Isle Hacks cung cấp ESP wallhack, radar hack và Isle Aimbot undetected cho The Isle trên PC Windows. Hack ESP The Isle.",
					imageAlt: "Isle ESP hack boxes and carcass markers",
					galleryTitle: "Hack ESP The Isle",
					heroImage: "/images/isle-hacks-wallhack.webp",
					ctaPrimary: "Mua The Isle Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "Hack ESP The Isle",
							paragraphs: [
								"The Isle Hacks cung cấp ESP wallhack, radar hack và Isle Aimbot undetected cho The Isle trên PC Windows. hộp ESP hack, pin xác thịt và khoảng cách.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@theislehack.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all The Isle | What It Means",
					description: "Unlock all The Isle: tìm kiếm unlock-all vs công cụ ESP và Aimbot thật. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Unlock all The Isle",
					intro: "The Isle Hacks cung cấp ESP wallhack, radar hack và Isle Aimbot undetected cho The Isle trên PC Windows. Unlock all The Isle.",
					imageAlt: "The Isle Hacks license features overview",
					galleryTitle: "Unlock all The Isle",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "Mua The Isle Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all The Isle",
							paragraphs: [
								"The Isle Hacks cung cấp ESP wallhack, radar hack và Isle Aimbot undetected cho The Isle trên PC Windows. tìm kiếm unlock-all vs công cụ ESP và Aimbot thật.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@theislehack.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				privacy: {
					title: "Chính sách bảo mật | The Isle Hacks",
					description: "Chính sách bảo mật cho The Isle Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Chính sách bảo mật",
					intro: "The Isle Hacks cung cấp ESP wallhack, radar hack và Isle Aimbot undetected cho The Isle trên PC Windows. Chính sách bảo mật cho theislehack.org và giấy phép The Isle.",
					imageAlt: "The Isle Hacks",
					galleryTitle: "The Isle Hacks",
					heroImage: "/images/isle-hacks-aimbot.webp",
					ctaPrimary: "Email hỗ trợ",
					ctaSecondary: "Đọc điều khoản",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Thông tin chúng tôi thu thập",
							paragraphs: [
								"The Isle Hacks cung cấp ESP wallhack, radar hack và Isle Aimbot undetected cho The Isle trên PC Windows. Email liên hệ, tham chiếu đơn hàng Zadeyo và dữ liệu bảo mật cơ bản của trang.",
								"Chi tiết thanh toán được xử lý qua checkout Zadeyo — không lưu trên theislehack.org.",
							],
						},
						{
							h2: "Cách chúng tôi sử dụng dữ liệu",
							paragraphs: [
								"The Isle Hacks cung cấp ESP wallhack, radar hack và Isle Aimbot undetected cho The Isle trên PC Windows. Phản hồi hỗ trợ, giải quyết đơn hàng và tuân thủ pháp lý khi cần.",
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
							],
						},
						{
							h2: "Quyền của bạn",
							paragraphs: [
								"support@theislehack.org cho hỗ trợ và pháp lý.",
								"Email: support@theislehack.org",
							],
						},
					],
				},
				refund: {
					title: "Chính sách hoàn tiền | The Isle Hacks",
					description: "Chính sách hoàn tiền cho The Isle Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Chính sách hoàn tiền",
					intro: "The Isle Hacks cung cấp ESP wallhack, radar hack và Isle Aimbot undetected cho The Isle trên PC Windows. Chính sách hoàn tiền cho theislehack.org và giấy phép The Isle.",
					imageAlt: "The Isle Hacks",
					galleryTitle: "The Isle Hacks",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "Email hỗ trợ",
					ctaSecondary: "Đọc quyền riêng tư",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Giao hàng kỹ thuật số",
							paragraphs: [
								"The Isle Hacks cung cấp ESP wallhack, radar hack và Isle Aimbot undetected cho The Isle trên PC Windows. Email liên hệ, tham chiếu đơn hàng Zadeyo và dữ liệu bảo mật cơ bản của trang.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "Phê duyệt hoàn tiền",
							paragraphs: [
								"The Isle Hacks cung cấp ESP wallhack, radar hack và Isle Aimbot undetected cho The Isle trên PC Windows. Phản hồi hỗ trợ, giải quyết đơn hàng và tuân thủ pháp lý khi cần.",
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
							],
						},
						{
							h2: "Cách yêu cầu",
							paragraphs: [
								"support@theislehack.org cho hỗ trợ và pháp lý.",
								"Email: support@theislehack.org",
							],
						},
					],
				},
				terms: {
					title: "Điều khoản sử dụng | The Isle Hacks",
					description: "Điều khoản sử dụng cho The Isle Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Điều khoản sử dụng",
					intro: "The Isle Hacks cung cấp ESP wallhack, radar hack và Isle Aimbot undetected cho The Isle trên PC Windows. Điều khoản sử dụng cho theislehack.org và giấy phép The Isle.",
					imageAlt: "The Isle Hacks",
					galleryTitle: "The Isle Hacks",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "Email hỗ trợ",
					ctaSecondary: "Đọc quyền riêng tư",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Chấp nhận điều khoản",
							paragraphs: [
								"The Isle Hacks cung cấp ESP wallhack, radar hack và Isle Aimbot undetected cho The Isle trên PC Windows. Email liên hệ, tham chiếu đơn hàng Zadeyo và dữ liệu bảo mật cơ bản của trang.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "Tuyên bố miễn trừ rủi ro",
							paragraphs: [
								"The Isle Hacks cung cấp ESP wallhack, radar hack và Isle Aimbot undetected cho The Isle trên PC Windows. Phản hồi hỗ trợ, giải quyết đơn hàng và tuân thủ pháp lý khi cần.",
								"Dùng cheat có thể vi phạm điều khoản của đội The Isle — bạn chịu mọi rủi ro ban.",
							],
						},
						{
							h2: "Thay đổi chính sách",
							paragraphs: [
								"support@theislehack.org cho hỗ trợ và pháp lý.",
								"Email: support@theislehack.org",
							],
						},
					],
				},
			},
		},
		uk: {
			ui: {
				nav: {
					home: "Головна",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Функції",
					pricing: "Ціни",
					setup: "Встановлення",
					updates: "Оновлення",
					faq: "FAQ",
					buyNow: "Купити",
				},
				hero: {
					accent: "Undetected чіти The Isle",
					accentShort: "The Isle Hacks",
					subtitle: "ESP wallhack, radar hack і Aimbot для The Isle на Windows PC — обслуговування Easy Anti-Cheat включено.",
					subtitleShort: "ESP, radar і Aimbot для The Isle PC",
					buyNow: "Купити",
					seeFeatures: "Дивитися функції",
				},
				trust: {
					status: "Онлайн",
					statusNote: "Пакет The Isle Hacks активний для The Isle на Windows PC.",
					statusShort: "Активний",
					delivery: "Миттєва цифрова доставка",
					platform: "Windows 10 і 11",
					antiCheat: "Підтримка обслуговування Easy Anti-Cheat",
					antiCheatShort: "Easy Anti-Cheat підтримка",
				},
				product: {
					title: "The Isle Hacks",
					addToCart: "До кошика",
					monthly: "Щомісяця",
					lifetime: "Назавжди",
					available: "Доступно зараз",
					gameBadge: "The Isle",
					platformBadge: "Windows PC",
					statusBadge: "Undetected пакет",
				},
				reviews: {
					title: "Що кажуть гравці",
					subtitle: "Останні відгуки покупців The Isle Hacks",
					outOf: "з 5",
					countLabel: "відгуків",
				},
				common: {
					buyNow: "Купити",
					readGuide: "Читати гайд",
					language: "Мова",
					officialLanguageNote: "Англійська — офіційна мова. Інші версії перекладені для глобального SEO.",
					relatedPages: "Пов'язані сторінки",
				},
				footer: {
					explore: "Огляд",
					help: "Допомога та право",
					tagline: "Undetected ESP, wallhack, radar і Aimbot для The Isle — оплата через Zadeyo.",
				},
				images: {
					hero: "The Isle Hacks hero — ESP and aimbot overlay in The Isle",
					espWallhack: "Wallhack outlines showing players and wild dinosaurs through walls",
					aimbotCombat: "Soft aim assist overlay during a The Isle session",
					packFight: "The Isle Hacks combat overlay during a pack fight",
					dinoEsp: "Player ESP boxes and distance readouts in a The Isle session",
					headerArt: "Aimbot view and bone priority controls for The Isle",
					hacksPackage: "2D radar threat overlay for The Isle",
					ambushFight: "Aimbot assist during a The Isle hunt",
					battleRoyale: "The Isle Hacks in-session overview for Windows PC",
					survivalIsland: "ESP markers for carcasses and nests in The Isle",
				},
			},
			pages: {
				home: {
					title: "The Isle Hacks 2026 | ESP, Wallhack і Aimbot",
					description: "Undetected чіти The Isle для The Isle на PC. ESP wallhack, radar hack, Aimbot, обслуговування Easy Anti-Cheat. Мгновенная цифровая доставка.",
					h1: "The Isle Hacks — Undetected ESP, Wallhack і Aimbot",
					intro: "Undetected пакет для The Isle на Windows PC: ESP wallhack, radar, Aimbot з обслуговуванням Easy Anti-Cheat.",
					imageAlt: "Isle ESP player tags hack",
					galleryTitle: "Галерея The Isle Hacks — ESP, Aimbot, wallhack",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "Купити The Isle Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Чому The Isle Hacks у 2026",
							paragraphs: [
								"The Isle Hacks об'єднує ESP wallhack, radar hack і Isle Aimbot у undetected пакеті для The Isle на Windows PC. Ідеально для читання ворожих загонів у BR і growth run.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar і Aimbot в одній ліцензії",
							paragraphs: [
								"The Isle Hacks об'єднує ESP wallhack, radar hack і Isle Aimbot у undetected пакеті для The Isle на Windows PC. Одна ліцензія замість окремих інструментів.",
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
							],
						},
					],
				},
				"isle-esp": {
					title: "ESP The Isle | Player Boxes & Wallhack",
					description: "ESP The Isle: бокси гравців, маркери туш і wallhack overlays. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "ESP The Isle",
					intro: "The Isle Hacks об'єднує ESP wallhack, radar hack і Isle Aimbot у undetected пакеті для The Isle на Windows PC. ESP The Isle.",
					imageAlt: "Isle ESP player boxes and distance readouts in a session",
					galleryTitle: "ESP The Isle",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "Купити The Isle Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "ESP The Isle",
							paragraphs: [
								"The Isle Hacks об'єднує ESP wallhack, radar hack і Isle Aimbot у undetected пакеті для The Isle на Windows PC. бокси гравців, маркери туш і wallhack overlays.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@theislehack.org для підтримки та правових питань.",
							],
						},
					],
				},
				"isle-aimbot": {
					title: "Aimbot The Isle | Soft Aim Controls",
					description: "Aimbot The Isle: soft aim, FOV і профілі Aimbot за видами. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Aimbot The Isle",
					intro: "The Isle Hacks об'єднує ESP wallhack, radar hack і Isle Aimbot у undetected пакеті для The Isle на Windows PC. Aimbot The Isle.",
					imageAlt: "Isle Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot The Isle",
					heroImage: "/images/isle-hacks-aimbot.webp",
					ctaPrimary: "Купити The Isle Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "Aimbot The Isle",
							paragraphs: [
								"The Isle Hacks об'єднує ESP wallhack, radar hack і Isle Aimbot у undetected пакеті для The Isle на Windows PC. soft aim, FOV і профілі Aimbot за видами.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@theislehack.org для підтримки та правових питань.",
							],
						},
					],
				},
				features: {
					title: "Функції | Full Feature List",
					description: "Функції: ESP, soft aim, керування radar. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Функції",
					intro: "The Isle Hacks об'єднує ESP wallhack, radar hack і Isle Aimbot у undetected пакеті для The Isle на Windows PC. Функції.",
					imageAlt: "The Isle Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Функції",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "Купити The Isle Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Функції",
							paragraphs: [
								"The Isle Hacks об'єднує ESP wallhack, radar hack і Isle Aimbot у undetected пакеті для The Isle на Windows PC. ESP, soft aim, керування radar.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@theislehack.org для підтримки та правових питань.",
							],
						},
					],
				},
				pricing: {
					title: "Ціни | Monthly & Lifetime",
					description: "Ціни: ліцензії $35 на місяць або $150 lifetime. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Ціни",
					intro: "The Isle Hacks об'єднує ESP wallhack, radar hack і Isle Aimbot у undetected пакеті для The Isle на Windows PC. Ціни.",
					imageAlt: "The Isle Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Ціни",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "Купити The Isle Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Ціни",
							paragraphs: [
								"The Isle Hacks об'єднує ESP wallhack, radar hack і Isle Aimbot у undetected пакеті для The Isle на Windows PC. ліцензії $35 на місяць або $150 lifetime.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@theislehack.org для підтримки та правових питань.",
							],
						},
					],
				},
				setup: {
					title: "Встановлення | PC Setup Guide",
					description: "Встановлення: активація Windows PC і налаштування першого запуску. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Встановлення",
					intro: "The Isle Hacks об'єднує ESP wallhack, radar hack і Isle Aimbot у undetected пакеті для The Isle на Windows PC. Встановлення.",
					imageAlt: "The Isle Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Встановлення",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "Купити The Isle Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Встановлення",
							paragraphs: [
								"The Isle Hacks об'єднує ESP wallhack, radar hack і Isle Aimbot у undetected пакеті для The Isle на Windows PC. активація Windows PC і налаштування першого запуску.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@theislehack.org для підтримки та правових питань.",
							],
						},
					],
				},
				updates: {
					title: "Оновлення | Easy Anti-Cheat Maintenance Log",
					description: "Оновлення: статус патчів Easy Anti-Cheat і нотатки rebuild. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Оновлення",
					intro: "The Isle Hacks об'єднує ESP wallhack, radar hack і Isle Aimbot у undetected пакеті для The Isle на Windows PC. Оновлення.",
					imageAlt: "The Isle Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Оновлення",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "Купити The Isle Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "Оновлення",
							paragraphs: [
								"The Isle Hacks об'єднує ESP wallhack, radar hack і Isle Aimbot у undetected пакеті для The Isle на Windows PC. статус патчів Easy Anti-Cheat і нотатки rebuild.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@theislehack.org для підтримки та правових питань.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: питання про ESP, soft aim, доставку та Easy Anti-Cheat. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "FAQ",
					intro: "The Isle Hacks об'єднує ESP wallhack, radar hack і Isle Aimbot у undetected пакеті для The Isle на Windows PC. FAQ.",
					imageAlt: "The Isle Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "Купити The Isle Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"The Isle Hacks об'єднує ESP wallhack, radar hack і Isle Aimbot у undetected пакеті для The Isle на Windows PC. питання про ESP, soft aim, доставку та Easy Anti-Cheat.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@theislehack.org для підтримки та правових питань.",
							],
						},
					],
				},
				support: {
					title: "Підтримка | Help & Contact",
					description: "Підтримка: допомога з замовленням і контакт підтримки ліцензій. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Підтримка",
					intro: "The Isle Hacks об'єднує ESP wallhack, radar hack і Isle Aimbot у undetected пакеті для The Isle на Windows PC. Підтримка.",
					imageAlt: "The Isle Hacks support page for license and setup help",
					galleryTitle: "Підтримка",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "Купити The Isle Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Підтримка",
							paragraphs: [
								"The Isle Hacks об'єднує ESP wallhack, radar hack і Isle Aimbot у undetected пакеті для The Isle на Windows PC. допомога з замовленням і контакт підтримки ліцензій.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@theislehack.org для підтримки та правових питань.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected чіти | Easy Anti-Cheat Safe Status",
					description: "Undetected чіти: undetected обслуговування після патчів Easy Anti-Cheat. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Undetected чіти",
					intro: "The Isle Hacks об'єднує ESP wallhack, radar hack і Isle Aimbot у undetected пакеті для The Isle на Windows PC. Undetected чіти.",
					imageAlt: "The Isle Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected чіти",
					heroImage: "/images/isle-hacks-wallhack.webp",
					ctaPrimary: "Купити The Isle Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "Undetected чіти",
							paragraphs: [
								"The Isle Hacks об'єднує ESP wallhack, radar hack і Isle Aimbot у undetected пакеті для The Isle на Windows PC. undetected обслуговування після патчів Easy Anti-Cheat.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@theislehack.org для підтримки та правових питань.",
							],
						},
					],
				},
				wallhack: {
					title: "The Isle Wallhack | ESP Visibility",
					description: "The Isle Wallhack: wallhack ESP для гравців, туш і дистанції. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "The Isle Wallhack",
					intro: "The Isle Hacks об'єднує ESP wallhack, radar hack і Isle Aimbot у undetected пакеті для The Isle на Windows PC. The Isle Wallhack.",
					imageAlt: "isle wallhack visibility through walls in a session",
					galleryTitle: "The Isle Wallhack",
					heroImage: "/images/isle-hacks-wallhack.webp",
					ctaPrimary: "Купити The Isle Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "The Isle Wallhack",
							paragraphs: [
								"The Isle Hacks об'єднує ESP wallhack, radar hack і Isle Aimbot у undetected пакеті для The Isle на Windows PC. wallhack ESP для гравців, туш і дистанції.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@theislehack.org для підтримки та правових питань.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: 2D radar підказки для флангів і ротацій. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Radar hack",
					intro: "The Isle Hacks об'єднує ESP wallhack, radar hack і Isle Aimbot у undetected пакеті для The Isle на Windows PC. Radar hack.",
					imageAlt: "The Isle 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "Купити The Isle Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"The Isle Hacks об'єднує ESP wallhack, radar hack і Isle Aimbot у undetected пакеті для The Isle на Windows PC. 2D radar підказки для флангів і ротацій.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@theislehack.org для підтримки та правових питань.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Patch Maintenance",
					description: "Bypass Easy Anti-Cheat: як обробляються оновлення Easy Anti-Cheat для The Isle hacks. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "The Isle Hacks об'єднує ESP wallhack, radar hack і Isle Aimbot у undetected пакеті для The Isle на Windows PC. Bypass Easy Anti-Cheat.",
					imageAlt: "The Isle Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/isle-hacks-aimbot.webp",
					ctaPrimary: "Купити The Isle Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"The Isle Hacks об'єднує ESP wallhack, radar hack і Isle Aimbot у undetected пакеті для The Isle на Windows PC. як обробляються оновлення Easy Anti-Cheat для The Isle hacks.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@theislehack.org для підтримки та правових питань.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Чіти The Isle 2026 | Buyer Guide",
					description: "Чіти The Isle 2026: чеклист the isle hacks 2026 перед checkout. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Чіти The Isle 2026",
					intro: "The Isle Hacks об'єднує ESP wallhack, radar hack і Isle Aimbot у undetected пакеті для The Isle на Windows PC. Чіти The Isle 2026.",
					imageAlt: "The Isle Hacks product overview for The Isle",
					galleryTitle: "Чіти The Isle 2026",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "Купити The Isle Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "Чіти The Isle 2026",
							paragraphs: [
								"The Isle Hacks об'єднує ESP wallhack, radar hack і Isle Aimbot у undetected пакеті для The Isle на Windows PC. чеклист the isle hacks 2026 перед checkout.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@theislehack.org для підтримки та правових питань.",
							],
						},
					],
				},
				hacks: {
					title: "Чіти The Isle | ESP Aimbot Guide",
					description: "Чіти The Isle: стовп The Isle Hacks для ESP і Aimbot. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Чіти The Isle",
					intro: "The Isle Hacks об'єднує ESP wallhack, radar hack і Isle Aimbot у undetected пакеті для The Isle на Windows PC. Чіти The Isle.",
					imageAlt: "The Isle Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Чіти The Isle",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "Купити The Isle Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Чіти The Isle",
							paragraphs: [
								"The Isle Hacks об'єднує ESP wallhack, radar hack і Isle Aimbot у undetected пакеті для The Isle на Windows PC. стовп The Isle Hacks для ESP і Aimbot.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@theislehack.org для підтримки та правових питань.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Завантаження The Isle Hacks | Instant Access",
					description: "Завантаження The Isle Hacks: цифрове завантаження ліцензії після оплати. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Завантаження The Isle Hacks",
					intro: "The Isle Hacks об'єднує ESP wallhack, radar hack і Isle Aimbot у undetected пакеті для The Isle на Windows PC. Завантаження The Isle Hacks.",
					imageAlt: "The Isle Hacks download and install delivery flow",
					galleryTitle: "Завантаження The Isle Hacks",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "Купити The Isle Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Завантаження The Isle Hacks",
							paragraphs: [
								"The Isle Hacks об'єднує ESP wallhack, radar hack і Isle Aimbot у undetected пакеті для The Isle на Windows PC. цифрове завантаження ліцензії після оплати.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@theislehack.org для підтримки та правових питань.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Мод-меню The Isle | In-Game Toggles",
					description: "Мод-меню The Isle: перемикачі ESP і soft aim у клієнті. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Мод-меню The Isle",
					intro: "The Isle Hacks об'єднує ESP wallhack, radar hack і Isle Aimbot у undetected пакеті для The Isle на Windows PC. Мод-меню The Isle.",
					imageAlt: "The Isle Hacks in-game menu controls",
					galleryTitle: "Мод-меню The Isle",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "Купити The Isle Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Мод-меню The Isle",
							paragraphs: [
								"The Isle Hacks об'єднує ESP wallhack, radar hack і Isle Aimbot у undetected пакеті для The Isle на Windows PC. перемикачі ESP і soft aim у клієнті.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@theislehack.org для підтримки та правових питань.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim The Isle | Smooth Aim Settings",
					description: "Soft aim The Isle: плавні налаштування soft aim для Windows PC. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Soft aim The Isle",
					intro: "The Isle Hacks об'єднує ESP wallhack, radar hack і Isle Aimbot у undetected пакеті для The Isle на Windows PC. Soft aim The Isle.",
					imageAlt: "The Isle soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim The Isle",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "Купити The Isle Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/isle-aimbot/",
					sections: [
						{
							h2: "Soft aim The Isle",
							paragraphs: [
								"The Isle Hacks об'єднує ESP wallhack, radar hack і Isle Aimbot у undetected пакеті для The Isle на Windows PC. плавні налаштування soft aim для Windows PC.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@theislehack.org для підтримки та правових питань.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Найкращі чіти The Isle | Buyer Checklist",
					description: "Найкращі чіти The Isle: що порівняти перед покупкою the isle hacks. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Найкращі чіти The Isle",
					intro: "The Isle Hacks об'єднує ESP wallhack, radar hack і Isle Aimbot у undetected пакеті для The Isle на Windows PC. Найкращі чіти The Isle.",
					imageAlt: "The Isle Hacks overview for The Isle on PC",
					galleryTitle: "Найкращі чіти The Isle",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "Купити The Isle Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Найкращі чіти The Isle",
							paragraphs: [
								"The Isle Hacks об'єднує ESP wallhack, radar hack і Isle Aimbot у undetected пакеті для The Isle на Windows PC. що порівняти перед покупкою the isle hacks.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@theislehack.org для підтримки та правових питань.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Хак aimbot The Isle | Soft Aim Assist",
					description: "Хак aimbot The Isle: undetected Aimbot hack assist для The Isle. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Хак aimbot The Isle",
					intro: "The Isle Hacks об'єднує ESP wallhack, radar hack і Isle Aimbot у undetected пакеті для The Isle на Windows PC. Хак aimbot The Isle.",
					imageAlt: "Isle Aimbot hack controls and bone priority",
					galleryTitle: "Хак aimbot The Isle",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "Купити The Isle Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/isle-aimbot/",
					sections: [
						{
							h2: "Хак aimbot The Isle",
							paragraphs: [
								"The Isle Hacks об'єднує ESP wallhack, radar hack і Isle Aimbot у undetected пакеті для The Isle на Windows PC. undetected Aimbot hack assist для The Isle.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@theislehack.org для підтримки та правових питань.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Хак ESP The Isle | Boxes & Loot",
					description: "Хак ESP The Isle: ESP hack бокси, pins туш і дистанція. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Хак ESP The Isle",
					intro: "The Isle Hacks об'єднує ESP wallhack, radar hack і Isle Aimbot у undetected пакеті для The Isle на Windows PC. Хак ESP The Isle.",
					imageAlt: "Isle ESP hack boxes and carcass markers",
					galleryTitle: "Хак ESP The Isle",
					heroImage: "/images/isle-hacks-wallhack.webp",
					ctaPrimary: "Купити The Isle Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "Хак ESP The Isle",
							paragraphs: [
								"The Isle Hacks об'єднує ESP wallhack, radar hack і Isle Aimbot у undetected пакеті для The Isle на Windows PC. ESP hack бокси, pins туш і дистанція.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@theislehack.org для підтримки та правових питань.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all The Isle | What It Means",
					description: "Unlock all The Isle: пошуки unlock-all vs справжні ESP і Aimbot інструменти. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Unlock all The Isle",
					intro: "The Isle Hacks об'єднує ESP wallhack, radar hack і Isle Aimbot у undetected пакеті для The Isle на Windows PC. Unlock all The Isle.",
					imageAlt: "The Isle Hacks license features overview",
					galleryTitle: "Unlock all The Isle",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "Купити The Isle Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all The Isle",
							paragraphs: [
								"The Isle Hacks об'єднує ESP wallhack, radar hack і Isle Aimbot у undetected пакеті для The Isle на Windows PC. пошуки unlock-all vs справжні ESP і Aimbot інструменти.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@theislehack.org для підтримки та правових питань.",
							],
						},
					],
				},
				privacy: {
					title: "Політика конфіденційності | The Isle Hacks",
					description: "Політика конфіденційності для The Isle Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Політика конфіденційності",
					intro: "The Isle Hacks об'єднує ESP wallhack, radar hack і Isle Aimbot у undetected пакеті для The Isle на Windows PC. Політика конфіденційності для theislehack.org та ліцензій The Isle.",
					imageAlt: "The Isle Hacks",
					galleryTitle: "The Isle Hacks",
					heroImage: "/images/isle-hacks-aimbot.webp",
					ctaPrimary: "Написати в підтримку",
					ctaSecondary: "Читати умови",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Інформація, яку ми збираємо",
							paragraphs: [
								"The Isle Hacks об'єднує ESP wallhack, radar hack і Isle Aimbot у undetected пакеті для The Isle на Windows PC. Контактний email, посилання на замовлення Zadeyo та базові дані безпеки сайту.",
								"Платіжні дані обробляються через checkout Zadeyo — не зберігаються на theislehack.org.",
							],
						},
						{
							h2: "Як ми використовуємо дані",
							paragraphs: [
								"The Isle Hacks об'єднує ESP wallhack, radar hack і Isle Aimbot у undetected пакеті для The Isle на Windows PC. Відповіді підтримки, вирішення замовлень та правова відповідність за потреби.",
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
							],
						},
						{
							h2: "Ваші права",
							paragraphs: [
								"support@theislehack.org для підтримки та правових питань.",
								"Email: support@theislehack.org",
							],
						},
					],
				},
				refund: {
					title: "Політика повернення | The Isle Hacks",
					description: "Політика повернення для The Isle Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Політика повернення",
					intro: "The Isle Hacks об'єднує ESP wallhack, radar hack і Isle Aimbot у undetected пакеті для The Isle на Windows PC. Політика повернення для theislehack.org та ліцензій The Isle.",
					imageAlt: "The Isle Hacks",
					galleryTitle: "The Isle Hacks",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "Написати в підтримку",
					ctaSecondary: "Читати конфіденційність",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Цифрова доставка",
							paragraphs: [
								"The Isle Hacks об'єднує ESP wallhack, radar hack і Isle Aimbot у undetected пакеті для The Isle на Windows PC. Контактний email, посилання на замовлення Zadeyo та базові дані безпеки сайту.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "Схвалення повернення",
							paragraphs: [
								"The Isle Hacks об'єднує ESP wallhack, radar hack і Isle Aimbot у undetected пакеті для The Isle на Windows PC. Відповіді підтримки, вирішення замовлень та правова відповідність за потреби.",
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
							],
						},
						{
							h2: "Як подати запит",
							paragraphs: [
								"support@theislehack.org для підтримки та правових питань.",
								"Email: support@theislehack.org",
							],
						},
					],
				},
				terms: {
					title: "Умови використання | The Isle Hacks",
					description: "Умови використання для The Isle Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Умови використання",
					intro: "The Isle Hacks об'єднує ESP wallhack, radar hack і Isle Aimbot у undetected пакеті для The Isle на Windows PC. Умови використання для theislehack.org та ліцензій The Isle.",
					imageAlt: "The Isle Hacks",
					galleryTitle: "The Isle Hacks",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "Написати в підтримку",
					ctaSecondary: "Читати конфіденційність",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Прийняття умов",
							paragraphs: [
								"The Isle Hacks об'єднує ESP wallhack, radar hack і Isle Aimbot у undetected пакеті для The Isle на Windows PC. Контактний email, посилання на замовлення Zadeyo та базові дані безпеки сайту.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "Попередження про ризики",
							paragraphs: [
								"The Isle Hacks об'єднує ESP wallhack, radar hack і Isle Aimbot у undetected пакеті для The Isle на Windows PC. Відповіді підтримки, вирішення замовлень та правова відповідність за потреби.",
								"Використання читів може порушувати умови команди The Isle — ви приймаєте на себе ризик бану.",
							],
						},
						{
							h2: "Зміни політики",
							paragraphs: [
								"support@theislehack.org для підтримки та правових питань.",
								"Email: support@theislehack.org",
							],
						},
					],
				},
			},
		},
		cs: {
			ui: {
				nav: {
					home: "Domů",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funkce",
					pricing: "Ceny",
					setup: "Instalace",
					updates: "Aktualizace",
					faq: "FAQ",
					buyNow: "Koupit",
				},
				hero: {
					accent: "Undetected the isle hacky",
					accentShort: "The Isle Hacks",
					subtitle: "ESP wallhack, radar hack a Aimbot pro The Isle na Windows PC — údržba Easy Anti-Cheat v ceně.",
					subtitleShort: "ESP, radar a Aimbot pro The Isle PC",
					buyNow: "Koupit",
					seeFeatures: "Zobrazit funkce",
				},
				trust: {
					status: "Online",
					statusNote: "Balíček The Isle Hacks je aktivní pro The Isle na Windows PC.",
					statusShort: "Aktivní",
					delivery: "Okamžité digitální doručení",
					platform: "Windows 10 a 11",
					antiCheat: "Podpora údržby Easy Anti-Cheat",
					antiCheatShort: "Easy Anti-Cheat podpora",
				},
				product: {
					title: "The Isle Hacks",
					addToCart: "Přidat do košíku",
					monthly: "Měsíčně",
					lifetime: "Doživotně",
					available: "Dostupné nyní",
					gameBadge: "The Isle",
					platformBadge: "Windows PC",
					statusBadge: "Undetected balíček",
				},
				reviews: {
					title: "Co říkají hráči",
					subtitle: "Nedávná zpětná vazba od kupujících The Isle Hacks",
					outOf: "z 5",
					countLabel: "recenzí",
				},
				common: {
					buyNow: "Koupit",
					readGuide: "Číst průvodce",
					language: "Jazyk",
					officialLanguageNote: "Angličtina je oficiální jazyk. Ostatní jazyky jsou přeloženy pro globální SEO.",
					relatedPages: "Související stránky",
				},
				footer: {
					explore: "Prozkoumat",
					help: "Nápověda a právo",
					tagline: "Undetected ESP, wallhack, radar a Aimbot pro The Isle — checkout přes Zadeyo.",
				},
				images: {
					hero: "The Isle Hacks hero — ESP and aimbot overlay in The Isle",
					espWallhack: "Wallhack outlines showing players and wild dinosaurs through walls",
					aimbotCombat: "Soft aim assist overlay during a The Isle session",
					packFight: "The Isle Hacks combat overlay during a pack fight",
					dinoEsp: "Player ESP boxes and distance readouts in a The Isle session",
					headerArt: "Aimbot view and bone priority controls for The Isle",
					hacksPackage: "2D radar threat overlay for The Isle",
					ambushFight: "Aimbot assist during a The Isle hunt",
					battleRoyale: "The Isle Hacks in-session overview for Windows PC",
					survivalIsland: "ESP markers for carcasses and nests in The Isle",
				},
			},
			pages: {
				home: {
					title: "The Isle Hacks 2026 | ESP, Wallhack a Aimbot",
					description: "Undetected the isle hacky pro The Isle na PC. ESP wallhack, radar hack, Aimbot, údržba Easy Anti-Cheat. Okamžité digitální doručení.",
					h1: "The Isle Hacks — Undetected ESP, Wallhack a Aimbot",
					intro: "Undetected balíček pro The Isle na Windows PC: ESP wallhack, radar, Aimbot s údržbou Easy Anti-Cheat.",
					imageAlt: "Isle ESP player tags hack",
					galleryTitle: "Galerie The Isle Hacks — ESP, Aimbot, wallhack",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "Koupit The Isle Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Proč The Isle Hacks v roce 2026",
							paragraphs: [
								"The Isle Hacks spojuje ESP wallhack, radar hack a Isle Aimbot jako undetected balíček pro The Isle na Windows PC. Ideální pro čtení nepřátelských packů v BR a growth run.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar a Aimbot v jedné licenci",
							paragraphs: [
								"The Isle Hacks spojuje ESP wallhack, radar hack a Isle Aimbot jako undetected balíček pro The Isle na Windows PC. Jedna licence místo samostatných nástrojů.",
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
							],
						},
					],
				},
				"isle-esp": {
					title: "Isle ESP | Player Boxes & Wallhack",
					description: "Isle ESP: hráčské boxy, markery kadáverů a wallhack overlaye. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Isle ESP",
					intro: "The Isle Hacks spojuje ESP wallhack, radar hack a Isle Aimbot jako undetected balíček pro The Isle na Windows PC. Isle ESP.",
					imageAlt: "Isle ESP player boxes and distance readouts in a session",
					galleryTitle: "Isle ESP",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "Koupit The Isle Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "Isle ESP",
							paragraphs: [
								"The Isle Hacks spojuje ESP wallhack, radar hack a Isle Aimbot jako undetected balíček pro The Isle na Windows PC. hráčské boxy, markery kadáverů a wallhack overlaye.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@theislehack.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				"isle-aimbot": {
					title: "Isle Aimbot | Soft Aim Controls",
					description: "Isle Aimbot: soft aim, FOV a Aimbot profily podle druhu. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Isle Aimbot",
					intro: "The Isle Hacks spojuje ESP wallhack, radar hack a Isle Aimbot jako undetected balíček pro The Isle na Windows PC. Isle Aimbot.",
					imageAlt: "Isle Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Isle Aimbot",
					heroImage: "/images/isle-hacks-aimbot.webp",
					ctaPrimary: "Koupit The Isle Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "Isle Aimbot",
							paragraphs: [
								"The Isle Hacks spojuje ESP wallhack, radar hack a Isle Aimbot jako undetected balíček pro The Isle na Windows PC. soft aim, FOV a Aimbot profily podle druhu.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@theislehack.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				features: {
					title: "Funkce | Full Feature List",
					description: "Funkce: ESP, soft aim, ovládání radar. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Funkce",
					intro: "The Isle Hacks spojuje ESP wallhack, radar hack a Isle Aimbot jako undetected balíček pro The Isle na Windows PC. Funkce.",
					imageAlt: "The Isle Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funkce",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "Koupit The Isle Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funkce",
							paragraphs: [
								"The Isle Hacks spojuje ESP wallhack, radar hack a Isle Aimbot jako undetected balíček pro The Isle na Windows PC. ESP, soft aim, ovládání radar.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@theislehack.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				pricing: {
					title: "Ceny | Monthly & Lifetime",
					description: "Ceny: licence $35 měsíčně nebo $150 lifetime. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Ceny",
					intro: "The Isle Hacks spojuje ESP wallhack, radar hack a Isle Aimbot jako undetected balíček pro The Isle na Windows PC. Ceny.",
					imageAlt: "The Isle Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Ceny",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "Koupit The Isle Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Ceny",
							paragraphs: [
								"The Isle Hacks spojuje ESP wallhack, radar hack a Isle Aimbot jako undetected balíček pro The Isle na Windows PC. licence $35 měsíčně nebo $150 lifetime.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@theislehack.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				setup: {
					title: "Instalace | PC Setup Guide",
					description: "Instalace: aktivace Windows PC a nastavení prvního spuštění. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Instalace",
					intro: "The Isle Hacks spojuje ESP wallhack, radar hack a Isle Aimbot jako undetected balíček pro The Isle na Windows PC. Instalace.",
					imageAlt: "The Isle Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Instalace",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "Koupit The Isle Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalace",
							paragraphs: [
								"The Isle Hacks spojuje ESP wallhack, radar hack a Isle Aimbot jako undetected balíček pro The Isle na Windows PC. aktivace Windows PC a nastavení prvního spuštění.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@theislehack.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				updates: {
					title: "Aktualizace | Easy Anti-Cheat Maintenance Log",
					description: "Aktualizace: stav patchů Easy Anti-Cheat a poznámky k rebuild. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Aktualizace",
					intro: "The Isle Hacks spojuje ESP wallhack, radar hack a Isle Aimbot jako undetected balíček pro The Isle na Windows PC. Aktualizace.",
					imageAlt: "The Isle Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Aktualizace",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "Koupit The Isle Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "Aktualizace",
							paragraphs: [
								"The Isle Hacks spojuje ESP wallhack, radar hack a Isle Aimbot jako undetected balíček pro The Isle na Windows PC. stav patchů Easy Anti-Cheat a poznámky k rebuild.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@theislehack.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: otázky k ESP, soft aim, doručení a Easy Anti-Cheat. okamžité digitální doručení. undetected — Windows PC.",
					h1: "FAQ",
					intro: "The Isle Hacks spojuje ESP wallhack, radar hack a Isle Aimbot jako undetected balíček pro The Isle na Windows PC. FAQ.",
					imageAlt: "The Isle Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "Koupit The Isle Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"The Isle Hacks spojuje ESP wallhack, radar hack a Isle Aimbot jako undetected balíček pro The Isle na Windows PC. otázky k ESP, soft aim, doručení a Easy Anti-Cheat.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@theislehack.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				support: {
					title: "Podpora | Help & Contact",
					description: "Podpora: pomoc s objednávkou a kontakt podpory licencí. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Podpora",
					intro: "The Isle Hacks spojuje ESP wallhack, radar hack a Isle Aimbot jako undetected balíček pro The Isle na Windows PC. Podpora.",
					imageAlt: "The Isle Hacks support page for license and setup help",
					galleryTitle: "Podpora",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "Koupit The Isle Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Podpora",
							paragraphs: [
								"The Isle Hacks spojuje ESP wallhack, radar hack a Isle Aimbot jako undetected balíček pro The Isle na Windows PC. pomoc s objednávkou a kontakt podpory licencí.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@theislehack.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected cheaty | Easy Anti-Cheat Safe Status",
					description: "Undetected cheaty: undetected údržba po patchech Easy Anti-Cheat. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Undetected cheaty",
					intro: "The Isle Hacks spojuje ESP wallhack, radar hack a Isle Aimbot jako undetected balíček pro The Isle na Windows PC. Undetected cheaty.",
					imageAlt: "The Isle Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected cheaty",
					heroImage: "/images/isle-hacks-wallhack.webp",
					ctaPrimary: "Koupit The Isle Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "Undetected cheaty",
							paragraphs: [
								"The Isle Hacks spojuje ESP wallhack, radar hack a Isle Aimbot jako undetected balíček pro The Isle na Windows PC. undetected údržba po patchech Easy Anti-Cheat.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@theislehack.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				wallhack: {
					title: "The Isle Wallhack | ESP Visibility",
					description: "The Isle Wallhack: wallhack ESP pro hráče, kadávery a vzdálenost. okamžité digitální doručení. undetected — Windows PC.",
					h1: "The Isle Wallhack",
					intro: "The Isle Hacks spojuje ESP wallhack, radar hack a Isle Aimbot jako undetected balíček pro The Isle na Windows PC. The Isle Wallhack.",
					imageAlt: "isle wallhack visibility through walls in a session",
					galleryTitle: "The Isle Wallhack",
					heroImage: "/images/isle-hacks-wallhack.webp",
					ctaPrimary: "Koupit The Isle Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "The Isle Wallhack",
							paragraphs: [
								"The Isle Hacks spojuje ESP wallhack, radar hack a Isle Aimbot jako undetected balíček pro The Isle na Windows PC. wallhack ESP pro hráče, kadávery a vzdálenost.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@theislehack.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar signály pro flanly a rotace. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "The Isle Hacks spojuje ESP wallhack, radar hack a Isle Aimbot jako undetected balíček pro The Isle na Windows PC. Radar Hack.",
					imageAlt: "The Isle 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "Koupit The Isle Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"The Isle Hacks spojuje ESP wallhack, radar hack a Isle Aimbot jako undetected balíček pro The Isle na Windows PC. 2D radar signály pro flanly a rotace.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@theislehack.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				eac: {
					title: "Easy Anti-Cheat Bypass | Patch Maintenance",
					description: "Easy Anti-Cheat Bypass: jak se řeší aktualizace Easy Anti-Cheat pro The Isle hacks. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Easy Anti-Cheat Bypass",
					intro: "The Isle Hacks spojuje ESP wallhack, radar hack a Isle Aimbot jako undetected balíček pro The Isle na Windows PC. Easy Anti-Cheat Bypass.",
					imageAlt: "The Isle Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Easy Anti-Cheat Bypass",
					heroImage: "/images/isle-hacks-aimbot.webp",
					ctaPrimary: "Koupit The Isle Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Easy Anti-Cheat Bypass",
							paragraphs: [
								"The Isle Hacks spojuje ESP wallhack, radar hack a Isle Aimbot jako undetected balíček pro The Isle na Windows PC. jak se řeší aktualizace Easy Anti-Cheat pro The Isle hacks.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@theislehack.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "the isle hacky 2026 | Buyer Guide",
					description: "the isle hacky 2026: checklist the isle hacks 2026 před checkout. okamžité digitální doručení. undetected — Windows PC.",
					h1: "the isle hacky 2026",
					intro: "The Isle Hacks spojuje ESP wallhack, radar hack a Isle Aimbot jako undetected balíček pro The Isle na Windows PC. the isle hacky 2026.",
					imageAlt: "The Isle Hacks product overview for The Isle",
					galleryTitle: "the isle hacky 2026",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "Koupit The Isle Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "the isle hacky 2026",
							paragraphs: [
								"The Isle Hacks spojuje ESP wallhack, radar hack a Isle Aimbot jako undetected balíček pro The Isle na Windows PC. checklist the isle hacks 2026 před checkout.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@theislehack.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				hacks: {
					title: "the isle hacky | ESP Aimbot Guide",
					description: "the isle hacky: pilíř The Isle Hacks pro ESP a Aimbot. okamžité digitální doručení. undetected — Windows PC.",
					h1: "the isle hacky",
					intro: "The Isle Hacks spojuje ESP wallhack, radar hack a Isle Aimbot jako undetected balíček pro The Isle na Windows PC. the isle hacky.",
					imageAlt: "The Isle Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "the isle hacky",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "Koupit The Isle Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "the isle hacky",
							paragraphs: [
								"The Isle Hacks spojuje ESP wallhack, radar hack a Isle Aimbot jako undetected balíček pro The Isle na Windows PC. pilíř The Isle Hacks pro ESP a Aimbot.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@theislehack.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Stáhnout The Isle Hacks | Instant Access",
					description: "Stáhnout The Isle Hacks: digitální stažení licence po platbě. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Stáhnout The Isle Hacks",
					intro: "The Isle Hacks spojuje ESP wallhack, radar hack a Isle Aimbot jako undetected balíček pro The Isle na Windows PC. Stáhnout The Isle Hacks.",
					imageAlt: "The Isle Hacks download and install delivery flow",
					galleryTitle: "Stáhnout The Isle Hacks",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "Koupit The Isle Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Stáhnout The Isle Hacks",
							paragraphs: [
								"The Isle Hacks spojuje ESP wallhack, radar hack a Isle Aimbot jako undetected balíček pro The Isle na Windows PC. digitální stažení licence po platbě.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@theislehack.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				"mod-menu": {
					title: "The Isle mod menu | In-Game Toggles",
					description: "The Isle mod menu: přepínače ESP a soft aim v klientu. okamžité digitální doručení. undetected — Windows PC.",
					h1: "The Isle mod menu",
					intro: "The Isle Hacks spojuje ESP wallhack, radar hack a Isle Aimbot jako undetected balíček pro The Isle na Windows PC. The Isle mod menu.",
					imageAlt: "The Isle Hacks in-game menu controls",
					galleryTitle: "The Isle mod menu",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "Koupit The Isle Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "The Isle mod menu",
							paragraphs: [
								"The Isle Hacks spojuje ESP wallhack, radar hack a Isle Aimbot jako undetected balíček pro The Isle na Windows PC. přepínače ESP a soft aim v klientu.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@theislehack.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				"soft-aim": {
					title: "The Isle Soft Aim | Smooth Aim Settings",
					description: "The Isle Soft Aim: plynulé nastavení soft aim pro Windows PC. okamžité digitální doručení. undetected — Windows PC.",
					h1: "The Isle Soft Aim",
					intro: "The Isle Hacks spojuje ESP wallhack, radar hack a Isle Aimbot jako undetected balíček pro The Isle na Windows PC. The Isle Soft Aim.",
					imageAlt: "The Isle soft aim FOV and smoothness settings",
					galleryTitle: "The Isle Soft Aim",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "Koupit The Isle Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/isle-aimbot/",
					sections: [
						{
							h2: "The Isle Soft Aim",
							paragraphs: [
								"The Isle Hacks spojuje ESP wallhack, radar hack a Isle Aimbot jako undetected balíček pro The Isle na Windows PC. plynulé nastavení soft aim pro Windows PC.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@theislehack.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Nejlepší the isle hacky | Buyer Checklist",
					description: "Nejlepší the isle hacky: co porovnat před nákupem the isle hacks. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Nejlepší the isle hacky",
					intro: "The Isle Hacks spojuje ESP wallhack, radar hack a Isle Aimbot jako undetected balíček pro The Isle na Windows PC. Nejlepší the isle hacky.",
					imageAlt: "The Isle Hacks overview for The Isle on PC",
					galleryTitle: "Nejlepší the isle hacky",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "Koupit The Isle Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Nejlepší the isle hacky",
							paragraphs: [
								"The Isle Hacks spojuje ESP wallhack, radar hack a Isle Aimbot jako undetected balíček pro The Isle na Windows PC. co porovnat před nákupem the isle hacks.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@theislehack.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Isle Aimbot hack | Soft Aim Assist",
					description: "Isle Aimbot hack: undetected Aimbot hack assist pro The Isle. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Isle Aimbot hack",
					intro: "The Isle Hacks spojuje ESP wallhack, radar hack a Isle Aimbot jako undetected balíček pro The Isle na Windows PC. Isle Aimbot hack.",
					imageAlt: "Isle Aimbot hack controls and bone priority",
					galleryTitle: "Isle Aimbot hack",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "Koupit The Isle Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/isle-aimbot/",
					sections: [
						{
							h2: "Isle Aimbot hack",
							paragraphs: [
								"The Isle Hacks spojuje ESP wallhack, radar hack a Isle Aimbot jako undetected balíček pro The Isle na Windows PC. undetected Aimbot hack assist pro The Isle.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@theislehack.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Isle ESP hack | Boxes & Loot",
					description: "Isle ESP hack: ESP hack boxy, piny kadáverů a vzdálenost. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Isle ESP hack",
					intro: "The Isle Hacks spojuje ESP wallhack, radar hack a Isle Aimbot jako undetected balíček pro The Isle na Windows PC. Isle ESP hack.",
					imageAlt: "Isle ESP hack boxes and carcass markers",
					galleryTitle: "Isle ESP hack",
					heroImage: "/images/isle-hacks-wallhack.webp",
					ctaPrimary: "Koupit The Isle Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "Isle ESP hack",
							paragraphs: [
								"The Isle Hacks spojuje ESP wallhack, radar hack a Isle Aimbot jako undetected balíček pro The Isle na Windows PC. ESP hack boxy, piny kadáverů a vzdálenost.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@theislehack.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				"unlock-all": {
					title: "The Isle Unlock All | What It Means",
					description: "The Isle Unlock All: vyhledávání unlock-all vs skutečné ESP a Aimbot nástroje. okamžité digitální doručení. undetected — Windows PC.",
					h1: "The Isle Unlock All",
					intro: "The Isle Hacks spojuje ESP wallhack, radar hack a Isle Aimbot jako undetected balíček pro The Isle na Windows PC. The Isle Unlock All.",
					imageAlt: "The Isle Hacks license features overview",
					galleryTitle: "The Isle Unlock All",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "Koupit The Isle Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "The Isle Unlock All",
							paragraphs: [
								"The Isle Hacks spojuje ESP wallhack, radar hack a Isle Aimbot jako undetected balíček pro The Isle na Windows PC. vyhledávání unlock-all vs skutečné ESP a Aimbot nástroje.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@theislehack.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				privacy: {
					title: "Zásady ochrany soukromí | The Isle Hacks",
					description: "Zásady ochrany soukromí pro The Isle Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Zásady ochrany soukromí",
					intro: "The Isle Hacks spojuje ESP wallhack, radar hack a Isle Aimbot jako undetected balíček pro The Isle na Windows PC. Zásady ochrany soukromí pro theislehack.org a licence The Isle.",
					imageAlt: "The Isle Hacks",
					galleryTitle: "The Isle Hacks",
					heroImage: "/images/isle-hacks-aimbot.webp",
					ctaPrimary: "E-mail podpoře",
					ctaSecondary: "Přečíst podmínky",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Informace, které shromažďujeme",
							paragraphs: [
								"The Isle Hacks spojuje ESP wallhack, radar hack a Isle Aimbot jako undetected balíček pro The Isle na Windows PC. Kontaktní e-mail, reference objednávek Zadeyo a základní bezpečnostní data webu.",
								"Platební údaje zpracovává checkout Zadeyo — neukládají se na theislehack.org.",
							],
						},
						{
							h2: "Jak používáme data",
							paragraphs: [
								"The Isle Hacks spojuje ESP wallhack, radar hack a Isle Aimbot jako undetected balíček pro The Isle na Windows PC. Odpovědi podpory, vyřizování objednávek a právní soulad v případě potřeby.",
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
							],
						},
						{
							h2: "Vaše práva",
							paragraphs: [
								"support@theislehack.org pro podporu a právní dotazy.",
								"E-mail: support@theislehack.org",
							],
						},
					],
				},
				refund: {
					title: "Zásady vrácení peněz | The Isle Hacks",
					description: "Zásady vrácení peněz pro The Isle Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Zásady vrácení peněz",
					intro: "The Isle Hacks spojuje ESP wallhack, radar hack a Isle Aimbot jako undetected balíček pro The Isle na Windows PC. Zásady vrácení peněz pro theislehack.org a licence The Isle.",
					imageAlt: "The Isle Hacks",
					galleryTitle: "The Isle Hacks",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "E-mail podpoře",
					ctaSecondary: "Přečíst soukromí",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digitální doručení",
							paragraphs: [
								"The Isle Hacks spojuje ESP wallhack, radar hack a Isle Aimbot jako undetected balíček pro The Isle na Windows PC. Kontaktní e-mail, reference objednávek Zadeyo a základní bezpečnostní data webu.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "Schválení vrácení",
							paragraphs: [
								"The Isle Hacks spojuje ESP wallhack, radar hack a Isle Aimbot jako undetected balíček pro The Isle na Windows PC. Odpovědi podpory, vyřizování objednávek a právní soulad v případě potřeby.",
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
							],
						},
						{
							h2: "Jak požádat",
							paragraphs: [
								"support@theislehack.org pro podporu a právní dotazy.",
								"E-mail: support@theislehack.org",
							],
						},
					],
				},
				terms: {
					title: "Podmínky použití | The Isle Hacks",
					description: "Podmínky použití pro The Isle Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Podmínky použití",
					intro: "The Isle Hacks spojuje ESP wallhack, radar hack a Isle Aimbot jako undetected balíček pro The Isle na Windows PC. Podmínky použití pro theislehack.org a licence The Isle.",
					imageAlt: "The Isle Hacks",
					galleryTitle: "The Isle Hacks",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "E-mail podpoře",
					ctaSecondary: "Přečíst soukromí",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Přijetí podmínek",
							paragraphs: [
								"The Isle Hacks spojuje ESP wallhack, radar hack a Isle Aimbot jako undetected balíček pro The Isle na Windows PC. Kontaktní e-mail, reference objednávek Zadeyo a základní bezpečnostní data webu.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "Upozornění na rizika",
							paragraphs: [
								"The Isle Hacks spojuje ESP wallhack, radar hack a Isle Aimbot jako undetected balíček pro The Isle na Windows PC. Odpovědi podpory, vyřizování objednávek a právní soulad v případě potřeby.",
								"Používání cheatů může porušovat podmínky týmu The Isle — nesete veškeré riziko bana.",
							],
						},
						{
							h2: "Změny zásad",
							paragraphs: [
								"support@theislehack.org pro podporu a právní dotazy.",
								"E-mail: support@theislehack.org",
							],
						},
					],
				},
			},
		},
		ro: {
			ui: {
				nav: {
					home: "Acasă",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funcții",
					pricing: "Prețuri",
					setup: "Instalare",
					updates: "Actualizări",
					faq: "FAQ",
					buyNow: "Cumpără",
				},
				hero: {
					accent: "Cheats The Isle undetected",
					accentShort: "The Isle Hacks",
					subtitle: "ESP wallhack, radar hack și Aimbot pentru The Isle pe PC Windows — mentenanță Easy Anti-Cheat inclusă.",
					subtitleShort: "ESP, radar și Aimbot pentru The Isle PC",
					buyNow: "Cumpără acum",
					seeFeatures: "Vezi funcții",
				},
				trust: {
					status: "Online",
					statusNote: "Pachetul The Isle Hacks este activ pentru The Isle pe PC Windows.",
					statusShort: "Activ",
					delivery: "Livrare digitală instantă",
					platform: "Windows 10 și 11",
					antiCheat: "Mentenanță Easy Anti-Cheat suportată",
					antiCheatShort: "Easy Anti-Cheat suportat",
				},
				product: {
					title: "The Isle Hacks",
					addToCart: "Adaugă în coș",
					monthly: "Lunar",
					lifetime: "Pe viață",
					available: "Disponibil acum",
					gameBadge: "The Isle",
					platformBadge: "Windows PC",
					statusBadge: "Pachet undetected",
				},
				reviews: {
					title: "Ce spun jucătorii",
					subtitle: "Feedback recent de la cumpărătorii The Isle Hacks",
					outOf: "din 5",
					countLabel: "recenzii",
				},
				common: {
					buyNow: "Cumpără acum",
					readGuide: "Citește ghidul",
					language: "Limbă",
					officialLanguageNote: "Engleza este limba oficială. Alte limbi sunt traduse pentru SEO global.",
					relatedPages: "Pagini related",
				},
				footer: {
					explore: "Explorează",
					help: "Ajutor și legal",
					tagline: "ESP, wallhack, radar și Aimbot undetected pentru The Isle — checkout via Zadeyo.",
				},
				images: {
					hero: "The Isle Hacks hero — ESP and aimbot overlay in The Isle",
					espWallhack: "Wallhack outlines showing players and wild dinosaurs through walls",
					aimbotCombat: "Soft aim assist overlay during a The Isle session",
					packFight: "The Isle Hacks combat overlay during a pack fight",
					dinoEsp: "Player ESP boxes and distance readouts in a The Isle session",
					headerArt: "Aimbot view and bone priority controls for The Isle",
					hacksPackage: "2D radar threat overlay for The Isle",
					ambushFight: "Aimbot assist during a The Isle hunt",
					battleRoyale: "The Isle Hacks in-session overview for Windows PC",
					survivalIsland: "ESP markers for carcasses and nests in The Isle",
				},
			},
			pages: {
				home: {
					title: "The Isle Hacks 2026 | ESP, Wallhack și Aimbot",
					description: "Cheats The Isle undetected pentru The Isle pe PC. ESP wallhack, radar hack, Aimbot, mentenanță Easy Anti-Cheat. Livrare digitală instantă.",
					h1: "The Isle Hacks — Undetected ESP, Wallhack și Aimbot",
					intro: "Pachet undetected The Isle pe Windows PC: ESP wallhack, radar, Aimbot cu mentenanță Easy Anti-Cheat.",
					imageAlt: "Isle ESP player tags hack",
					galleryTitle: "Galerie The Isle Hacks — ESP, Aimbot, wallhack",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "Cumpără The Isle Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "De ce The Isle Hacks în 2026",
							paragraphs: [
								"The Isle Hacks combină ESP wallhack, radar hack și Isle Aimbot undetected pentru The Isle pe PC Windows. Ideal pentru citirea pack-urilor inamice în BR și growth run.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar și Aimbot într-o licență",
							paragraphs: [
								"The Isle Hacks combină ESP wallhack, radar hack și Isle Aimbot undetected pentru The Isle pe PC Windows. O licență în loc de instrumente separate.",
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
							],
						},
					],
				},
				"isle-esp": {
					title: "ESP The Isle | Player Boxes & Wallhack",
					description: "ESP The Isle: casete jucător, markere carcase și overlay-uri wallhack. livrare digitală instantă. undetected — PC Windows.",
					h1: "ESP The Isle",
					intro: "The Isle Hacks combină ESP wallhack, radar hack și Isle Aimbot undetected pentru The Isle pe PC Windows. ESP The Isle.",
					imageAlt: "Isle ESP player boxes and distance readouts in a session",
					galleryTitle: "ESP The Isle",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "Cumpără The Isle Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "ESP The Isle",
							paragraphs: [
								"The Isle Hacks combină ESP wallhack, radar hack și Isle Aimbot undetected pentru The Isle pe PC Windows. casete jucător, markere carcase și overlay-uri wallhack.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@theislehack.org pentru suport și legal.",
							],
						},
					],
				},
				"isle-aimbot": {
					title: "Aimbot The Isle | Soft Aim Controls",
					description: "Aimbot The Isle: soft aim, FOV și profile Aimbot pe specie. livrare digitală instantă. undetected — PC Windows.",
					h1: "Aimbot The Isle",
					intro: "The Isle Hacks combină ESP wallhack, radar hack și Isle Aimbot undetected pentru The Isle pe PC Windows. Aimbot The Isle.",
					imageAlt: "Isle Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot The Isle",
					heroImage: "/images/isle-hacks-aimbot.webp",
					ctaPrimary: "Cumpără The Isle Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "Aimbot The Isle",
							paragraphs: [
								"The Isle Hacks combină ESP wallhack, radar hack și Isle Aimbot undetected pentru The Isle pe PC Windows. soft aim, FOV și profile Aimbot pe specie.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@theislehack.org pentru suport și legal.",
							],
						},
					],
				},
				features: {
					title: "Funcții | Full Feature List",
					description: "Funcții: ESP, soft aim, controale radar. livrare digitală instantă. undetected — PC Windows.",
					h1: "Funcții",
					intro: "The Isle Hacks combină ESP wallhack, radar hack și Isle Aimbot undetected pentru The Isle pe PC Windows. Funcții.",
					imageAlt: "The Isle Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funcții",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "Cumpără The Isle Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funcții",
							paragraphs: [
								"The Isle Hacks combină ESP wallhack, radar hack și Isle Aimbot undetected pentru The Isle pe PC Windows. ESP, soft aim, controale radar.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@theislehack.org pentru suport și legal.",
							],
						},
					],
				},
				pricing: {
					title: "Prețuri | Monthly & Lifetime",
					description: "Prețuri: licențe $35 lunar sau $150 lifetime. livrare digitală instantă. undetected — PC Windows.",
					h1: "Prețuri",
					intro: "The Isle Hacks combină ESP wallhack, radar hack și Isle Aimbot undetected pentru The Isle pe PC Windows. Prețuri.",
					imageAlt: "The Isle Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Prețuri",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "Cumpără The Isle Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Prețuri",
							paragraphs: [
								"The Isle Hacks combină ESP wallhack, radar hack și Isle Aimbot undetected pentru The Isle pe PC Windows. licențe $35 lunar sau $150 lifetime.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@theislehack.org pentru suport și legal.",
							],
						},
					],
				},
				setup: {
					title: "Instalare | PC Setup Guide",
					description: "Instalare: activare Windows PC și setup la prima lansare. livrare digitală instantă. undetected — PC Windows.",
					h1: "Instalare",
					intro: "The Isle Hacks combină ESP wallhack, radar hack și Isle Aimbot undetected pentru The Isle pe PC Windows. Instalare.",
					imageAlt: "The Isle Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Instalare",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "Cumpără The Isle Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalare",
							paragraphs: [
								"The Isle Hacks combină ESP wallhack, radar hack și Isle Aimbot undetected pentru The Isle pe PC Windows. activare Windows PC și setup la prima lansare.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@theislehack.org pentru suport și legal.",
							],
						},
					],
				},
				updates: {
					title: "Actualizări | Easy Anti-Cheat Maintenance Log",
					description: "Actualizări: status patch Easy Anti-Cheat și note rebuild. livrare digitală instantă. undetected — PC Windows.",
					h1: "Actualizări",
					intro: "The Isle Hacks combină ESP wallhack, radar hack și Isle Aimbot undetected pentru The Isle pe PC Windows. Actualizări.",
					imageAlt: "The Isle Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Actualizări",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "Cumpără The Isle Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "Actualizări",
							paragraphs: [
								"The Isle Hacks combină ESP wallhack, radar hack și Isle Aimbot undetected pentru The Isle pe PC Windows. status patch Easy Anti-Cheat și note rebuild.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@theislehack.org pentru suport și legal.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: întrebări ESP, soft aim, livrare și Easy Anti-Cheat. livrare digitală instantă. undetected — PC Windows.",
					h1: "FAQ",
					intro: "The Isle Hacks combină ESP wallhack, radar hack și Isle Aimbot undetected pentru The Isle pe PC Windows. FAQ.",
					imageAlt: "The Isle Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "Cumpără The Isle Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"The Isle Hacks combină ESP wallhack, radar hack și Isle Aimbot undetected pentru The Isle pe PC Windows. întrebări ESP, soft aim, livrare și Easy Anti-Cheat.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@theislehack.org pentru suport și legal.",
							],
						},
					],
				},
				support: {
					title: "Suport | Help & Contact",
					description: "Suport: ajutor comenzi și contact suport licențe. livrare digitală instantă. undetected — PC Windows.",
					h1: "Suport",
					intro: "The Isle Hacks combină ESP wallhack, radar hack și Isle Aimbot undetected pentru The Isle pe PC Windows. Suport.",
					imageAlt: "The Isle Hacks support page for license and setup help",
					galleryTitle: "Suport",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "Cumpără The Isle Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Suport",
							paragraphs: [
								"The Isle Hacks combină ESP wallhack, radar hack și Isle Aimbot undetected pentru The Isle pe PC Windows. ajutor comenzi și contact suport licențe.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@theislehack.org pentru suport și legal.",
							],
						},
					],
				},
				undetected: {
					title: "Cheats undetected | Easy Anti-Cheat Safe Status",
					description: "Cheats undetected: mentenanță undetected după patch-uri Easy Anti-Cheat. livrare digitală instantă. undetected — PC Windows.",
					h1: "Cheats undetected",
					intro: "The Isle Hacks combină ESP wallhack, radar hack și Isle Aimbot undetected pentru The Isle pe PC Windows. Cheats undetected.",
					imageAlt: "The Isle Hacks undetected status overview for Windows PC",
					galleryTitle: "Cheats undetected",
					heroImage: "/images/isle-hacks-wallhack.webp",
					ctaPrimary: "Cumpără The Isle Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "Cheats undetected",
							paragraphs: [
								"The Isle Hacks combină ESP wallhack, radar hack și Isle Aimbot undetected pentru The Isle pe PC Windows. mentenanță undetected după patch-uri Easy Anti-Cheat.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@theislehack.org pentru suport și legal.",
							],
						},
					],
				},
				wallhack: {
					title: "The Isle Wallhack | ESP Visibility",
					description: "The Isle Wallhack: wallhack ESP pentru jucători, carcase și distanță. livrare digitală instantă. undetected — PC Windows.",
					h1: "The Isle Wallhack",
					intro: "The Isle Hacks combină ESP wallhack, radar hack și Isle Aimbot undetected pentru The Isle pe PC Windows. The Isle Wallhack.",
					imageAlt: "isle wallhack visibility through walls in a session",
					galleryTitle: "The Isle Wallhack",
					heroImage: "/images/isle-hacks-wallhack.webp",
					ctaPrimary: "Cumpără The Isle Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "The Isle Wallhack",
							paragraphs: [
								"The Isle Hacks combină ESP wallhack, radar hack și Isle Aimbot undetected pentru The Isle pe PC Windows. wallhack ESP pentru jucători, carcase și distanță.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@theislehack.org pentru suport și legal.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: indicii radar 2D pentru flancuri și rotații. livrare digitală instantă. undetected — PC Windows.",
					h1: "Radar hack",
					intro: "The Isle Hacks combină ESP wallhack, radar hack și Isle Aimbot undetected pentru The Isle pe PC Windows. Radar hack.",
					imageAlt: "The Isle 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "Cumpără The Isle Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"The Isle Hacks combină ESP wallhack, radar hack și Isle Aimbot undetected pentru The Isle pe PC Windows. indicii radar 2D pentru flancuri și rotații.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@theislehack.org pentru suport și legal.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Patch Maintenance",
					description: "Bypass Easy Anti-Cheat: cum sunt gestionate actualizările Easy Anti-Cheat pentru The Isle hacks. livrare digitală instantă. undetected — PC Windows.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "The Isle Hacks combină ESP wallhack, radar hack și Isle Aimbot undetected pentru The Isle pe PC Windows. Bypass Easy Anti-Cheat.",
					imageAlt: "The Isle Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/isle-hacks-aimbot.webp",
					ctaPrimary: "Cumpără The Isle Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"The Isle Hacks combină ESP wallhack, radar hack și Isle Aimbot undetected pentru The Isle pe PC Windows. cum sunt gestionate actualizările Easy Anti-Cheat pentru The Isle hacks.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@theislehack.org pentru suport și legal.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheats The Isle 2026 | Buyer Guide",
					description: "Cheats The Isle 2026: checklist the isle hacks 2026 înainte de checkout. livrare digitală instantă. undetected — PC Windows.",
					h1: "Cheats The Isle 2026",
					intro: "The Isle Hacks combină ESP wallhack, radar hack și Isle Aimbot undetected pentru The Isle pe PC Windows. Cheats The Isle 2026.",
					imageAlt: "The Isle Hacks product overview for The Isle",
					galleryTitle: "Cheats The Isle 2026",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "Cumpără The Isle Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "Cheats The Isle 2026",
							paragraphs: [
								"The Isle Hacks combină ESP wallhack, radar hack și Isle Aimbot undetected pentru The Isle pe PC Windows. checklist the isle hacks 2026 înainte de checkout.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@theislehack.org pentru suport și legal.",
							],
						},
					],
				},
				hacks: {
					title: "Cheats The Isle | ESP Aimbot Guide",
					description: "Cheats The Isle: pilon The Isle Hacks pentru ESP și Aimbot. livrare digitală instantă. undetected — PC Windows.",
					h1: "Cheats The Isle",
					intro: "The Isle Hacks combină ESP wallhack, radar hack și Isle Aimbot undetected pentru The Isle pe PC Windows. Cheats The Isle.",
					imageAlt: "The Isle Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Cheats The Isle",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "Cumpără The Isle Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheats The Isle",
							paragraphs: [
								"The Isle Hacks combină ESP wallhack, radar hack și Isle Aimbot undetected pentru The Isle pe PC Windows. pilon The Isle Hacks pentru ESP și Aimbot.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@theislehack.org pentru suport și legal.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Descărcare The Isle Hacks | Instant Access",
					description: "Descărcare The Isle Hacks: descărcare licență digitală după plată. livrare digitală instantă. undetected — PC Windows.",
					h1: "Descărcare The Isle Hacks",
					intro: "The Isle Hacks combină ESP wallhack, radar hack și Isle Aimbot undetected pentru The Isle pe PC Windows. Descărcare The Isle Hacks.",
					imageAlt: "The Isle Hacks download and install delivery flow",
					galleryTitle: "Descărcare The Isle Hacks",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "Cumpără The Isle Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Descărcare The Isle Hacks",
							paragraphs: [
								"The Isle Hacks combină ESP wallhack, radar hack și Isle Aimbot undetected pentru The Isle pe PC Windows. descărcare licență digitală după plată.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@theislehack.org pentru suport și legal.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Meniu mod The Isle | In-Game Toggles",
					description: "Meniu mod The Isle: toggle-uri ESP și soft aim in-client. livrare digitală instantă. undetected — PC Windows.",
					h1: "Meniu mod The Isle",
					intro: "The Isle Hacks combină ESP wallhack, radar hack și Isle Aimbot undetected pentru The Isle pe PC Windows. Meniu mod The Isle.",
					imageAlt: "The Isle Hacks in-game menu controls",
					galleryTitle: "Meniu mod The Isle",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "Cumpără The Isle Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Meniu mod The Isle",
							paragraphs: [
								"The Isle Hacks combină ESP wallhack, radar hack și Isle Aimbot undetected pentru The Isle pe PC Windows. toggle-uri ESP și soft aim in-client.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@theislehack.org pentru suport și legal.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim The Isle | Smooth Aim Settings",
					description: "Soft aim The Isle: setări soft aim fluide pentru Windows PC. livrare digitală instantă. undetected — PC Windows.",
					h1: "Soft aim The Isle",
					intro: "The Isle Hacks combină ESP wallhack, radar hack și Isle Aimbot undetected pentru The Isle pe PC Windows. Soft aim The Isle.",
					imageAlt: "The Isle soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim The Isle",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "Cumpără The Isle Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/isle-aimbot/",
					sections: [
						{
							h2: "Soft aim The Isle",
							paragraphs: [
								"The Isle Hacks combină ESP wallhack, radar hack și Isle Aimbot undetected pentru The Isle pe PC Windows. setări soft aim fluide pentru Windows PC.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@theislehack.org pentru suport și legal.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Cele mai bune cheats The Isle | Buyer Checklist",
					description: "Cele mai bune cheats The Isle: ce să compari înainte de a cumpăra the isle hacks. livrare digitală instantă. undetected — PC Windows.",
					h1: "Cele mai bune cheats The Isle",
					intro: "The Isle Hacks combină ESP wallhack, radar hack și Isle Aimbot undetected pentru The Isle pe PC Windows. Cele mai bune cheats The Isle.",
					imageAlt: "The Isle Hacks overview for The Isle on PC",
					galleryTitle: "Cele mai bune cheats The Isle",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "Cumpără The Isle Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Cele mai bune cheats The Isle",
							paragraphs: [
								"The Isle Hacks combină ESP wallhack, radar hack și Isle Aimbot undetected pentru The Isle pe PC Windows. ce să compari înainte de a cumpăra the isle hacks.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@theislehack.org pentru suport și legal.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot The Isle | Soft Aim Assist",
					description: "Hack aimbot The Isle: assist hack Aimbot undetected pentru The Isle. livrare digitală instantă. undetected — PC Windows.",
					h1: "Hack aimbot The Isle",
					intro: "The Isle Hacks combină ESP wallhack, radar hack și Isle Aimbot undetected pentru The Isle pe PC Windows. Hack aimbot The Isle.",
					imageAlt: "Isle Aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot The Isle",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "Cumpără The Isle Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/isle-aimbot/",
					sections: [
						{
							h2: "Hack aimbot The Isle",
							paragraphs: [
								"The Isle Hacks combină ESP wallhack, radar hack și Isle Aimbot undetected pentru The Isle pe PC Windows. assist hack Aimbot undetected pentru The Isle.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@theislehack.org pentru suport și legal.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP The Isle | Boxes & Loot",
					description: "Hack ESP The Isle: casete ESP hack, pin-uri carcase și distanță. livrare digitală instantă. undetected — PC Windows.",
					h1: "Hack ESP The Isle",
					intro: "The Isle Hacks combină ESP wallhack, radar hack și Isle Aimbot undetected pentru The Isle pe PC Windows. Hack ESP The Isle.",
					imageAlt: "Isle ESP hack boxes and carcass markers",
					galleryTitle: "Hack ESP The Isle",
					heroImage: "/images/isle-hacks-wallhack.webp",
					ctaPrimary: "Cumpără The Isle Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "Hack ESP The Isle",
							paragraphs: [
								"The Isle Hacks combină ESP wallhack, radar hack și Isle Aimbot undetected pentru The Isle pe PC Windows. casete ESP hack, pin-uri carcase și distanță.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@theislehack.org pentru suport și legal.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all The Isle | What It Means",
					description: "Unlock all The Isle: căutări unlock-all vs instrumente reale ESP și Aimbot. livrare digitală instantă. undetected — PC Windows.",
					h1: "Unlock all The Isle",
					intro: "The Isle Hacks combină ESP wallhack, radar hack și Isle Aimbot undetected pentru The Isle pe PC Windows. Unlock all The Isle.",
					imageAlt: "The Isle Hacks license features overview",
					galleryTitle: "Unlock all The Isle",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "Cumpără The Isle Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all The Isle",
							paragraphs: [
								"The Isle Hacks combină ESP wallhack, radar hack și Isle Aimbot undetected pentru The Isle pe PC Windows. căutări unlock-all vs instrumente reale ESP și Aimbot.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@theislehack.org pentru suport și legal.",
							],
						},
					],
				},
				privacy: {
					title: "Politica de confidențialitate | The Isle Hacks",
					description: "Politica de confidențialitate pentru The Isle Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politica de confidențialitate",
					intro: "The Isle Hacks combină ESP wallhack, radar hack și Isle Aimbot undetected pentru The Isle pe PC Windows. Politica de confidențialitate pentru theislehack.org și licențe The Isle.",
					imageAlt: "The Isle Hacks",
					galleryTitle: "The Isle Hacks",
					heroImage: "/images/isle-hacks-aimbot.webp",
					ctaPrimary: "Email suport",
					ctaSecondary: "Citește termenii",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Informații pe care le colectăm",
							paragraphs: [
								"The Isle Hacks combină ESP wallhack, radar hack și Isle Aimbot undetected pentru The Isle pe PC Windows. Email de contact, referințe comenzi Zadeyo și date de securitate de bază ale site-ului.",
								"Detaliile de plată sunt procesate prin checkout Zadeyo — nu sunt stocate pe theislehack.org.",
							],
						},
						{
							h2: "Cum folosim datele",
							paragraphs: [
								"The Isle Hacks combină ESP wallhack, radar hack și Isle Aimbot undetected pentru The Isle pe PC Windows. Răspunsuri suport, rezolvarea comenzilor și conformitate legală când este necesar.",
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
							],
						},
						{
							h2: "Drepturile tale",
							paragraphs: [
								"support@theislehack.org pentru suport și legal.",
								"Email: support@theislehack.org",
							],
						},
					],
				},
				refund: {
					title: "Politica de rambursare | The Isle Hacks",
					description: "Politica de rambursare pentru The Isle Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politica de rambursare",
					intro: "The Isle Hacks combină ESP wallhack, radar hack și Isle Aimbot undetected pentru The Isle pe PC Windows. Politica de rambursare pentru theislehack.org și licențe The Isle.",
					imageAlt: "The Isle Hacks",
					galleryTitle: "The Isle Hacks",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "Email suport",
					ctaSecondary: "Citește confidențialitatea",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Livrare digitală",
							paragraphs: [
								"The Isle Hacks combină ESP wallhack, radar hack și Isle Aimbot undetected pentru The Isle pe PC Windows. Email de contact, referințe comenzi Zadeyo și date de securitate de bază ale site-ului.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "Aprobare rambursare",
							paragraphs: [
								"The Isle Hacks combină ESP wallhack, radar hack și Isle Aimbot undetected pentru The Isle pe PC Windows. Răspunsuri suport, rezolvarea comenzilor și conformitate legală când este necesar.",
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
							],
						},
						{
							h2: "Cum să soliciți",
							paragraphs: [
								"support@theislehack.org pentru suport și legal.",
								"Email: support@theislehack.org",
							],
						},
					],
				},
				terms: {
					title: "Termeni de utilizare | The Isle Hacks",
					description: "Termeni de utilizare pentru The Isle Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Termeni de utilizare",
					intro: "The Isle Hacks combină ESP wallhack, radar hack și Isle Aimbot undetected pentru The Isle pe PC Windows. Termeni de utilizare pentru theislehack.org și licențe The Isle.",
					imageAlt: "The Isle Hacks",
					galleryTitle: "The Isle Hacks",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "Email suport",
					ctaSecondary: "Citește confidențialitatea",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptarea termenilor",
							paragraphs: [
								"The Isle Hacks combină ESP wallhack, radar hack și Isle Aimbot undetected pentru The Isle pe PC Windows. Email de contact, referințe comenzi Zadeyo și date de securitate de bază ale site-ului.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "Declinare responsabilitate",
							paragraphs: [
								"The Isle Hacks combină ESP wallhack, radar hack și Isle Aimbot undetected pentru The Isle pe PC Windows. Răspunsuri suport, rezolvarea comenzilor și conformitate legală când este necesar.",
								"Folosirea cheat-urilor poate încălca termenii echipei The Isle — îți asumi tot riscul de ban.",
							],
						},
						{
							h2: "Modificări de politică",
							paragraphs: [
								"support@theislehack.org pentru suport și legal.",
								"Email: support@theislehack.org",
							],
						},
					],
				},
			},
		},
		sv: {
			ui: {
				nav: {
					home: "Hem",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funktioner",
					pricing: "Priser",
					setup: "Installation",
					updates: "Uppdateringar",
					faq: "FAQ",
					buyNow: "Köp nu",
				},
				hero: {
					accent: "Undetected the isle hacks",
					accentShort: "The Isle Hacks",
					subtitle: "ESP wallhack, radar hack och Aimbot för The Isle på Windows PC — Easy Anti-Cheat-underhåll ingår.",
					subtitleShort: "ESP, radar & Aimbot för The Isle PC",
					buyNow: "Köp nu",
					seeFeatures: "Se funktioner",
				},
				trust: {
					status: "Online",
					statusNote: "The Isle Hacks-paketet är live för The Isle på Windows PC.",
					statusShort: "Live",
					delivery: "Omedelbar digital leverans",
					platform: "Windows 10 & 11",
					antiCheat: "Easy Anti-Cheat-underhåll stöds",
					antiCheatShort: "Easy Anti-Cheat stöd",
				},
				product: {
					title: "The Isle Hacks",
					addToCart: "Lägg i varukorg",
					monthly: "Månadsvis",
					lifetime: "Lifetime",
					available: "Tillgänglig nu",
					gameBadge: "The Isle",
					platformBadge: "Windows PC",
					statusBadge: "Undetected paket",
				},
				reviews: {
					title: "Vad spelare säger",
					subtitle: "Senaste feedback från The Isle Hacks-köpare",
					outOf: "av 5",
					countLabel: "recensioner",
				},
				common: {
					buyNow: "Köp nu",
					readGuide: "Läs guide",
					language: "Språk",
					officialLanguageNote: "Engelska är det officiella språket. Andra språk är översatta för global SEO.",
					relatedPages: "Relaterade sidor",
				},
				footer: {
					explore: "Utforska",
					help: "Hjälp & juridik",
					tagline: "Undetected ESP, wallhack, radar och Aimbot för The Isle — checkout via Zadeyo.",
				},
				images: {
					hero: "The Isle Hacks hero — ESP and aimbot overlay in The Isle",
					espWallhack: "Wallhack outlines showing players and wild dinosaurs through walls",
					aimbotCombat: "Soft aim assist overlay during a The Isle session",
					packFight: "The Isle Hacks combat overlay during a pack fight",
					dinoEsp: "Player ESP boxes and distance readouts in a The Isle session",
					headerArt: "Aimbot view and bone priority controls for The Isle",
					hacksPackage: "2D radar threat overlay for The Isle",
					ambushFight: "Aimbot assist during a The Isle hunt",
					battleRoyale: "The Isle Hacks in-session overview for Windows PC",
					survivalIsland: "ESP markers for carcasses and nests in The Isle",
				},
			},
			pages: {
				home: {
					title: "The Isle Hacks 2026 | ESP, Wallhack & Aimbot",
					description: "Undetected the isle hacks för The Isle på PC. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat-underhåll. Omedelbar digital leverans.",
					h1: "The Isle Hacks — Undetected ESP, Wallhack & Aimbot",
					intro: "Undetected paket för The Isle på Windows PC: ESP wallhack, radar, Aimbot med Easy Anti-Cheat-underhåll.",
					imageAlt: "Isle ESP player tags hack",
					galleryTitle: "The Isle Hacks galleri — ESP, Aimbot, wallhack",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "Köp The Isle Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Varför The Isle Hacks 2026",
							paragraphs: [
								"The Isle Hacks kombinerar ESP wallhack, radar hack och Isle Aimbot som undetected paket för The Isle på Windows PC. Ideal för att läsa fiendepacks i BR och growth run.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "ESP wallhack, radar och Aimbot i en licens",
							paragraphs: [
								"The Isle Hacks kombinerar ESP wallhack, radar hack och Isle Aimbot som undetected paket för The Isle på Windows PC. En licens istället för separata verktyg.",
								"Kontrollera Updates isleer Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
							],
						},
					],
				},
				"isle-esp": {
					title: "Isle ESP | Player Boxes & Wallhack",
					description: "Isle ESP: spelarboxar, kadavermarkörer och wallhack-overlays. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Isle ESP",
					intro: "The Isle Hacks kombinerar ESP wallhack, radar hack och Isle Aimbot som undetected paket för The Isle på Windows PC. Isle ESP.",
					imageAlt: "Isle ESP player boxes and distance readouts in a session",
					galleryTitle: "Isle ESP",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "Köp The Isle Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "Isle ESP",
							paragraphs: [
								"The Isle Hacks kombinerar ESP wallhack, radar hack och Isle Aimbot som undetected paket för The Isle på Windows PC. spelarboxar, kadavermarkörer och wallhack-overlays.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates isleer Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@theislehack.org för support och juridik.",
							],
						},
					],
				},
				"isle-aimbot": {
					title: "Isle Aimbot | Soft Aim Controls",
					description: "Isle Aimbot: soft aim, FOV och Aimbot-profiler per art. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Isle Aimbot",
					intro: "The Isle Hacks kombinerar ESP wallhack, radar hack och Isle Aimbot som undetected paket för The Isle på Windows PC. Isle Aimbot.",
					imageAlt: "Isle Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Isle Aimbot",
					heroImage: "/images/isle-hacks-aimbot.webp",
					ctaPrimary: "Köp The Isle Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "Isle Aimbot",
							paragraphs: [
								"The Isle Hacks kombinerar ESP wallhack, radar hack och Isle Aimbot som undetected paket för The Isle på Windows PC. soft aim, FOV och Aimbot-profiler per art.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates isleer Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@theislehack.org för support och juridik.",
							],
						},
					],
				},
				features: {
					title: "Funktioner | Full Feature List",
					description: "Funktioner: ESP, soft aim, radar-kontroller. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Funktioner",
					intro: "The Isle Hacks kombinerar ESP wallhack, radar hack och Isle Aimbot som undetected paket för The Isle på Windows PC. Funktioner.",
					imageAlt: "The Isle Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funktioner",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "Köp The Isle Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funktioner",
							paragraphs: [
								"The Isle Hacks kombinerar ESP wallhack, radar hack och Isle Aimbot som undetected paket för The Isle på Windows PC. ESP, soft aim, radar-kontroller.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates isleer Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@theislehack.org för support och juridik.",
							],
						},
					],
				},
				pricing: {
					title: "Priser | Monthly & Lifetime",
					description: "Priser: $35 månatliga eller $150 lifetime-licenser. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Priser",
					intro: "The Isle Hacks kombinerar ESP wallhack, radar hack och Isle Aimbot som undetected paket för The Isle på Windows PC. Priser.",
					imageAlt: "The Isle Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Priser",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "Köp The Isle Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Priser",
							paragraphs: [
								"The Isle Hacks kombinerar ESP wallhack, radar hack och Isle Aimbot som undetected paket för The Isle på Windows PC. $35 månatliga eller $150 lifetime-licenser.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates isleer Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@theislehack.org för support och juridik.",
							],
						},
					],
				},
				setup: {
					title: "Installation | PC Setup Guide",
					description: "Installation: Windows PC-aktivering och första-start setup. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Installation",
					intro: "The Isle Hacks kombinerar ESP wallhack, radar hack och Isle Aimbot som undetected paket för The Isle på Windows PC. Installation.",
					imageAlt: "The Isle Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Installation",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "Köp The Isle Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Installation",
							paragraphs: [
								"The Isle Hacks kombinerar ESP wallhack, radar hack och Isle Aimbot som undetected paket för The Isle på Windows PC. Windows PC-aktivering och första-start setup.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates isleer Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@theislehack.org för support och juridik.",
							],
						},
					],
				},
				updates: {
					title: "Uppdateringar | Easy Anti-Cheat Maintenance Log",
					description: "Uppdateringar: Easy Anti-Cheat patchstatus och rebuild-anteckningar. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Uppdateringar",
					intro: "The Isle Hacks kombinerar ESP wallhack, radar hack och Isle Aimbot som undetected paket för The Isle på Windows PC. Uppdateringar.",
					imageAlt: "The Isle Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Uppdateringar",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "Köp The Isle Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "Uppdateringar",
							paragraphs: [
								"The Isle Hacks kombinerar ESP wallhack, radar hack och Isle Aimbot som undetected paket för The Isle på Windows PC. Easy Anti-Cheat patchstatus och rebuild-anteckningar.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates isleer Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@theislehack.org för support och juridik.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: frågor om ESP, soft aim, leverans och Easy Anti-Cheat. omedelbar digital leverans. undetected — Windows PC.",
					h1: "FAQ",
					intro: "The Isle Hacks kombinerar ESP wallhack, radar hack och Isle Aimbot som undetected paket för The Isle på Windows PC. FAQ.",
					imageAlt: "The Isle Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "Köp The Isle Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"The Isle Hacks kombinerar ESP wallhack, radar hack och Isle Aimbot som undetected paket för The Isle på Windows PC. frågor om ESP, soft aim, leverans och Easy Anti-Cheat.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates isleer Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@theislehack.org för support och juridik.",
							],
						},
					],
				},
				support: {
					title: "Support | Help & Contact",
					description: "Support: orderhjälp och licens support-kontakt. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Support",
					intro: "The Isle Hacks kombinerar ESP wallhack, radar hack och Isle Aimbot som undetected paket för The Isle på Windows PC. Support.",
					imageAlt: "The Isle Hacks support page for license and setup help",
					galleryTitle: "Support",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "Köp The Isle Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Support",
							paragraphs: [
								"The Isle Hacks kombinerar ESP wallhack, radar hack och Isle Aimbot som undetected paket för The Isle på Windows PC. orderhjälp och licens support-kontakt.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates isleer Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@theislehack.org för support och juridik.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected cheats | Easy Anti-Cheat Safe Status",
					description: "Undetected cheats: undetected underhåll efter Easy Anti-Cheat patchar. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Undetected cheats",
					intro: "The Isle Hacks kombinerar ESP wallhack, radar hack och Isle Aimbot som undetected paket för The Isle på Windows PC. Undetected cheats.",
					imageAlt: "The Isle Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected cheats",
					heroImage: "/images/isle-hacks-wallhack.webp",
					ctaPrimary: "Köp The Isle Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "Undetected cheats",
							paragraphs: [
								"The Isle Hacks kombinerar ESP wallhack, radar hack och Isle Aimbot som undetected paket för The Isle på Windows PC. undetected underhåll efter Easy Anti-Cheat patchar.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates isleer Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@theislehack.org för support och juridik.",
							],
						},
					],
				},
				wallhack: {
					title: "The Isle Wallhack | ESP Visibility",
					description: "The Isle Wallhack: wallhack ESP för spelare, kadaver och avstånd. omedelbar digital leverans. undetected — Windows PC.",
					h1: "The Isle Wallhack",
					intro: "The Isle Hacks kombinerar ESP wallhack, radar hack och Isle Aimbot som undetected paket för The Isle på Windows PC. The Isle Wallhack.",
					imageAlt: "isle wallhack visibility through walls in a session",
					galleryTitle: "The Isle Wallhack",
					heroImage: "/images/isle-hacks-wallhack.webp",
					ctaPrimary: "Köp The Isle Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "The Isle Wallhack",
							paragraphs: [
								"The Isle Hacks kombinerar ESP wallhack, radar hack och Isle Aimbot som undetected paket för The Isle på Windows PC. wallhack ESP för spelare, kadaver och avstånd.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates isleer Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@theislehack.org för support och juridik.",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar-signaler för flanker och rotationer. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "The Isle Hacks kombinerar ESP wallhack, radar hack och Isle Aimbot som undetected paket för The Isle på Windows PC. Radar Hack.",
					imageAlt: "The Isle 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "Köp The Isle Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"The Isle Hacks kombinerar ESP wallhack, radar hack och Isle Aimbot som undetected paket för The Isle på Windows PC. 2D radar-signaler för flanker och rotationer.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates isleer Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@theislehack.org för support och juridik.",
							],
						},
					],
				},
				eac: {
					title: "Easy Anti-Cheat Bypass | Patch Maintenance",
					description: "Easy Anti-Cheat Bypass: hur Easy Anti-Cheat-uppdateringar hanteras för The Isle hacks. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Easy Anti-Cheat Bypass",
					intro: "The Isle Hacks kombinerar ESP wallhack, radar hack och Isle Aimbot som undetected paket för The Isle på Windows PC. Easy Anti-Cheat Bypass.",
					imageAlt: "The Isle Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Easy Anti-Cheat Bypass",
					heroImage: "/images/isle-hacks-aimbot.webp",
					ctaPrimary: "Köp The Isle Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Easy Anti-Cheat Bypass",
							paragraphs: [
								"The Isle Hacks kombinerar ESP wallhack, radar hack och Isle Aimbot som undetected paket för The Isle på Windows PC. hur Easy Anti-Cheat-uppdateringar hanteras för The Isle hacks.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates isleer Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@theislehack.org för support och juridik.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "The Isle Hacks 2026 | Buyer Guide",
					description: "The Isle Hacks 2026: 2026 the isle hacks checklist före checkout. omedelbar digital leverans. undetected — Windows PC.",
					h1: "The Isle Hacks 2026",
					intro: "The Isle Hacks kombinerar ESP wallhack, radar hack och Isle Aimbot som undetected paket för The Isle på Windows PC. The Isle Hacks 2026.",
					imageAlt: "The Isle Hacks product overview for The Isle",
					galleryTitle: "The Isle Hacks 2026",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "Köp The Isle Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/isle-hacks/",
					sections: [
						{
							h2: "The Isle Hacks 2026",
							paragraphs: [
								"The Isle Hacks kombinerar ESP wallhack, radar hack och Isle Aimbot som undetected paket för The Isle på Windows PC. 2026 the isle hacks checklist före checkout.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates isleer Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@theislehack.org för support och juridik.",
							],
						},
					],
				},
				hacks: {
					title: "The Isle Hacks | ESP Aimbot Guide",
					description: "The Isle Hacks: The Isle Hacks pelare för ESP och Aimbot. omedelbar digital leverans. undetected — Windows PC.",
					h1: "The Isle Hacks",
					intro: "The Isle Hacks kombinerar ESP wallhack, radar hack och Isle Aimbot som undetected paket för The Isle på Windows PC. The Isle Hacks.",
					imageAlt: "The Isle Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "The Isle Hacks",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "Köp The Isle Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "The Isle Hacks",
							paragraphs: [
								"The Isle Hacks kombinerar ESP wallhack, radar hack och Isle Aimbot som undetected paket för The Isle på Windows PC. The Isle Hacks pelare för ESP och Aimbot.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates isleer Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@theislehack.org för support och juridik.",
							],
						},
					],
				},
				"cheat-download": {
					title: "The Isle Cheat Download | Instant Access",
					description: "The Isle Cheat Download: digital licensnedladdning efter betalning. omedelbar digital leverans. undetected — Windows PC.",
					h1: "The Isle Cheat Download",
					intro: "The Isle Hacks kombinerar ESP wallhack, radar hack och Isle Aimbot som undetected paket för The Isle på Windows PC. The Isle Cheat Download.",
					imageAlt: "The Isle Hacks download and install delivery flow",
					galleryTitle: "The Isle Cheat Download",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "Köp The Isle Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "The Isle Cheat Download",
							paragraphs: [
								"The Isle Hacks kombinerar ESP wallhack, radar hack och Isle Aimbot som undetected paket för The Isle på Windows PC. digital licensnedladdning efter betalning.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates isleer Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@theislehack.org för support och juridik.",
							],
						},
					],
				},
				"mod-menu": {
					title: "The Isle Mod-meny | In-Game Toggles",
					description: "The Isle Mod-meny: in-client ESP och soft aim-växlar. omedelbar digital leverans. undetected — Windows PC.",
					h1: "The Isle Mod-meny",
					intro: "The Isle Hacks kombinerar ESP wallhack, radar hack och Isle Aimbot som undetected paket för The Isle på Windows PC. The Isle Mod-meny.",
					imageAlt: "The Isle Hacks in-game menu controls",
					galleryTitle: "The Isle Mod-meny",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "Köp The Isle Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "The Isle Mod-meny",
							paragraphs: [
								"The Isle Hacks kombinerar ESP wallhack, radar hack och Isle Aimbot som undetected paket för The Isle på Windows PC. in-client ESP och soft aim-växlar.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates isleer Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@theislehack.org för support och juridik.",
							],
						},
					],
				},
				"soft-aim": {
					title: "The Isle Soft Aim | Smooth Aim Settings",
					description: "The Isle Soft Aim: mjuka soft aim-inställningar för Windows PC. omedelbar digital leverans. undetected — Windows PC.",
					h1: "The Isle Soft Aim",
					intro: "The Isle Hacks kombinerar ESP wallhack, radar hack och Isle Aimbot som undetected paket för The Isle på Windows PC. The Isle Soft Aim.",
					imageAlt: "The Isle soft aim FOV and smoothness settings",
					galleryTitle: "The Isle Soft Aim",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "Köp The Isle Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/isle-aimbot/",
					sections: [
						{
							h2: "The Isle Soft Aim",
							paragraphs: [
								"The Isle Hacks kombinerar ESP wallhack, radar hack och Isle Aimbot som undetected paket för The Isle på Windows PC. mjuka soft aim-inställningar för Windows PC.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates isleer Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@theislehack.org för support och juridik.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Bästa The Isle Hacks | Buyer Checklist",
					description: "Bästa The Isle Hacks: vad du ska jämföra innan du köper the isle hacks. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Bästa The Isle Hacks",
					intro: "The Isle Hacks kombinerar ESP wallhack, radar hack och Isle Aimbot som undetected paket för The Isle på Windows PC. Bästa The Isle Hacks.",
					imageAlt: "The Isle Hacks overview for The Isle on PC",
					galleryTitle: "Bästa The Isle Hacks",
					heroImage: "/images/isle-hacks-esp.webp",
					ctaPrimary: "Köp The Isle Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Bästa The Isle Hacks",
							paragraphs: [
								"The Isle Hacks kombinerar ESP wallhack, radar hack och Isle Aimbot som undetected paket för The Isle på Windows PC. vad du ska jämföra innan du köper the isle hacks.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates isleer Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@theislehack.org för support och juridik.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Isle Aimbot Hack | Soft Aim Assist",
					description: "Isle Aimbot Hack: undetected Aimbot hack assist för The Isle. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Isle Aimbot Hack",
					intro: "The Isle Hacks kombinerar ESP wallhack, radar hack och Isle Aimbot som undetected paket för The Isle på Windows PC. Isle Aimbot Hack.",
					imageAlt: "Isle Aimbot hack controls and bone priority",
					galleryTitle: "Isle Aimbot Hack",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "Köp The Isle Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/isle-aimbot/",
					sections: [
						{
							h2: "Isle Aimbot Hack",
							paragraphs: [
								"The Isle Hacks kombinerar ESP wallhack, radar hack och Isle Aimbot som undetected paket för The Isle på Windows PC. undetected Aimbot hack assist för The Isle.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates isleer Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@theislehack.org för support och juridik.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Isle ESP Hack | Boxes & Loot",
					description: "Isle ESP Hack: ESP hack-boxar, kadaver-pins och avstånd. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Isle ESP Hack",
					intro: "The Isle Hacks kombinerar ESP wallhack, radar hack och Isle Aimbot som undetected paket för The Isle på Windows PC. Isle ESP Hack.",
					imageAlt: "Isle ESP hack boxes and carcass markers",
					galleryTitle: "Isle ESP Hack",
					heroImage: "/images/isle-hacks-wallhack.webp",
					ctaPrimary: "Köp The Isle Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/isle-esp/",
					sections: [
						{
							h2: "Isle ESP Hack",
							paragraphs: [
								"The Isle Hacks kombinerar ESP wallhack, radar hack och Isle Aimbot som undetected paket för The Isle på Windows PC. ESP hack-boxar, kadaver-pins och avstånd.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates isleer Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@theislehack.org för support och juridik.",
							],
						},
					],
				},
				"unlock-all": {
					title: "The Isle Unlock All | What It Means",
					description: "The Isle Unlock All: unlock-all-sökningar vs riktiga ESP- och Aimbot-verktyg. omedelbar digital leverans. undetected — Windows PC.",
					h1: "The Isle Unlock All",
					intro: "The Isle Hacks kombinerar ESP wallhack, radar hack och Isle Aimbot som undetected paket för The Isle på Windows PC. The Isle Unlock All.",
					imageAlt: "The Isle Hacks license features overview",
					galleryTitle: "The Isle Unlock All",
					heroImage: "/images/isle-hacks-radar.webp",
					ctaPrimary: "Köp The Isle Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "The Isle Unlock All",
							paragraphs: [
								"The Isle Hacks kombinerar ESP wallhack, radar hack och Isle Aimbot som undetected paket för The Isle på Windows PC. unlock-all-sökningar vs riktiga ESP- och Aimbot-verktyg.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates isleer Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@theislehack.org för support och juridik.",
							],
						},
					],
				},
				privacy: {
					title: "Integritetspolicy | The Isle Hacks",
					description: "Integritetspolicy för The Isle Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Integritetspolicy",
					intro: "The Isle Hacks kombinerar ESP wallhack, radar hack och Isle Aimbot som undetected paket för The Isle på Windows PC. Integritetspolicy för theislehack.org och The Isle-licenser.",
					imageAlt: "The Isle Hacks",
					galleryTitle: "The Isle Hacks",
					heroImage: "/images/isle-hacks-aimbot.webp",
					ctaPrimary: "E-posta support",
					ctaSecondary: "Läs villkor",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information vi samlar in",
							paragraphs: [
								"The Isle Hacks kombinerar ESP wallhack, radar hack och Isle Aimbot som undetected paket för The Isle på Windows PC. Kontakt-e-post, Zadeyo-orderreferenser och grundläggande säkerhetsdata för webbplatsen.",
								"Betalningsuppgifter behandlas via Zadeyo checkout — lagras inte på theislehack.org.",
							],
						},
						{
							h2: "Hur vi använder data",
							paragraphs: [
								"The Isle Hacks kombinerar ESP wallhack, radar hack och Isle Aimbot som undetected paket för The Isle på Windows PC. Supportssvar, orderlösning och juridisk efterlevnad vid behov.",
								"Kontrollera Updates isleer Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
							],
						},
						{
							h2: "Dina rättigheter",
							paragraphs: [
								"support@theislehack.org för support och juridik.",
								"E-post: support@theislehack.org",
							],
						},
					],
				},
				refund: {
					title: "Återbetalningspolicy | The Isle Hacks",
					description: "Återbetalningspolicy för The Isle Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Återbetalningspolicy",
					intro: "The Isle Hacks kombinerar ESP wallhack, radar hack och Isle Aimbot som undetected paket för The Isle på Windows PC. Återbetalningspolicy för theislehack.org och The Isle-licenser.",
					imageAlt: "The Isle Hacks",
					galleryTitle: "The Isle Hacks",
					heroImage: "/images/isle-hacks-session.webp",
					ctaPrimary: "E-posta support",
					ctaSecondary: "Läs integritet",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital leverans",
							paragraphs: [
								"The Isle Hacks kombinerar ESP wallhack, radar hack och Isle Aimbot som undetected paket för The Isle på Windows PC. Kontakt-e-post, Zadeyo-orderreferenser och grundläggande säkerhetsdata för webbplatsen.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "Återbetalningsgodkännande",
							paragraphs: [
								"The Isle Hacks kombinerar ESP wallhack, radar hack och Isle Aimbot som undetected paket för The Isle på Windows PC. Supportssvar, orderlösning och juridisk efterlevnad vid behov.",
								"Kontrollera Updates isleer Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
							],
						},
						{
							h2: "Hur du begär",
							paragraphs: [
								"support@theislehack.org för support och juridik.",
								"E-post: support@theislehack.org",
							],
						},
					],
				},
				terms: {
					title: "Användarvillkor | The Isle Hacks",
					description: "Användarvillkor för The Isle Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Användarvillkor",
					intro: "The Isle Hacks kombinerar ESP wallhack, radar hack och Isle Aimbot som undetected paket för The Isle på Windows PC. Användarvillkor för theislehack.org och The Isle-licenser.",
					imageAlt: "The Isle Hacks",
					galleryTitle: "The Isle Hacks",
					heroImage: "/images/isle-hacks-aimbot-view.webp",
					ctaPrimary: "E-posta support",
					ctaSecondary: "Läs integritet",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Godkännande av villkor",
							paragraphs: [
								"The Isle Hacks kombinerar ESP wallhack, radar hack och Isle Aimbot som undetected paket för The Isle på Windows PC. Kontakt-e-post, Zadeyo-orderreferenser och grundläggande säkerhetsdata för webbplatsen.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "Riskvarning",
							paragraphs: [
								"The Isle Hacks kombinerar ESP wallhack, radar hack och Isle Aimbot som undetected paket för The Isle på Windows PC. Supportssvar, orderlösning och juridisk efterlevnad vid behov.",
								"Att använda cheats kan bryta mot The Isle team terms — du tar all ban-risk.",
							],
						},
						{
							h2: "Policyändringar",
							paragraphs: [
								"support@theislehack.org för support och juridik.",
								"E-post: support@theislehack.org",
							],
						},
					],
				},
			},
		},
	};
