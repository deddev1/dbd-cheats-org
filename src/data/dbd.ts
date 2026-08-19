import { siteConfig } from './site';

/** Simple crawl URLs — one screenshot per asset slot. */
export const dbdScreenshot = (n: number) =>
	`/images/dbd-screenshot-${String(n).padStart(2, '0')}.webp`;

/** Screenshots used across product pages. */
export const dbdImages = {
	hero: dbdScreenshot(1),
	espWallhack: dbdScreenshot(3),
	aimbotCombat: dbdScreenshot(4),
	aimbotSkeleton: dbdScreenshot(5),
	playerEsp: dbdScreenshot(6),
	hacksCombat: dbdScreenshot(7),
	logo: siteConfig.logo,
	/** @deprecated Blog / legacy aliases — each maps to one screenshot URL */
	cover: dbdScreenshot(7),
	nestBuilder: dbdScreenshot(6),
	teamFight: dbdScreenshot(5),
	hacksPackage: dbdScreenshot(6),
	headerArt: dbdScreenshot(5),
	trialCombat: dbdScreenshot(7),
	extractFight: dbdScreenshot(4),
	chaseFight: dbdScreenshot(4),
	chaseCombat: dbdScreenshot(3),
	chaseMode: dbdScreenshot(2),
	trialMap: dbdScreenshot(2),
	trialMap: dbdScreenshot(2),
	product: [
		{ src: dbdScreenshot(2), alt: 'Dead by Daylight gameplay screenshot 2' },
		{ src: dbdScreenshot(3), alt: 'Dead by Daylight gameplay screenshot 3' },
		{ src: dbdScreenshot(4), alt: 'Dead by Daylight gameplay screenshot 4' },
		{ src: dbdScreenshot(6), alt: 'Dead by Daylight gameplay screenshot 6' },
		{ src: dbdScreenshot(7), alt: 'Dead by Daylight gameplay screenshot 7' },
		{ src: dbdScreenshot(8), alt: 'Dead by Daylight gameplay screenshot 8' },
	],
	gallery: [
		{ src: dbdScreenshot(2), alt: 'Dead by Daylight gameplay screenshot 2', featured: true },
		{ src: dbdScreenshot(3), alt: 'Dead by Daylight gameplay screenshot 3' },
		{ src: dbdScreenshot(4), alt: 'Dead by Daylight gameplay screenshot 4' },
		{ src: dbdScreenshot(9), alt: 'Dead by Daylight gameplay screenshot 9' },
		{ src: dbdScreenshot(10), alt: 'Dead by Daylight gameplay screenshot 10' },
	],
	sitemap: Array.from({ length: 15 }, (_, i) => ({
		src: dbdScreenshot(i + 1),
		title: `Dead by Daylight gameplay screenshot ${i + 1}`,
		caption: `Dead by Daylight horror survival screenshot ${i + 1}`,
	})),
} as const;
