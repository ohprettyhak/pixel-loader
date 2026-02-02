import type { SvelteComponent } from "svelte";

export interface PixelLoaderProps {
  delayPattern?: number[];
  size?: number;
  color?: string;
  borderRadius?: number;
  isAnimating?: boolean;
  preset?:
    | "wave-lr"
    | "wave-rl"
    | "wave-tb"
    | "wave-bt"
    | "diagonal"
    | "center-out"
    | "spiral"
    | "corners";
}

export default class PixelLoader extends SvelteComponent<PixelLoaderProps> {
  $$prop_def: PixelLoaderProps;
  $$events_def: {};
  $$slot_def: {};
}
