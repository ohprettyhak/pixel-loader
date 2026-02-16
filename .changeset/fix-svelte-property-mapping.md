---
"@pixel-loader/svelte": patch
---

Fix property mapping for LitElement custom element

- Use `bind:this` + `onMount`/`afterUpdate` to sync `borderRadius` and `delayPattern` as JS properties
- `borderRadius` attribute maps to `borderradius` (not `border-radius`), now set via JS property
- `delayPattern` has `attribute: false` in LitElement, now set via JS property
- Rename component file from `pixel-loader.svelte` to `PixelLoader.svelte`
- Import `@pixel-loader/core` to ensure custom element registration
