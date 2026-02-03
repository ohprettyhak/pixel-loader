"use client";

import { useState } from "react";

interface CopyButtonProps {
  code: string;
}

export const CopyButton = ({ code }: CopyButtonProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy code:", error);
    }
  };

  return (
    <button
      className="cursor-pointer font-mono text-text-tertiary text-xs transition-colors hover:text-text-primary"
      onClick={handleCopy}
      type="button"
    >
      {isCopied ? "Copied!" : "Copy"}
    </button>
  );
};
