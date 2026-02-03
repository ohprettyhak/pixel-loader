import { CodeBlock } from "@/app/_components/code-block";
import { FrameworkProvider } from "@/app/_components/framework-provider";
import type { Framework } from "@/app/_components/framework-sidebar";
import { LoaderDemo } from "@/app/_components/loader-demo";

const INSTALL_COMMANDS = {
  react: {
    npm: "npm install @pixel-loader/react",
    pnpm: "pnpm add @pixel-loader/react",
    yarn: "yarn add @pixel-loader/react",
  },
  vue: {
    npm: "npm install @pixel-loader/vue",
    pnpm: "pnpm add @pixel-loader/vue",
    yarn: "yarn add @pixel-loader/vue",
  },
  solid: {
    npm: "npm install @pixel-loader/solid",
    pnpm: "pnpm add @pixel-loader/solid",
    yarn: "yarn add @pixel-loader/solid",
  },
  svelte: {
    npm: "npm install @pixel-loader/svelte",
    pnpm: "pnpm add @pixel-loader/svelte",
    yarn: "yarn add @pixel-loader/svelte",
  },
} as const;

const USAGE_CODE = {
  react: `import { PixelLoader } from "@pixel-loader/react";

export function MyComponent() {
  return (
    <PixelLoader
      preset="wave-lr"
      color="#3b82f6"
    />
  );
}`,
  vue: `<script setup lang="ts">
import { PixelLoader } from "@pixel-loader/vue";
</script>

<template>
  <PixelLoader
    preset="wave-lr"
    color="#3b82f6"
  />
</template>`,
  solid: `import "@pixel-loader/solid";

export function MyComponent() {
  return (
    <pixel-loader
      preset="wave-lr"
      color="#3b82f6"
    />
  );
}`,
  svelte: `<script lang="ts">
import { PixelLoader } from "@pixel-loader/svelte";
</script>

<PixelLoader
  preset="wave-lr"
  color="#3b82f6"
/>`,
};

const getLanguage = (fw: Framework): string => {
  switch (fw) {
    case "react":
    case "solid":
      return "tsx";
    case "vue":
      return "vue";
    case "svelte":
      return "svelte";
    default:
      return "tsx";
  }
};

export default async function Page() {
  // Pre-render all CodeBlocks for all frameworks (server-side)
  const frameworks: Framework[] = ["react", "vue", "solid", "svelte"];

  const installBlocks = Object.fromEntries(
    await Promise.all(
      frameworks.map(async (framework) => {
        const blocks = {
          npm: (
            <CodeBlock code={INSTALL_COMMANDS[framework].npm} language="bash" />
          ),
          pnpm: (
            <CodeBlock
              code={INSTALL_COMMANDS[framework].pnpm}
              language="bash"
            />
          ),
          yarn: (
            <CodeBlock
              code={INSTALL_COMMANDS[framework].yarn}
              language="bash"
            />
          ),
        };
        return [framework, blocks];
      })
    )
  ) as Record<Framework, Record<"npm" | "pnpm" | "yarn", React.ReactNode>>;

  const usageBlocks = Object.fromEntries(
    await Promise.all(
      frameworks.map(async (framework) => {
        const block = (
          <CodeBlock
            code={USAGE_CODE[framework]}
            key={framework}
            language={getLanguage(framework)}
          />
        );
        return [framework, block];
      })
    )
  ) as Record<Framework, React.ReactNode>;

  return (
    <>
      <h1 className="font-semibold font-serif text-text-primary text-xl md:text-2xl">
        pixel-loader
      </h1>
      <p className="mt-1 font-normal text-[15px] text-text-secondary">
        3x3 cell loading indicator
      </p>

      <section className="mt-12">
        <LoaderDemo />
      </section>

      <hr className="my-12 border-divider" />

      <FrameworkProvider
        installBlocks={installBlocks}
        usageBlocks={usageBlocks}
      />
    </>
  );
}
