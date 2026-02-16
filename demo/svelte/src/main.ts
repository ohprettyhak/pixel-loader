import { PixelLoader } from "@pixel-loader/svelte";
import { mount } from "svelte";

const app = mount(PixelLoader, {
  target: document.getElementById("app") ?? document.body,
  props: {
    preset: "wave-lr",
    color: "#3b82f6",
    size: 48,
  },
});

export default app;
