import { CodeBlock } from "@/components/code-block";
import { InstallTabs } from "@/components/install-tabs";
import { LoaderDemo } from "@/components/loader-demo";

const INSTALL_COMMANDS = {
  npm: "npm install @pixel-loader/react",
  pnpm: "pnpm add @pixel-loader/react",
  yarn: "yarn add @pixel-loader/react",
} as const;

const USAGE_CODE = `import { PixelLoader } from "@pixel-loader/react";

export function MyComponent() {
  return (
    <PixelLoader
      preset="wave-lr"
      color="#3b82f6"
    />
  );
}`;

export default async function Page() {
  const installCodeBlocks = {
    npm: <CodeBlock code={INSTALL_COMMANDS.npm} language="bash" />,
    pnpm: <CodeBlock code={INSTALL_COMMANDS.pnpm} language="bash" />,
    yarn: <CodeBlock code={INSTALL_COMMANDS.yarn} language="bash" />,
  };

  return (
    <>
      <h1 className="font-semibold font-serif text-text-primary text-xl md:text-2xl">
        pixel-loader
      </h1>
      <p className="mt-1 font-normal text-[15px] text-text-secondary">
        3x3 cell loading indicator
      </p>

      {/* Demo Section */}
      <section className="mt-12">
        <LoaderDemo />
      </section>

      {/* Divider */}
      <hr className="my-12 border-divider" />

      {/* Installation Section */}
      <section>
        <h2 className="font-semibold font-serif text-lg text-text-primary">
          Installation
        </h2>
        <p className="mt-2 text-sm text-text-secondary">
          Install the package using your preferred package manager.
        </p>
        <div className="mt-4">
          <InstallTabs codeBlocks={installCodeBlocks} />
        </div>
      </section>

      {/* Divider */}
      <hr className="my-12 border-divider" />

      {/* Usage Section */}
      <section>
        <h2 className="font-semibold font-serif text-lg text-text-primary">
          Usage
        </h2>
        <p className="mt-2 text-sm text-text-secondary">
          Import and use the PixelLoader component in your React application.
        </p>
        <div className="mt-4">
          <CodeBlock code={USAGE_CODE} language="tsx" />
        </div>
      </section>
    </>
  );
}
