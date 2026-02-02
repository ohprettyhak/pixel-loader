import { createComponent } from "@lit/react";
import type { Frames } from "@pixel-loader/core";
import { PixelLoader as PixelLoaderElement } from "@pixel-loader/core";
import React from "react";

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
  frames?: Frames;
  frameIndex?: number;
  isPlaying?: boolean;
}

export const PixelLoader = createComponent({
  tagName: "pixel-loader",
  elementClass: PixelLoaderElement,
  react: React,
});

export type { Frames };
