"use client";

import { type PresetName, presets } from "@pixel-loader/core";
import { PixelLoader } from "@pixel-loader/react";
import { useState } from "react";

import "./globals.css";

export default function Home() {
  const [selectedPreset, setSelectedPreset] = useState<PresetName>("diagonal");
  const [isAnimating, setIsAnimating] = useState(true);
  const [shadowBlur, setShadowBlur] = useState(0);

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
            <PixelLoader
              isAnimating={isAnimating}
              preset={selectedPreset}
              shadowBlur={shadowBlur}
              size={66}
            />
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
            Shadow Controls
          </h2>
          <div className="space-y-4">
            <div>
              <label
                className="mb-2 block text-gray-300 text-sm"
                htmlFor="shadow-blur"
              >
                Shadow Blur: {shadowBlur}px
              </label>
              <input
                className="w-full rounded-lg bg-gray-700 px-4 py-2 text-white"
                id="shadow-blur"
                max={30}
                min={0}
                onChange={(e) => setShadowBlur(Number(e.target.value))}
                type="range"
                value={shadowBlur}
              />
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-gray-800 p-8">
          <h2 className="mb-4 font-semibold text-white text-xl">
            Shadow Effects Demo
          </h2>

          <div className="flex flex-wrap justify-center gap-8">
            <div className="rounded-lg bg-gray-700 p-4">
              <h3 className="mb-2 font-semibold text-sm text-white">
                Blue Glow (20px)
              </h3>
              <PixelLoader
                color="#3b82f6"
                preset="diagonal"
                shadowBlur={20}
                shadowColor="#3b82f6"
                size={66}
              />
            </div>

            <div className="rounded-lg bg-gray-700 p-4">
              <h3 className="mb-2 font-semibold text-sm text-white">
                Purple Glow (15px)
              </h3>
              <PixelLoader
                color="#8b5cf6"
                preset="wave-lr"
                shadowBlur={15}
                shadowColor="#8b5cf6"
                size={66}
              />
            </div>

            <div className="rounded-lg bg-gray-700 p-4">
              <h3 className="mb-2 font-semibold text-sm text-white">
                Green Glow (25px)
              </h3>
              <PixelLoader
                color="#10b981"
                preset="center-out"
                shadowBlur={25}
                shadowColor="#10b981"
                size={66}
              />
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-gray-800 p-8">
          <h2 className="mb-4 font-semibold text-white text-xl">
            Custom Delay Pattern
          </h2>
          <p className="mb-4 text-gray-300 text-sm">
            Use{" "}
            <code className="rounded bg-gray-700 px-2 py-1">delayPattern</code>{" "}
            prop to create custom animation patterns. Array of 9 numbers (one
            per cell).
          </p>

          <div className="flex flex-wrap justify-center gap-8">
            <div className="rounded-lg bg-gray-700 p-4">
              <h3 className="mb-2 font-semibold text-sm text-white">
                Checkerboard
              </h3>
              <PixelLoader
                color="#3b82f6"
                delayPattern={[0, 100, 0, 100, 0, 100, 0, 100, 0]}
                presetDuration={400}
                size={66}
              />
            </div>

            <div className="rounded-lg bg-gray-700 p-4">
              <h3 className="mb-2 font-semibold text-sm text-white">Random</h3>
              <PixelLoader
                color="#8b5cf6"
                delayPattern={[50, 200, 150, 0, 250, 100, 180, 30, 220]}
                presetDuration={500}
                size={66}
              />
            </div>

            <div className="rounded-lg bg-gray-700 p-4">
              <h3 className="mb-2 font-semibold text-sm text-white">
                All at once
              </h3>
              <PixelLoader
                color="#10b981"
                delayPattern={[0, 0, 0, 0, 0, 0, 0, 0, 0]}
                presetDuration={600}
                size={66}
              />
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-gray-800 p-8">
          <h2 className="mb-4 font-semibold text-white text-xl">
            Size Examples (using size prop)
          </h2>

          <div className="flex flex-wrap justify-center gap-8">
            <div className="rounded-lg bg-gray-700 p-4">
              <h3 className="mb-2 font-semibold text-sm text-white">
                Small (33px)
              </h3>
              <PixelLoader color="#3b82f6" preset="diagonal" size={33} />
            </div>

            <div className="rounded-lg bg-gray-700 p-4">
              <h3 className="mb-2 font-semibold text-sm text-white">
                Default (66px)
              </h3>
              <PixelLoader color="#8b5cf6" preset="wave-lr" size={66} />
            </div>

            <div className="rounded-lg bg-gray-700 p-4">
              <h3 className="mb-2 font-semibold text-sm text-white">
                Large (96px)
              </h3>
              <PixelLoader color="#10b981" preset="center-out" size={96} />
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-gray-800 p-8">
          <h2 className="mb-4 font-semibold text-white text-xl">
            Responsive Sizing (Tailwind Classes)
          </h2>
          <p className="mb-4 text-gray-300 text-sm">
            When <code className="rounded bg-gray-700 px-2 py-1">size</code>{" "}
            prop is omitted, you can control size with wrapper divs and Tailwind
            classes.
          </p>

          <div className="flex flex-wrap justify-center gap-8">
            <div className="rounded-lg bg-gray-700 p-4">
              <h3 className="mb-2 font-semibold text-sm text-white">
                Extra Small
              </h3>
              <div className="h-8 w-8">
                <PixelLoader color="#3b82f6" preset="diagonal" />
              </div>
            </div>

            <div className="rounded-lg bg-gray-700 p-4">
              <h3 className="mb-2 font-semibold text-sm text-white">Small</h3>
              <div className="h-12 w-12">
                <PixelLoader color="#8b5cf6" preset="wave-lr" />
              </div>
            </div>

            <div className="rounded-lg bg-gray-700 p-4">
              <h3 className="mb-2 font-semibold text-sm text-white">Medium</h3>
              <div className="h-16 w-16">
                <PixelLoader color="#10b981" preset="center-out" />
              </div>
            </div>

            <div className="rounded-lg bg-gray-700 p-4">
              <h3 className="mb-2 font-semibold text-sm text-white">
                Responsive (Mobile → Desktop)
              </h3>
              <div className="h-16 w-16 md:h-24 md:w-24 lg:h-32 lg:w-32">
                <PixelLoader color="#ec4899" preset="spiral" />
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-gray-800 p-8">
          <h2 className="mb-4 font-semibold text-white text-xl">
            Combined Examples
          </h2>

          <div className="flex flex-wrap justify-center gap-8">
            <div className="rounded-lg bg-gray-700 p-4">
              <h3 className="mb-2 font-semibold text-sm text-white">
                Small + Glow
              </h3>
              <div className="h-8 w-8">
                <PixelLoader
                  color="#f59e0b"
                  preset="diagonal"
                  shadowBlur={10}
                  shadowColor="#f59e0b"
                />
              </div>
            </div>

            <div className="rounded-lg bg-gray-700 p-4">
              <h3 className="mb-2 font-semibold text-sm text-white">
                Responsive + Glow
              </h3>
              <div className="h-12 w-12 md:h-20 md:w-20">
                <PixelLoader
                  color="#8b5cf6"
                  preset="wave-lr"
                  shadowBlur={15}
                  shadowColor="#8b5cf6"
                />
              </div>
            </div>

            <div className="rounded-lg bg-gray-700 p-4">
              <h3 className="mb-2 font-semibold text-sm text-white">
                Large + Strong Glow
              </h3>
              <PixelLoader
                color="#10b981"
                preset="corners"
                shadowBlur={30}
                shadowColor="#10b981"
                size={96}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
