export {
	brand,
	blogLabel,
	fillBrandTokens,
	homeSeo,
	seoDescription,
	seoPageTitle,
	seoTitle,
	siteConfig,
	seoKeywords,
	productInfo,
} from './site-core';

import { fillBrandTokens } from './brand';

function faq<T extends { question: string; answer: string; seoTitle: string; seoDescription: string }>(item: T): T {
	return {
		...item,
		question: fillBrandTokens(item.question),
		answer: fillBrandTokens(item.answer),
		seoTitle: fillBrandTokens(item.seoTitle),
		seoDescription: fillBrandTokens(item.seoDescription),
	};
}

function reviewMeta<T extends { seoTitle: string; seoDescription: string }>(item: T): T {
	return {
		...item,
		seoTitle: fillBrandTokens(item.seoTitle),
		seoDescription: fillBrandTokens(item.seoDescription),
	};
}

export const trustSignals = {
	status: 'Online',
	statusNote: fillBrandTokens('{brand} is live for {game} on Windows PC.'),
	delivery: 'Instant digital delivery',
	platform: 'Windows 10 & 11',
	antiCheat: fillBrandTokens('{antiCheat} maintenance supported'),
} as const;

export const seoLandingPages = [
	{ label: fillBrandTokens('{gameShort} hacks'), href: '/' },
	{ label: fillBrandTokens('{primaryKeyword}'), href: '/' },
	{ label: fillBrandTokens('{gameShort} ESP'), href: '/dbd-esp/' },
	{ label: fillBrandTokens('{gameShort} aimbot'), href: '/dbd-aimbot/' },
	{ label: fillBrandTokens('{gameShort} setup'), href: '/setup/' },
	{ label: fillBrandTokens('Undetected {primaryKeyword}'), href: '/' },
	{ label: fillBrandTokens('{gameShort} wallhack'), href: '/dbd-esp/' },
	{ label: fillBrandTokens('{gameShort} radar hack'), href: '/dbd-radar-hack/' },
] as const;

export const mainNav = [
	{ label: 'Home', href: '/' },
	{ label: 'Cheats', href: '/' },
	{ label: 'Aimbot', href: '/dbd-aimbot/' },
	{ label: 'ESP', href: '/dbd-esp/' },
	{ label: 'Features', href: '/features/' },
	{ label: 'Pricing', href: '/pricing/' },
	{ label: 'Setup', href: '/setup/' },
	{ label: 'Updates', href: '/updates/' },
	{ label: 'FAQ', href: '/faq/' },
] as const;

export const footerNav = [
	{ label: fillBrandTokens('{gameShort} hack update log'), href: '/updates/' },
	{ label: fillBrandTokens('Contact {brand} support'), href: '/support/' },
	{ label: 'Refund policy details', href: '/refund-policy/' },
	{ label: 'Privacy policy details', href: '/privacy-policy/' },
	{ label: 'Terms of use', href: '/terms/' },
] as const;

export const footerExplore = [
	{ label: fillBrandTokens('{brand} home'), href: '/' },
	{ label: fillBrandTokens('{gameShort} hacks pillar'), href: '/' },
	{ label: fillBrandTokens('Live {gameShort} status'), href: '/updates/' },
	{ label: fillBrandTokens('{gameShort} ESP overlays'), href: '/dbd-esp/' },
	{ label: fillBrandTokens('{gameShort} aimbot controls'), href: '/dbd-aimbot/' },
	{ label: fillBrandTokens('{gameShort} radar hack'), href: '/dbd-radar-hack/' },
	{ label: fillBrandTokens('Full {gameShort} hack feature list'), href: '/features/' },
	{ label: 'Monthly & lifetime pricing', href: '/pricing/' },
	{ label: fillBrandTokens('{gameShort} hack setup guide'), href: '/setup/' },
	{ label: fillBrandTokens('{gameShort} hacks FAQ'), href: '/faq/' },
	{ label: fillBrandTokens('{brand} reviews'), href: '/reviews/' },
	{ label: fillBrandTokens('{gameShort} Intel blog'), href: '/blog/' },
	{ label: fillBrandTokens('Contact {brand} support'), href: '/support/' },
] as const;

export type FaqItem = {
	question: string;
	answer: string;
	slug: string;
	seoTitle: string;
	seoDescription: string;
};

