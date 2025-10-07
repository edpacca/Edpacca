/* eslint-disable */

enum StorageType {
	DarkTheme = 'dark-theme',
	ColourTheme = 'colour-theme'
}

export function setLocalStorageDarkTheme(darkTheme: boolean) {
	setLocalStorage(StorageType.DarkTheme, darkTheme);
}

export function getLocalStorageDarkTheme(): boolean {
	return getLocalStorage(StorageType.DarkTheme);
}

export function setLocalStorageColourTheme(colourTheme: string) {
	setLocalStorage(StorageType.ColourTheme, colourTheme);
}

export function getLocalStorageColourTheme(): string {
	return getLocalStorage(StorageType.ColourTheme);
}

function setLocalStorage(name: string, obj: any) {
	try {
		localStorage.setItem(name, JSON.stringify(obj));
	} catch (e) {
		console.error(`Error writing ${name} to local storage: ${e}`);
	}
}

function getLocalStorage(name: string): any {
	try {
		const obj = JSON.parse(localStorage.getItem(name) as string);
		return obj;
	} catch (e) {
		console.error(`Error retrieving ${name} from local storage: ${e}`);
		return undefined;
	}
}
