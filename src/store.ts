import { writable, type Writable } from "svelte/store";

export const isSidebarVisible: Writable<boolean> = writable(true);
