# @pixel-loader/solid

## 0.0.2

### Patch Changes

- b7ce102: Fix property mapping for LitElement custom element

  - Fix ref capture timing: use callback ref with `onMount` + `createEffect` instead of static attribute spread
  - Set `borderRadius` and `delayPattern` as JS properties instead of HTML attributes (`borderRadius` mapped to `borderradius` not `border-radius`, `delayPattern` has `attribute: false`)
  - Add `JSX.HTMLAttributes<HTMLElement>` to IntrinsicElements for proper ref support
  - Import `@pixel-loader/core` to ensure custom element registration

## 0.1.1

### Patch Changes

-
- Updated dependencies
  - @pixel-loader/core@0.1.1
