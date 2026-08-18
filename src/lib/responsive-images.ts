/**
 * Responsive image helpers — prefer compressed WebP for LCP and below-fold media.
 */

export interface ResponsiveWidth {
	src: string;
	width: number;
}

/** Build a srcset string from width-tagged image paths. */
export function buildSrcSet(widths: ResponsiveWidth[]): string {
	return widths.map(({ src, width }) => `${src} ${width}w`).join(', ');
}

/** Build srcset for content images that have -480w / -960w variants. */
export function contentSrcSet(baseSrc: string): string | undefined {
	const match = baseSrc.match(/^(.+\/)(.+)\.webp$/i);
	if (!match) return undefined;

	const [, dir, name] = match;
	if (
		name.endsWith('-640w') ||
		name.endsWith('-960w') ||
		name.endsWith('-1400w') ||
		name.endsWith('-1024w') ||
		name.endsWith('-1536w') ||
		name.endsWith('-480w')
	) {
		return undefined;
	}

	return buildSrcSet(
		contentWidths.map((width) => ({
			src: `${dir}${name}-${width}w.webp`,
			width,
		})),
	);
}

/**
 * Homepage / banner hero — wide banner (~3.15:1); LCP src is the 1024w WebP variant.
 */
export const heroResponsive: ResponsiveWidth[] = [
	{ src: '/images/dbd-cheats-hero-640w.webp', width: 640 },
	{ src: '/images/dbd-cheats-hero-1024w.webp', width: 1024 },
	{ src: '/images/dbd-cheats-hero-1536w.webp', width: 1536 },
];

export const heroDesktopResponsive: ResponsiveWidth[] = heroResponsive;

/** Default LCP src — full native-aspect art (no banner crop). */
export const heroSrc = '/images/dbd-hero-source.png';
export const heroSrcSet = buildSrcSet(heroResponsive);
export const heroSizes = '100vw';

/** LCP preload — compressed WebP fallback for faster paint. */
export const heroPreloadSrc = '/images/dbd-cheats-hero-1024w.webp';
export const heroMimeType = 'image/webp';

/** Intrinsic dimensions of the source art (1672×941 PNG). */
export const heroWidth = 1672;
export const heroHeight = 941;

/** Responsive widths for below-fold content images. */
export const contentWidths = [480, 960] as const;

/** Canonical screenshot path — responsive variants use -480w / -960w suffixes. */
export function screenshotSrc(n: number): string {
	return `/images/dbd-screenshot-${String(n).padStart(2, '0')}.webp`;
}

export const galleryFeaturedSizes = '(max-width: 560px) 100vw, (max-width: 900px) 90vw, 640px';
export const galleryTileSizes = '(max-width: 560px) 100vw, (max-width: 900px) 45vw, 320px';
export const productMainSizes = '(max-width: 900px) 100vw, 640px';
export const productThumbSizes = '160px';
