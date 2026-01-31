declare global {
  interface HTMLElementTagNameMap {
    "pixel-loader": typeof import("./pixel-loader.js").PixelLoader;
  }
}
