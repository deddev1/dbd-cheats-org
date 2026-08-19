# DBD Cheats

Marketing site for **Dead by Daylight** cheats at [dbdcheats.org](https://dbdcheats.org).

Built with Astro 7, React, Tailwind CSS, and i18n (22 locales).

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:4321/

## Brand configuration

Edit `src/data/brand.ts` or use Brand Studio at http://localhost:4321/brand-studio/ during dev.

After changing brand settings:

```bash
npm run sync:brand
npm run generate:i18n
```

## Deploy

See `DEPLOY.md` for Cloudflare Workers deployment to dbdcheats.org.
