import "@pixel-loader/core";
// biome-ignore lint/correctness/noUnusedImports: Required for declare module augmentation to resolve solid-js
import type { JSX } from "solid-js";

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

export interface PixelLoaderElement extends HTMLElement {
  preset?: string;
  delayPattern?: number[];
  size?: number;
  color?: string;
  borderRadius?: number;
  isAnimating?: boolean;
}

declare module "solid-js" {
  // biome-ignore lint/style/noNamespace: JSX module augmentation requires namespace
  namespace JSX {
    interface IntrinsicElements {
      "pixel-loader": PixelLoaderProps & JSX.HTMLAttributes<HTMLElement>;
    }
  }
}
