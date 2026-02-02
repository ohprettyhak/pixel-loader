import type { ComponentProps } from "react";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge";

interface LoaderPreset {
  id: string;
  name: string;
  description: string;
  color: string;
}

interface AnimationSelectorProps extends ComponentProps<"div"> {
  presets: readonly LoaderPreset[];
  onSelectPreset: (preset: LoaderPreset) => void;
}

const AnimationSelector = ({
  presets,
  onSelectPreset,
  className,
  ...props
}: AnimationSelectorProps) => {
  const handleSelectPreset = (preset: LoaderPreset) => {
    toast.success(`\`${preset.name}\` Selected`);
    onSelectPreset(preset);
  };

  return (
    <div
      className={twMerge(
        "scrollbar-hide mt-8 flex w-full items-center gap-2 overflow-x-auto pb-4",
        className
      )}
      {...props}
    >
      <div className="flex w-max items-center gap-2">
        {presets.map((preset) => (
          <button
            className={twMerge(
              "flex w-fit shrink-0 cursor-pointer flex-col items-center rounded-lg border border-neutral-200 bg-white px-2 py-0.5 text-[13px] shadow-[0_1px_0_rgba(0,0,0,0.05)] transition-all duration-200",
              "hover:bg-neutral-50 active:scale-[0.98] active:bg-neutral-100"
            )}
            key={preset.id}
            onClick={() => handleSelectPreset(preset)}
            type="button"
          >
            {preset.id}
          </button>
        ))}
      </div>
    </div>
  );
};
export default AnimationSelector;

export type { LoaderPreset };
