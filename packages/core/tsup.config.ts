import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
  dts: true,
  clean: true,
  external: ["lit", "lit/decorators.js"],
  target: "es2022",
  minify: false,
  sourcemap: true,
});
