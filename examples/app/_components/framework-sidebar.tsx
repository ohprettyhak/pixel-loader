"use client";

import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

const FRAMEWORKS = ["react", "vue", "solid", "svelte"] as const;
export type Framework = (typeof FRAMEWORKS)[number];

const FRAMEWORK_DISPLAY_NAMES: Record<Framework, string> = {
  react: "React",
  vue: "Vue",
  solid: "Solid",
  svelte: "Svelte",
};

interface FrameworkSidebarProps {
  activeFramework: Framework;
  onFrameworkChange: (framework: Framework) => void;
}

export const FrameworkSidebar = ({
  activeFramework,
  onFrameworkChange,
}: FrameworkSidebarProps) => {
  const isActive = (framework: Framework) => activeFramework === framework;

  return (
    <>
      {/* Mobile/Tablet: Horizontal tabs */}
      <div className="flex gap-1 overflow-x-auto pb-8 lg:hidden">
        {FRAMEWORKS.map((framework) => (
          <button
            className={twMerge(
              "cursor-pointer rounded-md px-3 py-1.5 font-medium font-mono text-xs transition-colors",
              isActive(framework)
                ? "bg-text-primary text-white"
                : "text-text-secondary hover:bg-neutral-100"
            )}
            key={framework}
            onClick={() => onFrameworkChange(framework)}
            type="button"
          >
            {FRAMEWORK_DISPLAY_NAMES[framework]}
          </button>
        ))}
      </div>

      {/* Desktop: Floating sidebar to the left of content */}
      <aside className="absolute top-0 left-0 hidden -translate-x-full pr-12 lg:block">
        <nav className="sticky top-24 flex flex-col gap-1">
          {FRAMEWORKS.map((framework) => (
            <button
              className={twMerge(
                "cursor-pointer rounded-md px-3 py-1.5 text-left font-medium font-mono text-xs transition-colors",
                isActive(framework)
                  ? "bg-text-primary text-white"
                  : "text-text-secondary hover:bg-neutral-100"
              )}
              key={framework}
              onClick={() => onFrameworkChange(framework)}
              type="button"
            >
              {FRAMEWORK_DISPLAY_NAMES[framework]}
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
};

export const useFrameworkState = (): [
  Framework,
  (framework: Framework) => void,
] => {
  const [framework, setFramework] = useState<Framework>("react");

  useEffect(() => {
    const syncFromUrl = () => {
      const params = new URLSearchParams(window.location.hash.split("?")[1]);
      const type = params.get("type");
      if (type && FRAMEWORKS.includes(type as Framework)) {
        setFramework(type as Framework);
      }
    };

    syncFromUrl();
    window.addEventListener("hashchange", syncFromUrl);
    return () => window.removeEventListener("hashchange", syncFromUrl);
  }, []);

  const updateFramework = (newFramework: Framework) => {
    setFramework(newFramework);
    const currentHash = window.location.hash.split("?")[0];
    window.history.replaceState(
      null,
      "",
      `${currentHash}?type=${newFramework}`
    );
  };

  return [framework, updateFramework];
};
