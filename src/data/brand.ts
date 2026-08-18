/**
 * SINGLE SOURCE OF TRUTH for template rebrands.
 * Employees: use Brand Studio at http://localhost:4321/brand-studio/ during `astro dev`.
 * Do not scatter brand strings across components.
 */
export const brand = {
	/** Public brand name (nav, footer, H1 hero, schema Organization) */
	name: 'DBD Cheats',
	/** Short product label if needed */
	shortName: 'DBD Cheats',
	/** Canonical origin — no trailing slash */
	url: 'https://dbdcheats.org',
	locale: 'en',
	market: 'Worldwide',
	supportEmail: 'support@dbdcheats.org',
	checkoutUrl: 'https://zadeyo.com/go/QRH?to=%2Fproducts%2Fdead-by-daylight',

	/** Game this template instance targets */
	game: 'Dead by Daylight',
	/** Official game store page — linked from the hero image */
	gameUrl: 'https://store.steampowered.com/app/381210/Dead_by_Daylight/',
	/** Anti-cheat name used in Status / FAQ copy */
	antiCheat: 'Easy Anti-Cheat',

	logo: '/images/dbd-cheats-logo.webp',
	logoRaster: '/images/dbd-cheats-logo.png',
	logoRasterWidth: 512,
	logoRasterHeight: 512,
	logoAlt: 'DBD Cheats logo',
	defaultOgImage: '/images/dbd-cheats-hero-1024w.webp',
	heroImage: '/images/dbd-cheats-hero-1024w.webp',

	plans: [
		{ id: 'monthly', label: 'Monthly', price: 35, duration: 'P30D' },
		{ id: 'lifetime', label: 'Lifetime', price: 150, duration: 'P99Y' },
	] as const,
	currency: 'USD',
	platforms: ['Windows PC'] as const,

	/**
	 * Site color tones — accent + canvas + soft/deep/hover/panel.
	 * Edit in Brand Studio → Colors (tones are fully customizable).
	 */
	theme: {
		accent: '#8B5CF6',
		bg: '#07060A',
		soft: '#291A3D',
		deep: '#0B0810',
		hover: '#A78BFA',
		panel: '#15111C',
	},

	/**
	 * Keyword system — primary drives titles; list feeds schema / light targeting.
	 * Keep 5–8 terms.
	 */
	keywords: {
		primary: 'dbd cheats',
		list: [
			'dbd cheats',
			'dead by daylight cheats',
			'DBD ESP',
			'DBD Aimbot',
			'dbd wallhack',
			'dead by daylight hack',
			'undetected dbd cheats',
			'best dbd cheats',
		] as const,
	},

	/**
	 * Editable SEO meta — tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 * Aim ~50–60 chars titles, ~140–160 chars descriptions.
	 */
	seo: {
		homeTitle: 'DBD Cheats | Undetected Aimbot, ESP & Wallhack 2026',
		homeDescription:
			'DBD cheats for PC with aimbot, ESP and wallhack features. Explore gameplay features, pricing, setup information and the latest updates.',
		featuresTitle: '{game} Features | {brand}',
		featuresDescription: 'Everything in one {game} license for Windows PC — ESP, soft aim, radar, trial tools, and patch updates after {antiCheat}. See what is included.',
		storeTitle: '{game} Store | {brand}',
		storeDescription: 'Monthly and lifetime {game} plans for Windows PC. Same ESP, aimbot, and radar features on both. Instant delivery after payment checkout.',
		statusTitle: '{game} Status | {brand}',
		statusDescription: 'Live undetected status for {brand} after {game} or {antiCheat} patches. Check here before you queue on Windows PC today.',
		previewTitle: 'DBD Cheats | Undetected ESP & Aimbot',
		previewDescription: 'Buy undetected dbd cheats for Dead by Daylight on Windows PC. ESP, soft aim, radar, and Easy Anti-Cheat patch updates in one license with instant delivery.',
		setupTitle: '{game} Setup | {brand}',
		setupDescription: 'Install and launch {brand} on Windows PC after checkout. Short setup steps so you can queue faster. Follow each step in order before your first trial.',
		supportTitle: '{game} Support | {brand}',
		supportDescription: 'Get help with {brand} on Windows PC. Email {email} with your order ID for setup, delivery, or billing help after you buy.',
		faqTitle: '{game} FAQ | {brand}',
		faqDescription: 'Short answers about {brand} for Dead by Daylight — delivery, setup, {antiCheat} updates, refunds, and Windows PC system notes before you buy.',
		reviewsTitle: '{brand} Reviews | Buyer Feedback',
		reviewsDescription: 'Buyer reviews for {brand} — ESP, soft aim, radar, and patch updates for Dead by Daylight on Windows PC. Real feedback from license holders.',
		blogTitle: '{game} Intel | {brand}',
		blogDescription: 'Guides and notes for {game} — trial tips, ESP, aimbot, loop routes, and {antiCheat} update coverage for Windows PC players.',
	},

	/** On-page marketing copy (tokens allowed) */
	copy: {
		tagline: 'Undetected {primaryKeyword} — ESP, aimbot, and radar for PC',
		summary: '{brand} is an undetected {game} cheat package for Windows PC. Includes ESP, soft aim, and radar, with {antiCheat} maintenance after patches.',
		heroLede: 'Undetected ESP, soft aim, and radar for Dead by Daylight on Windows PC.',
		blogLabel: 'DBD Intel',
		ctaBuy: 'Get Access',
		ctaBuyShort: 'Buy',
		featuresIntro: 'Everything included in one license for {game} on Windows PC.',
		storeIntro: 'Pick a plan. Same features on both. Instant delivery after payment.',
		statusIntro: 'Check here after a {game} or {antiCheat} patch before you queue.',
		previewIntro: '{brand} for Dead by Daylight — ESP wallhack, soft aim, 2D radar, and Easy Anti-Cheat rebuilds after patches.',
		setupIntro: 'Install {brand} on Windows PC after you buy. Follow these short steps.',
		supportIntro: 'Need help with {brand}? Email {email} with your order ID.',
		faqIntro: 'Short answers about delivery, setup, updates, and refunds.',
		reviewsIntro: 'Feedback from {brand} buyers — ESP, soft aim, radar, and support.',
		chipEsp: 'ESP / wallhack',
		chipAim: 'Soft aim',
		chipRadar: '2D radar',
		chipUpdates: 'Patch updates',
		navPreview: 'Cheats',
		navFeatures: 'Features',
		navStore: 'Store',
		navStatus: 'Status',
		navReviews: 'Reviews',
	},

	/**
	 * Sitemap labels — XML is generated at build/dev from routes + these strings.
	 * Domain comes from `url` (also written to robots.txt via sync:brand).
	 * Tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 */
	sitemap: {
		/** YYYY-MM-DD — Brand Studio can bump this on save to refresh crawl dates */
		contentLastmod: '2026-08-18',
		blogImageTitle: '{brand} blog',
		blogImageCaption: 'Tips and updates for {primaryKeyword}',
		reviewsImageTitle: '{brand} reviews',
		reviewsImageCaption: 'What buyers say about {primaryKeyword}',
		images: [
			{
				src: '/images/dbd-screenshot-01.webp',
				title: 'Dead by Daylight gameplay screenshot 1',
				caption: 'Dead by Daylight horror horror gameplay on Windows PC',
			},
			{
				src: '/images/dbd-screenshot-02.webp',
				title: 'Dead by Daylight gameplay screenshot 2',
				caption: 'Asymmetric horror trial in Dead by Daylight',
			},
			{
				src: '/images/dbd-screenshot-03.webp',
				title: 'Dead by Daylight gameplay screenshot 3',
				caption: 'Killer and survivor encounters in Dead by Daylight',
			},
			{
				src: '/images/dbd-screenshot-04.webp',
				title: 'Dead by Daylight gameplay screenshot 4',
				caption: 'Map exploration and chases in Dead by Daylight',
			},
			{
				src: '/images/dbd-screenshot-05.webp',
				title: 'Dead by Daylight gameplay screenshot 5',
				caption: 'Killer chase and survivor escape in Dead by Daylight',
			},
			{
				src: '/images/dbd-screenshot-06.webp',
				title: 'Dead by Daylight gameplay screenshot 6',
				caption: 'Generator and hook zone gameplay in Dead by Daylight',
			},
			{
				src: '/images/dbd-screenshot-07.webp',
				title: 'Dead by Daylight gameplay screenshot 7',
				caption: 'Multiplayer horror survival in Dead by Daylight',
			},
			{
				src: '/images/dbd-screenshot-08.webp',
				title: 'Dead by Daylight gameplay screenshot 8',
				caption: 'Chase and perk progression in Dead by Daylight',
			},
			{
				src: '/images/dbd-screenshot-09.webp',
				title: 'Dead by Daylight gameplay screenshot 9',
				caption: 'Late-game trial tactics in Dead by Daylight',
			},
			{
				src: '/images/dbd-screenshot-10.webp',
				title: 'Dead by Daylight gameplay screenshot 10',
				caption: 'Killer stalking survivors in Dead by Daylight',
			},
			{
				src: '/images/dbd-screenshot-11.webp',
				title: 'Dead by Daylight gameplay screenshot 11',
				caption: 'Swamp and indoor tiles in Dead by Daylight',
			},
			{
				src: '/images/dbd-screenshot-12.webp',
				title: 'Dead by Daylight gameplay screenshot 12',
				caption: 'Survivor team coordination in Dead by Daylight',
			},
			{
				src: '/images/dbd-screenshot-13.webp',
				title: 'Dead by Daylight gameplay screenshot 13',
				caption: 'Night and low-light trials in Dead by Daylight',
			},
			{
				src: '/images/dbd-screenshot-14.webp',
				title: 'Dead by Daylight gameplay screenshot 14',
				caption: 'Map traversal and positioning in Dead by Daylight',
			},
			{
				src: '/images/dbd-screenshot-15.webp',
				title: 'Dead by Daylight gameplay screenshot 15',
				caption: 'Endgame killer gameplay in Dead by Daylight',
			},
		],
	},
} as const;