export const homeFaqs: readonly FaqItem[] = [
	faq({
		question: 'What is {brand}?',
		answer:
			'{brand} is an undetected {primaryKeyword} package for Dead by Daylight on Windows PC. It includes ESP wallhack, 2D radar, and aimbot controls, with {antiCheat} maintenance and setup support.',
		slug: 'what-are-dbd-cheats',
		seoTitle: 'What is {brand}? | FAQ',
		seoDescription:
			'{brand} explained: undetected ESP, radar, and aimbot for {game} on Windows PC with {antiCheat} maintenance.',
	}),
	faq({
		question: 'Are {primaryKeyword} undetected in 2026?',
		answer:
			'{brand} is maintained for {game} with rebuilds after {antiCheat} and game patches. Check the Status page before you queue. No cheat can guarantee permanent undetected status — maintenance and responsible use matter.',
		slug: 'are-dbd-cheats-undetected-in-2026',
		seoTitle: 'Are {brand} Undetected in 2026? | FAQ',
		seoDescription:
			'How {brand} stays maintained after {antiCheat} patches in 2026 — and why no cheat can promise permanent undetected status.',
	}),
	faq({
		question: 'Does this work in survivor and killer trials?',
		answer:
			'Yes. ESP, radar, and aimbot are built for {game} trial flow — reading survivors and killers, spotting generators, and staying aware near generators and hooks.',
		slug: 'survivor-and-killer-trials',
		seoTitle: 'Survival Session and survivor Support | FAQ',
		seoDescription:
			'{brand} works in survivor and killer trials — ESP, radar, and aimbot for Windows PC.',
	}),
	faq({
		question: 'What is included — ESP, wallhack, radar, or Aimbot?',
		answer:
			'{brand} bundles ESP wallhack, generator markers, 2D radar cues, and configurable Aimbot in one license. See Features for the full list.',
		slug: 'esp-wallhack-radar-or-aimbot',
		seoTitle: 'What Is Included: ESP, Wallhack, Radar, Aimbot | FAQ',
		seoDescription:
			'One {brand} license includes ESP wallhack, generator markers, 2D radar cues, and configurable Aimbot for Windows PC.',
	}),
	faq({
		question: 'How are licenses delivered?',
		answer:
			'After payment is confirmed, {brand} license details are delivered digitally through checkout. Timing can vary by payment method and order review. Keep your order confirmation ready if you contact support.',
		slug: 'how-are-licenses-delivered',
		seoTitle: 'How Are {brand} Licenses Delivered? | FAQ',
		seoDescription:
			'{brand} licenses are delivered digitally after payment confirmation. Timing varies by payment method and order review.',
	}),
	faq({
		question: 'Where do I check updates after a Dead by Daylight or {antiCheat} patch?',
		answer:
			'Maintenance notes are posted on the Status page when a Dead by Daylight or {antiCheat} update affects the package. That is the fastest place to confirm whether a new {brand} build is live.',
		slug: 'where-to-check-updates',
		seoTitle: 'Where to Check {gameShort} / {antiCheat} Updates | FAQ',
		seoDescription:
			'Check the Status page after {game} or {antiCheat} patches to confirm the latest {brand} build status.',
	}),
	faq({
		question: 'How do I contact support?',
		answer:
			'Use the Support page or email {email}. Include your order details, package length, and a clear description of the setup issue so replies can be faster.',
		slug: 'how-to-contact-support',
		seoTitle: 'How to Contact {brand} Support | FAQ',
		seoDescription:
			'Contact {brand} support via the Support page or {email} with your order details for faster help.',
	}),
] as const;

