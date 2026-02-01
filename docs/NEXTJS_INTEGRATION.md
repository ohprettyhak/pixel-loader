# Next.js Integration Guide

This guide explains how to use Pixel Loader with Next.js and alternative approaches for different frameworks.

## Overview

Pixel Loader is a web component library that can be used with any JavaScript framework. However, **Next.js is specifically designed for React**, so integration capabilities vary by framework.

## Framework Compatibility with Next.js

| Framework | Compatible with Next.js? | Alternative Framework |
|-----------|-------------------------|----------------------|
| **React** | ✅ Yes (Native) | Next.js (already using it) |
| **Vue** | ❌ No | Nuxt.js |
| **Solid** | ❌ No | Solid Start |
| **Svelte** | ❌ No | SvelteKit |

## Using React Package with Next.js

The **@pixel-loader/react** package works seamlessly with Next.js. See the `/examples` directory for a complete working example.

```tsx
import { PixelLoader } from "@pixel-loader/react";

export default function Page() {
  return (
    <PixelLoader
      preset="diagonal"
      size={66}
      isAnimating={true}
    />
  );
}
```

**Features:**
- ✅ Works with App Router and Pages Router
- ✅ Server Components compatible (use as client component when interactive)
- ✅ TypeScript support
- ✅ All props available

## Why Other Frameworks Don't Work with Next.js

### Technical Reasons

1. **Framework-Specific Virtual DOM**
   - Next.js uses React's virtual DOM
   - Vue, Solid, and Svelte have their own virtual DOM implementations
   - These cannot be mixed in the same application

2. **Build System Differences**
   - Next.js uses its own build pipeline (webpack/turbopack)
   - Each framework has specific compiler requirements
   - Build artifacts are not compatible

3. **Runtime Conflicts**
   - Framework runtimes would conflict if loaded together
   - Different reconciliation algorithms
   - Incompatible component lifecycle methods

## Alternative Approaches

### 1. Use Web Component Directly (Universal)

Since Pixel Loader is built as a web component, it can be used in **any** framework, including Next.js.

**In Next.js (App Router):**

```tsx
"use client";

import { useEffect, useRef } from "react";

export default function Page() {
  const loaderRef = useRef<any>(null);

  useEffect(() => {
    // Import the web component
    import("@pixel-loader/core");
  }, []);

  return (
    <pixel-loader
      ref={loaderRef}
      preset="diagonal"
      size={66}
      is-animating="true"
    />
  );
}
```

**Limitations:**
- Must be a Client Component ("use client")
- Props use kebab-case (e.g., `is-animating` instead of `isAnimating`)
- No TypeScript type safety for props
- Manual attribute binding required

### 2. Micro-Frontends Architecture

Use **Module Federation** or **single-spa** to integrate multiple frameworks:

```javascript
// Next.js app loads Vue app as micro-frontend
const VueApp = lazy(() => import("vueApp/App"));

export default function Page() {
  return (
    <div>
      <h1>Next.js App</h1>
      <Suspense fallback={<div>Loading Vue app...</div>}>
        <VueApp />
      </Suspense>
    </div>
  );
}
```

**Tools:**
- [Webpack Module Federation](https://module-federation.io/)
- [single-spa](https://single-spa.js.org/)
- [qiankun](https://qiankun.umijs.org/)

**Pros:**
- Run multiple frameworks in same page
- Independent deployments
- Framework isolation

**Cons:**
- Complex setup
- Larger bundle sizes
- Performance overhead

### 3. iframe Isolation

Load framework-specific examples in iframes:

```tsx
export default function Page() {
  return (
    <div>
      <h1>Pixel Loader Examples</h1>

      <div className="grid">
        <iframe src="/examples-react" title="React" />
        <iframe src="/examples-vue" title="Vue" />
        <iframe src="/examples-solid" title="Solid" />
        <iframe src="/examples-svelte" title="Svelte" />
      </div>
    </div>
  );
}
```

**Pros:**
- Complete isolation
- Simple to implement
- No framework conflicts

**Cons:**
- Poor user experience (multiple scrollbars)
- Communication between iframe and parent is complex
- SEO issues

### 4. Server-Side Include (SSI) / Edge Includes

Use edge-side includes to render framework-specific components:

```html
<!-- Next.js page -->
<html>
  <body>
    <h1>Pixel Loader</h1>
    <!--# include virtual="/vue-loader" -->
    <!--# include virtual="/solid-loader" -->
  </body>
</html>
```

**Tools:**
- [Edge Side Includes (ESI)](https://www.w3.org/TR/esi-lang)
- [nginx SSI](https://nginx.org/en/docs/http/ngx_http_ssi_module.html)
- [Cloudflare Workers](https://workers.cloudflare.com/)

**Pros:**
- Server-side composition
- No runtime framework conflicts

**Cons:**
- Complex infrastructure setup
- Limited interactivity

## Recommended Approach by Use Case

### I Want to Use Pixel Loader in My Next.js App

**Solution:** Use `@pixel-loader/react` package

```bash
pnpm add @pixel-loader/react
```

```tsx
import { PixelLoader } from "@pixel-loader/react";
```

### I Want to Use Vue in My Project

**Solution:** Use Nuxt.js instead of Next.js

```bash
pnpm add @pixel-loader/vue
```

See `/examples-vue` for complete example.

### I Want to Use Solid in My Project

**Solution:** Use Solid Start instead of Next.js

```bash
pnpm add @pixel-loader/solid
```

See `/examples-solid` for complete example.

### I Want to Use Svelte in My Project

**Solution:** Use SvelteKit instead of Next.js

```bash
pnpm add @pixel-loader/svelte
```

See `/examples-svelte` for complete example.

### I Need to Combine Multiple Frameworks

**Solution:** Use micro-frontend architecture

1. **Module Federation** - Best for tightly coupled micro-frontends
2. **single-spa** - Best for loosely coupled, independently deployable apps
3. **iframe** - Simplest but worst UX

### I Want Framework-Agnostic Usage

**Solution:** Use the web component directly in any framework

The `@pixel-loader/core` package exports a standard web component that works everywhere:

```bash
pnpm add @pixel-loader/core
```

```javascript
import "@pixel-loader/core";

// Works in any framework
document.body.appendChild(
  Object.assign(document.createElement("pixel-loader"), {
    preset: "diagonal",
    size: 66,
    isAnimating: true
  })
);
```

## Summary Table

| Goal | Recommended Solution |
|------|---------------------|
| Use with Next.js | `@pixel-loader/react` |
| Use with Vue | Nuxt.js + `@pixel-loader/vue` |
| Use with Solid | Solid Start + `@pixel-loader/solid` |
| Use with Svelte | SvelteKit + `@pixel-loader/svelte` |
| Framework-agnostic | `@pixel-loader/core` web component |
| Mix frameworks | Micro-frontends (Module Federation) |
| Simple integration | iframe isolation (not recommended) |

## Conclusion

**Next.js is React-only by design.** To use Pixel Loader with Vue, Solid, or Svelte, use their respective meta-frameworks (Nuxt, Solid Start, SvelteKit) instead of Next.js.

The **React package** (`@pixel-loader/react`) is designed specifically for Next.js and provides the best developer experience with full TypeScript support and framework integration.

For **multi-framework projects**, consider micro-frontend architectures or use the web component directly with framework-agnostic code.
