import { browser } from "$app/environment";
import { writable, type Writable } from "svelte/store";
import { getLocalStorageColourTheme, getLocalStorageDarkTheme, setLocalStorageColourTheme, setLocalStorageDarkTheme } from "./persistance";
import { applyColourTheme, applyDarkTheme } from "$lib/theme";

const defaultDarkTheme = true;
const defaultColourTheme = "gold";

function getDarkTheme(): boolean {
    return getLocalStorageDarkTheme() ?? defaultDarkTheme;
}

function getColourTheme(): string {
    return getLocalStorageColourTheme() ?? defaultColourTheme;
}

export const isUsingDarkTheme: Writable<boolean> = writable(getDarkTheme());
export const currentColourTheme: Writable<string> = writable(getColourTheme());

export function setUpThemes() {
    isUsingDarkTheme.subscribe((value: boolean) => {
        if (browser) {
            setLocalStorageDarkTheme(value);
        }
        applyDarkTheme(value);
    });
    currentColourTheme.subscribe((theme: string) => {
        if (browser) {
            setLocalStorageColourTheme(theme);
        }
        applyColourTheme(theme);
    });
}
