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
		hero: string; espWallhack: string; aimbotCombat: string; teamFight: string; playerEsp: string;
		headerArt: string; hacksPackage: string; chaseFight: string; battleRoyale: string; trialMap: string;
	};
};
export type PageId = 'home' | 'dbd-esp' | 'dbd-aimbot' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'radar' | 'eac' | 'cheats-2026' | 'hacks' | 'cheat-download' | 'mod-menu' | 'soft-aim' | 'best-cheats' | 'aimbot-hack' | 'esp-hack' | 'unlock-all' | 'privacy' | 'refund' | 'terms';

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
					accentShort: "Undetected DBD cheats 2026",
					subtitle: "Undetected ESP, soft aim, and radar for Dead by Daylight on Windows PC.",
					subtitleShort: "DBD ESP, radar & aimbot for PC",
					buyNow: "Get Access",
					seeFeatures: "See Features",
				},
				trust: {
					status: "Online",
					statusNote: "DBD Cheats — undetected DBD cheats live for Dead by Daylight on Windows PC.",
					statusShort: "Live",
					delivery: "Instant digital delivery",
					platform: "Windows 10 & 11",
					antiCheat: "Easy Anti-Cheat maintenance supported",
					antiCheatShort: "Easy Anti-Cheat supported",
				},
				product: {
					title: "DBD Cheats",
					addToCart: "Add to Cart",
					monthly: "Monthly",
					lifetime: "Lifetime",
					available: "Available now",
					gameBadge: "Dead by Daylight",
					platformBadge: "Windows PC",
					statusBadge: "Undetected DBD cheats",
				},
				reviews: {
					title: "What players say",
					subtitle: "Recent feedback from DBD Cheats buyers",
					outOf: "out of 5",
					countLabel: "reviews",
				},
				common: {
					buyNow: "Buy DBD Cheats",
					readGuide: "Read guide",
					language: "Language",
					officialLanguageNote: "English is official; other locales are translated.",
					relatedPages: "Related pages",
				},
				footer: {
					explore: "Explore",
					help: "Help & legal",
					tagline: "Undetected DBD cheats for PC.\nESP, wallhack, radar & aimbot.",
				},
				images: {
					hero: "DBD Cheats hero — ESP and aimbot overlay in Dead by Daylight",
					espWallhack: "Wallhack outlines showing survivors and killers through walls",
					aimbotCombat: "Soft aim assist overlay during a Dead by Daylight trial",
					teamFight: "DBD Cheats combat overlay during a team chase",
					playerEsp: "Player ESP boxes and distance readouts in a Dead by Daylight trial",
					headerArt: "Aimbot view and bone priority controls for Dead by Daylight",
					hacksPackage: "2D radar threat overlay for Dead by Daylight",
					chaseFight: "Aimbot assist during a Dead by Daylight chase",
					battleRoyale: "DBD Cheats in-trial overview for Windows PC",
					trialMap: "ESP markers for generators and hooks in Dead by Daylight",
				},
			},
			pages: {
				home: {
					title: "DBD Cheats | Undetected Aimbot, ESP & Wallhack 2026",
					description: "Dead by Daylight hacks for PC with aimbot, ESP and wallhack features. Explore gameplay features, pricing, setup information and the latest updates.",
					h1: "Dead by Daylight Cheats — Undetected ESP, Wallhack & Aimbot",
					intro: "DBD Cheats is the undetected cheat package for Windows PC — built for Dead by Daylight. DBD ESP wallhack, 2D radar, and DBD Aimbot with Easy Anti-Cheat maintenance after every major patch.",
					imageAlt: "DBD Cheats homepage hero — ESP and aimbot for Dead by Daylight",
					galleryTitle: "DBD Cheats gallery — ESP, Aimbot and wallhack visuals",
					ctaPrimary: "Buy DBD Cheats",
					ctaSecondary: "See all features",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Why players choose dbd cheats in 2026",
							paragraphs: [
								"Dead by Daylight rewards map awareness. DBD Cheats combines ESP wallhack for enemy players and generators, radar-style threat cues, and configurable Aimbot so you can read fights before committing — on trial, chase, and live servers.",
								"Official seasons, patches, and anti-cheat updates come from <a href=\"https://store.steampowered.com/app/381210/Dead_by_Daylight/\" target=\"_blank\" rel=\"noopener noreferrer\">Dead by Daylight</a> and <a href=\"https://www.easy.ac/\" target=\"_blank\" rel=\"noopener noreferrer\">Easy Anti-Cheat</a>. We rebuild ESP, radar, and Aimbot modules when those patches require maintenance — then post status on the <a href=\"/updates/\">Updates page</a>.",
								"Licenses ship digitally after payment confirmation. Monthly ($35) and lifetime ($150) plans include Easy Anti-Cheat maintenance rebuilds when anti-cheat or game patches require updates.",
								"Start with the <a href=\"/dead-by-daylight-cheats/\">DBD Cheats pillar</a>, <a href=\"/dbd-esp/\">ESP guide</a>, <a href=\"/dbd-aimbot/\">Aimbot controls</a>, and <a href=\"/dead-by-daylight-cheats/\">undetected status</a> pages if you are comparing tools before checkout.",
							],
						},
						{
							h2: "ESP wallhack, radar hack, and Aimbot in one license",
							paragraphs: [
								"Instead of stacking separate tools, DBD Cheats bundles player ESP wallhack, generator markers, 2D radar overlays, and Aimbot profiles in one undetected package built for survivor and killer trials — covering both “dbd cheats” and “dbd cheats” search intent.",
								"Browse the <a href=\"/dbd-esp/\">ESP</a>, <a href=\"/dbd-aimbot/\">Aimbot</a>, <a href=\"/dbd-esp/\">wallhack</a>, and <a href=\"/dbd-radar-hack/\">radar</a> pages for control details — or jump to <a href=\"/pricing/\">Pricing</a> for monthly and lifetime options.",
								"Before patch days, check <a href=\"https://store.steampowered.com/app/381210/Dead_by_Daylight/\" target=\"_blank\" rel=\"noopener noreferrer\">Dead by Daylight on Steam</a> for Behaviour Interactive service health, then confirm our maintenance notes so you are not queueing on an outdated build.",
								"Ready to buy? Open <a href=\"/pricing/\">Pricing</a>, follow <a href=\"/setup/\">Setup</a> after delivery, and keep <a href=\"/faq/\">FAQ</a> / <a href=\"/support/\">Support</a> bookmarked for license questions.",
							],
						},
					],
					heroImage: "/images/dbd-cheats-esp.webp",
				},
				"dbd-esp": {
					title: "DBD ESP 2026 | Player Boxes & Wallhack",
					description: "DBD ESP for Windows PC — player boxes, generator markers, and distance readouts. Part of our undetected dbd cheats for Dead by Daylight.",
					h1: "Dead by Daylight ESP — Player Boxes & Wallhack",
					intro: "DBD ESP visibility tools for trial and chase. Read enemy teams, survivors, killers, generators, and distance before you commit — toggleable DBD ESP wallhack overlays bundled in our DBD Cheats package.",
					imageAlt: "DBD ESP player boxes and distance readouts in a trial",
					galleryTitle: "DBD ESP overlay visuals",
					ctaPrimary: "Buy DBD Cheats",
					ctaSecondary: "dbd wallhack guide",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "What DBD ESP solves in trials",
							paragraphs: [
								"Dead by Daylight maps punish incomplete information. DBD Cheats ESP wallhack helps you spot enemy teams early, spot survivors and killers before they push your angle, and mark high-value objectives worth the detour.",
								"On trial, chase, and live servers, that visibility gap is often the difference between a clean third-party and a patched team. ESP ships bundled with radar overlays and Aimbot in one license.",
								"Dead by Daylight’s live seasons and map updates are published by Behaviour Interactive (<a href=\"https://store.steampowered.com/app/381210/Dead_by_Daylight/\" target=\"_blank\" rel=\"noopener noreferrer\">Dead by Daylight</a>). When tiles or trial rules shift, ESP categories stay useful because they track players and generators — not a single static landmark.",
							],
						},
						{
							h2: "Player, apex, and generator ESP wallhack categories",
							paragraphs: [
								"Toggle enemy player outlines, killer markers, generator cues, and generator pins so only trial-critical ESP wallhack overlays stay active during rotations.",
								"Distance readouts and snapline options help you control engagement range. Team and enemy colour coding supports survivor and killer trials alike.",
								"Compare category detail on the <a href=\"/dbd-esp/\">wallhack page</a> and pair visibility with the <a href=\"/dbd-radar-hack/\">radar hack</a> for flanks outside your FOV.",
							],
							list: [
								"Enemy player ESP outlines with distance",
								"Generator and hook markers for faster rotations",
								"Killer and generator awareness cues",
								"Toggleable categories to reduce overlay noise",
							],
						},
						{
							h2: "Undetected ESP with Easy Anti-Cheat maintenance",
							paragraphs: [
								"DBD Cheats ESP wallhack is maintained for Dead by Daylight with rebuilds after Easy Anti-Cheat patches. Check the <a href=\"/updates/\">Updates page</a> before you queue — no cheat guarantees permanent undetected status.",
								"Read <a href=\"https://www.easy.ac/\" target=\"_blank\" rel=\"noopener noreferrer\">Easy Anti-Cheat</a> for how anti-cheat updates ship, then cross-check our <a href=\"/updates/\">Easy Anti-Cheat maintenance guide</a> after major patches.",
								"Checkout includes instant digital delivery for Windows 10 and 11. After purchase, follow the <a href=\"/setup/\">Setup guide</a> and tune overlays before your first trial.",
							],
						},
						{
							h2: "ESP next steps — Aimbot, pricing, and support",
							paragraphs: [
								"ESP alone wins information wars; Aimbot covers the chase. Review <a href=\"/dbd-aimbot/\">Aimbot controls</a> if you want one license for visibility and assist.",
								"Compare monthly ($35) and lifetime ($150) on <a href=\"/pricing/\">Pricing</a>, then keep <a href=\"/support/\">Support</a> ready if activation needs a human reply.",
								"Still researching? The <a href=\"/dead-by-daylight-cheats/\">DBD Cheats pillar</a> and <a href=\"/dead-by-daylight-cheats/\">2026 buyer guide</a> summarize the full stack.",
							],
						},
					],
					heroImage: "/images/dbd-cheats-radar.webp",
				},
				"dbd-aimbot": {
					title: "DBD Aimbot 2026 | Soft Aim for Windows PC",
					description: "DBD Aimbot with soft aim tuning for Windows PC. FOV, bone priority, and hotkeys bundled with ESP boxes in our DBD Cheats package.",
					h1: "Dead by Daylight Aimbot — Soft Aim for Windows PC",
					intro: "Configurable Aimbot tools for Dead by Daylight chases. Smoothness, FOV, bone priority, and per-killer profiles — bundled with ESP wallhack and radar in one undetected license.",
					imageAlt: "DBD Aimbot and soft aim controls on Windows PC",
					galleryTitle: "DBD Aimbot combat previews",
					ctaPrimary: "Buy DBD Cheats",
					ctaSecondary: "See ESP wallhack",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Aimbot tuned for Dead by Daylight combat pace",
							paragraphs: [
								"Dead by Daylight mixes mid-game chases with close-quarters killer rushes. DBD Cheats Aimbot includes smoothness, FOV, and aim smoothing controls tuned for that pace — with hotkey toggles mid-match.",
								"Bone priority and target selection options cover closest player, lowest health, or highest-threat targets during team chases and close-range team chases.",
								"Killer balance and season rules change via <a href=\"https://store.steampowered.com/app/381210/Dead_by_Daylight/\" target=\"_blank\" rel=\"noopener noreferrer\">Dead by Daylight</a>. Revisit Aimbot FOV and smoothness after major combat patches so assist still matches the live chase pressure windows.",
							],
						},
						{
							h2: "Per-killer Aimbot profiles",
							paragraphs: [
								"Save separate Aimbot profiles for killers, killer builds, and skill-check killers. Switch between skill-check killer chases and high-traffic zone clears without reopening menus every trial.",
								"Prefer softer tracking? Read the <a href=\"/dbd-aimbot/\">soft aim guide</a>.",
								"Aimbot ships alongside <a href=\"/dbd-esp/\">ESP wallhack</a> and <a href=\"/dbd-radar-hack/\">2D radar</a> in the same DBD Cheats license.",
							],
							list: [
								"Smoothness, FOV, and aim smoothing sliders",
								"Bone priority and threat-based targeting",
								"Hotkeys to toggle Aimbot mid-match",
								"Per-killer profile slots for killer / perk / skill-check",
							],
						},
						{
							h2: "Easy Anti-Cheat maintenance for undetected Aimbot",
							paragraphs: [
								"DBD Cheats rebuilds Aimbot behavior when Easy Anti-Cheat or major Dead by Daylight patches land. Maintenance notes appear on the <a href=\"/updates/\">Updates page</a> so you know when a new build is live.",
								"Cross-check service health on <a href=\"https://store.steampowered.com/app/381210/Dead_by_Daylight/\" target=\"_blank\" rel=\"noopener noreferrer\">Dead by Daylight on Steam</a> and anti-cheat context on <a href=\"https://www.easy.ac/\" target=\"_blank\" rel=\"noopener noreferrer\">Easy Anti-Cheat</a>, then follow our <a href=\"/updates/\">Easy Anti-Cheat maintenance guide</a> before queueing on patch day.",
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
					heroImage: "/images/dbd-cheats-aimbot.webp",
				},
				features: {
					title: "DBD Cheats Features | ESP, Soft Aim & RadarRadar",
					description: "Full dbd cheats feature list: ESP boxes, soft aim, radar, and toggles for Windows PC. Review controls before checkout.",
					h1: "Dead by Daylight Cheats Features — Full Control List",
					intro: "Every ESP wallhack, radar hack, and Aimbot control included in DBD Cheats for Dead by Daylight on Windows PC — with Easy Anti-Cheat maintenance after major patches.",
					imageAlt: "DBD Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "DBD Cheats feature gallery",
					ctaPrimary: "Buy DBD Cheats",
					ctaSecondary: "View pricing",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "ESP wallhack and visibility features",
							paragraphs: [
								"Enemy player ESP wallhack, killer and generator awareness cues, generator and hook markers, distance readouts, snaplines, and toggleable ESP categories for trial-critical overlays only.",
								"Team and enemy colour coding supports survivor and killer trials. Deep-dive the <a href=\"/dbd-esp/\">ESP page</a> and <a href=\"/dbd-esp/\">wallhack guide</a> for category-level detail.",
								"Map and generator systems evolve with <a href=\"https://store.steampowered.com/app/381210/Dead_by_Daylight/\" target=\"_blank\" rel=\"noopener noreferrer\">Dead by Daylight</a> patch cycle and map updates — toggleable ESP categories keep overlays useful when tiles rotate.",
							],
						},
						{
							h2: "Radar hack and Aimbot controls",
							paragraphs: [
								"2D radar overlay with directional threat cues, configurable range for rotations and late-trial generators, plus Aimbot smoothness, FOV, bone priority, hotkeys, and per-killer profiles.",
								"All tools share in-client toggles so you can adjust ESP, radar, and Aimbot during live Dead by Daylight trials. See <a href=\"/dbd-radar-hack/\">radar</a> and <a href=\"/dbd-aimbot/\">Aimbot</a> for settings walkthroughs.",
								"Prefer a menu-first workflow? The <a href=\"/dead-by-daylight-cheats/\">mod menu page</a> explains mid-match toggles without alt-tabbing.",
							],
						},
						{
							h2: "Licensing, delivery, and Easy Anti-Cheat maintenance",
							paragraphs: [
								"Monthly ($35) and lifetime ($150) licenses with instant digital delivery. Easy Anti-Cheat maintenance rebuilds publish on the <a href=\"/updates/\">Updates page</a> after anti-cheat or game patches.",
								"Monitor <a href=\"https://store.steampowered.com/app/381210/Dead_by_Daylight/\" target=\"_blank\" rel=\"noopener noreferrer\">Dead by Daylight on Steam</a> on patch days, then confirm rebuild notes before you queue. Setup and billing help lives on <a href=\"/support/\">Support</a> and support@dbdcheats.org.",
								"Next step: compare plans on <a href=\"/pricing/\">Pricing</a> or read <a href=\"/dead-by-daylight-cheats/\">how undetected maintenance works</a>.",
							],
						},
					],
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
				},
				pricing: {
					title: "DBD Cheats Pricing | $35/mo or $150 Life",
					description: "dbd cheats pricing: $35/month or $150 lifetime for ESP, soft aim, and radar on Windows PC. Instant delivery — pick a plan.",
					h1: "Dead by Daylight Cheats Pricing — Monthly & Lifetime",
					intro: "Choose monthly or lifetime access to undetected DBD Cheats — ESP wallhack, radar hack, and Aimbot for Dead by Daylight on Windows PC. Instant digital delivery after payment.",
					imageAlt: "DBD Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "DBD Cheats package visuals",
					ctaPrimary: "Buy DBD Cheats",
					ctaSecondary: "Read setup guide",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Monthly and lifetime DBD Cheats plans",
							paragraphs: [
								"Monthly license: $35 USD for 30 days of full ESP wallhack, radar hack, and Aimbot access with Easy Anti-Cheat maintenance included during your term.",
								"Lifetime license: $150 USD for long-term access to the same undetected DBD Cheats package — ideal if you play Dead by Daylight regularly across seasons.",
								"Both plans unlock the same feature stack described on <a href=\"/features/\">Features</a>. Choose monthly to test, or lifetime if you already know you want the full toolkit.",
							],
						},
						{
							h2: "What every plan includes",
							paragraphs: [
								"Player ESP wallhack, generator markers, 2D radar overlays, Aimbot controls, in-client toggles, and maintenance rebuilds after Easy Anti-Cheat or major Dead by Daylight patches.",
								"Season calendars and client updates come from <a href=\"https://store.steampowered.com/app/381210/Dead_by_Daylight/\" target=\"_blank\" rel=\"noopener noreferrer\">Dead by Daylight</a>. Active licenses receive rebuild access when we publish maintenance on <a href=\"/updates/\">Updates</a>.",
								"Digital delivery starts after payment confirmation. Keep your order reference for <a href=\"/support/\">Support</a> requests and follow <a href=\"/setup/\">Setup</a> for first launch.",
							],
						},
						{
							h2: "Refund, billing, and buying checklist",
							paragraphs: [
								"Review the <a href=\"/refund-policy/\">Refund Policy</a> before purchase. For billing or delivery issues, contact Support with your order details.",
								"Prices are listed in USD. Availability is worldwide for Windows 10 and 11 PCs.",
								"Still comparing tools? Read <a href=\"/dead-by-daylight-cheats/\">dbd cheats</a>, <a href=\"/dead-by-daylight-cheats/\">undetected status</a>, and <a href=\"/faq/\">FAQ</a> before you checkout.",
							],
						},
					],
					heroImage: "/images/dbd-cheats-match.webp",
				},
				setup: {
					title: "DBD Cheats Setup | Windows PC Guide",
					description: "Set up dbd cheats on Windows PC — activate ESP boxes, soft aim profiles, and . Check Easy Anti-Cheat updates before your first queue.",
					h1: "Dead by Daylight Cheats Setup — Windows PC Guide",
					intro: "Install and configure DBD Cheats for Dead by Daylight on Windows 10 or 11. Activate your license, load ESP wallhack and Aimbot profiles, and verify Easy Anti-Cheat maintenance status before queueing.",
					imageAlt: "DBD Cheats setup guide screenshot for Windows PC",
					galleryTitle: "DBD Cheats setup visuals",
					ctaPrimary: "Buy DBD Cheats",
					ctaSecondary: "Contact support",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Before you install DBD Cheats",
							paragraphs: [
								"Confirm your order email and license details. Check the <a href=\"/updates/\">Updates page</a> for the latest Easy Anti-Cheat maintenance build before launching Dead by Daylight.",
								"Also glance at <a href=\"https://store.steampowered.com/app/381210/Dead_by_Daylight/\" target=\"_blank\" rel=\"noopener noreferrer\">Dead by Daylight on Steam</a> if Behaviour Interactive services look unstable on patch day — a platform outage is not a license fault.",
								"DBD Cheats requires Windows 10 or 11. Close conflicting overlay software that may interfere with ESP wallhack or Aimbot toggles.",
							],
						},
						{
							h2: "Activate ESP wallhack and Aimbot profiles",
							paragraphs: [
								"Follow the delivery instructions in your license email. Load default ESP wallhack categories for survivors, killers, and generators — then tune radar range and Aimbot smoothness to your playstyle.",
								"Use in-client hotkeys to toggle ESP, radar, and Aimbot mid-match. Details for Easy Anti-Cheat module live on <a href=\"/dbd-esp/\">ESP</a>, <a href=\"/dbd-aimbot/\">Aimbot</a>, and <a href=\"/dead-by-daylight-cheats/\">mod menu</a>.",
								"Prefer a soft tracking feel? Start with the <a href=\"/dbd-aimbot/\">soft aim</a> recommendations before raising aggressiveness.",
							],
						},
						{
							h2: "After Dead by Daylight or Easy Anti-Cheat patches",
							paragraphs: [
								"When Behaviour Interactive ships a major Dead by Daylight update or Easy Anti-Cheat patch, revisit Updates before queueing. Download maintenance rebuilds when posted.",
								"Official anti-cheat background: <a href=\"https://www.easy.ac/\" target=\"_blank\" rel=\"noopener noreferrer\">Easy Anti-Cheat</a>. Our practical workflow is documented on the <a href=\"/updates/\">Easy Anti-Cheat bypass page</a> and <a href=\"/dead-by-daylight-cheats/\">undetected guide</a>.",
								"Contact <a href=\"/support/\">Support</a> with your order ID if activation fails after a patch — include Windows version and error details for faster replies.",
							],
						},
					],
					heroImage: "/images/dbd-cheats-radar.webp",
				},
				updates: {
					title: "DBD Cheats Updates | Easy Anti-Cheat Maintenance Log",
					description: "dbd cheats update log: Easy Anti-Cheat rebuilds for ESP boxes, soft aim, and radar on Windows PC. Check status before queueing after patches.",
					h1: "Dead by Daylight Cheats Updates — Maintenance Log",
					intro: "Track Easy Anti-Cheat maintenance and Dead by Daylight patch rebuilds for the undetected ESP wallhack, radar hack, and Aimbot package. Check here before queueing after major updates.",
					imageAlt: "DBD Cheats live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Dead by Daylight patch and maintenance visuals",
					ctaPrimary: "Buy DBD Cheats",
					ctaSecondary: "Undetected status guide",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "Why the Updates page matters",
							paragraphs: [
								"Dead by Daylight and Easy Anti-Cheat receive frequent patches. DBD Cheats publishes maintenance notes when ESP wallhack, radar, or Aimbot behavior needs a rebuild.",
								"Use <a href=\"https://store.steampowered.com/app/381210/Dead_by_Daylight/\" target=\"_blank\" rel=\"noopener noreferrer\">Dead by Daylight on Steam</a> for Behaviour Interactive platform health and this page for DBD Cheats build status — both matter on big update days.",
								"Checking this log before you queue reduces surprises after game days or seasonal launches on trial and chase.",
							],
						},
						{
							h2: "What maintenance entries cover",
							paragraphs: [
								"Entries note Easy Anti-Cheat compatibility status, rebuilt ESP wallhack overlays, radar range fixes, Aimbot tuning after killer balance changes, and digital delivery of new builds to active licenses.",
								"Lifetime and monthly subscribers receive rebuild access during active license terms. See <a href=\"/pricing/\">Pricing</a> if you need to renew.",
								"For context on why rebuilds happen, read the <a href=\"/updates/\">Easy Anti-Cheat bypass guide</a> and <a href=\"/dead-by-daylight-cheats/\">undetected dbd cheats</a> explainer.",
							],
						},
						{
							h2: "Staying undetected after patches",
							paragraphs: [
								"No cheat guarantees permanent undetected status. Combine maintenance updates with responsible in-game settings and patch awareness.",
								"Follow season notes from <a href=\"https://store.steampowered.com/app/381210/Dead_by_Daylight/\" target=\"_blank\" rel=\"noopener noreferrer\">Dead by Daylight</a>, then confirm our rebuild is live before you queue.",
								"For urgent status questions after a Easy Anti-Cheat update, contact <a href=\"/support/\">Support</a> with your license tier and last played build version.",
							],
						},
					],
					heroImage: "/images/dbd-cheats-esp.webp",
				},
				faq: {
					title: "DBD Cheats FAQ | ESP, Soft Aim & RadarRadar Answers",
					description: "dbd cheats FAQ: ESP boxes, soft aim, Easy Anti-Cheat maintenance, and pricing for PC. Clear answers before you buy.",
					h1: "Dead by Daylight Cheats FAQ — Common Questions",
					intro: "Answers about undetected DBD Cheats — ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat maintenance, checkout, and Dead by Daylight compatibility on Windows PC.",
					imageAlt: "DBD Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "DBD Cheats FAQ visuals",
					ctaPrimary: "Buy DBD Cheats",
					ctaSecondary: "Contact support",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "What is DBD Cheats?",
							paragraphs: [
								"DBD Cheats is an undetected cheat package for Dead by Daylight on Windows PC. It includes ESP wallhack, 2D radar-style awareness, and Aimbot controls with Easy Anti-Cheat maintenance updates.",
								"Packages cover trial and chase. Explore <a href=\"/features/\">Features</a> for the full control list and <a href=\"/dbd-esp/\">ESP</a> / <a href=\"/dbd-aimbot/\">Aimbot</a> for module detail.",
								"Dead by Daylight itself is published by Behaviour Interactive (<a href=\"https://store.steampowered.com/app/381210/Dead_by_Daylight/\" target=\"_blank\" rel=\"noopener noreferrer\">Dead by Daylight</a>). Cheats are third-party tools and may violate Behaviour Interactive' rules — use is at your own risk.",
							],
						},
						{
							h2: "Are DBD Cheats undetected in 2026?",
							paragraphs: [
								"DBD Cheats is maintained with rebuilds after Easy Anti-Cheat and game patches. Check the <a href=\"/updates/\">Updates page</a> for current status — no cheat can guarantee permanent undetected operation.",
								"Read <a href=\"/dead-by-daylight-cheats/\">undetected dbd cheats</a> and the <a href=\"/updates/\">Easy Anti-Cheat guide</a> for the maintenance workflow.",
								"Responsible settings and reading maintenance notes before queueing are essential.",
							],
						},
						{
							h2: "Delivery, pricing, and support",
							paragraphs: [
								"Licenses deliver digitally after payment confirmation. Monthly is $35; lifetime is $150 USD — see <a href=\"/pricing/\">Pricing</a>.",
								"Contact support@dbdcheats.org or the <a href=\"/support/\">Support page</a> with order details for setup or billing help. First launch steps are on <a href=\"/setup/\">Setup</a>.",
								"Refund eligibility is covered in the <a href=\"/refund-policy/\">Refund Policy</a>.",
							],
						},
					],
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
				},
				support: {
					title: "DBD Cheats Support | Help & Contact",
					description: "Contact dbd cheats support for licenses, ESP setup, soft aim profiles, and on Windows PC. Include your order ID for faster help.",
					h1: "Dead by Daylight Cheats Support — Contact Us",
					intro: "Get help with DBD Cheats licenses, checkout, ESP wallhack setup, Aimbot profiles, and Easy Anti-Cheat maintenance for Dead by Daylight on Windows PC.",
					imageAlt: "DBD Cheats support page for license and setup help",
					galleryTitle: "DBD Cheats support resources",
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
								"Support requests are reviewed daily. DBD Cheats support covers delivery, billing, setup, and maintenance — not in-game coaching or account recovery for Behaviour Interactive bans.",
								"Account and game policy questions belong with Behaviour Interactive. We can help with license delivery and product configuration only.",
								"Check the Updates page and FAQ before opening a ticket — many post-patch questions are answered there.",
							],
						},
						{
							h2: "Self-service resources",
							paragraphs: [
								"Setup guide, Features list, Updates log, Refund Policy, and Terms of Use are linked from the footer. Easy Anti-Cheat bypass notes live on the dedicated <a href=\"/updates/\">Easy Anti-Cheat page</a>.",
								"Email: support@dbdcheats.org",
								"Ready to purchase or renew? Open <a href=\"/pricing/\">Pricing</a>. Need feature detail first? See <a href=\"/features/\">Features</a>.",
							],
						},
					],
					heroImage: "/images/dbd-cheats-match.webp",
				},
				undetected: {
					title: "Undetected DBD Cheats 2026 | Easy Anti-Cheat Maintenance",
					description: "Undetected dbd cheats with Easy Anti-Cheat maintenance for ESP boxes, soft aim, and radar on Windows PC. Check status before you queue.",
					h1: "Undetected Dead by Daylight Cheats — Easy Anti-Cheat Maintenance",
					intro: "How DBD Cheats stays maintained for Dead by Daylight after Easy Anti-Cheat patches — ESP wallhack, radar hack, and Aimbot rebuilds for Windows PC.",
					imageAlt: "DBD Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected DBD Cheats visuals",
					ctaPrimary: "Buy DBD Cheats",
					ctaSecondary: "Easy Anti-Cheat bypass guide",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "What undetected means for DBD Cheats",
							paragraphs: [
								"Undetected DBD Cheats means the package is actively maintained against Easy Anti-Cheat and major Dead by Daylight patches — not that detection is impossible forever.",
								"Rebuilds target ESP wallhack overlays, radar behavior, and Aimbot signatures after Easy Anti-Cheat security updates.",
								"Anti-cheat technology is documented by <a href=\"https://www.easy.ac/\" target=\"_blank\" rel=\"noopener noreferrer\">Easy Anti-Cheat</a>; Dead by Daylight client updates ship through <a href=\"https://store.steampowered.com/app/381210/Dead_by_Daylight/\" target=\"_blank\" rel=\"noopener noreferrer\">Dead by Daylight</a>. Undetected status is an ongoing process tied to those releases.",
							],
						},
						{
							h2: "Easy Anti-Cheat maintenance workflow",
							paragraphs: [
								"When Easy Anti-Cheat or Dead by Daylight updates ship, the team assesses ESP, radar, and Aimbot modules, publishes status on the <a href=\"/updates/\">Updates page</a>, and delivers rebuilt builds to active licenses.",
								"On patch mornings, also check <a href=\"https://store.steampowered.com/app/381210/Dead_by_Daylight/\" target=\"_blank\" rel=\"noopener noreferrer\">Dead by Daylight on Steam</a> for launcher outages that can look like product failures.",
								"Deep technical workflow: <a href=\"/updates/\">Easy Anti-Cheat bypass Dead by Daylight guide</a>. Feature stack: <a href=\"/features/\">Features</a>.",
							],
						},
						{
							h2: "Responsible use and next steps",
							paragraphs: [
								"Combine maintenance with conservative in-game settings. Read the <a href=\"/faq/\">FAQ</a> and Updates log regularly — undetected status is not a one-time promise.",
								"Lifetime and monthly plans include rebuild access during active terms — see <a href=\"/pricing/\">Pricing</a>.",
								"New buyers should also read <a href=\"/dead-by-daylight-cheats/\">dbd cheats 2026</a> and complete <a href=\"/setup/\">Setup</a> after delivery.",
							],
						},
					],
					heroImage: "/images/dbd-cheats-wallhack.webp",
				},
				wallhack: {
					title: "Dead by Daylight Wallhack 2026 | ESP Boxes & Visibility",
					description: "dbd wallhack ESP with player boxes and generator markers for Windows PC. Undetected dbd cheats — learn overlays and buy.",
					h1: "Dead by Daylight Wallhack — ESP Boxes & Visibility",
					intro: "dbd wallhack ESP for Dead by Daylight — see players, generators, killers, and hook locations through toggleable wallhack overlays built for survivor and killer trials.",
					imageAlt: "dbd wallhack visibility through walls in a trial",
					galleryTitle: "dbd wallhack ESP gallery",
					ctaPrimary: "Buy DBD Cheats",
					ctaSecondary: "DBD ESP page",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Wallhack ESP vs raw aim tools",
							paragraphs: [
								"A dbd wallhack focuses on information — player outlines, generator pins, killer threat cues — rather than automatic aiming. DBD Cheats bundles wallhack ESP with radar and optional Aimbot in one license.",
								"Toggle categories so only the wallhack overlays you need stay active during rotations and hook zones.",
								"For the broader ESP keyword page see <a href=\"/dbd-esp/\">DBD ESP</a>; for combat assist see <a href=\"/dbd-aimbot/\">Aimbot</a>.",
							],
						},
						{
							h2: "Map coverage for wallhack ESP",
							paragraphs: [
								"Wallhack overlays support trial, chase, and live servers with distance readouts and snaplines for engagement control.",
								"Season maps and tile changes are announced via <a href=\"https://store.steampowered.com/app/381210/Dead_by_Daylight/\" target=\"_blank\" rel=\"noopener noreferrer\">Dead by Daylight</a>. Wallhack remains useful because it tracks entities, not fixed landmarks alone.",
								"Pair wallhack awareness with <a href=\"/dbd-radar-hack/\">radar hack</a> cues for flanks during forest and river bank ambushes.",
							],
						},
						{
							h2: "Undetected wallhack maintenance",
							paragraphs: [
								"ESP wallhack modules rebuild after Easy Anti-Cheat patches. Follow the <a href=\"/updates/\">Updates page</a> and complete checkout for instant license delivery on Windows PC.",
								"Learn the full maintenance story on <a href=\"/dead-by-daylight-cheats/\">undetected dbd cheats</a> and <a href=\"/updates/\">Easy Anti-Cheat bypass</a>.",
								"Ready to buy? Compare <a href=\"/pricing/\">Pricing</a> or continue to the <a href=\"/dbd-esp/\">ESP hack</a> landing for alternate search wording.",
							],
						},
					],
					heroImage: "/images/dbd-cheats-wallhack.webp",
				},
				radar: {
					title: "Dead by Daylight Radar Hack 2026 | 2D Threat Overlay",
					description: "dbd radar hack for flank awareness on Windows PC. Bundled with ESP boxes, soft aim, and radar in our DBD Cheats package.",
					h1: "Dead by Daylight Radar Hack — 2D Threat Awareness",
					intro: "2D radar-style overlay for Dead by Daylight — directional threat cues for nearby players outside your line of sight, bundled with ESP wallhack and Aimbot.",
					imageAlt: "Dead by Daylight 2D radar overlay showing nearby threats",
					galleryTitle: "dbd radar hack visuals",
					ctaPrimary: "Buy DBD Cheats",
					ctaSecondary: "See ESP wallhack",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Why radar hack matters in Dead by Daylight",
							paragraphs: [
								"survival chases happen across open terrain — hills, forests, and pallet loops. A 2D radar overlay shows nearby player threats outside direct line of sight so you can reposition before a third player.",
								"DBD Cheats radar complements <a href=\"/dbd-esp/\">ESP wallhack</a> markers during team chases and hook zone chases.",
								"Mode rules and seasonal changes come from <a href=\"https://store.steampowered.com/app/381210/Dead_by_Daylight/\" target=\"_blank\" rel=\"noopener noreferrer\">Dead by Daylight</a>. Radar range remains configurable when map scale or mobility meta shifts.",
							],
						},
						{
							h2: "Configurable radar range",
							paragraphs: [
								"Adjust radar range for early rotations versus tight hook zones. Directional cues highlight flanks during building clears and flank pushes across trial and chase.",
								"Toggle radar alongside ESP and Aimbot with in-client hotkeys during live matches — see the <a href=\"/dead-by-daylight-cheats/\">mod menu</a> page.",
								"Combat follow-up lives on <a href=\"/dbd-aimbot/\">Aimbot</a> when you convert radar info into a fight.",
							],
						},
						{
							h2: "Maintenance and licensing",
							paragraphs: [
								"Radar hack modules receive Easy Anti-Cheat maintenance rebuilds with the full DBD Cheats package. Monthly and lifetime licenses include digital delivery — see <a href=\"/pricing/\">Pricing</a>.",
								"Check <a href=\"/updates/\">Updates</a> after major Dead by Daylight patches before relying on previous radar configs.",
								"New to the stack? Start at <a href=\"/features/\">Features</a> or <a href=\"/dead-by-daylight-cheats/\">undetected status</a>.",
							],
						},
					],
					heroImage: "/images/dbd-cheats-radar.webp",
				},
				eac: {
					title: "Easy Anti-Cheat Bypass Dead by Daylight | DBD Cheats",
					description: "How dbd cheats rebuild after Easy Anti-Cheat patches — ESP boxes, soft aim, and radar maintenance for Windows PC. Read before queueing.",
					h1: "Easy Anti-Cheat Bypass — DBD Cheats Maintenance",
					intro: "Understand Easy Anti-Cheat maintenance for DBD Cheats — how ESP wallhack, radar hack, and Aimbot rebuild after Dead by Daylight security updates.",
					imageAlt: "DBD Cheats maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Easy Anti-Cheat maintenance visuals",
					ctaPrimary: "Buy DBD Cheats",
					ctaSecondary: "Check updates",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Easy Anti-Cheat overview",
							paragraphs: [
								"Easy Anti-Cheat is Behaviour Interactive' anti-cheat for Dead by Daylight on PC (see <a href=\"https://www.easy.ac/\" target=\"_blank\" rel=\"noopener noreferrer\">Easy Anti-Cheat</a>). Security updates can affect ESP wallhack, radar, and Aimbot behavior — requiring maintenance rebuilds for undetected packages.",
								"DBD Cheats monitors Easy Anti-Cheat patch notes and Dead by Daylight seasonal updates from <a href=\"https://store.steampowered.com/app/381210/Dead_by_Daylight/\" target=\"_blank\" rel=\"noopener noreferrer\">Dead by Daylight</a> to schedule module reviews.",
								"“Easy Anti-Cheat bypass” in our wording means timely maintenance — not a permanent free pass around anti-cheat.",
							],
						},
						{
							h2: "What happens after a Easy Anti-Cheat patch",
							paragraphs: [
								"The team tests ESP overlays, radar signatures, and Aimbot profiles against the new build, publishes status on <a href=\"/updates/\">Updates</a>, and ships rebuilt packages to active licenses.",
								"Confirm Behaviour Interactive service health on <a href=\"https://store.steampowered.com/app/381210/Dead_by_Daylight/\" target=\"_blank\" rel=\"noopener noreferrer\">Dead by Daylight on Steam</a> if the launcher or matchmaking fails during the same window.",
								"Avoid queueing on old builds after major patch days until maintenance notes confirm a new release. Related reading: <a href=\"/dead-by-daylight-cheats/\">undetected dbd cheats</a>.",
							],
						},
						{
							h2: "No permanent bypass guarantee",
							paragraphs: [
								"Easy Anti-Cheat bypass in practice means timely maintenance. Read the undetected guide, <a href=\"/faq/\">FAQ</a>, and Updates log before every trial.",
								"Contact <a href=\"/support/\">Support</a> if activation fails immediately after a posted rebuild.",
								"Buying for the first time? Compare <a href=\"/pricing/\">Pricing</a> and finish <a href=\"/setup/\">Setup</a> only after Updates shows a live build.",
							],
						},
					],
					heroImage: "/images/dbd-cheats-aimbot.webp",
				},
				"cheats-2026": {
					title: "DBD Cheats 2026 | ESP Soft Aim & Radar",
					description: "Best dbd cheats 2026: ESP boxes, soft aim, and radar for Windows PC. Undetected dbd cheats with Easy Anti-Cheat maintenance — compare and buy.",
					h1: "Dead by Daylight Cheats 2026 — ESP, Soft Aim & Radar",
					intro: "The 2026 DBD Cheats package for Dead by Daylight — undetected ESP wallhack, radar hack, and Aimbot with Easy Anti-Cheat maintenance, instant delivery, and Windows PC support.",
					imageAlt: "DBD Cheats product overview for Dead by Daylight",
					galleryTitle: "DBD Cheats 2026 gallery",
					ctaPrimary: "Buy DBD Cheats",
					ctaSecondary: "Compare features",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Why dbd cheats buyers choose DBD Cheats in 2026",
							paragraphs: [
								"2026 updates bring new maps, killer balance changes, and Easy Anti-Cheat patches. DBD Cheats bundles ESP wallhack, radar hack, and Aimbot with active maintenance — not a stale prior-year build.",
								"Track official season messaging on <a href=\"https://store.steampowered.com/app/381210/Dead_by_Daylight/\" target=\"_blank\" rel=\"noopener noreferrer\">Dead by Daylight</a>, then use our <a href=\"/updates/\">Updates log</a> for product rebuild timing.",
								"Monthly ($35) and lifetime ($150) plans cover trial and chase loops — see <a href=\"/pricing/\">Pricing</a>.",
							],
						},
						{
							h2: "Full feature stack for 2026 buyers",
							paragraphs: [
								"Player ESP wallhack, generator markers, 2D radar overlays, Aimbot profiles, in-client toggles, and post-patch rebuilds — one license instead of stacking separate tools.",
								"Deep links: <a href=\"/dead-by-daylight-cheats/\">DBD Cheats pillar</a>, <a href=\"/dbd-esp/\">ESP</a>, <a href=\"/dbd-aimbot/\">Aimbot</a>, <a href=\"/dbd-esp/\">wallhack</a>, <a href=\"/dbd-radar-hack/\">radar</a>, <a href=\"/dead-by-daylight-cheats/\">undetected</a>.",
								"Instant digital delivery after checkout confirmation worldwide.",
							],
						},
						{
							h2: "Before you buy in 2026",
							paragraphs: [
								"Read the <a href=\"/dead-by-daylight-cheats/\">dbd cheats</a> pillar, Features, Pricing, Setup, and Updates pages. Check undetected status notes after every major patch — responsible use and maintenance awareness matter.",
								"Also compare the <a href=\"/dead-by-daylight-cheats/\">dbd cheats</a> checklist, <a href=\"/blog/dbd-cheats-2026-whats-new/\">2026 blog guide</a>, and <a href=\"/faq/\">FAQ</a>.",
								"Support is available at support@dbdcheats.org via the <a href=\"/support/\">Support page</a>.",
							],
						},
					],
					heroImage: "/images/dbd-cheats-esp.webp",
				},
				hacks: {
					title: "DBD Cheats 2026 | Undetected ESP Aimbot Guide",
					description: "dbd cheats for Windows PC: undetected ESP wallhack, radar hack, and Aimbot with Easy Anti-Cheat maintenance. Compare dbd cheats options and buy the full",
					h1: "Dead by Daylight Cheats — Undetected ESP, Aimbot & Wallhack",
					intro: "dbd cheats for trial and chase combine ESP wallhack visibility, 2D radar-style threat cues, and Aimbot controls in one undetected Windows PC license — maintained after Easy Anti-Cheat patches. This is the pillar guide for dbd cheats in 2026.",
					imageAlt: "DBD Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "dbd cheats gallery — ESP, Aimbot, wallhack",
					ctaPrimary: "Buy DBD Cheats",
					ctaSecondary: "See undetected guide",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "What dbd cheats include in 2026",
							paragraphs: [
								"Players searching for dbd cheats usually want visibility and combat tools without stacking separate downloads. DBD Cheats bundles player ESP wallhack, generator markers, 2D radar overlays, and configurable Aimbot in one maintained package — the same toolkit often called dbd cheats.",
								"Coverage spans trial and chase with in-client toggles for live matches. Monthly ($35) and lifetime ($150) licenses unlock the full stack.",
								"Official game updates come from <a href=\"https://store.steampowered.com/app/381210/Dead_by_Daylight/\" target=\"_blank\" rel=\"noopener noreferrer\">Dead by Daylight</a>; our hacks package tracks those releases via the <a href=\"/updates/\">Updates page</a>. Cross-check platform health on <a href=\"https://store.steampowered.com/app/381210/Dead_by_Daylight/\" target=\"_blank\" rel=\"noopener noreferrer\">Dead by Daylight on Steam</a> before patch-day queues.",
							],
						},
						{
							h2: "How this DBD Cheats pillar fits nearby pages",
							paragraphs: [
								"Use this pillar for the core product overview. For year-specific buying notes, see the <a href=\"/dead-by-daylight-cheats/\">dbd cheats 2026</a> and <a href=\"/dead-by-daylight-cheats/\">dbd cheats</a> pages cover buyer comparisons in cheats wording.",
								"Deep-dive modules: <a href=\"/dbd-esp/\">DBD ESP</a>, <a href=\"/dbd-aimbot/\">DBD Aimbot</a>, <a href=\"/dbd-esp/\">wallhack</a>, <a href=\"/dbd-radar-hack/\">radar hack</a>, and <a href=\"/dbd-aimbot/\">soft aim</a>.",
								"Blog guides expand Easy Anti-Cheat keyword: <a href=\"/blog/dbd-hacks-complete-guide-2026/\">hacks complete guide</a>, <a href=\"/blog/dbd-hacks-buyers-guide/\">cheats buyers guide</a>, and <a href=\"/blog/undetected-dbd-cheats-eac/\">undetected Easy Anti-Cheat notes</a>.",
							],
						},
						{
							h2: "dbd cheats vs single-feature tools",
							paragraphs: [
								"Standalone hacks often cover only wallhack or only aim assist. DBD Cheats maps the full trial loop: read enemy teams, track killers and generators, spot flanks on radar, and tune Aimbot per killer.",
								"Compare the <a href=\"/dbd-esp/\">ESP</a>, <a href=\"/dbd-aimbot/\">Aimbot</a>, and <a href=\"/features/\">Features</a> pages — or review <a href=\"/pricing/\">Pricing</a> for monthly and lifetime licenses.",
								"Related landings: <a href=\"/setup/\">cheat download</a>, <a href=\"/dead-by-daylight-cheats/\">mod menu</a>, <a href=\"/dbd-aimbot/\">aimbot</a>, <a href=\"/dbd-esp/\">ESP</a>.",
							],
						},
						{
							h2: "Undetected dbd cheats with Easy Anti-Cheat maintenance",
							paragraphs: [
								"Undetected dbd cheats require rebuilds after Easy Anti-Cheat and major Dead by Daylight patches. Check Updates before queueing — maintenance notes confirm when a new build is live. No package can promise permanent undetected status.",
								"See <a href=\"https://www.easy.ac/\" target=\"_blank\" rel=\"noopener noreferrer\">Easy Anti-Cheat</a> for anti-cheat background and our <a href=\"/updates/\">Easy Anti-Cheat bypass guide</a> for the practical workflow. Pair with <a href=\"/dead-by-daylight-cheats/\">undetected dbd cheats</a> for status language buyers expect.",
								"Digital delivery runs after checkout for Windows 10 and 11 PCs worldwide. After purchase, follow <a href=\"/setup/\">Setup</a> and keep <a href=\"/support/\">Support</a> ready with your order ID.",
							],
						},
					],
					heroImage: "/images/dbd-cheats-match.webp",
				},
				"cheat-download": {
					title: "Dead by Daylight Hack Download 2026 | Instant Access",
					description: "dbd cheat download with instant license delivery — ESP boxes, soft aim, and radar for Windows PC. Buy, activate, and play.",
					h1: "Dead by Daylight Hack Download — Instant License Delivery",
					intro: "How dbd cheat download works for Dead by Daylight — digital license delivery after payment confirmation, with ESP wallhack, radar hack, and Aimbot access on Windows PC.",
					imageAlt: "DBD Cheats download and install delivery flow",
					galleryTitle: "dbd cheat download visuals",
					ctaPrimary: "Buy DBD Cheats",
					ctaSecondary: "Setup guide",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "How dbd cheat download delivery works",
							paragraphs: [
								"After checkout confirms payment, DBD Cheats license details arrive digitally by email. No physical shipment — access begins once activation instructions are delivered.",
								"Keep your order confirmation and license email ready for the <a href=\"/setup/\">Setup guide</a> and Support requests.",
								"If Behaviour Interactive services are down, check <a href=\"https://store.steampowered.com/app/381210/Dead_by_Daylight/\" target=\"_blank\" rel=\"noopener noreferrer\">Dead by Daylight on Steam</a> before assuming a download failure.",
							],
						},
						{
							h2: "What your download unlocks",
							paragraphs: [
								"Every dbd cheat download includes player ESP wallhack, generators and hook markers, 2D radar overlays, Aimbot profiles, and in-client toggles for survivor and killer trials.",
								"Monthly ($35) and lifetime ($150) plans share the same feature stack — compare options on the <a href=\"/pricing/\">Pricing page</a>.",
								"Feature detail: <a href=\"/features/\">Features</a>. Module pages: <a href=\"/dbd-esp/\">ESP</a>, <a href=\"/dbd-aimbot/\">Aimbot</a>.",
							],
						},
						{
							h2: "After purchase — setup and updates",
							paragraphs: [
								"Follow Setup to activate ESP wallhack and Aimbot on Windows 10 or 11. When Dead by Daylight or Easy Anti-Cheat patches ship, check the <a href=\"/updates/\">Updates page</a> for maintenance rebuilds.",
								"Contact <a href=\"/support/\">Support</a> with your order ID if delivery or activation fails within 24 hours of purchase.",
								"Also read <a href=\"/dead-by-daylight-cheats/\">undetected status</a> so you know what “download ready” means after a patch.",
							],
						},
					],
					heroImage: "/images/dbd-cheats-match.webp",
				},
				"mod-menu": {
					title: "Dead by Daylight Mod Menu 2026 | ESP & Soft Aim Toggles",
					description: "Dead by Daylight mod menu for in-match toggles — ESP boxes, soft aim, radar, and on Windows PC. Undetected DBD Cheats package.",
					h1: "Dead by Daylight Mod Menu — In-Client Control Panel",
					intro: "Dead by Daylight mod menu controls for Dead by Daylight — toggle ESP wallhack categories, radar range, and Aimbot profiles mid-match without leaving your Dead by Daylight trial on Windows PC.",
					imageAlt: "DBD Cheats in-game menu controls",
					galleryTitle: "Dead by Daylight mod menu gallery",
					ctaPrimary: "Buy DBD Cheats",
					ctaSecondary: "Full feature list",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "What a Dead by Daylight mod menu controls",
							paragraphs: [
								"A Dead by Daylight mod menu is the in-client panel where you enable ESP wallhack overlays, adjust radar range, and switch Aimbot profiles during live matches. DBD Cheats keeps those toggles accessible with hotkeys.",
								"Toggle player outlines, generator markers, killer cues, and per-killer Aimbot settings without alt-tabbing out of Dead by Daylight.",
								"Control deep-dives: <a href=\"/dbd-esp/\">ESP</a>, <a href=\"/dbd-aimbot/\">Aimbot</a>, <a href=\"/dbd-radar-hack/\">radar</a>.",
							],
						},
						{
							h2: "Mod menu categories for survivor and killer trials",
							paragraphs: [
								"Separate ESP wallhack categories for players, generators, hook locations, and killers let you reduce overlay noise during rotations and hook zones.",
								"Radar hack range and Aimbot smoothness adjust from the same mod menu — useful when ${EXT.dbd} seasons change fight distances and mobility.",
								"Soft tracking players should start with <a href=\"/dbd-aimbot/\">soft aim</a> profiles before aggressive FOV.",
							],
						},
						{
							h2: "Maintained mod menu after Easy Anti-Cheat patches",
							paragraphs: [
								"Dead by Daylight mod menu behavior is rebuilt when Easy Anti-Cheat or major Dead by Daylight updates land. Follow the <a href=\"/updates/\">Updates page</a> and <a href=\"/updates/\">Easy Anti-Cheat bypass guide</a> before queueing on patch days.",
								"Checkout with instant digital delivery for monthly and lifetime licenses — see <a href=\"/pricing/\">Pricing</a>.",
								"Need install steps? Open <a href=\"/setup/\">Setup</a> after your license email arrives.",
							],
						},
					],
					heroImage: "/images/dbd-cheats-radar.webp",
				},
				"soft-aim": {
					title: "Dead by Daylight Soft Aim 2026 | Smooth Aimbot Settings",
					description: "Dead by Daylight soft aim settings for natural tracking on Windows PC. Smoothness, FOV, and bone priority — included in our dbd cheats with ESP boxes.",
					h1: "Dead by Daylight Soft Aim — Smooth Aimbot Controls",
					intro: "Dead by Daylight soft aim settings for Dead by Daylight — configurable Aimbot smoothness, FOV, bone priority, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.",
					imageAlt: "Dead by Daylight soft aim FOV and smoothness settings",
					galleryTitle: "Dead by Daylight soft aim gallery",
					ctaPrimary: "Buy DBD Cheats",
					ctaSecondary: "Aimbot controls",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "What Dead by Daylight soft aim means",
							paragraphs: [
								"Dead by Daylight soft aim refers to Aimbot behavior tuned for smooth, natural-looking tracking rather than instant snap. DBD Cheats exposes smoothness, FOV, and aim smoothing sliders so you control how assist feels in BR chases.",
								"Bone priority and target selection cover closest player, lowest health, or highest-threat targets during team chases.",
								"Full Aimbot documentation: <a href=\"/dbd-aimbot/\">DBD Aimbot</a>. Alternate wording: <a href=\"/dbd-aimbot/\">aimbot hack</a>.",
							],
						},
						{
							h2: "Soft aim profiles per killer",
							paragraphs: [
								"Save separate soft aim profiles for killers, killer builds, and skill-check killers. Switch between skill-check killer chases and close team chases with hotkeys mid-trial.",
								"Weapon chase pressures shift with <a href=\"https://store.steampowered.com/app/381210/Dead_by_Daylight/\" target=\"_blank\" rel=\"noopener noreferrer\">Dead by Daylight</a> balance patches — retune smoothness after major combat updates.",
								"Soft aim ships alongside <a href=\"/dbd-esp/\">ESP wallhack</a> and <a href=\"/dbd-radar-hack/\">2D radar</a> overlays.",
							],
						},
						{
							h2: "Undetected soft aim with Easy Anti-Cheat maintenance",
							paragraphs: [
								"Aimbot modules rebuild after Easy Anti-Cheat patches. Check the <a href=\"/updates/\">Updates page</a> before queueing — responsible settings and maintenance awareness matter for undetected play.",
								"Monthly and lifetime licenses checkout with digital delivery on Windows PC — <a href=\"/pricing/\">Pricing</a>.",
								"Activation help: <a href=\"/setup/\">Setup</a> · status questions: <a href=\"/support/\">Support</a>.",
							],
						},
					],
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
				},
				"best-cheats": {
					title: "Best DBD Cheats 2026 | Buyer Guide",
					description: "Best dbd cheats for 2026: ESP boxes, soft aim, and Easy Anti-Cheat maintenance on Windows PC. Use this checklist before checkout.",
					h1: "Best Dead by Daylight Cheats — 2026 Buyer Guide",
					intro: "Compare dbd cheats for Dead by Daylight in 2026 — undetected ESP wallhack, radar hack, and Aimbot in one maintained package with Easy Anti-Cheat rebuilds and instant delivery.",
					imageAlt: "DBD Cheats overview for Dead by Daylight on PC",
					galleryTitle: "Best dbd cheats gallery",
					ctaPrimary: "Buy DBD Cheats",
					ctaSecondary: "Compare pricing",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "What makes dbd cheats in 2026",
							paragraphs: [
								"The dbd hacks combine active Easy Anti-Cheat maintenance, a full ESP wallhack and radar stack, configurable Aimbot, and clear update communication — not a stale build from a prior season.",
								"DBD Cheats covers trial and chase with in-client toggles and post-patch rebuilds.",
								"Verify the live game is healthy via <a href=\"https://store.steampowered.com/app/381210/Dead_by_Daylight/\" target=\"_blank\" rel=\"noopener noreferrer\">Dead by Daylight on Steam</a>, then confirm our <a href=\"/updates/\">Updates</a> note before you judge any package “best.”",
							],
						},
						{
							h2: "Best dbd cheats feature checklist",
							paragraphs: [
								"Look for player ESP wallhack, generator markers, 2D radar overlays, Aimbot profiles, hotkey toggles, and documented maintenance after Dead by Daylight patches.",
								"Review <a href=\"/features/\">Features</a>, <a href=\"/dead-by-daylight-cheats/\">undetected status</a>, and <a href=\"/dead-by-daylight-cheats/\">dbd cheats 2026</a> before checkout — monthly ($35) and lifetime ($150) plans available.",
								"Module pages worth opening: <a href=\"/dbd-esp/\">ESP</a>, <a href=\"/dbd-aimbot/\">Aimbot</a>, <a href=\"/dead-by-daylight-cheats/\">hacks</a>.",
							],
						},
						{
							h2: "Buying dbd cheats safely",
							paragraphs: [
								"Purchase through secure checkout for instant digital delivery. Read Setup, FAQ, and Updates pages before your first queue — and contact Support with order details if activation needs help.",
								"No cheat guarantees permanent undetected status — combine maintenance with responsible in-game settings.",
								"Remember: using cheats can violate Behaviour Interactive terms. Proceed only if you accept that risk.",
							],
						},
					],
					heroImage: "/images/dbd-cheats-esp.webp",
				},
				"aimbot-hack": {
					title: "DBD Aimbot Hack 2026 | Soft Aim Assist",
					description: "DBD Aimbot hack with soft aim for Windows PC. FOV, bone priority, and hotkeys — bundled with ESP boxes in our DBD Cheats package.",
					h1: "Dead by Daylight Aimbot Hack — Soft Aim Assist",
					intro: "DBD Aimbot hack tools for Dead by Daylight — smoothness, FOV, bone priority, per-killer profiles, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.",
					imageAlt: "DBD Aimbot hack controls and bone priority",
					galleryTitle: "DBD Aimbot hack gallery",
					ctaPrimary: "Buy DBD Cheats",
					ctaSecondary: "Aimbot settings",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "DBD Aimbot hack vs visibility tools",
							paragraphs: [
								"A DBD Aimbot hack focuses on assisted targeting during chases — while ESP wallhack and radar handle map awareness. DBD Cheats bundles aimbot hack modules with visibility overlays in one license.",
								"Smoothness, FOV, and aim smoothing controls tune assist for Dead by Daylight combat pace across survivor and killer trials.",
								"Prefer softer tracking language? See <a href=\"/dbd-aimbot/\">soft aim</a>. Full settings: <a href=\"/dbd-aimbot/\">Aimbot page</a>.",
							],
						},
						{
							h2: "Aimbot hack controls and hotkeys",
							paragraphs: [
								"Bone priority options cover head, chest, or dynamic targets. Hotkeys enable or disable aimbot hack mid-match without opening menus during rotations or late-trial generators.",
								"Per-killer profile slots separate skill-check AR tuning from close-quarters SMG settings.",
								"Balance patches from <a href=\"https://store.steampowered.com/app/381210/Dead_by_Daylight/\" target=\"_blank\" rel=\"noopener noreferrer\">Dead by Daylight</a> can change ideal FOV — retune after major killer balance updates.",
							],
						},
						{
							h2: "Undetected aimbot hack maintenance",
							paragraphs: [
								"Aimbot hack signatures rebuild after Easy Anti-Cheat updates. Follow the <a href=\"/updates/\">Updates page</a> and <a href=\"/updates/\">Easy Anti-Cheat bypass guide</a> before queueing after patch days.",
								"Checkout with instant digital delivery for Windows 10 and 11 — <a href=\"/pricing/\">Pricing</a>.",
								"Pair with <a href=\"/dbd-esp/\">ESP</a> for the full information + assist loop.",
							],
						},
					],
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
				},
				"esp-hack": {
					title: "DBD ESP Hack 2026 | Player Boxes & Loot",
					description: "DBD ESP hack with player boxes and generator markers for Windows PC. Undetected dbd cheats with — see overlays and buy.",
					h1: "Dead by Daylight ESP Hack — Player Boxes Guide",
					intro: "DBD ESP hack overlays for Dead by Daylight — player outlines, killer threat cues, generator and hook markers with distance readouts across trial and chase.",
					imageAlt: "DBD ESP hack boxes and generator markers",
					galleryTitle: "DBD ESP hack gallery",
					ctaPrimary: "Buy DBD Cheats",
					ctaSecondary: "ESP controls",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "What a DBD ESP hack shows",
							paragraphs: [
								"A DBD ESP hack renders enemy player outlines, killer positions, and generator pins through walls and terrain — closing the information gap before you commit to a fight.",
								"Distance readouts and snapline options help control engagement range during team chases and third-party scenarios.",
								"Canonical visibility guide: <a href=\"/dbd-esp/\">DBD ESP</a>. Wallhack wording: <a href=\"/dbd-esp/\">wallhack</a>.",
							],
						},
						{
							h2: "ESP hack categories for trials",
							paragraphs: [
								"Toggle player ESP hack, generator markers, chest pins, and killer cues independently so only trial-critical overlays stay active during rotations.",
								"Team and enemy colour coding supports survivor and killer trials.",
								"tile and generator changes publish through <a href=\"https://store.steampowered.com/app/381210/Dead_by_Daylight/\" target=\"_blank\" rel=\"noopener noreferrer\">Dead by Daylight</a> — keep categories toggled to what the current map rewards.",
							],
						},
						{
							h2: "Undetected ESP hack with Easy Anti-Cheat maintenance",
							paragraphs: [
								"ESP hack modules rebuild after Easy Anti-Cheat and Dead by Daylight patches. Check the <a href=\"/updates/\">Updates page</a> before queueing — pair ESP hack awareness with <a href=\"/dbd-radar-hack/\">radar hack</a> for flank reads.",
								"Licenses deliver digitally after checkout on Windows PC — see <a href=\"/pricing/\">Pricing</a>.",
								"Install steps: <a href=\"/setup/\">Setup</a>. Status questions: <a href=\"/dead-by-daylight-cheats/\">undetected guide</a>.",
							],
						},
					],
					heroImage: "/images/dbd-cheats-wallhack.webp",
				},
				"unlock-all": {
					title: "Dead by Daylight Unlock All 2026 | What It Really Means",
					description: "Dead by Daylight unlock-all explained vs real dbd cheats — ESP boxes, soft aim, and radar for Windows PC. Know what you are buying.",
					h1: "Dead by Daylight Unlock All — What Players Search For",
					intro: "Dead by Daylight unlock-all is a common search term for Dead by Daylight — this page clarifies what unlock-all tools claim versus the ESP wallhack, radar hack, and Aimbot tools DBD Cheats actually provides on Windows PC.",
					imageAlt: "DBD Cheats license features overview",
					galleryTitle: "Dead by Daylight unlock-all guide visuals",
					ctaPrimary: "Buy DBD Cheats",
					ctaSecondary: "See features",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "What Dead by Daylight unlock-all usually means",
							paragraphs: [
								"Dead by Daylight unlock-all searches often refer to instant access to killers, skins, or killer tiers. Those claims differ from visibility and combat-assist tools like ESP wallhack and Aimbot.",
								"DBD Cheats focuses on in-match awareness — player ESP, generator markers, radar overlays, and configurable Aimbot — not account-wide cosmetic unlocks.",
								"Cosmetics and patch cycle progression items are sold through <a href=\"https://store.steampowered.com/app/381210/Dead_by_Daylight/\" target=\"_blank\" rel=\"noopener noreferrer\">Dead by Daylight</a>. Be wary of unlock-all downloads that promise free skins — they are often scams.",
							],
						},
						{
							h2: "Visibility tools vs unlock-all claims",
							paragraphs: [
								"ESP wallhack helps you spot enemy teams, killers, and high-value objectives during live trials. Radar hack adds flank awareness; Aimbot covers combat assist with smoothness and hotkey controls.",
								"For perk planning during a match, generators and hook markers speed map rotations — see the <a href=\"/dbd-esp/\">ESP</a> and <a href=\"/features/\">Features</a> pages for the full tool list.",
								"Related: <a href=\"/dead-by-daylight-cheats/\">dbd cheats</a> and <a href=\"/dead-by-daylight-cheats/\">dbd cheats</a>.",
							],
						},
						{
							h2: "Buying DBD Cheats for the right reasons",
							paragraphs: [
								"If you need undetected ESP wallhack, radar hack, and Aimbot for Dead by Daylight on Windows PC, compare <a href=\"/pricing/\">Pricing</a> and read the <a href=\"/setup/\">Setup guide</a> before checkout.",
								"Check the <a href=\"/updates/\">Updates page</a> after Easy Anti-Cheat patches — maintenance rebuilds publish for active licenses.",
								"Questions? <a href=\"/faq/\">FAQ</a> and <a href=\"/support/\">Support</a> cover delivery and configuration — not cosmetic unlocks.",
							],
						},
					],
					heroImage: "/images/dbd-cheats-radar.webp",
				},
				privacy: {
					title: "Privacy Policy | DBD Cheats",
					description: "Privacy policy for DBD Cheats. How we handle support emails, order data, and checkout for dbd cheats licenses on dbdcheats.org.",
					h1: "Privacy Policy",
					intro: "How DBD Cheats handles information when you browse dbdcheats.org or contact support about a Dead by Daylight license.",
					imageAlt: "DBD Cheats privacy policy page",
					galleryTitle: "DBD Cheats legal resources",
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
								"Analytics may use aggregated traffic data without identifying individual DBD Cheats customers.",
							],
						},
						{
							h2: "Your choices and contact",
							paragraphs: [
								"You may request correction or deletion of support email data by contacting support@dbdcheats.org with your request details.",
								"Policy updates publish on this page. Continued use of dbdcheats.org after updates means you accept the revised policy. Also see <a href=\"/terms/\">Terms of Use</a> and <a href=\"/refund-policy/\">Refund Policy</a>.",
							],
						},
					],
					heroImage: "/images/dbd-cheats-aimbot.webp",
				},
				refund: {
					title: "Refund Policy | DBD Cheats",
					description: "Refund policy for DBD Cheats. Digital delivery terms and eligibility for DBD Cheats packages with ESP, soft aim, and radar.",
					h1: "Refund Policy",
					intro: "Refund terms for DBD Cheats licenses — ESP wallhack, radar hack, and Aimbot packages purchased through checkout for Dead by Daylight.",
					imageAlt: "DBD Cheats refund policy page",
					galleryTitle: "DBD Cheats billing resources",
					ctaPrimary: "Contact support",
					ctaSecondary: "Read privacy policy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery and eligibility",
							paragraphs: [
								"DBD Cheats licenses deliver digitally after payment confirmation. Because access begins immediately, refunds are limited to cases outlined below.",
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
								"Email support@dbdcheats.org with subject \"Refund Request\", your order ID, purchase date, and issue summary — or use the <a href=\"/support/\">Support page</a>.",
								"Approved refunds process back to the original payment method when possible. Pricing details live on <a href=\"/pricing/\">Pricing</a>.",
							],
						},
					],
					heroImage: "/images/dbd-cheats-match.webp",
				},
				terms: {
					title: "Terms of Use 2026 | DBD Cheats Rules",
					description: "Terms of use for dbdcheats.org and DBD Cheats licenses. Usage rules, anti-cheat risk, and liability for Windows PC cheats.",
					h1: "Terms of Use",
					intro: "Terms governing use of dbdcheats.org and DBD Cheats licenses for Dead by Daylight on Windows PC.",
					imageAlt: "DBD Cheats terms of use page",
					galleryTitle: "DBD Cheats legal pages",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy policy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance and license scope",
							paragraphs: [
								"By purchasing or using DBD Cheats you agree to these terms. Licenses grant personal use of ESP wallhack, radar, and Aimbot tools for Dead by Daylight on Windows PC only.",
								"Sharing, reselling, or reverse-engineering the package violates these terms and may revoke access.",
							],
						},
						{
							h2: "Risk and anti-cheat disclaimer",
							paragraphs: [
								"Using cheats in Dead by Daylight may violate Behaviour Interactive terms and result in account penalties. DBD Cheats provides maintenance but does not guarantee undetected status or account safety.",
								"You assume all risk. We are not liable for bans, data loss, or damages arising from product use. See also <a href=\"/dead-by-daylight-cheats/\">undetected status</a>.",
							],
						},
						{
							h2: "Changes and governing law",
							paragraphs: [
								"We may update these terms by posting revisions on this page. Continued use after changes constitutes acceptance.",
								"Contact support@dbdcheats.org for questions. Related policies: <a href=\"/privacy-policy/\">Privacy</a> and <a href=\"/refund-policy/\">Refunds</a>.",
							],
						},
					],
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
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
					accent: "Trucos Dead by Daylight indetectables",
					accentShort: "DBD Cheats",
					subtitle: "ESP wallhack, radar hack y Aimbot para Dead by Daylight en PC Windows — mantenimiento Easy Anti-Cheat incluido.",
					subtitleShort: "ESP, radar y Aimbot para Dead by Daylight PC",
					buyNow: "Comprar ahora",
					seeFeatures: "Ver funciones",
				},
				trust: {
					status: "En línea",
					statusNote: "El paquete DBD Cheats está activo para Dead by Daylight en PC Windows.",
					statusShort: "Activo",
					delivery: "Entrega digital instantánea",
					platform: "Windows 10 y 11",
					antiCheat: "Mantenimiento Easy Anti-Cheat incluido",
					antiCheatShort: "Easy Anti-Cheat incluido",
				},
				product: {
					title: "DBD Cheats",
					addToCart: "Añadir al carrito",
					monthly: "Mensual",
					lifetime: "De por vida",
					available: "Disponible ahora",
					gameBadge: "Dead by Daylight",
					platformBadge: "PC Windows",
					statusBadge: "Paquete indetectable",
				},
				reviews: {
					title: "Lo que dicen los jugadores",
					subtitle: "Comentarios recientes de compradores de DBD Cheats",
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
					tagline: "ESP, wallhack, radar y Aimbot indetectables para Dead by Daylight — checkout en Zadeyo.",
				},
				images: {
					hero: "DBD Cheats hero — ESP and aimbot overlay in Dead by Daylight",
					espWallhack: "Wallhack outlines showing survivors and killers through walls",
					aimbotCombat: "Soft aim assist overlay during a Dead by Daylight trial",
					teamFight: "DBD Cheats combat overlay during a team chase",
					playerEsp: "Player ESP boxes and distance readouts in a Dead by Daylight trial",
					headerArt: "Aimbot view and bone priority controls for Dead by Daylight",
					hacksPackage: "2D radar threat overlay for Dead by Daylight",
					chaseFight: "Aimbot assist during a Dead by Daylight chase",
					battleRoyale: "DBD Cheats in-trial overview for Windows PC",
					trialMap: "ESP markers for generators and hooks in Dead by Daylight",
				},
			},
			pages: {
				home: {
					title: "DBD Cheats 2026 | ESP, Wallhack y Aimbot",
					description: "Trucos Dead by Daylight indetectables para Dead by Daylight en PC. ESP wallhack, radar hack y Aimbot con mantenimiento Easy Anti-Cheat. Entrega digital",
					h1: "DBD Cheats — ESP, Wallhack y Aimbot indetectables",
					intro: "Paquete undetected para Dead by Daylight en Windows PC: ESP wallhack, radar y Aimbot con mantenimiento Easy Anti-Cheat tras cada parche.",
					imageAlt: "DBD ESP — etiquetas de jugador hack",
					galleryTitle: "Galería DBD Cheats — ESP, Aimbot y wallhack",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "Comprar DBD Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Por qué eligen DBD Cheats en 2026",
							paragraphs: [
								"DBD Cheats ofrece ESP wallhack, radar hack y DBD Aimbot indetectables para Dead by Daylight en Windows PC. Ideal para leer escuadrones enemigos en BR y chase.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar y Aimbot en una licencia",
							paragraphs: [
								"DBD Cheats ofrece ESP wallhack, radar hack y DBD Aimbot indetectables para Dead by Daylight en Windows PC. Una licencia en lugar de herramientas separadas.",
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
							],
						},
					],
				},
				"dbd-esp": {
					title: "ESP Dead by Daylight | Cajas de jugador y wallhack",
					description: "ESP Dead by Daylight: cajas de jugador, marcadores de carcasa y overlays wallhack. entrega digital instantánea. indetectables — Windows PC.",
					h1: "ESP Dead by Daylight",
					intro: "DBD Cheats ofrece ESP wallhack, radar hack y DBD Aimbot indetectables para Dead by Daylight en Windows PC. ESP Dead by Daylight.",
					imageAlt: "DBD ESP player boxes and distance readouts in a trial",
					galleryTitle: "ESP Dead by Daylight",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "Comprar DBD Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "ESP Dead by Daylight",
							paragraphs: [
								"DBD Cheats ofrece ESP wallhack, radar hack y DBD Aimbot indetectables para Dead by Daylight en Windows PC. cajas de jugador, marcadores de carcasa y overlays wallhack.",
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
								"Contacta support@dbdcheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"dbd-aimbot": {
					title: "Aimbot Dead by Daylight | Controles soft aim",
					description: "Aimbot Dead by Daylight: soft aim, FOV y perfiles Aimbot por especie. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Aimbot Dead by Daylight",
					intro: "DBD Cheats ofrece ESP wallhack, radar hack y DBD Aimbot indetectables para Dead by Daylight en Windows PC. Aimbot Dead by Daylight.",
					imageAlt: "DBD Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Dead by Daylight",
					heroImage: "/images/dbd-cheats-aimbot.webp",
					ctaPrimary: "Comprar DBD Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Aimbot Dead by Daylight",
							paragraphs: [
								"DBD Cheats ofrece ESP wallhack, radar hack y DBD Aimbot indetectables para Dead by Daylight en Windows PC. soft aim, FOV y perfiles Aimbot por especie.",
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
								"Contacta support@dbdcheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				features: {
					title: "Funciones | Lista completa de funciones",
					description: "Funciones: ESP, soft aim, controles de radar. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Funciones",
					intro: "DBD Cheats ofrece ESP wallhack, radar hack y DBD Aimbot indetectables para Dead by Daylight en Windows PC. Funciones.",
					imageAlt: "DBD Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funciones",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "Comprar DBD Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funciones",
							paragraphs: [
								"DBD Cheats ofrece ESP wallhack, radar hack y DBD Aimbot indetectables para Dead by Daylight en Windows PC. ESP, soft aim, controles de radar.",
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
								"Contacta support@dbdcheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				pricing: {
					title: "Precios | Mensual y de por vida",
					description: "Precios: licencias de $35 mensuales o $150 de por vida. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Precios",
					intro: "DBD Cheats ofrece ESP wallhack, radar hack y DBD Aimbot indetectables para Dead by Daylight en Windows PC. Precios.",
					imageAlt: "DBD Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Precios",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "Comprar DBD Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Precios",
							paragraphs: [
								"DBD Cheats ofrece ESP wallhack, radar hack y DBD Aimbot indetectables para Dead by Daylight en Windows PC. licencias de $35 mensuales o $150 de por vida.",
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
								"Contacta support@dbdcheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				setup: {
					title: "Instalación | Guía de instalación PC",
					description: "Instalación: activación en Windows PC y configuración del primer arranque. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Instalación",
					intro: "DBD Cheats ofrece ESP wallhack, radar hack y DBD Aimbot indetectables para Dead by Daylight en Windows PC. Instalación.",
					imageAlt: "DBD Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Instalación",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "Comprar DBD Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalación",
							paragraphs: [
								"DBD Cheats ofrece ESP wallhack, radar hack y DBD Aimbot indetectables para Dead by Daylight en Windows PC. activación en Windows PC y configuración del primer arranque.",
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
								"Contacta support@dbdcheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				updates: {
					title: "Actualizaciones | Registro Easy Anti-Cheat",
					description: "Actualizaciones: estado de parches Easy Anti-Cheat y notas de reconstrucción. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Actualizaciones",
					intro: "DBD Cheats ofrece ESP wallhack, radar hack y DBD Aimbot indetectables para Dead by Daylight en Windows PC. Actualizaciones.",
					imageAlt: "DBD Cheats live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Actualizaciones",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "Comprar DBD Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "Actualizaciones",
							paragraphs: [
								"DBD Cheats ofrece ESP wallhack, radar hack y DBD Aimbot indetectables para Dead by Daylight en Windows PC. estado de parches Easy Anti-Cheat y notas de reconstrucción.",
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
								"Contacta support@dbdcheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Preguntas frecuentes",
					description: "FAQ: preguntas sobre ESP, soft aim, entrega y Easy Anti-Cheat. entrega digital instantánea. indetectables — Windows PC.",
					h1: "FAQ",
					intro: "DBD Cheats ofrece ESP wallhack, radar hack y DBD Aimbot indetectables para Dead by Daylight en Windows PC. FAQ.",
					imageAlt: "DBD Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "Comprar DBD Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"DBD Cheats ofrece ESP wallhack, radar hack y DBD Aimbot indetectables para Dead by Daylight en Windows PC. preguntas sobre ESP, soft aim, entrega y Easy Anti-Cheat.",
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
								"Contacta support@dbdcheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				support: {
					title: "Soporte | Ayuda y contacto",
					description: "Soporte: ayuda con pedidos y contacto de soporte de licencias. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Soporte",
					intro: "DBD Cheats ofrece ESP wallhack, radar hack y DBD Aimbot indetectables para Dead by Daylight en Windows PC. Soporte.",
					imageAlt: "DBD Cheats support page for license and setup help",
					galleryTitle: "Soporte",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "Comprar DBD Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Soporte",
							paragraphs: [
								"DBD Cheats ofrece ESP wallhack, radar hack y DBD Aimbot indetectables para Dead by Daylight en Windows PC. ayuda con pedidos y contacto de soporte de licencias.",
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
								"Contacta support@dbdcheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				undetected: {
					title: "Trucos indetectables | Estado indetectable",
					description: "Trucos indetectables: mantenimiento undetected tras parches Easy Anti-Cheat. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Trucos indetectables",
					intro: "DBD Cheats ofrece ESP wallhack, radar hack y DBD Aimbot indetectables para Dead by Daylight en Windows PC. Trucos indetectables.",
					imageAlt: "DBD Cheats undetected status overview for Windows PC",
					galleryTitle: "Trucos indetectables",
					heroImage: "/images/dbd-cheats-wallhack.webp",
					ctaPrimary: "Comprar DBD Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "Trucos indetectables",
							paragraphs: [
								"DBD Cheats ofrece ESP wallhack, radar hack y DBD Aimbot indetectables para Dead by Daylight en Windows PC. mantenimiento undetected tras parches Easy Anti-Cheat.",
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
								"Contacta support@dbdcheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				wallhack: {
					title: "Dead by Daylight Wallhack | Visibilidad ESP",
					description: "Dead by Daylight Wallhack: wallhack ESP para jugadores, generators y distancia. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Dead by Daylight Wallhack",
					intro: "DBD Cheats ofrece ESP wallhack, radar hack y DBD Aimbot indetectables para Dead by Daylight en Windows PC. Dead by Daylight Wallhack.",
					imageAlt: "dbd wallhack visibility through walls in a trial",
					galleryTitle: "Dead by Daylight Wallhack",
					heroImage: "/images/dbd-cheats-wallhack.webp",
					ctaPrimary: "Comprar DBD Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Dead by Daylight Wallhack",
							paragraphs: [
								"DBD Cheats ofrece ESP wallhack, radar hack y DBD Aimbot indetectables para Dead by Daylight en Windows PC. wallhack ESP para jugadores, generators y distancia.",
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
								"Contacta support@dbdcheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | Radar 2D de amenazas",
					description: "Radar hack: señales de radar 2D para flancos y rotaciones. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Radar hack",
					intro: "DBD Cheats ofrece ESP wallhack, radar hack y DBD Aimbot indetectables para Dead by Daylight en Windows PC. Radar hack.",
					imageAlt: "Dead by Daylight 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "Comprar DBD Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"DBD Cheats ofrece ESP wallhack, radar hack y DBD Aimbot indetectables para Dead by Daylight en Windows PC. señales de radar 2D para flancos y rotaciones.",
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
								"Contacta support@dbdcheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Mantenimiento de parches",
					description: "Bypass Easy Anti-Cheat: cómo se gestionan las actualizaciones Easy Anti-Cheat para Dead by Daylight hacks. entrega digital instantánea. indetectables — Windows",
					h1: "Bypass Easy Anti-Cheat",
					intro: "DBD Cheats ofrece ESP wallhack, radar hack y DBD Aimbot indetectables para Dead by Daylight en Windows PC. Bypass Easy Anti-Cheat.",
					imageAlt: "DBD Cheats maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/dbd-cheats-aimbot.webp",
					ctaPrimary: "Comprar DBD Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"DBD Cheats ofrece ESP wallhack, radar hack y DBD Aimbot indetectables para Dead by Daylight en Windows PC. cómo se gestionan las actualizaciones Easy Anti-Cheat para Dead by Daylight hacks.",
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
								"Contacta support@dbdcheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Trucos Dead by Daylight 2026 | Guía del comprador",
					description: "Trucos Dead by Daylight 2026: checklist de dbd cheats 2026 antes del checkout. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Trucos Dead by Daylight 2026",
					intro: "DBD Cheats ofrece ESP wallhack, radar hack y DBD Aimbot indetectables para Dead by Daylight en Windows PC. Trucos Dead by Daylight 2026.",
					imageAlt: "DBD Cheats product overview for Dead by Daylight",
					galleryTitle: "Trucos Dead by Daylight 2026",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "Comprar DBD Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "Trucos Dead by Daylight 2026",
							paragraphs: [
								"DBD Cheats ofrece ESP wallhack, radar hack y DBD Aimbot indetectables para Dead by Daylight en Windows PC. checklist de dbd cheats 2026 antes del checkout.",
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
								"Contacta support@dbdcheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				hacks: {
					title: "Trucos Dead by Daylight | Guía ESP y Aimbot",
					description: "Trucos Dead by Daylight: pilar DBD Cheats para ESP y Aimbot. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Trucos Dead by Daylight",
					intro: "DBD Cheats ofrece ESP wallhack, radar hack y DBD Aimbot indetectables para Dead by Daylight en Windows PC. Trucos Dead by Daylight.",
					imageAlt: "DBD Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Trucos Dead by Daylight",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "Comprar DBD Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Trucos Dead by Daylight",
							paragraphs: [
								"DBD Cheats ofrece ESP wallhack, radar hack y DBD Aimbot indetectables para Dead by Daylight en Windows PC. pilar DBD Cheats para ESP y Aimbot.",
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
								"Contacta support@dbdcheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Descarga DBD Cheats | Acceso instantáneo",
					description: "Descarga DBD Cheats: descarga de licencia digital tras el pago. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Descarga DBD Cheats",
					intro: "DBD Cheats ofrece ESP wallhack, radar hack y DBD Aimbot indetectables para Dead by Daylight en Windows PC. Descarga DBD Cheats.",
					imageAlt: "DBD Cheats download and install delivery flow",
					galleryTitle: "Descarga DBD Cheats",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "Comprar DBD Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Descarga DBD Cheats",
							paragraphs: [
								"DBD Cheats ofrece ESP wallhack, radar hack y DBD Aimbot indetectables para Dead by Daylight en Windows PC. descarga de licencia digital tras el pago.",
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
								"Contacta support@dbdcheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Menú mod Dead by Daylight | Controles en partida",
					description: "Menú mod Dead by Daylight: toggles de ESP y soft aim en el cliente. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Menú mod Dead by Daylight",
					intro: "DBD Cheats ofrece ESP wallhack, radar hack y DBD Aimbot indetectables para Dead by Daylight en Windows PC. Menú mod Dead by Daylight.",
					imageAlt: "DBD Cheats in-game menu controls",
					galleryTitle: "Menú mod Dead by Daylight",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "Comprar DBD Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menú mod Dead by Daylight",
							paragraphs: [
								"DBD Cheats ofrece ESP wallhack, radar hack y DBD Aimbot indetectables para Dead by Daylight en Windows PC. toggles de ESP y soft aim en el cliente.",
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
								"Contacta support@dbdcheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Dead by Daylight | Ajustes soft aim",
					description: "Soft aim Dead by Daylight: ajustes suaves de soft aim para Windows PC. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Soft aim Dead by Daylight",
					intro: "DBD Cheats ofrece ESP wallhack, radar hack y DBD Aimbot indetectables para Dead by Daylight en Windows PC. Soft aim Dead by Daylight.",
					imageAlt: "Dead by Daylight soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Dead by Daylight",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "Comprar DBD Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "Soft aim Dead by Daylight",
							paragraphs: [
								"DBD Cheats ofrece ESP wallhack, radar hack y DBD Aimbot indetectables para Dead by Daylight en Windows PC. ajustes suaves de soft aim para Windows PC.",
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
								"Contacta support@dbdcheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Mejores trucos Dead by Daylight | Lista de compra",
					description: "Mejores trucos Dead by Daylight: qué comparar antes de comprar dbd cheats. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Mejores trucos Dead by Daylight",
					intro: "DBD Cheats ofrece ESP wallhack, radar hack y DBD Aimbot indetectables para Dead by Daylight en Windows PC. Mejores trucos Dead by Daylight.",
					imageAlt: "DBD Cheats overview for Dead by Daylight on PC",
					galleryTitle: "Mejores trucos Dead by Daylight",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "Comprar DBD Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Mejores trucos Dead by Daylight",
							paragraphs: [
								"DBD Cheats ofrece ESP wallhack, radar hack y DBD Aimbot indetectables para Dead by Daylight en Windows PC. qué comparar antes de comprar dbd cheats.",
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
								"Contacta support@dbdcheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Dead by Daylight | Asistencia soft aim",
					description: "Hack aimbot Dead by Daylight: asistencia undetected de hack Aimbot para Dead by Daylight. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Hack aimbot Dead by Daylight",
					intro: "DBD Cheats ofrece ESP wallhack, radar hack y DBD Aimbot indetectables para Dead by Daylight en Windows PC. Hack aimbot Dead by Daylight.",
					imageAlt: "DBD Aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Dead by Daylight",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "Comprar DBD Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Dead by Daylight",
							paragraphs: [
								"DBD Cheats ofrece ESP wallhack, radar hack y DBD Aimbot indetectables para Dead by Daylight en Windows PC. asistencia undetected de hack Aimbot para Dead by Daylight.",
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
								"Contacta support@dbdcheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Dead by Daylight | Cajas y generators",
					description: "Hack ESP Dead by Daylight: cajas ESP hack, pins de carcasa y distancia. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Hack ESP Dead by Daylight",
					intro: "DBD Cheats ofrece ESP wallhack, radar hack y DBD Aimbot indetectables para Dead by Daylight en Windows PC. Hack ESP Dead by Daylight.",
					imageAlt: "DBD ESP hack boxes and generator markers",
					galleryTitle: "Hack ESP Dead by Daylight",
					heroImage: "/images/dbd-cheats-wallhack.webp",
					ctaPrimary: "Comprar DBD Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Hack ESP Dead by Daylight",
							paragraphs: [
								"DBD Cheats ofrece ESP wallhack, radar hack y DBD Aimbot indetectables para Dead by Daylight en Windows PC. cajas ESP hack, pins de carcasa y distancia.",
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
								"Contacta support@dbdcheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Dead by Daylight | Qué significa",
					description: "Unlock all Dead by Daylight: búsquedas unlock-all vs herramientas reales ESP y Aimbot. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Unlock all Dead by Daylight",
					intro: "DBD Cheats ofrece ESP wallhack, radar hack y DBD Aimbot indetectables para Dead by Daylight en Windows PC. Unlock all Dead by Daylight.",
					imageAlt: "DBD Cheats license features overview",
					galleryTitle: "Unlock all Dead by Daylight",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "Comprar DBD Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Dead by Daylight",
							paragraphs: [
								"DBD Cheats ofrece ESP wallhack, radar hack y DBD Aimbot indetectables para Dead by Daylight en Windows PC. búsquedas unlock-all vs herramientas reales ESP y Aimbot.",
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
								"Contacta support@dbdcheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				privacy: {
					title: "Política de privacidad | DBD Cheats",
					description: "Política de privacidad para DBD Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Política de privacidad",
					intro: "DBD Cheats ofrece ESP wallhack, radar hack y DBD Aimbot indetectables para Dead by Daylight en Windows PC. Política de privacidad para dbdcheats.org y licencias de Dead by Daylight.",
					imageAlt: "DBD Cheats",
					galleryTitle: "DBD Cheats",
					heroImage: "/images/dbd-cheats-aimbot.webp",
					ctaPrimary: "Correo al soporte",
					ctaSecondary: "Leer términos",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Información que recopilamos",
							paragraphs: [
								"DBD Cheats ofrece ESP wallhack, radar hack y DBD Aimbot indetectables para Dead by Daylight en Windows PC. Correo de contacto, referencias de pedido Zadeyo y datos básicos de seguridad del sitio.",
								"Los datos de pago se procesan en el checkout de Zadeyo — no se almacenan en dbdcheats.org.",
							],
						},
						{
							h2: "Cómo usamos los datos",
							paragraphs: [
								"DBD Cheats ofrece ESP wallhack, radar hack y DBD Aimbot indetectables para Dead by Daylight en Windows PC. Respuestas de soporte, resolución de pedidos y cumplimiento legal cuando sea necesario.",
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
							],
						},
						{
							h2: "Tus derechos",
							paragraphs: [
								"Contacta support@dbdcheats.org para solicitudes legales o de soporte.",
								"Correo: support@dbdcheats.org",
							],
						},
					],
				},
				refund: {
					title: "Política de reembolso | DBD Cheats",
					description: "Política de reembolso para DBD Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Política de reembolso",
					intro: "DBD Cheats ofrece ESP wallhack, radar hack y DBD Aimbot indetectables para Dead by Daylight en Windows PC. Política de reembolso para dbdcheats.org y licencias de Dead by Daylight.",
					imageAlt: "DBD Cheats",
					galleryTitle: "DBD Cheats",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "Correo al soporte",
					ctaSecondary: "Leer privacidad",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Entrega digital",
							paragraphs: [
								"DBD Cheats ofrece ESP wallhack, radar hack y DBD Aimbot indetectables para Dead by Daylight en Windows PC. Correo de contacto, referencias de pedido Zadeyo y datos básicos de seguridad del sitio.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "Aprobación de reembolso",
							paragraphs: [
								"DBD Cheats ofrece ESP wallhack, radar hack y DBD Aimbot indetectables para Dead by Daylight en Windows PC. Respuestas de soporte, resolución de pedidos y cumplimiento legal cuando sea necesario.",
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
							],
						},
						{
							h2: "Cómo solicitar",
							paragraphs: [
								"Contacta support@dbdcheats.org para solicitudes legales o de soporte.",
								"Correo: support@dbdcheats.org",
							],
						},
					],
				},
				terms: {
					title: "Términos de uso | DBD Cheats",
					description: "Términos de uso para DBD Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Términos de uso",
					intro: "DBD Cheats ofrece ESP wallhack, radar hack y DBD Aimbot indetectables para Dead by Daylight en Windows PC. Términos de uso para dbdcheats.org y licencias de Dead by Daylight.",
					imageAlt: "DBD Cheats",
					galleryTitle: "DBD Cheats",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "Correo al soporte",
					ctaSecondary: "Leer privacidad",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Aceptación de términos",
							paragraphs: [
								"DBD Cheats ofrece ESP wallhack, radar hack y DBD Aimbot indetectables para Dead by Daylight en Windows PC. Correo de contacto, referencias de pedido Zadeyo y datos básicos de seguridad del sitio.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "Aviso de riesgos",
							paragraphs: [
								"DBD Cheats ofrece ESP wallhack, radar hack y DBD Aimbot indetectables para Dead by Daylight en Windows PC. Respuestas de soporte, resolución de pedidos y cumplimiento legal cuando sea necesario.",
								"Usar cheats puede violar los términos del equipo de Dead by Daylight — asumes todo riesgo de ban.",
							],
						},
						{
							h2: "Cambios de política",
							paragraphs: [
								"Contacta support@dbdcheats.org para solicitudes legales o de soporte.",
								"Correo: support@dbdcheats.org",
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
					accent: "Triches Dead by Daylight indétectables",
					accentShort: "DBD Cheats",
					subtitle: "ESP wallhack, radar hack et Aimbot pour Dead by Daylight sur PC Windows — maintenance Easy Anti-Cheat incluse.",
					subtitleShort: "ESP, radar et Aimbot pour Dead by Daylight PC",
					buyNow: "Acheter",
					seeFeatures: "Voir les fonctions",
				},
				trust: {
					status: "En ligne",
					statusNote: "Le team DBD Cheats est actif pour Dead by Daylight sur PC Windows.",
					statusShort: "Actif",
					delivery: "Livraison numérique instantanée",
					platform: "Windows 10 et 11",
					antiCheat: "Maintenance Easy Anti-Cheat incluse",
					antiCheatShort: "Easy Anti-Cheat inclus",
				},
				product: {
					title: "DBD Cheats",
					addToCart: "Ajouter au panier",
					monthly: "Mensuel",
					lifetime: "À vie",
					available: "Disponible",
					gameBadge: "Dead by Daylight",
					platformBadge: "PC Windows",
					statusBadge: "Pack indétectable",
				},
				reviews: {
					title: "Ce que disent les joueurs",
					subtitle: "Avis récents des acheteurs DBD Cheats",
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
					tagline: "ESP, wallhack, radar et Aimbot indétectables pour Dead by Daylight — checkout via Zadeyo.",
				},
				images: {
					hero: "DBD Cheats hero — ESP and aimbot overlay in Dead by Daylight",
					espWallhack: "Wallhack outlines showing survivors and killers through walls",
					aimbotCombat: "Soft aim assist overlay during a Dead by Daylight trial",
					teamFight: "DBD Cheats combat overlay during a team chase",
					playerEsp: "Player ESP boxes and distance readouts in a Dead by Daylight trial",
					headerArt: "Aimbot view and bone priority controls for Dead by Daylight",
					hacksPackage: "2D radar threat overlay for Dead by Daylight",
					chaseFight: "Aimbot assist during a Dead by Daylight chase",
					battleRoyale: "DBD Cheats in-trial overview for Windows PC",
					trialMap: "ESP markers for generators and hooks in Dead by Daylight",
				},
			},
			pages: {
				home: {
					title: "DBD Cheats 2026 | ESP, Wallhack et Aimbot",
					description: "Triches Dead by Daylight indétectables pour Dead by Daylight sur PC. ESP wallhack, radar hack et Aimbot avec maintenance Easy Anti-Cheat. Livraison numérique",
					h1: "DBD Cheats — ESP, Wallhack et Aimbot indétectables",
					intro: "Pack undetected pour Dead by Daylight sur PC Windows : ESP wallhack, radar et Aimbot avec maintenance Easy Anti-Cheat après chaque patch.",
					imageAlt: "DBD ESP — tags joueur hack",
					galleryTitle: "Galerie DBD Cheats — ESP, Aimbot et wallhack",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "Acheter DBD Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Pourquoi choisir DBD Cheats en 2026",
							paragraphs: [
								"DBD Cheats combine ESP wallhack, radar hack et DBD Aimbot indétectables pour Dead by Daylight sur PC Windows. Parfait pour lire les escouades ennemies en BR et chase.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar et Aimbot en une licence",
							paragraphs: [
								"DBD Cheats combine ESP wallhack, radar hack et DBD Aimbot indétectables pour Dead by Daylight sur PC Windows. Une licence au lieu d'outils séparés.",
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
							],
						},
					],
				},
				"dbd-esp": {
					title: "ESP Dead by Daylight | Boîtes joueur et wallhack",
					description: "ESP Dead by Daylight: boîtes joueur, marqueurs de generatore et overlays wallhack. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "ESP Dead by Daylight",
					intro: "DBD Cheats combine ESP wallhack, radar hack et DBD Aimbot indétectables pour Dead by Daylight sur PC Windows. ESP Dead by Daylight.",
					imageAlt: "DBD ESP player boxes and distance readouts in a trial",
					galleryTitle: "ESP Dead by Daylight",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "Acheter DBD Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "ESP Dead by Daylight",
							paragraphs: [
								"DBD Cheats combine ESP wallhack, radar hack et DBD Aimbot indétectables pour Dead by Daylight sur PC Windows. boîtes joueur, marqueurs de generatore et overlays wallhack.",
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
								"Contactez support@dbdcheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				"dbd-aimbot": {
					title: "Aimbot Dead by Daylight | Contrôles soft aim",
					description: "Aimbot Dead by Daylight: soft aim, FOV et profils Aimbot par espèce. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Aimbot Dead by Daylight",
					intro: "DBD Cheats combine ESP wallhack, radar hack et DBD Aimbot indétectables pour Dead by Daylight sur PC Windows. Aimbot Dead by Daylight.",
					imageAlt: "DBD Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Dead by Daylight",
					heroImage: "/images/dbd-cheats-aimbot.webp",
					ctaPrimary: "Acheter DBD Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Aimbot Dead by Daylight",
							paragraphs: [
								"DBD Cheats combine ESP wallhack, radar hack et DBD Aimbot indétectables pour Dead by Daylight sur PC Windows. soft aim, FOV et profils Aimbot par espèce.",
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
								"Contactez support@dbdcheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				features: {
					title: "Fonctions | Liste complète des fonctions",
					description: "Fonctions: ESP, soft aim, contrôles radar. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Fonctions",
					intro: "DBD Cheats combine ESP wallhack, radar hack et DBD Aimbot indétectables pour Dead by Daylight sur PC Windows. Fonctions.",
					imageAlt: "DBD Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Fonctions",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "Acheter DBD Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Fonctions",
							paragraphs: [
								"DBD Cheats combine ESP wallhack, radar hack et DBD Aimbot indétectables pour Dead by Daylight sur PC Windows. ESP, soft aim, contrôles radar.",
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
								"Contactez support@dbdcheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				pricing: {
					title: "Tarifs | Mensuel et à vie",
					description: "Tarifs: licences à $35/mois ou $150 à vie. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Tarifs",
					intro: "DBD Cheats combine ESP wallhack, radar hack et DBD Aimbot indétectables pour Dead by Daylight sur PC Windows. Tarifs.",
					imageAlt: "DBD Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Tarifs",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "Acheter DBD Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Tarifs",
							paragraphs: [
								"DBD Cheats combine ESP wallhack, radar hack et DBD Aimbot indétectables pour Dead by Daylight sur PC Windows. licences à $35/mois ou $150 à vie.",
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
								"Contactez support@dbdcheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				setup: {
					title: "Installation | Guide d'installation PC",
					description: "Installation: activation Windows PC et configuration au premier lancement. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Installation",
					intro: "DBD Cheats combine ESP wallhack, radar hack et DBD Aimbot indétectables pour Dead by Daylight sur PC Windows. Installation.",
					imageAlt: "DBD Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Installation",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "Acheter DBD Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Installation",
							paragraphs: [
								"DBD Cheats combine ESP wallhack, radar hack et DBD Aimbot indétectables pour Dead by Daylight sur PC Windows. activation Windows PC et configuration au premier lancement.",
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
								"Contactez support@dbdcheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				updates: {
					title: "Mises à jour | Journal Easy Anti-Cheat",
					description: "Mises à jour: statut des patchs Easy Anti-Cheat et notes de rebuild. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Mises à jour",
					intro: "DBD Cheats combine ESP wallhack, radar hack et DBD Aimbot indétectables pour Dead by Daylight sur PC Windows. Mises à jour.",
					imageAlt: "DBD Cheats live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Mises à jour",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "Acheter DBD Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "Mises à jour",
							paragraphs: [
								"DBD Cheats combine ESP wallhack, radar hack et DBD Aimbot indétectables pour Dead by Daylight sur PC Windows. statut des patchs Easy Anti-Cheat et notes de rebuild.",
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
								"Contactez support@dbdcheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Questions fréquentes",
					description: "FAQ: questions ESP, soft aim, livraison et Easy Anti-Cheat. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "FAQ",
					intro: "DBD Cheats combine ESP wallhack, radar hack et DBD Aimbot indétectables pour Dead by Daylight sur PC Windows. FAQ.",
					imageAlt: "DBD Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "Acheter DBD Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"DBD Cheats combine ESP wallhack, radar hack et DBD Aimbot indétectables pour Dead by Daylight sur PC Windows. questions ESP, soft aim, livraison et Easy Anti-Cheat.",
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
								"Contactez support@dbdcheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				support: {
					title: "Support | Aide et contact",
					description: "Support: aide commande et contact support licence. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Support",
					intro: "DBD Cheats combine ESP wallhack, radar hack et DBD Aimbot indétectables pour Dead by Daylight sur PC Windows. Support.",
					imageAlt: "DBD Cheats support page for license and setup help",
					galleryTitle: "Support",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "Acheter DBD Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Support",
							paragraphs: [
								"DBD Cheats combine ESP wallhack, radar hack et DBD Aimbot indétectables pour Dead by Daylight sur PC Windows. aide commande et contact support licence.",
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
								"Contactez support@dbdcheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				undetected: {
					title: "Triches indétectables | Statut indétectable",
					description: "Triches indétectables: maintenance undetected après patchs Easy Anti-Cheat. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Triches indétectables",
					intro: "DBD Cheats combine ESP wallhack, radar hack et DBD Aimbot indétectables pour Dead by Daylight sur PC Windows. Triches indétectables.",
					imageAlt: "DBD Cheats undetected status overview for Windows PC",
					galleryTitle: "Triches indétectables",
					heroImage: "/images/dbd-cheats-wallhack.webp",
					ctaPrimary: "Acheter DBD Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "Triches indétectables",
							paragraphs: [
								"DBD Cheats combine ESP wallhack, radar hack et DBD Aimbot indétectables pour Dead by Daylight sur PC Windows. maintenance undetected après patchs Easy Anti-Cheat.",
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
								"Contactez support@dbdcheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				wallhack: {
					title: "Dead by Daylight Wallhack | Visibilité ESP",
					description: "Dead by Daylight Wallhack: wallhack ESP pour joueurs, generators et distance. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Dead by Daylight Wallhack",
					intro: "DBD Cheats combine ESP wallhack, radar hack et DBD Aimbot indétectables pour Dead by Daylight sur PC Windows. Dead by Daylight Wallhack.",
					imageAlt: "dbd wallhack visibility through walls in a trial",
					galleryTitle: "Dead by Daylight Wallhack",
					heroImage: "/images/dbd-cheats-wallhack.webp",
					ctaPrimary: "Acheter DBD Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Dead by Daylight Wallhack",
							paragraphs: [
								"DBD Cheats combine ESP wallhack, radar hack et DBD Aimbot indétectables pour Dead by Daylight sur PC Windows. wallhack ESP pour joueurs, generators et distance.",
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
								"Contactez support@dbdcheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | Radar 2D des menaces",
					description: "Radar hack: indices radar 2D pour flancs et rotations. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Radar hack",
					intro: "DBD Cheats combine ESP wallhack, radar hack et DBD Aimbot indétectables pour Dead by Daylight sur PC Windows. Radar hack.",
					imageAlt: "Dead by Daylight 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "Acheter DBD Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"DBD Cheats combine ESP wallhack, radar hack et DBD Aimbot indétectables pour Dead by Daylight sur PC Windows. indices radar 2D pour flancs et rotations.",
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
								"Contactez support@dbdcheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Maintenance des patchs",
					description: "Bypass Easy Anti-Cheat: gestion des mises à jour Easy Anti-Cheat pour Dead by Daylight hacks. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "DBD Cheats combine ESP wallhack, radar hack et DBD Aimbot indétectables pour Dead by Daylight sur PC Windows. Bypass Easy Anti-Cheat.",
					imageAlt: "DBD Cheats maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/dbd-cheats-aimbot.webp",
					ctaPrimary: "Acheter DBD Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"DBD Cheats combine ESP wallhack, radar hack et DBD Aimbot indétectables pour Dead by Daylight sur PC Windows. gestion des mises à jour Easy Anti-Cheat pour Dead by Daylight hacks.",
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
								"Contactez support@dbdcheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Triches Dead by Daylight 2026 | Guide acheteur",
					description: "Triches Dead by Daylight 2026: checklist dbd cheats 2026 avant checkout. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Triches Dead by Daylight 2026",
					intro: "DBD Cheats combine ESP wallhack, radar hack et DBD Aimbot indétectables pour Dead by Daylight sur PC Windows. Triches Dead by Daylight 2026.",
					imageAlt: "DBD Cheats product overview for Dead by Daylight",
					galleryTitle: "Triches Dead by Daylight 2026",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "Acheter DBD Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "Triches Dead by Daylight 2026",
							paragraphs: [
								"DBD Cheats combine ESP wallhack, radar hack et DBD Aimbot indétectables pour Dead by Daylight sur PC Windows. checklist dbd cheats 2026 avant checkout.",
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
								"Contactez support@dbdcheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				hacks: {
					title: "Triches Dead by Daylight | Guide ESP et Aimbot",
					description: "Triches Dead by Daylight: pilier DBD Cheats pour ESP et Aimbot. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Triches Dead by Daylight",
					intro: "DBD Cheats combine ESP wallhack, radar hack et DBD Aimbot indétectables pour Dead by Daylight sur PC Windows. Triches Dead by Daylight.",
					imageAlt: "DBD Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Triches Dead by Daylight",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "Acheter DBD Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Triches Dead by Daylight",
							paragraphs: [
								"DBD Cheats combine ESP wallhack, radar hack et DBD Aimbot indétectables pour Dead by Daylight sur PC Windows. pilier DBD Cheats pour ESP et Aimbot.",
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
								"Contactez support@dbdcheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Téléchargement DBD Cheats | Accès instantané",
					description: "Téléchargement DBD Cheats: téléchargement licence numérique après paiement. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Téléchargement DBD Cheats",
					intro: "DBD Cheats combine ESP wallhack, radar hack et DBD Aimbot indétectables pour Dead by Daylight sur PC Windows. Téléchargement DBD Cheats.",
					imageAlt: "DBD Cheats download and install delivery flow",
					galleryTitle: "Téléchargement DBD Cheats",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "Acheter DBD Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Téléchargement DBD Cheats",
							paragraphs: [
								"DBD Cheats combine ESP wallhack, radar hack et DBD Aimbot indétectables pour Dead by Daylight sur PC Windows. téléchargement licence numérique après paiement.",
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
								"Contactez support@dbdcheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Menu mod Dead by Daylight | Contrôles en jeu",
					description: "Menu mod Dead by Daylight: toggles ESP et soft aim in-client. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Menu mod Dead by Daylight",
					intro: "DBD Cheats combine ESP wallhack, radar hack et DBD Aimbot indétectables pour Dead by Daylight sur PC Windows. Menu mod Dead by Daylight.",
					imageAlt: "DBD Cheats in-game menu controls",
					galleryTitle: "Menu mod Dead by Daylight",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "Acheter DBD Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menu mod Dead by Daylight",
							paragraphs: [
								"DBD Cheats combine ESP wallhack, radar hack et DBD Aimbot indétectables pour Dead by Daylight sur PC Windows. toggles ESP et soft aim in-client.",
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
								"Contactez support@dbdcheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Dead by Daylight | Réglages soft aim",
					description: "Soft aim Dead by Daylight: réglages soft aim fluides pour Windows PC. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Soft aim Dead by Daylight",
					intro: "DBD Cheats combine ESP wallhack, radar hack et DBD Aimbot indétectables pour Dead by Daylight sur PC Windows. Soft aim Dead by Daylight.",
					imageAlt: "Dead by Daylight soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Dead by Daylight",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "Acheter DBD Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "Soft aim Dead by Daylight",
							paragraphs: [
								"DBD Cheats combine ESP wallhack, radar hack et DBD Aimbot indétectables pour Dead by Daylight sur PC Windows. réglages soft aim fluides pour Windows PC.",
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
								"Contactez support@dbdcheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Meilleures triches Dead by Daylight | Checklist acheteur",
					description: "Meilleures triches Dead by Daylight: quoi comparer avant d'acheter dbd cheats. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Meilleures triches Dead by Daylight",
					intro: "DBD Cheats combine ESP wallhack, radar hack et DBD Aimbot indétectables pour Dead by Daylight sur PC Windows. Meilleures triches Dead by Daylight.",
					imageAlt: "DBD Cheats overview for Dead by Daylight on PC",
					galleryTitle: "Meilleures triches Dead by Daylight",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "Acheter DBD Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Meilleures triches Dead by Daylight",
							paragraphs: [
								"DBD Cheats combine ESP wallhack, radar hack et DBD Aimbot indétectables pour Dead by Daylight sur PC Windows. quoi comparer avant d'acheter dbd cheats.",
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
								"Contactez support@dbdcheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Dead by Daylight | Assistance soft aim",
					description: "Hack aimbot Dead by Daylight: assist hack Aimbot undetected pour Dead by Daylight. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Hack aimbot Dead by Daylight",
					intro: "DBD Cheats combine ESP wallhack, radar hack et DBD Aimbot indétectables pour Dead by Daylight sur PC Windows. Hack aimbot Dead by Daylight.",
					imageAlt: "DBD Aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Dead by Daylight",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "Acheter DBD Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Dead by Daylight",
							paragraphs: [
								"DBD Cheats combine ESP wallhack, radar hack et DBD Aimbot indétectables pour Dead by Daylight sur PC Windows. assist hack Aimbot undetected pour Dead by Daylight.",
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
								"Contactez support@dbdcheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Dead by Daylight | Boîtes et generators",
					description: "Hack ESP Dead by Daylight: boîtes ESP hack, pins generatore et distance. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Hack ESP Dead by Daylight",
					intro: "DBD Cheats combine ESP wallhack, radar hack et DBD Aimbot indétectables pour Dead by Daylight sur PC Windows. Hack ESP Dead by Daylight.",
					imageAlt: "DBD ESP hack boxes and generator markers",
					galleryTitle: "Hack ESP Dead by Daylight",
					heroImage: "/images/dbd-cheats-wallhack.webp",
					ctaPrimary: "Acheter DBD Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Hack ESP Dead by Daylight",
							paragraphs: [
								"DBD Cheats combine ESP wallhack, radar hack et DBD Aimbot indétectables pour Dead by Daylight sur PC Windows. boîtes ESP hack, pins generatore et distance.",
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
								"Contactez support@dbdcheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Dead by Daylight | Ce que ça signifie",
					description: "Unlock all Dead by Daylight: recherches unlock-all vs vrais outils ESP et Aimbot. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Unlock all Dead by Daylight",
					intro: "DBD Cheats combine ESP wallhack, radar hack et DBD Aimbot indétectables pour Dead by Daylight sur PC Windows. Unlock all Dead by Daylight.",
					imageAlt: "DBD Cheats license features overview",
					galleryTitle: "Unlock all Dead by Daylight",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "Acheter DBD Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Dead by Daylight",
							paragraphs: [
								"DBD Cheats combine ESP wallhack, radar hack et DBD Aimbot indétectables pour Dead by Daylight sur PC Windows. recherches unlock-all vs vrais outils ESP et Aimbot.",
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
								"Contactez support@dbdcheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				privacy: {
					title: "Politique de confidentialité | DBD Cheats",
					description: "Politique de confidentialité pour DBD Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politique de confidentialité",
					intro: "DBD Cheats combine ESP wallhack, radar hack et DBD Aimbot indétectables pour Dead by Daylight sur PC Windows. Politique de confidentialité pour dbdcheats.org et les licences Dead by Daylight.",
					imageAlt: "DBD Cheats",
					galleryTitle: "DBD Cheats",
					heroImage: "/images/dbd-cheats-aimbot.webp",
					ctaPrimary: "Contacter le support",
					ctaSecondary: "Lire les conditions",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Informations collectées",
							paragraphs: [
								"DBD Cheats combine ESP wallhack, radar hack et DBD Aimbot indétectables pour Dead by Daylight sur PC Windows. E-mail de contact, références de commande Zadeyo et données de sécurité de base du site.",
								"Les détails de paiement sont traités par le checkout Zadeyo — non stockés sur dbdcheats.org.",
							],
						},
						{
							h2: "Utilisation des données",
							paragraphs: [
								"DBD Cheats combine ESP wallhack, radar hack et DBD Aimbot indétectables pour Dead by Daylight sur PC Windows. Réponses du support, résolution des commandes et conformité légale si requis.",
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
							],
						},
						{
							h2: "Vos droits",
							paragraphs: [
								"Contactez support@dbdcheats.org pour le support ou les demandes légales.",
								"E-mail : support@dbdcheats.org",
							],
						},
					],
				},
				refund: {
					title: "Politique de remboursement | DBD Cheats",
					description: "Politique de remboursement pour DBD Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politique de remboursement",
					intro: "DBD Cheats combine ESP wallhack, radar hack et DBD Aimbot indétectables pour Dead by Daylight sur PC Windows. Politique de remboursement pour dbdcheats.org et les licences Dead by Daylight.",
					imageAlt: "DBD Cheats",
					galleryTitle: "DBD Cheats",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "Contacter le support",
					ctaSecondary: "Lire la confidentialité",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Livraison numérique",
							paragraphs: [
								"DBD Cheats combine ESP wallhack, radar hack et DBD Aimbot indétectables pour Dead by Daylight sur PC Windows. E-mail de contact, références de commande Zadeyo et données de sécurité de base du site.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "Approbation du remboursement",
							paragraphs: [
								"DBD Cheats combine ESP wallhack, radar hack et DBD Aimbot indétectables pour Dead by Daylight sur PC Windows. Réponses du support, résolution des commandes et conformité légale si requis.",
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
							],
						},
						{
							h2: "Comment demander",
							paragraphs: [
								"Contactez support@dbdcheats.org pour le support ou les demandes légales.",
								"E-mail : support@dbdcheats.org",
							],
						},
					],
				},
				terms: {
					title: "Conditions d'utilisation | DBD Cheats",
					description: "Conditions d'utilisation pour DBD Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Conditions d'utilisation",
					intro: "DBD Cheats combine ESP wallhack, radar hack et DBD Aimbot indétectables pour Dead by Daylight sur PC Windows. Conditions d'utilisation pour dbdcheats.org et les licences Dead by Daylight.",
					imageAlt: "DBD Cheats",
					galleryTitle: "DBD Cheats",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "Contacter le support",
					ctaSecondary: "Lire la confidentialité",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptation des conditions",
							paragraphs: [
								"DBD Cheats combine ESP wallhack, radar hack et DBD Aimbot indétectables pour Dead by Daylight sur PC Windows. E-mail de contact, références de commande Zadeyo et données de sécurité de base du site.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "Avertissement sur les risques",
							paragraphs: [
								"DBD Cheats combine ESP wallhack, radar hack et DBD Aimbot indétectables pour Dead by Daylight sur PC Windows. Réponses du support, résolution des commandes et conformité légale si requis.",
								"Utiliser des cheats peut enfreindre les conditions de l'équipe Dead by Daylight — vous assumez tout risque de bannissement.",
							],
						},
						{
							h2: "Modifications",
							paragraphs: [
								"Contactez support@dbdcheats.org pour le support ou les demandes légales.",
								"E-mail : support@dbdcheats.org",
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
					accent: "Undetected DBD Cheats",
					accentShort: "DBD Cheats",
					subtitle: "ESP Wallhack, Radar Hack und Aimbot für Dead by Daylight auf Windows PC — Easy Anti-Cheat-Wartung inklusive.",
					subtitleShort: "ESP, Radar & Aimbot für Dead by Daylight PC",
					buyNow: "Jetzt kaufen",
					seeFeatures: "Features ansehen",
				},
				trust: {
					status: "Online",
					statusNote: "DBD Cheats Paket ist live für Dead by Daylight auf Windows PC.",
					statusShort: "Live",
					delivery: "Sofortige digitale Lieferung",
					platform: "Windows 10 & 11",
					antiCheat: "Easy Anti-Cheat-Wartung unterstützt",
					antiCheatShort: "Easy Anti-Cheat Support",
				},
				product: {
					title: "DBD Cheats",
					addToCart: "In den Warenkorb",
					monthly: "Monatlich",
					lifetime: "Lifetime",
					available: "Jetzt verfügbar",
					gameBadge: "Dead by Daylight",
					platformBadge: "Windows PC",
					statusBadge: "Undetected Paket",
				},
				reviews: {
					title: "Was Spieler sagen",
					subtitle: "Aktuelles Feedback von DBD Cheats Käufern",
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
					tagline: "Undetected ESP, Wallhack, Radar und Aimbot für Dead by Daylight — Checkout über Zadeyo.",
				},
				images: {
					hero: "DBD Cheats hero — ESP and aimbot overlay in Dead by Daylight",
					espWallhack: "Wallhack outlines showing survivors and killers through walls",
					aimbotCombat: "Soft aim assist overlay during a Dead by Daylight trial",
					teamFight: "DBD Cheats combat overlay during a team chase",
					playerEsp: "Player ESP boxes and distance readouts in a Dead by Daylight trial",
					headerArt: "Aimbot view and bone priority controls for Dead by Daylight",
					hacksPackage: "2D radar threat overlay for Dead by Daylight",
					chaseFight: "Aimbot assist during a Dead by Daylight chase",
					battleRoyale: "DBD Cheats in-trial overview for Windows PC",
					trialMap: "ESP markers for generators and hooks in Dead by Daylight",
				},
			},
			pages: {
				home: {
					title: "DBD Cheats 2026 | ESP, Wallhack & Aimbot",
					description: "Undetected DBD Cheats für Dead by Daylight auf PC. ESP Wallhack, Radar Hack und Aimbot mit Easy Anti-Cheat-Wartung. Sofortige digitale Lieferung.",
					h1: "DBD Cheats — Undetected ESP, Wallhack und Aimbot",
					intro: "Undetected Windows PC Paket für Dead by Daylight: ESP Wallhack, Radar und Aimbot mit Easy Anti-Cheat-Wartung nach jedem Patch.",
					imageAlt: "DBD ESP — Spieler-Tags Hack",
					galleryTitle: "DBD Cheats Galerie — ESP, Aimbot und Wallhack",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "DBD Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Warum DBD Cheats 2026 führt",
							paragraphs: [
								"DBD Cheats bündelt ESP wallhack, radar hack und DBD Aimbot als undetected Paket für Dead by Daylight auf Windows PC. Ideal um feindliche Squads in BR und chase zu lesen.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "ESP Wallhack, Radar und Aimbot in einer Lizenz",
							paragraphs: [
								"DBD Cheats bündelt ESP wallhack, radar hack und DBD Aimbot als undetected Paket für Dead by Daylight auf Windows PC. Eine Lizenz statt separater Tools.",
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
							],
						},
					],
				},
				"dbd-esp": {
					title: "DBD ESP | Spielerboxen & Wallhack",
					description: "DBD ESP: Spielerboxen, Kadaver-Marker und Wallhack-Overlays. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "DBD ESP",
					intro: "DBD Cheats bündelt ESP wallhack, radar hack und DBD Aimbot als undetected Paket für Dead by Daylight auf Windows PC. DBD ESP.",
					imageAlt: "DBD ESP player boxes and distance readouts in a trial",
					galleryTitle: "DBD ESP",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "DBD Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "DBD ESP",
							paragraphs: [
								"DBD Cheats bündelt ESP wallhack, radar hack und DBD Aimbot als undetected Paket für Dead by Daylight auf Windows PC. Spielerboxen, Kadaver-Marker und Wallhack-Overlays.",
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
								"support@dbdcheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"dbd-aimbot": {
					title: "DBD Aimbot | Soft-Aim Steuerung",
					description: "DBD Aimbot: Soft Aim, FOV und Aimbot-Profile pro Spezies. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "DBD Aimbot",
					intro: "DBD Cheats bündelt ESP wallhack, radar hack und DBD Aimbot als undetected Paket für Dead by Daylight auf Windows PC. DBD Aimbot.",
					imageAlt: "DBD Aimbot and soft aim controls on Windows PC",
					galleryTitle: "DBD Aimbot",
					heroImage: "/images/dbd-cheats-aimbot.webp",
					ctaPrimary: "DBD Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "DBD Aimbot",
							paragraphs: [
								"DBD Cheats bündelt ESP wallhack, radar hack und DBD Aimbot als undetected Paket für Dead by Daylight auf Windows PC. Soft Aim, FOV und Aimbot-Profile pro Spezies.",
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
								"support@dbdcheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				features: {
					title: "Features | Vollständige Feature-Liste",
					description: "Features: ESP, Soft Aim, Radar-Steuerung. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Features",
					intro: "DBD Cheats bündelt ESP wallhack, radar hack und DBD Aimbot als undetected Paket für Dead by Daylight auf Windows PC. Features.",
					imageAlt: "DBD Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Features",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "DBD Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Features",
							paragraphs: [
								"DBD Cheats bündelt ESP wallhack, radar hack und DBD Aimbot als undetected Paket für Dead by Daylight auf Windows PC. ESP, Soft Aim, Radar-Steuerung.",
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
								"support@dbdcheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				pricing: {
					title: "Preise | Monatlich & Lifetime",
					description: "Preise: $35 monatliche oder $150 Lifetime-Lizenzen. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Preise",
					intro: "DBD Cheats bündelt ESP wallhack, radar hack und DBD Aimbot als undetected Paket für Dead by Daylight auf Windows PC. Preise.",
					imageAlt: "DBD Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Preise",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "DBD Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Preise",
							paragraphs: [
								"DBD Cheats bündelt ESP wallhack, radar hack und DBD Aimbot als undetected Paket für Dead by Daylight auf Windows PC. $35 monatliche oder $150 Lifetime-Lizenzen.",
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
								"support@dbdcheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				setup: {
					title: "Setup | PC Setup-Anleitung",
					description: "Setup: Windows PC Aktivierung und Erststart-Setup. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Setup",
					intro: "DBD Cheats bündelt ESP wallhack, radar hack und DBD Aimbot als undetected Paket für Dead by Daylight auf Windows PC. Setup.",
					imageAlt: "DBD Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Setup",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "DBD Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Setup",
							paragraphs: [
								"DBD Cheats bündelt ESP wallhack, radar hack und DBD Aimbot als undetected Paket für Dead by Daylight auf Windows PC. Windows PC Aktivierung und Erststart-Setup.",
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
								"support@dbdcheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				updates: {
					title: "Updates | Easy Anti-Cheat Wartungslog",
					description: "Updates: Easy Anti-Cheat Patch-Status und Rebuild-Notizen. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Updates",
					intro: "DBD Cheats bündelt ESP wallhack, radar hack und DBD Aimbot als undetected Paket für Dead by Daylight auf Windows PC. Updates.",
					imageAlt: "DBD Cheats live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Updates",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "DBD Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "Updates",
							paragraphs: [
								"DBD Cheats bündelt ESP wallhack, radar hack und DBD Aimbot als undetected Paket für Dead by Daylight auf Windows PC. Easy Anti-Cheat Patch-Status und Rebuild-Notizen.",
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
								"support@dbdcheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Häufige Fragen",
					description: "FAQ: Fragen zu ESP, Soft Aim, Lieferung und Easy Anti-Cheat. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "FAQ",
					intro: "DBD Cheats bündelt ESP wallhack, radar hack und DBD Aimbot als undetected Paket für Dead by Daylight auf Windows PC. FAQ.",
					imageAlt: "DBD Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "DBD Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"DBD Cheats bündelt ESP wallhack, radar hack und DBD Aimbot als undetected Paket für Dead by Daylight auf Windows PC. Fragen zu ESP, Soft Aim, Lieferung und Easy Anti-Cheat.",
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
								"support@dbdcheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				support: {
					title: "Support | Hilfe & Kontakt",
					description: "Support: Bestellhilfe und Lizenz-Support-Kontakt. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Support",
					intro: "DBD Cheats bündelt ESP wallhack, radar hack und DBD Aimbot als undetected Paket für Dead by Daylight auf Windows PC. Support.",
					imageAlt: "DBD Cheats support page for license and setup help",
					galleryTitle: "Support",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "DBD Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Support",
							paragraphs: [
								"DBD Cheats bündelt ESP wallhack, radar hack und DBD Aimbot als undetected Paket für Dead by Daylight auf Windows PC. Bestellhilfe und Lizenz-Support-Kontakt.",
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
								"support@dbdcheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected Cheats | Undetected Status",
					description: "Undetected Cheats: Undetected-Wartung nach Easy Anti-Cheat Patches. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Undetected Cheats",
					intro: "DBD Cheats bündelt ESP wallhack, radar hack und DBD Aimbot als undetected Paket für Dead by Daylight auf Windows PC. Undetected Cheats.",
					imageAlt: "DBD Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected Cheats",
					heroImage: "/images/dbd-cheats-wallhack.webp",
					ctaPrimary: "DBD Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "Undetected Cheats",
							paragraphs: [
								"DBD Cheats bündelt ESP wallhack, radar hack und DBD Aimbot als undetected Paket für Dead by Daylight auf Windows PC. Undetected-Wartung nach Easy Anti-Cheat Patches.",
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
								"support@dbdcheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				wallhack: {
					title: "Dead by Daylight Wallhack | ESP Sichtbarkeit",
					description: "Dead by Daylight Wallhack: Wallhack ESP für Spieler, Kadaver und Entfernung. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Dead by Daylight Wallhack",
					intro: "DBD Cheats bündelt ESP wallhack, radar hack und DBD Aimbot als undetected Paket für Dead by Daylight auf Windows PC. Dead by Daylight Wallhack.",
					imageAlt: "dbd wallhack visibility through walls in a trial",
					galleryTitle: "Dead by Daylight Wallhack",
					heroImage: "/images/dbd-cheats-wallhack.webp",
					ctaPrimary: "DBD Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Dead by Daylight Wallhack",
							paragraphs: [
								"DBD Cheats bündelt ESP wallhack, radar hack und DBD Aimbot als undetected Paket für Dead by Daylight auf Windows PC. Wallhack ESP für Spieler, Kadaver und Entfernung.",
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
								"support@dbdcheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Bedrohungsradar",
					description: "Radar Hack: 2D-Radar-Hinweise für Flanken und Rotationen. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "DBD Cheats bündelt ESP wallhack, radar hack und DBD Aimbot als undetected Paket für Dead by Daylight auf Windows PC. Radar Hack.",
					imageAlt: "Dead by Daylight 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "DBD Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"DBD Cheats bündelt ESP wallhack, radar hack und DBD Aimbot als undetected Paket für Dead by Daylight auf Windows PC. 2D-Radar-Hinweise für Flanken und Rotationen.",
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
								"support@dbdcheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				eac: {
					title: "Easy Anti-Cheat Bypass | Patch-Wartung",
					description: "Easy Anti-Cheat Bypass: wie Easy Anti-Cheat Updates für DBD Cheats gehandhabt werden. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Easy Anti-Cheat Bypass",
					intro: "DBD Cheats bündelt ESP wallhack, radar hack und DBD Aimbot als undetected Paket für Dead by Daylight auf Windows PC. Easy Anti-Cheat Bypass.",
					imageAlt: "DBD Cheats maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Easy Anti-Cheat Bypass",
					heroImage: "/images/dbd-cheats-aimbot.webp",
					ctaPrimary: "DBD Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Easy Anti-Cheat Bypass",
							paragraphs: [
								"DBD Cheats bündelt ESP wallhack, radar hack und DBD Aimbot als undetected Paket für Dead by Daylight auf Windows PC. wie Easy Anti-Cheat Updates für DBD Cheats gehandhabt werden.",
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
								"support@dbdcheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "DBD Cheats 2026 | Käuferleitfaden",
					description: "DBD Cheats 2026: 2026 dbd cheats Checkliste vor dem Checkout. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "DBD Cheats 2026",
					intro: "DBD Cheats bündelt ESP wallhack, radar hack und DBD Aimbot als undetected Paket für Dead by Daylight auf Windows PC. DBD Cheats 2026.",
					imageAlt: "DBD Cheats product overview for Dead by Daylight",
					galleryTitle: "DBD Cheats 2026",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "DBD Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "DBD Cheats 2026",
							paragraphs: [
								"DBD Cheats bündelt ESP wallhack, radar hack und DBD Aimbot als undetected Paket für Dead by Daylight auf Windows PC. 2026 dbd cheats Checkliste vor dem Checkout.",
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
								"support@dbdcheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				hacks: {
					title: "DBD Cheats | ESP Aimbot Guide",
					description: "DBD Cheats: DBD Cheats Säule für ESP und Aimbot. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "DBD Cheats",
					intro: "DBD Cheats bündelt ESP wallhack, radar hack und DBD Aimbot als undetected Paket für Dead by Daylight auf Windows PC. DBD Cheats.",
					imageAlt: "DBD Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "DBD Cheats",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "DBD Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "DBD Cheats",
							paragraphs: [
								"DBD Cheats bündelt ESP wallhack, radar hack und DBD Aimbot als undetected Paket für Dead by Daylight auf Windows PC. DBD Cheats Säule für ESP und Aimbot.",
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
								"support@dbdcheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Dead by Daylight Cheat Download | Sofortzugang",
					description: "Dead by Daylight Cheat Download: digitaler Lizenz-Download nach Zahlung. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Dead by Daylight Cheat Download",
					intro: "DBD Cheats bündelt ESP wallhack, radar hack und DBD Aimbot als undetected Paket für Dead by Daylight auf Windows PC. Dead by Daylight Cheat Download.",
					imageAlt: "DBD Cheats download and install delivery flow",
					galleryTitle: "Dead by Daylight Cheat Download",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "DBD Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Dead by Daylight Cheat Download",
							paragraphs: [
								"DBD Cheats bündelt ESP wallhack, radar hack und DBD Aimbot als undetected Paket für Dead by Daylight auf Windows PC. digitaler Lizenz-Download nach Zahlung.",
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
								"support@dbdcheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Dead by Daylight Mod-Menü | In-Game Toggles",
					description: "Dead by Daylight Mod-Menü: In-Client ESP- und Soft-Aim-Toggles. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Dead by Daylight Mod-Menü",
					intro: "DBD Cheats bündelt ESP wallhack, radar hack und DBD Aimbot als undetected Paket für Dead by Daylight auf Windows PC. Dead by Daylight Mod-Menü.",
					imageAlt: "DBD Cheats in-game menu controls",
					galleryTitle: "Dead by Daylight Mod-Menü",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "DBD Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Dead by Daylight Mod-Menü",
							paragraphs: [
								"DBD Cheats bündelt ESP wallhack, radar hack und DBD Aimbot als undetected Paket für Dead by Daylight auf Windows PC. In-Client ESP- und Soft-Aim-Toggles.",
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
								"support@dbdcheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Dead by Daylight Soft Aim | Soft-Aim Einstellungen",
					description: "Dead by Daylight Soft Aim: sanfte Soft-Aim-Einstellungen für Windows PC. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Dead by Daylight Soft Aim",
					intro: "DBD Cheats bündelt ESP wallhack, radar hack und DBD Aimbot als undetected Paket für Dead by Daylight auf Windows PC. Dead by Daylight Soft Aim.",
					imageAlt: "Dead by Daylight soft aim FOV and smoothness settings",
					galleryTitle: "Dead by Daylight Soft Aim",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "DBD Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "Dead by Daylight Soft Aim",
							paragraphs: [
								"DBD Cheats bündelt ESP wallhack, radar hack und DBD Aimbot als undetected Paket für Dead by Daylight auf Windows PC. sanfte Soft-Aim-Einstellungen für Windows PC.",
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
								"support@dbdcheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Beste DBD Cheats | Käufer-Checkliste",
					description: "Beste DBD Cheats: was vor dem Kauf der dbd hacks verglichen werden sollte. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Beste DBD Cheats",
					intro: "DBD Cheats bündelt ESP wallhack, radar hack und DBD Aimbot als undetected Paket für Dead by Daylight auf Windows PC. Beste DBD Cheats.",
					imageAlt: "DBD Cheats overview for Dead by Daylight on PC",
					galleryTitle: "Beste DBD Cheats",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "DBD Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Beste DBD Cheats",
							paragraphs: [
								"DBD Cheats bündelt ESP wallhack, radar hack und DBD Aimbot als undetected Paket für Dead by Daylight auf Windows PC. was vor dem Kauf der dbd hacks verglichen werden sollte.",
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
								"support@dbdcheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "DBD Aimbot Hack | Soft-Aim Assist",
					description: "DBD Aimbot Hack: undetected Aimbot-Hack-Assist für Dead by Daylight. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "DBD Aimbot Hack",
					intro: "DBD Cheats bündelt ESP wallhack, radar hack und DBD Aimbot als undetected Paket für Dead by Daylight auf Windows PC. DBD Aimbot Hack.",
					imageAlt: "DBD Aimbot hack controls and bone priority",
					galleryTitle: "DBD Aimbot Hack",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "DBD Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "DBD Aimbot Hack",
							paragraphs: [
								"DBD Cheats bündelt ESP wallhack, radar hack und DBD Aimbot als undetected Paket für Dead by Daylight auf Windows PC. undetected Aimbot-Hack-Assist für Dead by Daylight.",
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
								"support@dbdcheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"esp-hack": {
					title: "DBD ESP Hack | Boxen & Loot",
					description: "DBD ESP Hack: ESP-Hack-Boxen, Kadaver-Pins und Entfernung. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "DBD ESP Hack",
					intro: "DBD Cheats bündelt ESP wallhack, radar hack und DBD Aimbot als undetected Paket für Dead by Daylight auf Windows PC. DBD ESP Hack.",
					imageAlt: "DBD ESP hack boxes and generator markers",
					galleryTitle: "DBD ESP Hack",
					heroImage: "/images/dbd-cheats-wallhack.webp",
					ctaPrimary: "DBD Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "DBD ESP Hack",
							paragraphs: [
								"DBD Cheats bündelt ESP wallhack, radar hack und DBD Aimbot als undetected Paket für Dead by Daylight auf Windows PC. ESP-Hack-Boxen, Kadaver-Pins und Entfernung.",
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
								"support@dbdcheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Dead by Daylight Unlock All | Was es bedeutet",
					description: "Dead by Daylight Unlock All: unlock-all Suchen vs echte ESP- und Aimbot-Tools. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Dead by Daylight Unlock All",
					intro: "DBD Cheats bündelt ESP wallhack, radar hack und DBD Aimbot als undetected Paket für Dead by Daylight auf Windows PC. Dead by Daylight Unlock All.",
					imageAlt: "DBD Cheats license features overview",
					galleryTitle: "Dead by Daylight Unlock All",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "DBD Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Dead by Daylight Unlock All",
							paragraphs: [
								"DBD Cheats bündelt ESP wallhack, radar hack und DBD Aimbot als undetected Paket für Dead by Daylight auf Windows PC. unlock-all Suchen vs echte ESP- und Aimbot-Tools.",
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
								"support@dbdcheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				privacy: {
					title: "Datenschutz | DBD Cheats",
					description: "Datenschutz für DBD Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Datenschutz",
					intro: "DBD Cheats bündelt ESP wallhack, radar hack und DBD Aimbot als undetected Paket für Dead by Daylight auf Windows PC. Datenschutz für dbdcheats.org und Dead by Daylight-Lizenzen.",
					imageAlt: "DBD Cheats",
					galleryTitle: "DBD Cheats",
					heroImage: "/images/dbd-cheats-aimbot.webp",
					ctaPrimary: "Support per E-Mail",
					ctaSecondary: "Nutzungsbedingungen",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Erhobene Daten",
							paragraphs: [
								"DBD Cheats bündelt ESP wallhack, radar hack und DBD Aimbot als undetected Paket für Dead by Daylight auf Windows PC. Kontakt-E-Mail, Zadeyo-Bestellreferenzen und grundlegende Sicherheitsdaten der Website.",
								"Zahlungsdaten werden über Zadeyo-Checkout verarbeitet — nicht auf dbdcheats.org gespeichert.",
							],
						},
						{
							h2: "Datennutzung",
							paragraphs: [
								"DBD Cheats bündelt ESP wallhack, radar hack und DBD Aimbot als undetected Paket für Dead by Daylight auf Windows PC. Support-Antworten, Auftragsabwicklung und rechtliche Compliance bei Bedarf.",
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
							],
						},
						{
							h2: "Ihre Rechte",
							paragraphs: [
								"support@dbdcheats.org für Support und rechtliche Anfragen.",
								"E-Mail: support@dbdcheats.org",
							],
						},
					],
				},
				refund: {
					title: "Rückerstattung | DBD Cheats",
					description: "Rückerstattung für DBD Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Rückerstattung",
					intro: "DBD Cheats bündelt ESP wallhack, radar hack und DBD Aimbot als undetected Paket für Dead by Daylight auf Windows PC. Rückerstattung für dbdcheats.org und Dead by Daylight-Lizenzen.",
					imageAlt: "DBD Cheats",
					galleryTitle: "DBD Cheats",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "Support per E-Mail",
					ctaSecondary: "Datenschutz lesen",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digitale Lieferung",
							paragraphs: [
								"DBD Cheats bündelt ESP wallhack, radar hack und DBD Aimbot als undetected Paket für Dead by Daylight auf Windows PC. Kontakt-E-Mail, Zadeyo-Bestellreferenzen und grundlegende Sicherheitsdaten der Website.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "Rückerstattungsgenehmigung",
							paragraphs: [
								"DBD Cheats bündelt ESP wallhack, radar hack und DBD Aimbot als undetected Paket für Dead by Daylight auf Windows PC. Support-Antworten, Auftragsabwicklung und rechtliche Compliance bei Bedarf.",
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
							],
						},
						{
							h2: "So beantragen",
							paragraphs: [
								"support@dbdcheats.org für Support und rechtliche Anfragen.",
								"E-Mail: support@dbdcheats.org",
							],
						},
					],
				},
				terms: {
					title: "Nutzungsbedingungen | DBD Cheats",
					description: "Nutzungsbedingungen für DBD Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Nutzungsbedingungen",
					intro: "DBD Cheats bündelt ESP wallhack, radar hack und DBD Aimbot als undetected Paket für Dead by Daylight auf Windows PC. Nutzungsbedingungen für dbdcheats.org und Dead by Daylight-Lizenzen.",
					imageAlt: "DBD Cheats",
					galleryTitle: "DBD Cheats",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "Support per E-Mail",
					ctaSecondary: "Datenschutz lesen",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Annahme der Bedingungen",
							paragraphs: [
								"DBD Cheats bündelt ESP wallhack, radar hack und DBD Aimbot als undetected Paket für Dead by Daylight auf Windows PC. Kontakt-E-Mail, Zadeyo-Bestellreferenzen und grundlegende Sicherheitsdaten der Website.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "Risikohinweis",
							paragraphs: [
								"DBD Cheats bündelt ESP wallhack, radar hack und DBD Aimbot als undetected Paket für Dead by Daylight auf Windows PC. Support-Antworten, Auftragsabwicklung und rechtliche Compliance bei Bedarf.",
								"Cheats können gegen die Nutzungsbedingungen des Dead by Daylight Teams verstoßen — Sie tragen das volle Ban-Risiko.",
							],
						},
						{
							h2: "Richtlinienänderungen",
							paragraphs: [
								"support@dbdcheats.org für Support und rechtliche Anfragen.",
								"E-Mail: support@dbdcheats.org",
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
					accent: "Cheats Dead by Daylight indetectáveis",
					accentShort: "DBD Cheats",
					subtitle: "ESP wallhack, radar hack e Aimbot para Dead by Daylight no PC Windows — manutenção Easy Anti-Cheat incluída.",
					subtitleShort: "ESP, radar e Aimbot para Dead by Daylight PC",
					buyNow: "Comprar agora",
					seeFeatures: "Ver recursos",
				},
				trust: {
					status: "Online",
					statusNote: "O pacote DBD Cheats está ativo para Dead by Daylight no PC Windows.",
					statusShort: "Ativo",
					delivery: "Entrega digital instantânea",
					platform: "Windows 10 e 11",
					antiCheat: "Manutenção Easy Anti-Cheat incluída",
					antiCheatShort: "Easy Anti-Cheat incluído",
				},
				product: {
					title: "DBD Cheats",
					addToCart: "Adicionar ao carrinho",
					monthly: "Mensal",
					lifetime: "Vitalício",
					available: "Disponível agora",
					gameBadge: "Dead by Daylight",
					platformBadge: "PC Windows",
					statusBadge: "Pacote indetectável",
				},
				reviews: {
					title: "O que os jogadores dizem",
					subtitle: "Feedback recente de compradores DBD Cheats",
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
					tagline: "ESP, wallhack, radar e Aimbot indetectáveis para Dead by Daylight — checkout via Zadeyo.",
				},
				images: {
					hero: "DBD Cheats hero — ESP and aimbot overlay in Dead by Daylight",
					espWallhack: "Wallhack outlines showing survivors and killers through walls",
					aimbotCombat: "Soft aim assist overlay during a Dead by Daylight trial",
					teamFight: "DBD Cheats combat overlay during a team chase",
					playerEsp: "Player ESP boxes and distance readouts in a Dead by Daylight trial",
					headerArt: "Aimbot view and bone priority controls for Dead by Daylight",
					hacksPackage: "2D radar threat overlay for Dead by Daylight",
					chaseFight: "Aimbot assist during a Dead by Daylight chase",
					battleRoyale: "DBD Cheats in-trial overview for Windows PC",
					trialMap: "ESP markers for generators and hooks in Dead by Daylight",
				},
			},
			pages: {
				home: {
					title: "DBD Cheats 2026 | ESP, Wallhack e Aimbot",
					description: "Cheats Dead by Daylight indetectáveis para Dead by Daylight no PC. ESP wallhack, radar hack e Aimbot com manutenção Easy Anti-Cheat. Entrega digital",
					h1: "DBD Cheats — ESP, Wallhack e Aimbot indetectáveis",
					intro: "Pacote undetected para Dead by Daylight no Windows PC: ESP wallhack, radar e Aimbot com manutenção Easy Anti-Cheat após cada patch.",
					imageAlt: "DBD ESP player tags hack",
					galleryTitle: "Galeria DBD Cheats — ESP, Aimbot e wallhack",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "Comprar DBD Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Por que escolher DBD Cheats em 2026",
							paragraphs: [
								"DBD Cheats reúne ESP wallhack, radar hack e DBD Aimbot indetectáveis para Dead by Daylight no PC Windows. Ideal para ler epackrões inimigos em BR e chase.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar e Aimbot numa licença",
							paragraphs: [
								"DBD Cheats reúne ESP wallhack, radar hack e DBD Aimbot indetectáveis para Dead by Daylight no PC Windows. Uma licença em vez de ferramentas separadas.",
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
							],
						},
					],
				},
				"dbd-esp": {
					title: "ESP Dead by Daylight | Caixas de jogador e wallhack",
					description: "ESP Dead by Daylight: caixas de jogador, marcadores de carcaça e overlays wallhack. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "ESP Dead by Daylight",
					intro: "DBD Cheats reúne ESP wallhack, radar hack e DBD Aimbot indetectáveis para Dead by Daylight no PC Windows. ESP Dead by Daylight.",
					imageAlt: "DBD ESP player boxes and distance readouts in a trial",
					galleryTitle: "ESP Dead by Daylight",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "Comprar DBD Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "ESP Dead by Daylight",
							paragraphs: [
								"DBD Cheats reúne ESP wallhack, radar hack e DBD Aimbot indetectáveis para Dead by Daylight no PC Windows. caixas de jogador, marcadores de carcaça e overlays wallhack.",
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
								"Contacte support@dbdcheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				"dbd-aimbot": {
					title: "Aimbot Dead by Daylight | Controles soft aim",
					description: "Aimbot Dead by Daylight: soft aim, FOV e perfis Aimbot por espécie. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Aimbot Dead by Daylight",
					intro: "DBD Cheats reúne ESP wallhack, radar hack e DBD Aimbot indetectáveis para Dead by Daylight no PC Windows. Aimbot Dead by Daylight.",
					imageAlt: "DBD Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Dead by Daylight",
					heroImage: "/images/dbd-cheats-aimbot.webp",
					ctaPrimary: "Comprar DBD Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Aimbot Dead by Daylight",
							paragraphs: [
								"DBD Cheats reúne ESP wallhack, radar hack e DBD Aimbot indetectáveis para Dead by Daylight no PC Windows. soft aim, FOV e perfis Aimbot por espécie.",
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
								"Contacte support@dbdcheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				features: {
					title: "Recursos | Lista completa de recursos",
					description: "Recursos: ESP, soft aim, controles de radar. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Recursos",
					intro: "DBD Cheats reúne ESP wallhack, radar hack e DBD Aimbot indetectáveis para Dead by Daylight no PC Windows. Recursos.",
					imageAlt: "DBD Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Recursos",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "Comprar DBD Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Recursos",
							paragraphs: [
								"DBD Cheats reúne ESP wallhack, radar hack e DBD Aimbot indetectáveis para Dead by Daylight no PC Windows. ESP, soft aim, controles de radar.",
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
								"Contacte support@dbdcheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				pricing: {
					title: "Preços | Mensal e vitalício",
					description: "Preços: licenças de $35 mensais ou $150 vitalícias. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Preços",
					intro: "DBD Cheats reúne ESP wallhack, radar hack e DBD Aimbot indetectáveis para Dead by Daylight no PC Windows. Preços.",
					imageAlt: "DBD Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Preços",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "Comprar DBD Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Preços",
							paragraphs: [
								"DBD Cheats reúne ESP wallhack, radar hack e DBD Aimbot indetectáveis para Dead by Daylight no PC Windows. licenças de $35 mensais ou $150 vitalícias.",
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
								"Contacte support@dbdcheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				setup: {
					title: "Instalação | Guia de instalação PC",
					description: "Instalação: ativação no Windows PC e configuração do primeiro lançamento. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Instalação",
					intro: "DBD Cheats reúne ESP wallhack, radar hack e DBD Aimbot indetectáveis para Dead by Daylight no PC Windows. Instalação.",
					imageAlt: "DBD Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Instalação",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "Comprar DBD Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalação",
							paragraphs: [
								"DBD Cheats reúne ESP wallhack, radar hack e DBD Aimbot indetectáveis para Dead by Daylight no PC Windows. ativação no Windows PC e configuração do primeiro lançamento.",
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
								"Contacte support@dbdcheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				updates: {
					title: "Atualizações | Registro Easy Anti-Cheat",
					description: "Atualizações: status de patches Easy Anti-Cheat e notas de rebuild. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Atualizações",
					intro: "DBD Cheats reúne ESP wallhack, radar hack e DBD Aimbot indetectáveis para Dead by Daylight no PC Windows. Atualizações.",
					imageAlt: "DBD Cheats live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Atualizações",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "Comprar DBD Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "Atualizações",
							paragraphs: [
								"DBD Cheats reúne ESP wallhack, radar hack e DBD Aimbot indetectáveis para Dead by Daylight no PC Windows. status de patches Easy Anti-Cheat e notas de rebuild.",
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
								"Contacte support@dbdcheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Perguntas frequentes",
					description: "FAQ: perguntas sobre ESP, soft aim, entrega e Easy Anti-Cheat. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "FAQ",
					intro: "DBD Cheats reúne ESP wallhack, radar hack e DBD Aimbot indetectáveis para Dead by Daylight no PC Windows. FAQ.",
					imageAlt: "DBD Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "Comprar DBD Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"DBD Cheats reúne ESP wallhack, radar hack e DBD Aimbot indetectáveis para Dead by Daylight no PC Windows. perguntas sobre ESP, soft aim, entrega e Easy Anti-Cheat.",
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
								"Contacte support@dbdcheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				support: {
					title: "Suporte | Ajuda e contato",
					description: "Suporte: ajuda com pedidos e contato de suporte de licenças. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Suporte",
					intro: "DBD Cheats reúne ESP wallhack, radar hack e DBD Aimbot indetectáveis para Dead by Daylight no PC Windows. Suporte.",
					imageAlt: "DBD Cheats support page for license and setup help",
					galleryTitle: "Suporte",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "Comprar DBD Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Suporte",
							paragraphs: [
								"DBD Cheats reúne ESP wallhack, radar hack e DBD Aimbot indetectáveis para Dead by Daylight no PC Windows. ajuda com pedidos e contato de suporte de licenças.",
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
								"Contacte support@dbdcheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				undetected: {
					title: "Cheats indetectáveis | Status indetectável",
					description: "Cheats indetectáveis: manutenção undetected após patches Easy Anti-Cheat. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Cheats indetectáveis",
					intro: "DBD Cheats reúne ESP wallhack, radar hack e DBD Aimbot indetectáveis para Dead by Daylight no PC Windows. Cheats indetectáveis.",
					imageAlt: "DBD Cheats undetected status overview for Windows PC",
					galleryTitle: "Cheats indetectáveis",
					heroImage: "/images/dbd-cheats-wallhack.webp",
					ctaPrimary: "Comprar DBD Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "Cheats indetectáveis",
							paragraphs: [
								"DBD Cheats reúne ESP wallhack, radar hack e DBD Aimbot indetectáveis para Dead by Daylight no PC Windows. manutenção undetected após patches Easy Anti-Cheat.",
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
								"Contacte support@dbdcheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				wallhack: {
					title: "Dead by Daylight Wallhack | Visibilidade ESP",
					description: "Dead by Daylight Wallhack: wallhack ESP para jogadores, carcaças e distância. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Dead by Daylight Wallhack",
					intro: "DBD Cheats reúne ESP wallhack, radar hack e DBD Aimbot indetectáveis para Dead by Daylight no PC Windows. Dead by Daylight Wallhack.",
					imageAlt: "dbd wallhack visibility through walls in a trial",
					galleryTitle: "Dead by Daylight Wallhack",
					heroImage: "/images/dbd-cheats-wallhack.webp",
					ctaPrimary: "Comprar DBD Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Dead by Daylight Wallhack",
							paragraphs: [
								"DBD Cheats reúne ESP wallhack, radar hack e DBD Aimbot indetectáveis para Dead by Daylight no PC Windows. wallhack ESP para jogadores, carcaças e distância.",
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
								"Contacte support@dbdcheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | Radar 2D de ameaças",
					description: "Radar hack: sinais de radar 2D para flancos e rotações. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Radar hack",
					intro: "DBD Cheats reúne ESP wallhack, radar hack e DBD Aimbot indetectáveis para Dead by Daylight no PC Windows. Radar hack.",
					imageAlt: "Dead by Daylight 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "Comprar DBD Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"DBD Cheats reúne ESP wallhack, radar hack e DBD Aimbot indetectáveis para Dead by Daylight no PC Windows. sinais de radar 2D para flancos e rotações.",
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
								"Contacte support@dbdcheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Manutenção de patches",
					description: "Bypass Easy Anti-Cheat: como as atualizações Easy Anti-Cheat são tratadas para Dead by Daylight hacks. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "DBD Cheats reúne ESP wallhack, radar hack e DBD Aimbot indetectáveis para Dead by Daylight no PC Windows. Bypass Easy Anti-Cheat.",
					imageAlt: "DBD Cheats maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/dbd-cheats-aimbot.webp",
					ctaPrimary: "Comprar DBD Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"DBD Cheats reúne ESP wallhack, radar hack e DBD Aimbot indetectáveis para Dead by Daylight no PC Windows. como as atualizações Easy Anti-Cheat são tratadas para Dead by Daylight hacks.",
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
								"Contacte support@dbdcheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheats Dead by Daylight 2026 | Guia do comprador",
					description: "Cheats Dead by Daylight 2026: checklist de dbd cheats 2026 antes do checkout. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Cheats Dead by Daylight 2026",
					intro: "DBD Cheats reúne ESP wallhack, radar hack e DBD Aimbot indetectáveis para Dead by Daylight no PC Windows. Cheats Dead by Daylight 2026.",
					imageAlt: "DBD Cheats product overview for Dead by Daylight",
					galleryTitle: "Cheats Dead by Daylight 2026",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "Comprar DBD Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "Cheats Dead by Daylight 2026",
							paragraphs: [
								"DBD Cheats reúne ESP wallhack, radar hack e DBD Aimbot indetectáveis para Dead by Daylight no PC Windows. checklist de dbd cheats 2026 antes do checkout.",
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
								"Contacte support@dbdcheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				hacks: {
					title: "Cheats Dead by Daylight | Guia ESP e Aimbot",
					description: "Cheats Dead by Daylight: pilar DBD Cheats para ESP e Aimbot. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Cheats Dead by Daylight",
					intro: "DBD Cheats reúne ESP wallhack, radar hack e DBD Aimbot indetectáveis para Dead by Daylight no PC Windows. Cheats Dead by Daylight.",
					imageAlt: "DBD Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Cheats Dead by Daylight",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "Comprar DBD Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheats Dead by Daylight",
							paragraphs: [
								"DBD Cheats reúne ESP wallhack, radar hack e DBD Aimbot indetectáveis para Dead by Daylight no PC Windows. pilar DBD Cheats para ESP e Aimbot.",
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
								"Contacte support@dbdcheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Download DBD Cheats | Acesso instantâneo",
					description: "Download DBD Cheats: download de licença digital após pagamento. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Download DBD Cheats",
					intro: "DBD Cheats reúne ESP wallhack, radar hack e DBD Aimbot indetectáveis para Dead by Daylight no PC Windows. Download DBD Cheats.",
					imageAlt: "DBD Cheats download and install delivery flow",
					galleryTitle: "Download DBD Cheats",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "Comprar DBD Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Download DBD Cheats",
							paragraphs: [
								"DBD Cheats reúne ESP wallhack, radar hack e DBD Aimbot indetectáveis para Dead by Daylight no PC Windows. download de licença digital após pagamento.",
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
								"Contacte support@dbdcheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Menu mod Dead by Daylight | Controles in-game",
					description: "Menu mod Dead by Daylight: toggles de ESP e soft aim no cliente. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Menu mod Dead by Daylight",
					intro: "DBD Cheats reúne ESP wallhack, radar hack e DBD Aimbot indetectáveis para Dead by Daylight no PC Windows. Menu mod Dead by Daylight.",
					imageAlt: "DBD Cheats in-game menu controls",
					galleryTitle: "Menu mod Dead by Daylight",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "Comprar DBD Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menu mod Dead by Daylight",
							paragraphs: [
								"DBD Cheats reúne ESP wallhack, radar hack e DBD Aimbot indetectáveis para Dead by Daylight no PC Windows. toggles de ESP e soft aim no cliente.",
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
								"Contacte support@dbdcheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Dead by Daylight | Ajustes soft aim",
					description: "Soft aim Dead by Daylight: ajustes suaves de soft aim para Windows PC. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Soft aim Dead by Daylight",
					intro: "DBD Cheats reúne ESP wallhack, radar hack e DBD Aimbot indetectáveis para Dead by Daylight no PC Windows. Soft aim Dead by Daylight.",
					imageAlt: "Dead by Daylight soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Dead by Daylight",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "Comprar DBD Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "Soft aim Dead by Daylight",
							paragraphs: [
								"DBD Cheats reúne ESP wallhack, radar hack e DBD Aimbot indetectáveis para Dead by Daylight no PC Windows. ajustes suaves de soft aim para Windows PC.",
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
								"Contacte support@dbdcheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Melhores cheats Dead by Daylight | Checklist do comprador",
					description: "Melhores cheats Dead by Daylight: o que comparar antes de comprar dbd cheats. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Melhores cheats Dead by Daylight",
					intro: "DBD Cheats reúne ESP wallhack, radar hack e DBD Aimbot indetectáveis para Dead by Daylight no PC Windows. Melhores cheats Dead by Daylight.",
					imageAlt: "DBD Cheats overview for Dead by Daylight on PC",
					galleryTitle: "Melhores cheats Dead by Daylight",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "Comprar DBD Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Melhores cheats Dead by Daylight",
							paragraphs: [
								"DBD Cheats reúne ESP wallhack, radar hack e DBD Aimbot indetectáveis para Dead by Daylight no PC Windows. o que comparar antes de comprar dbd cheats.",
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
								"Contacte support@dbdcheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Dead by Daylight | Assistência soft aim",
					description: "Hack aimbot Dead by Daylight: assistência undetected de hack Aimbot para Dead by Daylight. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Hack aimbot Dead by Daylight",
					intro: "DBD Cheats reúne ESP wallhack, radar hack e DBD Aimbot indetectáveis para Dead by Daylight no PC Windows. Hack aimbot Dead by Daylight.",
					imageAlt: "DBD Aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Dead by Daylight",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "Comprar DBD Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Dead by Daylight",
							paragraphs: [
								"DBD Cheats reúne ESP wallhack, radar hack e DBD Aimbot indetectáveis para Dead by Daylight no PC Windows. assistência undetected de hack Aimbot para Dead by Daylight.",
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
								"Contacte support@dbdcheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Dead by Daylight | Caixas e generators",
					description: "Hack ESP Dead by Daylight: caixas ESP hack, pins de carcaça e distância. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Hack ESP Dead by Daylight",
					intro: "DBD Cheats reúne ESP wallhack, radar hack e DBD Aimbot indetectáveis para Dead by Daylight no PC Windows. Hack ESP Dead by Daylight.",
					imageAlt: "DBD ESP hack boxes and generator markers",
					galleryTitle: "Hack ESP Dead by Daylight",
					heroImage: "/images/dbd-cheats-wallhack.webp",
					ctaPrimary: "Comprar DBD Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Hack ESP Dead by Daylight",
							paragraphs: [
								"DBD Cheats reúne ESP wallhack, radar hack e DBD Aimbot indetectáveis para Dead by Daylight no PC Windows. caixas ESP hack, pins de carcaça e distância.",
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
								"Contacte support@dbdcheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Dead by Daylight | O que significa",
					description: "Unlock all Dead by Daylight: buscas unlock-all vs ferramentas reais ESP e Aimbot. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Unlock all Dead by Daylight",
					intro: "DBD Cheats reúne ESP wallhack, radar hack e DBD Aimbot indetectáveis para Dead by Daylight no PC Windows. Unlock all Dead by Daylight.",
					imageAlt: "DBD Cheats license features overview",
					galleryTitle: "Unlock all Dead by Daylight",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "Comprar DBD Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Dead by Daylight",
							paragraphs: [
								"DBD Cheats reúne ESP wallhack, radar hack e DBD Aimbot indetectáveis para Dead by Daylight no PC Windows. buscas unlock-all vs ferramentas reais ESP e Aimbot.",
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
								"Contacte support@dbdcheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				privacy: {
					title: "Política de privacidade | DBD Cheats",
					description: "Política de privacidade para DBD Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Política de privacidade",
					intro: "DBD Cheats reúne ESP wallhack, radar hack e DBD Aimbot indetectáveis para Dead by Daylight no PC Windows. Política de privacidade para dbdcheats.org e licenças Dead by Daylight.",
					imageAlt: "DBD Cheats",
					galleryTitle: "DBD Cheats",
					heroImage: "/images/dbd-cheats-aimbot.webp",
					ctaPrimary: "E-mail ao suporte",
					ctaSecondary: "Ler termos",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Informações que coletamos",
							paragraphs: [
								"DBD Cheats reúne ESP wallhack, radar hack e DBD Aimbot indetectáveis para Dead by Daylight no PC Windows. E-mail de contato, referências de pedido Zadeyo e dados básicos de segurança do site.",
								"Detalhes de pagamento são processados pelo checkout Zadeyo — não armazenados em dbdcheats.org.",
							],
						},
						{
							h2: "Como usamos os dados",
							paragraphs: [
								"DBD Cheats reúne ESP wallhack, radar hack e DBD Aimbot indetectáveis para Dead by Daylight no PC Windows. Respostas de suporte, resolução de pedidos e conformidade legal quando necessário.",
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
							],
						},
						{
							h2: "Seus direitos",
							paragraphs: [
								"Contacte support@dbdcheats.org para suporte ou questões legais.",
								"E-mail: support@dbdcheats.org",
							],
						},
					],
				},
				refund: {
					title: "Política de reembolso | DBD Cheats",
					description: "Política de reembolso para DBD Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Política de reembolso",
					intro: "DBD Cheats reúne ESP wallhack, radar hack e DBD Aimbot indetectáveis para Dead by Daylight no PC Windows. Política de reembolso para dbdcheats.org e licenças Dead by Daylight.",
					imageAlt: "DBD Cheats",
					galleryTitle: "DBD Cheats",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "E-mail ao suporte",
					ctaSecondary: "Ler privacidade",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Entrega digital",
							paragraphs: [
								"DBD Cheats reúne ESP wallhack, radar hack e DBD Aimbot indetectáveis para Dead by Daylight no PC Windows. E-mail de contato, referências de pedido Zadeyo e dados básicos de segurança do site.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "Aprovação de reembolso",
							paragraphs: [
								"DBD Cheats reúne ESP wallhack, radar hack e DBD Aimbot indetectáveis para Dead by Daylight no PC Windows. Respostas de suporte, resolução de pedidos e conformidade legal quando necessário.",
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
							],
						},
						{
							h2: "Como solicitar",
							paragraphs: [
								"Contacte support@dbdcheats.org para suporte ou questões legais.",
								"E-mail: support@dbdcheats.org",
							],
						},
					],
				},
				terms: {
					title: "Termos de uso | DBD Cheats",
					description: "Termos de uso para DBD Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Termos de uso",
					intro: "DBD Cheats reúne ESP wallhack, radar hack e DBD Aimbot indetectáveis para Dead by Daylight no PC Windows. Termos de uso para dbdcheats.org e licenças Dead by Daylight.",
					imageAlt: "DBD Cheats",
					galleryTitle: "DBD Cheats",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "E-mail ao suporte",
					ctaSecondary: "Ler privacidade",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Aceitação dos termos",
							paragraphs: [
								"DBD Cheats reúne ESP wallhack, radar hack e DBD Aimbot indetectáveis para Dead by Daylight no PC Windows. E-mail de contato, referências de pedido Zadeyo e dados básicos de segurança do site.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "Aviso de risco",
							paragraphs: [
								"DBD Cheats reúne ESP wallhack, radar hack e DBD Aimbot indetectáveis para Dead by Daylight no PC Windows. Respostas de suporte, resolução de pedidos e conformidade legal quando necessário.",
								"Usar cheats pode violar os termos da equipe Dead by Daylight — você assume todo risco de ban.",
							],
						},
						{
							h2: "Alterações de política",
							paragraphs: [
								"Contacte support@dbdcheats.org para suporte ou questões legais.",
								"E-mail: support@dbdcheats.org",
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
					accent: "Cheat Dead by Daylight indetectable",
					accentShort: "DBD Cheats",
					subtitle: "ESP wallhack, radar hack e Aimbot per Dead by Daylight su PC Windows — manutenzione Easy Anti-Cheat inclusa.",
					subtitleShort: "ESP, radar e Aimbot per Dead by Daylight PC",
					buyNow: "Acquista ora",
					seeFeatures: "Vedi funzioni",
				},
				trust: {
					status: "Online",
					statusNote: "Il pacchetto DBD Cheats è attivo per Dead by Daylight su PC Windows.",
					statusShort: "Attivo",
					delivery: "Consegna digitale istantanea",
					platform: "Windows 10 e 11",
					antiCheat: "Manutenzione Easy Anti-Cheat supportata",
					antiCheatShort: "Easy Anti-Cheat supportato",
				},
				product: {
					title: "DBD Cheats",
					addToCart: "Aggiungi al carrello",
					monthly: "Mensile",
					lifetime: "A vita",
					available: "Disponibile ora",
					gameBadge: "Dead by Daylight",
					platformBadge: "PC Windows",
					statusBadge: "Pacchetto indetectable",
				},
				reviews: {
					title: "Cosa dicono i giocatori",
					subtitle: "Feedback recente dagli acquirenti DBD Cheats",
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
					tagline: "ESP, wallhack, radar e Aimbot indetectable per Dead by Daylight — checkout via Zadeyo.",
				},
				images: {
					hero: "DBD Cheats hero — ESP and aimbot overlay in Dead by Daylight",
					espWallhack: "Wallhack outlines showing survivors and killers through walls",
					aimbotCombat: "Soft aim assist overlay during a Dead by Daylight trial",
					teamFight: "DBD Cheats combat overlay during a team chase",
					playerEsp: "Player ESP boxes and distance readouts in a Dead by Daylight trial",
					headerArt: "Aimbot view and bone priority controls for Dead by Daylight",
					hacksPackage: "2D radar threat overlay for Dead by Daylight",
					chaseFight: "Aimbot assist during a Dead by Daylight chase",
					battleRoyale: "DBD Cheats in-trial overview for Windows PC",
					trialMap: "ESP markers for generators and hooks in Dead by Daylight",
				},
			},
			pages: {
				home: {
					title: "DBD Cheats 2026 | ESP, Wallhack e Aimbot",
					description: "Cheat Dead by Daylight indetectable per Dead by Daylight su PC. ESP wallhack, radar hack e Aimbot con manutenzione Easy Anti-Cheat. Consegna digitale",
					h1: "DBD Cheats — ESP, Wallhack e Aimbot indetectable",
					intro: "Pacchetto undetected per Dead by Daylight su PC Windows: ESP wallhack, radar e Aimbot con manutenzione Easy Anti-Cheat dopo ogni patch.",
					imageAlt: "DBD ESP player tags hack",
					galleryTitle: "Galleria DBD Cheats — ESP, Aimbot e wallhack",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "Acquista DBD Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Perché scegliere DBD Cheats nel 2026",
							paragraphs: [
								"DBD Cheats unisce ESP wallhack, radar hack e DBD Aimbot indetectable per Dead by Daylight su PC Windows. Ideale per leggere teamre nemiche in BR e chase.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar e Aimbot in una licenza",
							paragraphs: [
								"DBD Cheats unisce ESP wallhack, radar hack e DBD Aimbot indetectable per Dead by Daylight su PC Windows. Una licenza invece di tool separati.",
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
							],
						},
					],
				},
				"dbd-esp": {
					title: "ESP Dead by Daylight | Box giocatore e wallhack",
					description: "ESP Dead by Daylight: box giocatore, marcatori generatora e overlay wallhack. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "ESP Dead by Daylight",
					intro: "DBD Cheats unisce ESP wallhack, radar hack e DBD Aimbot indetectable per Dead by Daylight su PC Windows. ESP Dead by Daylight.",
					imageAlt: "DBD ESP player boxes and distance readouts in a trial",
					galleryTitle: "ESP Dead by Daylight",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "Acquista DBD Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "ESP Dead by Daylight",
							paragraphs: [
								"DBD Cheats unisce ESP wallhack, radar hack e DBD Aimbot indetectable per Dead by Daylight su PC Windows. box giocatore, marcatori generatora e overlay wallhack.",
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
								"Contatta support@dbdcheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				"dbd-aimbot": {
					title: "Aimbot Dead by Daylight | Controlli soft aim",
					description: "Aimbot Dead by Daylight: soft aim, FOV e profili Aimbot per specie. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Aimbot Dead by Daylight",
					intro: "DBD Cheats unisce ESP wallhack, radar hack e DBD Aimbot indetectable per Dead by Daylight su PC Windows. Aimbot Dead by Daylight.",
					imageAlt: "DBD Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Dead by Daylight",
					heroImage: "/images/dbd-cheats-aimbot.webp",
					ctaPrimary: "Acquista DBD Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Aimbot Dead by Daylight",
							paragraphs: [
								"DBD Cheats unisce ESP wallhack, radar hack e DBD Aimbot indetectable per Dead by Daylight su PC Windows. soft aim, FOV e profili Aimbot per specie.",
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
								"Contatta support@dbdcheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				features: {
					title: "Funzioni | Elenco completo funzioni",
					description: "Funzioni: ESP, soft aim, controlli radar. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Funzioni",
					intro: "DBD Cheats unisce ESP wallhack, radar hack e DBD Aimbot indetectable per Dead by Daylight su PC Windows. Funzioni.",
					imageAlt: "DBD Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funzioni",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "Acquista DBD Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funzioni",
							paragraphs: [
								"DBD Cheats unisce ESP wallhack, radar hack e DBD Aimbot indetectable per Dead by Daylight su PC Windows. ESP, soft aim, controlli radar.",
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
								"Contatta support@dbdcheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				pricing: {
					title: "Prezzi | Mensile e lifetime",
					description: "Prezzi: licenze $35 mensili o $150 lifetime. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Prezzi",
					intro: "DBD Cheats unisce ESP wallhack, radar hack e DBD Aimbot indetectable per Dead by Daylight su PC Windows. Prezzi.",
					imageAlt: "DBD Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Prezzi",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "Acquista DBD Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Prezzi",
							paragraphs: [
								"DBD Cheats unisce ESP wallhack, radar hack e DBD Aimbot indetectable per Dead by Daylight su PC Windows. licenze $35 mensili o $150 lifetime.",
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
								"Contatta support@dbdcheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				setup: {
					title: "Setup | Guida setup PC",
					description: "Setup: attivazione Windows PC e setup al primo avvio. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Setup",
					intro: "DBD Cheats unisce ESP wallhack, radar hack e DBD Aimbot indetectable per Dead by Daylight su PC Windows. Setup.",
					imageAlt: "DBD Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Setup",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "Acquista DBD Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Setup",
							paragraphs: [
								"DBD Cheats unisce ESP wallhack, radar hack e DBD Aimbot indetectable per Dead by Daylight su PC Windows. attivazione Windows PC e setup al primo avvio.",
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
								"Contatta support@dbdcheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				updates: {
					title: "Aggiornamenti | Log manutenzione Easy Anti-Cheat",
					description: "Aggiornamenti: stato patch Easy Anti-Cheat e note di rebuild. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Aggiornamenti",
					intro: "DBD Cheats unisce ESP wallhack, radar hack e DBD Aimbot indetectable per Dead by Daylight su PC Windows. Aggiornamenti.",
					imageAlt: "DBD Cheats live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Aggiornamenti",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "Acquista DBD Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "Aggiornamenti",
							paragraphs: [
								"DBD Cheats unisce ESP wallhack, radar hack e DBD Aimbot indetectable per Dead by Daylight su PC Windows. stato patch Easy Anti-Cheat e note di rebuild.",
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
								"Contatta support@dbdcheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Domande frequenti",
					description: "FAQ: domande su ESP, soft aim, consegna e Easy Anti-Cheat. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "FAQ",
					intro: "DBD Cheats unisce ESP wallhack, radar hack e DBD Aimbot indetectable per Dead by Daylight su PC Windows. FAQ.",
					imageAlt: "DBD Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "Acquista DBD Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"DBD Cheats unisce ESP wallhack, radar hack e DBD Aimbot indetectable per Dead by Daylight su PC Windows. domande su ESP, soft aim, consegna e Easy Anti-Cheat.",
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
								"Contatta support@dbdcheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				support: {
					title: "Supporto | Aiuto e contatto",
					description: "Supporto: aiuto ordini e contatto supporto licenze. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Supporto",
					intro: "DBD Cheats unisce ESP wallhack, radar hack e DBD Aimbot indetectable per Dead by Daylight su PC Windows. Supporto.",
					imageAlt: "DBD Cheats support page for license and setup help",
					galleryTitle: "Supporto",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "Acquista DBD Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Supporto",
							paragraphs: [
								"DBD Cheats unisce ESP wallhack, radar hack e DBD Aimbot indetectable per Dead by Daylight su PC Windows. aiuto ordini e contatto supporto licenze.",
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
								"Contatta support@dbdcheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				undetected: {
					title: "Cheat indetectable | Stato indetectable",
					description: "Cheat indetectable: manutenzione undetected dopo patch Easy Anti-Cheat. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Cheat indetectable",
					intro: "DBD Cheats unisce ESP wallhack, radar hack e DBD Aimbot indetectable per Dead by Daylight su PC Windows. Cheat indetectable.",
					imageAlt: "DBD Cheats undetected status overview for Windows PC",
					galleryTitle: "Cheat indetectable",
					heroImage: "/images/dbd-cheats-wallhack.webp",
					ctaPrimary: "Acquista DBD Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "Cheat indetectable",
							paragraphs: [
								"DBD Cheats unisce ESP wallhack, radar hack e DBD Aimbot indetectable per Dead by Daylight su PC Windows. manutenzione undetected dopo patch Easy Anti-Cheat.",
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
								"Contatta support@dbdcheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				wallhack: {
					title: "Dead by Daylight Wallhack | Visibilità ESP",
					description: "Dead by Daylight Wallhack: wallhack ESP per giocatori, generators e distanza. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Dead by Daylight Wallhack",
					intro: "DBD Cheats unisce ESP wallhack, radar hack e DBD Aimbot indetectable per Dead by Daylight su PC Windows. Dead by Daylight Wallhack.",
					imageAlt: "dbd wallhack visibility through walls in a trial",
					galleryTitle: "Dead by Daylight Wallhack",
					heroImage: "/images/dbd-cheats-wallhack.webp",
					ctaPrimary: "Acquista DBD Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Dead by Daylight Wallhack",
							paragraphs: [
								"DBD Cheats unisce ESP wallhack, radar hack e DBD Aimbot indetectable per Dead by Daylight su PC Windows. wallhack ESP per giocatori, generators e distanza.",
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
								"Contatta support@dbdcheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | Radar 2D minacce",
					description: "Radar hack: segnali radar 2D per flanchi e rotazioni. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Radar hack",
					intro: "DBD Cheats unisce ESP wallhack, radar hack e DBD Aimbot indetectable per Dead by Daylight su PC Windows. Radar hack.",
					imageAlt: "Dead by Daylight 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "Acquista DBD Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"DBD Cheats unisce ESP wallhack, radar hack e DBD Aimbot indetectable per Dead by Daylight su PC Windows. segnali radar 2D per flanchi e rotazioni.",
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
								"Contatta support@dbdcheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Manutenzione patch",
					description: "Bypass Easy Anti-Cheat: come vengono gestiti gli aggiornamenti Easy Anti-Cheat per Dead by Daylight hacks. consegna digitale istantanea. indetectable — PC",
					h1: "Bypass Easy Anti-Cheat",
					intro: "DBD Cheats unisce ESP wallhack, radar hack e DBD Aimbot indetectable per Dead by Daylight su PC Windows. Bypass Easy Anti-Cheat.",
					imageAlt: "DBD Cheats maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/dbd-cheats-aimbot.webp",
					ctaPrimary: "Acquista DBD Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"DBD Cheats unisce ESP wallhack, radar hack e DBD Aimbot indetectable per Dead by Daylight su PC Windows. come vengono gestiti gli aggiornamenti Easy Anti-Cheat per Dead by Daylight hacks.",
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
								"Contatta support@dbdcheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheat Dead by Daylight 2026 | Guida acquirente",
					description: "Cheat Dead by Daylight 2026: checklist dbd cheats 2026 prima del checkout. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Cheat Dead by Daylight 2026",
					intro: "DBD Cheats unisce ESP wallhack, radar hack e DBD Aimbot indetectable per Dead by Daylight su PC Windows. Cheat Dead by Daylight 2026.",
					imageAlt: "DBD Cheats product overview for Dead by Daylight",
					galleryTitle: "Cheat Dead by Daylight 2026",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "Acquista DBD Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "Cheat Dead by Daylight 2026",
							paragraphs: [
								"DBD Cheats unisce ESP wallhack, radar hack e DBD Aimbot indetectable per Dead by Daylight su PC Windows. checklist dbd cheats 2026 prima del checkout.",
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
								"Contatta support@dbdcheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				hacks: {
					title: "Cheat Dead by Daylight | Guida ESP e Aimbot",
					description: "Cheat Dead by Daylight: pilastro DBD Cheats per ESP e Aimbot. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Cheat Dead by Daylight",
					intro: "DBD Cheats unisce ESP wallhack, radar hack e DBD Aimbot indetectable per Dead by Daylight su PC Windows. Cheat Dead by Daylight.",
					imageAlt: "DBD Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Cheat Dead by Daylight",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "Acquista DBD Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheat Dead by Daylight",
							paragraphs: [
								"DBD Cheats unisce ESP wallhack, radar hack e DBD Aimbot indetectable per Dead by Daylight su PC Windows. pilastro DBD Cheats per ESP e Aimbot.",
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
								"Contatta support@dbdcheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Download DBD Cheats | Accesso istantaneo",
					description: "Download DBD Cheats: download licenza digitale dopo il pagamento. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Download DBD Cheats",
					intro: "DBD Cheats unisce ESP wallhack, radar hack e DBD Aimbot indetectable per Dead by Daylight su PC Windows. Download DBD Cheats.",
					imageAlt: "DBD Cheats download and install delivery flow",
					galleryTitle: "Download DBD Cheats",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "Acquista DBD Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Download DBD Cheats",
							paragraphs: [
								"DBD Cheats unisce ESP wallhack, radar hack e DBD Aimbot indetectable per Dead by Daylight su PC Windows. download licenza digitale dopo il pagamento.",
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
								"Contatta support@dbdcheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Mod menu Dead by Daylight | Toggle in-game",
					description: "Mod menu Dead by Daylight: toggle ESP e soft aim in-client. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Mod menu Dead by Daylight",
					intro: "DBD Cheats unisce ESP wallhack, radar hack e DBD Aimbot indetectable per Dead by Daylight su PC Windows. Mod menu Dead by Daylight.",
					imageAlt: "DBD Cheats in-game menu controls",
					galleryTitle: "Mod menu Dead by Daylight",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "Acquista DBD Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Mod menu Dead by Daylight",
							paragraphs: [
								"DBD Cheats unisce ESP wallhack, radar hack e DBD Aimbot indetectable per Dead by Daylight su PC Windows. toggle ESP e soft aim in-client.",
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
								"Contatta support@dbdcheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Dead by Daylight | Impostazioni soft aim",
					description: "Soft aim Dead by Daylight: impostazioni soft aim fluide per Windows PC. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Soft aim Dead by Daylight",
					intro: "DBD Cheats unisce ESP wallhack, radar hack e DBD Aimbot indetectable per Dead by Daylight su PC Windows. Soft aim Dead by Daylight.",
					imageAlt: "Dead by Daylight soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Dead by Daylight",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "Acquista DBD Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "Soft aim Dead by Daylight",
							paragraphs: [
								"DBD Cheats unisce ESP wallhack, radar hack e DBD Aimbot indetectable per Dead by Daylight su PC Windows. impostazioni soft aim fluide per Windows PC.",
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
								"Contatta support@dbdcheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Migliori cheat Dead by Daylight | Checklist acquirente",
					description: "Migliori cheat Dead by Daylight: cosa confrontare prima di acquistare dbd cheats. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Migliori cheat Dead by Daylight",
					intro: "DBD Cheats unisce ESP wallhack, radar hack e DBD Aimbot indetectable per Dead by Daylight su PC Windows. Migliori cheat Dead by Daylight.",
					imageAlt: "DBD Cheats overview for Dead by Daylight on PC",
					galleryTitle: "Migliori cheat Dead by Daylight",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "Acquista DBD Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Migliori cheat Dead by Daylight",
							paragraphs: [
								"DBD Cheats unisce ESP wallhack, radar hack e DBD Aimbot indetectable per Dead by Daylight su PC Windows. cosa confrontare prima di acquistare dbd cheats.",
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
								"Contatta support@dbdcheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Dead by Daylight | Assist soft aim",
					description: "Hack aimbot Dead by Daylight: assist undetected hack Aimbot per Dead by Daylight. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Hack aimbot Dead by Daylight",
					intro: "DBD Cheats unisce ESP wallhack, radar hack e DBD Aimbot indetectable per Dead by Daylight su PC Windows. Hack aimbot Dead by Daylight.",
					imageAlt: "DBD Aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Dead by Daylight",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "Acquista DBD Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Dead by Daylight",
							paragraphs: [
								"DBD Cheats unisce ESP wallhack, radar hack e DBD Aimbot indetectable per Dead by Daylight su PC Windows. assist undetected hack Aimbot per Dead by Daylight.",
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
								"Contatta support@dbdcheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Dead by Daylight | Box e generators",
					description: "Hack ESP Dead by Daylight: box ESP hack, pin generatora e distanza. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Hack ESP Dead by Daylight",
					intro: "DBD Cheats unisce ESP wallhack, radar hack e DBD Aimbot indetectable per Dead by Daylight su PC Windows. Hack ESP Dead by Daylight.",
					imageAlt: "DBD ESP hack boxes and generator markers",
					galleryTitle: "Hack ESP Dead by Daylight",
					heroImage: "/images/dbd-cheats-wallhack.webp",
					ctaPrimary: "Acquista DBD Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Hack ESP Dead by Daylight",
							paragraphs: [
								"DBD Cheats unisce ESP wallhack, radar hack e DBD Aimbot indetectable per Dead by Daylight su PC Windows. box ESP hack, pin generatora e distanza.",
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
								"Contatta support@dbdcheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Dead by Daylight | Cosa significa",
					description: "Unlock all Dead by Daylight: ricerche unlock-all vs veri strumenti ESP e Aimbot. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Unlock all Dead by Daylight",
					intro: "DBD Cheats unisce ESP wallhack, radar hack e DBD Aimbot indetectable per Dead by Daylight su PC Windows. Unlock all Dead by Daylight.",
					imageAlt: "DBD Cheats license features overview",
					galleryTitle: "Unlock all Dead by Daylight",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "Acquista DBD Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Dead by Daylight",
							paragraphs: [
								"DBD Cheats unisce ESP wallhack, radar hack e DBD Aimbot indetectable per Dead by Daylight su PC Windows. ricerche unlock-all vs veri strumenti ESP e Aimbot.",
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
								"Contatta support@dbdcheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				privacy: {
					title: "Informativa privacy | DBD Cheats",
					description: "Informativa privacy per DBD Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Informativa privacy",
					intro: "DBD Cheats unisce ESP wallhack, radar hack e DBD Aimbot indetectable per Dead by Daylight su PC Windows. Informativa privacy per dbdcheats.org e licenze Dead by Daylight.",
					imageAlt: "DBD Cheats",
					galleryTitle: "DBD Cheats",
					heroImage: "/images/dbd-cheats-aimbot.webp",
					ctaPrimary: "Email al supporto",
					ctaSecondary: "Leggi i termini",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Informazioni raccolte",
							paragraphs: [
								"DBD Cheats unisce ESP wallhack, radar hack e DBD Aimbot indetectable per Dead by Daylight su PC Windows. Email di contatto, riferimenti ordine Zadeyo e dati di sicurezza di base del sito.",
								"I dati di pagamento sono elaborati dal checkout Zadeyo — non memorizzati su dbdcheats.org.",
							],
						},
						{
							h2: "Uso dei dati",
							paragraphs: [
								"DBD Cheats unisce ESP wallhack, radar hack e DBD Aimbot indetectable per Dead by Daylight su PC Windows. Risposte di supporto, risoluzione ordini e conformità legale quando richiesto.",
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
							],
						},
						{
							h2: "I tuoi diritti",
							paragraphs: [
								"Contatta support@dbdcheats.org per supporto o richieste legali.",
								"Email: support@dbdcheats.org",
							],
						},
					],
				},
				refund: {
					title: "Politica di rimborso | DBD Cheats",
					description: "Politica di rimborso per DBD Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politica di rimborso",
					intro: "DBD Cheats unisce ESP wallhack, radar hack e DBD Aimbot indetectable per Dead by Daylight su PC Windows. Politica di rimborso per dbdcheats.org e licenze Dead by Daylight.",
					imageAlt: "DBD Cheats",
					galleryTitle: "DBD Cheats",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "Email al supporto",
					ctaSecondary: "Leggi la privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Consegna digitale",
							paragraphs: [
								"DBD Cheats unisce ESP wallhack, radar hack e DBD Aimbot indetectable per Dead by Daylight su PC Windows. Email di contatto, riferimenti ordine Zadeyo e dati di sicurezza di base del sito.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "Approvazione rimborso",
							paragraphs: [
								"DBD Cheats unisce ESP wallhack, radar hack e DBD Aimbot indetectable per Dead by Daylight su PC Windows. Risposte di supporto, risoluzione ordini e conformità legale quando richiesto.",
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
							],
						},
						{
							h2: "Come richiedere",
							paragraphs: [
								"Contatta support@dbdcheats.org per supporto o richieste legali.",
								"Email: support@dbdcheats.org",
							],
						},
					],
				},
				terms: {
					title: "Termini di utilizzo | DBD Cheats",
					description: "Termini di utilizzo per DBD Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Termini di utilizzo",
					intro: "DBD Cheats unisce ESP wallhack, radar hack e DBD Aimbot indetectable per Dead by Daylight su PC Windows. Termini di utilizzo per dbdcheats.org e licenze Dead by Daylight.",
					imageAlt: "DBD Cheats",
					galleryTitle: "DBD Cheats",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "Email al supporto",
					ctaSecondary: "Leggi la privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Accettazione dei termini",
							paragraphs: [
								"DBD Cheats unisce ESP wallhack, radar hack e DBD Aimbot indetectable per Dead by Daylight su PC Windows. Email di contatto, riferimenti ordine Zadeyo e dati di sicurezza di base del sito.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "Avviso sui rischi",
							paragraphs: [
								"DBD Cheats unisce ESP wallhack, radar hack e DBD Aimbot indetectable per Dead by Daylight su PC Windows. Risposte di supporto, risoluzione ordini e conformità legale quando richiesto.",
								"Usare cheat può violare i termini del team Dead by Daylight — assumi tutto il rischio di ban.",
							],
						},
						{
							h2: "Modifiche alla policy",
							paragraphs: [
								"Contatta support@dbdcheats.org per supporto o richieste legali.",
								"Email: support@dbdcheats.org",
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
					accent: "Undetected DBD Cheats",
					accentShort: "DBD Cheats",
					subtitle: "ESP wallhack, radar hack en Aimbot voor Dead by Daylight op Windows PC — Easy Anti-Cheat-onderhoud inbegrepen.",
					subtitleShort: "ESP, radar & Aimbot voor Dead by Daylight PC",
					buyNow: "Nu kopen",
					seeFeatures: "Bekijk functies",
				},
				trust: {
					status: "Online",
					statusNote: "DBD Cheats pakket is live voor Dead by Daylight op Windows PC.",
					statusShort: "Live",
					delivery: "Directe digitale levering",
					platform: "Windows 10 & 11",
					antiCheat: "Easy Anti-Cheat-onderhoud ondersteund",
					antiCheatShort: "Easy Anti-Cheat support",
				},
				product: {
					title: "DBD Cheats",
					addToCart: "In winkelwagen",
					monthly: "Maandelijks",
					lifetime: "Lifetime",
					available: "Nu beschikbaar",
					gameBadge: "Dead by Daylight",
					platformBadge: "Windows PC",
					statusBadge: "Undetected pakket",
				},
				reviews: {
					title: "Wat spelers zeggen",
					subtitle: "Recente feedback va DBD Cheats kopers",
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
					tagline: "Undetected ESP, wallhack, radar en Aimbot voor Dead by Daylight — checkout via Zadeyo.",
				},
				images: {
					hero: "DBD Cheats hero — ESP and aimbot overlay in Dead by Daylight",
					espWallhack: "Wallhack outlines showing survivors and killers through walls",
					aimbotCombat: "Soft aim assist overlay during a Dead by Daylight trial",
					teamFight: "DBD Cheats combat overlay during a team chase",
					playerEsp: "Player ESP boxes and distance readouts in a Dead by Daylight trial",
					headerArt: "Aimbot view and bone priority controls for Dead by Daylight",
					hacksPackage: "2D radar threat overlay for Dead by Daylight",
					chaseFight: "Aimbot assist during a Dead by Daylight chase",
					battleRoyale: "DBD Cheats in-trial overview for Windows PC",
					trialMap: "ESP markers for generators and hooks in Dead by Daylight",
				},
			},
			pages: {
				home: {
					title: "DBD Cheats 2026 | ESP, Wallhack & Aimbot",
					description: "Undetected dbd cheats voor Dead by Daylight op PC. ESP wallhack, radar hack en Aimbot met Easy Anti-Cheat-onderhoud. Directe digitale levering.",
					h1: "DBD Cheats — Undetected ESP, Wallhack & Aimbot",
					intro: "Undetected Windows PC pakket voor Dead by Daylight: ESP wallhack, radar en Aimbot met Easy Anti-Cheat-onderhoud na elke patch.",
					imageAlt: "DBD ESP player tags hack",
					galleryTitle: "DBD Cheats galerij — ESP, Aimbot en wallhack",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "DBD Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Waarom DBD Cheats in 2026",
							paragraphs: [
								"DBD Cheats bundelt ESP wallhack, radar hack en DBD Aimbot als undetected pakket voor Dead by Daylight op Windows PC. Ideaal om vijandelijke teams te lezen in BR en chase.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "ESP wallhack, radar en Aimbot in één licentie",
							paragraphs: [
								"DBD Cheats bundelt ESP wallhack, radar hack en DBD Aimbot als undetected pakket voor Dead by Daylight op Windows PC. Eén licentie in plaats van losse tools.",
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
							],
						},
					],
				},
				"dbd-esp": {
					title: "DBD ESP | Player Boxes & Wallhack",
					description: "DBD ESP: spelerboxen, karkas-markers en wallhack overlays. directe digitale levering. undetected — Windows PC.",
					h1: "DBD ESP",
					intro: "DBD Cheats bundelt ESP wallhack, radar hack en DBD Aimbot als undetected pakket voor Dead by Daylight op Windows PC. DBD ESP.",
					imageAlt: "DBD ESP player boxes and distance readouts in a trial",
					galleryTitle: "DBD ESP",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "DBD Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "DBD ESP",
							paragraphs: [
								"DBD Cheats bundelt ESP wallhack, radar hack en DBD Aimbot als undetected pakket voor Dead by Daylight op Windows PC. spelerboxen, karkas-markers en wallhack overlays.",
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
								"support@dbdcheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				"dbd-aimbot": {
					title: "DBD Aimbot | Soft Aim Controls",
					description: "DBD Aimbot: soft aim, FOV en Aimbot-profielen per soort. directe digitale levering. undetected — Windows PC.",
					h1: "DBD Aimbot",
					intro: "DBD Cheats bundelt ESP wallhack, radar hack en DBD Aimbot als undetected pakket voor Dead by Daylight op Windows PC. DBD Aimbot.",
					imageAlt: "DBD Aimbot and soft aim controls on Windows PC",
					galleryTitle: "DBD Aimbot",
					heroImage: "/images/dbd-cheats-aimbot.webp",
					ctaPrimary: "DBD Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "DBD Aimbot",
							paragraphs: [
								"DBD Cheats bundelt ESP wallhack, radar hack en DBD Aimbot als undetected pakket voor Dead by Daylight op Windows PC. soft aim, FOV en Aimbot-profielen per soort.",
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
								"support@dbdcheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				features: {
					title: "Functies | Full Feature List",
					description: "Functies: ESP, soft aim, radar bediening. directe digitale levering. undetected — Windows PC.",
					h1: "Functies",
					intro: "DBD Cheats bundelt ESP wallhack, radar hack en DBD Aimbot als undetected pakket voor Dead by Daylight op Windows PC. Functies.",
					imageAlt: "DBD Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Functies",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "DBD Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Functies",
							paragraphs: [
								"DBD Cheats bundelt ESP wallhack, radar hack en DBD Aimbot als undetected pakket voor Dead by Daylight op Windows PC. ESP, soft aim, radar bediening.",
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
								"support@dbdcheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				pricing: {
					title: "Prijzen | Monthly & Lifetime",
					description: "Prijzen: $35 maandelijkse of $150 lifetime licenties. directe digitale levering. undetected — Windows PC.",
					h1: "Prijzen",
					intro: "DBD Cheats bundelt ESP wallhack, radar hack en DBD Aimbot als undetected pakket voor Dead by Daylight op Windows PC. Prijzen.",
					imageAlt: "DBD Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Prijzen",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "DBD Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Prijzen",
							paragraphs: [
								"DBD Cheats bundelt ESP wallhack, radar hack en DBD Aimbot als undetected pakket voor Dead by Daylight op Windows PC. $35 maandelijkse of $150 lifetime licenties.",
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
								"support@dbdcheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				setup: {
					title: "Setup | PC Setup Guide",
					description: "Setup: Windows PC activatie en eerste-start setup. directe digitale levering. undetected — Windows PC.",
					h1: "Setup",
					intro: "DBD Cheats bundelt ESP wallhack, radar hack en DBD Aimbot als undetected pakket voor Dead by Daylight op Windows PC. Setup.",
					imageAlt: "DBD Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Setup",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "DBD Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Setup",
							paragraphs: [
								"DBD Cheats bundelt ESP wallhack, radar hack en DBD Aimbot als undetected pakket voor Dead by Daylight op Windows PC. Windows PC activatie en eerste-start setup.",
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
								"support@dbdcheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				updates: {
					title: "Updates | Easy Anti-Cheat Maintenance Log",
					description: "Updates: Easy Anti-Cheat patchstatus en rebuild-notities. directe digitale levering. undetected — Windows PC.",
					h1: "Updates",
					intro: "DBD Cheats bundelt ESP wallhack, radar hack en DBD Aimbot als undetected pakket voor Dead by Daylight op Windows PC. Updates.",
					imageAlt: "DBD Cheats live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Updates",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "DBD Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "Updates",
							paragraphs: [
								"DBD Cheats bundelt ESP wallhack, radar hack en DBD Aimbot als undetected pakket voor Dead by Daylight op Windows PC. Easy Anti-Cheat patchstatus en rebuild-notities.",
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
								"support@dbdcheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: vragen over ESP, soft aim, levering en Easy Anti-Cheat. directe digitale levering. undetected — Windows PC.",
					h1: "FAQ",
					intro: "DBD Cheats bundelt ESP wallhack, radar hack en DBD Aimbot als undetected pakket voor Dead by Daylight op Windows PC. FAQ.",
					imageAlt: "DBD Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "DBD Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"DBD Cheats bundelt ESP wallhack, radar hack en DBD Aimbot als undetected pakket voor Dead by Daylight op Windows PC. vragen over ESP, soft aim, levering en Easy Anti-Cheat.",
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
								"support@dbdcheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				support: {
					title: "Support | Help & Contact",
					description: "Support: bestelhulp en licentie support contact. directe digitale levering. undetected — Windows PC.",
					h1: "Support",
					intro: "DBD Cheats bundelt ESP wallhack, radar hack en DBD Aimbot als undetected pakket voor Dead by Daylight op Windows PC. Support.",
					imageAlt: "DBD Cheats support page for license and setup help",
					galleryTitle: "Support",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "DBD Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Support",
							paragraphs: [
								"DBD Cheats bundelt ESP wallhack, radar hack en DBD Aimbot als undetected pakket voor Dead by Daylight op Windows PC. bestelhulp en licentie support contact.",
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
								"support@dbdcheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected Cheats | Easy Anti-Cheat Safe Status",
					description: "Undetected Cheats: undetected onderhoud na Easy Anti-Cheat patches. directe digitale levering. undetected — Windows PC.",
					h1: "Undetected Cheats",
					intro: "DBD Cheats bundelt ESP wallhack, radar hack en DBD Aimbot als undetected pakket voor Dead by Daylight op Windows PC. Undetected Cheats.",
					imageAlt: "DBD Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected Cheats",
					heroImage: "/images/dbd-cheats-wallhack.webp",
					ctaPrimary: "DBD Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "Undetected Cheats",
							paragraphs: [
								"DBD Cheats bundelt ESP wallhack, radar hack en DBD Aimbot als undetected pakket voor Dead by Daylight op Windows PC. undetected onderhoud na Easy Anti-Cheat patches.",
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
								"support@dbdcheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				wallhack: {
					title: "Dead by Daylight Wallhack | ESP Visibility",
					description: "Dead by Daylight Wallhack: wallhack ESP voor spelers, karkassen en afstand. directe digitale levering. undetected — Windows PC.",
					h1: "Dead by Daylight Wallhack",
					intro: "DBD Cheats bundelt ESP wallhack, radar hack en DBD Aimbot als undetected pakket voor Dead by Daylight op Windows PC. Dead by Daylight Wallhack.",
					imageAlt: "dbd wallhack visibility through walls in a trial",
					galleryTitle: "Dead by Daylight Wallhack",
					heroImage: "/images/dbd-cheats-wallhack.webp",
					ctaPrimary: "DBD Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Dead by Daylight Wallhack",
							paragraphs: [
								"DBD Cheats bundelt ESP wallhack, radar hack en DBD Aimbot als undetected pakket voor Dead by Daylight op Windows PC. wallhack ESP voor spelers, karkassen en afstand.",
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
								"support@dbdcheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar signalen voor flanks en rotaties. directe digitale levering. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "DBD Cheats bundelt ESP wallhack, radar hack en DBD Aimbot als undetected pakket voor Dead by Daylight op Windows PC. Radar Hack.",
					imageAlt: "Dead by Daylight 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "DBD Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"DBD Cheats bundelt ESP wallhack, radar hack en DBD Aimbot als undetected pakket voor Dead by Daylight op Windows PC. 2D radar signalen voor flanks en rotaties.",
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
								"support@dbdcheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				eac: {
					title: "Easy Anti-Cheat Bypass | Patch Maintenance",
					description: "Easy Anti-Cheat Bypass: hoe Easy Anti-Cheat updates worden afgehandeld voor Dead by Daylight hacks. directe digitale levering. undetected — Windows PC.",
					h1: "Easy Anti-Cheat Bypass",
					intro: "DBD Cheats bundelt ESP wallhack, radar hack en DBD Aimbot als undetected pakket voor Dead by Daylight op Windows PC. Easy Anti-Cheat Bypass.",
					imageAlt: "DBD Cheats maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Easy Anti-Cheat Bypass",
					heroImage: "/images/dbd-cheats-aimbot.webp",
					ctaPrimary: "DBD Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Easy Anti-Cheat Bypass",
							paragraphs: [
								"DBD Cheats bundelt ESP wallhack, radar hack en DBD Aimbot als undetected pakket voor Dead by Daylight op Windows PC. hoe Easy Anti-Cheat updates worden afgehandeld voor Dead by Daylight hacks.",
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
								"support@dbdcheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "DBD Cheats 2026 | Buyer Guide",
					description: "DBD Cheats 2026: 2026 dbd cheats checklist vóór checkout. directe digitale levering. undetected — Windows PC.",
					h1: "DBD Cheats 2026",
					intro: "DBD Cheats bundelt ESP wallhack, radar hack en DBD Aimbot als undetected pakket voor Dead by Daylight op Windows PC. DBD Cheats 2026.",
					imageAlt: "DBD Cheats product overview for Dead by Daylight",
					galleryTitle: "DBD Cheats 2026",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "DBD Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "DBD Cheats 2026",
							paragraphs: [
								"DBD Cheats bundelt ESP wallhack, radar hack en DBD Aimbot als undetected pakket voor Dead by Daylight op Windows PC. 2026 dbd cheats checklist vóór checkout.",
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
								"support@dbdcheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				hacks: {
					title: "DBD Cheats | ESP Aimbot Guide",
					description: "DBD Cheats: DBD Cheats pijler voor ESP en Aimbot. directe digitale levering. undetected — Windows PC.",
					h1: "DBD Cheats",
					intro: "DBD Cheats bundelt ESP wallhack, radar hack en DBD Aimbot als undetected pakket voor Dead by Daylight op Windows PC. DBD Cheats.",
					imageAlt: "DBD Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "DBD Cheats",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "DBD Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "DBD Cheats",
							paragraphs: [
								"DBD Cheats bundelt ESP wallhack, radar hack en DBD Aimbot als undetected pakket voor Dead by Daylight op Windows PC. DBD Cheats pijler voor ESP en Aimbot.",
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
								"support@dbdcheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Dead by Daylight Cheat Download | Instant Access",
					description: "Dead by Daylight Cheat Download: digitale licentiedownload na betaling. directe digitale levering. undetected — Windows PC.",
					h1: "Dead by Daylight Cheat Download",
					intro: "DBD Cheats bundelt ESP wallhack, radar hack en DBD Aimbot als undetected pakket voor Dead by Daylight op Windows PC. Dead by Daylight Cheat Download.",
					imageAlt: "DBD Cheats download and install delivery flow",
					galleryTitle: "Dead by Daylight Cheat Download",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "DBD Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Dead by Daylight Cheat Download",
							paragraphs: [
								"DBD Cheats bundelt ESP wallhack, radar hack en DBD Aimbot als undetected pakket voor Dead by Daylight op Windows PC. digitale licentiedownload na betaling.",
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
								"support@dbdcheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Dead by Daylight Mod Menu | In-Game Toggles",
					description: "Dead by Daylight Mod Menu: in-client ESP en soft aim toggles. directe digitale levering. undetected — Windows PC.",
					h1: "Dead by Daylight Mod Menu",
					intro: "DBD Cheats bundelt ESP wallhack, radar hack en DBD Aimbot als undetected pakket voor Dead by Daylight op Windows PC. Dead by Daylight Mod Menu.",
					imageAlt: "DBD Cheats in-game menu controls",
					galleryTitle: "Dead by Daylight Mod Menu",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "DBD Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Dead by Daylight Mod Menu",
							paragraphs: [
								"DBD Cheats bundelt ESP wallhack, radar hack en DBD Aimbot als undetected pakket voor Dead by Daylight op Windows PC. in-client ESP en soft aim toggles.",
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
								"support@dbdcheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Dead by Daylight Soft Aim | Smooth Aim Settings",
					description: "Dead by Daylight Soft Aim: vloeiende soft aim instellingen voor Windows PC. directe digitale levering. undetected — Windows PC.",
					h1: "Dead by Daylight Soft Aim",
					intro: "DBD Cheats bundelt ESP wallhack, radar hack en DBD Aimbot als undetected pakket voor Dead by Daylight op Windows PC. Dead by Daylight Soft Aim.",
					imageAlt: "Dead by Daylight soft aim FOV and smoothness settings",
					galleryTitle: "Dead by Daylight Soft Aim",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "DBD Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "Dead by Daylight Soft Aim",
							paragraphs: [
								"DBD Cheats bundelt ESP wallhack, radar hack en DBD Aimbot als undetected pakket voor Dead by Daylight op Windows PC. vloeiende soft aim instellingen voor Windows PC.",
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
								"support@dbdcheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Beste DBD Cheats | Buyer Checklist",
					description: "Beste DBD Cheats: wat te vergelijken vóór aankoop van dbd cheats. directe digitale levering. undetected — Windows PC.",
					h1: "Beste DBD Cheats",
					intro: "DBD Cheats bundelt ESP wallhack, radar hack en DBD Aimbot als undetected pakket voor Dead by Daylight op Windows PC. Beste DBD Cheats.",
					imageAlt: "DBD Cheats overview for Dead by Daylight on PC",
					galleryTitle: "Beste DBD Cheats",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "DBD Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Beste DBD Cheats",
							paragraphs: [
								"DBD Cheats bundelt ESP wallhack, radar hack en DBD Aimbot als undetected pakket voor Dead by Daylight op Windows PC. wat te vergelijken vóór aankoop van dbd cheats.",
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
								"support@dbdcheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "DBD Aimbot Hack | Soft Aim Assist",
					description: "DBD Aimbot Hack: undetected Aimbot hack assist voor Dead by Daylight. directe digitale levering. undetected — Windows PC.",
					h1: "DBD Aimbot Hack",
					intro: "DBD Cheats bundelt ESP wallhack, radar hack en DBD Aimbot als undetected pakket voor Dead by Daylight op Windows PC. DBD Aimbot Hack.",
					imageAlt: "DBD Aimbot hack controls and bone priority",
					galleryTitle: "DBD Aimbot Hack",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "DBD Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "DBD Aimbot Hack",
							paragraphs: [
								"DBD Cheats bundelt ESP wallhack, radar hack en DBD Aimbot als undetected pakket voor Dead by Daylight op Windows PC. undetected Aimbot hack assist voor Dead by Daylight.",
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
								"support@dbdcheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				"esp-hack": {
					title: "DBD ESP Hack | Boxes & Loot",
					description: "DBD ESP Hack: ESP hack boxen, karkas pins en afstand. directe digitale levering. undetected — Windows PC.",
					h1: "DBD ESP Hack",
					intro: "DBD Cheats bundelt ESP wallhack, radar hack en DBD Aimbot als undetected pakket voor Dead by Daylight op Windows PC. DBD ESP Hack.",
					imageAlt: "DBD ESP hack boxes and generator markers",
					galleryTitle: "DBD ESP Hack",
					heroImage: "/images/dbd-cheats-wallhack.webp",
					ctaPrimary: "DBD Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "DBD ESP Hack",
							paragraphs: [
								"DBD Cheats bundelt ESP wallhack, radar hack en DBD Aimbot als undetected pakket voor Dead by Daylight op Windows PC. ESP hack boxen, karkas pins en afstand.",
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
								"support@dbdcheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Dead by Daylight Unlock All | What It Means",
					description: "Dead by Daylight Unlock All: unlock-all zoekopdrachten vs echte ESP en Aimbot tools. directe digitale levering. undetected — Windows PC.",
					h1: "Dead by Daylight Unlock All",
					intro: "DBD Cheats bundelt ESP wallhack, radar hack en DBD Aimbot als undetected pakket voor Dead by Daylight op Windows PC. Dead by Daylight Unlock All.",
					imageAlt: "DBD Cheats license features overview",
					galleryTitle: "Dead by Daylight Unlock All",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "DBD Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Dead by Daylight Unlock All",
							paragraphs: [
								"DBD Cheats bundelt ESP wallhack, radar hack en DBD Aimbot als undetected pakket voor Dead by Daylight op Windows PC. unlock-all zoekopdrachten vs echte ESP en Aimbot tools.",
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
								"support@dbdcheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				privacy: {
					title: "Privacybeleid | DBD Cheats",
					description: "Privacybeleid voor DBD Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Privacybeleid",
					intro: "DBD Cheats bundelt ESP wallhack, radar hack en DBD Aimbot als undetected pakket voor Dead by Daylight op Windows PC. Privacybeleid voor dbdcheats.org en Dead by Daylight-licenties.",
					imageAlt: "DBD Cheats",
					galleryTitle: "DBD Cheats",
					heroImage: "/images/dbd-cheats-aimbot.webp",
					ctaPrimary: "E-mail support",
					ctaSecondary: "Voorwaarden lezen",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Informatie die we verzamelen",
							paragraphs: [
								"DBD Cheats bundelt ESP wallhack, radar hack en DBD Aimbot als undetected pakket voor Dead by Daylight op Windows PC. Contact-e-mail, Zadeyo-orderreferenties en basisbeveiligingsgegevens van de site.",
								"Betalingsgegevens worden verwerkt via Zadeyo checkout — niet opgeslagen op dbdcheats.org.",
							],
						},
						{
							h2: "Hoe we gegevens gebruiken",
							paragraphs: [
								"DBD Cheats bundelt ESP wallhack, radar hack en DBD Aimbot als undetected pakket voor Dead by Daylight op Windows PC. Supportreacties, orderafhandeling en wettelijke naleving indien vereist.",
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
							],
						},
						{
							h2: "Uw rechten",
							paragraphs: [
								"support@dbdcheats.org voor support en juridische vragen.",
								"E-mail: support@dbdcheats.org",
							],
						},
					],
				},
				refund: {
					title: "Restitutiebeleid | DBD Cheats",
					description: "Restitutiebeleid voor DBD Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Restitutiebeleid",
					intro: "DBD Cheats bundelt ESP wallhack, radar hack en DBD Aimbot als undetected pakket voor Dead by Daylight op Windows PC. Restitutiebeleid voor dbdcheats.org en Dead by Daylight-licenties.",
					imageAlt: "DBD Cheats",
					galleryTitle: "DBD Cheats",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "E-mail support",
					ctaSecondary: "Privacy lezen",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digitale levering",
							paragraphs: [
								"DBD Cheats bundelt ESP wallhack, radar hack en DBD Aimbot als undetected pakket voor Dead by Daylight op Windows PC. Contact-e-mail, Zadeyo-orderreferenties en basisbeveiligingsgegevens van de site.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "Restitutiegoedkeuring",
							paragraphs: [
								"DBD Cheats bundelt ESP wallhack, radar hack en DBD Aimbot als undetected pakket voor Dead by Daylight op Windows PC. Supportreacties, orderafhandeling en wettelijke naleving indien vereist.",
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
							],
						},
						{
							h2: "Hoe aanvragen",
							paragraphs: [
								"support@dbdcheats.org voor support en juridische vragen.",
								"E-mail: support@dbdcheats.org",
							],
						},
					],
				},
				terms: {
					title: "Gebruiksvoorwaarden | DBD Cheats",
					description: "Gebruiksvoorwaarden voor DBD Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Gebruiksvoorwaarden",
					intro: "DBD Cheats bundelt ESP wallhack, radar hack en DBD Aimbot als undetected pakket voor Dead by Daylight op Windows PC. Gebruiksvoorwaarden voor dbdcheats.org en Dead by Daylight-licenties.",
					imageAlt: "DBD Cheats",
					galleryTitle: "DBD Cheats",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "E-mail support",
					ctaSecondary: "Privacy lezen",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptatie van voorwaarden",
							paragraphs: [
								"DBD Cheats bundelt ESP wallhack, radar hack en DBD Aimbot als undetected pakket voor Dead by Daylight op Windows PC. Contact-e-mail, Zadeyo-orderreferenties en basisbeveiligingsgegevens van de site.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "Risicowaarschuwing",
							paragraphs: [
								"DBD Cheats bundelt ESP wallhack, radar hack en DBD Aimbot als undetected pakket voor Dead by Daylight op Windows PC. Supportreacties, orderafhandeling en wettelijke naleving indien vereist.",
								"Cheats gebruiken kan in strijd zijn met de voorwaarden van het Behaviour Interactive — u neemt alle ban-risico's op u.",
							],
						},
						{
							h2: "Beleidswijzigingen",
							paragraphs: [
								"support@dbdcheats.org voor support en juridische vragen.",
								"E-mail: support@dbdcheats.org",
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
					accent: "Undetected cheaty Dead by Daylight",
					accentShort: "DBD Cheats",
					subtitle: "ESP wallhack, radar hack i Aimbot do Dead by Daylight na PC Windows — konserwacja Easy Anti-Cheat w cenie.",
					subtitleShort: "ESP, radar i Aimbot dla Dead by Daylight PC",
					buyNow: "Kup teraz",
					seeFeatures: "Zobacz funkcje",
				},
				trust: {
					status: "Online",
					statusNote: "Pakiet DBD Cheats jest aktywny dla Dead by Daylight na PC Windows.",
					statusShort: "Aktywny",
					delivery: "Natychmiastowa dostawa cyfrowa",
					platform: "Windows 10 i 11",
					antiCheat: "Wsparcie konserwacji Easy Anti-Cheat",
					antiCheatShort: "Easy Anti-Cheat wsparcie",
				},
				product: {
					title: "DBD Cheats",
					addToCart: "Dodaj do koszyka",
					monthly: "Miesięcznie",
					lifetime: "Dożywotnio",
					available: "Dostępne teraz",
					gameBadge: "Dead by Daylight",
					platformBadge: "PC Windows",
					statusBadge: "Pakiet undetected",
				},
				reviews: {
					title: "Co mówią gracze",
					subtitle: "Ostatnie opinie kupujących DBD Cheats",
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
					tagline: "Undetected ESP, wallhack, radar i Aimbot dla Dead by Daylight — checkout przez Zadeyo.",
				},
				images: {
					hero: "DBD Cheats hero — ESP and aimbot overlay in Dead by Daylight",
					espWallhack: "Wallhack outlines showing survivors and killers through walls",
					aimbotCombat: "Soft aim assist overlay during a Dead by Daylight trial",
					teamFight: "DBD Cheats combat overlay during a team chase",
					playerEsp: "Player ESP boxes and distance readouts in a Dead by Daylight trial",
					headerArt: "Aimbot view and bone priority controls for Dead by Daylight",
					hacksPackage: "2D radar threat overlay for Dead by Daylight",
					chaseFight: "Aimbot assist during a Dead by Daylight chase",
					battleRoyale: "DBD Cheats in-trial overview for Windows PC",
					trialMap: "ESP markers for generators and hooks in Dead by Daylight",
				},
			},
			pages: {
				home: {
					title: "DBD Cheats 2026 | ESP, Wallhack i Aimbot",
					description: "Undetected cheaty Dead by Daylight dla Dead by Daylight na PC. ESP wallhack, radar hack i Aimbot z konserwacją Easy Anti-Cheat. Natychmiastowa dostawa cyfrowa.",
					h1: "DBD Cheats — Undetected ESP, Wallhack i Aimbot",
					intro: "Pakiet undetected dla Dead by Daylight na Windows PC: ESP wallhack, radar i Aimbot z konserwacją Easy Anti-Cheat po każdym patchu.",
					imageAlt: "DBD ESP player tags hack",
					galleryTitle: "Galeria DBD Cheats — ESP, Aimbot i wallhack",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "Kup DBD Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Dlaczego DBD Cheats w 2026",
							paragraphs: [
								"DBD Cheats łączy ESP wallhack, radar hack i DBD Aimbot jako pakiet undetected dla Dead by Daylight na PC Windows. Idealny do czytania wrogich teamów w BR i chase.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar i Aimbot w jednej licencji",
							paragraphs: [
								"DBD Cheats łączy ESP wallhack, radar hack i DBD Aimbot jako pakiet undetected dla Dead by Daylight na PC Windows. Jedna licencja zamiast osobnych narzędzi.",
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
							],
						},
					],
				},
				"dbd-esp": {
					title: "ESP Dead by Daylight | Player Boxes & Wallhack",
					description: "ESP Dead by Daylight: boxy graczy, markery tusz i overlay wallhack. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "ESP Dead by Daylight",
					intro: "DBD Cheats łączy ESP wallhack, radar hack i DBD Aimbot jako pakiet undetected dla Dead by Daylight na PC Windows. ESP Dead by Daylight.",
					imageAlt: "DBD ESP player boxes and distance readouts in a trial",
					galleryTitle: "ESP Dead by Daylight",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "Kup DBD Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "ESP Dead by Daylight",
							paragraphs: [
								"DBD Cheats łączy ESP wallhack, radar hack i DBD Aimbot jako pakiet undetected dla Dead by Daylight na PC Windows. boxy graczy, markery tusz i overlay wallhack.",
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
								"support@dbdcheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"dbd-aimbot": {
					title: "Aimbot Dead by Daylight | Soft Aim Controls",
					description: "Aimbot Dead by Daylight: soft aim, FOV i profile Aimbot per gatunek. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Aimbot Dead by Daylight",
					intro: "DBD Cheats łączy ESP wallhack, radar hack i DBD Aimbot jako pakiet undetected dla Dead by Daylight na PC Windows. Aimbot Dead by Daylight.",
					imageAlt: "DBD Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Dead by Daylight",
					heroImage: "/images/dbd-cheats-aimbot.webp",
					ctaPrimary: "Kup DBD Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Aimbot Dead by Daylight",
							paragraphs: [
								"DBD Cheats łączy ESP wallhack, radar hack i DBD Aimbot jako pakiet undetected dla Dead by Daylight na PC Windows. soft aim, FOV i profile Aimbot per gatunek.",
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
								"support@dbdcheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				features: {
					title: "Funkcje | Full Feature List",
					description: "Funkcje: ESP, soft aim, sterowanie radar. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Funkcje",
					intro: "DBD Cheats łączy ESP wallhack, radar hack i DBD Aimbot jako pakiet undetected dla Dead by Daylight na PC Windows. Funkcje.",
					imageAlt: "DBD Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funkcje",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "Kup DBD Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funkcje",
							paragraphs: [
								"DBD Cheats łączy ESP wallhack, radar hack i DBD Aimbot jako pakiet undetected dla Dead by Daylight na PC Windows. ESP, soft aim, sterowanie radar.",
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
								"support@dbdcheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				pricing: {
					title: "Cennik | Monthly & Lifetime",
					description: "Cennik: licencje $35 miesięcznie lub $150 lifetime. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Cennik",
					intro: "DBD Cheats łączy ESP wallhack, radar hack i DBD Aimbot jako pakiet undetected dla Dead by Daylight na PC Windows. Cennik.",
					imageAlt: "DBD Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Cennik",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "Kup DBD Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Cennik",
							paragraphs: [
								"DBD Cheats łączy ESP wallhack, radar hack i DBD Aimbot jako pakiet undetected dla Dead by Daylight na PC Windows. licencje $35 miesięcznie lub $150 lifetime.",
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
								"support@dbdcheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				setup: {
					title: "Instalacja | PC Setup Guide",
					description: "Instalacja: aktywacja Windows PC i konfiguracja pierwszego uruchomienia. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Instalacja",
					intro: "DBD Cheats łączy ESP wallhack, radar hack i DBD Aimbot jako pakiet undetected dla Dead by Daylight na PC Windows. Instalacja.",
					imageAlt: "DBD Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Instalacja",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "Kup DBD Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalacja",
							paragraphs: [
								"DBD Cheats łączy ESP wallhack, radar hack i DBD Aimbot jako pakiet undetected dla Dead by Daylight na PC Windows. aktywacja Windows PC i konfiguracja pierwszego uruchomienia.",
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
								"support@dbdcheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				updates: {
					title: "Aktualizacje | Easy Anti-Cheat Maintenance Log",
					description: "Aktualizacje: status patchy Easy Anti-Cheat i notatki rebuild. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Aktualizacje",
					intro: "DBD Cheats łączy ESP wallhack, radar hack i DBD Aimbot jako pakiet undetected dla Dead by Daylight na PC Windows. Aktualizacje.",
					imageAlt: "DBD Cheats live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Aktualizacje",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "Kup DBD Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "Aktualizacje",
							paragraphs: [
								"DBD Cheats łączy ESP wallhack, radar hack i DBD Aimbot jako pakiet undetected dla Dead by Daylight na PC Windows. status patchy Easy Anti-Cheat i notatki rebuild.",
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
								"support@dbdcheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: pytania o ESP, soft aim, dostawę i Easy Anti-Cheat. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "FAQ",
					intro: "DBD Cheats łączy ESP wallhack, radar hack i DBD Aimbot jako pakiet undetected dla Dead by Daylight na PC Windows. FAQ.",
					imageAlt: "DBD Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "Kup DBD Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"DBD Cheats łączy ESP wallhack, radar hack i DBD Aimbot jako pakiet undetected dla Dead by Daylight na PC Windows. pytania o ESP, soft aim, dostawę i Easy Anti-Cheat.",
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
								"support@dbdcheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				support: {
					title: "Wsparcie | Help & Contact",
					description: "Wsparcie: pomoc przy zamówieniu i kontakt wsparcia licencji. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Wsparcie",
					intro: "DBD Cheats łączy ESP wallhack, radar hack i DBD Aimbot jako pakiet undetected dla Dead by Daylight na PC Windows. Wsparcie.",
					imageAlt: "DBD Cheats support page for license and setup help",
					galleryTitle: "Wsparcie",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "Kup DBD Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Wsparcie",
							paragraphs: [
								"DBD Cheats łączy ESP wallhack, radar hack i DBD Aimbot jako pakiet undetected dla Dead by Daylight na PC Windows. pomoc przy zamówieniu i kontakt wsparcia licencji.",
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
								"support@dbdcheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				undetected: {
					title: "Cheaty undetected | Easy Anti-Cheat Safe Status",
					description: "Cheaty undetected: undetected konserwacja po patchach Easy Anti-Cheat. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Cheaty undetected",
					intro: "DBD Cheats łączy ESP wallhack, radar hack i DBD Aimbot jako pakiet undetected dla Dead by Daylight na PC Windows. Cheaty undetected.",
					imageAlt: "DBD Cheats undetected status overview for Windows PC",
					galleryTitle: "Cheaty undetected",
					heroImage: "/images/dbd-cheats-wallhack.webp",
					ctaPrimary: "Kup DBD Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "Cheaty undetected",
							paragraphs: [
								"DBD Cheats łączy ESP wallhack, radar hack i DBD Aimbot jako pakiet undetected dla Dead by Daylight na PC Windows. undetected konserwacja po patchach Easy Anti-Cheat.",
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
								"support@dbdcheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				wallhack: {
					title: "Dead by Daylight Wallhack | ESP Visibility",
					description: "Dead by Daylight Wallhack: wallhack ESP dla graczy, tusz i dystansu. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Dead by Daylight Wallhack",
					intro: "DBD Cheats łączy ESP wallhack, radar hack i DBD Aimbot jako pakiet undetected dla Dead by Daylight na PC Windows. Dead by Daylight Wallhack.",
					imageAlt: "dbd wallhack visibility through walls in a trial",
					galleryTitle: "Dead by Daylight Wallhack",
					heroImage: "/images/dbd-cheats-wallhack.webp",
					ctaPrimary: "Kup DBD Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Dead by Daylight Wallhack",
							paragraphs: [
								"DBD Cheats łączy ESP wallhack, radar hack i DBD Aimbot jako pakiet undetected dla Dead by Daylight na PC Windows. wallhack ESP dla graczy, tusz i dystansu.",
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
								"support@dbdcheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: 2D radar wskazówki dla flank i rotacji. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Radar hack",
					intro: "DBD Cheats łączy ESP wallhack, radar hack i DBD Aimbot jako pakiet undetected dla Dead by Daylight na PC Windows. Radar hack.",
					imageAlt: "Dead by Daylight 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "Kup DBD Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"DBD Cheats łączy ESP wallhack, radar hack i DBD Aimbot jako pakiet undetected dla Dead by Daylight na PC Windows. 2D radar wskazówki dla flank i rotacji.",
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
								"support@dbdcheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Patch Maintenance",
					description: "Bypass Easy Anti-Cheat: jak obsługiwane są aktualizacje Easy Anti-Cheat dla Dead by Daylight hacks. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "DBD Cheats łączy ESP wallhack, radar hack i DBD Aimbot jako pakiet undetected dla Dead by Daylight na PC Windows. Bypass Easy Anti-Cheat.",
					imageAlt: "DBD Cheats maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/dbd-cheats-aimbot.webp",
					ctaPrimary: "Kup DBD Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"DBD Cheats łączy ESP wallhack, radar hack i DBD Aimbot jako pakiet undetected dla Dead by Daylight na PC Windows. jak obsługiwane są aktualizacje Easy Anti-Cheat dla Dead by Daylight hacks.",
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
								"support@dbdcheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheaty Dead by Daylight 2026 | Buyer Guide",
					description: "Cheaty Dead by Daylight 2026: checklista dbd cheats 2026 przed checkout. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Cheaty Dead by Daylight 2026",
					intro: "DBD Cheats łączy ESP wallhack, radar hack i DBD Aimbot jako pakiet undetected dla Dead by Daylight na PC Windows. Cheaty Dead by Daylight 2026.",
					imageAlt: "DBD Cheats product overview for Dead by Daylight",
					galleryTitle: "Cheaty Dead by Daylight 2026",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "Kup DBD Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "Cheaty Dead by Daylight 2026",
							paragraphs: [
								"DBD Cheats łączy ESP wallhack, radar hack i DBD Aimbot jako pakiet undetected dla Dead by Daylight na PC Windows. checklista dbd cheats 2026 przed checkout.",
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
								"support@dbdcheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				hacks: {
					title: "Cheaty Dead by Daylight | ESP Aimbot Guide",
					description: "Cheaty Dead by Daylight: filary DBD Cheats dla ESP i Aimbot. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Cheaty Dead by Daylight",
					intro: "DBD Cheats łączy ESP wallhack, radar hack i DBD Aimbot jako pakiet undetected dla Dead by Daylight na PC Windows. Cheaty Dead by Daylight.",
					imageAlt: "DBD Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Cheaty Dead by Daylight",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "Kup DBD Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheaty Dead by Daylight",
							paragraphs: [
								"DBD Cheats łączy ESP wallhack, radar hack i DBD Aimbot jako pakiet undetected dla Dead by Daylight na PC Windows. filary DBD Cheats dla ESP i Aimbot.",
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
								"support@dbdcheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Pobieranie DBD Cheats | Instant Access",
					description: "Pobieranie DBD Cheats: cyfrowe pobranie licencji po płatności. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Pobieranie DBD Cheats",
					intro: "DBD Cheats łączy ESP wallhack, radar hack i DBD Aimbot jako pakiet undetected dla Dead by Daylight na PC Windows. Pobieranie DBD Cheats.",
					imageAlt: "DBD Cheats download and install delivery flow",
					galleryTitle: "Pobieranie DBD Cheats",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "Kup DBD Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Pobieranie DBD Cheats",
							paragraphs: [
								"DBD Cheats łączy ESP wallhack, radar hack i DBD Aimbot jako pakiet undetected dla Dead by Daylight na PC Windows. cyfrowe pobranie licencji po płatności.",
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
								"support@dbdcheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Mod menu Dead by Daylight | In-Game Toggles",
					description: "Mod menu Dead by Daylight: przełączniki ESP i soft aim w kliencie. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Mod menu Dead by Daylight",
					intro: "DBD Cheats łączy ESP wallhack, radar hack i DBD Aimbot jako pakiet undetected dla Dead by Daylight na PC Windows. Mod menu Dead by Daylight.",
					imageAlt: "DBD Cheats in-game menu controls",
					galleryTitle: "Mod menu Dead by Daylight",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "Kup DBD Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Mod menu Dead by Daylight",
							paragraphs: [
								"DBD Cheats łączy ESP wallhack, radar hack i DBD Aimbot jako pakiet undetected dla Dead by Daylight na PC Windows. przełączniki ESP i soft aim w kliencie.",
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
								"support@dbdcheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Dead by Daylight | Smooth Aim Settings",
					description: "Soft aim Dead by Daylight: płynne ustawienia soft aim dla Windows PC. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Soft aim Dead by Daylight",
					intro: "DBD Cheats łączy ESP wallhack, radar hack i DBD Aimbot jako pakiet undetected dla Dead by Daylight na PC Windows. Soft aim Dead by Daylight.",
					imageAlt: "Dead by Daylight soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Dead by Daylight",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "Kup DBD Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "Soft aim Dead by Daylight",
							paragraphs: [
								"DBD Cheats łączy ESP wallhack, radar hack i DBD Aimbot jako pakiet undetected dla Dead by Daylight na PC Windows. płynne ustawienia soft aim dla Windows PC.",
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
								"support@dbdcheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Najlepsze cheaty Dead by Daylight | Buyer Checklist",
					description: "Najlepsze cheaty Dead by Daylight: co porównać przed zakupem dbd cheats. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Najlepsze cheaty Dead by Daylight",
					intro: "DBD Cheats łączy ESP wallhack, radar hack i DBD Aimbot jako pakiet undetected dla Dead by Daylight na PC Windows. Najlepsze cheaty Dead by Daylight.",
					imageAlt: "DBD Cheats overview for Dead by Daylight on PC",
					galleryTitle: "Najlepsze cheaty Dead by Daylight",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "Kup DBD Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Najlepsze cheaty Dead by Daylight",
							paragraphs: [
								"DBD Cheats łączy ESP wallhack, radar hack i DBD Aimbot jako pakiet undetected dla Dead by Daylight na PC Windows. co porównać przed zakupem dbd cheats.",
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
								"support@dbdcheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Dead by Daylight | Soft Aim Assist",
					description: "Hack aimbot Dead by Daylight: undetected Aimbot hack assist dla Dead by Daylight. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Hack aimbot Dead by Daylight",
					intro: "DBD Cheats łączy ESP wallhack, radar hack i DBD Aimbot jako pakiet undetected dla Dead by Daylight na PC Windows. Hack aimbot Dead by Daylight.",
					imageAlt: "DBD Aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Dead by Daylight",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "Kup DBD Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Dead by Daylight",
							paragraphs: [
								"DBD Cheats łączy ESP wallhack, radar hack i DBD Aimbot jako pakiet undetected dla Dead by Daylight na PC Windows. undetected Aimbot hack assist dla Dead by Daylight.",
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
								"support@dbdcheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Dead by Daylight | Boxes & Loot",
					description: "Hack ESP Dead by Daylight: boxy ESP hack, piny tusz i dystans. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Hack ESP Dead by Daylight",
					intro: "DBD Cheats łączy ESP wallhack, radar hack i DBD Aimbot jako pakiet undetected dla Dead by Daylight na PC Windows. Hack ESP Dead by Daylight.",
					imageAlt: "DBD ESP hack boxes and generator markers",
					galleryTitle: "Hack ESP Dead by Daylight",
					heroImage: "/images/dbd-cheats-wallhack.webp",
					ctaPrimary: "Kup DBD Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Hack ESP Dead by Daylight",
							paragraphs: [
								"DBD Cheats łączy ESP wallhack, radar hack i DBD Aimbot jako pakiet undetected dla Dead by Daylight na PC Windows. boxy ESP hack, piny tusz i dystans.",
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
								"support@dbdcheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Dead by Daylight | What It Means",
					description: "Unlock all Dead by Daylight: wyszukiwania unlock-all vs prawdziwe narzędzia ESP i Aimbot. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Unlock all Dead by Daylight",
					intro: "DBD Cheats łączy ESP wallhack, radar hack i DBD Aimbot jako pakiet undetected dla Dead by Daylight na PC Windows. Unlock all Dead by Daylight.",
					imageAlt: "DBD Cheats license features overview",
					galleryTitle: "Unlock all Dead by Daylight",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "Kup DBD Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Dead by Daylight",
							paragraphs: [
								"DBD Cheats łączy ESP wallhack, radar hack i DBD Aimbot jako pakiet undetected dla Dead by Daylight na PC Windows. wyszukiwania unlock-all vs prawdziwe narzędzia ESP i Aimbot.",
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
								"support@dbdcheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				privacy: {
					title: "Polityka prywatności | DBD Cheats",
					description: "Polityka prywatności dla DBD Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Polityka prywatności",
					intro: "DBD Cheats łączy ESP wallhack, radar hack i DBD Aimbot jako pakiet undetected dla Dead by Daylight na PC Windows. Polityka prywatności dla dbdcheats.org i licencji Dead by Daylight.",
					imageAlt: "DBD Cheats",
					galleryTitle: "DBD Cheats",
					heroImage: "/images/dbd-cheats-aimbot.webp",
					ctaPrimary: "E-mail do supportu",
					ctaSecondary: "Przeczytaj warunki",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Informacje, które zbieramy",
							paragraphs: [
								"DBD Cheats łączy ESP wallhack, radar hack i DBD Aimbot jako pakiet undetected dla Dead by Daylight na PC Windows. E-mail kontaktowy, referencje zamówień Zadeyo i podstawowe dane bezpieczeństwa witryny.",
								"Dane płatności są przetwarzane przez checkout Zadeyo — nie przechowywane na dbdcheats.org.",
							],
						},
						{
							h2: "Jak wykorzystujemy dane",
							paragraphs: [
								"DBD Cheats łączy ESP wallhack, radar hack i DBD Aimbot jako pakiet undetected dla Dead by Daylight na PC Windows. Odpowiedzi wsparcia, rozwiązywanie zamówień i zgodność prawna w razie potrzeby.",
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
							],
						},
						{
							h2: "Twoje prawa",
							paragraphs: [
								"support@dbdcheats.org w sprawach wsparcia i prawnych.",
								"E-mail: support@dbdcheats.org",
							],
						},
					],
				},
				refund: {
					title: "Polityka zwrotów | DBD Cheats",
					description: "Polityka zwrotów dla DBD Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Polityka zwrotów",
					intro: "DBD Cheats łączy ESP wallhack, radar hack i DBD Aimbot jako pakiet undetected dla Dead by Daylight na PC Windows. Polityka zwrotów dla dbdcheats.org i licencji Dead by Daylight.",
					imageAlt: "DBD Cheats",
					galleryTitle: "DBD Cheats",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "E-mail do supportu",
					ctaSecondary: "Przeczytaj politykę prywatności",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Dostawa cyfrowa",
							paragraphs: [
								"DBD Cheats łączy ESP wallhack, radar hack i DBD Aimbot jako pakiet undetected dla Dead by Daylight na PC Windows. E-mail kontaktowy, referencje zamówień Zadeyo i podstawowe dane bezpieczeństwa witryny.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "Zatwierdzenie zwrotu",
							paragraphs: [
								"DBD Cheats łączy ESP wallhack, radar hack i DBD Aimbot jako pakiet undetected dla Dead by Daylight na PC Windows. Odpowiedzi wsparcia, rozwiązywanie zamówień i zgodność prawna w razie potrzeby.",
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
							],
						},
						{
							h2: "Jak złożyć wniosek",
							paragraphs: [
								"support@dbdcheats.org w sprawach wsparcia i prawnych.",
								"E-mail: support@dbdcheats.org",
							],
						},
					],
				},
				terms: {
					title: "Warunki użytkowania | DBD Cheats",
					description: "Warunki użytkowania dla DBD Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Warunki użytkowania",
					intro: "DBD Cheats łączy ESP wallhack, radar hack i DBD Aimbot jako pakiet undetected dla Dead by Daylight na PC Windows. Warunki użytkowania dla dbdcheats.org i licencji Dead by Daylight.",
					imageAlt: "DBD Cheats",
					galleryTitle: "DBD Cheats",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "E-mail do supportu",
					ctaSecondary: "Przeczytaj politykę prywatności",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Akceptacja warunków",
							paragraphs: [
								"DBD Cheats łączy ESP wallhack, radar hack i DBD Aimbot jako pakiet undetected dla Dead by Daylight na PC Windows. E-mail kontaktowy, referencje zamówień Zadeyo i podstawowe dane bezpieczeństwa witryny.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "Ostrzeżenie o ryzyku",
							paragraphs: [
								"DBD Cheats łączy ESP wallhack, radar hack i DBD Aimbot jako pakiet undetected dla Dead by Daylight na PC Windows. Odpowiedzi wsparcia, rozwiązywanie zamówień i zgodność prawna w razie potrzeby.",
								"Korzystanie z cheatów może naruszać warunki zespołu Dead by Daylight — bierzesz na siebie ryzyko bana.",
							],
						},
						{
							h2: "Zmiany polityki",
							paragraphs: [
								"support@dbdcheats.org w sprawach wsparcia i prawnych.",
								"E-mail: support@dbdcheats.org",
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
					accent: "Undetected читы Dead by Daylight",
					accentShort: "DBD Cheats",
					subtitle: "ESP wallhack, radar hack и Aimbot для Dead by Daylight на Windows PC — обслуживание Easy Anti-Cheat включено.",
					subtitleShort: "ESP, radar и Aimbot для Dead by Daylight PC",
					buyNow: "Купить",
					seeFeatures: "Смотреть функции",
				},
				trust: {
					status: "Онлайн",
					statusNote: "Пакет DBD Cheats активен для Dead by Daylight на Windows PC.",
					statusShort: "Активен",
					delivery: "Мгновенная цифровая доставка",
					platform: "Windows 10 и 11",
					antiCheat: "Поддержка обслуживания Easy Anti-Cheat",
					antiCheatShort: "Easy Anti-Cheat поддержка",
				},
				product: {
					title: "DBD Cheats",
					addToCart: "В корзину",
					monthly: "Месяц",
					lifetime: "Навсегда",
					available: "Доступно сейчас",
					gameBadge: "Dead by Daylight",
					platformBadge: "Windows PC",
					statusBadge: "Undetected пакет",
				},
				reviews: {
					title: "Что говорят игроки",
					subtitle: "Недавние отзывы покупателей DBD Cheats",
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
					tagline: "Undetected ESP, wallhack, radar и Aimbot для Dead by Daylight — оплата через Zadeyo.",
				},
				images: {
					hero: "DBD Cheats hero — ESP and aimbot overlay in Dead by Daylight",
					espWallhack: "Wallhack outlines showing survivors and killers through walls",
					aimbotCombat: "Soft aim assist overlay during a Dead by Daylight trial",
					teamFight: "DBD Cheats combat overlay during a team chase",
					playerEsp: "Player ESP boxes and distance readouts in a Dead by Daylight trial",
					headerArt: "Aimbot view and bone priority controls for Dead by Daylight",
					hacksPackage: "2D radar threat overlay for Dead by Daylight",
					chaseFight: "Aimbot assist during a Dead by Daylight chase",
					battleRoyale: "DBD Cheats in-trial overview for Windows PC",
					trialMap: "ESP markers for generators and hooks in Dead by Daylight",
				},
			},
			pages: {
				home: {
					title: "DBD Cheats 2026 | ESP, Wallhack и Aimbot",
					description: "Undetected читы Dead by Daylight для Dead by Daylight на PC. ESP wallhack, radar hack и Aimbot с обслуживанием Easy Anti-Cheat. Мгновенная цифровая доставка.",
					h1: "DBD Cheats — Undetected ESP, Wallhack и Aimbot",
					intro: "Undetected пакет для Dead by Daylight на Windows PC: ESP wallhack, radar и Aimbot с обслуживанием Easy Anti-Cheat после патчей.",
					imageAlt: "DBD ESP — теги игроков hack",
					galleryTitle: "Галерея DBD Cheats — ESP, Aimbot и wallhack",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "Купить DBD Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Почему выбирают DBD Cheats в 2026",
							paragraphs: [
								"DBD Cheats объединяет ESP wallhack, radar hack и DBD Aimbot в undetected пакете для Dead by Daylight на Windows PC. Идеально для чтения вражеских отрядов в BR и chase.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar и Aimbot в одной лицензии",
							paragraphs: [
								"DBD Cheats объединяет ESP wallhack, radar hack и DBD Aimbot в undetected пакете для Dead by Daylight на Windows PC. Одна лицензия вместо отдельных инструментов.",
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
							],
						},
					],
				},
				"dbd-esp": {
					title: "ESP Dead by Daylight | Боксы игроков и wallhack",
					description: "ESP Dead by Daylight: боксы игроков, маркеры туш и wallhack overlays. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "ESP Dead by Daylight",
					intro: "DBD Cheats объединяет ESP wallhack, radar hack и DBD Aimbot в undetected пакете для Dead by Daylight на Windows PC. ESP Dead by Daylight.",
					imageAlt: "DBD ESP player boxes and distance readouts in a trial",
					galleryTitle: "ESP Dead by Daylight",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "Купить DBD Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "ESP Dead by Daylight",
							paragraphs: [
								"DBD Cheats объединяет ESP wallhack, radar hack и DBD Aimbot в undetected пакете для Dead by Daylight на Windows PC. боксы игроков, маркеры туш и wallhack overlays.",
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
								"support@dbdcheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"dbd-aimbot": {
					title: "Aimbot Dead by Daylight | Управление soft aim",
					description: "Aimbot Dead by Daylight: soft aim, FOV и профили Aimbot по видам. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Aimbot Dead by Daylight",
					intro: "DBD Cheats объединяет ESP wallhack, radar hack и DBD Aimbot в undetected пакете для Dead by Daylight на Windows PC. Aimbot Dead by Daylight.",
					imageAlt: "DBD Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Dead by Daylight",
					heroImage: "/images/dbd-cheats-aimbot.webp",
					ctaPrimary: "Купить DBD Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Aimbot Dead by Daylight",
							paragraphs: [
								"DBD Cheats объединяет ESP wallhack, radar hack и DBD Aimbot в undetected пакете для Dead by Daylight на Windows PC. soft aim, FOV и профили Aimbot по видам.",
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
								"support@dbdcheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				features: {
					title: "Функции | Полный список функций",
					description: "Функции: ESP, soft aim, управление radar. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Функции",
					intro: "DBD Cheats объединяет ESP wallhack, radar hack и DBD Aimbot в undetected пакете для Dead by Daylight на Windows PC. Функции.",
					imageAlt: "DBD Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Функции",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "Купить DBD Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Функции",
							paragraphs: [
								"DBD Cheats объединяет ESP wallhack, radar hack и DBD Aimbot в undetected пакете для Dead by Daylight на Windows PC. ESP, soft aim, управление radar.",
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
								"support@dbdcheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				pricing: {
					title: "Цены | Месяц и lifetime",
					description: "Цены: лицензии $35 в месяц или $150 lifetime. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Цены",
					intro: "DBD Cheats объединяет ESP wallhack, radar hack и DBD Aimbot в undetected пакете для Dead by Daylight на Windows PC. Цены.",
					imageAlt: "DBD Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Цены",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "Купить DBD Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Цены",
							paragraphs: [
								"DBD Cheats объединяет ESP wallhack, radar hack и DBD Aimbot в undetected пакете для Dead by Daylight на Windows PC. лицензии $35 в месяц или $150 lifetime.",
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
								"support@dbdcheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				setup: {
					title: "Установка | Гайд по установке",
					description: "Установка: активация на Windows PC и настройка первого запуска. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Установка",
					intro: "DBD Cheats объединяет ESP wallhack, radar hack и DBD Aimbot в undetected пакете для Dead by Daylight на Windows PC. Установка.",
					imageAlt: "DBD Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Установка",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "Купить DBD Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Установка",
							paragraphs: [
								"DBD Cheats объединяет ESP wallhack, radar hack и DBD Aimbot в undetected пакете для Dead by Daylight на Windows PC. активация на Windows PC и настройка первого запуска.",
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
								"support@dbdcheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				updates: {
					title: "Обновления | Журнал Easy Anti-Cheat",
					description: "Обновления: статус патчей Easy Anti-Cheat и заметки о rebuild. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Обновления",
					intro: "DBD Cheats объединяет ESP wallhack, radar hack и DBD Aimbot в undetected пакете для Dead by Daylight на Windows PC. Обновления.",
					imageAlt: "DBD Cheats live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Обновления",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "Купить DBD Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "Обновления",
							paragraphs: [
								"DBD Cheats объединяет ESP wallhack, radar hack и DBD Aimbot в undetected пакете для Dead by Daylight на Windows PC. статус патчей Easy Anti-Cheat и заметки о rebuild.",
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
								"support@dbdcheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Частые вопросы",
					description: "FAQ: вопросы об ESP, soft aim, доставке и Easy Anti-Cheat. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "FAQ",
					intro: "DBD Cheats объединяет ESP wallhack, radar hack и DBD Aimbot в undetected пакете для Dead by Daylight на Windows PC. FAQ.",
					imageAlt: "DBD Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "Купить DBD Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"DBD Cheats объединяет ESP wallhack, radar hack и DBD Aimbot в undetected пакете для Dead by Daylight на Windows PC. вопросы об ESP, soft aim, доставке и Easy Anti-Cheat.",
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
								"support@dbdcheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				support: {
					title: "Поддержка | Помощь и контакт",
					description: "Поддержка: помощь с заказом и контакт поддержки лицензий. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Поддержка",
					intro: "DBD Cheats объединяет ESP wallhack, radar hack и DBD Aimbot в undetected пакете для Dead by Daylight на Windows PC. Поддержка.",
					imageAlt: "DBD Cheats support page for license and setup help",
					galleryTitle: "Поддержка",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "Купить DBD Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Поддержка",
							paragraphs: [
								"DBD Cheats объединяет ESP wallhack, radar hack и DBD Aimbot в undetected пакете для Dead by Daylight на Windows PC. помощь с заказом и контакт поддержки лицензий.",
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
								"support@dbdcheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected читы | Статус undetected",
					description: "Undetected читы: undetected обслуживание после патчей Easy Anti-Cheat. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Undetected читы",
					intro: "DBD Cheats объединяет ESP wallhack, radar hack и DBD Aimbot в undetected пакете для Dead by Daylight на Windows PC. Undetected читы.",
					imageAlt: "DBD Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected читы",
					heroImage: "/images/dbd-cheats-wallhack.webp",
					ctaPrimary: "Купить DBD Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "Undetected читы",
							paragraphs: [
								"DBD Cheats объединяет ESP wallhack, radar hack и DBD Aimbot в undetected пакете для Dead by Daylight на Windows PC. undetected обслуживание после патчей Easy Anti-Cheat.",
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
								"support@dbdcheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				wallhack: {
					title: "Dead by Daylight Wallhack | Видимость ESP",
					description: "Dead by Daylight Wallhack: wallhack ESP для игроков, туш и дистанции. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Dead by Daylight Wallhack",
					intro: "DBD Cheats объединяет ESP wallhack, radar hack и DBD Aimbot в undetected пакете для Dead by Daylight на Windows PC. Dead by Daylight Wallhack.",
					imageAlt: "dbd wallhack visibility through walls in a trial",
					galleryTitle: "Dead by Daylight Wallhack",
					heroImage: "/images/dbd-cheats-wallhack.webp",
					ctaPrimary: "Купить DBD Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Dead by Daylight Wallhack",
							paragraphs: [
								"DBD Cheats объединяет ESP wallhack, radar hack и DBD Aimbot в undetected пакете для Dead by Daylight на Windows PC. wallhack ESP для игроков, туш и дистанции.",
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
								"support@dbdcheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D радар угроз",
					description: "Radar hack: 2D radar подсказки для флангов и ротаций. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Radar hack",
					intro: "DBD Cheats объединяет ESP wallhack, radar hack и DBD Aimbot в undetected пакете для Dead by Daylight на Windows PC. Radar hack.",
					imageAlt: "Dead by Daylight 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "Купить DBD Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"DBD Cheats объединяет ESP wallhack, radar hack и DBD Aimbot в undetected пакете для Dead by Daylight на Windows PC. 2D radar подсказки для флангов и ротаций.",
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
								"support@dbdcheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Обслуживание патчей",
					description: "Bypass Easy Anti-Cheat: как обрабатываются обновления Easy Anti-Cheat для Dead by Daylight hacks. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "DBD Cheats объединяет ESP wallhack, radar hack и DBD Aimbot в undetected пакете для Dead by Daylight на Windows PC. Bypass Easy Anti-Cheat.",
					imageAlt: "DBD Cheats maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/dbd-cheats-aimbot.webp",
					ctaPrimary: "Купить DBD Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"DBD Cheats объединяет ESP wallhack, radar hack и DBD Aimbot в undetected пакете для Dead by Daylight на Windows PC. как обрабатываются обновления Easy Anti-Cheat для Dead by Daylight hacks.",
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
								"support@dbdcheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Читы Dead by Daylight 2026 | Гайд покупателя",
					description: "Читы Dead by Daylight 2026: чеклист dbd cheats 2026 перед checkout. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Читы Dead by Daylight 2026",
					intro: "DBD Cheats объединяет ESP wallhack, radar hack и DBD Aimbot в undetected пакете для Dead by Daylight на Windows PC. Читы Dead by Daylight 2026.",
					imageAlt: "DBD Cheats product overview for Dead by Daylight",
					galleryTitle: "Читы Dead by Daylight 2026",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "Купить DBD Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "Читы Dead by Daylight 2026",
							paragraphs: [
								"DBD Cheats объединяет ESP wallhack, radar hack и DBD Aimbot в undetected пакете для Dead by Daylight на Windows PC. чеклист dbd cheats 2026 перед checkout.",
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
								"support@dbdcheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				hacks: {
					title: "Читы Dead by Daylight | Гайд ESP и Aimbot",
					description: "Читы Dead by Daylight: столп DBD Cheats для ESP и Aimbot. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Читы Dead by Daylight",
					intro: "DBD Cheats объединяет ESP wallhack, radar hack и DBD Aimbot в undetected пакете для Dead by Daylight на Windows PC. Читы Dead by Daylight.",
					imageAlt: "DBD Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Читы Dead by Daylight",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "Купить DBD Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Читы Dead by Daylight",
							paragraphs: [
								"DBD Cheats объединяет ESP wallhack, radar hack и DBD Aimbot в undetected пакете для Dead by Daylight на Windows PC. столп DBD Cheats для ESP и Aimbot.",
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
								"support@dbdcheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Скачать DBD Cheats | Мгновенный доступ",
					description: "Скачать DBD Cheats: цифровая загрузка лицензии после оплаты. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Скачать DBD Cheats",
					intro: "DBD Cheats объединяет ESP wallhack, radar hack и DBD Aimbot в undetected пакете для Dead by Daylight на Windows PC. Скачать DBD Cheats.",
					imageAlt: "DBD Cheats download and install delivery flow",
					galleryTitle: "Скачать DBD Cheats",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "Купить DBD Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Скачать DBD Cheats",
							paragraphs: [
								"DBD Cheats объединяет ESP wallhack, radar hack и DBD Aimbot в undetected пакете для Dead by Daylight на Windows PC. цифровая загрузка лицензии после оплаты.",
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
								"support@dbdcheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Мод-меню Dead by Daylight | Игровые переключатели",
					description: "Мод-меню Dead by Daylight: переключатели ESP и soft aim в клиенте. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Мод-меню Dead by Daylight",
					intro: "DBD Cheats объединяет ESP wallhack, radar hack и DBD Aimbot в undetected пакете для Dead by Daylight на Windows PC. Мод-меню Dead by Daylight.",
					imageAlt: "DBD Cheats in-game menu controls",
					galleryTitle: "Мод-меню Dead by Daylight",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "Купить DBD Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Мод-меню Dead by Daylight",
							paragraphs: [
								"DBD Cheats объединяет ESP wallhack, radar hack и DBD Aimbot в undetected пакете для Dead by Daylight на Windows PC. переключатели ESP и soft aim в клиенте.",
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
								"support@dbdcheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Dead by Daylight | Настройки soft aim",
					description: "Soft aim Dead by Daylight: плавные настройки soft aim для Windows PC. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Soft aim Dead by Daylight",
					intro: "DBD Cheats объединяет ESP wallhack, radar hack и DBD Aimbot в undetected пакете для Dead by Daylight на Windows PC. Soft aim Dead by Daylight.",
					imageAlt: "Dead by Daylight soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Dead by Daylight",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "Купить DBD Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "Soft aim Dead by Daylight",
							paragraphs: [
								"DBD Cheats объединяет ESP wallhack, radar hack и DBD Aimbot в undetected пакете для Dead by Daylight на Windows PC. плавные настройки soft aim для Windows PC.",
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
								"support@dbdcheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Лучшие читы Dead by Daylight | Чеклист покупателя",
					description: "Лучшие читы Dead by Daylight: что сравнить перед покупкой dbd cheats. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Лучшие читы Dead by Daylight",
					intro: "DBD Cheats объединяет ESP wallhack, radar hack и DBD Aimbot в undetected пакете для Dead by Daylight на Windows PC. Лучшие читы Dead by Daylight.",
					imageAlt: "DBD Cheats overview for Dead by Daylight on PC",
					galleryTitle: "Лучшие читы Dead by Daylight",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "Купить DBD Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Лучшие читы Dead by Daylight",
							paragraphs: [
								"DBD Cheats объединяет ESP wallhack, radar hack и DBD Aimbot в undetected пакете для Dead by Daylight на Windows PC. что сравнить перед покупкой dbd cheats.",
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
								"support@dbdcheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Хак aimbot Dead by Daylight | Soft aim ассист",
					description: "Хак aimbot Dead by Daylight: undetected Aimbot hack assist для Dead by Daylight. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Хак aimbot Dead by Daylight",
					intro: "DBD Cheats объединяет ESP wallhack, radar hack и DBD Aimbot в undetected пакете для Dead by Daylight на Windows PC. Хак aimbot Dead by Daylight.",
					imageAlt: "DBD Aimbot hack controls and bone priority",
					galleryTitle: "Хак aimbot Dead by Daylight",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "Купить DBD Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "Хак aimbot Dead by Daylight",
							paragraphs: [
								"DBD Cheats объединяет ESP wallhack, radar hack и DBD Aimbot в undetected пакете для Dead by Daylight на Windows PC. undetected Aimbot hack assist для Dead by Daylight.",
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
								"support@dbdcheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Хак ESP Dead by Daylight | Боксы и лут",
					description: "Хак ESP Dead by Daylight: ESP hack боксы, pins туш и дистанция. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Хак ESP Dead by Daylight",
					intro: "DBD Cheats объединяет ESP wallhack, radar hack и DBD Aimbot в undetected пакете для Dead by Daylight на Windows PC. Хак ESP Dead by Daylight.",
					imageAlt: "DBD ESP hack boxes and generator markers",
					galleryTitle: "Хак ESP Dead by Daylight",
					heroImage: "/images/dbd-cheats-wallhack.webp",
					ctaPrimary: "Купить DBD Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Хак ESP Dead by Daylight",
							paragraphs: [
								"DBD Cheats объединяет ESP wallhack, radar hack и DBD Aimbot в undetected пакете для Dead by Daylight на Windows PC. ESP hack боксы, pins туш и дистанция.",
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
								"support@dbdcheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Dead by Daylight | Что это значит",
					description: "Unlock all Dead by Daylight: поиски unlock-all vs настоящие ESP и Aimbot инструменты. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Unlock all Dead by Daylight",
					intro: "DBD Cheats объединяет ESP wallhack, radar hack и DBD Aimbot в undetected пакете для Dead by Daylight на Windows PC. Unlock all Dead by Daylight.",
					imageAlt: "DBD Cheats license features overview",
					galleryTitle: "Unlock all Dead by Daylight",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "Купить DBD Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Dead by Daylight",
							paragraphs: [
								"DBD Cheats объединяет ESP wallhack, radar hack и DBD Aimbot в undetected пакете для Dead by Daylight на Windows PC. поиски unlock-all vs настоящие ESP и Aimbot инструменты.",
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
								"support@dbdcheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				privacy: {
					title: "Политика конфиденциальности | DBD Cheats",
					description: "Политика конфиденциальности для DBD Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Политика конфиденциальности",
					intro: "DBD Cheats объединяет ESP wallhack, radar hack и DBD Aimbot в undetected пакете для Dead by Daylight на Windows PC. Политика конфиденциальности для dbdcheats.org и лицензий Dead by Daylight.",
					imageAlt: "DBD Cheats",
					galleryTitle: "DBD Cheats",
					heroImage: "/images/dbd-cheats-aimbot.webp",
					ctaPrimary: "Написать в поддержку",
					ctaSecondary: "Читать условия",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Информация, которую мы собираем",
							paragraphs: [
								"DBD Cheats объединяет ESP wallhack, radar hack и DBD Aimbot в undetected пакете для Dead by Daylight на Windows PC. Контактный email, ссылки на заказы Zadeyo и базовые данные безопасности сайта.",
								"Платёжные данные обрабатываются через checkout Zadeyo — не хранятся на dbdcheats.org.",
							],
						},
						{
							h2: "Как мы используем данные",
							paragraphs: [
								"DBD Cheats объединяет ESP wallhack, radar hack и DBD Aimbot в undetected пакете для Dead by Daylight на Windows PC. Ответы поддержки, решение заказов и соблюдение законодательства при необходимости.",
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
							],
						},
						{
							h2: "Ваши права",
							paragraphs: [
								"support@dbdcheats.org для поддержки и юридических вопросов.",
								"Email: support@dbdcheats.org",
							],
						},
					],
				},
				refund: {
					title: "Политика возврата | DBD Cheats",
					description: "Политика возврата для DBD Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Политика возврата",
					intro: "DBD Cheats объединяет ESP wallhack, radar hack и DBD Aimbot в undetected пакете для Dead by Daylight на Windows PC. Политика возврата для dbdcheats.org и лицензий Dead by Daylight.",
					imageAlt: "DBD Cheats",
					galleryTitle: "DBD Cheats",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "Написать в поддержку",
					ctaSecondary: "Читать политику конфиденциальности",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Цифровая доставка",
							paragraphs: [
								"DBD Cheats объединяет ESP wallhack, radar hack и DBD Aimbot в undetected пакете для Dead by Daylight на Windows PC. Контактный email, ссылки на заказы Zadeyo и базовые данные безопасности сайта.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "Одобрение возврата",
							paragraphs: [
								"DBD Cheats объединяет ESP wallhack, radar hack и DBD Aimbot в undetected пакете для Dead by Daylight на Windows PC. Ответы поддержки, решение заказов и соблюдение законодательства при необходимости.",
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
							],
						},
						{
							h2: "Как запросить",
							paragraphs: [
								"support@dbdcheats.org для поддержки и юридических вопросов.",
								"Email: support@dbdcheats.org",
							],
						},
					],
				},
				terms: {
					title: "Условия использования | DBD Cheats",
					description: "Условия использования для DBD Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Условия использования",
					intro: "DBD Cheats объединяет ESP wallhack, radar hack и DBD Aimbot в undetected пакете для Dead by Daylight на Windows PC. Условия использования для dbdcheats.org и лицензий Dead by Daylight.",
					imageAlt: "DBD Cheats",
					galleryTitle: "DBD Cheats",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "Написать в поддержку",
					ctaSecondary: "Читать политику конфиденциальности",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Принятие условий",
							paragraphs: [
								"DBD Cheats объединяет ESP wallhack, radar hack и DBD Aimbot в undetected пакете для Dead by Daylight на Windows PC. Контактный email, ссылки на заказы Zadeyo и базовые данные безопасности сайта.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "Предупреждение о рисках",
							paragraphs: [
								"DBD Cheats объединяет ESP wallhack, radar hack и DBD Aimbot в undetected пакете для Dead by Daylight на Windows PC. Ответы поддержки, решение заказов и соблюдение законодательства при необходимости.",
								"Использование читов может нарушать условия команды Dead by Daylight — вы принимаете на себя риск бана.",
							],
						},
						{
							h2: "Изменения политики",
							paragraphs: [
								"support@dbdcheats.org для поддержки и юридических вопросов.",
								"Email: support@dbdcheats.org",
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
					accent: "Undetected Dead by Daylight hileleri",
					accentShort: "DBD Cheats",
					subtitle: "Dead by Daylight Windows PC için ESP wallhack, radar hack ve Aimbot — Easy Anti-Cheat bakımı dahil.",
					subtitleShort: "Dead by Daylight PC için ESP, radar ve Aimbot",
					buyNow: "Satın al",
					seeFeatures: "Özellikleri gör",
				},
				trust: {
					status: "Çevrimiçi",
					statusNote: "DBD Cheats paketi Dead by Daylight Windows PC için aktif.",
					statusShort: "Aktif",
					delivery: "Anında dijital teslimat",
					platform: "Windows 10 ve 11",
					antiCheat: "Easy Anti-Cheat bakım desteği",
					antiCheatShort: "Easy Anti-Cheat destek",
				},
				product: {
					title: "DBD Cheats",
					addToCart: "Sepete ekle",
					monthly: "Aylık",
					lifetime: "Ömür boyu",
					available: "Şimdi mevcut",
					gameBadge: "Dead by Daylight",
					platformBadge: "Windows PC",
					statusBadge: "Undetected paket",
				},
				reviews: {
					title: "Oyuncular ne diyor",
					subtitle: "DBD Cheats alıcılarından son geri bildirimler",
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
					tagline: "Dead by Daylight için undetected ESP, wallhack, radar ve Aimbot — Zadeyo checkout.",
				},
				images: {
					hero: "DBD Cheats hero — ESP and aimbot overlay in Dead by Daylight",
					espWallhack: "Wallhack outlines showing survivors and killers through walls",
					aimbotCombat: "Soft aim assist overlay during a Dead by Daylight trial",
					teamFight: "DBD Cheats combat overlay during a team chase",
					playerEsp: "Player ESP boxes and distance readouts in a Dead by Daylight trial",
					headerArt: "Aimbot view and bone priority controls for Dead by Daylight",
					hacksPackage: "2D radar threat overlay for Dead by Daylight",
					chaseFight: "Aimbot assist during a Dead by Daylight chase",
					battleRoyale: "DBD Cheats in-trial overview for Windows PC",
					trialMap: "ESP markers for generators and hooks in Dead by Daylight",
				},
			},
			pages: {
				home: {
					title: "DBD Cheats 2026 | ESP, Wallhack ve Aimbot",
					description: "Dead by Daylight için undetected hileler. ESP wallhack, radar hack ve Aimbot — Easy Anti-Cheat bakımı. Anında dijital teslimat.",
					h1: "DBD Cheats — Undetected ESP, Wallhack ve Aimbot",
					intro: "Dead by Daylight Windows PC undetected paketi: ESP wallhack, radar ve Aimbot — Easy Anti-Cheat bakımı dahil.",
					imageAlt: "DBD ESP player tags hack",
					galleryTitle: "DBD Cheats galeri — ESP, Aimbot ve wallhack",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "DBD Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026'da neden DBD Cheats",
							paragraphs: [
								"DBD Cheats, Dead by Daylight için Windows PC üzerinde ESP wallhack, radar hack ve DBD Aimbot undetected paket sunar. BR ve chase'da düşman team okumak için ideal.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "ESP wallhack, radar ve Aimbot tek lisans",
							paragraphs: [
								"DBD Cheats, Dead by Daylight için Windows PC üzerinde ESP wallhack, radar hack ve DBD Aimbot undetected paket sunar. Ayrı araçlar yerine tek lisans.",
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
							],
						},
					],
				},
				"dbd-esp": {
					title: "DBD ESP | Player Boxes & Wallhack",
					description: "DBD ESP: oyuncu kutuları, leş işaretleri ve wallhack overlay'leri. anında dijital teslimat. undetected — Windows PC.",
					h1: "DBD ESP",
					intro: "DBD Cheats, Dead by Daylight için Windows PC üzerinde ESP wallhack, radar hack ve DBD Aimbot undetected paket sunar. DBD ESP.",
					imageAlt: "DBD ESP player boxes and distance readouts in a trial",
					galleryTitle: "DBD ESP",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "DBD Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "DBD ESP",
							paragraphs: [
								"DBD Cheats, Dead by Daylight için Windows PC üzerinde ESP wallhack, radar hack ve DBD Aimbot undetected paket sunar. oyuncu kutuları, leş işaretleri ve wallhack overlay'leri.",
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
								"Destek ve yasal sorular için support@dbdcheats.org.",
							],
						},
					],
				},
				"dbd-aimbot": {
					title: "DBD Aimbot | Soft Aim Controls",
					description: "DBD Aimbot: soft aim, FOV ve türe özel Aimbot profilleri. anında dijital teslimat. undetected — Windows PC.",
					h1: "DBD Aimbot",
					intro: "DBD Cheats, Dead by Daylight için Windows PC üzerinde ESP wallhack, radar hack ve DBD Aimbot undetected paket sunar. DBD Aimbot.",
					imageAlt: "DBD Aimbot and soft aim controls on Windows PC",
					galleryTitle: "DBD Aimbot",
					heroImage: "/images/dbd-cheats-aimbot.webp",
					ctaPrimary: "DBD Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "DBD Aimbot",
							paragraphs: [
								"DBD Cheats, Dead by Daylight için Windows PC üzerinde ESP wallhack, radar hack ve DBD Aimbot undetected paket sunar. soft aim, FOV ve türe özel Aimbot profilleri.",
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
								"Destek ve yasal sorular için support@dbdcheats.org.",
							],
						},
					],
				},
				features: {
					title: "Özellikler | Full Feature List",
					description: "Özellikler: ESP, soft aim, radar kontrolleri. anında dijital teslimat. undetected — Windows PC.",
					h1: "Özellikler",
					intro: "DBD Cheats, Dead by Daylight için Windows PC üzerinde ESP wallhack, radar hack ve DBD Aimbot undetected paket sunar. Özellikler.",
					imageAlt: "DBD Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Özellikler",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "DBD Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Özellikler",
							paragraphs: [
								"DBD Cheats, Dead by Daylight için Windows PC üzerinde ESP wallhack, radar hack ve DBD Aimbot undetected paket sunar. ESP, soft aim, radar kontrolleri.",
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
								"Destek ve yasal sorular için support@dbdcheats.org.",
							],
						},
					],
				},
				pricing: {
					title: "Fiyatlar | Monthly & Lifetime",
					description: "Fiyatlar: aylık $35 veya lifetime $150 lisanslar. anında dijital teslimat. undetected — Windows PC.",
					h1: "Fiyatlar",
					intro: "DBD Cheats, Dead by Daylight için Windows PC üzerinde ESP wallhack, radar hack ve DBD Aimbot undetected paket sunar. Fiyatlar.",
					imageAlt: "DBD Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Fiyatlar",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "DBD Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Fiyatlar",
							paragraphs: [
								"DBD Cheats, Dead by Daylight için Windows PC üzerinde ESP wallhack, radar hack ve DBD Aimbot undetected paket sunar. aylık $35 veya lifetime $150 lisanslar.",
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
								"Destek ve yasal sorular için support@dbdcheats.org.",
							],
						},
					],
				},
				setup: {
					title: "Kurulum | PC Setup Guide",
					description: "Kurulum: Windows PC aktivasyonu ve ilk açılış kurulumu. anında dijital teslimat. undetected — Windows PC.",
					h1: "Kurulum",
					intro: "DBD Cheats, Dead by Daylight için Windows PC üzerinde ESP wallhack, radar hack ve DBD Aimbot undetected paket sunar. Kurulum.",
					imageAlt: "DBD Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Kurulum",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "DBD Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Kurulum",
							paragraphs: [
								"DBD Cheats, Dead by Daylight için Windows PC üzerinde ESP wallhack, radar hack ve DBD Aimbot undetected paket sunar. Windows PC aktivasyonu ve ilk açılış kurulumu.",
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
								"Destek ve yasal sorular için support@dbdcheats.org.",
							],
						},
					],
				},
				updates: {
					title: "Güncellemeler | Easy Anti-Cheat Maintenance Log",
					description: "Güncellemeler: Easy Anti-Cheat yama durumu ve rebuild notları. anında dijital teslimat. undetected — Windows PC.",
					h1: "Güncellemeler",
					intro: "DBD Cheats, Dead by Daylight için Windows PC üzerinde ESP wallhack, radar hack ve DBD Aimbot undetected paket sunar. Güncellemeler.",
					imageAlt: "DBD Cheats live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Güncellemeler",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "DBD Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "Güncellemeler",
							paragraphs: [
								"DBD Cheats, Dead by Daylight için Windows PC üzerinde ESP wallhack, radar hack ve DBD Aimbot undetected paket sunar. Easy Anti-Cheat yama durumu ve rebuild notları.",
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
								"Destek ve yasal sorular için support@dbdcheats.org.",
							],
						},
					],
				},
				faq: {
					title: "SSS | Common Answers",
					description: "SSS: ESP, soft aim, teslimat ve Easy Anti-Cheat soruları. anında dijital teslimat. undetected — Windows PC.",
					h1: "SSS",
					intro: "DBD Cheats, Dead by Daylight için Windows PC üzerinde ESP wallhack, radar hack ve DBD Aimbot undetected paket sunar. SSS.",
					imageAlt: "DBD Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "SSS",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "DBD Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "SSS",
							paragraphs: [
								"DBD Cheats, Dead by Daylight için Windows PC üzerinde ESP wallhack, radar hack ve DBD Aimbot undetected paket sunar. ESP, soft aim, teslimat ve Easy Anti-Cheat soruları.",
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
								"Destek ve yasal sorular için support@dbdcheats.org.",
							],
						},
					],
				},
				support: {
					title: "Destek | Help & Contact",
					description: "Destek: sipariş yardımı ve lisans destek iletişimi. anında dijital teslimat. undetected — Windows PC.",
					h1: "Destek",
					intro: "DBD Cheats, Dead by Daylight için Windows PC üzerinde ESP wallhack, radar hack ve DBD Aimbot undetected paket sunar. Destek.",
					imageAlt: "DBD Cheats support page for license and setup help",
					galleryTitle: "Destek",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "DBD Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Destek",
							paragraphs: [
								"DBD Cheats, Dead by Daylight için Windows PC üzerinde ESP wallhack, radar hack ve DBD Aimbot undetected paket sunar. sipariş yardımı ve lisans destek iletişimi.",
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
								"Destek ve yasal sorular için support@dbdcheats.org.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected hileler | Easy Anti-Cheat Safe Status",
					description: "Undetected hileler: Easy Anti-Cheat yamalarından sonra undetected bakım. anında dijital teslimat. undetected — Windows PC.",
					h1: "Undetected hileler",
					intro: "DBD Cheats, Dead by Daylight için Windows PC üzerinde ESP wallhack, radar hack ve DBD Aimbot undetected paket sunar. Undetected hileler.",
					imageAlt: "DBD Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected hileler",
					heroImage: "/images/dbd-cheats-wallhack.webp",
					ctaPrimary: "DBD Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "Undetected hileler",
							paragraphs: [
								"DBD Cheats, Dead by Daylight için Windows PC üzerinde ESP wallhack, radar hack ve DBD Aimbot undetected paket sunar. Easy Anti-Cheat yamalarından sonra undetected bakım.",
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
								"Destek ve yasal sorular için support@dbdcheats.org.",
							],
						},
					],
				},
				wallhack: {
					title: "Dead by Daylight Wallhack | ESP Visibility",
					description: "Dead by Daylight Wallhack: oyuncular, leşler ve mesafe için wallhack ESP. anında dijital teslimat. undetected — Windows PC.",
					h1: "Dead by Daylight Wallhack",
					intro: "DBD Cheats, Dead by Daylight için Windows PC üzerinde ESP wallhack, radar hack ve DBD Aimbot undetected paket sunar. Dead by Daylight Wallhack.",
					imageAlt: "dbd wallhack visibility through walls in a trial",
					galleryTitle: "Dead by Daylight Wallhack",
					heroImage: "/images/dbd-cheats-wallhack.webp",
					ctaPrimary: "DBD Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Dead by Daylight Wallhack",
							paragraphs: [
								"DBD Cheats, Dead by Daylight için Windows PC üzerinde ESP wallhack, radar hack ve DBD Aimbot undetected paket sunar. oyuncular, leşler ve mesafe için wallhack ESP.",
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
								"Destek ve yasal sorular için support@dbdcheats.org.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: flank ve rotasyonlar için 2D radar ipuçları. anında dijital teslimat. undetected — Windows PC.",
					h1: "Radar hack",
					intro: "DBD Cheats, Dead by Daylight için Windows PC üzerinde ESP wallhack, radar hack ve DBD Aimbot undetected paket sunar. Radar hack.",
					imageAlt: "Dead by Daylight 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "DBD Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"DBD Cheats, Dead by Daylight için Windows PC üzerinde ESP wallhack, radar hack ve DBD Aimbot undetected paket sunar. flank ve rotasyonlar için 2D radar ipuçları.",
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
								"Destek ve yasal sorular için support@dbdcheats.org.",
							],
						},
					],
				},
				eac: {
					title: "Easy Anti-Cheat bypass | Patch Maintenance",
					description: "Easy Anti-Cheat bypass: Dead by Daylight hacks için Easy Anti-Cheat güncellemelerinin nasıl yönetildiği. anında dijital teslimat. undetected — Windows PC.",
					h1: "Easy Anti-Cheat bypass",
					intro: "DBD Cheats, Dead by Daylight için Windows PC üzerinde ESP wallhack, radar hack ve DBD Aimbot undetected paket sunar. Easy Anti-Cheat bypass.",
					imageAlt: "DBD Cheats maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Easy Anti-Cheat bypass",
					heroImage: "/images/dbd-cheats-aimbot.webp",
					ctaPrimary: "DBD Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Easy Anti-Cheat bypass",
							paragraphs: [
								"DBD Cheats, Dead by Daylight için Windows PC üzerinde ESP wallhack, radar hack ve DBD Aimbot undetected paket sunar. Dead by Daylight hacks için Easy Anti-Cheat güncellemelerinin nasıl yönetildiği.",
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
								"Destek ve yasal sorular için support@dbdcheats.org.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Dead by Daylight Hileleri 2026 | Buyer Guide",
					description: "Dead by Daylight Hileleri 2026: checkout öncesi 2026 dbd cheats kontrol listesi. anında dijital teslimat. undetected — Windows PC.",
					h1: "Dead by Daylight Hileleri 2026",
					intro: "DBD Cheats, Dead by Daylight için Windows PC üzerinde ESP wallhack, radar hack ve DBD Aimbot undetected paket sunar. Dead by Daylight Hileleri 2026.",
					imageAlt: "DBD Cheats product overview for Dead by Daylight",
					galleryTitle: "Dead by Daylight Hileleri 2026",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "DBD Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "Dead by Daylight Hileleri 2026",
							paragraphs: [
								"DBD Cheats, Dead by Daylight için Windows PC üzerinde ESP wallhack, radar hack ve DBD Aimbot undetected paket sunar. checkout öncesi 2026 dbd cheats kontrol listesi.",
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
								"Destek ve yasal sorular için support@dbdcheats.org.",
							],
						},
					],
				},
				hacks: {
					title: "Dead by Daylight Hileleri | ESP Aimbot Guide",
					description: "Dead by Daylight Hileleri: ESP ve Aimbot için DBD Cheats sütunu. anında dijital teslimat. undetected — Windows PC.",
					h1: "Dead by Daylight Hileleri",
					intro: "DBD Cheats, Dead by Daylight için Windows PC üzerinde ESP wallhack, radar hack ve DBD Aimbot undetected paket sunar. Dead by Daylight Hileleri.",
					imageAlt: "DBD Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Dead by Daylight Hileleri",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "DBD Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Dead by Daylight Hileleri",
							paragraphs: [
								"DBD Cheats, Dead by Daylight için Windows PC üzerinde ESP wallhack, radar hack ve DBD Aimbot undetected paket sunar. ESP ve Aimbot için DBD Cheats sütunu.",
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
								"Destek ve yasal sorular için support@dbdcheats.org.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Dead by Daylight Hile İndir | Instant Access",
					description: "Dead by Daylight Hile İndir: ödeme sonrası dijital lisans indirme. anında dijital teslimat. undetected — Windows PC.",
					h1: "Dead by Daylight Hile İndir",
					intro: "DBD Cheats, Dead by Daylight için Windows PC üzerinde ESP wallhack, radar hack ve DBD Aimbot undetected paket sunar. Dead by Daylight Hile İndir.",
					imageAlt: "DBD Cheats download and install delivery flow",
					galleryTitle: "Dead by Daylight Hile İndir",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "DBD Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Dead by Daylight Hile İndir",
							paragraphs: [
								"DBD Cheats, Dead by Daylight için Windows PC üzerinde ESP wallhack, radar hack ve DBD Aimbot undetected paket sunar. ödeme sonrası dijital lisans indirme.",
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
								"Destek ve yasal sorular için support@dbdcheats.org.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Dead by Daylight Mod Menü | In-Game Toggles",
					description: "Dead by Daylight Mod Menü: istemci içi ESP ve soft aim toggle'ları. anında dijital teslimat. undetected — Windows PC.",
					h1: "Dead by Daylight Mod Menü",
					intro: "DBD Cheats, Dead by Daylight için Windows PC üzerinde ESP wallhack, radar hack ve DBD Aimbot undetected paket sunar. Dead by Daylight Mod Menü.",
					imageAlt: "DBD Cheats in-game menu controls",
					galleryTitle: "Dead by Daylight Mod Menü",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "DBD Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Dead by Daylight Mod Menü",
							paragraphs: [
								"DBD Cheats, Dead by Daylight için Windows PC üzerinde ESP wallhack, radar hack ve DBD Aimbot undetected paket sunar. istemci içi ESP ve soft aim toggle'ları.",
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
								"Destek ve yasal sorular için support@dbdcheats.org.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Dead by Daylight Soft Aim | Smooth Aim Settings",
					description: "Dead by Daylight Soft Aim: Windows PC için akıcı soft aim ayarları. anında dijital teslimat. undetected — Windows PC.",
					h1: "Dead by Daylight Soft Aim",
					intro: "DBD Cheats, Dead by Daylight için Windows PC üzerinde ESP wallhack, radar hack ve DBD Aimbot undetected paket sunar. Dead by Daylight Soft Aim.",
					imageAlt: "Dead by Daylight soft aim FOV and smoothness settings",
					galleryTitle: "Dead by Daylight Soft Aim",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "DBD Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "Dead by Daylight Soft Aim",
							paragraphs: [
								"DBD Cheats, Dead by Daylight için Windows PC üzerinde ESP wallhack, radar hack ve DBD Aimbot undetected paket sunar. Windows PC için akıcı soft aim ayarları.",
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
								"Destek ve yasal sorular için support@dbdcheats.org.",
							],
						},
					],
				},
				"best-cheats": {
					title: "En İyi Dead by Daylight Hileleri | Buyer Checklist",
					description: "En İyi Dead by Daylight Hileleri: dbd cheats satın almadan önce ne karşılaştırılmalı. anında dijital teslimat. undetected — Windows PC.",
					h1: "En İyi Dead by Daylight Hileleri",
					intro: "DBD Cheats, Dead by Daylight için Windows PC üzerinde ESP wallhack, radar hack ve DBD Aimbot undetected paket sunar. En İyi Dead by Daylight Hileleri.",
					imageAlt: "DBD Cheats overview for Dead by Daylight on PC",
					galleryTitle: "En İyi Dead by Daylight Hileleri",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "DBD Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "En İyi Dead by Daylight Hileleri",
							paragraphs: [
								"DBD Cheats, Dead by Daylight için Windows PC üzerinde ESP wallhack, radar hack ve DBD Aimbot undetected paket sunar. dbd cheats satın almadan önce ne karşılaştırılmalı.",
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
								"Destek ve yasal sorular için support@dbdcheats.org.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "DBD Aimbot Hilesi | Soft Aim Assist",
					description: "DBD Aimbot Hilesi: Dead by Daylight için undetected Aimbot hack assist. anında dijital teslimat. undetected — Windows PC.",
					h1: "DBD Aimbot Hilesi",
					intro: "DBD Cheats, Dead by Daylight için Windows PC üzerinde ESP wallhack, radar hack ve DBD Aimbot undetected paket sunar. DBD Aimbot Hilesi.",
					imageAlt: "DBD Aimbot hack controls and bone priority",
					galleryTitle: "DBD Aimbot Hilesi",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "DBD Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "DBD Aimbot Hilesi",
							paragraphs: [
								"DBD Cheats, Dead by Daylight için Windows PC üzerinde ESP wallhack, radar hack ve DBD Aimbot undetected paket sunar. Dead by Daylight için undetected Aimbot hack assist.",
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
								"Destek ve yasal sorular için support@dbdcheats.org.",
							],
						},
					],
				},
				"esp-hack": {
					title: "DBD ESP Hilesi | Boxes & Loot",
					description: "DBD ESP Hilesi: ESP hack kutuları, leş pinleri ve mesafe. anında dijital teslimat. undetected — Windows PC.",
					h1: "DBD ESP Hilesi",
					intro: "DBD Cheats, Dead by Daylight için Windows PC üzerinde ESP wallhack, radar hack ve DBD Aimbot undetected paket sunar. DBD ESP Hilesi.",
					imageAlt: "DBD ESP hack boxes and generator markers",
					galleryTitle: "DBD ESP Hilesi",
					heroImage: "/images/dbd-cheats-wallhack.webp",
					ctaPrimary: "DBD Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "DBD ESP Hilesi",
							paragraphs: [
								"DBD Cheats, Dead by Daylight için Windows PC üzerinde ESP wallhack, radar hack ve DBD Aimbot undetected paket sunar. ESP hack kutuları, leş pinleri ve mesafe.",
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
								"Destek ve yasal sorular için support@dbdcheats.org.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Dead by Daylight Unlock All | What It Means",
					description: "Dead by Daylight Unlock All: unlock-all aramaları vs gerçek ESP ve Aimbot araçları. anında dijital teslimat. undetected — Windows PC.",
					h1: "Dead by Daylight Unlock All",
					intro: "DBD Cheats, Dead by Daylight için Windows PC üzerinde ESP wallhack, radar hack ve DBD Aimbot undetected paket sunar. Dead by Daylight Unlock All.",
					imageAlt: "DBD Cheats license features overview",
					galleryTitle: "Dead by Daylight Unlock All",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "DBD Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Dead by Daylight Unlock All",
							paragraphs: [
								"DBD Cheats, Dead by Daylight için Windows PC üzerinde ESP wallhack, radar hack ve DBD Aimbot undetected paket sunar. unlock-all aramaları vs gerçek ESP ve Aimbot araçları.",
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
								"Destek ve yasal sorular için support@dbdcheats.org.",
							],
						},
					],
				},
				privacy: {
					title: "Gizlilik politikası | DBD Cheats",
					description: "Gizlilik politikası DBD Cheats — ESP wallhack, Aimbot için, Windows PC.",
					h1: "Gizlilik politikası",
					intro: "DBD Cheats, Dead by Daylight için Windows PC üzerinde ESP wallhack, radar hack ve DBD Aimbot undetected paket sunar. Gizlilik politikası dbdcheats.org ve Dead by Daylight lisansları için.",
					imageAlt: "DBD Cheats",
					galleryTitle: "DBD Cheats",
					heroImage: "/images/dbd-cheats-aimbot.webp",
					ctaPrimary: "Destek e-postası",
					ctaSecondary: "Şartları oku",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Topladığımız bilgiler",
							paragraphs: [
								"DBD Cheats, Dead by Daylight için Windows PC üzerinde ESP wallhack, radar hack ve DBD Aimbot undetected paket sunar. İletişim e-postası, Zadeyo sipariş referansları ve temel site güvenlik verileri.",
								"Ödeme bilgileri Zadeyo checkout ile işlenir — dbdcheats.org'da saklanmaz.",
							],
						},
						{
							h2: "Verileri nasıl kullanıyoruz",
							paragraphs: [
								"DBD Cheats, Dead by Daylight için Windows PC üzerinde ESP wallhack, radar hack ve DBD Aimbot undetected paket sunar. Destek yanıtları, sipariş çözümü ve gerektiğinde yasal uyum.",
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
							],
						},
						{
							h2: "Haklarınız",
							paragraphs: [
								"Destek ve yasal sorular için support@dbdcheats.org.",
								"E-posta: support@dbdcheats.org",
							],
						},
					],
				},
				refund: {
					title: "İade politikası | DBD Cheats",
					description: "İade politikası DBD Cheats — ESP wallhack, Aimbot için, Windows PC.",
					h1: "İade politikası",
					intro: "DBD Cheats, Dead by Daylight için Windows PC üzerinde ESP wallhack, radar hack ve DBD Aimbot undetected paket sunar. İade politikası dbdcheats.org ve Dead by Daylight lisansları için.",
					imageAlt: "DBD Cheats",
					galleryTitle: "DBD Cheats",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "Destek e-postası",
					ctaSecondary: "Gizliliği oku",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Dijital teslimat",
							paragraphs: [
								"DBD Cheats, Dead by Daylight için Windows PC üzerinde ESP wallhack, radar hack ve DBD Aimbot undetected paket sunar. İletişim e-postası, Zadeyo sipariş referansları ve temel site güvenlik verileri.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "İade onayı",
							paragraphs: [
								"DBD Cheats, Dead by Daylight için Windows PC üzerinde ESP wallhack, radar hack ve DBD Aimbot undetected paket sunar. Destek yanıtları, sipariş çözümü ve gerektiğinde yasal uyum.",
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
							],
						},
						{
							h2: "Nasıl talep edilir",
							paragraphs: [
								"Destek ve yasal sorular için support@dbdcheats.org.",
								"E-posta: support@dbdcheats.org",
							],
						},
					],
				},
				terms: {
					title: "Kullanım şartları | DBD Cheats",
					description: "Kullanım şartları DBD Cheats — ESP wallhack, Aimbot için, Windows PC.",
					h1: "Kullanım şartları",
					intro: "DBD Cheats, Dead by Daylight için Windows PC üzerinde ESP wallhack, radar hack ve DBD Aimbot undetected paket sunar. Kullanım şartları dbdcheats.org ve Dead by Daylight lisansları için.",
					imageAlt: "DBD Cheats",
					galleryTitle: "DBD Cheats",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "Destek e-postası",
					ctaSecondary: "Gizliliği oku",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Şartların kabulü",
							paragraphs: [
								"DBD Cheats, Dead by Daylight için Windows PC üzerinde ESP wallhack, radar hack ve DBD Aimbot undetected paket sunar. İletişim e-postası, Zadeyo sipariş referansları ve temel site güvenlik verileri.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "Risk uyarısı",
							paragraphs: [
								"DBD Cheats, Dead by Daylight için Windows PC üzerinde ESP wallhack, radar hack ve DBD Aimbot undetected paket sunar. Destek yanıtları, sipariş çözümü ve gerektiğinde yasal uyum.",
								"Hile kullanmak Dead by Daylight ekibi şartlarını ihlal edebilir — tüm ban riskini üstlenirsiniz.",
							],
						},
						{
							h2: "Politika değişiklikleri",
							paragraphs: [
								"Destek ve yasal sorular için support@dbdcheats.org.",
								"E-posta: support@dbdcheats.org",
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
					accent: "غش Dead by Daylight غير مكتشف",
					accentShort: "DBD Cheats",
					subtitle: "ESP wallhack ورadar hack وAimbot لـ Dead by Daylight على Windows PC — صيانة Easy Anti-Cheat مشمولة.",
					subtitleShort: "ESP ورadar وAimbot لـ Dead by Daylight PC",
					buyNow: "اشترِ الآن",
					seeFeatures: "عرض الميزات",
				},
				trust: {
					status: "متصل",
					statusNote: "حزمة DBD Cheats نشطة لـ Dead by Daylight على Windows PC.",
					statusShort: "نشط",
					delivery: "تسليم رقمي فوري",
					platform: "Windows 10 و11",
					antiCheat: "دعم صيانة Easy Anti-Cheat",
					antiCheatShort: "دعم Easy Anti-Cheat",
				},
				product: {
					title: "DBD Cheats",
					addToCart: "أضف إلى السلة",
					monthly: "شهري",
					lifetime: "مدى الحياة",
					available: "متوفر الآن",
					gameBadge: "Dead by Daylight",
					platformBadge: "Windows PC",
					statusBadge: "حزمة غير مكتشفة",
				},
				reviews: {
					title: "ماذا يقول اللاعبون",
					subtitle: "آراء حديثة من مشتري DBD Cheats",
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
					tagline: "ESP وwallhack ورadar وAimbot غير مكتشف لـ Dead by Daylight — الدفع عبر Zadeyo.",
				},
				images: {
					hero: "DBD Cheats hero — ESP and aimbot overlay in Dead by Daylight",
					espWallhack: "Wallhack outlines showing survivors and killers through walls",
					aimbotCombat: "Soft aim assist overlay during a Dead by Daylight trial",
					teamFight: "DBD Cheats combat overlay during a team chase",
					playerEsp: "Player ESP boxes and distance readouts in a Dead by Daylight trial",
					headerArt: "Aimbot view and bone priority controls for Dead by Daylight",
					hacksPackage: "2D radar threat overlay for Dead by Daylight",
					chaseFight: "Aimbot assist during a Dead by Daylight chase",
					battleRoyale: "DBD Cheats in-trial overview for Windows PC",
					trialMap: "ESP markers for generators and hooks in Dead by Daylight",
				},
			},
			pages: {
				home: {
					title: "DBD Cheats 2026 | ESP وWallhack وAimbot",
					description: "غش Dead by Daylight undetected لـ Dead by Daylight على PC. ESP wallhack ورadar hack وAimbot مع صيانة Easy Anti-Cheat. تسليم رقمي فوري.",
					h1: "DBD Cheats — ESP وWallhack وAimbot غير مكتشف",
					intro: "حزمة undetected لـ Dead by Daylight على Windows PC: ESP wallhack ورadar وAimbot مع صيانة Easy Anti-Cheat.",
					imageAlt: "DBD ESP player tags hack",
					galleryTitle: "معرض DBD Cheats — ESP وAimbot وwallhack",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "اشترِ DBD Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "لماذا DBD Cheats في 2026",
							paragraphs: [
								"DBD Cheats يجمع ESP wallhack وradar hack وDBD Aimbot غير مكتشف لـ Dead by Daylight على Windows PC. مثالي لقراءة فرق العدو في BR وchase.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack ورadar وAimbot في ترخيص واحد",
							paragraphs: [
								"DBD Cheats يجمع ESP wallhack وradar hack وDBD Aimbot غير مكتشف لـ Dead by Daylight على Windows PC. ترخيص واحد بدلاً من أدوات منفصلة.",
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
							],
						},
					],
				},
				"dbd-esp": {
					title: "ESP Dead by Daylight | Player Boxes & Wallhack",
					description: "ESP Dead by Daylight: صناديق اللاعبين وعلامات الجيفة وoverlays wallhack. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "ESP Dead by Daylight",
					intro: "DBD Cheats يجمع ESP wallhack وradar hack وDBD Aimbot غير مكتشف لـ Dead by Daylight على Windows PC. ESP Dead by Daylight.",
					imageAlt: "DBD ESP player boxes and distance readouts in a trial",
					galleryTitle: "ESP Dead by Daylight",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "اشترِ DBD Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "ESP Dead by Daylight",
							paragraphs: [
								"DBD Cheats يجمع ESP wallhack وradar hack وDBD Aimbot غير مكتشف لـ Dead by Daylight على Windows PC. صناديق اللاعبين وعلامات الجيفة وoverlays wallhack.",
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
								"support@dbdcheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"dbd-aimbot": {
					title: "Aimbot Dead by Daylight | Soft Aim Controls",
					description: "Aimbot Dead by Daylight: soft aim وFOV وملفات Aimbot لكل نوع. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Aimbot Dead by Daylight",
					intro: "DBD Cheats يجمع ESP wallhack وradar hack وDBD Aimbot غير مكتشف لـ Dead by Daylight على Windows PC. Aimbot Dead by Daylight.",
					imageAlt: "DBD Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Dead by Daylight",
					heroImage: "/images/dbd-cheats-aimbot.webp",
					ctaPrimary: "اشترِ DBD Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Aimbot Dead by Daylight",
							paragraphs: [
								"DBD Cheats يجمع ESP wallhack وradar hack وDBD Aimbot غير مكتشف لـ Dead by Daylight على Windows PC. soft aim وFOV وملفات Aimbot لكل نوع.",
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
								"support@dbdcheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				features: {
					title: "الميزات | Full Feature List",
					description: "الميزات: ESP وsoft aim وضوابط radar. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "الميزات",
					intro: "DBD Cheats يجمع ESP wallhack وradar hack وDBD Aimbot غير مكتشف لـ Dead by Daylight على Windows PC. الميزات.",
					imageAlt: "DBD Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "الميزات",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "اشترِ DBD Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "الميزات",
							paragraphs: [
								"DBD Cheats يجمع ESP wallhack وradar hack وDBD Aimbot غير مكتشف لـ Dead by Daylight على Windows PC. ESP وsoft aim وضوابط radar.",
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
								"support@dbdcheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				pricing: {
					title: "الأسعار | Monthly & Lifetime",
					description: "الأسعار: تراخيص $35 شهرياً أو $150 lifetime. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "الأسعار",
					intro: "DBD Cheats يجمع ESP wallhack وradar hack وDBD Aimbot غير مكتشف لـ Dead by Daylight على Windows PC. الأسعار.",
					imageAlt: "DBD Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "الأسعار",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "اشترِ DBD Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "الأسعار",
							paragraphs: [
								"DBD Cheats يجمع ESP wallhack وradar hack وDBD Aimbot غير مكتشف لـ Dead by Daylight على Windows PC. تراخيص $35 شهرياً أو $150 lifetime.",
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
								"support@dbdcheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				setup: {
					title: "التثبيت | PC Setup Guide",
					description: "التثبيت: تفعيل Windows PC وإعداد أول تشغيل. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "التثبيت",
					intro: "DBD Cheats يجمع ESP wallhack وradar hack وDBD Aimbot غير مكتشف لـ Dead by Daylight على Windows PC. التثبيت.",
					imageAlt: "DBD Cheats setup guide screenshot for Windows PC",
					galleryTitle: "التثبيت",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "اشترِ DBD Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "التثبيت",
							paragraphs: [
								"DBD Cheats يجمع ESP wallhack وradar hack وDBD Aimbot غير مكتشف لـ Dead by Daylight على Windows PC. تفعيل Windows PC وإعداد أول تشغيل.",
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
								"support@dbdcheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				updates: {
					title: "التحديثات | Easy Anti-Cheat Maintenance Log",
					description: "التحديثات: حالة patch Easy Anti-Cheat وملاحظات rebuild. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "التحديثات",
					intro: "DBD Cheats يجمع ESP wallhack وradar hack وDBD Aimbot غير مكتشف لـ Dead by Daylight على Windows PC. التحديثات.",
					imageAlt: "DBD Cheats live status after Easy Anti-Cheat and game patches",
					galleryTitle: "التحديثات",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "اشترِ DBD Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "التحديثات",
							paragraphs: [
								"DBD Cheats يجمع ESP wallhack وradar hack وDBD Aimbot غير مكتشف لـ Dead by Daylight على Windows PC. حالة patch Easy Anti-Cheat وملاحظات rebuild.",
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
								"support@dbdcheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				faq: {
					title: "الأسئلة | Common Answers",
					description: "الأسئلة: أسئلة ESP وsoft aim والتسليم وEasy Anti-Cheat. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "الأسئلة",
					intro: "DBD Cheats يجمع ESP wallhack وradar hack وDBD Aimbot غير مكتشف لـ Dead by Daylight على Windows PC. الأسئلة.",
					imageAlt: "DBD Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "الأسئلة",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "اشترِ DBD Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "الأسئلة",
							paragraphs: [
								"DBD Cheats يجمع ESP wallhack وradar hack وDBD Aimbot غير مكتشف لـ Dead by Daylight على Windows PC. أسئلة ESP وsoft aim والتسليم وEasy Anti-Cheat.",
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
								"support@dbdcheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				support: {
					title: "الدعم | Help & Contact",
					description: "الدعم: مساعدة الطلبات واتصال دعم التراخيص. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "الدعم",
					intro: "DBD Cheats يجمع ESP wallhack وradar hack وDBD Aimbot غير مكتشف لـ Dead by Daylight على Windows PC. الدعم.",
					imageAlt: "DBD Cheats support page for license and setup help",
					galleryTitle: "الدعم",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "اشترِ DBD Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "الدعم",
							paragraphs: [
								"DBD Cheats يجمع ESP wallhack وradar hack وDBD Aimbot غير مكتشف لـ Dead by Daylight على Windows PC. مساعدة الطلبات واتصال دعم التراخيص.",
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
								"support@dbdcheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				undetected: {
					title: "غش undetected | Easy Anti-Cheat Safe Status",
					description: "غش undetected: صيانة undetected بعد patch Easy Anti-Cheat. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "غش undetected",
					intro: "DBD Cheats يجمع ESP wallhack وradar hack وDBD Aimbot غير مكتشف لـ Dead by Daylight على Windows PC. غش undetected.",
					imageAlt: "DBD Cheats undetected status overview for Windows PC",
					galleryTitle: "غش undetected",
					heroImage: "/images/dbd-cheats-wallhack.webp",
					ctaPrimary: "اشترِ DBD Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "غش undetected",
							paragraphs: [
								"DBD Cheats يجمع ESP wallhack وradar hack وDBD Aimbot غير مكتشف لـ Dead by Daylight على Windows PC. صيانة undetected بعد patch Easy Anti-Cheat.",
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
								"support@dbdcheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				wallhack: {
					title: "Dead by Daylight Wallhack | ESP Visibility",
					description: "Dead by Daylight Wallhack: wallhack ESP للاعبين والجيف والمسافة. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Dead by Daylight Wallhack",
					intro: "DBD Cheats يجمع ESP wallhack وradar hack وDBD Aimbot غير مكتشف لـ Dead by Daylight على Windows PC. Dead by Daylight Wallhack.",
					imageAlt: "dbd wallhack visibility through walls in a trial",
					galleryTitle: "Dead by Daylight Wallhack",
					heroImage: "/images/dbd-cheats-wallhack.webp",
					ctaPrimary: "اشترِ DBD Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Dead by Daylight Wallhack",
							paragraphs: [
								"DBD Cheats يجمع ESP wallhack وradar hack وDBD Aimbot غير مكتشف لـ Dead by Daylight على Windows PC. wallhack ESP للاعبين والجيف والمسافة.",
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
								"support@dbdcheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: إشارات radar ثنائية الأبعاد للهجمات الجانبية والتدوير. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Radar hack",
					intro: "DBD Cheats يجمع ESP wallhack وradar hack وDBD Aimbot غير مكتشف لـ Dead by Daylight على Windows PC. Radar hack.",
					imageAlt: "Dead by Daylight 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "اشترِ DBD Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"DBD Cheats يجمع ESP wallhack وradar hack وDBD Aimbot غير مكتشف لـ Dead by Daylight على Windows PC. إشارات radar ثنائية الأبعاد للهجمات الجانبية والتدوير.",
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
								"support@dbdcheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Patch Maintenance",
					description: "Bypass Easy Anti-Cheat: كيف تُدار تحديثات Easy Anti-Cheat لـ Dead by Daylight hacks. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "DBD Cheats يجمع ESP wallhack وradar hack وDBD Aimbot غير مكتشف لـ Dead by Daylight على Windows PC. Bypass Easy Anti-Cheat.",
					imageAlt: "DBD Cheats maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/dbd-cheats-aimbot.webp",
					ctaPrimary: "اشترِ DBD Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"DBD Cheats يجمع ESP wallhack وradar hack وDBD Aimbot غير مكتشف لـ Dead by Daylight على Windows PC. كيف تُدار تحديثات Easy Anti-Cheat لـ Dead by Daylight hacks.",
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
								"support@dbdcheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "غش Dead by Daylight 2026 | Buyer Guide",
					description: "غش Dead by Daylight 2026: قائمة dbd cheats 2026 قبل checkout. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "غش Dead by Daylight 2026",
					intro: "DBD Cheats يجمع ESP wallhack وradar hack وDBD Aimbot غير مكتشف لـ Dead by Daylight على Windows PC. غش Dead by Daylight 2026.",
					imageAlt: "DBD Cheats product overview for Dead by Daylight",
					galleryTitle: "غش Dead by Daylight 2026",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "اشترِ DBD Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "غش Dead by Daylight 2026",
							paragraphs: [
								"DBD Cheats يجمع ESP wallhack وradar hack وDBD Aimbot غير مكتشف لـ Dead by Daylight على Windows PC. قائمة dbd cheats 2026 قبل checkout.",
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
								"support@dbdcheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				hacks: {
					title: "غش Dead by Daylight | ESP Aimbot Guide",
					description: "غش Dead by Daylight: ركيزة DBD Cheats لـ ESP وAimbot. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "غش Dead by Daylight",
					intro: "DBD Cheats يجمع ESP wallhack وradar hack وDBD Aimbot غير مكتشف لـ Dead by Daylight على Windows PC. غش Dead by Daylight.",
					imageAlt: "DBD Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "غش Dead by Daylight",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "اشترِ DBD Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "غش Dead by Daylight",
							paragraphs: [
								"DBD Cheats يجمع ESP wallhack وradar hack وDBD Aimbot غير مكتشف لـ Dead by Daylight على Windows PC. ركيزة DBD Cheats لـ ESP وAimbot.",
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
								"support@dbdcheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"cheat-download": {
					title: "تحميل DBD Cheats | Instant Access",
					description: "تحميل DBD Cheats: تنزيل ترخيص رقمي بعد الدفع. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "تحميل DBD Cheats",
					intro: "DBD Cheats يجمع ESP wallhack وradar hack وDBD Aimbot غير مكتشف لـ Dead by Daylight على Windows PC. تحميل DBD Cheats.",
					imageAlt: "DBD Cheats download and install delivery flow",
					galleryTitle: "تحميل DBD Cheats",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "اشترِ DBD Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "تحميل DBD Cheats",
							paragraphs: [
								"DBD Cheats يجمع ESP wallhack وradar hack وDBD Aimbot غير مكتشف لـ Dead by Daylight على Windows PC. تنزيل ترخيص رقمي بعد الدفع.",
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
								"support@dbdcheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"mod-menu": {
					title: "قائمة مود Dead by Daylight | In-Game Toggles",
					description: "قائمة مود Dead by Daylight: مفاتيح ESP وsoft aim داخل العميل. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "قائمة مود Dead by Daylight",
					intro: "DBD Cheats يجمع ESP wallhack وradar hack وDBD Aimbot غير مكتشف لـ Dead by Daylight على Windows PC. قائمة مود Dead by Daylight.",
					imageAlt: "DBD Cheats in-game menu controls",
					galleryTitle: "قائمة مود Dead by Daylight",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "اشترِ DBD Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "قائمة مود Dead by Daylight",
							paragraphs: [
								"DBD Cheats يجمع ESP wallhack وradar hack وDBD Aimbot غير مكتشف لـ Dead by Daylight على Windows PC. مفاتيح ESP وsoft aim داخل العميل.",
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
								"support@dbdcheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Dead by Daylight | Smooth Aim Settings",
					description: "Soft aim Dead by Daylight: إعدادات soft aim سلسة لـ Windows PC. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Soft aim Dead by Daylight",
					intro: "DBD Cheats يجمع ESP wallhack وradar hack وDBD Aimbot غير مكتشف لـ Dead by Daylight على Windows PC. Soft aim Dead by Daylight.",
					imageAlt: "Dead by Daylight soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Dead by Daylight",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "اشترِ DBD Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "Soft aim Dead by Daylight",
							paragraphs: [
								"DBD Cheats يجمع ESP wallhack وradar hack وDBD Aimbot غير مكتشف لـ Dead by Daylight على Windows PC. إعدادات soft aim سلسة لـ Windows PC.",
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
								"support@dbdcheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"best-cheats": {
					title: "أفضل غش Dead by Daylight | Buyer Checklist",
					description: "أفضل غش Dead by Daylight: ما يجب مقارنته قبل شراء dbd cheats. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "أفضل غش Dead by Daylight",
					intro: "DBD Cheats يجمع ESP wallhack وradar hack وDBD Aimbot غير مكتشف لـ Dead by Daylight على Windows PC. أفضل غش Dead by Daylight.",
					imageAlt: "DBD Cheats overview for Dead by Daylight on PC",
					galleryTitle: "أفضل غش Dead by Daylight",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "اشترِ DBD Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "أفضل غش Dead by Daylight",
							paragraphs: [
								"DBD Cheats يجمع ESP wallhack وradar hack وDBD Aimbot غير مكتشف لـ Dead by Daylight على Windows PC. ما يجب مقارنته قبل شراء dbd cheats.",
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
								"support@dbdcheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "هاك Aimbot Dead by Daylight | Soft Aim Assist",
					description: "هاك Aimbot Dead by Daylight: مساعدة hack Aimbot undetected لـ Dead by Daylight. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "هاك Aimbot Dead by Daylight",
					intro: "DBD Cheats يجمع ESP wallhack وradar hack وDBD Aimbot غير مكتشف لـ Dead by Daylight على Windows PC. هاك Aimbot Dead by Daylight.",
					imageAlt: "DBD Aimbot hack controls and bone priority",
					galleryTitle: "هاك Aimbot Dead by Daylight",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "اشترِ DBD Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "هاك Aimbot Dead by Daylight",
							paragraphs: [
								"DBD Cheats يجمع ESP wallhack وradar hack وDBD Aimbot غير مكتشف لـ Dead by Daylight على Windows PC. مساعدة hack Aimbot undetected لـ Dead by Daylight.",
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
								"support@dbdcheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"esp-hack": {
					title: "هاك ESP Dead by Daylight | Boxes & Loot",
					description: "هاك ESP Dead by Daylight: صناديق ESP hack وpins الجيف والمسافة. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "هاك ESP Dead by Daylight",
					intro: "DBD Cheats يجمع ESP wallhack وradar hack وDBD Aimbot غير مكتشف لـ Dead by Daylight على Windows PC. هاك ESP Dead by Daylight.",
					imageAlt: "DBD ESP hack boxes and generator markers",
					galleryTitle: "هاك ESP Dead by Daylight",
					heroImage: "/images/dbd-cheats-wallhack.webp",
					ctaPrimary: "اشترِ DBD Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "هاك ESP Dead by Daylight",
							paragraphs: [
								"DBD Cheats يجمع ESP wallhack وradar hack وDBD Aimbot غير مكتشف لـ Dead by Daylight على Windows PC. صناديق ESP hack وpins الجيف والمسافة.",
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
								"support@dbdcheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Dead by Daylight | What It Means",
					description: "Unlock all Dead by Daylight: بحث unlock-all مقابل أدوات ESP وAimbot الحقيقية. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Unlock all Dead by Daylight",
					intro: "DBD Cheats يجمع ESP wallhack وradar hack وDBD Aimbot غير مكتشف لـ Dead by Daylight على Windows PC. Unlock all Dead by Daylight.",
					imageAlt: "DBD Cheats license features overview",
					galleryTitle: "Unlock all Dead by Daylight",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "اشترِ DBD Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Dead by Daylight",
							paragraphs: [
								"DBD Cheats يجمع ESP wallhack وradar hack وDBD Aimbot غير مكتشف لـ Dead by Daylight على Windows PC. بحث unlock-all مقابل أدوات ESP وAimbot الحقيقية.",
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
								"support@dbdcheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				privacy: {
					title: "سياسة الخصوصية | DBD Cheats",
					description: "سياسة الخصوصية لـ DBD Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "سياسة الخصوصية",
					intro: "DBD Cheats يجمع ESP wallhack وradar hack وDBD Aimbot غير مكتشف لـ Dead by Daylight على Windows PC. سياسة الخصوصية لـ dbdcheats.org وتراخيص Dead by Daylight.",
					imageAlt: "DBD Cheats",
					galleryTitle: "DBD Cheats",
					heroImage: "/images/dbd-cheats-aimbot.webp",
					ctaPrimary: "مراسلة الدعم",
					ctaSecondary: "اقرأ الشروط",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "المعلومات التي نجمعها",
							paragraphs: [
								"DBD Cheats يجمع ESP wallhack وradar hack وDBD Aimbot غير مكتشف لـ Dead by Daylight على Windows PC. بريد الاتصال ومراجع طلبات Zadeyo وبيانات أمان الموقع الأساسية.",
								"تُعالَج تفاصيل الدفع عبر checkout Zadeyo — ولا تُخزَّن على dbdcheats.org.",
							],
						},
						{
							h2: "كيف نستخدم البيانات",
							paragraphs: [
								"DBD Cheats يجمع ESP wallhack وradar hack وDBD Aimbot غير مكتشف لـ Dead by Daylight على Windows PC. ردود الدعم وحل الطلبات والامتثال القانوني عند الحاجة.",
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
							],
						},
						{
							h2: "حقوقك",
							paragraphs: [
								"support@dbdcheats.org للدعم والطلبات القانونية.",
								"البريد: support@dbdcheats.org",
							],
						},
					],
				},
				refund: {
					title: "سياسة الاسترداد | DBD Cheats",
					description: "سياسة الاسترداد لـ DBD Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "سياسة الاسترداد",
					intro: "DBD Cheats يجمع ESP wallhack وradar hack وDBD Aimbot غير مكتشف لـ Dead by Daylight على Windows PC. سياسة الاسترداد لـ dbdcheats.org وتراخيص Dead by Daylight.",
					imageAlt: "DBD Cheats",
					galleryTitle: "DBD Cheats",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "مراسلة الدعم",
					ctaSecondary: "اقرأ الخصوصية",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "التسليم الرقمي",
							paragraphs: [
								"DBD Cheats يجمع ESP wallhack وradar hack وDBD Aimbot غير مكتشف لـ Dead by Daylight على Windows PC. بريد الاتصال ومراجع طلبات Zadeyo وبيانات أمان الموقع الأساسية.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "موافقة الاسترداد",
							paragraphs: [
								"DBD Cheats يجمع ESP wallhack وradar hack وDBD Aimbot غير مكتشف لـ Dead by Daylight على Windows PC. ردود الدعم وحل الطلبات والامتثال القانوني عند الحاجة.",
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
							],
						},
						{
							h2: "كيفية الطلب",
							paragraphs: [
								"support@dbdcheats.org للدعم والطلبات القانونية.",
								"البريد: support@dbdcheats.org",
							],
						},
					],
				},
				terms: {
					title: "شروط الاستخدام | DBD Cheats",
					description: "شروط الاستخدام لـ DBD Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "شروط الاستخدام",
					intro: "DBD Cheats يجمع ESP wallhack وradar hack وDBD Aimbot غير مكتشف لـ Dead by Daylight على Windows PC. شروط الاستخدام لـ dbdcheats.org وتراخيص Dead by Daylight.",
					imageAlt: "DBD Cheats",
					galleryTitle: "DBD Cheats",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "مراسلة الدعم",
					ctaSecondary: "اقرأ الخصوصية",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "قبول الشروط",
							paragraphs: [
								"DBD Cheats يجمع ESP wallhack وradar hack وDBD Aimbot غير مكتشف لـ Dead by Daylight على Windows PC. بريد الاتصال ومراجع طلبات Zadeyo وبيانات أمان الموقع الأساسية.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "إخلاء المسؤولية عن المخاطر",
							paragraphs: [
								"DBD Cheats يجمع ESP wallhack وradar hack وDBD Aimbot غير مكتشف لـ Dead by Daylight على Windows PC. ردود الدعم وحل الطلبات والامتثال القانوني عند الحاجة.",
								"استخدام الغش قد ينتهك شروط فريق Dead by Daylight — أنت تتحمل كل مخاطر الحظر.",
							],
						},
						{
							h2: "تغييرات السياسة",
							paragraphs: [
								"support@dbdcheats.org للدعم والطلبات القانونية.",
								"البريد: support@dbdcheats.org",
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
					accent: "Undetected Dead by Daylightチート",
					accentShort: "DBD Cheats",
					subtitle: "Dead by Daylight Windows PC向けESP wallhack、radar hack、Aimbot — Easy Anti-Cheatメンテナンス付き。",
					subtitleShort: "Dead by Daylight PC向けESP・radar・Aimbot",
					buyNow: "今すぐ購入",
					seeFeatures: "機能を見る",
				},
				trust: {
					status: "オンライン",
					statusNote: "DBD CheatsパッケージはDead by Daylight Windows PCで利用可能です。",
					statusShort: "稼働中",
					delivery: "即時デジタル配信",
					platform: "Windows 10 & 11",
					antiCheat: "Easy Anti-Cheatメンテナンス対応",
					antiCheatShort: "Easy Anti-Cheat対応",
				},
				product: {
					title: "DBD Cheats",
					addToCart: "カートに追加",
					monthly: "月額",
					lifetime: "永久",
					available: "現在利用可能",
					gameBadge: "Dead by Daylight",
					platformBadge: "Windows PC",
					statusBadge: "Undetectedパッケージ",
				},
				reviews: {
					title: "プレイヤーの声",
					subtitle: "DBD Cheats購入者からの最近のフィードバック",
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
					tagline: "Dead by Daylight向けundetected ESP、wallhack、radar、Aimbot — Zadeyoで購入。",
				},
				images: {
					hero: "DBD Cheats hero — ESP and aimbot overlay in Dead by Daylight",
					espWallhack: "Wallhack outlines showing survivors and killers through walls",
					aimbotCombat: "Soft aim assist overlay during a Dead by Daylight trial",
					teamFight: "DBD Cheats combat overlay during a team chase",
					playerEsp: "Player ESP boxes and distance readouts in a Dead by Daylight trial",
					headerArt: "Aimbot view and bone priority controls for Dead by Daylight",
					hacksPackage: "2D radar threat overlay for Dead by Daylight",
					chaseFight: "Aimbot assist during a Dead by Daylight chase",
					battleRoyale: "DBD Cheats in-trial overview for Windows PC",
					trialMap: "ESP markers for generators and hooks in Dead by Daylight",
				},
			},
			pages: {
				home: {
					title: "DBD Cheats 2026 | ESP・Wallhack・Aimbot",
					description: "Dead by Daylight向けundetectedチート。ESP wallhack、radar hack、Aimbot、Easy Anti-Cheatメンテナンス。即時デジタル配信。",
					h1: "DBD Cheats — Undetected ESP・Wallhack・Aimbot",
					intro: "Dead by Daylight Windows PC向けundetectedパッケージ：ESP wallhack、radar、Aimbot、Easy Anti-Cheatメンテナンス付き。",
					imageAlt: "dbd cheats hero ESP aimbot wallhack",
					galleryTitle: "DBD Cheatsギャラリー — ESP、Aimbot、wallhack",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "DBD Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026年にDBD Cheatsを選ぶ理由",
							paragraphs: [
								"DBD CheatsはDead by Daylight向けWindows PC用ESP wallhack、radar hack、DBD Aimbotのundetectedパッケージです。BRとchaseで敵スクワッドを読むのに最適。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "ESP wallhack、radar、Aimbotが1ライセンス",
							paragraphs: [
								"DBD CheatsはDead by Daylight向けWindows PC用ESP wallhack、radar hack、DBD Aimbotのundetectedパッケージです。別ツールではなく1ライセンス。",
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
							],
						},
					],
				},
				"dbd-esp": {
					title: "DBD ESP | Player Boxes & Wallhack",
					description: "DBD ESP: プレイヤーボックス、死体マーカー、wallhackオーバーレイ. 即時デジタル配信. undetected — Windows PC.",
					h1: "DBD ESP",
					intro: "DBD CheatsはDead by Daylight向けWindows PC用ESP wallhack、radar hack、DBD Aimbotのundetectedパッケージです。DBD ESP.",
					imageAlt: "DBD ESP player boxes and distance readouts in a trial",
					galleryTitle: "DBD ESP",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "DBD Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "DBD ESP",
							paragraphs: [
								"DBD CheatsはDead by Daylight向けWindows PC用ESP wallhack、radar hack、DBD Aimbotのundetectedパッケージです。プレイヤーボックス、死体マーカー、wallhackオーバーレイ.",
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
								"サポート・法務: support@dbdcheats.org",
							],
						},
					],
				},
				"dbd-aimbot": {
					title: "DBD Aimbot | Soft Aim Controls",
					description: "DBD Aimbot: soft aim、FOV、種別ごとのAimbotプロファイル. 即時デジタル配信. undetected — Windows PC.",
					h1: "DBD Aimbot",
					intro: "DBD CheatsはDead by Daylight向けWindows PC用ESP wallhack、radar hack、DBD Aimbotのundetectedパッケージです。DBD Aimbot.",
					imageAlt: "DBD Aimbot and soft aim controls on Windows PC",
					galleryTitle: "DBD Aimbot",
					heroImage: "/images/dbd-cheats-aimbot.webp",
					ctaPrimary: "DBD Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "DBD Aimbot",
							paragraphs: [
								"DBD CheatsはDead by Daylight向けWindows PC用ESP wallhack、radar hack、DBD Aimbotのundetectedパッケージです。soft aim、FOV、種別ごとのAimbotプロファイル.",
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
								"サポート・法務: support@dbdcheats.org",
							],
						},
					],
				},
				features: {
					title: "機能 | Full Feature List",
					description: "機能: ESP、soft aim、radarコントロール. 即時デジタル配信. undetected — Windows PC.",
					h1: "機能",
					intro: "DBD CheatsはDead by Daylight向けWindows PC用ESP wallhack、radar hack、DBD Aimbotのundetectedパッケージです。機能.",
					imageAlt: "DBD Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "機能",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "DBD Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "機能",
							paragraphs: [
								"DBD CheatsはDead by Daylight向けWindows PC用ESP wallhack、radar hack、DBD Aimbotのundetectedパッケージです。ESP、soft aim、radarコントロール.",
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
								"サポート・法務: support@dbdcheats.org",
							],
						},
					],
				},
				pricing: {
					title: "料金 | Monthly & Lifetime",
					description: "料金: 月額$35またはlifetime $150ライセンス. 即時デジタル配信. undetected — Windows PC.",
					h1: "料金",
					intro: "DBD CheatsはDead by Daylight向けWindows PC用ESP wallhack、radar hack、DBD Aimbotのundetectedパッケージです。料金.",
					imageAlt: "DBD Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "料金",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "DBD Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "料金",
							paragraphs: [
								"DBD CheatsはDead by Daylight向けWindows PC用ESP wallhack、radar hack、DBD Aimbotのundetectedパッケージです。月額$35またはlifetime $150ライセンス.",
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
								"サポート・法務: support@dbdcheats.org",
							],
						},
					],
				},
				setup: {
					title: "セットアップ | PC Setup Guide",
					description: "セットアップ: Windows PCアクティベーションと初回起動セットアップ. 即時デジタル配信. undetected — Windows PC.",
					h1: "セットアップ",
					intro: "DBD CheatsはDead by Daylight向けWindows PC用ESP wallhack、radar hack、DBD Aimbotのundetectedパッケージです。セットアップ.",
					imageAlt: "DBD Cheats setup guide screenshot for Windows PC",
					galleryTitle: "セットアップ",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "DBD Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "セットアップ",
							paragraphs: [
								"DBD CheatsはDead by Daylight向けWindows PC用ESP wallhack、radar hack、DBD Aimbotのundetectedパッケージです。Windows PCアクティベーションと初回起動セットアップ.",
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
								"サポート・法務: support@dbdcheats.org",
							],
						},
					],
				},
				updates: {
					title: "更新 | Easy Anti-Cheat Maintenance Log",
					description: "更新: Easy Anti-Cheatパッチ状況とrebuildメモ. 即時デジタル配信. undetected — Windows PC.",
					h1: "更新",
					intro: "DBD CheatsはDead by Daylight向けWindows PC用ESP wallhack、radar hack、DBD Aimbotのundetectedパッケージです。更新.",
					imageAlt: "DBD Cheats live status after Easy Anti-Cheat and game patches",
					galleryTitle: "更新",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "DBD Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "更新",
							paragraphs: [
								"DBD CheatsはDead by Daylight向けWindows PC用ESP wallhack、radar hack、DBD Aimbotのundetectedパッケージです。Easy Anti-Cheatパッチ状況とrebuildメモ.",
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
								"サポート・法務: support@dbdcheats.org",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP、soft aim、配信、Easy Anti-Cheatに関する質問. 即時デジタル配信. undetected — Windows PC.",
					h1: "FAQ",
					intro: "DBD CheatsはDead by Daylight向けWindows PC用ESP wallhack、radar hack、DBD Aimbotのundetectedパッケージです。FAQ.",
					imageAlt: "DBD Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "DBD Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"DBD CheatsはDead by Daylight向けWindows PC用ESP wallhack、radar hack、DBD Aimbotのundetectedパッケージです。ESP、soft aim、配信、Easy Anti-Cheatに関する質問.",
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
								"サポート・法務: support@dbdcheats.org",
							],
						},
					],
				},
				support: {
					title: "サポート | Help & Contact",
					description: "サポート: 注文ヘルプとライセンスサポート連絡先. 即時デジタル配信. undetected — Windows PC.",
					h1: "サポート",
					intro: "DBD CheatsはDead by Daylight向けWindows PC用ESP wallhack、radar hack、DBD Aimbotのundetectedパッケージです。サポート.",
					imageAlt: "DBD Cheats support page for license and setup help",
					galleryTitle: "サポート",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "DBD Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "サポート",
							paragraphs: [
								"DBD CheatsはDead by Daylight向けWindows PC用ESP wallhack、radar hack、DBD Aimbotのundetectedパッケージです。注文ヘルプとライセンスサポート連絡先.",
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
								"サポート・法務: support@dbdcheats.org",
							],
						},
					],
				},
				undetected: {
					title: "Undetectedチート | Easy Anti-Cheat Safe Status",
					description: "Undetectedチート: Easy Anti-Cheatパッチ後のundetectedメンテナンス. 即時デジタル配信. undetected — Windows PC.",
					h1: "Undetectedチート",
					intro: "DBD CheatsはDead by Daylight向けWindows PC用ESP wallhack、radar hack、DBD Aimbotのundetectedパッケージです。Undetectedチート.",
					imageAlt: "DBD Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetectedチート",
					heroImage: "/images/dbd-cheats-wallhack.webp",
					ctaPrimary: "DBD Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "Undetectedチート",
							paragraphs: [
								"DBD CheatsはDead by Daylight向けWindows PC用ESP wallhack、radar hack、DBD Aimbotのundetectedパッケージです。Easy Anti-Cheatパッチ後のundetectedメンテナンス.",
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
								"サポート・法務: support@dbdcheats.org",
							],
						},
					],
				},
				wallhack: {
					title: "Dead by Daylight Wallhack | ESP Visibility",
					description: "Dead by Daylight Wallhack: プレイヤー、死体、距離向けwallhack ESP. 即時デジタル配信. undetected — Windows PC.",
					h1: "Dead by Daylight Wallhack",
					intro: "DBD CheatsはDead by Daylight向けWindows PC用ESP wallhack、radar hack、DBD Aimbotのundetectedパッケージです。Dead by Daylight Wallhack.",
					imageAlt: "dbd wallhack visibility through walls in a trial",
					galleryTitle: "Dead by Daylight Wallhack",
					heroImage: "/images/dbd-cheats-wallhack.webp",
					ctaPrimary: "DBD Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Dead by Daylight Wallhack",
							paragraphs: [
								"DBD CheatsはDead by Daylight向けWindows PC用ESP wallhack、radar hack、DBD Aimbotのundetectedパッケージです。プレイヤー、死体、距離向けwallhack ESP.",
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
								"サポート・法務: support@dbdcheats.org",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 側面攻撃とローテーション向け2D radarキュー. 即時デジタル配信. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "DBD CheatsはDead by Daylight向けWindows PC用ESP wallhack、radar hack、DBD Aimbotのundetectedパッケージです。Radar Hack.",
					imageAlt: "Dead by Daylight 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "DBD Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"DBD CheatsはDead by Daylight向けWindows PC用ESP wallhack、radar hack、DBD Aimbotのundetectedパッケージです。側面攻撃とローテーション向け2D radarキュー.",
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
								"サポート・法務: support@dbdcheats.org",
							],
						},
					],
				},
				eac: {
					title: "Easy Anti-Cheat Bypass | Patch Maintenance",
					description: "Easy Anti-Cheat Bypass: Dead by Daylight hacks向けEasy Anti-Cheat更新の対応方法. 即時デジタル配信. undetected — Windows PC.",
					h1: "Easy Anti-Cheat Bypass",
					intro: "DBD CheatsはDead by Daylight向けWindows PC用ESP wallhack、radar hack、DBD Aimbotのundetectedパッケージです。Easy Anti-Cheat Bypass.",
					imageAlt: "DBD Cheats maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Easy Anti-Cheat Bypass",
					heroImage: "/images/dbd-cheats-aimbot.webp",
					ctaPrimary: "DBD Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Easy Anti-Cheat Bypass",
							paragraphs: [
								"DBD CheatsはDead by Daylight向けWindows PC用ESP wallhack、radar hack、DBD Aimbotのundetectedパッケージです。Dead by Daylight hacks向けEasy Anti-Cheat更新の対応方法.",
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
								"サポート・法務: support@dbdcheats.org",
							],
						},
					],
				},
				"cheats-2026": {
					title: "DBD Cheats 2026 | Buyer Guide",
					description: "DBD Cheats 2026: checkout前の2026 dbd cheatsチェックリスト. 即時デジタル配信. undetected — Windows PC.",
					h1: "DBD Cheats 2026",
					intro: "DBD CheatsはDead by Daylight向けWindows PC用ESP wallhack、radar hack、DBD Aimbotのundetectedパッケージです。DBD Cheats 2026.",
					imageAlt: "DBD Cheats product overview for Dead by Daylight",
					galleryTitle: "DBD Cheats 2026",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "DBD Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "DBD Cheats 2026",
							paragraphs: [
								"DBD CheatsはDead by Daylight向けWindows PC用ESP wallhack、radar hack、DBD Aimbotのundetectedパッケージです。checkout前の2026 dbd cheatsチェックリスト.",
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
								"サポート・法務: support@dbdcheats.org",
							],
						},
					],
				},
				hacks: {
					title: "DBD Cheats | ESP Aimbot Guide",
					description: "DBD Cheats: ESPとAimbotのDBD Cheats柱. 即時デジタル配信. undetected — Windows PC.",
					h1: "DBD Cheats",
					intro: "DBD CheatsはDead by Daylight向けWindows PC用ESP wallhack、radar hack、DBD Aimbotのundetectedパッケージです。DBD Cheats.",
					imageAlt: "DBD Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "DBD Cheats",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "DBD Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "DBD Cheats",
							paragraphs: [
								"DBD CheatsはDead by Daylight向けWindows PC用ESP wallhack、radar hack、DBD Aimbotのundetectedパッケージです。ESPとAimbotのDBD Cheats柱.",
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
								"サポート・法務: support@dbdcheats.org",
							],
						},
					],
				},
				"cheat-download": {
					title: "Dead by Daylight Cheat Download | Instant Access",
					description: "Dead by Daylight Cheat Download: 支払い後のデジタルライセンスダウンロード. 即時デジタル配信. undetected — Windows PC.",
					h1: "Dead by Daylight Cheat Download",
					intro: "DBD CheatsはDead by Daylight向けWindows PC用ESP wallhack、radar hack、DBD Aimbotのundetectedパッケージです。Dead by Daylight Cheat Download.",
					imageAlt: "DBD Cheats download and install delivery flow",
					galleryTitle: "Dead by Daylight Cheat Download",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "DBD Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Dead by Daylight Cheat Download",
							paragraphs: [
								"DBD CheatsはDead by Daylight向けWindows PC用ESP wallhack、radar hack、DBD Aimbotのundetectedパッケージです。支払い後のデジタルライセンスダウンロード.",
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
								"サポート・法務: support@dbdcheats.org",
							],
						},
					],
				},
				"mod-menu": {
					title: "Dead by Daylight Mod Menu | In-Game Toggles",
					description: "Dead by Daylight Mod Menu: クライアント内ESPとsoft aimトグル. 即時デジタル配信. undetected — Windows PC.",
					h1: "Dead by Daylight Mod Menu",
					intro: "DBD CheatsはDead by Daylight向けWindows PC用ESP wallhack、radar hack、DBD Aimbotのundetectedパッケージです。Dead by Daylight Mod Menu.",
					imageAlt: "DBD Cheats in-game menu controls",
					galleryTitle: "Dead by Daylight Mod Menu",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "DBD Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Dead by Daylight Mod Menu",
							paragraphs: [
								"DBD CheatsはDead by Daylight向けWindows PC用ESP wallhack、radar hack、DBD Aimbotのundetectedパッケージです。クライアント内ESPとsoft aimトグル.",
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
								"サポート・法務: support@dbdcheats.org",
							],
						},
					],
				},
				"soft-aim": {
					title: "Dead by Daylight Soft Aim | Smooth Aim Settings",
					description: "Dead by Daylight Soft Aim: Windows PC向けスムーズなsoft aim設定. 即時デジタル配信. undetected — Windows PC.",
					h1: "Dead by Daylight Soft Aim",
					intro: "DBD CheatsはDead by Daylight向けWindows PC用ESP wallhack、radar hack、DBD Aimbotのundetectedパッケージです。Dead by Daylight Soft Aim.",
					imageAlt: "Dead by Daylight soft aim FOV and smoothness settings",
					galleryTitle: "Dead by Daylight Soft Aim",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "DBD Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "Dead by Daylight Soft Aim",
							paragraphs: [
								"DBD CheatsはDead by Daylight向けWindows PC用ESP wallhack、radar hack、DBD Aimbotのundetectedパッケージです。Windows PC向けスムーズなsoft aim設定.",
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
								"サポート・法務: support@dbdcheats.org",
							],
						},
					],
				},
				"best-cheats": {
					title: "最強Dead by Daylightチート | Buyer Checklist",
					description: "最強Dead by Daylightチート: dbd cheats購入前に比較すべき点. 即時デジタル配信. undetected — Windows PC.",
					h1: "最強Dead by Daylightチート",
					intro: "DBD CheatsはDead by Daylight向けWindows PC用ESP wallhack、radar hack、DBD Aimbotのundetectedパッケージです。最強Dead by Daylightチート.",
					imageAlt: "DBD Cheats overview for Dead by Daylight on PC",
					galleryTitle: "最強Dead by Daylightチート",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "DBD Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "最強Dead by Daylightチート",
							paragraphs: [
								"DBD CheatsはDead by Daylight向けWindows PC用ESP wallhack、radar hack、DBD Aimbotのundetectedパッケージです。dbd cheats購入前に比較すべき点.",
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
								"サポート・法務: support@dbdcheats.org",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "DBD Aimbot Hack | Soft Aim Assist",
					description: "DBD Aimbot Hack: Dead by Daylight向けundetected Aimbot hack assist. 即時デジタル配信. undetected — Windows PC.",
					h1: "DBD Aimbot Hack",
					intro: "DBD CheatsはDead by Daylight向けWindows PC用ESP wallhack、radar hack、DBD Aimbotのundetectedパッケージです。DBD Aimbot Hack.",
					imageAlt: "DBD Aimbot hack controls and bone priority",
					galleryTitle: "DBD Aimbot Hack",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "DBD Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "DBD Aimbot Hack",
							paragraphs: [
								"DBD CheatsはDead by Daylight向けWindows PC用ESP wallhack、radar hack、DBD Aimbotのundetectedパッケージです。Dead by Daylight向けundetected Aimbot hack assist.",
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
								"サポート・法務: support@dbdcheats.org",
							],
						},
					],
				},
				"esp-hack": {
					title: "DBD ESP Hack | Boxes & Loot",
					description: "DBD ESP Hack: ESP hackボックス、死体pin、距離. 即時デジタル配信. undetected — Windows PC.",
					h1: "DBD ESP Hack",
					intro: "DBD CheatsはDead by Daylight向けWindows PC用ESP wallhack、radar hack、DBD Aimbotのundetectedパッケージです。DBD ESP Hack.",
					imageAlt: "DBD ESP hack boxes and generator markers",
					galleryTitle: "DBD ESP Hack",
					heroImage: "/images/dbd-cheats-wallhack.webp",
					ctaPrimary: "DBD Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "DBD ESP Hack",
							paragraphs: [
								"DBD CheatsはDead by Daylight向けWindows PC用ESP wallhack、radar hack、DBD Aimbotのundetectedパッケージです。ESP hackボックス、死体pin、距離.",
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
								"サポート・法務: support@dbdcheats.org",
							],
						},
					],
				},
				"unlock-all": {
					title: "Dead by Daylight Unlock All | What It Means",
					description: "Dead by Daylight Unlock All: unlock-all検索 vs 本物のESPとAimbotツール. 即時デジタル配信. undetected — Windows PC.",
					h1: "Dead by Daylight Unlock All",
					intro: "DBD CheatsはDead by Daylight向けWindows PC用ESP wallhack、radar hack、DBD Aimbotのundetectedパッケージです。Dead by Daylight Unlock All.",
					imageAlt: "DBD Cheats license features overview",
					galleryTitle: "Dead by Daylight Unlock All",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "DBD Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Dead by Daylight Unlock All",
							paragraphs: [
								"DBD CheatsはDead by Daylight向けWindows PC用ESP wallhack、radar hack、DBD Aimbotのundetectedパッケージです。unlock-all検索 vs 本物のESPとAimbotツール.",
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
								"サポート・法務: support@dbdcheats.org",
							],
						},
					],
				},
				privacy: {
					title: "プライバシーポリシー | DBD Cheats",
					description: "プライバシーポリシー DBD Cheats — ESP wallhack、Aimbot向け, Windows PC.",
					h1: "プライバシーポリシー",
					intro: "DBD CheatsはDead by Daylight向けWindows PC用ESP wallhack、radar hack、DBD Aimbotのundetectedパッケージです。プライバシーポリシー dbdcheats.orgおよびDead by Daylightライセンス向け。",
					imageAlt: "DBD Cheats",
					galleryTitle: "DBD Cheats",
					heroImage: "/images/dbd-cheats-aimbot.webp",
					ctaPrimary: "サポートにメール",
					ctaSecondary: "利用規約を読む",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "収集する情報",
							paragraphs: [
								"DBD CheatsはDead by Daylight向けWindows PC用ESP wallhack、radar hack、DBD Aimbotのundetectedパッケージです。連絡メール、Zadeyo注文参照、基本的なサイトセキュリティデータ。",
								"支払い情報はZadeyo checkoutで処理され、dbdcheats.orgには保存されません。",
							],
						},
						{
							h2: "データの利用方法",
							paragraphs: [
								"DBD CheatsはDead by Daylight向けWindows PC用ESP wallhack、radar hack、DBD Aimbotのundetectedパッケージです。サポート対応、注文処理、必要時の法的遵守。",
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
							],
						},
						{
							h2: "あなたの権利",
							paragraphs: [
								"サポート・法務: support@dbdcheats.org",
								"メール: support@dbdcheats.org",
							],
						},
					],
				},
				refund: {
					title: "返金ポリシー | DBD Cheats",
					description: "返金ポリシー DBD Cheats — ESP wallhack、Aimbot向け, Windows PC.",
					h1: "返金ポリシー",
					intro: "DBD CheatsはDead by Daylight向けWindows PC用ESP wallhack、radar hack、DBD Aimbotのundetectedパッケージです。返金ポリシー dbdcheats.orgおよびDead by Daylightライセンス向け。",
					imageAlt: "DBD Cheats",
					galleryTitle: "DBD Cheats",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "サポートにメール",
					ctaSecondary: "プライバシーを読む",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "デジタル配信",
							paragraphs: [
								"DBD CheatsはDead by Daylight向けWindows PC用ESP wallhack、radar hack、DBD Aimbotのundetectedパッケージです。連絡メール、Zadeyo注文参照、基本的なサイトセキュリティデータ。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "返金承認",
							paragraphs: [
								"DBD CheatsはDead by Daylight向けWindows PC用ESP wallhack、radar hack、DBD Aimbotのundetectedパッケージです。サポート対応、注文処理、必要時の法的遵守。",
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
							],
						},
						{
							h2: "申請方法",
							paragraphs: [
								"サポート・法務: support@dbdcheats.org",
								"メール: support@dbdcheats.org",
							],
						},
					],
				},
				terms: {
					title: "利用規約 | DBD Cheats",
					description: "利用規約 DBD Cheats — ESP wallhack、Aimbot向け, Windows PC.",
					h1: "利用規約",
					intro: "DBD CheatsはDead by Daylight向けWindows PC用ESP wallhack、radar hack、DBD Aimbotのundetectedパッケージです。利用規約 dbdcheats.orgおよびDead by Daylightライセンス向け。",
					imageAlt: "DBD Cheats",
					galleryTitle: "DBD Cheats",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "サポートにメール",
					ctaSecondary: "プライバシーを読む",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "規約への同意",
							paragraphs: [
								"DBD CheatsはDead by Daylight向けWindows PC用ESP wallhack、radar hack、DBD Aimbotのundetectedパッケージです。連絡メール、Zadeyo注文参照、基本的なサイトセキュリティデータ。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "リスク免責",
							paragraphs: [
								"DBD CheatsはDead by Daylight向けWindows PC用ESP wallhack、radar hack、DBD Aimbotのundetectedパッケージです。サポート対応、注文処理、必要時の法的遵守。",
								"チートの使用はDead by Daylightチームの利用規約に違反する可能性があり、BANリスクはすべて自己負担です。",
							],
						},
						{
							h2: "ポリシー変更",
							paragraphs: [
								"サポート・法務: support@dbdcheats.org",
								"メール: support@dbdcheats.org",
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
					accent: "Undetected Dead by Daylight 치트",
					accentShort: "DBD Cheats",
					subtitle: "Dead by Daylight Windows PC용 ESP wallhack, radar hack, Aimbot — Easy Anti-Cheat 유지보수 포함.",
					subtitleShort: "Dead by Daylight PC용 ESP, radar, Aimbot",
					buyNow: "지금 구매",
					seeFeatures: "기능 보기",
				},
				trust: {
					status: "온라인",
					statusNote: "DBD Cheats 패키지는 Dead by Daylight Windows PC에서 이용 가능합니다.",
					statusShort: "가동 중",
					delivery: "즉시 디지털 배송",
					platform: "Windows 10 & 11",
					antiCheat: "Easy Anti-Cheat 유지보수 지원",
					antiCheatShort: "Easy Anti-Cheat 지원",
				},
				product: {
					title: "DBD Cheats",
					addToCart: "장바구니에 추가",
					monthly: "월간",
					lifetime: "평생",
					available: "지금 이용 가능",
					gameBadge: "Dead by Daylight",
					platformBadge: "Windows PC",
					statusBadge: "Undetected 패키지",
				},
				reviews: {
					title: "플레이어 후기",
					subtitle: "DBD Cheats 구매자 최근 피드백",
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
					tagline: "Dead by Daylight용 undetected ESP, wallhack, radar, Aimbot — Zadeyo 결제.",
				},
				images: {
					hero: "DBD Cheats hero — ESP and aimbot overlay in Dead by Daylight",
					espWallhack: "Wallhack outlines showing survivors and killers through walls",
					aimbotCombat: "Soft aim assist overlay during a Dead by Daylight trial",
					teamFight: "DBD Cheats combat overlay during a team chase",
					playerEsp: "Player ESP boxes and distance readouts in a Dead by Daylight trial",
					headerArt: "Aimbot view and bone priority controls for Dead by Daylight",
					hacksPackage: "2D radar threat overlay for Dead by Daylight",
					chaseFight: "Aimbot assist during a Dead by Daylight chase",
					battleRoyale: "DBD Cheats in-trial overview for Windows PC",
					trialMap: "ESP markers for generators and hooks in Dead by Daylight",
				},
			},
			pages: {
				home: {
					title: "DBD Cheats 2026 | ESP, Wallhack, Aimbot",
					description: "Dead by Daylight undetected 치트. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat 유지보수. 즉시 디지털 배송.",
					h1: "DBD Cheats — Undetected ESP, Wallhack, Aimbot",
					intro: "Dead by Daylight Windows PC undetected 패키지: ESP wallhack, radar, Aimbot, Easy Anti-Cheat 유지보수 포함.",
					imageAlt: "dbd cheats hero ESP aimbot wallhack",
					galleryTitle: "DBD Cheats 갤러리 — ESP, Aimbot, wallhack",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "DBD Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026년 DBD Cheats를 선택하는 이유",
							paragraphs: [
								"DBD Cheats는 Dead by Daylight Windows PC용 ESP wallhack, radar hack, DBD Aimbot undetected 패키지입니다. BR 및 chase에서 적 분대 읽기에 이상적.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot 단일 라이선스",
							paragraphs: [
								"DBD Cheats는 Dead by Daylight Windows PC용 ESP wallhack, radar hack, DBD Aimbot undetected 패키지입니다. 별도 도구 대신 단일 라이선스.",
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
							],
						},
					],
				},
				"dbd-esp": {
					title: "DBD ESP | Player Boxes & Wallhack",
					description: "DBD ESP: 플레이어 박스, 시체 마커, wallhack 오버레이. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "DBD ESP",
					intro: "DBD Cheats는 Dead by Daylight Windows PC용 ESP wallhack, radar hack, DBD Aimbot undetected 패키지입니다. DBD ESP.",
					imageAlt: "DBD ESP player boxes and distance readouts in a trial",
					galleryTitle: "DBD ESP",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "DBD Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "DBD ESP",
							paragraphs: [
								"DBD Cheats는 Dead by Daylight Windows PC용 ESP wallhack, radar hack, DBD Aimbot undetected 패키지입니다. 플레이어 박스, 시체 마커, wallhack 오버레이.",
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
								"지원 및 법무: support@dbdcheats.org",
							],
						},
					],
				},
				"dbd-aimbot": {
					title: "DBD Aimbot | Soft Aim Controls",
					description: "DBD Aimbot: soft aim, FOV, 종별 Aimbot 프로필. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "DBD Aimbot",
					intro: "DBD Cheats는 Dead by Daylight Windows PC용 ESP wallhack, radar hack, DBD Aimbot undetected 패키지입니다. DBD Aimbot.",
					imageAlt: "DBD Aimbot and soft aim controls on Windows PC",
					galleryTitle: "DBD Aimbot",
					heroImage: "/images/dbd-cheats-aimbot.webp",
					ctaPrimary: "DBD Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "DBD Aimbot",
							paragraphs: [
								"DBD Cheats는 Dead by Daylight Windows PC용 ESP wallhack, radar hack, DBD Aimbot undetected 패키지입니다. soft aim, FOV, 종별 Aimbot 프로필.",
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
								"지원 및 법무: support@dbdcheats.org",
							],
						},
					],
				},
				features: {
					title: "기능 | Full Feature List",
					description: "기능: ESP, soft aim, radar 컨트롤. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "기능",
					intro: "DBD Cheats는 Dead by Daylight Windows PC용 ESP wallhack, radar hack, DBD Aimbot undetected 패키지입니다. 기능.",
					imageAlt: "DBD Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "기능",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "DBD Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "기능",
							paragraphs: [
								"DBD Cheats는 Dead by Daylight Windows PC용 ESP wallhack, radar hack, DBD Aimbot undetected 패키지입니다. ESP, soft aim, radar 컨트롤.",
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
								"지원 및 법무: support@dbdcheats.org",
							],
						},
					],
				},
				pricing: {
					title: "가격 | Monthly & Lifetime",
					description: "가격: 월 $35 또는 lifetime $150 라이선스. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "가격",
					intro: "DBD Cheats는 Dead by Daylight Windows PC용 ESP wallhack, radar hack, DBD Aimbot undetected 패키지입니다. 가격.",
					imageAlt: "DBD Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "가격",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "DBD Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "가격",
							paragraphs: [
								"DBD Cheats는 Dead by Daylight Windows PC용 ESP wallhack, radar hack, DBD Aimbot undetected 패키지입니다. 월 $35 또는 lifetime $150 라이선스.",
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
								"지원 및 법무: support@dbdcheats.org",
							],
						},
					],
				},
				setup: {
					title: "설치 | PC Setup Guide",
					description: "설치: Windows PC 활성화 및 첫 실행 설정. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "설치",
					intro: "DBD Cheats는 Dead by Daylight Windows PC용 ESP wallhack, radar hack, DBD Aimbot undetected 패키지입니다. 설치.",
					imageAlt: "DBD Cheats setup guide screenshot for Windows PC",
					galleryTitle: "설치",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "DBD Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "설치",
							paragraphs: [
								"DBD Cheats는 Dead by Daylight Windows PC용 ESP wallhack, radar hack, DBD Aimbot undetected 패키지입니다. Windows PC 활성화 및 첫 실행 설정.",
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
								"지원 및 법무: support@dbdcheats.org",
							],
						},
					],
				},
				updates: {
					title: "업데이트 | Easy Anti-Cheat Maintenance Log",
					description: "업데이트: Easy Anti-Cheat 패치 상태 및 rebuild 메모. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "업데이트",
					intro: "DBD Cheats는 Dead by Daylight Windows PC용 ESP wallhack, radar hack, DBD Aimbot undetected 패키지입니다. 업데이트.",
					imageAlt: "DBD Cheats live status after Easy Anti-Cheat and game patches",
					galleryTitle: "업데이트",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "DBD Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "업데이트",
							paragraphs: [
								"DBD Cheats는 Dead by Daylight Windows PC용 ESP wallhack, radar hack, DBD Aimbot undetected 패키지입니다. Easy Anti-Cheat 패치 상태 및 rebuild 메모.",
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
								"지원 및 법무: support@dbdcheats.org",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, 배송, Easy Anti-Cheat 질문. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "FAQ",
					intro: "DBD Cheats는 Dead by Daylight Windows PC용 ESP wallhack, radar hack, DBD Aimbot undetected 패키지입니다. FAQ.",
					imageAlt: "DBD Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "DBD Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"DBD Cheats는 Dead by Daylight Windows PC용 ESP wallhack, radar hack, DBD Aimbot undetected 패키지입니다. ESP, soft aim, 배송, Easy Anti-Cheat 질문.",
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
								"지원 및 법무: support@dbdcheats.org",
							],
						},
					],
				},
				support: {
					title: "지원 | Help & Contact",
					description: "지원: 주문 도움 및 라이선스 지원 연락처. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "지원",
					intro: "DBD Cheats는 Dead by Daylight Windows PC용 ESP wallhack, radar hack, DBD Aimbot undetected 패키지입니다. 지원.",
					imageAlt: "DBD Cheats support page for license and setup help",
					galleryTitle: "지원",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "DBD Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "지원",
							paragraphs: [
								"DBD Cheats는 Dead by Daylight Windows PC용 ESP wallhack, radar hack, DBD Aimbot undetected 패키지입니다. 주문 도움 및 라이선스 지원 연락처.",
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
								"지원 및 법무: support@dbdcheats.org",
							],
						},
					],
				},
				undetected: {
					title: "Undetected 치트 | Easy Anti-Cheat Safe Status",
					description: "Undetected 치트: Easy Anti-Cheat 패치 후 undetected 유지보수. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Undetected 치트",
					intro: "DBD Cheats는 Dead by Daylight Windows PC용 ESP wallhack, radar hack, DBD Aimbot undetected 패키지입니다. Undetected 치트.",
					imageAlt: "DBD Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected 치트",
					heroImage: "/images/dbd-cheats-wallhack.webp",
					ctaPrimary: "DBD Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "Undetected 치트",
							paragraphs: [
								"DBD Cheats는 Dead by Daylight Windows PC용 ESP wallhack, radar hack, DBD Aimbot undetected 패키지입니다. Easy Anti-Cheat 패치 후 undetected 유지보수.",
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
								"지원 및 법무: support@dbdcheats.org",
							],
						},
					],
				},
				wallhack: {
					title: "Dead by Daylight Wallhack | ESP Visibility",
					description: "Dead by Daylight Wallhack: 플레이어, 시체, 거리용 wallhack ESP. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Dead by Daylight Wallhack",
					intro: "DBD Cheats는 Dead by Daylight Windows PC용 ESP wallhack, radar hack, DBD Aimbot undetected 패키지입니다. Dead by Daylight Wallhack.",
					imageAlt: "dbd wallhack visibility through walls in a trial",
					galleryTitle: "Dead by Daylight Wallhack",
					heroImage: "/images/dbd-cheats-wallhack.webp",
					ctaPrimary: "DBD Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Dead by Daylight Wallhack",
							paragraphs: [
								"DBD Cheats는 Dead by Daylight Windows PC용 ESP wallhack, radar hack, DBD Aimbot undetected 패키지입니다. 플레이어, 시체, 거리용 wallhack ESP.",
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
								"지원 및 법무: support@dbdcheats.org",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 측면 공격과 로테이션용 2D radar 신호. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "DBD Cheats는 Dead by Daylight Windows PC용 ESP wallhack, radar hack, DBD Aimbot undetected 패키지입니다. Radar Hack.",
					imageAlt: "Dead by Daylight 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "DBD Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"DBD Cheats는 Dead by Daylight Windows PC용 ESP wallhack, radar hack, DBD Aimbot undetected 패키지입니다. 측면 공격과 로테이션용 2D radar 신호.",
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
								"지원 및 법무: support@dbdcheats.org",
							],
						},
					],
				},
				eac: {
					title: "Easy Anti-Cheat Bypass | Patch Maintenance",
					description: "Easy Anti-Cheat Bypass: Dead by Daylight hacks용 Easy Anti-Cheat 업데이트 처리 방법. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Easy Anti-Cheat Bypass",
					intro: "DBD Cheats는 Dead by Daylight Windows PC용 ESP wallhack, radar hack, DBD Aimbot undetected 패키지입니다. Easy Anti-Cheat Bypass.",
					imageAlt: "DBD Cheats maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Easy Anti-Cheat Bypass",
					heroImage: "/images/dbd-cheats-aimbot.webp",
					ctaPrimary: "DBD Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Easy Anti-Cheat Bypass",
							paragraphs: [
								"DBD Cheats는 Dead by Daylight Windows PC용 ESP wallhack, radar hack, DBD Aimbot undetected 패키지입니다. Dead by Daylight hacks용 Easy Anti-Cheat 업데이트 처리 방법.",
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
								"지원 및 법무: support@dbdcheats.org",
							],
						},
					],
				},
				"cheats-2026": {
					title: "DBD Cheats 2026 | Buyer Guide",
					description: "DBD Cheats 2026: checkout 전 2026 dbd cheats 체크리스트. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "DBD Cheats 2026",
					intro: "DBD Cheats는 Dead by Daylight Windows PC용 ESP wallhack, radar hack, DBD Aimbot undetected 패키지입니다. DBD Cheats 2026.",
					imageAlt: "DBD Cheats product overview for Dead by Daylight",
					galleryTitle: "DBD Cheats 2026",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "DBD Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "DBD Cheats 2026",
							paragraphs: [
								"DBD Cheats는 Dead by Daylight Windows PC용 ESP wallhack, radar hack, DBD Aimbot undetected 패키지입니다. checkout 전 2026 dbd cheats 체크리스트.",
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
								"지원 및 법무: support@dbdcheats.org",
							],
						},
					],
				},
				hacks: {
					title: "DBD Cheats | ESP Aimbot Guide",
					description: "DBD Cheats: ESP와 Aimbot을 위한 DBD Cheats 기둥. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "DBD Cheats",
					intro: "DBD Cheats는 Dead by Daylight Windows PC용 ESP wallhack, radar hack, DBD Aimbot undetected 패키지입니다. DBD Cheats.",
					imageAlt: "DBD Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "DBD Cheats",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "DBD Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "DBD Cheats",
							paragraphs: [
								"DBD Cheats는 Dead by Daylight Windows PC용 ESP wallhack, radar hack, DBD Aimbot undetected 패키지입니다. ESP와 Aimbot을 위한 DBD Cheats 기둥.",
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
								"지원 및 법무: support@dbdcheats.org",
							],
						},
					],
				},
				"cheat-download": {
					title: "Dead by Daylight Cheat Download | Instant Access",
					description: "Dead by Daylight Cheat Download: 결제 후 디지털 라이선스 다운로드. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Dead by Daylight Cheat Download",
					intro: "DBD Cheats는 Dead by Daylight Windows PC용 ESP wallhack, radar hack, DBD Aimbot undetected 패키지입니다. Dead by Daylight Cheat Download.",
					imageAlt: "DBD Cheats download and install delivery flow",
					galleryTitle: "Dead by Daylight Cheat Download",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "DBD Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Dead by Daylight Cheat Download",
							paragraphs: [
								"DBD Cheats는 Dead by Daylight Windows PC용 ESP wallhack, radar hack, DBD Aimbot undetected 패키지입니다. 결제 후 디지털 라이선스 다운로드.",
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
								"지원 및 법무: support@dbdcheats.org",
							],
						},
					],
				},
				"mod-menu": {
					title: "Dead by Daylight 모드 메뉴 | In-Game Toggles",
					description: "Dead by Daylight 모드 메뉴: 클라이언트 내 ESP 및 soft aim 토글. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Dead by Daylight 모드 메뉴",
					intro: "DBD Cheats는 Dead by Daylight Windows PC용 ESP wallhack, radar hack, DBD Aimbot undetected 패키지입니다. Dead by Daylight 모드 메뉴.",
					imageAlt: "DBD Cheats in-game menu controls",
					galleryTitle: "Dead by Daylight 모드 메뉴",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "DBD Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Dead by Daylight 모드 메뉴",
							paragraphs: [
								"DBD Cheats는 Dead by Daylight Windows PC용 ESP wallhack, radar hack, DBD Aimbot undetected 패키지입니다. 클라이언트 내 ESP 및 soft aim 토글.",
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
								"지원 및 법무: support@dbdcheats.org",
							],
						},
					],
				},
				"soft-aim": {
					title: "Dead by Daylight Soft Aim | Smooth Aim Settings",
					description: "Dead by Daylight Soft Aim: Windows PC용 부드러운 soft aim 설정. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Dead by Daylight Soft Aim",
					intro: "DBD Cheats는 Dead by Daylight Windows PC용 ESP wallhack, radar hack, DBD Aimbot undetected 패키지입니다. Dead by Daylight Soft Aim.",
					imageAlt: "Dead by Daylight soft aim FOV and smoothness settings",
					galleryTitle: "Dead by Daylight Soft Aim",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "DBD Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "Dead by Daylight Soft Aim",
							paragraphs: [
								"DBD Cheats는 Dead by Daylight Windows PC용 ESP wallhack, radar hack, DBD Aimbot undetected 패키지입니다. Windows PC용 부드러운 soft aim 설정.",
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
								"지원 및 법무: support@dbdcheats.org",
							],
						},
					],
				},
				"best-cheats": {
					title: "최고의 Dead by Daylight 치트 | Buyer Checklist",
					description: "최고의 Dead by Daylight 치트: dbd cheats 구매 전 비교할 항목. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "최고의 Dead by Daylight 치트",
					intro: "DBD Cheats는 Dead by Daylight Windows PC용 ESP wallhack, radar hack, DBD Aimbot undetected 패키지입니다. 최고의 Dead by Daylight 치트.",
					imageAlt: "DBD Cheats overview for Dead by Daylight on PC",
					galleryTitle: "최고의 Dead by Daylight 치트",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "DBD Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "최고의 Dead by Daylight 치트",
							paragraphs: [
								"DBD Cheats는 Dead by Daylight Windows PC용 ESP wallhack, radar hack, DBD Aimbot undetected 패키지입니다. dbd cheats 구매 전 비교할 항목.",
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
								"지원 및 법무: support@dbdcheats.org",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Dead by Daylight 에임봇 핵 | Soft Aim Assist",
					description: "Dead by Daylight 에임봇 핵: Dead by Daylight용 undetected Aimbot hack assist. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Dead by Daylight 에임봇 핵",
					intro: "DBD Cheats는 Dead by Daylight Windows PC용 ESP wallhack, radar hack, DBD Aimbot undetected 패키지입니다. Dead by Daylight 에임봇 핵.",
					imageAlt: "DBD Aimbot hack controls and bone priority",
					galleryTitle: "Dead by Daylight 에임봇 핵",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "DBD Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "Dead by Daylight 에임봇 핵",
							paragraphs: [
								"DBD Cheats는 Dead by Daylight Windows PC용 ESP wallhack, radar hack, DBD Aimbot undetected 패키지입니다. Dead by Daylight용 undetected Aimbot hack assist.",
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
								"지원 및 법무: support@dbdcheats.org",
							],
						},
					],
				},
				"esp-hack": {
					title: "DBD ESP 핵 | Boxes & Loot",
					description: "DBD ESP 핵: ESP hack 박스, 시체 pin, 거리. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "DBD ESP 핵",
					intro: "DBD Cheats는 Dead by Daylight Windows PC용 ESP wallhack, radar hack, DBD Aimbot undetected 패키지입니다. DBD ESP 핵.",
					imageAlt: "DBD ESP hack boxes and generator markers",
					galleryTitle: "DBD ESP 핵",
					heroImage: "/images/dbd-cheats-wallhack.webp",
					ctaPrimary: "DBD Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "DBD ESP 핵",
							paragraphs: [
								"DBD Cheats는 Dead by Daylight Windows PC용 ESP wallhack, radar hack, DBD Aimbot undetected 패키지입니다. ESP hack 박스, 시체 pin, 거리.",
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
								"지원 및 법무: support@dbdcheats.org",
							],
						},
					],
				},
				"unlock-all": {
					title: "Dead by Daylight Unlock All | What It Means",
					description: "Dead by Daylight Unlock All: unlock-all 검색 vs 실제 ESP 및 Aimbot 도구. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Dead by Daylight Unlock All",
					intro: "DBD Cheats는 Dead by Daylight Windows PC용 ESP wallhack, radar hack, DBD Aimbot undetected 패키지입니다. Dead by Daylight Unlock All.",
					imageAlt: "DBD Cheats license features overview",
					galleryTitle: "Dead by Daylight Unlock All",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "DBD Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Dead by Daylight Unlock All",
							paragraphs: [
								"DBD Cheats는 Dead by Daylight Windows PC용 ESP wallhack, radar hack, DBD Aimbot undetected 패키지입니다. unlock-all 검색 vs 실제 ESP 및 Aimbot 도구.",
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
								"지원 및 법무: support@dbdcheats.org",
							],
						},
					],
				},
				privacy: {
					title: "개인정보 처리방침 | DBD Cheats",
					description: "개인정보 처리방침 DBD Cheats — ESP wallhack, Aimbot용, Windows PC.",
					h1: "개인정보 처리방침",
					intro: "DBD Cheats는 Dead by Daylight Windows PC용 ESP wallhack, radar hack, DBD Aimbot undetected 패키지입니다. 개인정보 처리방침 dbdcheats.org 및 Dead by Daylight 라이선스용.",
					imageAlt: "DBD Cheats",
					galleryTitle: "DBD Cheats",
					heroImage: "/images/dbd-cheats-aimbot.webp",
					ctaPrimary: "지원 이메일",
					ctaSecondary: "이용 약관 읽기",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "수집하는 정보",
							paragraphs: [
								"DBD Cheats는 Dead by Daylight Windows PC용 ESP wallhack, radar hack, DBD Aimbot undetected 패키지입니다. 연락 이메일, Zadeyo 주문 참조 및 기본 사이트 보안 데이터.",
								"결제 정보는 Zadeyo checkout에서 처리되며 dbdcheats.org에 저장되지 않습니다.",
							],
						},
						{
							h2: "데이터 사용 방법",
							paragraphs: [
								"DBD Cheats는 Dead by Daylight Windows PC용 ESP wallhack, radar hack, DBD Aimbot undetected 패키지입니다. 지원 응답, 주문 해결 및 필요 시 법적 준수.",
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
							],
						},
						{
							h2: "귀하의 권리",
							paragraphs: [
								"지원 및 법무: support@dbdcheats.org",
								"이메일: support@dbdcheats.org",
							],
						},
					],
				},
				refund: {
					title: "환불 정책 | DBD Cheats",
					description: "환불 정책 DBD Cheats — ESP wallhack, Aimbot용, Windows PC.",
					h1: "환불 정책",
					intro: "DBD Cheats는 Dead by Daylight Windows PC용 ESP wallhack, radar hack, DBD Aimbot undetected 패키지입니다. 환불 정책 dbdcheats.org 및 Dead by Daylight 라이선스용.",
					imageAlt: "DBD Cheats",
					galleryTitle: "DBD Cheats",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "지원 이메일",
					ctaSecondary: "개인정보 읽기",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "디지털 배송",
							paragraphs: [
								"DBD Cheats는 Dead by Daylight Windows PC용 ESP wallhack, radar hack, DBD Aimbot undetected 패키지입니다. 연락 이메일, Zadeyo 주문 참조 및 기본 사이트 보안 데이터.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "환불 승인",
							paragraphs: [
								"DBD Cheats는 Dead by Daylight Windows PC용 ESP wallhack, radar hack, DBD Aimbot undetected 패키지입니다. 지원 응답, 주문 해결 및 필요 시 법적 준수.",
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
							],
						},
						{
							h2: "신청 방법",
							paragraphs: [
								"지원 및 법무: support@dbdcheats.org",
								"이메일: support@dbdcheats.org",
							],
						},
					],
				},
				terms: {
					title: "이용 약관 | DBD Cheats",
					description: "이용 약관 DBD Cheats — ESP wallhack, Aimbot용, Windows PC.",
					h1: "이용 약관",
					intro: "DBD Cheats는 Dead by Daylight Windows PC용 ESP wallhack, radar hack, DBD Aimbot undetected 패키지입니다. 이용 약관 dbdcheats.org 및 Dead by Daylight 라이선스용.",
					imageAlt: "DBD Cheats",
					galleryTitle: "DBD Cheats",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "지원 이메일",
					ctaSecondary: "개인정보 읽기",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "약관 동의",
							paragraphs: [
								"DBD Cheats는 Dead by Daylight Windows PC용 ESP wallhack, radar hack, DBD Aimbot undetected 패키지입니다. 연락 이메일, Zadeyo 주문 참조 및 기본 사이트 보안 데이터.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "위험 고지",
							paragraphs: [
								"DBD Cheats는 Dead by Daylight Windows PC용 ESP wallhack, radar hack, DBD Aimbot undetected 패키지입니다. 지원 응답, 주문 해결 및 필요 시 법적 준수.",
								"치트 사용은 Dead by Daylight 팀 약관 위반일 수 있으며 모든 밴 위험은 본인 부담입니다.",
							],
						},
						{
							h2: "정책 변경",
							paragraphs: [
								"지원 및 법무: support@dbdcheats.org",
								"이메일: support@dbdcheats.org",
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
					accent: "Undetected Dead by Daylight作弊",
					accentShort: "DBD Cheats",
					subtitle: "适用于Dead by Daylight Windows PC的ESP wallhack、radar hack和Aimbot — 含Easy Anti-Cheat维护。",
					subtitleShort: "Dead by Daylight PC版ESP、radar与Aimbot",
					buyNow: "立即购买",
					seeFeatures: "查看功能",
				},
				trust: {
					status: "在线",
					statusNote: "DBD Cheats套餐已在Dead by Daylight Windows PC上线。",
					statusShort: "运行中",
					delivery: "即时数字交付",
					platform: "Windows 10 和 11",
					antiCheat: "支持Easy Anti-Cheat维护",
					antiCheatShort: "Easy Anti-Cheat支持",
				},
				product: {
					title: "DBD Cheats",
					addToCart: "加入购物车",
					monthly: "月付",
					lifetime: "终身",
					available: "现已可用",
					gameBadge: "Dead by Daylight",
					platformBadge: "Windows PC",
					statusBadge: "Undetected套餐",
				},
				reviews: {
					title: "玩家评价",
					subtitle: "DBD Cheats 买家近期反馈",
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
					tagline: "Dead by Daylight undetected ESP、wallhack、radar与Aimbot — 通过Zadeyo结账。",
				},
				images: {
					hero: "DBD Cheats hero — ESP and aimbot overlay in Dead by Daylight",
					espWallhack: "Wallhack outlines showing survivors and killers through walls",
					aimbotCombat: "Soft aim assist overlay during a Dead by Daylight trial",
					teamFight: "DBD Cheats combat overlay during a team chase",
					playerEsp: "Player ESP boxes and distance readouts in a Dead by Daylight trial",
					headerArt: "Aimbot view and bone priority controls for Dead by Daylight",
					hacksPackage: "2D radar threat overlay for Dead by Daylight",
					chaseFight: "Aimbot assist during a Dead by Daylight chase",
					battleRoyale: "DBD Cheats in-trial overview for Windows PC",
					trialMap: "ESP markers for generators and hooks in Dead by Daylight",
				},
			},
			pages: {
				home: {
					title: "DBD Cheats 2026 | ESP、Wallhack、Aimbot",
					description: "Dead by Daylight undetected作弊。ESP wallhack、radar hack、Aimbot、Easy Anti-Cheat维护。即时数字交付。",
					h1: "DBD Cheats — Undetected ESP、Wallhack、Aimbot",
					intro: "Dead by Daylight Windows PC undetected套餐：ESP wallhack、radar、Aimbot，含Easy Anti-Cheat维护。",
					imageAlt: "dbd cheats hero ESP aimbot wallhack",
					galleryTitle: "DBD Cheats图库 — ESP、Aimbot、wallhack",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "购买 DBD Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026年选择DBD Cheats的原因",
							paragraphs: [
								"DBD Cheats为Dead by DaylightWindows PC提供ESP wallhack、radar hack和DBD Aimbotundetected套餐。适合在BR和chase中读取敌方小队。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "ESP wallhack、radar、Aimbot单一许可证",
							paragraphs: [
								"DBD Cheats为Dead by DaylightWindows PC提供ESP wallhack、radar hack和DBD Aimbotundetected套餐。一个许可证而非多个工具。",
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
							],
						},
					],
				},
				"dbd-esp": {
					title: "DBD ESP | Player Boxes & Wallhack",
					description: "DBD ESP: 玩家方框、尸体标记和wallhack overlay. 即时数字交付. undetected — Windows PC.",
					h1: "DBD ESP",
					intro: "DBD Cheats为Dead by DaylightWindows PC提供ESP wallhack、radar hack和DBD Aimbotundetected套餐。DBD ESP.",
					imageAlt: "DBD ESP player boxes and distance readouts in a trial",
					galleryTitle: "DBD ESP",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "购买 DBD Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "DBD ESP",
							paragraphs: [
								"DBD Cheats为Dead by DaylightWindows PC提供ESP wallhack、radar hack和DBD Aimbotundetected套餐。玩家方框、尸体标记和wallhack overlay.",
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
								"支持与法务：support@dbdcheats.org",
							],
						},
					],
				},
				"dbd-aimbot": {
					title: "DBD Aimbot | Soft Aim Controls",
					description: "DBD Aimbot: soft aim、FOV和按物种的Aimbot配置. 即时数字交付. undetected — Windows PC.",
					h1: "DBD Aimbot",
					intro: "DBD Cheats为Dead by DaylightWindows PC提供ESP wallhack、radar hack和DBD Aimbotundetected套餐。DBD Aimbot.",
					imageAlt: "DBD Aimbot and soft aim controls on Windows PC",
					galleryTitle: "DBD Aimbot",
					heroImage: "/images/dbd-cheats-aimbot.webp",
					ctaPrimary: "购买 DBD Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "DBD Aimbot",
							paragraphs: [
								"DBD Cheats为Dead by DaylightWindows PC提供ESP wallhack、radar hack和DBD Aimbotundetected套餐。soft aim、FOV和按物种的Aimbot配置.",
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
								"支持与法务：support@dbdcheats.org",
							],
						},
					],
				},
				features: {
					title: "功能 | Full Feature List",
					description: "功能: ESP、soft aim、radar控制. 即时数字交付. undetected — Windows PC.",
					h1: "功能",
					intro: "DBD Cheats为Dead by DaylightWindows PC提供ESP wallhack、radar hack和DBD Aimbotundetected套餐。功能.",
					imageAlt: "DBD Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "功能",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "购买 DBD Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "功能",
							paragraphs: [
								"DBD Cheats为Dead by DaylightWindows PC提供ESP wallhack、radar hack和DBD Aimbotundetected套餐。ESP、soft aim、radar控制.",
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
								"支持与法务：support@dbdcheats.org",
							],
						},
					],
				},
				pricing: {
					title: "价格 | Monthly & Lifetime",
					description: "价格: 月付$35或lifetime $150许可证. 即时数字交付. undetected — Windows PC.",
					h1: "价格",
					intro: "DBD Cheats为Dead by DaylightWindows PC提供ESP wallhack、radar hack和DBD Aimbotundetected套餐。价格.",
					imageAlt: "DBD Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "价格",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "购买 DBD Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "价格",
							paragraphs: [
								"DBD Cheats为Dead by DaylightWindows PC提供ESP wallhack、radar hack和DBD Aimbotundetected套餐。月付$35或lifetime $150许可证.",
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
								"支持与法务：support@dbdcheats.org",
							],
						},
					],
				},
				setup: {
					title: "安装 | PC Setup Guide",
					description: "安装: Windows PC激活和首次启动设置. 即时数字交付. undetected — Windows PC.",
					h1: "安装",
					intro: "DBD Cheats为Dead by DaylightWindows PC提供ESP wallhack、radar hack和DBD Aimbotundetected套餐。安装.",
					imageAlt: "DBD Cheats setup guide screenshot for Windows PC",
					galleryTitle: "安装",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "购买 DBD Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "安装",
							paragraphs: [
								"DBD Cheats为Dead by DaylightWindows PC提供ESP wallhack、radar hack和DBD Aimbotundetected套餐。Windows PC激活和首次启动设置.",
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
								"支持与法务：support@dbdcheats.org",
							],
						},
					],
				},
				updates: {
					title: "更新 | Easy Anti-Cheat Maintenance Log",
					description: "更新: Easy Anti-Cheat补丁状态和rebuild说明. 即时数字交付. undetected — Windows PC.",
					h1: "更新",
					intro: "DBD Cheats为Dead by DaylightWindows PC提供ESP wallhack、radar hack和DBD Aimbotundetected套餐。更新.",
					imageAlt: "DBD Cheats live status after Easy Anti-Cheat and game patches",
					galleryTitle: "更新",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "购买 DBD Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "更新",
							paragraphs: [
								"DBD Cheats为Dead by DaylightWindows PC提供ESP wallhack、radar hack和DBD Aimbotundetected套餐。Easy Anti-Cheat补丁状态和rebuild说明.",
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
								"支持与法务：support@dbdcheats.org",
							],
						},
					],
				},
				faq: {
					title: "常见问题 | Common Answers",
					description: "常见问题: ESP、soft aim、交付和Easy Anti-Cheat问题. 即时数字交付. undetected — Windows PC.",
					h1: "常见问题",
					intro: "DBD Cheats为Dead by DaylightWindows PC提供ESP wallhack、radar hack和DBD Aimbotundetected套餐。常见问题.",
					imageAlt: "DBD Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "常见问题",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "购买 DBD Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "常见问题",
							paragraphs: [
								"DBD Cheats为Dead by DaylightWindows PC提供ESP wallhack、radar hack和DBD Aimbotundetected套餐。ESP、soft aim、交付和Easy Anti-Cheat问题.",
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
								"支持与法务：support@dbdcheats.org",
							],
						},
					],
				},
				support: {
					title: "支持 | Help & Contact",
					description: "支持: 订单帮助和许可证支持联系方式. 即时数字交付. undetected — Windows PC.",
					h1: "支持",
					intro: "DBD Cheats为Dead by DaylightWindows PC提供ESP wallhack、radar hack和DBD Aimbotundetected套餐。支持.",
					imageAlt: "DBD Cheats support page for license and setup help",
					galleryTitle: "支持",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "购买 DBD Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "支持",
							paragraphs: [
								"DBD Cheats为Dead by DaylightWindows PC提供ESP wallhack、radar hack和DBD Aimbotundetected套餐。订单帮助和许可证支持联系方式.",
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
								"支持与法务：support@dbdcheats.org",
							],
						},
					],
				},
				undetected: {
					title: "Undetected作弊 | Easy Anti-Cheat Safe Status",
					description: "Undetected作弊: Easy Anti-Cheat补丁后的undetected维护. 即时数字交付. undetected — Windows PC.",
					h1: "Undetected作弊",
					intro: "DBD Cheats为Dead by DaylightWindows PC提供ESP wallhack、radar hack和DBD Aimbotundetected套餐。Undetected作弊.",
					imageAlt: "DBD Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected作弊",
					heroImage: "/images/dbd-cheats-wallhack.webp",
					ctaPrimary: "购买 DBD Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "Undetected作弊",
							paragraphs: [
								"DBD Cheats为Dead by DaylightWindows PC提供ESP wallhack、radar hack和DBD Aimbotundetected套餐。Easy Anti-Cheat补丁后的undetected维护.",
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
								"支持与法务：support@dbdcheats.org",
							],
						},
					],
				},
				wallhack: {
					title: "Dead by Daylight Wallhack | ESP Visibility",
					description: "Dead by Daylight Wallhack: 玩家、尸体和距离的wallhack ESP. 即时数字交付. undetected — Windows PC.",
					h1: "Dead by Daylight Wallhack",
					intro: "DBD Cheats为Dead by DaylightWindows PC提供ESP wallhack、radar hack和DBD Aimbotundetected套餐。Dead by Daylight Wallhack.",
					imageAlt: "dbd wallhack visibility through walls in a trial",
					galleryTitle: "Dead by Daylight Wallhack",
					heroImage: "/images/dbd-cheats-wallhack.webp",
					ctaPrimary: "购买 DBD Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Dead by Daylight Wallhack",
							paragraphs: [
								"DBD Cheats为Dead by DaylightWindows PC提供ESP wallhack、radar hack和DBD Aimbotundetected套餐。玩家、尸体和距离的wallhack ESP.",
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
								"支持与法务：support@dbdcheats.org",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 侧翼和轮换的2D radar提示. 即时数字交付. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "DBD Cheats为Dead by DaylightWindows PC提供ESP wallhack、radar hack和DBD Aimbotundetected套餐。Radar Hack.",
					imageAlt: "Dead by Daylight 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "购买 DBD Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"DBD Cheats为Dead by DaylightWindows PC提供ESP wallhack、radar hack和DBD Aimbotundetected套餐。侧翼和轮换的2D radar提示.",
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
								"支持与法务：support@dbdcheats.org",
							],
						},
					],
				},
				eac: {
					title: "Easy Anti-Cheat Bypass | Patch Maintenance",
					description: "Easy Anti-Cheat Bypass: Dead by Daylight hacks的Easy Anti-Cheat更新处理方式. 即时数字交付. undetected — Windows PC.",
					h1: "Easy Anti-Cheat Bypass",
					intro: "DBD Cheats为Dead by DaylightWindows PC提供ESP wallhack、radar hack和DBD Aimbotundetected套餐。Easy Anti-Cheat Bypass.",
					imageAlt: "DBD Cheats maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Easy Anti-Cheat Bypass",
					heroImage: "/images/dbd-cheats-aimbot.webp",
					ctaPrimary: "购买 DBD Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Easy Anti-Cheat Bypass",
							paragraphs: [
								"DBD Cheats为Dead by DaylightWindows PC提供ESP wallhack、radar hack和DBD Aimbotundetected套餐。Dead by Daylight hacks的Easy Anti-Cheat更新处理方式.",
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
								"支持与法务：support@dbdcheats.org",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Dead by Daylight作弊 2026 | Buyer Guide",
					description: "Dead by Daylight作弊 2026: checkout前的2026 dbd cheats清单. 即时数字交付. undetected — Windows PC.",
					h1: "Dead by Daylight作弊 2026",
					intro: "DBD Cheats为Dead by DaylightWindows PC提供ESP wallhack、radar hack和DBD Aimbotundetected套餐。Dead by Daylight作弊 2026.",
					imageAlt: "DBD Cheats product overview for Dead by Daylight",
					galleryTitle: "Dead by Daylight作弊 2026",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "购买 DBD Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "Dead by Daylight作弊 2026",
							paragraphs: [
								"DBD Cheats为Dead by DaylightWindows PC提供ESP wallhack、radar hack和DBD Aimbotundetected套餐。checkout前的2026 dbd cheats清单.",
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
								"支持与法务：support@dbdcheats.org",
							],
						},
					],
				},
				hacks: {
					title: "Dead by Daylight作弊 | ESP Aimbot Guide",
					description: "Dead by Daylight作弊: ESP和Aimbot的DBD Cheats支柱. 即时数字交付. undetected — Windows PC.",
					h1: "Dead by Daylight作弊",
					intro: "DBD Cheats为Dead by DaylightWindows PC提供ESP wallhack、radar hack和DBD Aimbotundetected套餐。Dead by Daylight作弊.",
					imageAlt: "DBD Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Dead by Daylight作弊",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "购买 DBD Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Dead by Daylight作弊",
							paragraphs: [
								"DBD Cheats为Dead by DaylightWindows PC提供ESP wallhack、radar hack和DBD Aimbotundetected套餐。ESP和Aimbot的DBD Cheats支柱.",
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
								"支持与法务：support@dbdcheats.org",
							],
						},
					],
				},
				"cheat-download": {
					title: "Dead by Daylight作弊下载 | Instant Access",
					description: "Dead by Daylight作弊下载: 付款后的数字许可证下载. 即时数字交付. undetected — Windows PC.",
					h1: "Dead by Daylight作弊下载",
					intro: "DBD Cheats为Dead by DaylightWindows PC提供ESP wallhack、radar hack和DBD Aimbotundetected套餐。Dead by Daylight作弊下载.",
					imageAlt: "DBD Cheats download and install delivery flow",
					galleryTitle: "Dead by Daylight作弊下载",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "购买 DBD Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Dead by Daylight作弊下载",
							paragraphs: [
								"DBD Cheats为Dead by DaylightWindows PC提供ESP wallhack、radar hack和DBD Aimbotundetected套餐。付款后的数字许可证下载.",
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
								"支持与法务：support@dbdcheats.org",
							],
						},
					],
				},
				"mod-menu": {
					title: "Dead by Daylight修改菜单 | In-Game Toggles",
					description: "Dead by Daylight修改菜单: 客户端内ESP和soft aim开关. 即时数字交付. undetected — Windows PC.",
					h1: "Dead by Daylight修改菜单",
					intro: "DBD Cheats为Dead by DaylightWindows PC提供ESP wallhack、radar hack和DBD Aimbotundetected套餐。Dead by Daylight修改菜单.",
					imageAlt: "DBD Cheats in-game menu controls",
					galleryTitle: "Dead by Daylight修改菜单",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "购买 DBD Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Dead by Daylight修改菜单",
							paragraphs: [
								"DBD Cheats为Dead by DaylightWindows PC提供ESP wallhack、radar hack和DBD Aimbotundetected套餐。客户端内ESP和soft aim开关.",
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
								"支持与法务：support@dbdcheats.org",
							],
						},
					],
				},
				"soft-aim": {
					title: "Dead by Daylight Soft Aim | Smooth Aim Settings",
					description: "Dead by Daylight Soft Aim: Windows PC的流畅soft aim设置. 即时数字交付. undetected — Windows PC.",
					h1: "Dead by Daylight Soft Aim",
					intro: "DBD Cheats为Dead by DaylightWindows PC提供ESP wallhack、radar hack和DBD Aimbotundetected套餐。Dead by Daylight Soft Aim.",
					imageAlt: "Dead by Daylight soft aim FOV and smoothness settings",
					galleryTitle: "Dead by Daylight Soft Aim",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "购买 DBD Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "Dead by Daylight Soft Aim",
							paragraphs: [
								"DBD Cheats为Dead by DaylightWindows PC提供ESP wallhack、radar hack和DBD Aimbotundetected套餐。Windows PC的流畅soft aim设置.",
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
								"支持与法务：support@dbdcheats.org",
							],
						},
					],
				},
				"best-cheats": {
					title: "最佳Dead by Daylight作弊 | Buyer Checklist",
					description: "最佳Dead by Daylight作弊: 购买dbd cheats前应比较的内容. 即时数字交付. undetected — Windows PC.",
					h1: "最佳Dead by Daylight作弊",
					intro: "DBD Cheats为Dead by DaylightWindows PC提供ESP wallhack、radar hack和DBD Aimbotundetected套餐。最佳Dead by Daylight作弊.",
					imageAlt: "DBD Cheats overview for Dead by Daylight on PC",
					galleryTitle: "最佳Dead by Daylight作弊",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "购买 DBD Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "最佳Dead by Daylight作弊",
							paragraphs: [
								"DBD Cheats为Dead by DaylightWindows PC提供ESP wallhack、radar hack和DBD Aimbotundetected套餐。购买dbd cheats前应比较的内容.",
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
								"支持与法务：support@dbdcheats.org",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Dead by Daylight自瞄外挂 | Soft Aim Assist",
					description: "Dead by Daylight自瞄外挂: Dead by Daylight的undetected Aimbot hack assist. 即时数字交付. undetected — Windows PC.",
					h1: "Dead by Daylight自瞄外挂",
					intro: "DBD Cheats为Dead by DaylightWindows PC提供ESP wallhack、radar hack和DBD Aimbotundetected套餐。Dead by Daylight自瞄外挂.",
					imageAlt: "DBD Aimbot hack controls and bone priority",
					galleryTitle: "Dead by Daylight自瞄外挂",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "购买 DBD Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "Dead by Daylight自瞄外挂",
							paragraphs: [
								"DBD Cheats为Dead by DaylightWindows PC提供ESP wallhack、radar hack和DBD Aimbotundetected套餐。Dead by Daylight的undetected Aimbot hack assist.",
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
								"支持与法务：support@dbdcheats.org",
							],
						},
					],
				},
				"esp-hack": {
					title: "DBD ESP外挂 | Boxes & Loot",
					description: "DBD ESP外挂: ESP hack方框、尸体pin和距离. 即时数字交付. undetected — Windows PC.",
					h1: "DBD ESP外挂",
					intro: "DBD Cheats为Dead by DaylightWindows PC提供ESP wallhack、radar hack和DBD Aimbotundetected套餐。DBD ESP外挂.",
					imageAlt: "DBD ESP hack boxes and generator markers",
					galleryTitle: "DBD ESP外挂",
					heroImage: "/images/dbd-cheats-wallhack.webp",
					ctaPrimary: "购买 DBD Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "DBD ESP外挂",
							paragraphs: [
								"DBD Cheats为Dead by DaylightWindows PC提供ESP wallhack、radar hack和DBD Aimbotundetected套餐。ESP hack方框、尸体pin和距离.",
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
								"支持与法务：support@dbdcheats.org",
							],
						},
					],
				},
				"unlock-all": {
					title: "Dead by Daylight Unlock All | What It Means",
					description: "Dead by Daylight Unlock All: unlock-all搜索 vs 真正的ESP和Aimbot工具. 即时数字交付. undetected — Windows PC.",
					h1: "Dead by Daylight Unlock All",
					intro: "DBD Cheats为Dead by DaylightWindows PC提供ESP wallhack、radar hack和DBD Aimbotundetected套餐。Dead by Daylight Unlock All.",
					imageAlt: "DBD Cheats license features overview",
					galleryTitle: "Dead by Daylight Unlock All",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "购买 DBD Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Dead by Daylight Unlock All",
							paragraphs: [
								"DBD Cheats为Dead by DaylightWindows PC提供ESP wallhack、radar hack和DBD Aimbotundetected套餐。unlock-all搜索 vs 真正的ESP和Aimbot工具.",
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
								"支持与法务：support@dbdcheats.org",
							],
						},
					],
				},
				privacy: {
					title: "隐私政策 | DBD Cheats",
					description: "隐私政策 DBD Cheats — ESP wallhack、Aimbot, Windows PC.",
					h1: "隐私政策",
					intro: "DBD Cheats为Dead by DaylightWindows PC提供ESP wallhack、radar hack和DBD Aimbotundetected套餐。隐私政策 适用于 dbdcheats.org 和 Dead by Daylight 许可证。",
					imageAlt: "DBD Cheats",
					galleryTitle: "DBD Cheats",
					heroImage: "/images/dbd-cheats-aimbot.webp",
					ctaPrimary: "邮件支持",
					ctaSecondary: "阅读使用条款",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "我们收集的信息",
							paragraphs: [
								"DBD Cheats为Dead by DaylightWindows PC提供ESP wallhack、radar hack和DBD Aimbotundetected套餐。联系邮箱、Zadeyo 订单参考及基本网站安全数据。",
								"支付详情由 Zadeyo checkout 处理 — 不存储在 dbdcheats.org。",
							],
						},
						{
							h2: "数据使用方式",
							paragraphs: [
								"DBD Cheats为Dead by DaylightWindows PC提供ESP wallhack、radar hack和DBD Aimbotundetected套餐。支持回复、订单处理及必要时的法律合规。",
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
							],
						},
						{
							h2: "您的权利",
							paragraphs: [
								"支持与法务：support@dbdcheats.org",
								"邮箱: support@dbdcheats.org",
							],
						},
					],
				},
				refund: {
					title: "退款政策 | DBD Cheats",
					description: "退款政策 DBD Cheats — ESP wallhack、Aimbot, Windows PC.",
					h1: "退款政策",
					intro: "DBD Cheats为Dead by DaylightWindows PC提供ESP wallhack、radar hack和DBD Aimbotundetected套餐。退款政策 适用于 dbdcheats.org 和 Dead by Daylight 许可证。",
					imageAlt: "DBD Cheats",
					galleryTitle: "DBD Cheats",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "邮件支持",
					ctaSecondary: "阅读隐私政策",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "数字交付",
							paragraphs: [
								"DBD Cheats为Dead by DaylightWindows PC提供ESP wallhack、radar hack和DBD Aimbotundetected套餐。联系邮箱、Zadeyo 订单参考及基本网站安全数据。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "退款批准",
							paragraphs: [
								"DBD Cheats为Dead by DaylightWindows PC提供ESP wallhack、radar hack和DBD Aimbotundetected套餐。支持回复、订单处理及必要时的法律合规。",
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
							],
						},
						{
							h2: "如何申请",
							paragraphs: [
								"支持与法务：support@dbdcheats.org",
								"邮箱: support@dbdcheats.org",
							],
						},
					],
				},
				terms: {
					title: "使用条款 | DBD Cheats",
					description: "使用条款 DBD Cheats — ESP wallhack、Aimbot, Windows PC.",
					h1: "使用条款",
					intro: "DBD Cheats为Dead by DaylightWindows PC提供ESP wallhack、radar hack和DBD Aimbotundetected套餐。使用条款 适用于 dbdcheats.org 和 Dead by Daylight 许可证。",
					imageAlt: "DBD Cheats",
					galleryTitle: "DBD Cheats",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "邮件支持",
					ctaSecondary: "阅读隐私政策",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "接受条款",
							paragraphs: [
								"DBD Cheats为Dead by DaylightWindows PC提供ESP wallhack、radar hack和DBD Aimbotundetected套餐。联系邮箱、Zadeyo 订单参考及基本网站安全数据。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "风险免责声明",
							paragraphs: [
								"DBD Cheats为Dead by DaylightWindows PC提供ESP wallhack、radar hack和DBD Aimbotundetected套餐。支持回复、订单处理及必要时的法律合规。",
								"使用作弊可能违反 Dead by Daylight 团队条款 — 您承担所有封禁风险。",
							],
						},
						{
							h2: "政策变更",
							paragraphs: [
								"支持与法务：support@dbdcheats.org",
								"邮箱: support@dbdcheats.org",
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
					accent: "Undetected dbd cheats",
					accentShort: "DBD Cheats",
					subtitle: "Dead by Daylight Windows PC के लिए ESP wallhack, radar hack और Aimbot — Easy Anti-Cheat maintenance शामिल।",
					subtitleShort: "Dead by Daylight PC के लिए ESP, radar और Aimbot",
					buyNow: "अभी खरीदें",
					seeFeatures: "फ़ीचर्स देखें",
				},
				trust: {
					status: "ऑनलाइन",
					statusNote: "DBD Cheats पैकेज Dead by Daylight Windows PC के लिए सक्रिय है।",
					statusShort: "सक्रिय",
					delivery: "तुरंत डिजिटल डिलीवरी",
					platform: "Windows 10 और 11",
					antiCheat: "Easy Anti-Cheat maintenance समर्थित",
					antiCheatShort: "Easy Anti-Cheat समर्थित",
				},
				product: {
					title: "DBD Cheats",
					addToCart: "कार्ट में जोड़ें",
					monthly: "मासिक",
					lifetime: "लाइफ़टाइम",
					available: "अभी उपलब्ध",
					gameBadge: "Dead by Daylight",
					platformBadge: "Windows PC",
					statusBadge: "Undetected पैकेज",
				},
				reviews: {
					title: "खिलाड़ी क्या कहते हैं",
					subtitle: "DBD Cheats खरीदारों की हाल की प्रतिक्रिया",
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
					tagline: "Dead by Daylight के लिए undetected ESP, wallhack, radar और Aimbot — Zadeyo checkout।",
				},
				images: {
					hero: "DBD Cheats hero — ESP and aimbot overlay in Dead by Daylight",
					espWallhack: "Wallhack outlines showing survivors and killers through walls",
					aimbotCombat: "Soft aim assist overlay during a Dead by Daylight trial",
					teamFight: "DBD Cheats combat overlay during a team chase",
					playerEsp: "Player ESP boxes and distance readouts in a Dead by Daylight trial",
					headerArt: "Aimbot view and bone priority controls for Dead by Daylight",
					hacksPackage: "2D radar threat overlay for Dead by Daylight",
					chaseFight: "Aimbot assist during a Dead by Daylight chase",
					battleRoyale: "DBD Cheats in-trial overview for Windows PC",
					trialMap: "ESP markers for generators and hooks in Dead by Daylight",
				},
			},
			pages: {
				home: {
					title: "DBD Cheats 2026 | ESP, Wallhack और Aimbot",
					description: "Dead by Daylight undetected cheats. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat maintenance. Instant digital delivery.",
					h1: "DBD Cheats — Undetected ESP, Wallhack और Aimbot",
					intro: "Dead by Daylight Windows PC undetected पैकेज: ESP wallhack, radar, Aimbot, Easy Anti-Cheat maintenance सहित.",
					imageAlt: "dbd cheats hero ESP aimbot wallhack",
					galleryTitle: "DBD Cheats gallery — ESP, Aimbot, wallhack",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "DBD Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026 में DBD Cheats क्यों",
							paragraphs: [
								"DBD Cheats Dead by Daylight के लिए Windows PC पर ESP wallhack, radar hack और DBD Aimbot undetected पैकेज देता है। BR और chase में दुश्मन team पढ़ने के लिए आदर्श.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot एक लाइसेंस में",
							paragraphs: [
								"DBD Cheats Dead by Daylight के लिए Windows PC पर ESP wallhack, radar hack और DBD Aimbot undetected पैकेज देता है। अलग टूल्स के बजाय एक लाइसेंस.",
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
							],
						},
					],
				},
				"dbd-esp": {
					title: "DBD ESP | Player Boxes & Wallhack",
					description: "DBD ESP: प्लेयर बॉक्स, generator markers और wallhack overlays. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "DBD ESP",
					intro: "DBD Cheats Dead by Daylight के लिए Windows PC पर ESP wallhack, radar hack और DBD Aimbot undetected पैकेज देता है। DBD ESP.",
					imageAlt: "DBD ESP player boxes and distance readouts in a trial",
					galleryTitle: "DBD ESP",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "DBD Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "DBD ESP",
							paragraphs: [
								"DBD Cheats Dead by Daylight के लिए Windows PC पर ESP wallhack, radar hack और DBD Aimbot undetected पैकेज देता है। प्लेयर बॉक्स, generator markers और wallhack overlays.",
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
								"सहायता: support@dbdcheats.org",
							],
						},
					],
				},
				"dbd-aimbot": {
					title: "DBD Aimbot | Soft Aim Controls",
					description: "DBD Aimbot: soft aim, FOV और प्रजाति-वार Aimbot profiles. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "DBD Aimbot",
					intro: "DBD Cheats Dead by Daylight के लिए Windows PC पर ESP wallhack, radar hack और DBD Aimbot undetected पैकेज देता है। DBD Aimbot.",
					imageAlt: "DBD Aimbot and soft aim controls on Windows PC",
					galleryTitle: "DBD Aimbot",
					heroImage: "/images/dbd-cheats-aimbot.webp",
					ctaPrimary: "DBD Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "DBD Aimbot",
							paragraphs: [
								"DBD Cheats Dead by Daylight के लिए Windows PC पर ESP wallhack, radar hack और DBD Aimbot undetected पैकेज देता है। soft aim, FOV और प्रजाति-वार Aimbot profiles.",
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
								"सहायता: support@dbdcheats.org",
							],
						},
					],
				},
				features: {
					title: "फ़ीचर्स | Full Feature List",
					description: "फ़ीचर्स: ESP, soft aim, radar controls. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "फ़ीचर्स",
					intro: "DBD Cheats Dead by Daylight के लिए Windows PC पर ESP wallhack, radar hack और DBD Aimbot undetected पैकेज देता है। फ़ीचर्स.",
					imageAlt: "DBD Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "फ़ीचर्स",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "DBD Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "फ़ीचर्स",
							paragraphs: [
								"DBD Cheats Dead by Daylight के लिए Windows PC पर ESP wallhack, radar hack और DBD Aimbot undetected पैकेज देता है। ESP, soft aim, radar controls.",
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
								"सहायता: support@dbdcheats.org",
							],
						},
					],
				},
				pricing: {
					title: "कीमत | Monthly & Lifetime",
					description: "कीमत: $35 monthly या $150 lifetime licenses. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "कीमत",
					intro: "DBD Cheats Dead by Daylight के लिए Windows PC पर ESP wallhack, radar hack और DBD Aimbot undetected पैकेज देता है। कीमत.",
					imageAlt: "DBD Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "कीमत",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "DBD Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "कीमत",
							paragraphs: [
								"DBD Cheats Dead by Daylight के लिए Windows PC पर ESP wallhack, radar hack और DBD Aimbot undetected पैकेज देता है। $35 monthly या $150 lifetime licenses.",
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
								"सहायता: support@dbdcheats.org",
							],
						},
					],
				},
				setup: {
					title: "सेटअप | PC Setup Guide",
					description: "सेटअप: Windows PC activation और first-launch setup. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "सेटअप",
					intro: "DBD Cheats Dead by Daylight के लिए Windows PC पर ESP wallhack, radar hack और DBD Aimbot undetected पैकेज देता है। सेटअप.",
					imageAlt: "DBD Cheats setup guide screenshot for Windows PC",
					galleryTitle: "सेटअप",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "DBD Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "सेटअप",
							paragraphs: [
								"DBD Cheats Dead by Daylight के लिए Windows PC पर ESP wallhack, radar hack और DBD Aimbot undetected पैकेज देता है। Windows PC activation और first-launch setup.",
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
								"सहायता: support@dbdcheats.org",
							],
						},
					],
				},
				updates: {
					title: "अपडेट | Easy Anti-Cheat Maintenance Log",
					description: "अपडेट: Easy Anti-Cheat patch status और rebuild notes. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "अपडेट",
					intro: "DBD Cheats Dead by Daylight के लिए Windows PC पर ESP wallhack, radar hack और DBD Aimbot undetected पैकेज देता है। अपडेट.",
					imageAlt: "DBD Cheats live status after Easy Anti-Cheat and game patches",
					galleryTitle: "अपडेट",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "DBD Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "अपडेट",
							paragraphs: [
								"DBD Cheats Dead by Daylight के लिए Windows PC पर ESP wallhack, radar hack और DBD Aimbot undetected पैकेज देता है। Easy Anti-Cheat patch status और rebuild notes.",
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
								"सहायता: support@dbdcheats.org",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery और Easy Anti-Cheat questions. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "FAQ",
					intro: "DBD Cheats Dead by Daylight के लिए Windows PC पर ESP wallhack, radar hack और DBD Aimbot undetected पैकेज देता है। FAQ.",
					imageAlt: "DBD Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "DBD Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"DBD Cheats Dead by Daylight के लिए Windows PC पर ESP wallhack, radar hack और DBD Aimbot undetected पैकेज देता है। ESP, soft aim, delivery और Easy Anti-Cheat questions.",
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
								"सहायता: support@dbdcheats.org",
							],
						},
					],
				},
				support: {
					title: "सहायता | Help & Contact",
					description: "सहायता: order help और license support contact. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "सहायता",
					intro: "DBD Cheats Dead by Daylight के लिए Windows PC पर ESP wallhack, radar hack और DBD Aimbot undetected पैकेज देता है। सहायता.",
					imageAlt: "DBD Cheats support page for license and setup help",
					galleryTitle: "सहायता",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "DBD Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "सहायता",
							paragraphs: [
								"DBD Cheats Dead by Daylight के लिए Windows PC पर ESP wallhack, radar hack और DBD Aimbot undetected पैकेज देता है। order help और license support contact.",
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
								"सहायता: support@dbdcheats.org",
							],
						},
					],
				},
				undetected: {
					title: "Undetected cheats | Easy Anti-Cheat Safe Status",
					description: "Undetected cheats: Easy Anti-Cheat patches के बाद undetected maintenance. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Undetected cheats",
					intro: "DBD Cheats Dead by Daylight के लिए Windows PC पर ESP wallhack, radar hack और DBD Aimbot undetected पैकेज देता है। Undetected cheats.",
					imageAlt: "DBD Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected cheats",
					heroImage: "/images/dbd-cheats-wallhack.webp",
					ctaPrimary: "DBD Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "Undetected cheats",
							paragraphs: [
								"DBD Cheats Dead by Daylight के लिए Windows PC पर ESP wallhack, radar hack और DBD Aimbot undetected पैकेज देता है। Easy Anti-Cheat patches के बाद undetected maintenance.",
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
								"सहायता: support@dbdcheats.org",
							],
						},
					],
				},
				wallhack: {
					title: "Dead by Daylight Wallhack | ESP Visibility",
					description: "Dead by Daylight Wallhack: players, generators और distance के लिए wallhack ESP. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Dead by Daylight Wallhack",
					intro: "DBD Cheats Dead by Daylight के लिए Windows PC पर ESP wallhack, radar hack और DBD Aimbot undetected पैकेज देता है। Dead by Daylight Wallhack.",
					imageAlt: "dbd wallhack visibility through walls in a trial",
					galleryTitle: "Dead by Daylight Wallhack",
					heroImage: "/images/dbd-cheats-wallhack.webp",
					ctaPrimary: "DBD Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Dead by Daylight Wallhack",
							paragraphs: [
								"DBD Cheats Dead by Daylight के लिए Windows PC पर ESP wallhack, radar hack और DBD Aimbot undetected पैकेज देता है। players, generators और distance के लिए wallhack ESP.",
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
								"सहायता: support@dbdcheats.org",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: flanks और rotations के लिए 2D radar cues. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "DBD Cheats Dead by Daylight के लिए Windows PC पर ESP wallhack, radar hack और DBD Aimbot undetected पैकेज देता है। Radar Hack.",
					imageAlt: "Dead by Daylight 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "DBD Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"DBD Cheats Dead by Daylight के लिए Windows PC पर ESP wallhack, radar hack और DBD Aimbot undetected पैकेज देता है। flanks और rotations के लिए 2D radar cues.",
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
								"सहायता: support@dbdcheats.org",
							],
						},
					],
				},
				eac: {
					title: "Easy Anti-Cheat Bypass | Patch Maintenance",
					description: "Easy Anti-Cheat Bypass: Dead by Daylight hacks के लिए Easy Anti-Cheat updates कैसे handle होते हैं. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Easy Anti-Cheat Bypass",
					intro: "DBD Cheats Dead by Daylight के लिए Windows PC पर ESP wallhack, radar hack और DBD Aimbot undetected पैकेज देता है। Easy Anti-Cheat Bypass.",
					imageAlt: "DBD Cheats maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Easy Anti-Cheat Bypass",
					heroImage: "/images/dbd-cheats-aimbot.webp",
					ctaPrimary: "DBD Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Easy Anti-Cheat Bypass",
							paragraphs: [
								"DBD Cheats Dead by Daylight के लिए Windows PC पर ESP wallhack, radar hack और DBD Aimbot undetected पैकेज देता है। Dead by Daylight hacks के लिए Easy Anti-Cheat updates कैसे handle होते हैं.",
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
								"सहायता: support@dbdcheats.org",
							],
						},
					],
				},
				"cheats-2026": {
					title: "DBD Cheats 2026 | Buyer Guide",
					description: "DBD Cheats 2026: checkout से पहले 2026 dbd cheats checklist. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "DBD Cheats 2026",
					intro: "DBD Cheats Dead by Daylight के लिए Windows PC पर ESP wallhack, radar hack और DBD Aimbot undetected पैकेज देता है। DBD Cheats 2026.",
					imageAlt: "DBD Cheats product overview for Dead by Daylight",
					galleryTitle: "DBD Cheats 2026",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "DBD Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "DBD Cheats 2026",
							paragraphs: [
								"DBD Cheats Dead by Daylight के लिए Windows PC पर ESP wallhack, radar hack और DBD Aimbot undetected पैकेज देता है। checkout से पहले 2026 dbd cheats checklist.",
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
								"सहायता: support@dbdcheats.org",
							],
						},
					],
				},
				hacks: {
					title: "DBD Cheats | ESP Aimbot Guide",
					description: "DBD Cheats: ESP और Aimbot के लिए DBD Cheats pillar. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "DBD Cheats",
					intro: "DBD Cheats Dead by Daylight के लिए Windows PC पर ESP wallhack, radar hack और DBD Aimbot undetected पैकेज देता है। DBD Cheats.",
					imageAlt: "DBD Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "DBD Cheats",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "DBD Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "DBD Cheats",
							paragraphs: [
								"DBD Cheats Dead by Daylight के लिए Windows PC पर ESP wallhack, radar hack और DBD Aimbot undetected पैकेज देता है। ESP और Aimbot के लिए DBD Cheats pillar.",
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
								"सहायता: support@dbdcheats.org",
							],
						},
					],
				},
				"cheat-download": {
					title: "Dead by Daylight Cheat Download | Instant Access",
					description: "Dead by Daylight Cheat Download: payment के बाद digital license download. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Dead by Daylight Cheat Download",
					intro: "DBD Cheats Dead by Daylight के लिए Windows PC पर ESP wallhack, radar hack और DBD Aimbot undetected पैकेज देता है। Dead by Daylight Cheat Download.",
					imageAlt: "DBD Cheats download and install delivery flow",
					galleryTitle: "Dead by Daylight Cheat Download",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "DBD Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Dead by Daylight Cheat Download",
							paragraphs: [
								"DBD Cheats Dead by Daylight के लिए Windows PC पर ESP wallhack, radar hack और DBD Aimbot undetected पैकेज देता है। payment के बाद digital license download.",
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
								"सहायता: support@dbdcheats.org",
							],
						},
					],
				},
				"mod-menu": {
					title: "Dead by Daylight Mod Menu | In-Game Toggles",
					description: "Dead by Daylight Mod Menu: in-client ESP और soft aim toggles. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Dead by Daylight Mod Menu",
					intro: "DBD Cheats Dead by Daylight के लिए Windows PC पर ESP wallhack, radar hack और DBD Aimbot undetected पैकेज देता है। Dead by Daylight Mod Menu.",
					imageAlt: "DBD Cheats in-game menu controls",
					galleryTitle: "Dead by Daylight Mod Menu",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "DBD Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Dead by Daylight Mod Menu",
							paragraphs: [
								"DBD Cheats Dead by Daylight के लिए Windows PC पर ESP wallhack, radar hack और DBD Aimbot undetected पैकेज देता है। in-client ESP और soft aim toggles.",
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
								"सहायता: support@dbdcheats.org",
							],
						},
					],
				},
				"soft-aim": {
					title: "Dead by Daylight Soft Aim | Smooth Aim Settings",
					description: "Dead by Daylight Soft Aim: Windows PC के लिए smooth soft aim settings. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Dead by Daylight Soft Aim",
					intro: "DBD Cheats Dead by Daylight के लिए Windows PC पर ESP wallhack, radar hack और DBD Aimbot undetected पैकेज देता है। Dead by Daylight Soft Aim.",
					imageAlt: "Dead by Daylight soft aim FOV and smoothness settings",
					galleryTitle: "Dead by Daylight Soft Aim",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "DBD Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "Dead by Daylight Soft Aim",
							paragraphs: [
								"DBD Cheats Dead by Daylight के लिए Windows PC पर ESP wallhack, radar hack और DBD Aimbot undetected पैकेज देता है। Windows PC के लिए smooth soft aim settings.",
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
								"सहायता: support@dbdcheats.org",
							],
						},
					],
				},
				"best-cheats": {
					title: "सर्वश्रेष्ठ DBD Cheats | Buyer Checklist",
					description: "सर्वश्रेष्ठ DBD Cheats: dbd cheats खरीदने से पहले क्या compare करें. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "सर्वश्रेष्ठ DBD Cheats",
					intro: "DBD Cheats Dead by Daylight के लिए Windows PC पर ESP wallhack, radar hack और DBD Aimbot undetected पैकेज देता है। सर्वश्रेष्ठ DBD Cheats.",
					imageAlt: "DBD Cheats overview for Dead by Daylight on PC",
					galleryTitle: "सर्वश्रेष्ठ DBD Cheats",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "DBD Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "सर्वश्रेष्ठ DBD Cheats",
							paragraphs: [
								"DBD Cheats Dead by Daylight के लिए Windows PC पर ESP wallhack, radar hack और DBD Aimbot undetected पैकेज देता है। dbd cheats खरीदने से पहले क्या compare करें.",
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
								"सहायता: support@dbdcheats.org",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "DBD Aimbot Hack | Soft Aim Assist",
					description: "DBD Aimbot Hack: Dead by Daylight के लिए undetected Aimbot hack assist. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "DBD Aimbot Hack",
					intro: "DBD Cheats Dead by Daylight के लिए Windows PC पर ESP wallhack, radar hack और DBD Aimbot undetected पैकेज देता है। DBD Aimbot Hack.",
					imageAlt: "DBD Aimbot hack controls and bone priority",
					galleryTitle: "DBD Aimbot Hack",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "DBD Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "DBD Aimbot Hack",
							paragraphs: [
								"DBD Cheats Dead by Daylight के लिए Windows PC पर ESP wallhack, radar hack और DBD Aimbot undetected पैकेज देता है। Dead by Daylight के लिए undetected Aimbot hack assist.",
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
								"सहायता: support@dbdcheats.org",
							],
						},
					],
				},
				"esp-hack": {
					title: "DBD ESP Hack | Boxes & Loot",
					description: "DBD ESP Hack: ESP hack boxes, generator pins और distance. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "DBD ESP Hack",
					intro: "DBD Cheats Dead by Daylight के लिए Windows PC पर ESP wallhack, radar hack और DBD Aimbot undetected पैकेज देता है। DBD ESP Hack.",
					imageAlt: "DBD ESP hack boxes and generator markers",
					galleryTitle: "DBD ESP Hack",
					heroImage: "/images/dbd-cheats-wallhack.webp",
					ctaPrimary: "DBD Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "DBD ESP Hack",
							paragraphs: [
								"DBD Cheats Dead by Daylight के लिए Windows PC पर ESP wallhack, radar hack और DBD Aimbot undetected पैकेज देता है। ESP hack boxes, generator pins और distance.",
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
								"सहायता: support@dbdcheats.org",
							],
						},
					],
				},
				"unlock-all": {
					title: "Dead by Daylight Unlock All | What It Means",
					description: "Dead by Daylight Unlock All: unlock-all searches vs real ESP और Aimbot tools. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Dead by Daylight Unlock All",
					intro: "DBD Cheats Dead by Daylight के लिए Windows PC पर ESP wallhack, radar hack और DBD Aimbot undetected पैकेज देता है। Dead by Daylight Unlock All.",
					imageAlt: "DBD Cheats license features overview",
					galleryTitle: "Dead by Daylight Unlock All",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "DBD Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Dead by Daylight Unlock All",
							paragraphs: [
								"DBD Cheats Dead by Daylight के लिए Windows PC पर ESP wallhack, radar hack और DBD Aimbot undetected पैकेज देता है। unlock-all searches vs real ESP और Aimbot tools.",
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
								"सहायता: support@dbdcheats.org",
							],
						},
					],
				},
				privacy: {
					title: "गोपनीयता नीति | DBD Cheats",
					description: "गोपनीयता नीति DBD Cheats — ESP wallhack, Aimbot के लिए, Windows PC.",
					h1: "गोपनीयता नीति",
					intro: "DBD Cheats Dead by Daylight के लिए Windows PC पर ESP wallhack, radar hack और DBD Aimbot undetected पैकेज देता है। गोपनीयता नीति dbdcheats.org और Dead by Daylight लाइसेंस के लिए।",
					imageAlt: "DBD Cheats",
					galleryTitle: "DBD Cheats",
					heroImage: "/images/dbd-cheats-aimbot.webp",
					ctaPrimary: "सहायता ईमेल",
					ctaSecondary: "शर्तें पढ़ें",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "हम जो जानकारी एकत्र करते हैं",
							paragraphs: [
								"DBD Cheats Dead by Daylight के लिए Windows PC पर ESP wallhack, radar hack और DBD Aimbot undetected पैकेज देता है। संपर्क ईमेल, Zadeyo ऑर्डर संदर्भ और बुनियादी साइट सुरक्षा डेटा।",
								"भुगतान विवरण Zadeyo checkout द्वारा संसाधित — dbdcheats.org पर संग्रहीत नहीं।",
							],
						},
						{
							h2: "हम डेटा का उपयोग कैसे करते हैं",
							paragraphs: [
								"DBD Cheats Dead by Daylight के लिए Windows PC पर ESP wallhack, radar hack और DBD Aimbot undetected पैकेज देता है। सहायता प्रतिक्रिया, ऑर्डर समाधान और आवश्यकता पर कानूनी अनुपालन।",
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
							],
						},
						{
							h2: "आपके अधिकार",
							paragraphs: [
								"सहायता: support@dbdcheats.org",
								"ईमेल: support@dbdcheats.org",
							],
						},
					],
				},
				refund: {
					title: "रिफंड नीति | DBD Cheats",
					description: "रिफंड नीति DBD Cheats — ESP wallhack, Aimbot के लिए, Windows PC.",
					h1: "रिफंड नीति",
					intro: "DBD Cheats Dead by Daylight के लिए Windows PC पर ESP wallhack, radar hack और DBD Aimbot undetected पैकेज देता है। रिफंड नीति dbdcheats.org और Dead by Daylight लाइसेंस के लिए।",
					imageAlt: "DBD Cheats",
					galleryTitle: "DBD Cheats",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "सहायता ईमेल",
					ctaSecondary: "गोपनीयता पढ़ें",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "डिजिटल डिलीवरी",
							paragraphs: [
								"DBD Cheats Dead by Daylight के लिए Windows PC पर ESP wallhack, radar hack और DBD Aimbot undetected पैकेज देता है। संपर्क ईमेल, Zadeyo ऑर्डर संदर्भ और बुनियादी साइट सुरक्षा डेटा।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "रिफंड स्वीकृति",
							paragraphs: [
								"DBD Cheats Dead by Daylight के लिए Windows PC पर ESP wallhack, radar hack और DBD Aimbot undetected पैकेज देता है। सहायता प्रतिक्रिया, ऑर्डर समाधान और आवश्यकता पर कानूनी अनुपालन।",
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
							],
						},
						{
							h2: "कैसे अनुरोध करें",
							paragraphs: [
								"सहायता: support@dbdcheats.org",
								"ईमेल: support@dbdcheats.org",
							],
						},
					],
				},
				terms: {
					title: "उपयोग की शर्तें | DBD Cheats",
					description: "उपयोग की शर्तें DBD Cheats — ESP wallhack, Aimbot के लिए, Windows PC.",
					h1: "उपयोग की शर्तें",
					intro: "DBD Cheats Dead by Daylight के लिए Windows PC पर ESP wallhack, radar hack और DBD Aimbot undetected पैकेज देता है। उपयोग की शर्तें dbdcheats.org और Dead by Daylight लाइसेंस के लिए।",
					imageAlt: "DBD Cheats",
					galleryTitle: "DBD Cheats",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "सहायता ईमेल",
					ctaSecondary: "गोपनीयता पढ़ें",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "शर्तों की स्वीकृति",
							paragraphs: [
								"DBD Cheats Dead by Daylight के लिए Windows PC पर ESP wallhack, radar hack और DBD Aimbot undetected पैकेज देता है। संपर्क ईमेल, Zadeyo ऑर्डर संदर्भ और बुनियादी साइट सुरक्षा डेटा।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "जोखिम अस्वीकरण",
							paragraphs: [
								"DBD Cheats Dead by Daylight के लिए Windows PC पर ESP wallhack, radar hack और DBD Aimbot undetected पैकेज देता है। सहायता प्रतिक्रिया, ऑर्डर समाधान और आवश्यकता पर कानूनी अनुपालन।",
								"cheat का उपयोग Dead by Daylight टीम की शर्तों का उल्लंघन हो सकता है — आप सभी ban जोखिम स्वीकार करते हैं।",
							],
						},
						{
							h2: "नीति परिवर्तन",
							paragraphs: [
								"सहायता: support@dbdcheats.org",
								"ईमेल: support@dbdcheats.org",
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
					accent: "Cheat Dead by Daylight undetected",
					accentShort: "DBD Cheats",
					subtitle: "ESP wallhack, radar hack, dan Aimbot untuk Dead by Daylight di PC Windows — pemeliharaan Easy Anti-Cheat termasuk.",
					subtitleShort: "ESP, radar & Aimbot untuk Dead by Daylight PC",
					buyNow: "Beli sekarang",
					seeFeatures: "Lihat fitur",
				},
				trust: {
					status: "Online",
					statusNote: "Paket DBD Cheats aktif untuk Dead by Daylight di PC Windows.",
					statusShort: "Aktif",
					delivery: "Pengiriman digital instan",
					platform: "Windows 10 & 11",
					antiCheat: "Pemeliharaan Easy Anti-Cheat didukung",
					antiCheatShort: "Easy Anti-Cheat didukung",
				},
				product: {
					title: "DBD Cheats",
					addToCart: "Tambah ke keranjang",
					monthly: "Bulanan",
					lifetime: "Seumur hidup",
					available: "Tersedia sekarang",
					gameBadge: "Dead by Daylight",
					platformBadge: "Windows PC",
					statusBadge: "Paket undetected",
				},
				reviews: {
					title: "Apa kata pemain",
					subtitle: "Umpan balik terbaru dari pembeli DBD Cheats",
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
					tagline: "ESP, wallhack, radar, dan Aimbot undetected untuk Dead by Daylight — checkout via Zadeyo.",
				},
				images: {
					hero: "DBD Cheats hero — ESP and aimbot overlay in Dead by Daylight",
					espWallhack: "Wallhack outlines showing survivors and killers through walls",
					aimbotCombat: "Soft aim assist overlay during a Dead by Daylight trial",
					teamFight: "DBD Cheats combat overlay during a team chase",
					playerEsp: "Player ESP boxes and distance readouts in a Dead by Daylight trial",
					headerArt: "Aimbot view and bone priority controls for Dead by Daylight",
					hacksPackage: "2D radar threat overlay for Dead by Daylight",
					chaseFight: "Aimbot assist during a Dead by Daylight chase",
					battleRoyale: "DBD Cheats in-trial overview for Windows PC",
					trialMap: "ESP markers for generators and hooks in Dead by Daylight",
				},
			},
			pages: {
				home: {
					title: "DBD Cheats 2026 | ESP, Wallhack & Aimbot",
					description: "Cheat Dead by Daylight undetected untuk Dead by Daylight di PC. ESP wallhack, radar hack, Aimbot, pemeliharaan Easy Anti-Cheat. Pengiriman digital instan.",
					h1: "DBD Cheats — Undetected ESP, Wallhack & Aimbot",
					intro: "Paket undetected Dead by Daylight di Windows PC: ESP wallhack, radar, Aimbot dengan pemeliharaan Easy Anti-Cheat.",
					imageAlt: "DBD ESP player tags hack",
					galleryTitle: "Galeri DBD Cheats — ESP, Aimbot, wallhack",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "Beli DBD Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Mengapa DBD Cheats di 2026",
							paragraphs: [
								"DBD Cheats menyediakan ESP wallhack, radar hack, dan DBD Aimbot undetected untuk Dead by Daylight di PC Windows. Ideal membaca team musuh di BR dan chase.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot dalam satu lisensi",
							paragraphs: [
								"DBD Cheats menyediakan ESP wallhack, radar hack, dan DBD Aimbot undetected untuk Dead by Daylight di PC Windows. Satu lisensi alih-alih alat terpisah.",
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
							],
						},
					],
				},
				"dbd-esp": {
					title: "ESP Dead by Daylight | Player Boxes & Wallhack",
					description: "ESP Dead by Daylight: kotak pemain, penanda bangkai, dan overlay wallhack. pengiriman digital instan. undetected — PC Windows.",
					h1: "ESP Dead by Daylight",
					intro: "DBD Cheats menyediakan ESP wallhack, radar hack, dan DBD Aimbot undetected untuk Dead by Daylight di PC Windows. ESP Dead by Daylight.",
					imageAlt: "DBD ESP player boxes and distance readouts in a trial",
					galleryTitle: "ESP Dead by Daylight",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "Beli DBD Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "ESP Dead by Daylight",
							paragraphs: [
								"DBD Cheats menyediakan ESP wallhack, radar hack, dan DBD Aimbot undetected untuk Dead by Daylight di PC Windows. kotak pemain, penanda bangkai, dan overlay wallhack.",
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
								"support@dbdcheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				"dbd-aimbot": {
					title: "Aimbot Dead by Daylight | Soft Aim Controls",
					description: "Aimbot Dead by Daylight: soft aim, FOV, dan profil Aimbot per spesies. pengiriman digital instan. undetected — PC Windows.",
					h1: "Aimbot Dead by Daylight",
					intro: "DBD Cheats menyediakan ESP wallhack, radar hack, dan DBD Aimbot undetected untuk Dead by Daylight di PC Windows. Aimbot Dead by Daylight.",
					imageAlt: "DBD Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Dead by Daylight",
					heroImage: "/images/dbd-cheats-aimbot.webp",
					ctaPrimary: "Beli DBD Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Aimbot Dead by Daylight",
							paragraphs: [
								"DBD Cheats menyediakan ESP wallhack, radar hack, dan DBD Aimbot undetected untuk Dead by Daylight di PC Windows. soft aim, FOV, dan profil Aimbot per spesies.",
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
								"support@dbdcheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				features: {
					title: "Fitur | Full Feature List",
					description: "Fitur: ESP, soft aim, kontrol radar. pengiriman digital instan. undetected — PC Windows.",
					h1: "Fitur",
					intro: "DBD Cheats menyediakan ESP wallhack, radar hack, dan DBD Aimbot undetected untuk Dead by Daylight di PC Windows. Fitur.",
					imageAlt: "DBD Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Fitur",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "Beli DBD Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Fitur",
							paragraphs: [
								"DBD Cheats menyediakan ESP wallhack, radar hack, dan DBD Aimbot undetected untuk Dead by Daylight di PC Windows. ESP, soft aim, kontrol radar.",
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
								"support@dbdcheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				pricing: {
					title: "Harga | Monthly & Lifetime",
					description: "Harga: lisensi $35 bulanan atau $150 lifetime. pengiriman digital instan. undetected — PC Windows.",
					h1: "Harga",
					intro: "DBD Cheats menyediakan ESP wallhack, radar hack, dan DBD Aimbot undetected untuk Dead by Daylight di PC Windows. Harga.",
					imageAlt: "DBD Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Harga",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "Beli DBD Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Harga",
							paragraphs: [
								"DBD Cheats menyediakan ESP wallhack, radar hack, dan DBD Aimbot undetected untuk Dead by Daylight di PC Windows. lisensi $35 bulanan atau $150 lifetime.",
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
								"support@dbdcheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				setup: {
					title: "Setup | PC Setup Guide",
					description: "Setup: aktivasi Windows PC dan setup peluncuran pertama. pengiriman digital instan. undetected — PC Windows.",
					h1: "Setup",
					intro: "DBD Cheats menyediakan ESP wallhack, radar hack, dan DBD Aimbot undetected untuk Dead by Daylight di PC Windows. Setup.",
					imageAlt: "DBD Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Setup",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "Beli DBD Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Setup",
							paragraphs: [
								"DBD Cheats menyediakan ESP wallhack, radar hack, dan DBD Aimbot undetected untuk Dead by Daylight di PC Windows. aktivasi Windows PC dan setup peluncuran pertama.",
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
								"support@dbdcheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				updates: {
					title: "Pembaruan | Easy Anti-Cheat Maintenance Log",
					description: "Pembaruan: status patch Easy Anti-Cheat dan catatan rebuild. pengiriman digital instan. undetected — PC Windows.",
					h1: "Pembaruan",
					intro: "DBD Cheats menyediakan ESP wallhack, radar hack, dan DBD Aimbot undetected untuk Dead by Daylight di PC Windows. Pembaruan.",
					imageAlt: "DBD Cheats live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Pembaruan",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "Beli DBD Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "Pembaruan",
							paragraphs: [
								"DBD Cheats menyediakan ESP wallhack, radar hack, dan DBD Aimbot undetected untuk Dead by Daylight di PC Windows. status patch Easy Anti-Cheat dan catatan rebuild.",
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
								"support@dbdcheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: pertanyaan ESP, soft aim, pengiriman, dan Easy Anti-Cheat. pengiriman digital instan. undetected — PC Windows.",
					h1: "FAQ",
					intro: "DBD Cheats menyediakan ESP wallhack, radar hack, dan DBD Aimbot undetected untuk Dead by Daylight di PC Windows. FAQ.",
					imageAlt: "DBD Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "Beli DBD Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"DBD Cheats menyediakan ESP wallhack, radar hack, dan DBD Aimbot undetected untuk Dead by Daylight di PC Windows. pertanyaan ESP, soft aim, pengiriman, dan Easy Anti-Cheat.",
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
								"support@dbdcheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				support: {
					title: "Dukungan | Help & Contact",
					description: "Dukungan: bantuan pesanan dan kontak dukungan lisensi. pengiriman digital instan. undetected — PC Windows.",
					h1: "Dukungan",
					intro: "DBD Cheats menyediakan ESP wallhack, radar hack, dan DBD Aimbot undetected untuk Dead by Daylight di PC Windows. Dukungan.",
					imageAlt: "DBD Cheats support page for license and setup help",
					galleryTitle: "Dukungan",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "Beli DBD Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Dukungan",
							paragraphs: [
								"DBD Cheats menyediakan ESP wallhack, radar hack, dan DBD Aimbot undetected untuk Dead by Daylight di PC Windows. bantuan pesanan dan kontak dukungan lisensi.",
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
								"support@dbdcheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				undetected: {
					title: "Cheat undetected | Easy Anti-Cheat Safe Status",
					description: "Cheat undetected: pemeliharaan undetected setelah patch Easy Anti-Cheat. pengiriman digital instan. undetected — PC Windows.",
					h1: "Cheat undetected",
					intro: "DBD Cheats menyediakan ESP wallhack, radar hack, dan DBD Aimbot undetected untuk Dead by Daylight di PC Windows. Cheat undetected.",
					imageAlt: "DBD Cheats undetected status overview for Windows PC",
					galleryTitle: "Cheat undetected",
					heroImage: "/images/dbd-cheats-wallhack.webp",
					ctaPrimary: "Beli DBD Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "Cheat undetected",
							paragraphs: [
								"DBD Cheats menyediakan ESP wallhack, radar hack, dan DBD Aimbot undetected untuk Dead by Daylight di PC Windows. pemeliharaan undetected setelah patch Easy Anti-Cheat.",
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
								"support@dbdcheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				wallhack: {
					title: "Dead by Daylight Wallhack | ESP Visibility",
					description: "Dead by Daylight Wallhack: wallhack ESP untuk pemain, bangkai, dan jarak. pengiriman digital instan. undetected — PC Windows.",
					h1: "Dead by Daylight Wallhack",
					intro: "DBD Cheats menyediakan ESP wallhack, radar hack, dan DBD Aimbot undetected untuk Dead by Daylight di PC Windows. Dead by Daylight Wallhack.",
					imageAlt: "dbd wallhack visibility through walls in a trial",
					galleryTitle: "Dead by Daylight Wallhack",
					heroImage: "/images/dbd-cheats-wallhack.webp",
					ctaPrimary: "Beli DBD Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Dead by Daylight Wallhack",
							paragraphs: [
								"DBD Cheats menyediakan ESP wallhack, radar hack, dan DBD Aimbot undetected untuk Dead by Daylight di PC Windows. wallhack ESP untuk pemain, bangkai, dan jarak.",
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
								"support@dbdcheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: petunjuk radar 2D untuk flanking dan rotasi. pengiriman digital instan. undetected — PC Windows.",
					h1: "Radar hack",
					intro: "DBD Cheats menyediakan ESP wallhack, radar hack, dan DBD Aimbot undetected untuk Dead by Daylight di PC Windows. Radar hack.",
					imageAlt: "Dead by Daylight 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "Beli DBD Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"DBD Cheats menyediakan ESP wallhack, radar hack, dan DBD Aimbot undetected untuk Dead by Daylight di PC Windows. petunjuk radar 2D untuk flanking dan rotasi.",
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
								"support@dbdcheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Patch Maintenance",
					description: "Bypass Easy Anti-Cheat: cara pembaruan Easy Anti-Cheat ditangani untuk Dead by Daylight hacks. pengiriman digital instan. undetected — PC Windows.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "DBD Cheats menyediakan ESP wallhack, radar hack, dan DBD Aimbot undetected untuk Dead by Daylight di PC Windows. Bypass Easy Anti-Cheat.",
					imageAlt: "DBD Cheats maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/dbd-cheats-aimbot.webp",
					ctaPrimary: "Beli DBD Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"DBD Cheats menyediakan ESP wallhack, radar hack, dan DBD Aimbot undetected untuk Dead by Daylight di PC Windows. cara pembaruan Easy Anti-Cheat ditangani untuk Dead by Daylight hacks.",
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
								"support@dbdcheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheat Dead by Daylight 2026 | Buyer Guide",
					description: "Cheat Dead by Daylight 2026: checklist dbd cheats 2026 sebelum checkout. pengiriman digital instan. undetected — PC Windows.",
					h1: "Cheat Dead by Daylight 2026",
					intro: "DBD Cheats menyediakan ESP wallhack, radar hack, dan DBD Aimbot undetected untuk Dead by Daylight di PC Windows. Cheat Dead by Daylight 2026.",
					imageAlt: "DBD Cheats product overview for Dead by Daylight",
					galleryTitle: "Cheat Dead by Daylight 2026",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "Beli DBD Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "Cheat Dead by Daylight 2026",
							paragraphs: [
								"DBD Cheats menyediakan ESP wallhack, radar hack, dan DBD Aimbot undetected untuk Dead by Daylight di PC Windows. checklist dbd cheats 2026 sebelum checkout.",
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
								"support@dbdcheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				hacks: {
					title: "Cheat Dead by Daylight | ESP Aimbot Guide",
					description: "Cheat Dead by Daylight: pilar DBD Cheats untuk ESP dan Aimbot. pengiriman digital instan. undetected — PC Windows.",
					h1: "Cheat Dead by Daylight",
					intro: "DBD Cheats menyediakan ESP wallhack, radar hack, dan DBD Aimbot undetected untuk Dead by Daylight di PC Windows. Cheat Dead by Daylight.",
					imageAlt: "DBD Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Cheat Dead by Daylight",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "Beli DBD Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheat Dead by Daylight",
							paragraphs: [
								"DBD Cheats menyediakan ESP wallhack, radar hack, dan DBD Aimbot undetected untuk Dead by Daylight di PC Windows. pilar DBD Cheats untuk ESP dan Aimbot.",
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
								"support@dbdcheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Download Cheat Dead by Daylight | Instant Access",
					description: "Download Cheat Dead by Daylight: unduhan lisensi digital setelah pembayaran. pengiriman digital instan. undetected — PC Windows.",
					h1: "Download Cheat Dead by Daylight",
					intro: "DBD Cheats menyediakan ESP wallhack, radar hack, dan DBD Aimbot undetected untuk Dead by Daylight di PC Windows. Download Cheat Dead by Daylight.",
					imageAlt: "DBD Cheats download and install delivery flow",
					galleryTitle: "Download Cheat Dead by Daylight",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "Beli DBD Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Download Cheat Dead by Daylight",
							paragraphs: [
								"DBD Cheats menyediakan ESP wallhack, radar hack, dan DBD Aimbot undetected untuk Dead by Daylight di PC Windows. unduhan lisensi digital setelah pembayaran.",
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
								"support@dbdcheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Menu mod Dead by Daylight | In-Game Toggles",
					description: "Menu mod Dead by Daylight: toggle ESP dan soft aim in-client. pengiriman digital instan. undetected — PC Windows.",
					h1: "Menu mod Dead by Daylight",
					intro: "DBD Cheats menyediakan ESP wallhack, radar hack, dan DBD Aimbot undetected untuk Dead by Daylight di PC Windows. Menu mod Dead by Daylight.",
					imageAlt: "DBD Cheats in-game menu controls",
					galleryTitle: "Menu mod Dead by Daylight",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "Beli DBD Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menu mod Dead by Daylight",
							paragraphs: [
								"DBD Cheats menyediakan ESP wallhack, radar hack, dan DBD Aimbot undetected untuk Dead by Daylight di PC Windows. toggle ESP dan soft aim in-client.",
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
								"support@dbdcheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Dead by Daylight | Smooth Aim Settings",
					description: "Soft aim Dead by Daylight: pengaturan soft aim halus untuk Windows PC. pengiriman digital instan. undetected — PC Windows.",
					h1: "Soft aim Dead by Daylight",
					intro: "DBD Cheats menyediakan ESP wallhack, radar hack, dan DBD Aimbot undetected untuk Dead by Daylight di PC Windows. Soft aim Dead by Daylight.",
					imageAlt: "Dead by Daylight soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Dead by Daylight",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "Beli DBD Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "Soft aim Dead by Daylight",
							paragraphs: [
								"DBD Cheats menyediakan ESP wallhack, radar hack, dan DBD Aimbot undetected untuk Dead by Daylight di PC Windows. pengaturan soft aim halus untuk Windows PC.",
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
								"support@dbdcheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Cheat Dead by Daylight terbaik | Buyer Checklist",
					description: "Cheat Dead by Daylight terbaik: apa yang dibandingkan sebelum membeli dbd cheats. pengiriman digital instan. undetected — PC Windows.",
					h1: "Cheat Dead by Daylight terbaik",
					intro: "DBD Cheats menyediakan ESP wallhack, radar hack, dan DBD Aimbot undetected untuk Dead by Daylight di PC Windows. Cheat Dead by Daylight terbaik.",
					imageAlt: "DBD Cheats overview for Dead by Daylight on PC",
					galleryTitle: "Cheat Dead by Daylight terbaik",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "Beli DBD Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Cheat Dead by Daylight terbaik",
							paragraphs: [
								"DBD Cheats menyediakan ESP wallhack, radar hack, dan DBD Aimbot undetected untuk Dead by Daylight di PC Windows. apa yang dibandingkan sebelum membeli dbd cheats.",
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
								"support@dbdcheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Dead by Daylight | Soft Aim Assist",
					description: "Hack aimbot Dead by Daylight: assist hack Aimbot undetected untuk Dead by Daylight. pengiriman digital instan. undetected — PC Windows.",
					h1: "Hack aimbot Dead by Daylight",
					intro: "DBD Cheats menyediakan ESP wallhack, radar hack, dan DBD Aimbot undetected untuk Dead by Daylight di PC Windows. Hack aimbot Dead by Daylight.",
					imageAlt: "DBD Aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Dead by Daylight",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "Beli DBD Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Dead by Daylight",
							paragraphs: [
								"DBD Cheats menyediakan ESP wallhack, radar hack, dan DBD Aimbot undetected untuk Dead by Daylight di PC Windows. assist hack Aimbot undetected untuk Dead by Daylight.",
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
								"support@dbdcheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Dead by Daylight | Boxes & Loot",
					description: "Hack ESP Dead by Daylight: kotak ESP hack, pin bangkai, dan jarak. pengiriman digital instan. undetected — PC Windows.",
					h1: "Hack ESP Dead by Daylight",
					intro: "DBD Cheats menyediakan ESP wallhack, radar hack, dan DBD Aimbot undetected untuk Dead by Daylight di PC Windows. Hack ESP Dead by Daylight.",
					imageAlt: "DBD ESP hack boxes and generator markers",
					galleryTitle: "Hack ESP Dead by Daylight",
					heroImage: "/images/dbd-cheats-wallhack.webp",
					ctaPrimary: "Beli DBD Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Hack ESP Dead by Daylight",
							paragraphs: [
								"DBD Cheats menyediakan ESP wallhack, radar hack, dan DBD Aimbot undetected untuk Dead by Daylight di PC Windows. kotak ESP hack, pin bangkai, dan jarak.",
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
								"support@dbdcheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Dead by Daylight | What It Means",
					description: "Unlock all Dead by Daylight: pencarian unlock-all vs alat ESP dan Aimbot asli. pengiriman digital instan. undetected — PC Windows.",
					h1: "Unlock all Dead by Daylight",
					intro: "DBD Cheats menyediakan ESP wallhack, radar hack, dan DBD Aimbot undetected untuk Dead by Daylight di PC Windows. Unlock all Dead by Daylight.",
					imageAlt: "DBD Cheats license features overview",
					galleryTitle: "Unlock all Dead by Daylight",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "Beli DBD Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Dead by Daylight",
							paragraphs: [
								"DBD Cheats menyediakan ESP wallhack, radar hack, dan DBD Aimbot undetected untuk Dead by Daylight di PC Windows. pencarian unlock-all vs alat ESP dan Aimbot asli.",
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
								"support@dbdcheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				privacy: {
					title: "Kebijakan privasi | DBD Cheats",
					description: "Kebijakan privasi untuk DBD Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Kebijakan privasi",
					intro: "DBD Cheats menyediakan ESP wallhack, radar hack, dan DBD Aimbot undetected untuk Dead by Daylight di PC Windows. Kebijakan privasi untuk dbdcheats.org dan lisensi Dead by Daylight.",
					imageAlt: "DBD Cheats",
					galleryTitle: "DBD Cheats",
					heroImage: "/images/dbd-cheats-aimbot.webp",
					ctaPrimary: "Email dukungan",
					ctaSecondary: "Baca syarat",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Informasi yang kami kumpulkan",
							paragraphs: [
								"DBD Cheats menyediakan ESP wallhack, radar hack, dan DBD Aimbot undetected untuk Dead by Daylight di PC Windows. Email kontak, referensi pesanan Zadeyo, dan data keamanan situs dasar.",
								"Detail pembayaran diproses oleh checkout Zadeyo — tidak disimpan di dbdcheats.org.",
							],
						},
						{
							h2: "Cara kami menggunakan data",
							paragraphs: [
								"DBD Cheats menyediakan ESP wallhack, radar hack, dan DBD Aimbot undetected untuk Dead by Daylight di PC Windows. Respons dukungan, penyelesaian pesanan, dan kepatuhan hukum jika diperlukan.",
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
							],
						},
						{
							h2: "Hak Anda",
							paragraphs: [
								"support@dbdcheats.org untuk dukungan dan legal.",
								"Email: support@dbdcheats.org",
							],
						},
					],
				},
				refund: {
					title: "Kebijakan refund | DBD Cheats",
					description: "Kebijakan refund untuk DBD Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Kebijakan refund",
					intro: "DBD Cheats menyediakan ESP wallhack, radar hack, dan DBD Aimbot undetected untuk Dead by Daylight di PC Windows. Kebijakan refund untuk dbdcheats.org dan lisensi Dead by Daylight.",
					imageAlt: "DBD Cheats",
					galleryTitle: "DBD Cheats",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "Email dukungan",
					ctaSecondary: "Baca privasi",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Pengiriman digital",
							paragraphs: [
								"DBD Cheats menyediakan ESP wallhack, radar hack, dan DBD Aimbot undetected untuk Dead by Daylight di PC Windows. Email kontak, referensi pesanan Zadeyo, dan data keamanan situs dasar.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "Persetujuan refund",
							paragraphs: [
								"DBD Cheats menyediakan ESP wallhack, radar hack, dan DBD Aimbot undetected untuk Dead by Daylight di PC Windows. Respons dukungan, penyelesaian pesanan, dan kepatuhan hukum jika diperlukan.",
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
							],
						},
						{
							h2: "Cara meminta",
							paragraphs: [
								"support@dbdcheats.org untuk dukungan dan legal.",
								"Email: support@dbdcheats.org",
							],
						},
					],
				},
				terms: {
					title: "Syarat penggunaan | DBD Cheats",
					description: "Syarat penggunaan untuk DBD Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Syarat penggunaan",
					intro: "DBD Cheats menyediakan ESP wallhack, radar hack, dan DBD Aimbot undetected untuk Dead by Daylight di PC Windows. Syarat penggunaan untuk dbdcheats.org dan lisensi Dead by Daylight.",
					imageAlt: "DBD Cheats",
					galleryTitle: "DBD Cheats",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "Email dukungan",
					ctaSecondary: "Baca privasi",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Penerimaan syarat",
							paragraphs: [
								"DBD Cheats menyediakan ESP wallhack, radar hack, dan DBD Aimbot undetected untuk Dead by Daylight di PC Windows. Email kontak, referensi pesanan Zadeyo, dan data keamanan situs dasar.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "Penyangkalan risiko",
							paragraphs: [
								"DBD Cheats menyediakan ESP wallhack, radar hack, dan DBD Aimbot undetected untuk Dead by Daylight di PC Windows. Respons dukungan, penyelesaian pesanan, dan kepatuhan hukum jika diperlukan.",
								"Menggunakan cheat dapat melanggar ketentuan tim Dead by Daylight — Anda menanggung semua risiko ban.",
							],
						},
						{
							h2: "Perubahan kebijakan",
							paragraphs: [
								"support@dbdcheats.org untuk dukungan dan legal.",
								"Email: support@dbdcheats.org",
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
					accent: "dbd cheats ไม่ถูกตรวจจับ",
					accentShort: "DBD Cheats",
					subtitle: "ESP wallhack, radar hack และ Aimbot สำหรับ Dead by Daylight บน Windows PC — รวมการดูแล Easy Anti-Cheat",
					subtitleShort: "ESP, radar และ Aimbot สำหรับ Dead by Daylight PC",
					buyNow: "ซื้อเลย",
					seeFeatures: "ดูฟีเจอร์",
				},
				trust: {
					status: "ออนไลน์",
					statusNote: "แพ็กเกจ DBD Cheats พร้อมใช้งานสำหรับ Dead by Daylight บน Windows PC",
					statusShort: "ใช้งาน",
					delivery: "จัดส่งดิจิทัลทันที",
					platform: "Windows 10 และ 11",
					antiCheat: "รองรับการดูแล Easy Anti-Cheat",
					antiCheatShort: "Easy Anti-Cheat รองรับ",
				},
				product: {
					title: "DBD Cheats",
					addToCart: "เพิ่มในตะกร้า",
					monthly: "รายเดือน",
					lifetime: "ตลอดชีพ",
					available: "พร้อมใช้งาน",
					gameBadge: "Dead by Daylight",
					platformBadge: "Windows PC",
					statusBadge: "แพ็กเกจ undetected",
				},
				reviews: {
					title: "ผู้เล่นพูดว่าอย่างไร",
					subtitle: "ความคิดเห็นล่าสุดจากผู้ซื้อ DBD Cheats",
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
					tagline: "ESP, wallhack, radar และ Aimbot ไม่ถูกตรวจจับสำหรับ Dead by Daylight — ชำระผ่าน Zadeyo",
				},
				images: {
					hero: "DBD Cheats hero — ESP and aimbot overlay in Dead by Daylight",
					espWallhack: "Wallhack outlines showing survivors and killers through walls",
					aimbotCombat: "Soft aim assist overlay during a Dead by Daylight trial",
					teamFight: "DBD Cheats combat overlay during a team chase",
					playerEsp: "Player ESP boxes and distance readouts in a Dead by Daylight trial",
					headerArt: "Aimbot view and bone priority controls for Dead by Daylight",
					hacksPackage: "2D radar threat overlay for Dead by Daylight",
					chaseFight: "Aimbot assist during a Dead by Daylight chase",
					battleRoyale: "DBD Cheats in-trial overview for Windows PC",
					trialMap: "ESP markers for generators and hooks in Dead by Daylight",
				},
			},
			pages: {
				home: {
					title: "DBD Cheats 2026 | ESP, Wallhack และ Aimbot",
					description: "Cheat Dead by Daylight undetected สำหรับ Dead by Daylight บน PC. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat maintenance. จัดส่งดิจิทัลทันที.",
					h1: "DBD Cheats — Undetected ESP, Wallhack และ Aimbot",
					intro: "แพ็ก undetected สำหรับ Dead by Daylight บน Windows PC: ESP wallhack, radar, Aimbot พร้อม Easy Anti-Cheat maintenance",
					imageAlt: "DBD ESP player tags hack",
					galleryTitle: "แกลเลอรี DBD Cheats — ESP, Aimbot, wallhack",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "ซื้อ DBD Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "ทำไมเลือก DBD Cheats ปี 2026",
							paragraphs: [
								"DBD Cheats รวม ESP wallhack, radar hack และ DBD Aimbot แบบ undetected สำหรับ Dead by Daylight บน Windows PC เหมาะสำหรับอ่าน team ศัตรูใน BR และ chase",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot ในใบอนุญาตเดียว",
							paragraphs: [
								"DBD Cheats รวม ESP wallhack, radar hack และ DBD Aimbot แบบ undetected สำหรับ Dead by Daylight บน Windows PC ใบอนุญาตเดียวแทนเครื่องมือแยก",
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
							],
						},
					],
				},
				"dbd-esp": {
					title: "DBD ESP | Player Boxes & Wallhack",
					description: "DBD ESP: กล่องผู้เล่น มาร์กเกอร์ซาก และ overlay wallhack. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "DBD ESP",
					intro: "DBD Cheats รวม ESP wallhack, radar hack และ DBD Aimbot แบบ undetected สำหรับ Dead by Daylight บน Windows PC DBD ESP.",
					imageAlt: "DBD ESP player boxes and distance readouts in a trial",
					galleryTitle: "DBD ESP",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "ซื้อ DBD Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "DBD ESP",
							paragraphs: [
								"DBD Cheats รวม ESP wallhack, radar hack และ DBD Aimbot แบบ undetected สำหรับ Dead by Daylight บน Windows PC กล่องผู้เล่น มาร์กเกอร์ซาก และ overlay wallhack.",
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
								"support@dbdcheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				"dbd-aimbot": {
					title: "DBD Aimbot | Soft Aim Controls",
					description: "DBD Aimbot: soft aim, FOV และโปรไฟล์ Aimbot ตามสายพันธุ์. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "DBD Aimbot",
					intro: "DBD Cheats รวม ESP wallhack, radar hack และ DBD Aimbot แบบ undetected สำหรับ Dead by Daylight บน Windows PC DBD Aimbot.",
					imageAlt: "DBD Aimbot and soft aim controls on Windows PC",
					galleryTitle: "DBD Aimbot",
					heroImage: "/images/dbd-cheats-aimbot.webp",
					ctaPrimary: "ซื้อ DBD Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "DBD Aimbot",
							paragraphs: [
								"DBD Cheats รวม ESP wallhack, radar hack และ DBD Aimbot แบบ undetected สำหรับ Dead by Daylight บน Windows PC soft aim, FOV และโปรไฟล์ Aimbot ตามสายพันธุ์.",
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
								"support@dbdcheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				features: {
					title: "ฟีเจอร์ | Full Feature List",
					description: "ฟีเจอร์: ESP, soft aim, การควบคุม radar. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "ฟีเจอร์",
					intro: "DBD Cheats รวม ESP wallhack, radar hack และ DBD Aimbot แบบ undetected สำหรับ Dead by Daylight บน Windows PC ฟีเจอร์.",
					imageAlt: "DBD Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "ฟีเจอร์",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "ซื้อ DBD Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "ฟีเจอร์",
							paragraphs: [
								"DBD Cheats รวม ESP wallhack, radar hack และ DBD Aimbot แบบ undetected สำหรับ Dead by Daylight บน Windows PC ESP, soft aim, การควบคุม radar.",
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
								"support@dbdcheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				pricing: {
					title: "ราคา | Monthly & Lifetime",
					description: "ราคา: ใบอนุญาต $35 รายเดือนหรือ $150 lifetime. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "ราคา",
					intro: "DBD Cheats รวม ESP wallhack, radar hack และ DBD Aimbot แบบ undetected สำหรับ Dead by Daylight บน Windows PC ราคา.",
					imageAlt: "DBD Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "ราคา",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "ซื้อ DBD Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "ราคา",
							paragraphs: [
								"DBD Cheats รวม ESP wallhack, radar hack และ DBD Aimbot แบบ undetected สำหรับ Dead by Daylight บน Windows PC ใบอนุญาต $35 รายเดือนหรือ $150 lifetime.",
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
								"support@dbdcheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				setup: {
					title: "ติดตั้ง | PC Setup Guide",
					description: "ติดตั้ง: การเปิดใช้งาน Windows PC และการตั้งค่าเปิดครั้งแรก. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "ติดตั้ง",
					intro: "DBD Cheats รวม ESP wallhack, radar hack และ DBD Aimbot แบบ undetected สำหรับ Dead by Daylight บน Windows PC ติดตั้ง.",
					imageAlt: "DBD Cheats setup guide screenshot for Windows PC",
					galleryTitle: "ติดตั้ง",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "ซื้อ DBD Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "ติดตั้ง",
							paragraphs: [
								"DBD Cheats รวม ESP wallhack, radar hack และ DBD Aimbot แบบ undetected สำหรับ Dead by Daylight บน Windows PC การเปิดใช้งาน Windows PC และการตั้งค่าเปิดครั้งแรก.",
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
								"support@dbdcheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				updates: {
					title: "อัปเดต | Easy Anti-Cheat Maintenance Log",
					description: "อัปเดต: สถานะ patch Easy Anti-Cheat และบันทึก rebuild. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "อัปเดต",
					intro: "DBD Cheats รวม ESP wallhack, radar hack และ DBD Aimbot แบบ undetected สำหรับ Dead by Daylight บน Windows PC อัปเดต.",
					imageAlt: "DBD Cheats live status after Easy Anti-Cheat and game patches",
					galleryTitle: "อัปเดต",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "ซื้อ DBD Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "อัปเดต",
							paragraphs: [
								"DBD Cheats รวม ESP wallhack, radar hack และ DBD Aimbot แบบ undetected สำหรับ Dead by Daylight บน Windows PC สถานะ patch Easy Anti-Cheat และบันทึก rebuild.",
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
								"support@dbdcheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: คำถาม ESP, soft aim, การจัดส่ง และ Easy Anti-Cheat. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "FAQ",
					intro: "DBD Cheats รวม ESP wallhack, radar hack และ DBD Aimbot แบบ undetected สำหรับ Dead by Daylight บน Windows PC FAQ.",
					imageAlt: "DBD Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "ซื้อ DBD Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"DBD Cheats รวม ESP wallhack, radar hack และ DBD Aimbot แบบ undetected สำหรับ Dead by Daylight บน Windows PC คำถาม ESP, soft aim, การจัดส่ง และ Easy Anti-Cheat.",
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
								"support@dbdcheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				support: {
					title: "สนับสนุน | Help & Contact",
					description: "สนับสนุน: ความช่วยเหลือคำสั่งซื้อและติดต่อสนับสนุนใบอนุญาต. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "สนับสนุน",
					intro: "DBD Cheats รวม ESP wallhack, radar hack และ DBD Aimbot แบบ undetected สำหรับ Dead by Daylight บน Windows PC สนับสนุน.",
					imageAlt: "DBD Cheats support page for license and setup help",
					galleryTitle: "สนับสนุน",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "ซื้อ DBD Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "สนับสนุน",
							paragraphs: [
								"DBD Cheats รวม ESP wallhack, radar hack และ DBD Aimbot แบบ undetected สำหรับ Dead by Daylight บน Windows PC ความช่วยเหลือคำสั่งซื้อและติดต่อสนับสนุนใบอนุญาต.",
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
								"support@dbdcheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				undetected: {
					title: "Cheats undetected | Easy Anti-Cheat Safe Status",
					description: "Cheats undetected: การบำรุงรักษา undetected หลัง patch Easy Anti-Cheat. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Cheats undetected",
					intro: "DBD Cheats รวม ESP wallhack, radar hack และ DBD Aimbot แบบ undetected สำหรับ Dead by Daylight บน Windows PC Cheats undetected.",
					imageAlt: "DBD Cheats undetected status overview for Windows PC",
					galleryTitle: "Cheats undetected",
					heroImage: "/images/dbd-cheats-wallhack.webp",
					ctaPrimary: "ซื้อ DBD Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "Cheats undetected",
							paragraphs: [
								"DBD Cheats รวม ESP wallhack, radar hack และ DBD Aimbot แบบ undetected สำหรับ Dead by Daylight บน Windows PC การบำรุงรักษา undetected หลัง patch Easy Anti-Cheat.",
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
								"support@dbdcheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				wallhack: {
					title: "Dead by Daylight Wallhack | ESP Visibility",
					description: "Dead by Daylight Wallhack: wallhack ESP สำหรับผู้เล่น ซาก และระยะทาง. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Dead by Daylight Wallhack",
					intro: "DBD Cheats รวม ESP wallhack, radar hack และ DBD Aimbot แบบ undetected สำหรับ Dead by Daylight บน Windows PC Dead by Daylight Wallhack.",
					imageAlt: "dbd wallhack visibility through walls in a trial",
					galleryTitle: "Dead by Daylight Wallhack",
					heroImage: "/images/dbd-cheats-wallhack.webp",
					ctaPrimary: "ซื้อ DBD Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Dead by Daylight Wallhack",
							paragraphs: [
								"DBD Cheats รวม ESP wallhack, radar hack และ DBD Aimbot แบบ undetected สำหรับ Dead by Daylight บน Windows PC wallhack ESP สำหรับผู้เล่น ซาก และระยะทาง.",
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
								"support@dbdcheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: สัญญาณ radar 2D สำหรับการโจมตีด้านข้างและการหมุน. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "DBD Cheats รวม ESP wallhack, radar hack และ DBD Aimbot แบบ undetected สำหรับ Dead by Daylight บน Windows PC Radar Hack.",
					imageAlt: "Dead by Daylight 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "ซื้อ DBD Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"DBD Cheats รวม ESP wallhack, radar hack และ DBD Aimbot แบบ undetected สำหรับ Dead by Daylight บน Windows PC สัญญาณ radar 2D สำหรับการโจมตีด้านข้างและการหมุน.",
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
								"support@dbdcheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				eac: {
					title: "Easy Anti-Cheat Bypass | Patch Maintenance",
					description: "Easy Anti-Cheat Bypass: วิธีจัดการอัปเดต Easy Anti-Cheat สำหรับ Dead by Daylight hacks. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Easy Anti-Cheat Bypass",
					intro: "DBD Cheats รวม ESP wallhack, radar hack และ DBD Aimbot แบบ undetected สำหรับ Dead by Daylight บน Windows PC Easy Anti-Cheat Bypass.",
					imageAlt: "DBD Cheats maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Easy Anti-Cheat Bypass",
					heroImage: "/images/dbd-cheats-aimbot.webp",
					ctaPrimary: "ซื้อ DBD Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Easy Anti-Cheat Bypass",
							paragraphs: [
								"DBD Cheats รวม ESP wallhack, radar hack และ DBD Aimbot แบบ undetected สำหรับ Dead by Daylight บน Windows PC วิธีจัดการอัปเดต Easy Anti-Cheat สำหรับ Dead by Daylight hacks.",
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
								"support@dbdcheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				"cheats-2026": {
					title: "DBD Cheats 2026 | Buyer Guide",
					description: "DBD Cheats 2026: checklist dbd cheats 2026 ก่อน checkout. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "DBD Cheats 2026",
					intro: "DBD Cheats รวม ESP wallhack, radar hack และ DBD Aimbot แบบ undetected สำหรับ Dead by Daylight บน Windows PC DBD Cheats 2026.",
					imageAlt: "DBD Cheats product overview for Dead by Daylight",
					galleryTitle: "DBD Cheats 2026",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "ซื้อ DBD Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "DBD Cheats 2026",
							paragraphs: [
								"DBD Cheats รวม ESP wallhack, radar hack และ DBD Aimbot แบบ undetected สำหรับ Dead by Daylight บน Windows PC checklist dbd cheats 2026 ก่อน checkout.",
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
								"support@dbdcheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				hacks: {
					title: "DBD Cheats | ESP Aimbot Guide",
					description: "DBD Cheats: เสาหลัก DBD Cheats สำหรับ ESP และ Aimbot. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "DBD Cheats",
					intro: "DBD Cheats รวม ESP wallhack, radar hack และ DBD Aimbot แบบ undetected สำหรับ Dead by Daylight บน Windows PC DBD Cheats.",
					imageAlt: "DBD Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "DBD Cheats",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "ซื้อ DBD Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "DBD Cheats",
							paragraphs: [
								"DBD Cheats รวม ESP wallhack, radar hack และ DBD Aimbot แบบ undetected สำหรับ Dead by Daylight บน Windows PC เสาหลัก DBD Cheats สำหรับ ESP และ Aimbot.",
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
								"support@dbdcheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				"cheat-download": {
					title: "ดาวน์โหลด DBD Cheats | Instant Access",
					description: "ดาวน์โหลด DBD Cheats: ดาวน์โหลดใบอนุญาตดิจิทัลหลังชำระเงิน. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "ดาวน์โหลด DBD Cheats",
					intro: "DBD Cheats รวม ESP wallhack, radar hack และ DBD Aimbot แบบ undetected สำหรับ Dead by Daylight บน Windows PC ดาวน์โหลด DBD Cheats.",
					imageAlt: "DBD Cheats download and install delivery flow",
					galleryTitle: "ดาวน์โหลด DBD Cheats",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "ซื้อ DBD Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "ดาวน์โหลด DBD Cheats",
							paragraphs: [
								"DBD Cheats รวม ESP wallhack, radar hack และ DBD Aimbot แบบ undetected สำหรับ Dead by Daylight บน Windows PC ดาวน์โหลดใบอนุญาตดิจิทัลหลังชำระเงิน.",
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
								"support@dbdcheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				"mod-menu": {
					title: "เมนูมอด Dead by Daylight | In-Game Toggles",
					description: "เมนูมอด Dead by Daylight: สวิตช์ ESP และ soft aim ในไคลเอนต์. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "เมนูมอด Dead by Daylight",
					intro: "DBD Cheats รวม ESP wallhack, radar hack และ DBD Aimbot แบบ undetected สำหรับ Dead by Daylight บน Windows PC เมนูมอด Dead by Daylight.",
					imageAlt: "DBD Cheats in-game menu controls",
					galleryTitle: "เมนูมอด Dead by Daylight",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "ซื้อ DBD Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "เมนูมอด Dead by Daylight",
							paragraphs: [
								"DBD Cheats รวม ESP wallhack, radar hack และ DBD Aimbot แบบ undetected สำหรับ Dead by Daylight บน Windows PC สวิตช์ ESP และ soft aim ในไคลเอนต์.",
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
								"support@dbdcheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				"soft-aim": {
					title: "Dead by Daylight Soft Aim | Smooth Aim Settings",
					description: "Dead by Daylight Soft Aim: การตั้งค่า soft aim ที่ลื่นไหลสำหรับ Windows PC. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Dead by Daylight Soft Aim",
					intro: "DBD Cheats รวม ESP wallhack, radar hack และ DBD Aimbot แบบ undetected สำหรับ Dead by Daylight บน Windows PC Dead by Daylight Soft Aim.",
					imageAlt: "Dead by Daylight soft aim FOV and smoothness settings",
					galleryTitle: "Dead by Daylight Soft Aim",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "ซื้อ DBD Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "Dead by Daylight Soft Aim",
							paragraphs: [
								"DBD Cheats รวม ESP wallhack, radar hack และ DBD Aimbot แบบ undetected สำหรับ Dead by Daylight บน Windows PC การตั้งค่า soft aim ที่ลื่นไหลสำหรับ Windows PC.",
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
								"support@dbdcheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				"best-cheats": {
					title: "Cheat Dead by Daylight ที่ดีที่สุด | Buyer Checklist",
					description: "Cheat Dead by Daylight ที่ดีที่สุด: สิ่งที่ควรเปรียบเทียบก่อนซื้อ dbd cheats. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Cheat Dead by Daylight ที่ดีที่สุด",
					intro: "DBD Cheats รวม ESP wallhack, radar hack และ DBD Aimbot แบบ undetected สำหรับ Dead by Daylight บน Windows PC Cheat Dead by Daylight ที่ดีที่สุด.",
					imageAlt: "DBD Cheats overview for Dead by Daylight on PC",
					galleryTitle: "Cheat Dead by Daylight ที่ดีที่สุด",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "ซื้อ DBD Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Cheat Dead by Daylight ที่ดีที่สุด",
							paragraphs: [
								"DBD Cheats รวม ESP wallhack, radar hack และ DBD Aimbot แบบ undetected สำหรับ Dead by Daylight บน Windows PC สิ่งที่ควรเปรียบเทียบก่อนซื้อ dbd cheats.",
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
								"support@dbdcheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack Aimbot Dead by Daylight | Soft Aim Assist",
					description: "Hack Aimbot Dead by Daylight: assist hack Aimbot undetected สำหรับ Dead by Daylight. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Hack Aimbot Dead by Daylight",
					intro: "DBD Cheats รวม ESP wallhack, radar hack และ DBD Aimbot แบบ undetected สำหรับ Dead by Daylight บน Windows PC Hack Aimbot Dead by Daylight.",
					imageAlt: "DBD Aimbot hack controls and bone priority",
					galleryTitle: "Hack Aimbot Dead by Daylight",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "ซื้อ DBD Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "Hack Aimbot Dead by Daylight",
							paragraphs: [
								"DBD Cheats รวม ESP wallhack, radar hack และ DBD Aimbot แบบ undetected สำหรับ Dead by Daylight บน Windows PC assist hack Aimbot undetected สำหรับ Dead by Daylight.",
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
								"support@dbdcheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Dead by Daylight | Boxes & Loot",
					description: "Hack ESP Dead by Daylight: กล่อง ESP hack, pin ซาก และระยะทาง. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Hack ESP Dead by Daylight",
					intro: "DBD Cheats รวม ESP wallhack, radar hack และ DBD Aimbot แบบ undetected สำหรับ Dead by Daylight บน Windows PC Hack ESP Dead by Daylight.",
					imageAlt: "DBD ESP hack boxes and generator markers",
					galleryTitle: "Hack ESP Dead by Daylight",
					heroImage: "/images/dbd-cheats-wallhack.webp",
					ctaPrimary: "ซื้อ DBD Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Hack ESP Dead by Daylight",
							paragraphs: [
								"DBD Cheats รวม ESP wallhack, radar hack และ DBD Aimbot แบบ undetected สำหรับ Dead by Daylight บน Windows PC กล่อง ESP hack, pin ซาก และระยะทาง.",
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
								"support@dbdcheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				"unlock-all": {
					title: "Dead by Daylight Unlock All | What It Means",
					description: "Dead by Daylight Unlock All: การค้นหา unlock-all vs เครื่องมือ ESP และ Aimbot จริง. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Dead by Daylight Unlock All",
					intro: "DBD Cheats รวม ESP wallhack, radar hack และ DBD Aimbot แบบ undetected สำหรับ Dead by Daylight บน Windows PC Dead by Daylight Unlock All.",
					imageAlt: "DBD Cheats license features overview",
					galleryTitle: "Dead by Daylight Unlock All",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "ซื้อ DBD Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Dead by Daylight Unlock All",
							paragraphs: [
								"DBD Cheats รวม ESP wallhack, radar hack และ DBD Aimbot แบบ undetected สำหรับ Dead by Daylight บน Windows PC การค้นหา unlock-all vs เครื่องมือ ESP และ Aimbot จริง.",
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
								"support@dbdcheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				privacy: {
					title: "นโยบายความเป็นส่วนตัว | DBD Cheats",
					description: "นโยบายความเป็นส่วนตัว สำหรับ DBD Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "นโยบายความเป็นส่วนตัว",
					intro: "DBD Cheats รวม ESP wallhack, radar hack และ DBD Aimbot แบบ undetected สำหรับ Dead by Daylight บน Windows PC นโยบายความเป็นส่วนตัว สำหรับ dbdcheats.org และใบอนุญาต Dead by Daylight",
					imageAlt: "DBD Cheats",
					galleryTitle: "DBD Cheats",
					heroImage: "/images/dbd-cheats-aimbot.webp",
					ctaPrimary: "อีเมลฝ่ายสนับสนุน",
					ctaSecondary: "อ่านข้อกำหนด",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "ข้อมูลที่เราเก็บ",
							paragraphs: [
								"DBD Cheats รวม ESP wallhack, radar hack และ DBD Aimbot แบบ undetected สำหรับ Dead by Daylight บน Windows PC อีเมลติดต่อ อ้างอิงคำสั่งซื้อ Zadeyo และข้อมูลความปลอดภัยพื้นฐานของเว็บไซต์",
								"รายละเอียดการชำระเงินประมวลผลผ่าน checkout Zadeyo — ไม่เก็บบน dbdcheats.org",
							],
						},
						{
							h2: "การใช้ข้อมูล",
							paragraphs: [
								"DBD Cheats รวม ESP wallhack, radar hack และ DBD Aimbot แบบ undetected สำหรับ Dead by Daylight บน Windows PC การตอบกลับฝ่ายสนับสนุน การแก้ไขคำสั่งซื้อ และการปฏิบัติตามกฎหมายเมื่อจำเป็น",
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
							],
						},
						{
							h2: "สิทธิของคุณ",
							paragraphs: [
								"support@dbdcheats.org สำหรับการสนับสนุน",
								"อีเมล: support@dbdcheats.org",
							],
						},
					],
				},
				refund: {
					title: "นโยบายการคืนเงิน | DBD Cheats",
					description: "นโยบายการคืนเงิน สำหรับ DBD Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "นโยบายการคืนเงิน",
					intro: "DBD Cheats รวม ESP wallhack, radar hack และ DBD Aimbot แบบ undetected สำหรับ Dead by Daylight บน Windows PC นโยบายการคืนเงิน สำหรับ dbdcheats.org และใบอนุญาต Dead by Daylight",
					imageAlt: "DBD Cheats",
					galleryTitle: "DBD Cheats",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "อีเมลฝ่ายสนับสนุน",
					ctaSecondary: "อ่านนโยบายความเป็นส่วนตัว",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "การจัดส่งดิจิทัล",
							paragraphs: [
								"DBD Cheats รวม ESP wallhack, radar hack และ DBD Aimbot แบบ undetected สำหรับ Dead by Daylight บน Windows PC อีเมลติดต่อ อ้างอิงคำสั่งซื้อ Zadeyo และข้อมูลความปลอดภัยพื้นฐานของเว็บไซต์",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "การอนุมัติคืนเงิน",
							paragraphs: [
								"DBD Cheats รวม ESP wallhack, radar hack และ DBD Aimbot แบบ undetected สำหรับ Dead by Daylight บน Windows PC การตอบกลับฝ่ายสนับสนุน การแก้ไขคำสั่งซื้อ และการปฏิบัติตามกฎหมายเมื่อจำเป็น",
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
							],
						},
						{
							h2: "วิธีขอคืนเงิน",
							paragraphs: [
								"support@dbdcheats.org สำหรับการสนับสนุน",
								"อีเมล: support@dbdcheats.org",
							],
						},
					],
				},
				terms: {
					title: "ข้อกำหนดการใช้งาน | DBD Cheats",
					description: "ข้อกำหนดการใช้งาน สำหรับ DBD Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "ข้อกำหนดการใช้งาน",
					intro: "DBD Cheats รวม ESP wallhack, radar hack และ DBD Aimbot แบบ undetected สำหรับ Dead by Daylight บน Windows PC ข้อกำหนดการใช้งาน สำหรับ dbdcheats.org และใบอนุญาต Dead by Daylight",
					imageAlt: "DBD Cheats",
					galleryTitle: "DBD Cheats",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "อีเมลฝ่ายสนับสนุน",
					ctaSecondary: "อ่านนโยบายความเป็นส่วนตัว",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "การยอมรับข้อกำหนด",
							paragraphs: [
								"DBD Cheats รวม ESP wallhack, radar hack และ DBD Aimbot แบบ undetected สำหรับ Dead by Daylight บน Windows PC อีเมลติดต่อ อ้างอิงคำสั่งซื้อ Zadeyo และข้อมูลความปลอดภัยพื้นฐานของเว็บไซต์",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "ข้อจำกัดความรับผิดชอบด้านความเสี่ยง",
							paragraphs: [
								"DBD Cheats รวม ESP wallhack, radar hack และ DBD Aimbot แบบ undetected สำหรับ Dead by Daylight บน Windows PC การตอบกลับฝ่ายสนับสนุน การแก้ไขคำสั่งซื้อ และการปฏิบัติตามกฎหมายเมื่อจำเป็น",
								"การใช้ cheat อาจละเมิดข้อกำหนดของทีม Dead by Daylight — คุณรับความเสี่ยง ban ทั้งหมด",
							],
						},
						{
							h2: "การเปลี่ยนแปลงนโยบาย",
							paragraphs: [
								"support@dbdcheats.org สำหรับการสนับสนุน",
								"อีเมล: support@dbdcheats.org",
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
					accent: "Cheat Dead by Daylight undetected",
					accentShort: "DBD Cheats",
					subtitle: "ESP wallhack, radar hack và Aimbot cho Dead by Daylight trên PC Windows — bảo trì Easy Anti-Cheat bao gồm.",
					subtitleShort: "ESP, radar & Aimbot cho Dead by Daylight PC",
					buyNow: "Mua ngay",
					seeFeatures: "Xem tính năng",
				},
				trust: {
					status: "Trực tuyến",
					statusNote: "Gói DBD Cheats đang hoạt động cho Dead by Daylight trên PC Windows.",
					statusShort: "Hoạt động",
					delivery: "Giao hàng kỹ thuật số tức thì",
					platform: "Windows 10 & 11",
					antiCheat: "Hỗ trợ bảo trì Easy Anti-Cheat",
					antiCheatShort: "Hỗ trợ Easy Anti-Cheat",
				},
				product: {
					title: "DBD Cheats",
					addToCart: "Thêm vào giỏ",
					monthly: "Hàng tháng",
					lifetime: "Trọn đời",
					available: "Có sẵn ngay",
					gameBadge: "Dead by Daylight",
					platformBadge: "Windows PC",
					statusBadge: "Gói undetected",
				},
				reviews: {
					title: "Người chơi nói gì",
					subtitle: "Phản hồi gần đây từ người mua DBD Cheats",
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
					tagline: "ESP, wallhack, radar và Aimbot undetected cho Dead by Daylight — thanh toán qua Zadeyo.",
				},
				images: {
					hero: "DBD Cheats hero — ESP and aimbot overlay in Dead by Daylight",
					espWallhack: "Wallhack outlines showing survivors and killers through walls",
					aimbotCombat: "Soft aim assist overlay during a Dead by Daylight trial",
					teamFight: "DBD Cheats combat overlay during a team chase",
					playerEsp: "Player ESP boxes and distance readouts in a Dead by Daylight trial",
					headerArt: "Aimbot view and bone priority controls for Dead by Daylight",
					hacksPackage: "2D radar threat overlay for Dead by Daylight",
					chaseFight: "Aimbot assist during a Dead by Daylight chase",
					battleRoyale: "DBD Cheats in-trial overview for Windows PC",
					trialMap: "ESP markers for generators and hooks in Dead by Daylight",
				},
			},
			pages: {
				home: {
					title: "DBD Cheats 2026 | ESP, Wallhack & Aimbot",
					description: "Cheat Dead by Daylight undetected cho Dead by Daylight trên PC. ESP wallhack, radar hack, Aimbot, bảo trì Easy Anti-Cheat. Giao hàng kỹ thuật số tức thì.",
					h1: "DBD Cheats — Undetected ESP, Wallhack & Aimbot",
					intro: "Gói undetected Dead by Daylight trên Windows PC: ESP wallhack, radar, Aimbot với bảo trì Easy Anti-Cheat.",
					imageAlt: "DBD ESP player tags hack",
					galleryTitle: "Thư viện DBD Cheats — ESP, Aimbot, wallhack",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "Mua DBD Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Vì sao chọn DBD Cheats 2026",
							paragraphs: [
								"DBD Cheats cung cấp ESP wallhack, radar hack và DBD Aimbot undetected cho Dead by Daylight trên PC Windows. Lý tưởng đọc team địch trong BR và chase.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot trong một giấy phép",
							paragraphs: [
								"DBD Cheats cung cấp ESP wallhack, radar hack và DBD Aimbot undetected cho Dead by Daylight trên PC Windows. Một giấy phép thay vì công cụ riêng.",
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
							],
						},
					],
				},
				"dbd-esp": {
					title: "ESP Dead by Daylight | Player Boxes & Wallhack",
					description: "ESP Dead by Daylight: hộp người chơi, đánh dấu xác thịt và overlay wallhack. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "ESP Dead by Daylight",
					intro: "DBD Cheats cung cấp ESP wallhack, radar hack và DBD Aimbot undetected cho Dead by Daylight trên PC Windows. ESP Dead by Daylight.",
					imageAlt: "DBD ESP player boxes and distance readouts in a trial",
					galleryTitle: "ESP Dead by Daylight",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "Mua DBD Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "ESP Dead by Daylight",
							paragraphs: [
								"DBD Cheats cung cấp ESP wallhack, radar hack và DBD Aimbot undetected cho Dead by Daylight trên PC Windows. hộp người chơi, đánh dấu xác thịt và overlay wallhack.",
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
								"support@dbdcheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"dbd-aimbot": {
					title: "Aimbot Dead by Daylight | Soft Aim Controls",
					description: "Aimbot Dead by Daylight: soft aim, FOV và hồ sơ Aimbot theo loài. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Aimbot Dead by Daylight",
					intro: "DBD Cheats cung cấp ESP wallhack, radar hack và DBD Aimbot undetected cho Dead by Daylight trên PC Windows. Aimbot Dead by Daylight.",
					imageAlt: "DBD Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Dead by Daylight",
					heroImage: "/images/dbd-cheats-aimbot.webp",
					ctaPrimary: "Mua DBD Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Aimbot Dead by Daylight",
							paragraphs: [
								"DBD Cheats cung cấp ESP wallhack, radar hack và DBD Aimbot undetected cho Dead by Daylight trên PC Windows. soft aim, FOV và hồ sơ Aimbot theo loài.",
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
								"support@dbdcheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				features: {
					title: "Tính năng | Full Feature List",
					description: "Tính năng: ESP, soft aim, điều khiển radar. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Tính năng",
					intro: "DBD Cheats cung cấp ESP wallhack, radar hack và DBD Aimbot undetected cho Dead by Daylight trên PC Windows. Tính năng.",
					imageAlt: "DBD Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Tính năng",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "Mua DBD Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Tính năng",
							paragraphs: [
								"DBD Cheats cung cấp ESP wallhack, radar hack và DBD Aimbot undetected cho Dead by Daylight trên PC Windows. ESP, soft aim, điều khiển radar.",
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
								"support@dbdcheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				pricing: {
					title: "Giá | Monthly & Lifetime",
					description: "Giá: giấy phép $35 hàng tháng hoặc $150 lifetime. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Giá",
					intro: "DBD Cheats cung cấp ESP wallhack, radar hack và DBD Aimbot undetected cho Dead by Daylight trên PC Windows. Giá.",
					imageAlt: "DBD Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Giá",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "Mua DBD Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Giá",
							paragraphs: [
								"DBD Cheats cung cấp ESP wallhack, radar hack và DBD Aimbot undetected cho Dead by Daylight trên PC Windows. giấy phép $35 hàng tháng hoặc $150 lifetime.",
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
								"support@dbdcheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				setup: {
					title: "Cài đặt | PC Setup Guide",
					description: "Cài đặt: kích hoạt Windows PC và thiết lập lần chạy đầu. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cài đặt",
					intro: "DBD Cheats cung cấp ESP wallhack, radar hack và DBD Aimbot undetected cho Dead by Daylight trên PC Windows. Cài đặt.",
					imageAlt: "DBD Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Cài đặt",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "Mua DBD Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Cài đặt",
							paragraphs: [
								"DBD Cheats cung cấp ESP wallhack, radar hack và DBD Aimbot undetected cho Dead by Daylight trên PC Windows. kích hoạt Windows PC và thiết lập lần chạy đầu.",
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
								"support@dbdcheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				updates: {
					title: "Cập nhật | Easy Anti-Cheat Maintenance Log",
					description: "Cập nhật: trạng thái patch Easy Anti-Cheat và ghi chú rebuild. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cập nhật",
					intro: "DBD Cheats cung cấp ESP wallhack, radar hack và DBD Aimbot undetected cho Dead by Daylight trên PC Windows. Cập nhật.",
					imageAlt: "DBD Cheats live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Cập nhật",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "Mua DBD Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "Cập nhật",
							paragraphs: [
								"DBD Cheats cung cấp ESP wallhack, radar hack và DBD Aimbot undetected cho Dead by Daylight trên PC Windows. trạng thái patch Easy Anti-Cheat và ghi chú rebuild.",
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
								"support@dbdcheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: câu hỏi ESP, soft aim, giao hàng và Easy Anti-Cheat. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "FAQ",
					intro: "DBD Cheats cung cấp ESP wallhack, radar hack và DBD Aimbot undetected cho Dead by Daylight trên PC Windows. FAQ.",
					imageAlt: "DBD Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "Mua DBD Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"DBD Cheats cung cấp ESP wallhack, radar hack và DBD Aimbot undetected cho Dead by Daylight trên PC Windows. câu hỏi ESP, soft aim, giao hàng và Easy Anti-Cheat.",
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
								"support@dbdcheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				support: {
					title: "Hỗ trợ | Help & Contact",
					description: "Hỗ trợ: trợ giúp đơn hàng và liên hệ hỗ trợ giấy phép. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Hỗ trợ",
					intro: "DBD Cheats cung cấp ESP wallhack, radar hack và DBD Aimbot undetected cho Dead by Daylight trên PC Windows. Hỗ trợ.",
					imageAlt: "DBD Cheats support page for license and setup help",
					galleryTitle: "Hỗ trợ",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "Mua DBD Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Hỗ trợ",
							paragraphs: [
								"DBD Cheats cung cấp ESP wallhack, radar hack và DBD Aimbot undetected cho Dead by Daylight trên PC Windows. trợ giúp đơn hàng và liên hệ hỗ trợ giấy phép.",
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
								"support@dbdcheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				undetected: {
					title: "Cheat undetected | Easy Anti-Cheat Safe Status",
					description: "Cheat undetected: bảo trì undetected sau patch Easy Anti-Cheat. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cheat undetected",
					intro: "DBD Cheats cung cấp ESP wallhack, radar hack và DBD Aimbot undetected cho Dead by Daylight trên PC Windows. Cheat undetected.",
					imageAlt: "DBD Cheats undetected status overview for Windows PC",
					galleryTitle: "Cheat undetected",
					heroImage: "/images/dbd-cheats-wallhack.webp",
					ctaPrimary: "Mua DBD Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "Cheat undetected",
							paragraphs: [
								"DBD Cheats cung cấp ESP wallhack, radar hack và DBD Aimbot undetected cho Dead by Daylight trên PC Windows. bảo trì undetected sau patch Easy Anti-Cheat.",
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
								"support@dbdcheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				wallhack: {
					title: "Dead by Daylight Wallhack | ESP Visibility",
					description: "Dead by Daylight Wallhack: wallhack ESP cho người chơi, xác thịt và khoảng cách. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Dead by Daylight Wallhack",
					intro: "DBD Cheats cung cấp ESP wallhack, radar hack và DBD Aimbot undetected cho Dead by Daylight trên PC Windows. Dead by Daylight Wallhack.",
					imageAlt: "dbd wallhack visibility through walls in a trial",
					galleryTitle: "Dead by Daylight Wallhack",
					heroImage: "/images/dbd-cheats-wallhack.webp",
					ctaPrimary: "Mua DBD Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Dead by Daylight Wallhack",
							paragraphs: [
								"DBD Cheats cung cấp ESP wallhack, radar hack và DBD Aimbot undetected cho Dead by Daylight trên PC Windows. wallhack ESP cho người chơi, xác thịt và khoảng cách.",
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
								"support@dbdcheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: tín hiệu radar 2D cho đánh hông và xoay vòng. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Radar hack",
					intro: "DBD Cheats cung cấp ESP wallhack, radar hack và DBD Aimbot undetected cho Dead by Daylight trên PC Windows. Radar hack.",
					imageAlt: "Dead by Daylight 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "Mua DBD Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"DBD Cheats cung cấp ESP wallhack, radar hack và DBD Aimbot undetected cho Dead by Daylight trên PC Windows. tín hiệu radar 2D cho đánh hông và xoay vòng.",
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
								"support@dbdcheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Patch Maintenance",
					description: "Bypass Easy Anti-Cheat: cách xử lý cập nhật Easy Anti-Cheat cho Dead by Daylight hacks. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "DBD Cheats cung cấp ESP wallhack, radar hack và DBD Aimbot undetected cho Dead by Daylight trên PC Windows. Bypass Easy Anti-Cheat.",
					imageAlt: "DBD Cheats maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/dbd-cheats-aimbot.webp",
					ctaPrimary: "Mua DBD Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"DBD Cheats cung cấp ESP wallhack, radar hack và DBD Aimbot undetected cho Dead by Daylight trên PC Windows. cách xử lý cập nhật Easy Anti-Cheat cho Dead by Daylight hacks.",
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
								"support@dbdcheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheat Dead by Daylight 2026 | Buyer Guide",
					description: "Cheat Dead by Daylight 2026: checklist dbd cheats 2026 trước checkout. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cheat Dead by Daylight 2026",
					intro: "DBD Cheats cung cấp ESP wallhack, radar hack và DBD Aimbot undetected cho Dead by Daylight trên PC Windows. Cheat Dead by Daylight 2026.",
					imageAlt: "DBD Cheats product overview for Dead by Daylight",
					galleryTitle: "Cheat Dead by Daylight 2026",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "Mua DBD Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "Cheat Dead by Daylight 2026",
							paragraphs: [
								"DBD Cheats cung cấp ESP wallhack, radar hack và DBD Aimbot undetected cho Dead by Daylight trên PC Windows. checklist dbd cheats 2026 trước checkout.",
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
								"support@dbdcheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				hacks: {
					title: "Cheat Dead by Daylight | ESP Aimbot Guide",
					description: "Cheat Dead by Daylight: trụ cột DBD Cheats cho ESP và Aimbot. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cheat Dead by Daylight",
					intro: "DBD Cheats cung cấp ESP wallhack, radar hack và DBD Aimbot undetected cho Dead by Daylight trên PC Windows. Cheat Dead by Daylight.",
					imageAlt: "DBD Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Cheat Dead by Daylight",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "Mua DBD Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheat Dead by Daylight",
							paragraphs: [
								"DBD Cheats cung cấp ESP wallhack, radar hack và DBD Aimbot undetected cho Dead by Daylight trên PC Windows. trụ cột DBD Cheats cho ESP và Aimbot.",
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
								"support@dbdcheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Tải Cheat Dead by Daylight | Instant Access",
					description: "Tải Cheat Dead by Daylight: tải giấy phép kỹ thuật số sau thanh toán. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Tải Cheat Dead by Daylight",
					intro: "DBD Cheats cung cấp ESP wallhack, radar hack và DBD Aimbot undetected cho Dead by Daylight trên PC Windows. Tải Cheat Dead by Daylight.",
					imageAlt: "DBD Cheats download and install delivery flow",
					galleryTitle: "Tải Cheat Dead by Daylight",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "Mua DBD Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Tải Cheat Dead by Daylight",
							paragraphs: [
								"DBD Cheats cung cấp ESP wallhack, radar hack và DBD Aimbot undetected cho Dead by Daylight trên PC Windows. tải giấy phép kỹ thuật số sau thanh toán.",
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
								"support@dbdcheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Mod menu Dead by Daylight | In-Game Toggles",
					description: "Mod menu Dead by Daylight: công tắc ESP và soft aim trong client. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Mod menu Dead by Daylight",
					intro: "DBD Cheats cung cấp ESP wallhack, radar hack và DBD Aimbot undetected cho Dead by Daylight trên PC Windows. Mod menu Dead by Daylight.",
					imageAlt: "DBD Cheats in-game menu controls",
					galleryTitle: "Mod menu Dead by Daylight",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "Mua DBD Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Mod menu Dead by Daylight",
							paragraphs: [
								"DBD Cheats cung cấp ESP wallhack, radar hack và DBD Aimbot undetected cho Dead by Daylight trên PC Windows. công tắc ESP và soft aim trong client.",
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
								"support@dbdcheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Dead by Daylight | Smooth Aim Settings",
					description: "Soft aim Dead by Daylight: cài đặt soft aim mượt cho Windows PC. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Soft aim Dead by Daylight",
					intro: "DBD Cheats cung cấp ESP wallhack, radar hack và DBD Aimbot undetected cho Dead by Daylight trên PC Windows. Soft aim Dead by Daylight.",
					imageAlt: "Dead by Daylight soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Dead by Daylight",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "Mua DBD Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "Soft aim Dead by Daylight",
							paragraphs: [
								"DBD Cheats cung cấp ESP wallhack, radar hack và DBD Aimbot undetected cho Dead by Daylight trên PC Windows. cài đặt soft aim mượt cho Windows PC.",
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
								"support@dbdcheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Cheat Dead by Daylight tốt nhất | Buyer Checklist",
					description: "Cheat Dead by Daylight tốt nhất: nên so sánh gì trước khi mua dbd cheats. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cheat Dead by Daylight tốt nhất",
					intro: "DBD Cheats cung cấp ESP wallhack, radar hack và DBD Aimbot undetected cho Dead by Daylight trên PC Windows. Cheat Dead by Daylight tốt nhất.",
					imageAlt: "DBD Cheats overview for Dead by Daylight on PC",
					galleryTitle: "Cheat Dead by Daylight tốt nhất",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "Mua DBD Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Cheat Dead by Daylight tốt nhất",
							paragraphs: [
								"DBD Cheats cung cấp ESP wallhack, radar hack và DBD Aimbot undetected cho Dead by Daylight trên PC Windows. nên so sánh gì trước khi mua dbd cheats.",
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
								"support@dbdcheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Dead by Daylight | Soft Aim Assist",
					description: "Hack aimbot Dead by Daylight: hỗ trợ hack Aimbot undetected cho Dead by Daylight. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Hack aimbot Dead by Daylight",
					intro: "DBD Cheats cung cấp ESP wallhack, radar hack và DBD Aimbot undetected cho Dead by Daylight trên PC Windows. Hack aimbot Dead by Daylight.",
					imageAlt: "DBD Aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Dead by Daylight",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "Mua DBD Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Dead by Daylight",
							paragraphs: [
								"DBD Cheats cung cấp ESP wallhack, radar hack và DBD Aimbot undetected cho Dead by Daylight trên PC Windows. hỗ trợ hack Aimbot undetected cho Dead by Daylight.",
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
								"support@dbdcheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Dead by Daylight | Boxes & Loot",
					description: "Hack ESP Dead by Daylight: hộp ESP hack, pin xác thịt và khoảng cách. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Hack ESP Dead by Daylight",
					intro: "DBD Cheats cung cấp ESP wallhack, radar hack và DBD Aimbot undetected cho Dead by Daylight trên PC Windows. Hack ESP Dead by Daylight.",
					imageAlt: "DBD ESP hack boxes and generator markers",
					galleryTitle: "Hack ESP Dead by Daylight",
					heroImage: "/images/dbd-cheats-wallhack.webp",
					ctaPrimary: "Mua DBD Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Hack ESP Dead by Daylight",
							paragraphs: [
								"DBD Cheats cung cấp ESP wallhack, radar hack và DBD Aimbot undetected cho Dead by Daylight trên PC Windows. hộp ESP hack, pin xác thịt và khoảng cách.",
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
								"support@dbdcheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Dead by Daylight | What It Means",
					description: "Unlock all Dead by Daylight: tìm kiếm unlock-all vs công cụ ESP và Aimbot thật. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Unlock all Dead by Daylight",
					intro: "DBD Cheats cung cấp ESP wallhack, radar hack và DBD Aimbot undetected cho Dead by Daylight trên PC Windows. Unlock all Dead by Daylight.",
					imageAlt: "DBD Cheats license features overview",
					galleryTitle: "Unlock all Dead by Daylight",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "Mua DBD Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Dead by Daylight",
							paragraphs: [
								"DBD Cheats cung cấp ESP wallhack, radar hack và DBD Aimbot undetected cho Dead by Daylight trên PC Windows. tìm kiếm unlock-all vs công cụ ESP và Aimbot thật.",
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
								"support@dbdcheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				privacy: {
					title: "Chính sách bảo mật | DBD Cheats",
					description: "Chính sách bảo mật cho DBD Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Chính sách bảo mật",
					intro: "DBD Cheats cung cấp ESP wallhack, radar hack và DBD Aimbot undetected cho Dead by Daylight trên PC Windows. Chính sách bảo mật cho dbdcheats.org và giấy phép Dead by Daylight.",
					imageAlt: "DBD Cheats",
					galleryTitle: "DBD Cheats",
					heroImage: "/images/dbd-cheats-aimbot.webp",
					ctaPrimary: "Email hỗ trợ",
					ctaSecondary: "Đọc điều khoản",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Thông tin chúng tôi thu thập",
							paragraphs: [
								"DBD Cheats cung cấp ESP wallhack, radar hack và DBD Aimbot undetected cho Dead by Daylight trên PC Windows. Email liên hệ, tham chiếu đơn hàng Zadeyo và dữ liệu bảo mật cơ bản của trang.",
								"Chi tiết thanh toán được xử lý qua checkout Zadeyo — không lưu trên dbdcheats.org.",
							],
						},
						{
							h2: "Cách chúng tôi sử dụng dữ liệu",
							paragraphs: [
								"DBD Cheats cung cấp ESP wallhack, radar hack và DBD Aimbot undetected cho Dead by Daylight trên PC Windows. Phản hồi hỗ trợ, giải quyết đơn hàng và tuân thủ pháp lý khi cần.",
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
							],
						},
						{
							h2: "Quyền của bạn",
							paragraphs: [
								"support@dbdcheats.org cho hỗ trợ và pháp lý.",
								"Email: support@dbdcheats.org",
							],
						},
					],
				},
				refund: {
					title: "Chính sách hoàn tiền | DBD Cheats",
					description: "Chính sách hoàn tiền cho DBD Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Chính sách hoàn tiền",
					intro: "DBD Cheats cung cấp ESP wallhack, radar hack và DBD Aimbot undetected cho Dead by Daylight trên PC Windows. Chính sách hoàn tiền cho dbdcheats.org và giấy phép Dead by Daylight.",
					imageAlt: "DBD Cheats",
					galleryTitle: "DBD Cheats",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "Email hỗ trợ",
					ctaSecondary: "Đọc quyền riêng tư",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Giao hàng kỹ thuật số",
							paragraphs: [
								"DBD Cheats cung cấp ESP wallhack, radar hack và DBD Aimbot undetected cho Dead by Daylight trên PC Windows. Email liên hệ, tham chiếu đơn hàng Zadeyo và dữ liệu bảo mật cơ bản của trang.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "Phê duyệt hoàn tiền",
							paragraphs: [
								"DBD Cheats cung cấp ESP wallhack, radar hack và DBD Aimbot undetected cho Dead by Daylight trên PC Windows. Phản hồi hỗ trợ, giải quyết đơn hàng và tuân thủ pháp lý khi cần.",
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
							],
						},
						{
							h2: "Cách yêu cầu",
							paragraphs: [
								"support@dbdcheats.org cho hỗ trợ và pháp lý.",
								"Email: support@dbdcheats.org",
							],
						},
					],
				},
				terms: {
					title: "Điều khoản sử dụng | DBD Cheats",
					description: "Điều khoản sử dụng cho DBD Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Điều khoản sử dụng",
					intro: "DBD Cheats cung cấp ESP wallhack, radar hack và DBD Aimbot undetected cho Dead by Daylight trên PC Windows. Điều khoản sử dụng cho dbdcheats.org và giấy phép Dead by Daylight.",
					imageAlt: "DBD Cheats",
					galleryTitle: "DBD Cheats",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "Email hỗ trợ",
					ctaSecondary: "Đọc quyền riêng tư",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Chấp nhận điều khoản",
							paragraphs: [
								"DBD Cheats cung cấp ESP wallhack, radar hack và DBD Aimbot undetected cho Dead by Daylight trên PC Windows. Email liên hệ, tham chiếu đơn hàng Zadeyo và dữ liệu bảo mật cơ bản của trang.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "Tuyên bố miễn trừ rủi ro",
							paragraphs: [
								"DBD Cheats cung cấp ESP wallhack, radar hack và DBD Aimbot undetected cho Dead by Daylight trên PC Windows. Phản hồi hỗ trợ, giải quyết đơn hàng và tuân thủ pháp lý khi cần.",
								"Dùng cheat có thể vi phạm điều khoản của đội Dead by Daylight — bạn chịu mọi rủi ro ban.",
							],
						},
						{
							h2: "Thay đổi chính sách",
							paragraphs: [
								"support@dbdcheats.org cho hỗ trợ và pháp lý.",
								"Email: support@dbdcheats.org",
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
					accent: "Undetected чіти Dead by Daylight",
					accentShort: "DBD Cheats",
					subtitle: "ESP wallhack, radar hack і Aimbot для Dead by Daylight на Windows PC — обслуговування Easy Anti-Cheat включено.",
					subtitleShort: "ESP, radar і Aimbot для Dead by Daylight PC",
					buyNow: "Купити",
					seeFeatures: "Дивитися функції",
				},
				trust: {
					status: "Онлайн",
					statusNote: "Пакет DBD Cheats активний для Dead by Daylight на Windows PC.",
					statusShort: "Активний",
					delivery: "Миттєва цифрова доставка",
					platform: "Windows 10 і 11",
					antiCheat: "Підтримка обслуговування Easy Anti-Cheat",
					antiCheatShort: "Easy Anti-Cheat підтримка",
				},
				product: {
					title: "DBD Cheats",
					addToCart: "До кошика",
					monthly: "Щомісяця",
					lifetime: "Назавжди",
					available: "Доступно зараз",
					gameBadge: "Dead by Daylight",
					platformBadge: "Windows PC",
					statusBadge: "Undetected пакет",
				},
				reviews: {
					title: "Що кажуть гравці",
					subtitle: "Останні відгуки покупців DBD Cheats",
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
					tagline: "Undetected ESP, wallhack, radar і Aimbot для Dead by Daylight — оплата через Zadeyo.",
				},
				images: {
					hero: "DBD Cheats hero — ESP and aimbot overlay in Dead by Daylight",
					espWallhack: "Wallhack outlines showing survivors and killers through walls",
					aimbotCombat: "Soft aim assist overlay during a Dead by Daylight trial",
					teamFight: "DBD Cheats combat overlay during a team chase",
					playerEsp: "Player ESP boxes and distance readouts in a Dead by Daylight trial",
					headerArt: "Aimbot view and bone priority controls for Dead by Daylight",
					hacksPackage: "2D radar threat overlay for Dead by Daylight",
					chaseFight: "Aimbot assist during a Dead by Daylight chase",
					battleRoyale: "DBD Cheats in-trial overview for Windows PC",
					trialMap: "ESP markers for generators and hooks in Dead by Daylight",
				},
			},
			pages: {
				home: {
					title: "DBD Cheats 2026 | ESP, Wallhack і Aimbot",
					description: "Undetected чіти Dead by Daylight для Dead by Daylight на PC. ESP wallhack, radar hack, Aimbot, обслуговування Easy Anti-Cheat. Мгновенная цифровая доставка.",
					h1: "DBD Cheats — Undetected ESP, Wallhack і Aimbot",
					intro: "Undetected пакет для Dead by Daylight на Windows PC: ESP wallhack, radar, Aimbot з обслуговуванням Easy Anti-Cheat.",
					imageAlt: "DBD ESP player tags hack",
					galleryTitle: "Галерея DBD Cheats — ESP, Aimbot, wallhack",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "Купити DBD Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Чому DBD Cheats у 2026",
							paragraphs: [
								"DBD Cheats об'єднує ESP wallhack, radar hack і DBD Aimbot у undetected пакеті для Dead by Daylight на Windows PC. Ідеально для читання ворожих загонів у BR і chase.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar і Aimbot в одній ліцензії",
							paragraphs: [
								"DBD Cheats об'єднує ESP wallhack, radar hack і DBD Aimbot у undetected пакеті для Dead by Daylight на Windows PC. Одна ліцензія замість окремих інструментів.",
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
							],
						},
					],
				},
				"dbd-esp": {
					title: "ESP Dead by Daylight | Player Boxes & Wallhack",
					description: "ESP Dead by Daylight: бокси гравців, маркери туш і wallhack overlays. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "ESP Dead by Daylight",
					intro: "DBD Cheats об'єднує ESP wallhack, radar hack і DBD Aimbot у undetected пакеті для Dead by Daylight на Windows PC. ESP Dead by Daylight.",
					imageAlt: "DBD ESP player boxes and distance readouts in a trial",
					galleryTitle: "ESP Dead by Daylight",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "Купити DBD Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "ESP Dead by Daylight",
							paragraphs: [
								"DBD Cheats об'єднує ESP wallhack, radar hack і DBD Aimbot у undetected пакеті для Dead by Daylight на Windows PC. бокси гравців, маркери туш і wallhack overlays.",
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
								"support@dbdcheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				"dbd-aimbot": {
					title: "Aimbot Dead by Daylight | Soft Aim Controls",
					description: "Aimbot Dead by Daylight: soft aim, FOV і профілі Aimbot за видами. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Aimbot Dead by Daylight",
					intro: "DBD Cheats об'єднує ESP wallhack, radar hack і DBD Aimbot у undetected пакеті для Dead by Daylight на Windows PC. Aimbot Dead by Daylight.",
					imageAlt: "DBD Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Dead by Daylight",
					heroImage: "/images/dbd-cheats-aimbot.webp",
					ctaPrimary: "Купити DBD Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Aimbot Dead by Daylight",
							paragraphs: [
								"DBD Cheats об'єднує ESP wallhack, radar hack і DBD Aimbot у undetected пакеті для Dead by Daylight на Windows PC. soft aim, FOV і профілі Aimbot за видами.",
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
								"support@dbdcheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				features: {
					title: "Функції | Full Feature List",
					description: "Функції: ESP, soft aim, керування radar. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Функції",
					intro: "DBD Cheats об'єднує ESP wallhack, radar hack і DBD Aimbot у undetected пакеті для Dead by Daylight на Windows PC. Функції.",
					imageAlt: "DBD Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Функції",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "Купити DBD Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Функції",
							paragraphs: [
								"DBD Cheats об'єднує ESP wallhack, radar hack і DBD Aimbot у undetected пакеті для Dead by Daylight на Windows PC. ESP, soft aim, керування radar.",
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
								"support@dbdcheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				pricing: {
					title: "Ціни | Monthly & Lifetime",
					description: "Ціни: ліцензії $35 на місяць або $150 lifetime. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Ціни",
					intro: "DBD Cheats об'єднує ESP wallhack, radar hack і DBD Aimbot у undetected пакеті для Dead by Daylight на Windows PC. Ціни.",
					imageAlt: "DBD Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Ціни",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "Купити DBD Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Ціни",
							paragraphs: [
								"DBD Cheats об'єднує ESP wallhack, radar hack і DBD Aimbot у undetected пакеті для Dead by Daylight на Windows PC. ліцензії $35 на місяць або $150 lifetime.",
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
								"support@dbdcheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				setup: {
					title: "Встановлення | PC Setup Guide",
					description: "Встановлення: активація Windows PC і налаштування першого запуску. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Встановлення",
					intro: "DBD Cheats об'єднує ESP wallhack, radar hack і DBD Aimbot у undetected пакеті для Dead by Daylight на Windows PC. Встановлення.",
					imageAlt: "DBD Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Встановлення",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "Купити DBD Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Встановлення",
							paragraphs: [
								"DBD Cheats об'єднує ESP wallhack, radar hack і DBD Aimbot у undetected пакеті для Dead by Daylight на Windows PC. активація Windows PC і налаштування першого запуску.",
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
								"support@dbdcheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				updates: {
					title: "Оновлення | Easy Anti-Cheat Maintenance Log",
					description: "Оновлення: статус патчів Easy Anti-Cheat і нотатки rebuild. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Оновлення",
					intro: "DBD Cheats об'єднує ESP wallhack, radar hack і DBD Aimbot у undetected пакеті для Dead by Daylight на Windows PC. Оновлення.",
					imageAlt: "DBD Cheats live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Оновлення",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "Купити DBD Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "Оновлення",
							paragraphs: [
								"DBD Cheats об'єднує ESP wallhack, radar hack і DBD Aimbot у undetected пакеті для Dead by Daylight на Windows PC. статус патчів Easy Anti-Cheat і нотатки rebuild.",
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
								"support@dbdcheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: питання про ESP, soft aim, доставку та Easy Anti-Cheat. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "FAQ",
					intro: "DBD Cheats об'єднує ESP wallhack, radar hack і DBD Aimbot у undetected пакеті для Dead by Daylight на Windows PC. FAQ.",
					imageAlt: "DBD Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "Купити DBD Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"DBD Cheats об'єднує ESP wallhack, radar hack і DBD Aimbot у undetected пакеті для Dead by Daylight на Windows PC. питання про ESP, soft aim, доставку та Easy Anti-Cheat.",
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
								"support@dbdcheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				support: {
					title: "Підтримка | Help & Contact",
					description: "Підтримка: допомога з замовленням і контакт підтримки ліцензій. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Підтримка",
					intro: "DBD Cheats об'єднує ESP wallhack, radar hack і DBD Aimbot у undetected пакеті для Dead by Daylight на Windows PC. Підтримка.",
					imageAlt: "DBD Cheats support page for license and setup help",
					galleryTitle: "Підтримка",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "Купити DBD Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Підтримка",
							paragraphs: [
								"DBD Cheats об'єднує ESP wallhack, radar hack і DBD Aimbot у undetected пакеті для Dead by Daylight на Windows PC. допомога з замовленням і контакт підтримки ліцензій.",
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
								"support@dbdcheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected чіти | Easy Anti-Cheat Safe Status",
					description: "Undetected чіти: undetected обслуговування після патчів Easy Anti-Cheat. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Undetected чіти",
					intro: "DBD Cheats об'єднує ESP wallhack, radar hack і DBD Aimbot у undetected пакеті для Dead by Daylight на Windows PC. Undetected чіти.",
					imageAlt: "DBD Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected чіти",
					heroImage: "/images/dbd-cheats-wallhack.webp",
					ctaPrimary: "Купити DBD Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "Undetected чіти",
							paragraphs: [
								"DBD Cheats об'єднує ESP wallhack, radar hack і DBD Aimbot у undetected пакеті для Dead by Daylight на Windows PC. undetected обслуговування після патчів Easy Anti-Cheat.",
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
								"support@dbdcheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				wallhack: {
					title: "Dead by Daylight Wallhack | ESP Visibility",
					description: "Dead by Daylight Wallhack: wallhack ESP для гравців, туш і дистанції. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Dead by Daylight Wallhack",
					intro: "DBD Cheats об'єднує ESP wallhack, radar hack і DBD Aimbot у undetected пакеті для Dead by Daylight на Windows PC. Dead by Daylight Wallhack.",
					imageAlt: "dbd wallhack visibility through walls in a trial",
					galleryTitle: "Dead by Daylight Wallhack",
					heroImage: "/images/dbd-cheats-wallhack.webp",
					ctaPrimary: "Купити DBD Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Dead by Daylight Wallhack",
							paragraphs: [
								"DBD Cheats об'єднує ESP wallhack, radar hack і DBD Aimbot у undetected пакеті для Dead by Daylight на Windows PC. wallhack ESP для гравців, туш і дистанції.",
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
								"support@dbdcheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: 2D radar підказки для флангів і ротацій. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Radar hack",
					intro: "DBD Cheats об'єднує ESP wallhack, radar hack і DBD Aimbot у undetected пакеті для Dead by Daylight на Windows PC. Radar hack.",
					imageAlt: "Dead by Daylight 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "Купити DBD Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"DBD Cheats об'єднує ESP wallhack, radar hack і DBD Aimbot у undetected пакеті для Dead by Daylight на Windows PC. 2D radar підказки для флангів і ротацій.",
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
								"support@dbdcheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Patch Maintenance",
					description: "Bypass Easy Anti-Cheat: як обробляються оновлення Easy Anti-Cheat для Dead by Daylight hacks. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "DBD Cheats об'єднує ESP wallhack, radar hack і DBD Aimbot у undetected пакеті для Dead by Daylight на Windows PC. Bypass Easy Anti-Cheat.",
					imageAlt: "DBD Cheats maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/dbd-cheats-aimbot.webp",
					ctaPrimary: "Купити DBD Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"DBD Cheats об'єднує ESP wallhack, radar hack і DBD Aimbot у undetected пакеті для Dead by Daylight на Windows PC. як обробляються оновлення Easy Anti-Cheat для Dead by Daylight hacks.",
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
								"support@dbdcheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Чіти Dead by Daylight 2026 | Buyer Guide",
					description: "Чіти Dead by Daylight 2026: чеклист dbd cheats 2026 перед checkout. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Чіти Dead by Daylight 2026",
					intro: "DBD Cheats об'єднує ESP wallhack, radar hack і DBD Aimbot у undetected пакеті для Dead by Daylight на Windows PC. Чіти Dead by Daylight 2026.",
					imageAlt: "DBD Cheats product overview for Dead by Daylight",
					galleryTitle: "Чіти Dead by Daylight 2026",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "Купити DBD Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "Чіти Dead by Daylight 2026",
							paragraphs: [
								"DBD Cheats об'єднує ESP wallhack, radar hack і DBD Aimbot у undetected пакеті для Dead by Daylight на Windows PC. чеклист dbd cheats 2026 перед checkout.",
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
								"support@dbdcheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				hacks: {
					title: "Чіти Dead by Daylight | ESP Aimbot Guide",
					description: "Чіти Dead by Daylight: стовп DBD Cheats для ESP і Aimbot. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Чіти Dead by Daylight",
					intro: "DBD Cheats об'єднує ESP wallhack, radar hack і DBD Aimbot у undetected пакеті для Dead by Daylight на Windows PC. Чіти Dead by Daylight.",
					imageAlt: "DBD Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Чіти Dead by Daylight",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "Купити DBD Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Чіти Dead by Daylight",
							paragraphs: [
								"DBD Cheats об'єднує ESP wallhack, radar hack і DBD Aimbot у undetected пакеті для Dead by Daylight на Windows PC. стовп DBD Cheats для ESP і Aimbot.",
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
								"support@dbdcheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Завантаження DBD Cheats | Instant Access",
					description: "Завантаження DBD Cheats: цифрове завантаження ліцензії після оплати. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Завантаження DBD Cheats",
					intro: "DBD Cheats об'єднує ESP wallhack, radar hack і DBD Aimbot у undetected пакеті для Dead by Daylight на Windows PC. Завантаження DBD Cheats.",
					imageAlt: "DBD Cheats download and install delivery flow",
					galleryTitle: "Завантаження DBD Cheats",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "Купити DBD Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Завантаження DBD Cheats",
							paragraphs: [
								"DBD Cheats об'єднує ESP wallhack, radar hack і DBD Aimbot у undetected пакеті для Dead by Daylight на Windows PC. цифрове завантаження ліцензії після оплати.",
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
								"support@dbdcheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Мод-меню Dead by Daylight | In-Game Toggles",
					description: "Мод-меню Dead by Daylight: перемикачі ESP і soft aim у клієнті. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Мод-меню Dead by Daylight",
					intro: "DBD Cheats об'єднує ESP wallhack, radar hack і DBD Aimbot у undetected пакеті для Dead by Daylight на Windows PC. Мод-меню Dead by Daylight.",
					imageAlt: "DBD Cheats in-game menu controls",
					galleryTitle: "Мод-меню Dead by Daylight",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "Купити DBD Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Мод-меню Dead by Daylight",
							paragraphs: [
								"DBD Cheats об'єднує ESP wallhack, radar hack і DBD Aimbot у undetected пакеті для Dead by Daylight на Windows PC. перемикачі ESP і soft aim у клієнті.",
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
								"support@dbdcheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Dead by Daylight | Smooth Aim Settings",
					description: "Soft aim Dead by Daylight: плавні налаштування soft aim для Windows PC. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Soft aim Dead by Daylight",
					intro: "DBD Cheats об'єднує ESP wallhack, radar hack і DBD Aimbot у undetected пакеті для Dead by Daylight на Windows PC. Soft aim Dead by Daylight.",
					imageAlt: "Dead by Daylight soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Dead by Daylight",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "Купити DBD Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "Soft aim Dead by Daylight",
							paragraphs: [
								"DBD Cheats об'єднує ESP wallhack, radar hack і DBD Aimbot у undetected пакеті для Dead by Daylight на Windows PC. плавні налаштування soft aim для Windows PC.",
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
								"support@dbdcheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Найкращі чіти Dead by Daylight | Buyer Checklist",
					description: "Найкращі чіти Dead by Daylight: що порівняти перед покупкою dbd cheats. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Найкращі чіти Dead by Daylight",
					intro: "DBD Cheats об'єднує ESP wallhack, radar hack і DBD Aimbot у undetected пакеті для Dead by Daylight на Windows PC. Найкращі чіти Dead by Daylight.",
					imageAlt: "DBD Cheats overview for Dead by Daylight on PC",
					galleryTitle: "Найкращі чіти Dead by Daylight",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "Купити DBD Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Найкращі чіти Dead by Daylight",
							paragraphs: [
								"DBD Cheats об'єднує ESP wallhack, radar hack і DBD Aimbot у undetected пакеті для Dead by Daylight на Windows PC. що порівняти перед покупкою dbd cheats.",
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
								"support@dbdcheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Хак aimbot Dead by Daylight | Soft Aim Assist",
					description: "Хак aimbot Dead by Daylight: undetected Aimbot hack assist для Dead by Daylight. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Хак aimbot Dead by Daylight",
					intro: "DBD Cheats об'єднує ESP wallhack, radar hack і DBD Aimbot у undetected пакеті для Dead by Daylight на Windows PC. Хак aimbot Dead by Daylight.",
					imageAlt: "DBD Aimbot hack controls and bone priority",
					galleryTitle: "Хак aimbot Dead by Daylight",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "Купити DBD Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "Хак aimbot Dead by Daylight",
							paragraphs: [
								"DBD Cheats об'єднує ESP wallhack, radar hack і DBD Aimbot у undetected пакеті для Dead by Daylight на Windows PC. undetected Aimbot hack assist для Dead by Daylight.",
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
								"support@dbdcheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Хак ESP Dead by Daylight | Boxes & Loot",
					description: "Хак ESP Dead by Daylight: ESP hack бокси, pins туш і дистанція. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Хак ESP Dead by Daylight",
					intro: "DBD Cheats об'єднує ESP wallhack, radar hack і DBD Aimbot у undetected пакеті для Dead by Daylight на Windows PC. Хак ESP Dead by Daylight.",
					imageAlt: "DBD ESP hack boxes and generator markers",
					galleryTitle: "Хак ESP Dead by Daylight",
					heroImage: "/images/dbd-cheats-wallhack.webp",
					ctaPrimary: "Купити DBD Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Хак ESP Dead by Daylight",
							paragraphs: [
								"DBD Cheats об'єднує ESP wallhack, radar hack і DBD Aimbot у undetected пакеті для Dead by Daylight на Windows PC. ESP hack бокси, pins туш і дистанція.",
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
								"support@dbdcheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Dead by Daylight | What It Means",
					description: "Unlock all Dead by Daylight: пошуки unlock-all vs справжні ESP і Aimbot інструменти. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Unlock all Dead by Daylight",
					intro: "DBD Cheats об'єднує ESP wallhack, radar hack і DBD Aimbot у undetected пакеті для Dead by Daylight на Windows PC. Unlock all Dead by Daylight.",
					imageAlt: "DBD Cheats license features overview",
					galleryTitle: "Unlock all Dead by Daylight",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "Купити DBD Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Dead by Daylight",
							paragraphs: [
								"DBD Cheats об'єднує ESP wallhack, radar hack і DBD Aimbot у undetected пакеті для Dead by Daylight на Windows PC. пошуки unlock-all vs справжні ESP і Aimbot інструменти.",
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
								"support@dbdcheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				privacy: {
					title: "Політика конфіденційності | DBD Cheats",
					description: "Політика конфіденційності для DBD Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Політика конфіденційності",
					intro: "DBD Cheats об'єднує ESP wallhack, radar hack і DBD Aimbot у undetected пакеті для Dead by Daylight на Windows PC. Політика конфіденційності для dbdcheats.org та ліцензій Dead by Daylight.",
					imageAlt: "DBD Cheats",
					galleryTitle: "DBD Cheats",
					heroImage: "/images/dbd-cheats-aimbot.webp",
					ctaPrimary: "Написати в підтримку",
					ctaSecondary: "Читати умови",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Інформація, яку ми збираємо",
							paragraphs: [
								"DBD Cheats об'єднує ESP wallhack, radar hack і DBD Aimbot у undetected пакеті для Dead by Daylight на Windows PC. Контактний email, посилання на замовлення Zadeyo та базові дані безпеки сайту.",
								"Платіжні дані обробляються через checkout Zadeyo — не зберігаються на dbdcheats.org.",
							],
						},
						{
							h2: "Як ми використовуємо дані",
							paragraphs: [
								"DBD Cheats об'єднує ESP wallhack, radar hack і DBD Aimbot у undetected пакеті для Dead by Daylight на Windows PC. Відповіді підтримки, вирішення замовлень та правова відповідність за потреби.",
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
							],
						},
						{
							h2: "Ваші права",
							paragraphs: [
								"support@dbdcheats.org для підтримки та правових питань.",
								"Email: support@dbdcheats.org",
							],
						},
					],
				},
				refund: {
					title: "Політика повернення | DBD Cheats",
					description: "Політика повернення для DBD Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Політика повернення",
					intro: "DBD Cheats об'єднує ESP wallhack, radar hack і DBD Aimbot у undetected пакеті для Dead by Daylight на Windows PC. Політика повернення для dbdcheats.org та ліцензій Dead by Daylight.",
					imageAlt: "DBD Cheats",
					galleryTitle: "DBD Cheats",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "Написати в підтримку",
					ctaSecondary: "Читати конфіденційність",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Цифрова доставка",
							paragraphs: [
								"DBD Cheats об'єднує ESP wallhack, radar hack і DBD Aimbot у undetected пакеті для Dead by Daylight на Windows PC. Контактний email, посилання на замовлення Zadeyo та базові дані безпеки сайту.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "Схвалення повернення",
							paragraphs: [
								"DBD Cheats об'єднує ESP wallhack, radar hack і DBD Aimbot у undetected пакеті для Dead by Daylight на Windows PC. Відповіді підтримки, вирішення замовлень та правова відповідність за потреби.",
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
							],
						},
						{
							h2: "Як подати запит",
							paragraphs: [
								"support@dbdcheats.org для підтримки та правових питань.",
								"Email: support@dbdcheats.org",
							],
						},
					],
				},
				terms: {
					title: "Умови використання | DBD Cheats",
					description: "Умови використання для DBD Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Умови використання",
					intro: "DBD Cheats об'єднує ESP wallhack, radar hack і DBD Aimbot у undetected пакеті для Dead by Daylight на Windows PC. Умови використання для dbdcheats.org та ліцензій Dead by Daylight.",
					imageAlt: "DBD Cheats",
					galleryTitle: "DBD Cheats",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "Написати в підтримку",
					ctaSecondary: "Читати конфіденційність",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Прийняття умов",
							paragraphs: [
								"DBD Cheats об'єднує ESP wallhack, radar hack і DBD Aimbot у undetected пакеті для Dead by Daylight на Windows PC. Контактний email, посилання на замовлення Zadeyo та базові дані безпеки сайту.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "Попередження про ризики",
							paragraphs: [
								"DBD Cheats об'єднує ESP wallhack, radar hack і DBD Aimbot у undetected пакеті для Dead by Daylight на Windows PC. Відповіді підтримки, вирішення замовлень та правова відповідність за потреби.",
								"Використання читів може порушувати умови команди Dead by Daylight — ви приймаєте на себе ризик бану.",
							],
						},
						{
							h2: "Зміни політики",
							paragraphs: [
								"support@dbdcheats.org для підтримки та правових питань.",
								"Email: support@dbdcheats.org",
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
					accent: "Undetected dbd cheaty",
					accentShort: "DBD Cheats",
					subtitle: "ESP wallhack, radar hack a Aimbot pro Dead by Daylight na Windows PC — údržba Easy Anti-Cheat v ceně.",
					subtitleShort: "ESP, radar a Aimbot pro Dead by Daylight PC",
					buyNow: "Koupit",
					seeFeatures: "Zobrazit funkce",
				},
				trust: {
					status: "Online",
					statusNote: "Balíček DBD Cheats je aktivní pro Dead by Daylight na Windows PC.",
					statusShort: "Aktivní",
					delivery: "Okamžité digitální doručení",
					platform: "Windows 10 a 11",
					antiCheat: "Podpora údržby Easy Anti-Cheat",
					antiCheatShort: "Easy Anti-Cheat podpora",
				},
				product: {
					title: "DBD Cheats",
					addToCart: "Přidat do košíku",
					monthly: "Měsíčně",
					lifetime: "Doživotně",
					available: "Dostupné nyní",
					gameBadge: "Dead by Daylight",
					platformBadge: "Windows PC",
					statusBadge: "Undetected balíček",
				},
				reviews: {
					title: "Co říkají hráči",
					subtitle: "Nedávná zpětná vazba od kupujících DBD Cheats",
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
					tagline: "Undetected ESP, wallhack, radar a Aimbot pro Dead by Daylight — checkout přes Zadeyo.",
				},
				images: {
					hero: "DBD Cheats hero — ESP and aimbot overlay in Dead by Daylight",
					espWallhack: "Wallhack outlines showing survivors and killers through walls",
					aimbotCombat: "Soft aim assist overlay during a Dead by Daylight trial",
					teamFight: "DBD Cheats combat overlay during a team chase",
					playerEsp: "Player ESP boxes and distance readouts in a Dead by Daylight trial",
					headerArt: "Aimbot view and bone priority controls for Dead by Daylight",
					hacksPackage: "2D radar threat overlay for Dead by Daylight",
					chaseFight: "Aimbot assist during a Dead by Daylight chase",
					battleRoyale: "DBD Cheats in-trial overview for Windows PC",
					trialMap: "ESP markers for generators and hooks in Dead by Daylight",
				},
			},
			pages: {
				home: {
					title: "DBD Cheats 2026 | ESP, Wallhack a Aimbot",
					description: "Undetected dbd cheaty pro Dead by Daylight na PC. ESP wallhack, radar hack, Aimbot, údržba Easy Anti-Cheat. Okamžité digitální doručení.",
					h1: "DBD Cheats — Undetected ESP, Wallhack a Aimbot",
					intro: "Undetected balíček pro Dead by Daylight na Windows PC: ESP wallhack, radar, Aimbot s údržbou Easy Anti-Cheat.",
					imageAlt: "DBD ESP player tags hack",
					galleryTitle: "Galerie DBD Cheats — ESP, Aimbot, wallhack",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "Koupit DBD Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Proč DBD Cheats v roce 2026",
							paragraphs: [
								"DBD Cheats spojuje ESP wallhack, radar hack a DBD Aimbot jako undetected balíček pro Dead by Daylight na Windows PC. Ideální pro čtení nepřátelských teamů v BR a chase.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar a Aimbot v jedné licenci",
							paragraphs: [
								"DBD Cheats spojuje ESP wallhack, radar hack a DBD Aimbot jako undetected balíček pro Dead by Daylight na Windows PC. Jedna licence místo samostatných nástrojů.",
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
							],
						},
					],
				},
				"dbd-esp": {
					title: "DBD ESP | Player Boxes & Wallhack",
					description: "DBD ESP: hráčské boxy, markery kadáverů a wallhack overlaye. okamžité digitální doručení. undetected — Windows PC.",
					h1: "DBD ESP",
					intro: "DBD Cheats spojuje ESP wallhack, radar hack a DBD Aimbot jako undetected balíček pro Dead by Daylight na Windows PC. DBD ESP.",
					imageAlt: "DBD ESP player boxes and distance readouts in a trial",
					galleryTitle: "DBD ESP",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "Koupit DBD Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "DBD ESP",
							paragraphs: [
								"DBD Cheats spojuje ESP wallhack, radar hack a DBD Aimbot jako undetected balíček pro Dead by Daylight na Windows PC. hráčské boxy, markery kadáverů a wallhack overlaye.",
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
								"support@dbdcheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				"dbd-aimbot": {
					title: "DBD Aimbot | Soft Aim Controls",
					description: "DBD Aimbot: soft aim, FOV a Aimbot profily podle druhu. okamžité digitální doručení. undetected — Windows PC.",
					h1: "DBD Aimbot",
					intro: "DBD Cheats spojuje ESP wallhack, radar hack a DBD Aimbot jako undetected balíček pro Dead by Daylight na Windows PC. DBD Aimbot.",
					imageAlt: "DBD Aimbot and soft aim controls on Windows PC",
					galleryTitle: "DBD Aimbot",
					heroImage: "/images/dbd-cheats-aimbot.webp",
					ctaPrimary: "Koupit DBD Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "DBD Aimbot",
							paragraphs: [
								"DBD Cheats spojuje ESP wallhack, radar hack a DBD Aimbot jako undetected balíček pro Dead by Daylight na Windows PC. soft aim, FOV a Aimbot profily podle druhu.",
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
								"support@dbdcheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				features: {
					title: "Funkce | Full Feature List",
					description: "Funkce: ESP, soft aim, ovládání radar. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Funkce",
					intro: "DBD Cheats spojuje ESP wallhack, radar hack a DBD Aimbot jako undetected balíček pro Dead by Daylight na Windows PC. Funkce.",
					imageAlt: "DBD Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funkce",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "Koupit DBD Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funkce",
							paragraphs: [
								"DBD Cheats spojuje ESP wallhack, radar hack a DBD Aimbot jako undetected balíček pro Dead by Daylight na Windows PC. ESP, soft aim, ovládání radar.",
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
								"support@dbdcheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				pricing: {
					title: "Ceny | Monthly & Lifetime",
					description: "Ceny: licence $35 měsíčně nebo $150 lifetime. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Ceny",
					intro: "DBD Cheats spojuje ESP wallhack, radar hack a DBD Aimbot jako undetected balíček pro Dead by Daylight na Windows PC. Ceny.",
					imageAlt: "DBD Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Ceny",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "Koupit DBD Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Ceny",
							paragraphs: [
								"DBD Cheats spojuje ESP wallhack, radar hack a DBD Aimbot jako undetected balíček pro Dead by Daylight na Windows PC. licence $35 měsíčně nebo $150 lifetime.",
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
								"support@dbdcheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				setup: {
					title: "Instalace | PC Setup Guide",
					description: "Instalace: aktivace Windows PC a nastavení prvního spuštění. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Instalace",
					intro: "DBD Cheats spojuje ESP wallhack, radar hack a DBD Aimbot jako undetected balíček pro Dead by Daylight na Windows PC. Instalace.",
					imageAlt: "DBD Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Instalace",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "Koupit DBD Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalace",
							paragraphs: [
								"DBD Cheats spojuje ESP wallhack, radar hack a DBD Aimbot jako undetected balíček pro Dead by Daylight na Windows PC. aktivace Windows PC a nastavení prvního spuštění.",
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
								"support@dbdcheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				updates: {
					title: "Aktualizace | Easy Anti-Cheat Maintenance Log",
					description: "Aktualizace: stav patchů Easy Anti-Cheat a poznámky k rebuild. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Aktualizace",
					intro: "DBD Cheats spojuje ESP wallhack, radar hack a DBD Aimbot jako undetected balíček pro Dead by Daylight na Windows PC. Aktualizace.",
					imageAlt: "DBD Cheats live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Aktualizace",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "Koupit DBD Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "Aktualizace",
							paragraphs: [
								"DBD Cheats spojuje ESP wallhack, radar hack a DBD Aimbot jako undetected balíček pro Dead by Daylight na Windows PC. stav patchů Easy Anti-Cheat a poznámky k rebuild.",
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
								"support@dbdcheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: otázky k ESP, soft aim, doručení a Easy Anti-Cheat. okamžité digitální doručení. undetected — Windows PC.",
					h1: "FAQ",
					intro: "DBD Cheats spojuje ESP wallhack, radar hack a DBD Aimbot jako undetected balíček pro Dead by Daylight na Windows PC. FAQ.",
					imageAlt: "DBD Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "Koupit DBD Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"DBD Cheats spojuje ESP wallhack, radar hack a DBD Aimbot jako undetected balíček pro Dead by Daylight na Windows PC. otázky k ESP, soft aim, doručení a Easy Anti-Cheat.",
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
								"support@dbdcheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				support: {
					title: "Podpora | Help & Contact",
					description: "Podpora: pomoc s objednávkou a kontakt podpory licencí. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Podpora",
					intro: "DBD Cheats spojuje ESP wallhack, radar hack a DBD Aimbot jako undetected balíček pro Dead by Daylight na Windows PC. Podpora.",
					imageAlt: "DBD Cheats support page for license and setup help",
					galleryTitle: "Podpora",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "Koupit DBD Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Podpora",
							paragraphs: [
								"DBD Cheats spojuje ESP wallhack, radar hack a DBD Aimbot jako undetected balíček pro Dead by Daylight na Windows PC. pomoc s objednávkou a kontakt podpory licencí.",
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
								"support@dbdcheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected cheaty | Easy Anti-Cheat Safe Status",
					description: "Undetected cheaty: undetected údržba po patchech Easy Anti-Cheat. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Undetected cheaty",
					intro: "DBD Cheats spojuje ESP wallhack, radar hack a DBD Aimbot jako undetected balíček pro Dead by Daylight na Windows PC. Undetected cheaty.",
					imageAlt: "DBD Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected cheaty",
					heroImage: "/images/dbd-cheats-wallhack.webp",
					ctaPrimary: "Koupit DBD Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "Undetected cheaty",
							paragraphs: [
								"DBD Cheats spojuje ESP wallhack, radar hack a DBD Aimbot jako undetected balíček pro Dead by Daylight na Windows PC. undetected údržba po patchech Easy Anti-Cheat.",
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
								"support@dbdcheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				wallhack: {
					title: "Dead by Daylight Wallhack | ESP Visibility",
					description: "Dead by Daylight Wallhack: wallhack ESP pro hráče, kadávery a vzdálenost. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Dead by Daylight Wallhack",
					intro: "DBD Cheats spojuje ESP wallhack, radar hack a DBD Aimbot jako undetected balíček pro Dead by Daylight na Windows PC. Dead by Daylight Wallhack.",
					imageAlt: "dbd wallhack visibility through walls in a trial",
					galleryTitle: "Dead by Daylight Wallhack",
					heroImage: "/images/dbd-cheats-wallhack.webp",
					ctaPrimary: "Koupit DBD Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Dead by Daylight Wallhack",
							paragraphs: [
								"DBD Cheats spojuje ESP wallhack, radar hack a DBD Aimbot jako undetected balíček pro Dead by Daylight na Windows PC. wallhack ESP pro hráče, kadávery a vzdálenost.",
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
								"support@dbdcheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar signály pro flanly a rotace. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "DBD Cheats spojuje ESP wallhack, radar hack a DBD Aimbot jako undetected balíček pro Dead by Daylight na Windows PC. Radar Hack.",
					imageAlt: "Dead by Daylight 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "Koupit DBD Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"DBD Cheats spojuje ESP wallhack, radar hack a DBD Aimbot jako undetected balíček pro Dead by Daylight na Windows PC. 2D radar signály pro flanly a rotace.",
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
								"support@dbdcheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				eac: {
					title: "Easy Anti-Cheat Bypass | Patch Maintenance",
					description: "Easy Anti-Cheat Bypass: jak se řeší aktualizace Easy Anti-Cheat pro Dead by Daylight hacks. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Easy Anti-Cheat Bypass",
					intro: "DBD Cheats spojuje ESP wallhack, radar hack a DBD Aimbot jako undetected balíček pro Dead by Daylight na Windows PC. Easy Anti-Cheat Bypass.",
					imageAlt: "DBD Cheats maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Easy Anti-Cheat Bypass",
					heroImage: "/images/dbd-cheats-aimbot.webp",
					ctaPrimary: "Koupit DBD Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Easy Anti-Cheat Bypass",
							paragraphs: [
								"DBD Cheats spojuje ESP wallhack, radar hack a DBD Aimbot jako undetected balíček pro Dead by Daylight na Windows PC. jak se řeší aktualizace Easy Anti-Cheat pro Dead by Daylight hacks.",
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
								"support@dbdcheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "dbd cheaty 2026 | Buyer Guide",
					description: "dbd cheaty 2026: checklist dbd cheats 2026 před checkout. okamžité digitální doručení. undetected — Windows PC.",
					h1: "dbd cheaty 2026",
					intro: "DBD Cheats spojuje ESP wallhack, radar hack a DBD Aimbot jako undetected balíček pro Dead by Daylight na Windows PC. dbd cheaty 2026.",
					imageAlt: "DBD Cheats product overview for Dead by Daylight",
					galleryTitle: "dbd cheaty 2026",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "Koupit DBD Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "dbd cheaty 2026",
							paragraphs: [
								"DBD Cheats spojuje ESP wallhack, radar hack a DBD Aimbot jako undetected balíček pro Dead by Daylight na Windows PC. checklist dbd cheats 2026 před checkout.",
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
								"support@dbdcheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				hacks: {
					title: "dbd cheaty | ESP Aimbot Guide",
					description: "dbd cheaty: pilíř DBD Cheats pro ESP a Aimbot. okamžité digitální doručení. undetected — Windows PC.",
					h1: "dbd cheaty",
					intro: "DBD Cheats spojuje ESP wallhack, radar hack a DBD Aimbot jako undetected balíček pro Dead by Daylight na Windows PC. dbd cheaty.",
					imageAlt: "DBD Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "dbd cheaty",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "Koupit DBD Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "dbd cheaty",
							paragraphs: [
								"DBD Cheats spojuje ESP wallhack, radar hack a DBD Aimbot jako undetected balíček pro Dead by Daylight na Windows PC. pilíř DBD Cheats pro ESP a Aimbot.",
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
								"support@dbdcheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Stáhnout DBD Cheats | Instant Access",
					description: "Stáhnout DBD Cheats: digitální stažení licence po platbě. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Stáhnout DBD Cheats",
					intro: "DBD Cheats spojuje ESP wallhack, radar hack a DBD Aimbot jako undetected balíček pro Dead by Daylight na Windows PC. Stáhnout DBD Cheats.",
					imageAlt: "DBD Cheats download and install delivery flow",
					galleryTitle: "Stáhnout DBD Cheats",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "Koupit DBD Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Stáhnout DBD Cheats",
							paragraphs: [
								"DBD Cheats spojuje ESP wallhack, radar hack a DBD Aimbot jako undetected balíček pro Dead by Daylight na Windows PC. digitální stažení licence po platbě.",
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
								"support@dbdcheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Dead by Daylight mod menu | In-Game Toggles",
					description: "Dead by Daylight mod menu: přepínače ESP a soft aim v klientu. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Dead by Daylight mod menu",
					intro: "DBD Cheats spojuje ESP wallhack, radar hack a DBD Aimbot jako undetected balíček pro Dead by Daylight na Windows PC. Dead by Daylight mod menu.",
					imageAlt: "DBD Cheats in-game menu controls",
					galleryTitle: "Dead by Daylight mod menu",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "Koupit DBD Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Dead by Daylight mod menu",
							paragraphs: [
								"DBD Cheats spojuje ESP wallhack, radar hack a DBD Aimbot jako undetected balíček pro Dead by Daylight na Windows PC. přepínače ESP a soft aim v klientu.",
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
								"support@dbdcheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Dead by Daylight Soft Aim | Smooth Aim Settings",
					description: "Dead by Daylight Soft Aim: plynulé nastavení soft aim pro Windows PC. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Dead by Daylight Soft Aim",
					intro: "DBD Cheats spojuje ESP wallhack, radar hack a DBD Aimbot jako undetected balíček pro Dead by Daylight na Windows PC. Dead by Daylight Soft Aim.",
					imageAlt: "Dead by Daylight soft aim FOV and smoothness settings",
					galleryTitle: "Dead by Daylight Soft Aim",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "Koupit DBD Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "Dead by Daylight Soft Aim",
							paragraphs: [
								"DBD Cheats spojuje ESP wallhack, radar hack a DBD Aimbot jako undetected balíček pro Dead by Daylight na Windows PC. plynulé nastavení soft aim pro Windows PC.",
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
								"support@dbdcheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Nejlepší dbd cheaty | Buyer Checklist",
					description: "Nejlepší dbd cheaty: co porovnat před nákupem dbd cheats. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Nejlepší dbd cheaty",
					intro: "DBD Cheats spojuje ESP wallhack, radar hack a DBD Aimbot jako undetected balíček pro Dead by Daylight na Windows PC. Nejlepší dbd cheaty.",
					imageAlt: "DBD Cheats overview for Dead by Daylight on PC",
					galleryTitle: "Nejlepší dbd cheaty",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "Koupit DBD Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Nejlepší dbd cheaty",
							paragraphs: [
								"DBD Cheats spojuje ESP wallhack, radar hack a DBD Aimbot jako undetected balíček pro Dead by Daylight na Windows PC. co porovnat před nákupem dbd cheats.",
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
								"support@dbdcheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "DBD Aimbot hack | Soft Aim Assist",
					description: "DBD Aimbot hack: undetected Aimbot hack assist pro Dead by Daylight. okamžité digitální doručení. undetected — Windows PC.",
					h1: "DBD Aimbot hack",
					intro: "DBD Cheats spojuje ESP wallhack, radar hack a DBD Aimbot jako undetected balíček pro Dead by Daylight na Windows PC. DBD Aimbot hack.",
					imageAlt: "DBD Aimbot hack controls and bone priority",
					galleryTitle: "DBD Aimbot hack",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "Koupit DBD Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "DBD Aimbot hack",
							paragraphs: [
								"DBD Cheats spojuje ESP wallhack, radar hack a DBD Aimbot jako undetected balíček pro Dead by Daylight na Windows PC. undetected Aimbot hack assist pro Dead by Daylight.",
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
								"support@dbdcheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				"esp-hack": {
					title: "DBD ESP hack | Boxes & Loot",
					description: "DBD ESP hack: ESP hack boxy, piny kadáverů a vzdálenost. okamžité digitální doručení. undetected — Windows PC.",
					h1: "DBD ESP hack",
					intro: "DBD Cheats spojuje ESP wallhack, radar hack a DBD Aimbot jako undetected balíček pro Dead by Daylight na Windows PC. DBD ESP hack.",
					imageAlt: "DBD ESP hack boxes and generator markers",
					galleryTitle: "DBD ESP hack",
					heroImage: "/images/dbd-cheats-wallhack.webp",
					ctaPrimary: "Koupit DBD Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "DBD ESP hack",
							paragraphs: [
								"DBD Cheats spojuje ESP wallhack, radar hack a DBD Aimbot jako undetected balíček pro Dead by Daylight na Windows PC. ESP hack boxy, piny kadáverů a vzdálenost.",
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
								"support@dbdcheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Dead by Daylight Unlock All | What It Means",
					description: "Dead by Daylight Unlock All: vyhledávání unlock-all vs skutečné ESP a Aimbot nástroje. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Dead by Daylight Unlock All",
					intro: "DBD Cheats spojuje ESP wallhack, radar hack a DBD Aimbot jako undetected balíček pro Dead by Daylight na Windows PC. Dead by Daylight Unlock All.",
					imageAlt: "DBD Cheats license features overview",
					galleryTitle: "Dead by Daylight Unlock All",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "Koupit DBD Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Dead by Daylight Unlock All",
							paragraphs: [
								"DBD Cheats spojuje ESP wallhack, radar hack a DBD Aimbot jako undetected balíček pro Dead by Daylight na Windows PC. vyhledávání unlock-all vs skutečné ESP a Aimbot nástroje.",
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
								"support@dbdcheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				privacy: {
					title: "Zásady ochrany soukromí | DBD Cheats",
					description: "Zásady ochrany soukromí pro DBD Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Zásady ochrany soukromí",
					intro: "DBD Cheats spojuje ESP wallhack, radar hack a DBD Aimbot jako undetected balíček pro Dead by Daylight na Windows PC. Zásady ochrany soukromí pro dbdcheats.org a licence Dead by Daylight.",
					imageAlt: "DBD Cheats",
					galleryTitle: "DBD Cheats",
					heroImage: "/images/dbd-cheats-aimbot.webp",
					ctaPrimary: "E-mail podpoře",
					ctaSecondary: "Přečíst podmínky",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Informace, které shromažďujeme",
							paragraphs: [
								"DBD Cheats spojuje ESP wallhack, radar hack a DBD Aimbot jako undetected balíček pro Dead by Daylight na Windows PC. Kontaktní e-mail, reference objednávek Zadeyo a základní bezpečnostní data webu.",
								"Platební údaje zpracovává checkout Zadeyo — neukládají se na dbdcheats.org.",
							],
						},
						{
							h2: "Jak používáme data",
							paragraphs: [
								"DBD Cheats spojuje ESP wallhack, radar hack a DBD Aimbot jako undetected balíček pro Dead by Daylight na Windows PC. Odpovědi podpory, vyřizování objednávek a právní soulad v případě potřeby.",
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
							],
						},
						{
							h2: "Vaše práva",
							paragraphs: [
								"support@dbdcheats.org pro podporu a právní dotazy.",
								"E-mail: support@dbdcheats.org",
							],
						},
					],
				},
				refund: {
					title: "Zásady vrácení peněz | DBD Cheats",
					description: "Zásady vrácení peněz pro DBD Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Zásady vrácení peněz",
					intro: "DBD Cheats spojuje ESP wallhack, radar hack a DBD Aimbot jako undetected balíček pro Dead by Daylight na Windows PC. Zásady vrácení peněz pro dbdcheats.org a licence Dead by Daylight.",
					imageAlt: "DBD Cheats",
					galleryTitle: "DBD Cheats",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "E-mail podpoře",
					ctaSecondary: "Přečíst soukromí",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digitální doručení",
							paragraphs: [
								"DBD Cheats spojuje ESP wallhack, radar hack a DBD Aimbot jako undetected balíček pro Dead by Daylight na Windows PC. Kontaktní e-mail, reference objednávek Zadeyo a základní bezpečnostní data webu.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "Schválení vrácení",
							paragraphs: [
								"DBD Cheats spojuje ESP wallhack, radar hack a DBD Aimbot jako undetected balíček pro Dead by Daylight na Windows PC. Odpovědi podpory, vyřizování objednávek a právní soulad v případě potřeby.",
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
							],
						},
						{
							h2: "Jak požádat",
							paragraphs: [
								"support@dbdcheats.org pro podporu a právní dotazy.",
								"E-mail: support@dbdcheats.org",
							],
						},
					],
				},
				terms: {
					title: "Podmínky použití | DBD Cheats",
					description: "Podmínky použití pro DBD Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Podmínky použití",
					intro: "DBD Cheats spojuje ESP wallhack, radar hack a DBD Aimbot jako undetected balíček pro Dead by Daylight na Windows PC. Podmínky použití pro dbdcheats.org a licence Dead by Daylight.",
					imageAlt: "DBD Cheats",
					galleryTitle: "DBD Cheats",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "E-mail podpoře",
					ctaSecondary: "Přečíst soukromí",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Přijetí podmínek",
							paragraphs: [
								"DBD Cheats spojuje ESP wallhack, radar hack a DBD Aimbot jako undetected balíček pro Dead by Daylight na Windows PC. Kontaktní e-mail, reference objednávek Zadeyo a základní bezpečnostní data webu.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "Upozornění na rizika",
							paragraphs: [
								"DBD Cheats spojuje ESP wallhack, radar hack a DBD Aimbot jako undetected balíček pro Dead by Daylight na Windows PC. Odpovědi podpory, vyřizování objednávek a právní soulad v případě potřeby.",
								"Používání cheatů může porušovat podmínky týmu Dead by Daylight — nesete veškeré riziko bana.",
							],
						},
						{
							h2: "Změny zásad",
							paragraphs: [
								"support@dbdcheats.org pro podporu a právní dotazy.",
								"E-mail: support@dbdcheats.org",
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
					accent: "Cheats Dead by Daylight undetected",
					accentShort: "DBD Cheats",
					subtitle: "ESP wallhack, radar hack și Aimbot pentru Dead by Daylight pe PC Windows — mentenanță Easy Anti-Cheat inclusă.",
					subtitleShort: "ESP, radar și Aimbot pentru Dead by Daylight PC",
					buyNow: "Cumpără acum",
					seeFeatures: "Vezi funcții",
				},
				trust: {
					status: "Online",
					statusNote: "Pachetul DBD Cheats este activ pentru Dead by Daylight pe PC Windows.",
					statusShort: "Activ",
					delivery: "Livrare digitală instantă",
					platform: "Windows 10 și 11",
					antiCheat: "Mentenanță Easy Anti-Cheat suportată",
					antiCheatShort: "Easy Anti-Cheat suportat",
				},
				product: {
					title: "DBD Cheats",
					addToCart: "Adaugă în coș",
					monthly: "Lunar",
					lifetime: "Pe viață",
					available: "Disponibil acum",
					gameBadge: "Dead by Daylight",
					platformBadge: "Windows PC",
					statusBadge: "Pachet undetected",
				},
				reviews: {
					title: "Ce spun jucătorii",
					subtitle: "Feedback recent de la cumpărătorii DBD Cheats",
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
					tagline: "ESP, wallhack, radar și Aimbot undetected pentru Dead by Daylight — checkout via Zadeyo.",
				},
				images: {
					hero: "DBD Cheats hero — ESP and aimbot overlay in Dead by Daylight",
					espWallhack: "Wallhack outlines showing survivors and killers through walls",
					aimbotCombat: "Soft aim assist overlay during a Dead by Daylight trial",
					teamFight: "DBD Cheats combat overlay during a team chase",
					playerEsp: "Player ESP boxes and distance readouts in a Dead by Daylight trial",
					headerArt: "Aimbot view and bone priority controls for Dead by Daylight",
					hacksPackage: "2D radar threat overlay for Dead by Daylight",
					chaseFight: "Aimbot assist during a Dead by Daylight chase",
					battleRoyale: "DBD Cheats in-trial overview for Windows PC",
					trialMap: "ESP markers for generators and hooks in Dead by Daylight",
				},
			},
			pages: {
				home: {
					title: "DBD Cheats 2026 | ESP, Wallhack și Aimbot",
					description: "Cheats Dead by Daylight undetected pentru Dead by Daylight pe PC. ESP wallhack, radar hack, Aimbot, mentenanță Easy Anti-Cheat. Livrare digitală instantă.",
					h1: "DBD Cheats — Undetected ESP, Wallhack și Aimbot",
					intro: "Pachet undetected Dead by Daylight pe Windows PC: ESP wallhack, radar, Aimbot cu mentenanță Easy Anti-Cheat.",
					imageAlt: "DBD ESP player tags hack",
					galleryTitle: "Galerie DBD Cheats — ESP, Aimbot, wallhack",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "Cumpără DBD Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "De ce DBD Cheats în 2026",
							paragraphs: [
								"DBD Cheats combină ESP wallhack, radar hack și DBD Aimbot undetected pentru Dead by Daylight pe PC Windows. Ideal pentru citirea team-urilor inamice în BR și chase.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar și Aimbot într-o licență",
							paragraphs: [
								"DBD Cheats combină ESP wallhack, radar hack și DBD Aimbot undetected pentru Dead by Daylight pe PC Windows. O licență în loc de instrumente separate.",
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
							],
						},
					],
				},
				"dbd-esp": {
					title: "ESP Dead by Daylight | Player Boxes & Wallhack",
					description: "ESP Dead by Daylight: casete jucător, markere carcase și overlay-uri wallhack. livrare digitală instantă. undetected — PC Windows.",
					h1: "ESP Dead by Daylight",
					intro: "DBD Cheats combină ESP wallhack, radar hack și DBD Aimbot undetected pentru Dead by Daylight pe PC Windows. ESP Dead by Daylight.",
					imageAlt: "DBD ESP player boxes and distance readouts in a trial",
					galleryTitle: "ESP Dead by Daylight",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "Cumpără DBD Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "ESP Dead by Daylight",
							paragraphs: [
								"DBD Cheats combină ESP wallhack, radar hack și DBD Aimbot undetected pentru Dead by Daylight pe PC Windows. casete jucător, markere carcase și overlay-uri wallhack.",
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
								"support@dbdcheats.org pentru suport și legal.",
							],
						},
					],
				},
				"dbd-aimbot": {
					title: "Aimbot Dead by Daylight | Soft Aim Controls",
					description: "Aimbot Dead by Daylight: soft aim, FOV și profile Aimbot pe specie. livrare digitală instantă. undetected — PC Windows.",
					h1: "Aimbot Dead by Daylight",
					intro: "DBD Cheats combină ESP wallhack, radar hack și DBD Aimbot undetected pentru Dead by Daylight pe PC Windows. Aimbot Dead by Daylight.",
					imageAlt: "DBD Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Dead by Daylight",
					heroImage: "/images/dbd-cheats-aimbot.webp",
					ctaPrimary: "Cumpără DBD Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Aimbot Dead by Daylight",
							paragraphs: [
								"DBD Cheats combină ESP wallhack, radar hack și DBD Aimbot undetected pentru Dead by Daylight pe PC Windows. soft aim, FOV și profile Aimbot pe specie.",
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
								"support@dbdcheats.org pentru suport și legal.",
							],
						},
					],
				},
				features: {
					title: "Funcții | Full Feature List",
					description: "Funcții: ESP, soft aim, controale radar. livrare digitală instantă. undetected — PC Windows.",
					h1: "Funcții",
					intro: "DBD Cheats combină ESP wallhack, radar hack și DBD Aimbot undetected pentru Dead by Daylight pe PC Windows. Funcții.",
					imageAlt: "DBD Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funcții",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "Cumpără DBD Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funcții",
							paragraphs: [
								"DBD Cheats combină ESP wallhack, radar hack și DBD Aimbot undetected pentru Dead by Daylight pe PC Windows. ESP, soft aim, controale radar.",
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
								"support@dbdcheats.org pentru suport și legal.",
							],
						},
					],
				},
				pricing: {
					title: "Prețuri | Monthly & Lifetime",
					description: "Prețuri: licențe $35 lunar sau $150 lifetime. livrare digitală instantă. undetected — PC Windows.",
					h1: "Prețuri",
					intro: "DBD Cheats combină ESP wallhack, radar hack și DBD Aimbot undetected pentru Dead by Daylight pe PC Windows. Prețuri.",
					imageAlt: "DBD Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Prețuri",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "Cumpără DBD Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Prețuri",
							paragraphs: [
								"DBD Cheats combină ESP wallhack, radar hack și DBD Aimbot undetected pentru Dead by Daylight pe PC Windows. licențe $35 lunar sau $150 lifetime.",
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
								"support@dbdcheats.org pentru suport și legal.",
							],
						},
					],
				},
				setup: {
					title: "Instalare | PC Setup Guide",
					description: "Instalare: activare Windows PC și setup la prima lansare. livrare digitală instantă. undetected — PC Windows.",
					h1: "Instalare",
					intro: "DBD Cheats combină ESP wallhack, radar hack și DBD Aimbot undetected pentru Dead by Daylight pe PC Windows. Instalare.",
					imageAlt: "DBD Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Instalare",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "Cumpără DBD Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalare",
							paragraphs: [
								"DBD Cheats combină ESP wallhack, radar hack și DBD Aimbot undetected pentru Dead by Daylight pe PC Windows. activare Windows PC și setup la prima lansare.",
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
								"support@dbdcheats.org pentru suport și legal.",
							],
						},
					],
				},
				updates: {
					title: "Actualizări | Easy Anti-Cheat Maintenance Log",
					description: "Actualizări: status patch Easy Anti-Cheat și note rebuild. livrare digitală instantă. undetected — PC Windows.",
					h1: "Actualizări",
					intro: "DBD Cheats combină ESP wallhack, radar hack și DBD Aimbot undetected pentru Dead by Daylight pe PC Windows. Actualizări.",
					imageAlt: "DBD Cheats live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Actualizări",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "Cumpără DBD Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "Actualizări",
							paragraphs: [
								"DBD Cheats combină ESP wallhack, radar hack și DBD Aimbot undetected pentru Dead by Daylight pe PC Windows. status patch Easy Anti-Cheat și note rebuild.",
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
								"support@dbdcheats.org pentru suport și legal.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: întrebări ESP, soft aim, livrare și Easy Anti-Cheat. livrare digitală instantă. undetected — PC Windows.",
					h1: "FAQ",
					intro: "DBD Cheats combină ESP wallhack, radar hack și DBD Aimbot undetected pentru Dead by Daylight pe PC Windows. FAQ.",
					imageAlt: "DBD Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "Cumpără DBD Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"DBD Cheats combină ESP wallhack, radar hack și DBD Aimbot undetected pentru Dead by Daylight pe PC Windows. întrebări ESP, soft aim, livrare și Easy Anti-Cheat.",
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
								"support@dbdcheats.org pentru suport și legal.",
							],
						},
					],
				},
				support: {
					title: "Suport | Help & Contact",
					description: "Suport: ajutor comenzi și contact suport licențe. livrare digitală instantă. undetected — PC Windows.",
					h1: "Suport",
					intro: "DBD Cheats combină ESP wallhack, radar hack și DBD Aimbot undetected pentru Dead by Daylight pe PC Windows. Suport.",
					imageAlt: "DBD Cheats support page for license and setup help",
					galleryTitle: "Suport",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "Cumpără DBD Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Suport",
							paragraphs: [
								"DBD Cheats combină ESP wallhack, radar hack și DBD Aimbot undetected pentru Dead by Daylight pe PC Windows. ajutor comenzi și contact suport licențe.",
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
								"support@dbdcheats.org pentru suport și legal.",
							],
						},
					],
				},
				undetected: {
					title: "Cheats undetected | Easy Anti-Cheat Safe Status",
					description: "Cheats undetected: mentenanță undetected după patch-uri Easy Anti-Cheat. livrare digitală instantă. undetected — PC Windows.",
					h1: "Cheats undetected",
					intro: "DBD Cheats combină ESP wallhack, radar hack și DBD Aimbot undetected pentru Dead by Daylight pe PC Windows. Cheats undetected.",
					imageAlt: "DBD Cheats undetected status overview for Windows PC",
					galleryTitle: "Cheats undetected",
					heroImage: "/images/dbd-cheats-wallhack.webp",
					ctaPrimary: "Cumpără DBD Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "Cheats undetected",
							paragraphs: [
								"DBD Cheats combină ESP wallhack, radar hack și DBD Aimbot undetected pentru Dead by Daylight pe PC Windows. mentenanță undetected după patch-uri Easy Anti-Cheat.",
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
								"support@dbdcheats.org pentru suport și legal.",
							],
						},
					],
				},
				wallhack: {
					title: "Dead by Daylight Wallhack | ESP Visibility",
					description: "Dead by Daylight Wallhack: wallhack ESP pentru jucători, carcase și distanță. livrare digitală instantă. undetected — PC Windows.",
					h1: "Dead by Daylight Wallhack",
					intro: "DBD Cheats combină ESP wallhack, radar hack și DBD Aimbot undetected pentru Dead by Daylight pe PC Windows. Dead by Daylight Wallhack.",
					imageAlt: "dbd wallhack visibility through walls in a trial",
					galleryTitle: "Dead by Daylight Wallhack",
					heroImage: "/images/dbd-cheats-wallhack.webp",
					ctaPrimary: "Cumpără DBD Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Dead by Daylight Wallhack",
							paragraphs: [
								"DBD Cheats combină ESP wallhack, radar hack și DBD Aimbot undetected pentru Dead by Daylight pe PC Windows. wallhack ESP pentru jucători, carcase și distanță.",
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
								"support@dbdcheats.org pentru suport și legal.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: indicii radar 2D pentru flancuri și rotații. livrare digitală instantă. undetected — PC Windows.",
					h1: "Radar hack",
					intro: "DBD Cheats combină ESP wallhack, radar hack și DBD Aimbot undetected pentru Dead by Daylight pe PC Windows. Radar hack.",
					imageAlt: "Dead by Daylight 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "Cumpără DBD Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"DBD Cheats combină ESP wallhack, radar hack și DBD Aimbot undetected pentru Dead by Daylight pe PC Windows. indicii radar 2D pentru flancuri și rotații.",
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
								"support@dbdcheats.org pentru suport și legal.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Patch Maintenance",
					description: "Bypass Easy Anti-Cheat: cum sunt gestionate actualizările Easy Anti-Cheat pentru Dead by Daylight hacks. livrare digitală instantă. undetected — PC Windows.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "DBD Cheats combină ESP wallhack, radar hack și DBD Aimbot undetected pentru Dead by Daylight pe PC Windows. Bypass Easy Anti-Cheat.",
					imageAlt: "DBD Cheats maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/dbd-cheats-aimbot.webp",
					ctaPrimary: "Cumpără DBD Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"DBD Cheats combină ESP wallhack, radar hack și DBD Aimbot undetected pentru Dead by Daylight pe PC Windows. cum sunt gestionate actualizările Easy Anti-Cheat pentru Dead by Daylight hacks.",
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
								"support@dbdcheats.org pentru suport și legal.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheats Dead by Daylight 2026 | Buyer Guide",
					description: "Cheats Dead by Daylight 2026: checklist dbd cheats 2026 înainte de checkout. livrare digitală instantă. undetected — PC Windows.",
					h1: "Cheats Dead by Daylight 2026",
					intro: "DBD Cheats combină ESP wallhack, radar hack și DBD Aimbot undetected pentru Dead by Daylight pe PC Windows. Cheats Dead by Daylight 2026.",
					imageAlt: "DBD Cheats product overview for Dead by Daylight",
					galleryTitle: "Cheats Dead by Daylight 2026",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "Cumpără DBD Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "Cheats Dead by Daylight 2026",
							paragraphs: [
								"DBD Cheats combină ESP wallhack, radar hack și DBD Aimbot undetected pentru Dead by Daylight pe PC Windows. checklist dbd cheats 2026 înainte de checkout.",
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
								"support@dbdcheats.org pentru suport și legal.",
							],
						},
					],
				},
				hacks: {
					title: "Cheats Dead by Daylight | ESP Aimbot Guide",
					description: "Cheats Dead by Daylight: pilon DBD Cheats pentru ESP și Aimbot. livrare digitală instantă. undetected — PC Windows.",
					h1: "Cheats Dead by Daylight",
					intro: "DBD Cheats combină ESP wallhack, radar hack și DBD Aimbot undetected pentru Dead by Daylight pe PC Windows. Cheats Dead by Daylight.",
					imageAlt: "DBD Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Cheats Dead by Daylight",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "Cumpără DBD Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheats Dead by Daylight",
							paragraphs: [
								"DBD Cheats combină ESP wallhack, radar hack și DBD Aimbot undetected pentru Dead by Daylight pe PC Windows. pilon DBD Cheats pentru ESP și Aimbot.",
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
								"support@dbdcheats.org pentru suport și legal.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Descărcare DBD Cheats | Instant Access",
					description: "Descărcare DBD Cheats: descărcare licență digitală după plată. livrare digitală instantă. undetected — PC Windows.",
					h1: "Descărcare DBD Cheats",
					intro: "DBD Cheats combină ESP wallhack, radar hack și DBD Aimbot undetected pentru Dead by Daylight pe PC Windows. Descărcare DBD Cheats.",
					imageAlt: "DBD Cheats download and install delivery flow",
					galleryTitle: "Descărcare DBD Cheats",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "Cumpără DBD Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Descărcare DBD Cheats",
							paragraphs: [
								"DBD Cheats combină ESP wallhack, radar hack și DBD Aimbot undetected pentru Dead by Daylight pe PC Windows. descărcare licență digitală după plată.",
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
								"support@dbdcheats.org pentru suport și legal.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Meniu mod Dead by Daylight | In-Game Toggles",
					description: "Meniu mod Dead by Daylight: toggle-uri ESP și soft aim in-client. livrare digitală instantă. undetected — PC Windows.",
					h1: "Meniu mod Dead by Daylight",
					intro: "DBD Cheats combină ESP wallhack, radar hack și DBD Aimbot undetected pentru Dead by Daylight pe PC Windows. Meniu mod Dead by Daylight.",
					imageAlt: "DBD Cheats in-game menu controls",
					galleryTitle: "Meniu mod Dead by Daylight",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "Cumpără DBD Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Meniu mod Dead by Daylight",
							paragraphs: [
								"DBD Cheats combină ESP wallhack, radar hack și DBD Aimbot undetected pentru Dead by Daylight pe PC Windows. toggle-uri ESP și soft aim in-client.",
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
								"support@dbdcheats.org pentru suport și legal.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Dead by Daylight | Smooth Aim Settings",
					description: "Soft aim Dead by Daylight: setări soft aim fluide pentru Windows PC. livrare digitală instantă. undetected — PC Windows.",
					h1: "Soft aim Dead by Daylight",
					intro: "DBD Cheats combină ESP wallhack, radar hack și DBD Aimbot undetected pentru Dead by Daylight pe PC Windows. Soft aim Dead by Daylight.",
					imageAlt: "Dead by Daylight soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Dead by Daylight",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "Cumpără DBD Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "Soft aim Dead by Daylight",
							paragraphs: [
								"DBD Cheats combină ESP wallhack, radar hack și DBD Aimbot undetected pentru Dead by Daylight pe PC Windows. setări soft aim fluide pentru Windows PC.",
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
								"support@dbdcheats.org pentru suport și legal.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Cele mai bune cheats Dead by Daylight | Buyer Checklist",
					description: "Cele mai bune cheats Dead by Daylight: ce să compari înainte de a cumpăra dbd cheats. livrare digitală instantă. undetected — PC Windows.",
					h1: "Cele mai bune cheats Dead by Daylight",
					intro: "DBD Cheats combină ESP wallhack, radar hack și DBD Aimbot undetected pentru Dead by Daylight pe PC Windows. Cele mai bune cheats Dead by Daylight.",
					imageAlt: "DBD Cheats overview for Dead by Daylight on PC",
					galleryTitle: "Cele mai bune cheats Dead by Daylight",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "Cumpără DBD Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Cele mai bune cheats Dead by Daylight",
							paragraphs: [
								"DBD Cheats combină ESP wallhack, radar hack și DBD Aimbot undetected pentru Dead by Daylight pe PC Windows. ce să compari înainte de a cumpăra dbd cheats.",
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
								"support@dbdcheats.org pentru suport și legal.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Dead by Daylight | Soft Aim Assist",
					description: "Hack aimbot Dead by Daylight: assist hack Aimbot undetected pentru Dead by Daylight. livrare digitală instantă. undetected — PC Windows.",
					h1: "Hack aimbot Dead by Daylight",
					intro: "DBD Cheats combină ESP wallhack, radar hack și DBD Aimbot undetected pentru Dead by Daylight pe PC Windows. Hack aimbot Dead by Daylight.",
					imageAlt: "DBD Aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Dead by Daylight",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "Cumpără DBD Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Dead by Daylight",
							paragraphs: [
								"DBD Cheats combină ESP wallhack, radar hack și DBD Aimbot undetected pentru Dead by Daylight pe PC Windows. assist hack Aimbot undetected pentru Dead by Daylight.",
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
								"support@dbdcheats.org pentru suport și legal.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Dead by Daylight | Boxes & Loot",
					description: "Hack ESP Dead by Daylight: casete ESP hack, pin-uri carcase și distanță. livrare digitală instantă. undetected — PC Windows.",
					h1: "Hack ESP Dead by Daylight",
					intro: "DBD Cheats combină ESP wallhack, radar hack și DBD Aimbot undetected pentru Dead by Daylight pe PC Windows. Hack ESP Dead by Daylight.",
					imageAlt: "DBD ESP hack boxes and generator markers",
					galleryTitle: "Hack ESP Dead by Daylight",
					heroImage: "/images/dbd-cheats-wallhack.webp",
					ctaPrimary: "Cumpără DBD Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Hack ESP Dead by Daylight",
							paragraphs: [
								"DBD Cheats combină ESP wallhack, radar hack și DBD Aimbot undetected pentru Dead by Daylight pe PC Windows. casete ESP hack, pin-uri carcase și distanță.",
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
								"support@dbdcheats.org pentru suport și legal.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Dead by Daylight | What It Means",
					description: "Unlock all Dead by Daylight: căutări unlock-all vs instrumente reale ESP și Aimbot. livrare digitală instantă. undetected — PC Windows.",
					h1: "Unlock all Dead by Daylight",
					intro: "DBD Cheats combină ESP wallhack, radar hack și DBD Aimbot undetected pentru Dead by Daylight pe PC Windows. Unlock all Dead by Daylight.",
					imageAlt: "DBD Cheats license features overview",
					galleryTitle: "Unlock all Dead by Daylight",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "Cumpără DBD Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Dead by Daylight",
							paragraphs: [
								"DBD Cheats combină ESP wallhack, radar hack și DBD Aimbot undetected pentru Dead by Daylight pe PC Windows. căutări unlock-all vs instrumente reale ESP și Aimbot.",
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
								"support@dbdcheats.org pentru suport și legal.",
							],
						},
					],
				},
				privacy: {
					title: "Politica de confidențialitate | DBD Cheats",
					description: "Politica de confidențialitate pentru DBD Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politica de confidențialitate",
					intro: "DBD Cheats combină ESP wallhack, radar hack și DBD Aimbot undetected pentru Dead by Daylight pe PC Windows. Politica de confidențialitate pentru dbdcheats.org și licențe Dead by Daylight.",
					imageAlt: "DBD Cheats",
					galleryTitle: "DBD Cheats",
					heroImage: "/images/dbd-cheats-aimbot.webp",
					ctaPrimary: "Email suport",
					ctaSecondary: "Citește termenii",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Informații pe care le colectăm",
							paragraphs: [
								"DBD Cheats combină ESP wallhack, radar hack și DBD Aimbot undetected pentru Dead by Daylight pe PC Windows. Email de contact, referințe comenzi Zadeyo și date de securitate de bază ale site-ului.",
								"Detaliile de plată sunt procesate prin checkout Zadeyo — nu sunt stocate pe dbdcheats.org.",
							],
						},
						{
							h2: "Cum folosim datele",
							paragraphs: [
								"DBD Cheats combină ESP wallhack, radar hack și DBD Aimbot undetected pentru Dead by Daylight pe PC Windows. Răspunsuri suport, rezolvarea comenzilor și conformitate legală când este necesar.",
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
							],
						},
						{
							h2: "Drepturile tale",
							paragraphs: [
								"support@dbdcheats.org pentru suport și legal.",
								"Email: support@dbdcheats.org",
							],
						},
					],
				},
				refund: {
					title: "Politica de rambursare | DBD Cheats",
					description: "Politica de rambursare pentru DBD Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politica de rambursare",
					intro: "DBD Cheats combină ESP wallhack, radar hack și DBD Aimbot undetected pentru Dead by Daylight pe PC Windows. Politica de rambursare pentru dbdcheats.org și licențe Dead by Daylight.",
					imageAlt: "DBD Cheats",
					galleryTitle: "DBD Cheats",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "Email suport",
					ctaSecondary: "Citește confidențialitatea",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Livrare digitală",
							paragraphs: [
								"DBD Cheats combină ESP wallhack, radar hack și DBD Aimbot undetected pentru Dead by Daylight pe PC Windows. Email de contact, referințe comenzi Zadeyo și date de securitate de bază ale site-ului.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "Aprobare rambursare",
							paragraphs: [
								"DBD Cheats combină ESP wallhack, radar hack și DBD Aimbot undetected pentru Dead by Daylight pe PC Windows. Răspunsuri suport, rezolvarea comenzilor și conformitate legală când este necesar.",
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
							],
						},
						{
							h2: "Cum să soliciți",
							paragraphs: [
								"support@dbdcheats.org pentru suport și legal.",
								"Email: support@dbdcheats.org",
							],
						},
					],
				},
				terms: {
					title: "Termeni de utilizare | DBD Cheats",
					description: "Termeni de utilizare pentru DBD Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Termeni de utilizare",
					intro: "DBD Cheats combină ESP wallhack, radar hack și DBD Aimbot undetected pentru Dead by Daylight pe PC Windows. Termeni de utilizare pentru dbdcheats.org și licențe Dead by Daylight.",
					imageAlt: "DBD Cheats",
					galleryTitle: "DBD Cheats",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "Email suport",
					ctaSecondary: "Citește confidențialitatea",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptarea termenilor",
							paragraphs: [
								"DBD Cheats combină ESP wallhack, radar hack și DBD Aimbot undetected pentru Dead by Daylight pe PC Windows. Email de contact, referințe comenzi Zadeyo și date de securitate de bază ale site-ului.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "Declinare responsabilitate",
							paragraphs: [
								"DBD Cheats combină ESP wallhack, radar hack și DBD Aimbot undetected pentru Dead by Daylight pe PC Windows. Răspunsuri suport, rezolvarea comenzilor și conformitate legală când este necesar.",
								"Folosirea cheat-urilor poate încălca termenii echipei Dead by Daylight — îți asumi tot riscul de ban.",
							],
						},
						{
							h2: "Modificări de politică",
							paragraphs: [
								"support@dbdcheats.org pentru suport și legal.",
								"Email: support@dbdcheats.org",
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
					accent: "Undetected dbd cheats",
					accentShort: "DBD Cheats",
					subtitle: "ESP wallhack, radar hack och Aimbot för Dead by Daylight på Windows PC — Easy Anti-Cheat-underhåll ingår.",
					subtitleShort: "ESP, radar & Aimbot för Dead by Daylight PC",
					buyNow: "Köp nu",
					seeFeatures: "Se funktioner",
				},
				trust: {
					status: "Online",
					statusNote: "DBD Cheats-paketet är live för Dead by Daylight på Windows PC.",
					statusShort: "Live",
					delivery: "Omedelbar digital leverans",
					platform: "Windows 10 & 11",
					antiCheat: "Easy Anti-Cheat-underhåll stöds",
					antiCheatShort: "Easy Anti-Cheat stöd",
				},
				product: {
					title: "DBD Cheats",
					addToCart: "Lägg i varukorg",
					monthly: "Månadsvis",
					lifetime: "Lifetime",
					available: "Tillgänglig nu",
					gameBadge: "Dead by Daylight",
					platformBadge: "Windows PC",
					statusBadge: "Undetected paket",
				},
				reviews: {
					title: "Vad spelare säger",
					subtitle: "Senaste feedback från DBD Cheats-köpare",
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
					tagline: "Undetected ESP, wallhack, radar och Aimbot för Dead by Daylight — checkout via Zadeyo.",
				},
				images: {
					hero: "DBD Cheats hero — ESP and aimbot overlay in Dead by Daylight",
					espWallhack: "Wallhack outlines showing survivors and killers through walls",
					aimbotCombat: "Soft aim assist overlay during a Dead by Daylight trial",
					teamFight: "DBD Cheats combat overlay during a team chase",
					playerEsp: "Player ESP boxes and distance readouts in a Dead by Daylight trial",
					headerArt: "Aimbot view and bone priority controls for Dead by Daylight",
					hacksPackage: "2D radar threat overlay for Dead by Daylight",
					chaseFight: "Aimbot assist during a Dead by Daylight chase",
					battleRoyale: "DBD Cheats in-trial overview for Windows PC",
					trialMap: "ESP markers for generators and hooks in Dead by Daylight",
				},
			},
			pages: {
				home: {
					title: "DBD Cheats 2026 | ESP, Wallhack & Aimbot",
					description: "Undetected dbd cheats för Dead by Daylight på PC. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat-underhåll. Omedelbar digital leverans.",
					h1: "DBD Cheats — Undetected ESP, Wallhack & Aimbot",
					intro: "Undetected paket för Dead by Daylight på Windows PC: ESP wallhack, radar, Aimbot med Easy Anti-Cheat-underhåll.",
					imageAlt: "DBD ESP player tags hack",
					galleryTitle: "DBD Cheats galleri — ESP, Aimbot, wallhack",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "Köp DBD Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Varför DBD Cheats 2026",
							paragraphs: [
								"DBD Cheats kombinerar ESP wallhack, radar hack och DBD Aimbot som undetected paket för Dead by Daylight på Windows PC. Ideal för att läsa fiendepacks i BR och chase.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "ESP wallhack, radar och Aimbot i en licens",
							paragraphs: [
								"DBD Cheats kombinerar ESP wallhack, radar hack och DBD Aimbot som undetected paket för Dead by Daylight på Windows PC. En licens istället för separata verktyg.",
								"Kontrollera Updates dbder Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
							],
						},
					],
				},
				"dbd-esp": {
					title: "DBD ESP | Player Boxes & Wallhack",
					description: "DBD ESP: spelarboxar, kadavermarkörer och wallhack-overlays. omedelbar digital leverans. undetected — Windows PC.",
					h1: "DBD ESP",
					intro: "DBD Cheats kombinerar ESP wallhack, radar hack och DBD Aimbot som undetected paket för Dead by Daylight på Windows PC. DBD ESP.",
					imageAlt: "DBD ESP player boxes and distance readouts in a trial",
					galleryTitle: "DBD ESP",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "Köp DBD Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "DBD ESP",
							paragraphs: [
								"DBD Cheats kombinerar ESP wallhack, radar hack och DBD Aimbot som undetected paket för Dead by Daylight på Windows PC. spelarboxar, kadavermarkörer och wallhack-overlays.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates dbder Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@dbdcheats.org för support och juridik.",
							],
						},
					],
				},
				"dbd-aimbot": {
					title: "DBD Aimbot | Soft Aim Controls",
					description: "DBD Aimbot: soft aim, FOV och Aimbot-profiler per art. omedelbar digital leverans. undetected — Windows PC.",
					h1: "DBD Aimbot",
					intro: "DBD Cheats kombinerar ESP wallhack, radar hack och DBD Aimbot som undetected paket för Dead by Daylight på Windows PC. DBD Aimbot.",
					imageAlt: "DBD Aimbot and soft aim controls on Windows PC",
					galleryTitle: "DBD Aimbot",
					heroImage: "/images/dbd-cheats-aimbot.webp",
					ctaPrimary: "Köp DBD Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "DBD Aimbot",
							paragraphs: [
								"DBD Cheats kombinerar ESP wallhack, radar hack och DBD Aimbot som undetected paket för Dead by Daylight på Windows PC. soft aim, FOV och Aimbot-profiler per art.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates dbder Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@dbdcheats.org för support och juridik.",
							],
						},
					],
				},
				features: {
					title: "Funktioner | Full Feature List",
					description: "Funktioner: ESP, soft aim, radar-kontroller. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Funktioner",
					intro: "DBD Cheats kombinerar ESP wallhack, radar hack och DBD Aimbot som undetected paket för Dead by Daylight på Windows PC. Funktioner.",
					imageAlt: "DBD Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funktioner",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "Köp DBD Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funktioner",
							paragraphs: [
								"DBD Cheats kombinerar ESP wallhack, radar hack och DBD Aimbot som undetected paket för Dead by Daylight på Windows PC. ESP, soft aim, radar-kontroller.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates dbder Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@dbdcheats.org för support och juridik.",
							],
						},
					],
				},
				pricing: {
					title: "Priser | Monthly & Lifetime",
					description: "Priser: $35 månatliga eller $150 lifetime-licenser. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Priser",
					intro: "DBD Cheats kombinerar ESP wallhack, radar hack och DBD Aimbot som undetected paket för Dead by Daylight på Windows PC. Priser.",
					imageAlt: "DBD Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Priser",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "Köp DBD Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Priser",
							paragraphs: [
								"DBD Cheats kombinerar ESP wallhack, radar hack och DBD Aimbot som undetected paket för Dead by Daylight på Windows PC. $35 månatliga eller $150 lifetime-licenser.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates dbder Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@dbdcheats.org för support och juridik.",
							],
						},
					],
				},
				setup: {
					title: "Installation | PC Setup Guide",
					description: "Installation: Windows PC-aktivering och första-start setup. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Installation",
					intro: "DBD Cheats kombinerar ESP wallhack, radar hack och DBD Aimbot som undetected paket för Dead by Daylight på Windows PC. Installation.",
					imageAlt: "DBD Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Installation",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "Köp DBD Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Installation",
							paragraphs: [
								"DBD Cheats kombinerar ESP wallhack, radar hack och DBD Aimbot som undetected paket för Dead by Daylight på Windows PC. Windows PC-aktivering och första-start setup.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates dbder Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@dbdcheats.org för support och juridik.",
							],
						},
					],
				},
				updates: {
					title: "Uppdateringar | Easy Anti-Cheat Maintenance Log",
					description: "Uppdateringar: Easy Anti-Cheat patchstatus och rebuild-anteckningar. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Uppdateringar",
					intro: "DBD Cheats kombinerar ESP wallhack, radar hack och DBD Aimbot som undetected paket för Dead by Daylight på Windows PC. Uppdateringar.",
					imageAlt: "DBD Cheats live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Uppdateringar",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "Köp DBD Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "Uppdateringar",
							paragraphs: [
								"DBD Cheats kombinerar ESP wallhack, radar hack och DBD Aimbot som undetected paket för Dead by Daylight på Windows PC. Easy Anti-Cheat patchstatus och rebuild-anteckningar.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates dbder Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@dbdcheats.org för support och juridik.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: frågor om ESP, soft aim, leverans och Easy Anti-Cheat. omedelbar digital leverans. undetected — Windows PC.",
					h1: "FAQ",
					intro: "DBD Cheats kombinerar ESP wallhack, radar hack och DBD Aimbot som undetected paket för Dead by Daylight på Windows PC. FAQ.",
					imageAlt: "DBD Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "Köp DBD Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"DBD Cheats kombinerar ESP wallhack, radar hack och DBD Aimbot som undetected paket för Dead by Daylight på Windows PC. frågor om ESP, soft aim, leverans och Easy Anti-Cheat.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates dbder Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@dbdcheats.org för support och juridik.",
							],
						},
					],
				},
				support: {
					title: "Support | Help & Contact",
					description: "Support: orderhjälp och licens support-kontakt. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Support",
					intro: "DBD Cheats kombinerar ESP wallhack, radar hack och DBD Aimbot som undetected paket för Dead by Daylight på Windows PC. Support.",
					imageAlt: "DBD Cheats support page for license and setup help",
					galleryTitle: "Support",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "Köp DBD Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Support",
							paragraphs: [
								"DBD Cheats kombinerar ESP wallhack, radar hack och DBD Aimbot som undetected paket för Dead by Daylight på Windows PC. orderhjälp och licens support-kontakt.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates dbder Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@dbdcheats.org för support och juridik.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected cheats | Easy Anti-Cheat Safe Status",
					description: "Undetected cheats: undetected underhåll efter Easy Anti-Cheat patchar. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Undetected cheats",
					intro: "DBD Cheats kombinerar ESP wallhack, radar hack och DBD Aimbot som undetected paket för Dead by Daylight på Windows PC. Undetected cheats.",
					imageAlt: "DBD Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected cheats",
					heroImage: "/images/dbd-cheats-wallhack.webp",
					ctaPrimary: "Köp DBD Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "Undetected cheats",
							paragraphs: [
								"DBD Cheats kombinerar ESP wallhack, radar hack och DBD Aimbot som undetected paket för Dead by Daylight på Windows PC. undetected underhåll efter Easy Anti-Cheat patchar.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates dbder Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@dbdcheats.org för support och juridik.",
							],
						},
					],
				},
				wallhack: {
					title: "Dead by Daylight Wallhack | ESP Visibility",
					description: "Dead by Daylight Wallhack: wallhack ESP för spelare, kadaver och avstånd. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Dead by Daylight Wallhack",
					intro: "DBD Cheats kombinerar ESP wallhack, radar hack och DBD Aimbot som undetected paket för Dead by Daylight på Windows PC. Dead by Daylight Wallhack.",
					imageAlt: "dbd wallhack visibility through walls in a trial",
					galleryTitle: "Dead by Daylight Wallhack",
					heroImage: "/images/dbd-cheats-wallhack.webp",
					ctaPrimary: "Köp DBD Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Dead by Daylight Wallhack",
							paragraphs: [
								"DBD Cheats kombinerar ESP wallhack, radar hack och DBD Aimbot som undetected paket för Dead by Daylight på Windows PC. wallhack ESP för spelare, kadaver och avstånd.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates dbder Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@dbdcheats.org för support och juridik.",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar-signaler för flanker och rotationer. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "DBD Cheats kombinerar ESP wallhack, radar hack och DBD Aimbot som undetected paket för Dead by Daylight på Windows PC. Radar Hack.",
					imageAlt: "Dead by Daylight 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "Köp DBD Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"DBD Cheats kombinerar ESP wallhack, radar hack och DBD Aimbot som undetected paket för Dead by Daylight på Windows PC. 2D radar-signaler för flanker och rotationer.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates dbder Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@dbdcheats.org för support och juridik.",
							],
						},
					],
				},
				eac: {
					title: "Easy Anti-Cheat Bypass | Patch Maintenance",
					description: "Easy Anti-Cheat Bypass: hur Easy Anti-Cheat-uppdateringar hanteras för Dead by Daylight hacks. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Easy Anti-Cheat Bypass",
					intro: "DBD Cheats kombinerar ESP wallhack, radar hack och DBD Aimbot som undetected paket för Dead by Daylight på Windows PC. Easy Anti-Cheat Bypass.",
					imageAlt: "DBD Cheats maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Easy Anti-Cheat Bypass",
					heroImage: "/images/dbd-cheats-aimbot.webp",
					ctaPrimary: "Köp DBD Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Easy Anti-Cheat Bypass",
							paragraphs: [
								"DBD Cheats kombinerar ESP wallhack, radar hack och DBD Aimbot som undetected paket för Dead by Daylight på Windows PC. hur Easy Anti-Cheat-uppdateringar hanteras för Dead by Daylight hacks.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates dbder Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@dbdcheats.org för support och juridik.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "DBD Cheats 2026 | Buyer Guide",
					description: "DBD Cheats 2026: 2026 dbd cheats checklist före checkout. omedelbar digital leverans. undetected — Windows PC.",
					h1: "DBD Cheats 2026",
					intro: "DBD Cheats kombinerar ESP wallhack, radar hack och DBD Aimbot som undetected paket för Dead by Daylight på Windows PC. DBD Cheats 2026.",
					imageAlt: "DBD Cheats product overview for Dead by Daylight",
					galleryTitle: "DBD Cheats 2026",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "Köp DBD Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/dead-by-daylight-cheats/",
					sections: [
						{
							h2: "DBD Cheats 2026",
							paragraphs: [
								"DBD Cheats kombinerar ESP wallhack, radar hack och DBD Aimbot som undetected paket för Dead by Daylight på Windows PC. 2026 dbd cheats checklist före checkout.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates dbder Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@dbdcheats.org för support och juridik.",
							],
						},
					],
				},
				hacks: {
					title: "DBD Cheats | ESP Aimbot Guide",
					description: "DBD Cheats: DBD Cheats pelare för ESP och Aimbot. omedelbar digital leverans. undetected — Windows PC.",
					h1: "DBD Cheats",
					intro: "DBD Cheats kombinerar ESP wallhack, radar hack och DBD Aimbot som undetected paket för Dead by Daylight på Windows PC. DBD Cheats.",
					imageAlt: "DBD Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "DBD Cheats",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "Köp DBD Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "DBD Cheats",
							paragraphs: [
								"DBD Cheats kombinerar ESP wallhack, radar hack och DBD Aimbot som undetected paket för Dead by Daylight på Windows PC. DBD Cheats pelare för ESP och Aimbot.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates dbder Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@dbdcheats.org för support och juridik.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Dead by Daylight Cheat Download | Instant Access",
					description: "Dead by Daylight Cheat Download: digital licensnedladdning efter betalning. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Dead by Daylight Cheat Download",
					intro: "DBD Cheats kombinerar ESP wallhack, radar hack och DBD Aimbot som undetected paket för Dead by Daylight på Windows PC. Dead by Daylight Cheat Download.",
					imageAlt: "DBD Cheats download and install delivery flow",
					galleryTitle: "Dead by Daylight Cheat Download",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "Köp DBD Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Dead by Daylight Cheat Download",
							paragraphs: [
								"DBD Cheats kombinerar ESP wallhack, radar hack och DBD Aimbot som undetected paket för Dead by Daylight på Windows PC. digital licensnedladdning efter betalning.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates dbder Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@dbdcheats.org för support och juridik.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Dead by Daylight Mod-meny | In-Game Toggles",
					description: "Dead by Daylight Mod-meny: in-client ESP och soft aim-växlar. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Dead by Daylight Mod-meny",
					intro: "DBD Cheats kombinerar ESP wallhack, radar hack och DBD Aimbot som undetected paket för Dead by Daylight på Windows PC. Dead by Daylight Mod-meny.",
					imageAlt: "DBD Cheats in-game menu controls",
					galleryTitle: "Dead by Daylight Mod-meny",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "Köp DBD Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Dead by Daylight Mod-meny",
							paragraphs: [
								"DBD Cheats kombinerar ESP wallhack, radar hack och DBD Aimbot som undetected paket för Dead by Daylight på Windows PC. in-client ESP och soft aim-växlar.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates dbder Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@dbdcheats.org för support och juridik.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Dead by Daylight Soft Aim | Smooth Aim Settings",
					description: "Dead by Daylight Soft Aim: mjuka soft aim-inställningar för Windows PC. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Dead by Daylight Soft Aim",
					intro: "DBD Cheats kombinerar ESP wallhack, radar hack och DBD Aimbot som undetected paket för Dead by Daylight på Windows PC. Dead by Daylight Soft Aim.",
					imageAlt: "Dead by Daylight soft aim FOV and smoothness settings",
					galleryTitle: "Dead by Daylight Soft Aim",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "Köp DBD Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "Dead by Daylight Soft Aim",
							paragraphs: [
								"DBD Cheats kombinerar ESP wallhack, radar hack och DBD Aimbot som undetected paket för Dead by Daylight på Windows PC. mjuka soft aim-inställningar för Windows PC.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates dbder Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@dbdcheats.org för support och juridik.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Bästa DBD Cheats | Buyer Checklist",
					description: "Bästa DBD Cheats: vad du ska jämföra innan du köper dbd cheats. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Bästa DBD Cheats",
					intro: "DBD Cheats kombinerar ESP wallhack, radar hack och DBD Aimbot som undetected paket för Dead by Daylight på Windows PC. Bästa DBD Cheats.",
					imageAlt: "DBD Cheats overview for Dead by Daylight on PC",
					galleryTitle: "Bästa DBD Cheats",
					heroImage: "/images/dbd-cheats-esp.webp",
					ctaPrimary: "Köp DBD Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Bästa DBD Cheats",
							paragraphs: [
								"DBD Cheats kombinerar ESP wallhack, radar hack och DBD Aimbot som undetected paket för Dead by Daylight på Windows PC. vad du ska jämföra innan du köper dbd cheats.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates dbder Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@dbdcheats.org för support och juridik.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "DBD Aimbot Hack | Soft Aim Assist",
					description: "DBD Aimbot Hack: undetected Aimbot hack assist för Dead by Daylight. omedelbar digital leverans. undetected — Windows PC.",
					h1: "DBD Aimbot Hack",
					intro: "DBD Cheats kombinerar ESP wallhack, radar hack och DBD Aimbot som undetected paket för Dead by Daylight på Windows PC. DBD Aimbot Hack.",
					imageAlt: "DBD Aimbot hack controls and bone priority",
					galleryTitle: "DBD Aimbot Hack",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "Köp DBD Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "DBD Aimbot Hack",
							paragraphs: [
								"DBD Cheats kombinerar ESP wallhack, radar hack och DBD Aimbot som undetected paket för Dead by Daylight på Windows PC. undetected Aimbot hack assist för Dead by Daylight.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates dbder Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@dbdcheats.org för support och juridik.",
							],
						},
					],
				},
				"esp-hack": {
					title: "DBD ESP Hack | Boxes & Loot",
					description: "DBD ESP Hack: ESP hack-boxar, kadaver-pins och avstånd. omedelbar digital leverans. undetected — Windows PC.",
					h1: "DBD ESP Hack",
					intro: "DBD Cheats kombinerar ESP wallhack, radar hack och DBD Aimbot som undetected paket för Dead by Daylight på Windows PC. DBD ESP Hack.",
					imageAlt: "DBD ESP hack boxes and generator markers",
					galleryTitle: "DBD ESP Hack",
					heroImage: "/images/dbd-cheats-wallhack.webp",
					ctaPrimary: "Köp DBD Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "DBD ESP Hack",
							paragraphs: [
								"DBD Cheats kombinerar ESP wallhack, radar hack och DBD Aimbot som undetected paket för Dead by Daylight på Windows PC. ESP hack-boxar, kadaver-pins och avstånd.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates dbder Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@dbdcheats.org för support och juridik.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Dead by Daylight Unlock All | What It Means",
					description: "Dead by Daylight Unlock All: unlock-all-sökningar vs riktiga ESP- och Aimbot-verktyg. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Dead by Daylight Unlock All",
					intro: "DBD Cheats kombinerar ESP wallhack, radar hack och DBD Aimbot som undetected paket för Dead by Daylight på Windows PC. Dead by Daylight Unlock All.",
					imageAlt: "DBD Cheats license features overview",
					galleryTitle: "Dead by Daylight Unlock All",
					heroImage: "/images/dbd-cheats-radar.webp",
					ctaPrimary: "Köp DBD Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Dead by Daylight Unlock All",
							paragraphs: [
								"DBD Cheats kombinerar ESP wallhack, radar hack och DBD Aimbot som undetected paket för Dead by Daylight på Windows PC. unlock-all-sökningar vs riktiga ESP- och Aimbot-verktyg.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates dbder Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@dbdcheats.org för support och juridik.",
							],
						},
					],
				},
				privacy: {
					title: "Integritetspolicy | DBD Cheats",
					description: "Integritetspolicy för DBD Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Integritetspolicy",
					intro: "DBD Cheats kombinerar ESP wallhack, radar hack och DBD Aimbot som undetected paket för Dead by Daylight på Windows PC. Integritetspolicy för dbdcheats.org och Dead by Daylight-licenser.",
					imageAlt: "DBD Cheats",
					galleryTitle: "DBD Cheats",
					heroImage: "/images/dbd-cheats-aimbot.webp",
					ctaPrimary: "E-posta support",
					ctaSecondary: "Läs villkor",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information vi samlar in",
							paragraphs: [
								"DBD Cheats kombinerar ESP wallhack, radar hack och DBD Aimbot som undetected paket för Dead by Daylight på Windows PC. Kontakt-e-post, Zadeyo-orderreferenser och grundläggande säkerhetsdata för webbplatsen.",
								"Betalningsuppgifter behandlas via Zadeyo checkout — lagras inte på dbdcheats.org.",
							],
						},
						{
							h2: "Hur vi använder data",
							paragraphs: [
								"DBD Cheats kombinerar ESP wallhack, radar hack och DBD Aimbot som undetected paket för Dead by Daylight på Windows PC. Supportssvar, orderlösning och juridisk efterlevnad vid behov.",
								"Kontrollera Updates dbder Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
							],
						},
						{
							h2: "Dina rättigheter",
							paragraphs: [
								"support@dbdcheats.org för support och juridik.",
								"E-post: support@dbdcheats.org",
							],
						},
					],
				},
				refund: {
					title: "Återbetalningspolicy | DBD Cheats",
					description: "Återbetalningspolicy för DBD Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Återbetalningspolicy",
					intro: "DBD Cheats kombinerar ESP wallhack, radar hack och DBD Aimbot som undetected paket för Dead by Daylight på Windows PC. Återbetalningspolicy för dbdcheats.org och Dead by Daylight-licenser.",
					imageAlt: "DBD Cheats",
					galleryTitle: "DBD Cheats",
					heroImage: "/images/dbd-cheats-match.webp",
					ctaPrimary: "E-posta support",
					ctaSecondary: "Läs integritet",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital leverans",
							paragraphs: [
								"DBD Cheats kombinerar ESP wallhack, radar hack och DBD Aimbot som undetected paket för Dead by Daylight på Windows PC. Kontakt-e-post, Zadeyo-orderreferenser och grundläggande säkerhetsdata för webbplatsen.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "Återbetalningsgodkännande",
							paragraphs: [
								"DBD Cheats kombinerar ESP wallhack, radar hack och DBD Aimbot som undetected paket för Dead by Daylight på Windows PC. Supportssvar, orderlösning och juridisk efterlevnad vid behov.",
								"Kontrollera Updates dbder Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
							],
						},
						{
							h2: "Hur du begär",
							paragraphs: [
								"support@dbdcheats.org för support och juridik.",
								"E-post: support@dbdcheats.org",
							],
						},
					],
				},
				terms: {
					title: "Användarvillkor | DBD Cheats",
					description: "Användarvillkor för DBD Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Användarvillkor",
					intro: "DBD Cheats kombinerar ESP wallhack, radar hack och DBD Aimbot som undetected paket för Dead by Daylight på Windows PC. Användarvillkor för dbdcheats.org och Dead by Daylight-licenser.",
					imageAlt: "DBD Cheats",
					galleryTitle: "DBD Cheats",
					heroImage: "/images/dbd-cheats-aimbot-view.webp",
					ctaPrimary: "E-posta support",
					ctaSecondary: "Läs integritet",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Godkännande av villkor",
							paragraphs: [
								"DBD Cheats kombinerar ESP wallhack, radar hack och DBD Aimbot som undetected paket för Dead by Daylight på Windows PC. Kontakt-e-post, Zadeyo-orderreferenser och grundläggande säkerhetsdata för webbplatsen.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "Riskvarning",
							paragraphs: [
								"DBD Cheats kombinerar ESP wallhack, radar hack och DBD Aimbot som undetected paket för Dead by Daylight på Windows PC. Supportssvar, orderlösning och juridisk efterlevnad vid behov.",
								"Att använda cheats kan bryta mot Behaviour Interactive terms — du tar all ban-risk.",
							],
						},
						{
							h2: "Policyändringar",
							paragraphs: [
								"support@dbdcheats.org för support och juridik.",
								"E-post: support@dbdcheats.org",
							],
						},
					],
				},
			},
		},
	};