export const seoFaqs: readonly FaqItem[] = [
	...homeFaqs,
	faq({
		question: 'What is a {game} wallhack?',
		answer:
			'A {game} wallhack is an ESP overlay that shows survivors, killers, and generators through walls. {brand} includes distance readouts, generator cues, and toggleable categories.',
		slug: 'what-is-a-dbd-wallhack',
		seoTitle: 'What Is a {game} Wallhack? | FAQ',
		seoDescription:
			'A {game} wallhack is ESP that reveals survivors, killers, and generators through walls — with distance, generators, and category toggles.',
	}),
	faq({
		question: 'Does {brand} include a radar hack?',
		answer:
			'Yes. {brand} includes 2D radar overlays that highlight nearby threats outside your view — useful for flanks and hook zones.',
		slug: 'does-dbd-cheats-include-radar-hack',
		seoTitle: 'Does {brand} Include a Radar Hack? | FAQ',
		seoDescription:
			'Yes — {brand} includes 2D radar overlays for nearby threats outside your FOV.',
	}),
	faq({
		question: 'How does {antiCheat} affect {primaryKeyword}?',
		answer:
			'{antiCheat} monitors {game} on Windows PC. {brand} posts maintenance notes after patches that may need a rebuild. Check Status before you queue.',
		slug: 'eac-anti-cheat-and-dbd-cheats',
		seoTitle: 'How {antiCheat} Affects {brand} | FAQ',
		seoDescription:
			'{antiCheat} may require {brand} rebuilds after patches. Status notes explain the update workflow.',
	}),
	faq({
		question: 'Can I buy undetected {game} cheats for Windows PC?',
		answer:
			'Yes — {brand} sells monthly and lifetime licenses for Windows PC with ESP, radar, and aimbot in one stack. Compare plans on Store before checkout.',
		slug: 'buy-undetected-dbd-cheats-windows-pc',
		seoTitle: 'Buy Undetected {game} Cheats for Windows PC | FAQ',
		seoDescription:
			'Buy monthly or lifetime {brand} licenses for Windows PC — ESP, radar, and aimbot in one stack. Compare pricing before checkout.',
	}),
] as const;

export type CustomerReview = {
	handle: string;
	rating: 3 | 4 | 5;
	text: string;
	short: string;
	slug: string;
	seoTitle: string;
	seoDescription: string;
	date: string;
	tag?: string;
};

