import { browser } from '$app/environment';
import { writable, type Writable } from 'svelte/store';
import {
	getLocalStorageColourTheme,
	getLocalStorageDarkTheme,
	setLocalStorageColourTheme,
	setLocalStorageDarkTheme
} from './persistance';
import { applyColourTheme, applyDarkTheme } from '$lib/theme';

const defaultDarkTheme = true;
const defaultColourTheme = 'gold';

function getDarkTheme(): boolean {
	return getLocalStorageDarkTheme() ?? defaultDarkTheme;
}

function getColourTheme(): string {
	return getLocalStorageColourTheme() ?? defaultColourTheme;
}

export const isUsingDarkTheme: Writable<boolean> = writable(defaultDarkTheme);
export const currentColourTheme: Writable<string> = writable(defaultColourTheme);
export const selectedProject: Writable<ProjectType | undefined> = writable(undefined);

export function setUpThemes() {
	isUsingDarkTheme.set(getDarkTheme());
	currentColourTheme.set(getColourTheme());

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

export function resetThemes() {
	isUsingDarkTheme.set(defaultDarkTheme);
	currentColourTheme.set(defaultColourTheme);
}

export function selectProject(project: ProjectType | undefined) {
	selectedProject.set(project);
	console.log(project);
}
