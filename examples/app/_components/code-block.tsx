import { codeToHtml } from "shiki";
import { CopyButton } from "@/app/_components/copy-button";

interface CodeBlockProps {
  code: string;
  language: string;
}

export async function CodeBlock({ code, language }: CodeBlockProps) {
  const html = await codeToHtml(code, {
    lang: language,
    theme: "github-light",
  });

  return (
    <div className="group relative overflow-hidden rounded-lg border border-card-border bg-card-background">
      <div className="flex items-center justify-between border-divider border-b px-4 py-2">
        <span className="font-medium font-mono text-text-tertiary text-xs">
          {language}
        </span>
        <CopyButton code={code} />
      </div>
      <div
        className="[&_pre]:!m-0 [&_pre]:!bg-transparent [&_pre]:!p-0 overflow-x-auto p-4 font-mono text-xs leading-relaxed"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: shiki generates safe HTML from code
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