export const customerReviews = [
	reviewMeta({
		handle: 'xKrypt0_DBD',
		rating: 5,
		text: 'Soft aim in DBD Cheats feels smooth on MacMillan Estate. The menu took a few minutes to learn. After that, trials felt easy.',
		short: 'Soft aim in DBD Cheats feels smooth on MacMillan Estate.',
		slug: 'dbd-soft-aim-review-xkrypt0',
		seoTitle: 'Soft Aim Review by @xKrypt0_DBD — 5/5 | {brand}',
		seoDescription: '@xKrypt0_DBD rates {brand} soft aim 5/5 for MacMillan Estate on Windows PC.',
		date: '2026-07-24',
		tag: 'Soft aim',
	}),
	reviewMeta({
		handle: 'buildsR4K',
		rating: 4,
		text: 'ESP boxes help on chases. You can see who is stalking a river bank before you push. Still worth the price for DBD Cheats.',
		short: 'ESP boxes help on chases. Still worth the price for DBD Cheats.',
		slug: 'dbd-esp-chase-review-buildsr4k',
		seoTitle: 'ESP Review by @buildsR4K — 4/5 | {brand}',
		seoDescription: '@buildsR4K rates {brand} ESP 4/5 for chases on Windows PC.',
		date: '2026-07-19',
		tag: 'chase',
	}),
	reviewMeta({
		handle: 'dma_wizard',
		rating: 5,
		text: 'I moved to DBD Cheats this patch cycle. Setup was simple. It stayed up after the last Easy Anti-Cheat update when my old cheat failed. Lifetime was a good buy.',
		short: 'DBD Cheats stayed up after the last Easy Anti-Cheat update. Lifetime was a good buy.',
		slug: 'dbd-cloud-dma-review-dma-wizard',
		seoTitle: 'Update Review by @dma_wizard — 5/5 | {brand}',
		seoDescription: '@dma_wizard rates {brand} 5/5 after a {antiCheat} update on Windows PC.',
		date: '2026-06-27',
		tag: 'Updates',
	}),
	reviewMeta({
		handle: 'ctrl_player99',
		rating: 4,
		text: 'Soft aim in DBD Cheats is easy to tune on PC. I changed FOV a little and it felt natural. Menu is clear enough.',
		short: 'Soft aim in DBD Cheats is easy to tune on PC.',
		slug: 'dbd-soft-aim-review-ctrl-player99',
		seoTitle: 'Soft Aim Review by @ctrl_player99 — 4/5 | {brand}',
		seoDescription: '@ctrl_player99 rates {brand} soft aim 4/5 on Windows PC.',
		date: '2026-07-11',
		tag: 'Soft aim',
	}),
	reviewMeta({
		handle: 'stormChaser_07',
		rating: 3,
		text: 'DBD Cheats works well once it is running. First launch was slow because Windows Defender flagged the loader. Support replied in about two hours. ESP on Autohaven Wreckers is solid.',
		short: 'ESP on Autohaven Wreckers is solid. Support helped after a slow first launch.',
		slug: 'dbd-cheat-setup-review-stormchaser07',
		seoTitle: 'Setup Review by @stormChaser_07 — 3/5 | {brand}',
		seoDescription: '@stormChaser_07 rates {brand} setup 3/5. ESP on Autohaven Wreckers is solid after support help.',
		date: '2026-06-15',
		tag: 'Setup',
	}),
	reviewMeta({
		handle: 'lootGoblinx',
		rating: 5,
		text: 'Generator ESP in DBD Cheats pays for the monthly plan. Generator markers and distance make early trials faster.',
		short: 'Generator ESP in DBD Cheats pays for the monthly plan.',
		slug: 'dbd-generator-esp-review-lootgoblinx',
		seoTitle: 'Generator ESP Review by @lootGoblinx — 5/5 | {brand}',
		seoDescription: '@lootGoblinx rates {brand} generator ESP 5/5 for early trials on Windows PC.',
		date: '2026-08-01',
	}),
	reviewMeta({
		handle: 'rankedGrind42',
		rating: 4,
		text: 'I have used DBD Cheats since last chapter update. Soft aim per killer helps in high-traffic tiles. Status updates after Easy Anti-Cheat patches could be clearer, but it came back the next day.',
		short: 'Soft aim per killer in DBD Cheats helps in high-traffic tiles.',
		slug: 'dbd-soft-aim-trial-review-rankedgrind42',
		seoTitle: 'Raid Soft Aim by @rankedGrind42 — 4/5 | {brand}',
		seoDescription: '@rankedGrind42 rates {brand} soft aim 4/5 for trials on Windows PC.',
		date: '2026-07-07',
		tag: 'Raid',
	}),
	reviewMeta({
		handle: 'vanLifeDBD',
		rating: 5,
		text: 'Radar in DBD Cheats saved me near generators and hooks. Seeing the third player early in pairs is huge. Boxes plus radar look clean.',
		short: 'Radar in DBD Cheats saved me near generators and hooks.',
		slug: 'dbd-radar-hack-review-vanlifedbd',
		seoTitle: 'Radar Review by @vanLifeDBD — 5/5 | {brand}',
		seoDescription: '@vanLifeDBD rates {brand} radar 5/5 near generators and hooks on Windows PC.',
		date: '2026-07-28',
		tag: 'Generators',
	}),
	reviewMeta({
		handle: 'patchDayMike',
		rating: 4,
		text: 'Most cheats go down on patch day. DBD Cheats posted on the status page within a few hours and was back the next morning. My old tool left me waiting for days.',
		short: 'DBD Cheats was back the next morning after a patch.',
		slug: 'dbd-eac-update-review-patchdaymike',
		seoTitle: 'Status Review by @patchDayMike — 4/5 | {brand}',
		seoDescription: '@patchDayMike rates {brand} status updates 4/5 after {antiCheat} patches.',
		date: '2026-06-09',
		tag: 'Easy Anti-Cheat updates',
	}),
	reviewMeta({
		handle: 'snipezOnly_',
		rating: 5,
		text: 'Skill-check soft aim plus ESP in DBD Cheats is excellent for long shots. Simple and strong.',
		short: 'Skill-check soft aim plus ESP in DBD Cheats is excellent.',
		slug: 'dbd-skill-check-soft-aim-review-snipezonly',
		seoTitle: 'Sniper Soft Aim by @snipezOnly_ — 5/5 | {brand}',
		seoDescription: '@snipezOnly_ rates {brand} sniper soft aim 5/5 with ESP on Windows PC.',
		date: '2026-08-01',
	}),
] as const satisfies readonly CustomerReview[];

export const customerReviewStats = {
	averageRating: 4.4,
	totalCount: customerReviews.length,
} as const;
