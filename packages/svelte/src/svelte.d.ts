declare interface SvelteComponent<PropTypes = Record<string, never>> {
  $$prop_def: PropTypes;
  $$events_def: Record<string, never>;
  $$slot_def: Record<string, never>;
}

declare interface Svelte2Component<PropTypes = Record<string, never>> {
  $$prop_def: PropTypes;
  $$events_def: Record<string, never>;
  $$slot_def: Record<string, never>;
}

declare interface Svelte4Component<PropTypes = Record<string, never>> {
  props: PropTypes;
  events: Record<string, never>;
  slots: Record<string, never>;
}

declare module "*.svelte" {
  import { SvelteComponentDev } from "svelte/internal";
  const component: ReturnType<typeof SvelteComponentDev>;
  export default component;
}
