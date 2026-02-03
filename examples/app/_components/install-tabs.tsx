"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const PACKAGE_MANAGERS = ["pnpm", "npm", "yarn"] as const;
type PackageManager = (typeof PACKAGE_MANAGERS)[number];

interface InstallTabsProps {
  codeBlocks: Record<PackageManager, ReactNode>;
}

export const InstallTabs = ({ codeBlocks }: InstallTabsProps) => {
  const [activeTab, setActiveTab] = useState<PackageManager>("pnpm");

  return (
    <div>
      <div className="mb-3 flex gap-1">
        {PACKAGE_MANAGERS.map((manager) => (
          <button
            className={twMerge(
              "cursor-pointer rounded-md px-2 py-1 font-medium font-mono text-xs transition-colors",
              activeTab === manager
                ? "bg-text-primary text-white"
                : "text-text-secondary hover:bg-neutral-100"
            )}
            key={manager}
            onClick={() => setActiveTab(manager)}
            type="button"
          >
            {manager}
          </button>
        ))}
      </div>
      {PACKAGE_MANAGERS.map((manager) => (
        <div
          className={activeTab === manager ? "block" : "hidden"}
          key={manager}
        >
          {codeBlocks[manager]}
        </div>
      ))}
    </div>
  );
};
