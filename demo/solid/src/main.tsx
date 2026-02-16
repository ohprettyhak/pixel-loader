import { render } from "solid-js/web";
import "@pixel-loader/core";

function App() {
  return (
    <div
      style={{
        display: "flex",
        "align-items": "center",
        "justify-content": "center",
        "min-height": "100vh",
        "flex-direction": "column",
        gap: "2rem",
      }}
    >
      <h1>PixelLoader Solid Demo</h1>
      <pixel-loader color="#3b82f6" preset="wave-lr" size="48" />
    </div>
  );
}

const rootElement = document.getElementById("root");
if (rootElement) {
  render(() => <App />, rootElement);
}
