"use client";

import { type PresetName, presets } from "@pixel-loader/core";
import { PixelLoader } from "@pixel-loader/react";
import { useState } from "react";

import "./globals.css";

export default function Home() {
  const [selectedPreset, setSelectedPreset] = useState<PresetName>("diagonal");
  const [isAnimating, setIsAnimating] = useState(true);
  const [isAnimating2, _setIsAnimating2] = useState(true);

  const preset = presets[selectedPreset];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-gray-900 p-8">
      <h1 className="mb-4 font-bold text-4xl text-white">
        Pixel Loader Examples
      </h1>

      <div className="flex flex-col items-center gap-4">
        <div className="rounded-lg bg-gray-800 p-8">
          <h2 className="mb-4 font-semibold text-white text-xl">
            Preset: {preset.name}
          </h2>

          <div className="mb-6 flex justify-center">
            <PixelLoader isAnimating={isAnimating} preset={selectedPreset} />
          </div>

          <button
            className="rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
            onClick={() => setIsAnimating(!isAnimating)}
            type="button"
          >
            {isAnimating ? "일시정지" : "재생"}
          </button>
        </div>

        <div className="rounded-lg bg-gray-800 p-8">
          <h2 className="mb-4 font-semibold text-white text-xl">All Presets</h2>
          <div className="flex flex-wrap gap-2">
            {(Object.keys(presets) as PresetName[]).map((presetName) => (
              <button
                className={`rounded-lg px-4 py-2 transition-colors ${
                  selectedPreset === presetName
                    ? "bg-blue-600 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
                key={presetName}
                onClick={() => setSelectedPreset(presetName)}
                type="button"
              >
                {presetName}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-lg bg-gray-800 p-8">
          <h2 className="mb-4 font-semibold text-white text-xl">
            Current Preset Details
          </h2>
          <div className="space-y-2 text-gray-300">
            <p>
              <span className="font-semibold">Name:</span> {preset.name}
            </p>
            <p>
              <span className="font-semibold">Duration:</span> {preset.duration}
              ms
            </p>
            <p>
              <span className="font-semibold">Delays:</span>{" "}
              {preset.delays.join(", ")}ms
            </p>
          </div>
        </div>

        <div className="rounded-lg bg-gray-800 p-8">
          <h2 className="mb-4 font-semibold text-white text-xl">
            Multiple Loaders
          </h2>

          <div className="flex flex-wrap justify-center gap-8">
            <div className="rounded-lg bg-gray-700 p-4">
              <h3 className="mb-2 font-semibold text-sm text-white">
                Wave Left to Right
              </h3>
              <PixelLoader isAnimating={isAnimating2} preset="wave-lr" />
            </div>

            <div className="rounded-lg bg-gray-700 p-4">
              <h3 className="mb-2 font-semibold text-sm text-white">
                Center Out
              </h3>
              <PixelLoader isAnimating={isAnimating2} preset="center-out" />
            </div>

            <div className="rounded-lg bg-gray-700 p-4">
              <h3 className="mb-2 font-semibold text-sm text-white">Spiral</h3>
              <PixelLoader isAnimating={isAnimating2} preset="spiral" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
