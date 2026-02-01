import { createComponent } from "@lit/react";
import type { PresetName } from "@pixel-loader/core";
import { PixelLoader as PixelLoaderElement, presets } from "@pixel-loader/core";
import React from "react";

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

export const PixelLoader = createComponent({
  tagName: "pixel-loader",
  elementClass: PixelLoaderElement,
  react: React,
});

export type { PresetName };
export { presets };
