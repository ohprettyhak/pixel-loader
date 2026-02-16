import { PixelLoader } from "@pixel-loader/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

function App() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      <h1>PixelLoader React Demo</h1>
      <PixelLoader color="#3b82f6" preset="wave-lr" size={48} />
    </div>
  );
}

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
