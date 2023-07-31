import { browser } from "$app/environment";
import { writable, type Writable } from "svelte/store";
import { getLocalStorageColourTheme, getLocalStorageDarkTheme, setLocalStorageColourTheme, setLocalStorageDarkTheme } from "./persistance";

const defaultDarkTheme = true;
const defaultColourTheme = "gold";

export function getDarkTheme(): boolean {
    return getLocalStorageDarkTheme() ?? defaultDarkTheme 
}

export function getColourTheme(): string {
    return getLocalStorageColourTheme() ?? defaultColourTheme 
} 

export const isUsingDarkTheme: Writable<boolean> = writable(defaultDarkTheme);
export const currentColourTheme: Writable<string> = writable(defaultColourTheme);

isUsingDarkTheme.subscribe((value: boolean) => {
    if (browser) {
        setLocalStorageDarkTheme(value);
    }
});

currentColourTheme.subscribe((theme: string) => {
    if (browser) {
        setLocalStorageColourTheme(theme);
    }
});