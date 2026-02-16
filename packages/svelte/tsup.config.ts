import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
  dts: false,
  clean: true,
  target: "es2022",
  publicDir: false,
  external: ["./pixel-loader.svelte"],
  noExternal: ["@pixel-loader/core"],
  esbuildOptions(options) {
    options.loader = {
      ...options.loader,
      ".svelte": "copy",
    };
  },
});
