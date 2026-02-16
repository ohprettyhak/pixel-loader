"use client";

import {
  Sandpack,
  type SandpackPredefinedTemplate,
} from "@codesandbox/sandpack-react";
import type { Framework } from "./framework-sidebar";

interface SandpackDemoProps {
  framework: Framework;
}

const SANDPACK_CONFIG: Record<
  Framework,
  {
    template: SandpackPredefinedTemplate;
    files: Record<string, string>;
    dependencies: Record<string, string>;
  }
> = {
  react: {
    template: "react-ts",
    files: {
      "/App.tsx": `import { PixelLoader } from "@pixel-loader/react";

export default function App() {
  return (
    <div style={{ padding: 40, fontFamily: "sans-serif" }}>
      <h1>React Demo</h1>
      <PixelLoader preset="wave-lr" color="#3b82f6" size={48} />
    </div>
  );
}`,
    },
    dependencies: {
      "@pixel-loader/react": "^0.0.1",
    },
  },
  vue: {
    template: "vite-vue-ts",
    files: {
      "/src/App.vue": `<script setup lang="ts">
import { PixelLoader } from "@pixel-loader/vue";
</script>

<template>
  <div style="padding: 40px; font-family: sans-serif">
    <h1>Vue Demo</h1>
    <PixelLoader preset="wave-lr" color="#3b82f6" :size="48" />
  </div>
</template>`,
      "/vite.config.ts": `import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag === 'pixel-loader'
        }
      }
    })
  ]
})`,
    },
    dependencies: {
      "@pixel-loader/vue": "^0.0.1",
    },
  },
  solid: {
    template: "solid",
    files: {
      "/App.tsx": `import { PixelLoader } from "@pixel-loader/solid";

export default function App() {
  return (
    <div style={{ padding: "40px", "font-family": "sans-serif" }}>
      <h1>Solid Demo</h1>
      <PixelLoader preset="wave-lr" color="#3b82f6" size={48} />
    </div>
  );
}`,
    },
    dependencies: {
      "@pixel-loader/solid": "^0.0.1",
      "solid-js": "^1.9.0",
    },
  },
  svelte: {
    template: "vite-svelte-ts",
    files: {
      "/src/App.svelte": `<script>
  import { PixelLoader } from "@pixel-loader/svelte";
</script>

<div style="padding: 40px; font-family: sans-serif">
  <h1>Svelte Demo</h1>
  <PixelLoader preset="wave-lr" color="#3b82f6" size={48} />
</div>`,
    },
    dependencies: {
      "@pixel-loader/svelte": "^0.0.1",
      svelte: "^4.2.0",
    },
  },
};

export const SandpackDemo = ({ framework }: SandpackDemoProps) => {
  const config = SANDPACK_CONFIG[framework];

  return (
    <Sandpack
      customSetup={{
        dependencies: config.dependencies,
      }}
      files={config.files}
      options={{
        showNavigator: false,
        showTabs: true,
        showLineNumbers: true,
        editorHeight: 350,
      }}
      template={config.template}
      theme="dark"
    />
  );
};
