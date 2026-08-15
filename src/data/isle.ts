import { siteConfig } from './site';

/** Simple crawl URLs — one screenshot per asset slot. */
export const isleScreenshot = (n: number) =>
	`/images/isle-screenshot-${String(n).padStart(2, '0')}.webp`;

/** Screenshots used across product pages. */
export const isleImages = {
	hero: isleScreenshot(1),
	espWallhack: isleScreenshot(3),
	aimbotCombat: isleScreenshot(4),
	aimbotSkeleton: isleScreenshot(5),
	dinoEsp: isleScreenshot(6),
	hacksCombat: isleScreenshot(7),
	logo: siteConfig.logo,
	/** @deprecated Blog / legacy aliases — each maps to one screenshot URL */
	cover: isleScreenshot(7),
	nestBuilder: isleScreenshot(6),
	packFight: isleScreenshot(5),
	hacksPackage: isleScreenshot(6),
	headerArt: isleScreenshot(5),
	survivalCombat: isleScreenshot(7),
	extractFight: isleScreenshot(4),
	ambushFight: isleScreenshot(4),
	growthRunCombat: isleScreenshot(3),
	growthRunMode: isleScreenshot(2),
	survivalIsland: isleScreenshot(2),
	sessionMap: isleScreenshot(2),
	product: [
		{ src: isleScreenshot(2), alt: 'The Isle gameplay screenshot 2' },
		{ src: isleScreenshot(3), alt: 'The Isle gameplay screenshot 3' },
		{ src: isleScreenshot(4), alt: 'The Isle gameplay screenshot 4' },
		{ src: isleScreenshot(6), alt: 'The Isle gameplay screenshot 6' },
		{ src: isleScreenshot(7), alt: 'The Isle gameplay screenshot 7' },
		{ src: isleScreenshot(8), alt: 'The Isle gameplay screenshot 8' },
	],
	gallery: [
		{ src: isleScreenshot(2), alt: 'The Isle gameplay screenshot 2', featured: true },
		{ src: isleScreenshot(3), alt: 'The Isle gameplay screenshot 3' },
		{ src: isleScreenshot(4), alt: 'The Isle gameplay screenshot 4' },
		{ src: isleScreenshot(9), alt: 'The Isle gameplay screenshot 9' },
		{ src: isleScreenshot(10), alt: 'The Isle gameplay screenshot 10' },
	],
	sitemap: Array.from({ length: 15 }, (_, i) => ({
		src: isleScreenshot(i + 1),
		title: `The Isle gameplay screenshot ${i + 1}`,
		caption: `The Isle dinosaur survival screenshot ${i + 1}`,
	})),
} as const;
