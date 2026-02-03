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

export function FrameworkProvider({
  installBlocks,
  usageBlocks,
}: FrameworkProviderProps) {
  const [framework, setFramework] = useFrameworkState();

  return (
    <div className="relative">
      <FrameworkSidebar
        activeFramework={framework}
        onFrameworkChange={setFramework}
      />

      <div className="w-full">
        <section id="installation">
          <a className="group" href={`#installation?type=${framework}`}>
            <h2 className="font-semibold font-serif text-lg text-text-primary group-hover:underline">
              Installation
            </h2>
          </a>
          <p className="mt-2 text-sm text-text-secondary">
            Install the package using your preferred package manager.
          </p>
          <div className="mt-4">
            <InstallTabs codeBlocks={installBlocks[framework]} />
          </div>
        </section>

        <hr className="my-12 border-divider" />

        <section id="usage">
          <a className="group" href={`#usage?type=${framework}`}>
            <h2 className="font-semibold font-serif text-lg text-text-primary group-hover:underline">
              Usage
            </h2>
          </a>
          <p className="mt-2 text-sm text-text-secondary">
            Import and use the PixelLoader component in your application.
          </p>
          <div className="mt-4">{usageBlocks[framework]}</div>
        </section>
      </div>
    </div>
  );
}
