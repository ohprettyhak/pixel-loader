"use client";

import { PixelLoader } from "@pixel-loader/react";
import { useCallback, useState } from "react";
import {
  AnimationSelector,
  type LoaderPreset,
} from "@/app/_components/animation-selector";
import { DynamicIsland } from "@/components/dynamic-island";

const PRESETS: readonly LoaderPreset[] = [
  {
    id: "wave-lr",
    name: "Wave Left → Right",
    description: "Horizontal flowing animation from left to right",
    color: "#3b82f6",
  },
  {
    id: "wave-rl",
    name: "Wave Right → Left",
    description: "Horizontal flowing animation from right to left",
    color: "#06b6d4",
  },
  {
    id: "wave-tb",
    name: "Wave Top → Bottom",
    description: "Vertical flowing animation from top to bottom",
    color: "#8b5cf6",
  },
  {
    id: "wave-bt",
    name: "Wave Bottom → Top",
    description: "Vertical flowing animation from bottom to top",
    color: "#ec4899",
  },
  {
    id: "diagonal",
    name: "Diagonal Flow",
    description: "Cascading animation from top-left to bottom-right",
    color: "#f97316",
  },
  {
    id: "center-out",
    name: "Center Out",
    description: "Expanding animation from center to edges",
    color: "#eab308",
  },
  {
    id: "spiral",
    name: "Spiral",
    description: "Rotating spiral pattern from center outward",
    color: "#22c55e",
  },
  {
    id: "corners",
    name: "Corners",
    description: "Four corners pulse inward simultaneously",
    color: "#ef4444",
  },
] as const;

export const LoaderDemo = () => {
  const [activePreset, setActivePreset] = useState(PRESETS[0]);
  const handleSelect = useCallback((preset: LoaderPreset) => {
    setActivePreset(preset);
  }, []);

  return (
    <>
      <div className="flex w-full flex-col items-center justify-center gap-8 rounded-xl border border-card-border bg-card-background p-8">
        <DynamicIsland>
          <div className="flex size-3 items-center justify-center">
            <PixelLoader
              color={activePreset.color}
              preset={activePreset.id as LoaderPreset["id"]}
            />
          </div>
          <p className="font-medium text-white text-xs">Ring</p>
        </DynamicIsland>
      </div>

      <AnimationSelector onSelectPreset={handleSelect} presets={PRESETS} />
    </>
  );
};
