import "@pixel-loader/core";
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
    delayPattern: {
      type: Array as PropType<number[]>,
      default: undefined,
    },
    size: {
      type: Number,
      default: undefined,
    },
    color: {
      type: String,
      default: undefined,
    },
    borderRadius: {
      type: Number,
      default: undefined,
    },
    isAnimating: {
      type: Boolean,
      default: undefined,
    },
  },
  setup(props, { attrs }) {
    return () => {
      const ceProps: Record<string, unknown> = {};
      if (props.preset !== undefined) ceProps.preset = props.preset;
      if (props.size !== undefined) ceProps.size = props.size;
      if (props.color !== undefined) ceProps.color = props.color;
      if (props.borderRadius !== undefined)
        ceProps.borderRadius = props.borderRadius;
      if (props.isAnimating !== undefined)
        ceProps.isAnimating = props.isAnimating;
      if (props.delayPattern !== undefined)
        ceProps.delayPattern = props.delayPattern;
      return h("pixel-loader", { ...ceProps, ...attrs });
    };
  },
});
