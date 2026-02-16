<script lang="ts">
import "@pixel-loader/core";
import { afterUpdate, onMount } from "svelte";

// biome-ignore lint/style/useConst: Svelte requires export let for props
export let preset: string | undefined = undefined;
// biome-ignore lint/style/useConst: Svelte requires export let for props
export let delayPattern: number[] | undefined = undefined;
// biome-ignore lint/style/useConst: Svelte requires export let for props
export let size: number | undefined = undefined;
// biome-ignore lint/style/useConst: Svelte requires export let for props
export let color: string | undefined = undefined;
// biome-ignore lint/style/useConst: Svelte requires export let for props
export let borderRadius: number | undefined = undefined;
// biome-ignore lint/style/useConst: Svelte requires export let for props
export let isAnimating: boolean | undefined = undefined;

// biome-ignore lint/suspicious/noUnassignedVariables: assigned via Svelte bind:this
let ref: HTMLElement | undefined;

interface PixelLoaderElement {
  preset: string;
  delayPattern?: number[];
  size?: number;
  color: string;
  borderRadius: number;
  isAnimating: boolean;
}

function syncProperties() {
  if (!ref) {
    return;
  }
  const el = ref as unknown as PixelLoaderElement;
  if (preset !== undefined) {
    el.preset = preset;
  }
  if (size !== undefined) {
    el.size = size;
  }
  if (color !== undefined) {
    el.color = color;
  }
  if (borderRadius !== undefined) {
    el.borderRadius = borderRadius;
  }
  if (isAnimating !== undefined) {
    el.isAnimating = isAnimating;
  }
  if (delayPattern !== undefined) {
    el.delayPattern = delayPattern;
  }
}

onMount(syncProperties);
afterUpdate(syncProperties);
</script>

<pixel-loader bind:this={ref}></pixel-loader>
