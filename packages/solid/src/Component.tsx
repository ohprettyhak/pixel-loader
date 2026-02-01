import type { JSX } from "solid-js";
import type { PixelLoaderProps } from "./index";

export function PixelLoader(props: PixelLoaderProps) {
  const {
    preset,
    size,
    color,
    borderRadius,
    isAnimating,
    shadowBlur,
    shadowColor,
    presetDuration,
    delayPattern,
  } = props;

  const attributes: JSX.IntrinsicElements["pixel-loader"] = {
    preset,
    size,
    color,
    "border-radius": borderRadius,
    "is-animating": isAnimating,
    "shadow-blur": shadowBlur,
    "shadow-color": shadowColor,
    "preset-duration": presetDuration,
    "delay-pattern": delayPattern ? JSON.stringify(delayPattern) : undefined,
  } as JSX.IntrinsicElements["pixel-loader"];

  return <pixel-loader {...attributes} />;
}
