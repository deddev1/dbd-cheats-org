import { brand } from './brand';
import type { PageId } from './i18n/routing';

export type ExternalResource = {
	label: string;
	href: string;
	note?: string;
};

export type GuideCta = {
	label: string;
	href: string;
};

/** Canonical outbound URLs — single source for CTAs, pills, and resource blocks. */
export const externalUrls = {
	steam: brand.gameUrl,
	steamNews: 'https://store.steampowered.com/app/381210/news/',
	officialSite: 'https://www.deadbydaylight.com/',
	wiki: 'https://deadbydaylight.fandom.com/wiki/Dead_by_Daylight_Wiki',
	steamCommunity: 'https://steamcommunity.com/app/381210',
} as const;

/** Authoritative third-party guides — cite official game sources for readers and search engines. */
export const externalResources: ExternalResource[] = [
	{
		label: 'Dead by Daylight on Steam',
		href: externalUrls.steam,
		note: 'Official store page, system requirements, and player reviews.',
	},
	{
		label: 'Steam patch notes & news',
		href: externalUrls.steamNews,
		note: 'Read official update posts before you change your loadout.',
	},
	{
		label: 'Official Dead by Daylight website',
		href: externalUrls.officialSite,
		note: 'Game overview from Behaviour Interactive.',
	},
	{
		label: 'Dead by Daylight Wiki (Fandom)',
		href: externalUrls.wiki,
		note: 'Killer stats, perks, maps, and trial mechanics.',
	},
	{
		label: 'Steam Community hub',
		href: externalUrls.steamCommunity,
		note: 'Announcements and community discussions.',
	},
];

/** Compact above-the-fold guide links for blogs and page banners. */
export const featuredGuidePills: GuideCta[] = [
	{ label: 'Dead by Daylight on Steam', href: externalUrls.steam },
	{ label: 'Official patch notes', href: externalUrls.steamNews },
	{ label: 'Dead by Daylight Wiki', href: externalUrls.wiki },
];

/**
 * Secondary banner buttons that should point to official guides — not internal sales pages.
 * Keeps primary Buy CTAs while giving Google clear outbound citations.
 */
export const externalSecondaryByPageId: Partial<Record<PageId, GuideCta>> = {
	features: { label: 'Official patch notes', href: externalUrls.steamNews },
	updates: { label: 'Steam patch notes', href: externalUrls.steamNews },
	hacks: { label: 'Dead by Daylight Wiki', href: externalUrls.wiki },
	'dbd-esp': { label: 'Dead by Daylight Wiki', href: externalUrls.wiki },
	'dbd-aimbot': { label: 'Dead by Daylight Wiki', href: externalUrls.wiki },
	radar: { label: 'Dead by Daylight Wiki', href: externalUrls.wiki },
	setup: { label: 'Official game site', href: externalUrls.officialSite },
	support: { label: 'Steam Community', href: externalUrls.steamCommunity },
	faq: { label: 'Dead by Daylight Wiki', href: externalUrls.wiki },
	undetected: { label: 'Steam patch notes', href: externalUrls.steamNews },
	wallhack: { label: 'Dead by Daylight Wiki', href: externalUrls.wiki },
	eac: { label: 'Steam patch notes', href: externalUrls.steamNews },
	'cheats-2026': { label: 'Dead by Daylight on Steam', href: externalUrls.steam },
	'cheat-download': { label: 'Official game site', href: externalUrls.officialSite },
	'mod-menu': { label: 'Dead by Daylight Wiki', href: externalUrls.wiki },
	'soft-aim': { label: 'Dead by Daylight Wiki', href: externalUrls.wiki },
	'best-cheats': { label: 'Steam Community', href: externalUrls.steamCommunity },
	'aimbot-hack': { label: 'Dead by Daylight Wiki', href: externalUrls.wiki },
	'esp-hack': { label: 'Dead by Daylight Wiki', href: externalUrls.wiki },
	'unlock-all': { label: 'Official game site', href: externalUrls.officialSite },
	pricing: { label: 'Dead by Daylight on Steam', href: externalUrls.steam },
};

export function getExternalSecondaryCta(pageId: PageId): GuideCta | undefined {
	return externalSecondaryByPageId[pageId];
}

export function isExternalHref(href: string): boolean {
	return href.startsWith('http');
}
