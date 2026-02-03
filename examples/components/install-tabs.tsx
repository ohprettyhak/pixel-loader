"use client";

import { type ReactNode, useState } from "react";

const PACKAGE_MANAGERS = ["pnpm", "npm", "yarn"] as const;
type PackageManager = (typeof PACKAGE_MANAGERS)[number];

interface InstallTabsProps {
  codeBlocks: Record<PackageManager, ReactNode>;
}

export function InstallTabs({ codeBlocks }: InstallTabsProps) {
  const [activeTab, setActiveTab] = useState<PackageManager>("pnpm");

  return (
    <div>
      <div className="mb-3 flex gap-1">
        {PACKAGE_MANAGERS.map((pm) => (
          <button
            className={`cursor-pointer rounded-md px-2 py-0.5 font-mono text-xs transition-colors ${
              activeTab === pm
                ? "bg-text-primary text-white"
                : "text-text-secondary hover:bg-neutral-100"
            }`}
            key={pm}
            onClick={() => setActiveTab(pm)}
            type="button"
          >
            {pm}
          </button>
        ))}
      </div>
      {PACKAGE_MANAGERS.map((pm) => (
        <div className={activeTab === pm ? "block" : "hidden"} key={pm}>
          {codeBlocks[pm]}
        </div>
      ))}
    </div>
  );
}
