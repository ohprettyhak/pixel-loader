"use client";

import type { ReactNode } from "react";
import {
  type Framework,
  FrameworkSidebar,
  useFrameworkState,
} from "@/app/_components/framework-sidebar";
import { InstallTabs } from "@/app/_components/install-tabs";

interface FrameworkProviderProps {
  installBlocks: Record<Framework, Record<"npm" | "pnpm" | "yarn", ReactNode>>;
  usageBlocks: Record<Framework, ReactNode>;
}

export const FrameworkProvider = ({
  installBlocks,
  usageBlocks,
}: FrameworkProviderProps) => {
  const [activeFramework, setActiveFramework] = useFrameworkState();

  return (
    <div className="relative">
      <FrameworkSidebar
        activeFramework={activeFramework}
        onFrameworkChange={setActiveFramework}
      />

      <div className="w-full">
        <section id="installation">
          <a className="group" href={`#installation?type=${activeFramework}`}>
            <h2 className="w-fit font-semibold font-serif text-lg text-text-primary group-hover:underline">
              Installation
            </h2>
          </a>
          <p className="mt-2 text-sm text-text-secondary">
            Install the package using your preferred package manager.
          </p>
          <div className="mt-4">
            <InstallTabs codeBlocks={installBlocks[activeFramework]} />
          </div>
        </section>

        <hr className="my-12 border-divider" />

        <section id="usage">
          <a className="group" href={`#usage?type=${activeFramework}`}>
            <h2 className="w-fit font-semibold font-serif text-lg text-text-primary group-hover:underline">
              Usage
            </h2>
          </a>
          <p className="mt-2 text-sm text-text-secondary">
            Import and use the PixelLoader component in your application.
          </p>
          <div className="mt-4">{usageBlocks[activeFramework]}</div>
        </section>
      </div>
    </div>
  );
};
