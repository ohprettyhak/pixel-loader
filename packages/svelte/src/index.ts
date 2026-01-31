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
