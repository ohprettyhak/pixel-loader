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
export let color = "#3b82f6";
// biome-ignore lint/style/useConst: Svelte requires export let for props
export let borderRadius = 0;
// biome-ignore lint/style/useConst: Svelte requires export let for props
export let isAnimating = true;

let ref: HTMLElement | undefined;

function syncProperties() {
  if (!ref) return;
  const el = ref as unknown as {
    borderRadius: number;
    delayPattern?: number[];
  };
  el.borderRadius = borderRadius;
  if (delayPattern !== undefined) el.delayPattern = delayPattern;
}

onMount(syncProperties);
afterUpdate(syncProperties);
</script>

<pixel-loader
  bind:this={ref}
  {preset}
  {size}
  {color}
  is-animating={isAnimating}
></pixel-loader>
