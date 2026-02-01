"use client";

import { PixelLoader } from "@pixel-loader/react";
import { useCallback, useState } from "react";
import { DynamicIsland } from "@/components/dynamic-island";
import type { LoaderPreset } from "@/components/preset-grid";
import PresetGrid from "@/components/preset-grid";

const PRESETS: readonly LoaderPreset[] = [
  {
    id: "wave-lr",
    name: "Wave Left → Right",
    description: "Horizontal flowing animation from left to right",
    config: {
      preset: "wave-lr",
      color: "#3b82f6",
      shadowBlur: 8,
      shadowColor: "#3b82f6",
    },
  },
  {
    id: "wave-rl",
    name: "Wave Right → Left",
    description: "Horizontal flowing animation from right to left",
    config: {
      preset: "wave-rl",
      color: "#06b6d4",
      shadowBlur: 8,
      shadowColor: "#06b6d4",
    },
  },
  {
    id: "wave-tb",
    name: "Wave Top → Bottom",
    description: "Vertical flowing animation from top to bottom",
    config: {
      preset: "wave-tb",
      color: "#8b5cf6",
      shadowBlur: 8,
      shadowColor: "#8b5cf6",
    },
  },
  {
    id: "wave-bt",
    name: "Wave Bottom → Top",
    description: "Vertical flowing animation from bottom to top",
    config: {
      preset: "wave-bt",
      color: "#ec4899",
      shadowBlur: 8,
      shadowColor: "#ec4899",
    },
  },
  {
    id: "diagonal",
    name: "Diagonal Flow",
    description: "Cascading animation from top-left to bottom-right",
    config: {
      preset: "diagonal",
      color: "#f97316",
      shadowBlur: 8,
      shadowColor: "#f97316",
    },
  },
  {
    id: "center-out",
    name: "Center Out",
    description: "Expanding animation from center to edges",
    config: {
      preset: "center-out",
      color: "#eab308",
      shadowBlur: 8,
      shadowColor: "#eab308",
    },
  },
  {
    id: "spiral",
    name: "Spiral",
    description: "Rotating spiral pattern from center outward",
    config: {
      preset: "spiral",
      color: "#22c55e",
      shadowBlur: 8,
      shadowColor: "#22c55e",
    },
  },
  {
    id: "corners",
    name: "Corners",
    description: "Four corners pulse inward simultaneously",
    config: {
      preset: "corners",
      color: "#ef4444",
      shadowBlur: 8,
      shadowColor: "#ef4444",
    },
  },
] as const;

const Page = () => {
  const [activePreset, setActivePreset] = useState(PRESETS[0]);
  const handleSelectPreset = useCallback((preset: LoaderPreset) => {
    setActivePreset(preset);
  }, []);
  return (
    <>
      <h1 className="font-semibold text-2xl text-neutral-950 md:text-3xl">
        pixel-loader
      </h1>

      <div className="mt-12 flex w-full flex-col items-center justify-center gap-8 rounded-xl border border-neutral-200 bg-white p-8">
        <DynamicIsland>
          <div className="flex size-3 items-center justify-center">
            <PixelLoader
              color={activePreset.config.color}
              preset={activePreset.config.preset}
              shadowBlur={activePreset.config.shadowBlur}
              shadowColor={activePreset.config.shadowColor}
            />
          </div>
        </DynamicIsland>

        <PresetGrid onSelectPreset={handleSelectPreset} presets={PRESETS} />
      </div>
    </>
  );
};

export default Page;
