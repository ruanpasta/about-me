import { writable } from "svelte/store";
import type { Theme } from "../../global";

const theme = writable<Theme>('system')

export { theme }