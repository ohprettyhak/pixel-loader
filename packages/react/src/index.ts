import { createComponent } from "@lit/react";
import type { PresetName } from "@pixel-loader/core";
import { PixelLoader as PixelLoaderElement } from "@pixel-loader/core";
import React from "react";

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

export const PixelLoader = createComponent({
  tagName: "pixel-loader",
  elementClass: PixelLoaderElement,
  react: React,
});
