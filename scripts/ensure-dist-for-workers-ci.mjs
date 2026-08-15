#!/usr/bin/env node
/**
 * Cloudflare Workers Builds runs `npm clean-install` then `npx wrangler deploy`.
 * The dashboard deploy step does not always run Wrangler's [build] hook, so dist/
 * may be missing when deploy starts. Build once after install when on Workers CI.
 */
import { execSync } from "node:child_process";
import { existsSync } from "node:fs";

if (process.env.WORKERS_CI !== "1") {
	process.exit(0);
}

if (existsSync("dist/index.html")) {
	process.exit(0);
}

console.log("[workers-ci] dist/ missing — running npm run build");
execSync("npm run build", { stdio: "inherit" });
