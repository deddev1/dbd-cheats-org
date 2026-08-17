import { fillBrandTokens } from './brand';
import type { PageId } from './i18n/routing';

/** Internal link target — canonical PageId routes or fixed EN paths (blog/reviews). */
export type InternalLinkTarget =
	| { kind: 'page'; pageId: PageId; label: string }
	| { kind: 'path'; path: string; label: string };

function L(label: string): string {
	return fillBrandTokens(label);
}

/** Topics rival {game} cheat sites cover — mapped to our canonical pages. */
const TOPIC_LINKS = {
	overview: { kind: 'page' as const, pageId: 'home' as const, label: L('{brand} overview') },
	esp: { kind: 'page' as const, pageId: 'isle-esp' as const, label: L('{game} ESP & wallhack') },
	aimbot: { kind: 'page' as const, pageId: 'isle-aimbot' as const, label: L('{game} aimbot & soft aim') },
	radar: { kind: 'page' as const, pageId: 'radar' as const, label: L('{game} radar hack') },
	features: { kind: 'page' as const, pageId: 'features' as const, label: L('Full {game} feature list') },
	pricing: { kind: 'page' as const, pageId: 'pricing' as const, label: 'Store & pricing' },
	setup: { kind: 'page' as const, pageId: 'setup' as const, label: L('{game} setup guide') },
	status: { kind: 'page' as const, pageId: 'updates' as const, label: L('Live {game} status') },
	faq: { kind: 'page' as const, pageId: 'faq' as const, label: L('{game} hacks FAQ') },
	support: { kind: 'page' as const, pageId: 'support' as const, label: L('{brand} support') },
	blog: { kind: 'path' as const, path: '/blog/', label: L('{game} Intel blog') },
	reviews: { kind: 'path' as const, path: '/reviews/', label: L('{brand} buyer reviews') },
	hacks: { kind: 'page' as const, pageId: 'hacks' as const, label: L('{primaryKeyword} pillar') },
} satisfies Record<string, InternalLinkTarget>;

/** Per-page related internal links (exclude self where noted in component). */
export const relatedLinksByPageId: Partial<Record<PageId, InternalLinkTarget[]>> = {
	home: [
		TOPIC_LINKS.esp,
		TOPIC_LINKS.aimbot,
		TOPIC_LINKS.radar,
		TOPIC_LINKS.features,
		TOPIC_LINKS.pricing,
		TOPIC_LINKS.setup,
		TOPIC_LINKS.status,
		TOPIC_LINKS.faq,
		TOPIC_LINKS.blog,
		TOPIC_LINKS.reviews,
	],
	hacks: [
		TOPIC_LINKS.esp,
		TOPIC_LINKS.aimbot,
		TOPIC_LINKS.radar,
		TOPIC_LINKS.features,
		TOPIC_LINKS.pricing,
		TOPIC_LINKS.setup,
		TOPIC_LINKS.status,
	],
	'isle-esp': [
		TOPIC_LINKS.overview,
		TOPIC_LINKS.aimbot,
		TOPIC_LINKS.radar,
		TOPIC_LINKS.features,
		TOPIC_LINKS.pricing,
		TOPIC_LINKS.setup,
		TOPIC_LINKS.status,
		TOPIC_LINKS.blog,
	],
	'isle-aimbot': [
		TOPIC_LINKS.overview,
		TOPIC_LINKS.esp,
		TOPIC_LINKS.radar,
		TOPIC_LINKS.features,
		TOPIC_LINKS.pricing,
		TOPIC_LINKS.setup,
		TOPIC_LINKS.status,
		TOPIC_LINKS.reviews,
	],
	radar: [
		TOPIC_LINKS.overview,
		TOPIC_LINKS.esp,
		TOPIC_LINKS.aimbot,
		TOPIC_LINKS.features,
		TOPIC_LINKS.pricing,
		TOPIC_LINKS.setup,
		TOPIC_LINKS.status,
	],
	features: [
		TOPIC_LINKS.esp,
		TOPIC_LINKS.aimbot,
		TOPIC_LINKS.radar,
		TOPIC_LINKS.pricing,
		TOPIC_LINKS.setup,
		TOPIC_LINKS.status,
		TOPIC_LINKS.faq,
		TOPIC_LINKS.blog,
	],
	pricing: [
		TOPIC_LINKS.overview,
		TOPIC_LINKS.features,
		TOPIC_LINKS.setup,
		TOPIC_LINKS.status,
		TOPIC_LINKS.faq,
		TOPIC_LINKS.support,
		TOPIC_LINKS.reviews,
	],
	setup: [
		TOPIC_LINKS.overview,
		TOPIC_LINKS.features,
		TOPIC_LINKS.status,
		TOPIC_LINKS.faq,
		TOPIC_LINKS.support,
		TOPIC_LINKS.pricing,
	],
	updates: [
		TOPIC_LINKS.overview,
		TOPIC_LINKS.features,
		TOPIC_LINKS.setup,
		TOPIC_LINKS.faq,
		TOPIC_LINKS.esp,
		TOPIC_LINKS.aimbot,
		TOPIC_LINKS.blog,
	],
	faq: [
		TOPIC_LINKS.overview,
		TOPIC_LINKS.features,
		TOPIC_LINKS.pricing,
		TOPIC_LINKS.setup,
		TOPIC_LINKS.status,
		TOPIC_LINKS.support,
		TOPIC_LINKS.esp,
		TOPIC_LINKS.aimbot,
	],
	support: [
		TOPIC_LINKS.faq,
		TOPIC_LINKS.setup,
		TOPIC_LINKS.status,
		TOPIC_LINKS.pricing,
		TOPIC_LINKS.overview,
	],
	privacy: [TOPIC_LINKS.overview, TOPIC_LINKS.support, TOPIC_LINKS.faq],
	refund: [TOPIC_LINKS.pricing, TOPIC_LINKS.support, TOPIC_LINKS.faq],
	terms: [TOPIC_LINKS.overview, TOPIC_LINKS.support, TOPIC_LINKS.faq],
};

/** Product-topic links for blog posts, FAQ answers, and reviews. */
export const productTopicLinks: InternalLinkTarget[] = [
	TOPIC_LINKS.overview,
	TOPIC_LINKS.esp,
	TOPIC_LINKS.aimbot,
	TOPIC_LINKS.radar,
	TOPIC_LINKS.features,
	TOPIC_LINKS.pricing,
	TOPIC_LINKS.setup,
	TOPIC_LINKS.status,
];

const DEFAULT_LINKS = relatedLinksByPageId.home ?? [];

export function getRelatedLinks(pageId: PageId | undefined): InternalLinkTarget[] {
	if (!pageId) return DEFAULT_LINKS;
	return relatedLinksByPageId[pageId] ?? DEFAULT_LINKS;
}