export type Brand = typeof brand;

/** Replace {brand} {game} {antiCheat} {email} {primaryKeyword} {checkout} */
export function fillBrandTokens(input: string): string {
	return input
		.replaceAll('{brand}', brand.name)
		.replaceAll('{game}', brand.game)
		.replaceAll('{antiCheat}', brand.antiCheat)
		.replaceAll('{email}', brand.supportEmail)
		.replaceAll('{primaryKeyword}', brand.keywords.primary)
		.replaceAll('{checkout}', brand.checkoutUrl);
}

/** Locked title formula fallback: `{Game} {Topic} | {Brand}` */
export function seoTitle(topic: string): string {
	const title = `${brand.game} ${topic} | ${brand.name}`;
	return title.length <= 60 ? title : `${topic} | ${brand.name}`;
}

/** Keep descriptions short; tokens allowed. */
export function seoDescription(template: string): string {
	const text = fillBrandTokens(template).trim();
	return text.length <= 160 ? text : `${text.slice(0, 157).trim()}…`;
}

/** Resolved EN home meta from brand.seo (title clamp lives in site-core.seoPageTitle). */
export function homeSeo() {
	return {
		title: fillBrandTokens(brand.seo.homeTitle),
		description: seoDescription(brand.seo.homeDescription),
	};
}
