import type { PresetName } from "@pixel-loader/core";
import { presets } from "@pixel-loader/core";
import { defineComponent, h, type PropType } from "vue";

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

export const PixelLoader = defineComponent({
  name: "PixelLoader",
  props: {
    preset: String as PropType<PresetName>,
    presetDelays: String,
    presetDuration: Number,
    delayPattern: Array as PropType<number[]>,
    size: Number,
    color: String,
    borderRadius: Number,
    isAnimating: Boolean,
    shadowBlur: Number,
    shadowColor: String,
  },
  setup(props, { attrs }) {
    return () => h("pixel-loader", { ...props, ...attrs });
  },
});

export type { PresetName };
export { presets };
