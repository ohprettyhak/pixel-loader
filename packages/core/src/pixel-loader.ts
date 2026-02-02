import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

export interface CellState {
  opacity: number;
}

export interface Frame {
  cells: CellState[];
}

export type Frames = Frame[];

@customElement("pixel-loader")
export class PixelLoader extends LitElement {
  @property({ type: String, attribute: "preset" })
  preset = "diagonal";

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

  private readonly PRESET_MAP = {
    "wave-lr": { delays: "0,100,200,0,100,200,0,100,200", duration: 600 },
    "wave-rl": { delays: "200,100,0,200,100,0,200,100,0", duration: 600 },
    "wave-tb": { delays: "0,0,0,100,100,100,200,200,200", duration: 600 },
    "wave-bt": { delays: "200,200,200,100,100,100,0,0,0", duration: 600 },
    diagonal: { delays: "0,100,200,100,200,300,200,300,400", duration: 600 },
    "center-out": {
      delays: "200,100,200,100,0,100,200,100,200",
      duration: 600,
    },
    spiral: { delays: "0,100,200,500,600,300,400,500,400", duration: 600 },
    corners: { delays: "0,100,0,100,200,100,0,100,0", duration: 600 },
  } as const;

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

  render() {
    const presetConfig =
      this.PRESET_MAP[this.preset as keyof typeof this.PRESET_MAP] ??
      this.PRESET_MAP.diagonal;
    const delays =
      this.delayPattern ?? presetConfig.delays.split(",").map(Number);
    const duration = presetConfig.duration;
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
                --shadow-blur: 8px;
                --shadow-color: ${this.color};
              "
            ></div>
          `
        )}
      </div>
    `;
  }
}
