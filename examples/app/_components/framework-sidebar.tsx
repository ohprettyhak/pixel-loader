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
  onFrameworkChange: (framework: Framework) => void;
  activeFramework: Framework;
}

export function FrameworkSidebar({
  onFrameworkChange,
  activeFramework,
}: FrameworkSidebarProps) {
  return (
    <>
      {/* Mobile/Tablet: Horizontal tabs */}
      <div className="flex gap-1 overflow-x-auto pb-8 lg:hidden">
        {FRAMEWORKS.map((framework) => (
          <button
            className={twMerge(
              "cursor-pointer rounded-md px-3 py-1.5 font-medium font-mono text-xs transition-colors",
              activeFramework === framework
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
                activeFramework === framework
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
}

export function useFrameworkState(): [
  Framework,
  (framework: Framework) => void,
] {
  const [framework, setFramework] = useState<Framework>("react");

  useEffect(() => {
    const updateFromURL = () => {
      const params = new URLSearchParams(window.location.hash.split("?")[1]);
      const type = params.get("type");
      if (type && FRAMEWORKS.includes(type as Framework)) {
        setFramework(type as Framework);
      }
    };

    updateFromURL();

    const handleHashChange = () => {
      updateFromURL();
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const updateFramework = (newFramework: Framework) => {
    setFramework(newFramework);

    const currentHash = window.location.hash.split("?")[0];
    const newURL = `${currentHash}?type=${newFramework}`;
    window.history.replaceState(null, "", newURL);
  };

  return [framework, updateFramework];
}
