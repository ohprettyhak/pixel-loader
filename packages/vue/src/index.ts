import { defineComponent, h, type PropType } from "vue";

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
}

export const PixelLoader = defineComponent({
  name: "PixelLoader",
  props: {
    preset: String,
    delayPattern: Array as PropType<number[]>,
    size: Number,
    color: String,
    borderRadius: Number,
    isAnimating: Boolean,
  },
  setup(props, { attrs }) {
    return () => h("pixel-loader", { ...props, ...attrs });
  },
});
