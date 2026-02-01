import type { PresetName } from "@pixel-loader/react";
import type { ComponentProps } from "react";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge";

interface LoaderPreset {
  id: PresetName;
  name: string;
  description: string;
  config: {
    preset: PresetName;
    color: string;
    shadowBlur: number;
    shadowColor: string;
  };
}

interface PresetGridProps extends ComponentProps<"div"> {
  presets: readonly LoaderPreset[];
  onSelectPreset: (preset: LoaderPreset) => void;
}

const PresetGrid = ({
  presets,
  onSelectPreset,
  className,
  ...props
}: PresetGridProps) => {
  const handleSelectPreset = (preset: LoaderPreset) => {
    toast.success("Preset Selected");
    onSelectPreset(preset);
  };

  return (
    <div
      className={twMerge("grid grid-cols-2 gap-3 sm:grid-cols-4", className)}
      {...props}
    >
      {presets.map((preset) => (
        <button
          className={twMerge(
            "flex cursor-pointer flex-col items-center rounded-[10px] border border-neutral-200 bg-white px-1.5 py-0.5 text-sm transition-all duration-200",
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
  );
};
export default PresetGrid;

export type { LoaderPreset };
