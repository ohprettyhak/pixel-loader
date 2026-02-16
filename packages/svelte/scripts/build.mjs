import { cpSync, mkdirSync, rmSync, writeFileSync } from "node:fs";

const DIST = "dist";

rmSync(DIST, { recursive: true, force: true });
mkdirSync(DIST, { recursive: true });

cpSync("src/PixelLoader.svelte", `${DIST}/PixelLoader.svelte`);
cpSync("src/index.d.ts", `${DIST}/index.d.ts`);

writeFileSync(
  `${DIST}/index.js`,
  `import '@pixel-loader/core';\nexport { default as PixelLoader } from './PixelLoader.svelte';\n`
);
