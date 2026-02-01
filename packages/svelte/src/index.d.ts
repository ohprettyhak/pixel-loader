import type { SvelteComponent } from "svelte";
import type { PresetName } from "@pixel-loader/core";

export interface PixelLoaderProps {
  preset?: PresetName;
  presetDelays?: string;
  presetDuration?: number;
  delayPattern?: number[];
  size?: number;
  color?: string;
  borderRadius?: number;
  isAnimating?: boolean;
  shadowBlur?: number;
  shadowColor?: string;
}

export default class PixelLoader extends SvelteComponent<PixelLoaderProps> {
  $$prop_def: PixelLoaderProps;
  $$events_def: {};
  $$slot_def: {};
}

export type { PresetName };
export { presets } from "@pixel-loader/core";
