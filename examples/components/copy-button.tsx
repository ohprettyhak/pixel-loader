"use client";

import { useState } from "react";

interface CopyButtonProps {
  code: string;
}

export function CopyButton({ code }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
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
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}
