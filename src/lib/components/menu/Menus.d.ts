import type { SvelteComponent } from "svelte";

export interface MenuItem {
  name: string;
  path: string;
  icon?: typeof SvelteComponent;
  expanded?: boolean;
  items?: MenuItem[];
}