import { browser } from '$app/environment';
import { get } from 'svelte/store';
import { currentColourTheme, isUsingDarkTheme } from '../store';

const root = browser && (document.querySelector(':root') as HTMLElement);

export function applyDarkTheme(darkTheme: boolean) {
	if (root) {
		if (darkTheme) {
			root.style.setProperty('--primary', 'var(--white)');
			root.style.setProperty('--primary-50', 'var(--white-50)');
			root.style.setProperty('--primary-25', 'var(--white-25)');
			root.style.setProperty('--secondary', 'var(--black)');
			root.style.setProperty('--secondary-50', 'var(--black-50)');
			root.style.setProperty('--secondary-25', 'var(--black-25)');
			root.style.setProperty('--tertiary', 'var(--dark-grey)');
			root.style.setProperty('--bg0', 'var(--dark-grey)');
			root.style.setProperty('--bg1', 'var(--grey)');
			root.style.setProperty('--caption', 'var(--light-grey)');
			root.style.setProperty('--highlight', `var(--${get(currentColourTheme)}-bright)`);
			root.style.setProperty('--highlight-inverse', 'var(--highlight');
		} else {
			root.style.setProperty('--primary', 'var(--black)');
			root.style.setProperty('--primary-50', 'var(--black-50)');
			root.style.setProperty('--primary-25', 'var(--black-25)');
			root.style.setProperty('--secondary', 'var(--white)');
			root.style.setProperty('--secondary-50', 'var(--white-50)');
			root.style.setProperty('--secondary-25', 'var(--white-25)');
			root.style.setProperty('--tertiary', 'var(--grey)');
			root.style.setProperty('--bg0', 'var(--light-tan)');
			root.style.setProperty('--bg1', 'var(--white)');
			root.style.setProperty('--caption', 'var(--dark-grey)');
			root.style.setProperty('--highlight', `var(--${get(currentColourTheme)}-dark)`);
			root.style.setProperty('--highlight-inverse', `var(--${get(currentColourTheme)}-bright)`);
		}
	}
}

export function applyColourTheme(theme: string) {
	if (root) {
		const themeType = get(isUsingDarkTheme) ? 'bright' : 'dark';
		root.style.setProperty('--highlight', `var(--${theme}-${themeType})`);
	}
}
