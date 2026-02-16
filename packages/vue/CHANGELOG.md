# @pixel-loader/vue

## 0.0.2

### Patch Changes

- b7ce102: Fix property mapping for LitElement custom element

  - Use camelCase property names so Vue's `key in element` heuristic correctly sets them as JS properties
  - Set all prop defaults to `undefined` to preserve element defaults (fixes `isAnimating` Boolean defaulting to `false`)
  - Filter undefined props before passing to `h()` to avoid overriding element defaults
  - Import `@pixel-loader/core` to ensure custom element registration

## 0.1.1

### Patch Changes

-
- Updated dependencies
  - @pixel-loader/core@0.1.1
