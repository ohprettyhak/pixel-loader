<script lang="ts">
  import type { PresetName } from "@pixel-loader/core";

  export let preset: PresetName = "diagonal";
  export let presetDelays: string | undefined = undefined;
  export let presetDuration: number | undefined = undefined;
  export let delayPattern: number[] | undefined = undefined;
  export let size: number | undefined = undefined;
  export let color = "#3b82f6";
  export let borderRadius = 0;
  export let isAnimating = true;
  export let shadowBlur = 0;
  export let shadowColor = "";
</script>

<pixel-loader
  {preset}
  {presetDelays}
  {presetDuration}
  {delayPattern}
  {size}
  {color}
  {borderRadius}
  {isAnimating}
  {shadowBlur}
  {shadowColor}
></pixel-loader>
