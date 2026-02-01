import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface DynamicIslandProps extends ComponentProps<"div"> {}

export const DynamicIsland = ({ className, ...props }: DynamicIslandProps) => {
  return (
    <div
      className={twMerge(
        "flex h-7 w-32 items-center justify-between rounded-full bg-black px-2.5",
        className
      )}
      {...props}
    />
  );
};
