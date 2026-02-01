import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

export type PresetName =
  | "wave-lr"
  | "wave-rl"
  | "wave-tb"
  | "wave-bt"
  | "diagonal"
  | "center-out"
  | "corners"
  | "spiral";

export interface Preset {
  name: PresetName;
  delays: number[];
  duration: number;
}

export const presets: Record<PresetName, Preset> = {
  "wave-lr": {
    name: "wave-lr",
    delays: [0, 100, 200, 0, 100, 200, 0, 100, 200],
    duration: 600,
  },
  "wave-rl": {
    name: "wave-rl",
    delays: [200, 100, 0, 200, 100, 0, 200, 100, 0],
    duration: 600,
  },
  "wave-tb": {
    name: "wave-tb",
    delays: [0, 0, 0, 100, 100, 100, 200, 200, 200],
    duration: 600,
  },
  "wave-bt": {
    name: "wave-bt",
    delays: [200, 200, 200, 100, 100, 100, 0, 0, 0],
    duration: 600,
  },
  diagonal: {
    name: "diagonal",
    delays: [0, 100, 200, 100, 200, 300, 200, 300, 400],
    duration: 600,
  },
  "center-out": {
    name: "center-out",
    delays: [200, 100, 200, 100, 0, 100, 200, 100, 200],
    duration: 600,
  },
  corners: {
    name: "corners",
    delays: [0, 100, 0, 100, 200, 100, 0, 100, 0],
    duration: 600,
  },
  spiral: {
    name: "spiral",
    delays: [0, 100, 200, 500, 600, 300, 400, 500, 400],
    duration: 600,
  },
};

@customElement("pixel-loader")
export class PixelLoader extends LitElement {
  @property({ type: String })
  preset: PresetName = "diagonal";

  @property({ type: String, attribute: "preset-delays" })
  presetDelays: string = presets.diagonal.delays.join(",");

  @property({ type: Number, attribute: "preset-duration" })
  presetDuration: number = presets.diagonal.duration;

  @property({ type: Array, attribute: false })
  delayPattern?: number[];

  @property({ type: Number })
  size?: number;

  @property({ type: String })
  color = "#3b82f6";

  @property({ type: Number })
  borderRadius = 0;

  @property({ type: Boolean, attribute: "is-animating" })
  isAnimating = true;

  @property({ type: Number })
  shadowBlur = 0;

  @property({ type: String })
  shadowColor = "";

  static styles = css`
    :host {
      display: block;
      width: 100%;
      height: 100%;
    }

    .loader {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 0;
      width: 100%;
      height: 100%;
      padding: calc(var(--shadow-blur) * 0.5);
      box-sizing: border-box;
    }

    .cell {
      position: relative;
    }

    .cell::before {
      content: "";
      position: absolute;
      inset: -100%;
      background: radial-gradient(
        circle at center,
        var(--shadow-color) 0%,
        transparent 70%
      );
      filter: blur(calc(var(--shadow-blur) * 0.5));
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
      z-index: 0;
      border-radius: inherit;
      pointer-events: none;
    }

    .cell::after {
      content: "";
      position: absolute;
      inset: 0;
      background-color: var(--cell-color);
      border-radius: var(--cell-radius);
      z-index: 1;
    }

    @keyframes animate {
      0%, 100% {
        opacity: 0.2;
      }
      50% {
        opacity: 1;
      }
    }

    @keyframes animate-glow {
      0%, 100% {
        opacity: 0.05;
      }
      50% {
        opacity: 0.15;
      }
    }

    .cell.animating::before {
      animation: animate-glow var(--duration) ease-in-out infinite;
      animation-delay: var(--delay);
    }

    .cell.animating::after {
      animation: animate var(--duration) ease-in-out infinite;
      animation-delay: var(--delay);
    }
  `;

  protected willUpdate(changedProperties: Map<string | symbol, unknown>) {
    if (changedProperties.has("preset")) {
      const preset = presets[this.preset];
      if (preset) {
        this.presetDelays = preset.delays.join(",");
        this.presetDuration = preset.duration;
      }
    }
    super.willUpdate(changedProperties);
  }

  render() {
    const delays =
      this.delayPattern ?? this.presetDelays.split(",").map(Number);
    const duration = this.presetDuration;
    const loaderStyle = this.size
      ? `width: ${this.size}px; height: ${this.size}px;`
      : "";

    return html`
      <div class="loader" style="${loaderStyle}">
        ${Array.from({ length: 9 }).map(
          (_, index) => html`
            <div
              class="cell ${this.isAnimating ? "animating" : ""}"
              style="
                --cell-color: ${this.color};
                --cell-radius: ${this.borderRadius}px;
                --delay: ${delays[index % delays.length]}ms;
                --duration: ${duration}ms;
                --shadow-blur: ${this.shadowBlur}px;
                --shadow-color: ${this.shadowColor || this.color};
                --glow-opacity: ${this.shadowBlur > 0 ? 0.4 : 0};
              "
            ></div>
          `
        )}
      </div>
    `;
  }
}
