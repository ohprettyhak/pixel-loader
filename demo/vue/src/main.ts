import { PixelLoader } from "@pixel-loader/vue";
import { createApp, h } from "vue";

const App = {
  setup() {
    return () =>
      h(
        "div",
        {
          style:
            "display: flex; align-items: center; justify-content: center; min-height: 100vh; flex-direction: column; gap: 2rem;",
        },
        [
          h("h1", "PixelLoader Vue Demo"),
          h(PixelLoader, { preset: "wave-lr", color: "#3b82f6", size: 48 }),
        ]
      );
  },
};

createApp(App).mount("#app");
