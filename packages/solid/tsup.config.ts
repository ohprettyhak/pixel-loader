import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
  dts: true,
  clean: true,
  target: "es2022",
  esbuildOptions(options) {
    options.jsx = "automatic";
    options.jsxImportSource = "solid-js";
  },
});
