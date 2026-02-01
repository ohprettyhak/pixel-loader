"use client";

import { PixelLoader } from "@pixel-loader/react";
import { twMerge } from "tailwind-merge";
import { DynamicIsland } from "@/components/dynamic-island";

const Page = () => {
  return (
    <>
      <h1 className="font-semibold text-2xl text-neutral-950 md:text-3xl">
        pixel-loader
      </h1>

      <div className="mt-12 flex w-full flex-col items-center justify-center gap-10 rounded-xl border border-neutral-200 bg-white p-10">
        <DynamicIsland>
          <div className="flex size-3 items-center justify-center">
            <PixelLoader preset="wave-lr" shadowBlur={0} />
          </div>
        </DynamicIsland>

        <button
          className={twMerge(
            "flex cursor-pointer items-center justify-center rounded-xl border border-neutral-100 bg-neutral-50 px-2 transition duration-150",
            "hover:bg-neutral-100"
          )}
        >
          a
        </button>
      </div>
    </>
  );
};

export default Page;
