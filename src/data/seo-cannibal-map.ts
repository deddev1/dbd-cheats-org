/**
 * Near-duplicate pageIds → stronger pillars.
 * Kept free of routing imports to avoid circular deps with localizeInternalHref.
 */
export const cannibalRedirectTargets = {
	hacks: 'home',
	'best-cheats': 'home',
	'cheats-2026': 'home',
	undetected: 'home',
	'mod-menu': 'home',
	'unlock-all': 'home',
	'aimbot-hack': 'dbd-aimbot',
	'soft-aim': 'dbd-aimbot',
	'esp-hack': 'dbd-esp',
	wallhack: 'dbd-esp',
	'cheat-download': 'setup',
	eac: 'updates',
} as const;

export type CannibalPageId = keyof typeof cannibalRedirectTargets;

export const cannibalPageIds = Object.keys(cannibalRedirectTargets) as CannibalPageId[];

export function isCannibalPageId(pageId: string): pageId is CannibalPageId {
	return pageId in cannibalRedirectTargets;
}

export function getCannibalTargetId(pageId: string): string {
	return (cannibalRedirectTargets as Record<string, string>)[pageId] ?? pageId;
}
