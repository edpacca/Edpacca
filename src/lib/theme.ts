import { browser } from "$app/environment";

const root = browser && document.querySelector(":root") as HTMLElement;

export function toggleDarkTheme(darkTheme: boolean) {
    if (root) {
        if (darkTheme) {
            root.style.setProperty("--primary", "var(--white)");
            root.style.setProperty("--bg0", "var(--grey)");
            root.style.setProperty("--bg1", "var(--dark-grey)");
        } else {
            root.style.setProperty("--primary", "var(--black)");
            root.style.setProperty("--bg0", "var(--white)");
            root.style.setProperty("--bg1", "var(--dark-white)");
        }
    }
}

export function setHighlight(theme: string) {
    if (root) {
        root.style.setProperty("--highlight", `var(--${theme})`);
    }
}