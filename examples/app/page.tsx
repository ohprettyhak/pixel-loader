"use client";

import { PixelLoader } from "@pixel-loader/react";
import { DynamicIsland } from "@/components/dynamic-island";

const Page = () => {
  return (
    <>
      <h1 className="font-semibold text-2xl text-neutral-950 md:text-3xl">
        pixel-loader
      </h1>

      <div className="mt-12 flex w-full items-center justify-center rounded-xl border border-neutral-200 p-10">
        <DynamicIsland>
          <div className="flex size-3 items-center justify-center">
            <PixelLoader preset="wave-lr" shadowBlur={0} />
          </div>
        </DynamicIsland>
      </div>
    </>
  );
};

export default Page;
