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
      "pixel-loader": PixelLoaderProps;
    }
  }
}

export { PixelLoader } from "./component";
