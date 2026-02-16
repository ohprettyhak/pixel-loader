import "@pixel-loader/core";
import { createEffect } from "solid-js";
import type { PixelLoaderElement, PixelLoaderProps } from "./index";

export const PixelLoader = (props: PixelLoaderProps) => {
  let ref: PixelLoaderElement | undefined;

  createEffect(() => {
    if (!ref) {
      return;
    }
    if (props.preset !== undefined) {
      ref.preset = props.preset;
    }
    if (props.size !== undefined) {
      ref.size = props.size;
    }
    if (props.color !== undefined) {
      ref.color = props.color;
    }
    if (props.borderRadius !== undefined) {
      ref.borderRadius = props.borderRadius;
    }
    if (props.isAnimating !== undefined) {
      ref.isAnimating = props.isAnimating;
    }
    if (props.delayPattern !== undefined) {
      ref.delayPattern = props.delayPattern;
    }
  });

  return (
    <pixel-loader
      ref={(el) => {
        ref = el as unknown as PixelLoaderElement;
      }}
    />
  );
};
