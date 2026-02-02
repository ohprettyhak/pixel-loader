import type { JSX } from "solid-js";
import type { PixelLoaderProps } from "./index";

export const PixelLoader = (props: PixelLoaderProps) => {
  const { size, color, borderRadius, isAnimating, delayPattern, preset } =
    props;

  const attributes: JSX.IntrinsicElements["pixel-loader"] = {
    preset,
    size,
    color,
    "border-radius": borderRadius,
    "is-animating": isAnimating,
    "delay-pattern": delayPattern ? JSON.stringify(delayPattern) : undefined,
  } as JSX.IntrinsicElements["pixel-loader"];

  return <pixel-loader {...attributes} />;
};
