import type { PresetName } from "@pixel-loader/core";

export type { PresetName, presets } from "@pixel-loader/core";

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

export interface PixelLoaderElement extends HTMLElement {
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

declare global {
  interface JSX {
    IntrinsicElements: {
      "pixel-loader": PixelLoaderElement;
    };
  }
}
