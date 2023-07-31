import { writable, type Writable } from "svelte/store";

export const isSidebarVisible: Writable<boolean> = writable(true);
export const isUsingDarkTheme: Writable<boolean> = writable(true);
export const currentColourTheme: Writable<string> = writable("gold");