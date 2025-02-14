import { browser } from "$app/environment";
import { get } from "svelte/store";
import { currentColourTheme, isUsingDarkTheme } from "../store";

const root = browser && document.querySelector(":root") as HTMLElement;

export function applyDarkTheme(darkTheme: boolean) {
    if (root) {
        if (darkTheme) {
            root.style.setProperty("--primary", "var(--white)");
            root.style.setProperty("--primary-50", "var(--white-50)");
            root.style.setProperty("--secondary", "var(--black)");
            root.style.setProperty("--secondary-50", "var(--black-50)");
            root.style.setProperty("--tertiary", "var(--dark-grey)");
            root.style.setProperty("--bg0", "var(--dark-grey)");
            root.style.setProperty("--bg1", "var(--grey)");
            root.style.setProperty(
                "--highlight", `var(--${get(currentColourTheme)}-bright)`);
        } else {
            root.style.setProperty("--primary", "var(--black)");
            root.style.setProperty("--primary-50", "var(--black-50)");
            root.style.setProperty("--secondary", "var(--white)");
            root.style.setProperty("--secondary-50", "var(--white-50)");
            root.style.setProperty("--tertiary", "var(--grey)");
            root.style.setProperty("--bg0", "var(--light-tan)");
            root.style.setProperty("--bg1", "var(--white)");
            root.style.setProperty(
                "--highlight", `var(--${get(currentColourTheme)}-dark)`);
        }
    }
}

export function applyColourTheme(theme: string) {
    if (root) {
        const themeType = get(isUsingDarkTheme) ? "bright" : "dark";
        root.style.setProperty("--highlight", `var(--${theme}-${themeType})`);
    }
}