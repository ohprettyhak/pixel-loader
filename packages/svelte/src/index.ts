import "@pixel-loader/core";

export interface PixelLoaderProps {
  preset?:
    | "wave-lr"
    | "wave-rl"
    | "wave-tb"
    | "wave-bt"
    | "diagonal"
    | "center-out"
    | "spiral"
    | "corners";
  delayPattern?: number[];
  size?: number;
  color?: string;
  borderRadius?: number;
  isAnimating?: boolean;
}

// Re-export the Svelte component
// When using bundlers with svelte support, they will resolve to the .svelte file via package.json exports
export { default as PixelLoader } from "./PixelLoader.svelte";
