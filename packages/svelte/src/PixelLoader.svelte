<script lang="ts">
import type { PresetName } from "@pixel-loader/core";

export const preset: PresetName = "diagonal";
export const presetDelays: string | undefined = undefined;
export const presetDuration: number | undefined = undefined;
export const delayPattern: number[] | undefined = undefined;
export const size: number | undefined = undefined;
export const color = "#3b82f6";
export const borderRadius = 0;
export const isAnimating = true;
export const shadowBlur = 0;
export const shadowColor = "";
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
