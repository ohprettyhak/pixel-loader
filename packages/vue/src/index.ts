import type { PresetName } from "@pixel-loader/core";

export type { PresetName, presets } from "@pixel-loader/core";

export interface PixelLoaderProps {
  preset?: PresetName;
  presetDelays?: string;
  presetDuration?: number;
  size?: number;
  color?: string;
  borderRadius?: number;
  isAnimating?: boolean;
}

export interface PixelLoaderElement extends HTMLElement {
  preset?: PresetName;
  presetDelays?: string;
  presetDuration?: number;
  size?: number;
  color?: string;
  borderRadius?: number;
  isAnimating?: boolean;
}
