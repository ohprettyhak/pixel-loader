# Pixel Loader

A customizable 3x3 cell loading indicator web component with framework integrations for React, Vue, Solid, and Svelte.

## Features

- 🎨 **8 Animation Presets**: diagonal, wave-lr, wave-rl, wave-tb, wave-bt, center-out, spiral, corners
- 🎛️ **Customizable**: Size, colors, border-radius, shadow effects, animation duration, delay patterns
- ⚡ **Framework Integrations**: React, Vue, SolidJS, Svelte (plus vanilla web component)
- 🌳 **Tree-shakeable**: Small bundle size with ES modules
- 📦 **Zero Dependencies**: Built with vanilla TypeScript and LitElement
- 🌐 **Universal**: Works in all modern browsers

## Quick Start

### React (Next.js)

```bash
pnpm add @pixel-loader/react
```

```tsx
import { PixelLoader } from "@pixel-loader/react";

export default function App() {
  return <PixelLoader preset="diagonal" size={66} />;
}
```

### Vue (Nuxt)

```bash
pnpm add @pixel-loader/vue
```

```vue
<script setup lang="ts">
import { PixelLoader } from "@pixel-loader/vue";
</script>

<template>
  <PixelLoader preset="diagonal" :size="66" />
</template>
```

### Solid (Solid Start)

```bash
pnpm add @pixel-loader/solid
```

```tsx
import "@pixel-loader/solid";

export default function App() {
  return <pixel-loader preset="diagonal" size={66} />;
}
```

### Svelte (SvelteKit)

```bash
pnpm add @pixel-loader/svelte
```

```svelte
<script lang="ts">
import { PixelLoader } from "@pixel-loader/svelte";
</script>

<PixelLoader preset="diagonal" size={66} />
```

### Vanilla Web Component

```bash
pnpm add @pixel-loader/core
```

```html
<script type="module">
  import "@pixel-loader/core";
</script>

<pixel-loader preset="diagonal" size="66"></pixel-loader>
```

## Examples

See the [`/examples`](./examples) directory for a complete React/Next.js implementation.

## Documentation

- [Next.js Integration Guide](./docs/NEXTJS_INTEGRATION.md) - English
- [Next.js 통합 가이드](./docs/NEXTJS_INTEGRATION_KO.md) - 한국어
- [AGENTS.md](./AGENTS.md) - Project development guidelines

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `preset` | `PresetName` | `"diagonal"` | Animation preset to use |
| `size` | `number` | `66` | Size in pixels |
| `color` | `string` | `"#333"` | Cell color |
| `borderRadius` | `number` | `4` | Cell border radius |
| `isAnimating` | `boolean` | `true` | Animation play state |
| `shadowBlur` | `number` | `0` | Shadow blur amount |
| `shadowColor` | `string` | - | Shadow color |
| `presetDuration` | `number` | `400` | Animation duration (ms) |
| `delayPattern` | `number[]` | - | Custom delay pattern (9 values) |

## Animation Presets

| Preset | Description |
|--------|-------------|
| `diagonal` | Cells animate from top-left to bottom-right |
| `wave-lr` | Wave animation from left to right |
| `wave-rl` | Wave animation from right to left |
| `wave-tb` | Wave animation from top to bottom |
| `wave-bt` | Wave animation from bottom to top |
| `center-out` | Radiates from center outward |
| `spiral` | Spiral animation pattern |
| `corners` | Animate from corners to center |

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Run example
pnpm --filter examples dev

# Run tests
pnpm test
```

## Project Structure

```
pixel-loader/
├── packages/
│   ├── core/           # Vanilla web component
│   ├── react/          # React integration
│   ├── vue/            # Vue integration
│   ├── solid/          # SolidJS integration
│   └── svelte/         # Svelte integration
├── examples/           # React/Next.js example
└── docs/               # Documentation
```

## License

MIT

## Support

For issues and questions, please use the GitHub issues page.
