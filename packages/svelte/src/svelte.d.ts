declare interface SvelteComponent<PropTypes = {}> {
  $$prop_def: PropTypes;
  $$events_def: {};
  $$slot_def: {};
}

declare interface Svelte2Component<PropTypes = {}> {
  $$prop_def: PropTypes;
  $$events_def: {};
  $$slot_def: {};
}

declare interface Svelte4Component<PropTypes = {}> {
  props: PropTypes;
  events: {};
  slots: {};
}

declare module "*.svelte" {
  import { SvelteComponentDev } from "svelte/internal";
  const component: ReturnType<typeof SvelteComponentDev>;
  export default component;
}
