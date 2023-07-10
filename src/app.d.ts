// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}

		interface Post {
			title: string,
			url: string;
			date: Date;
			description: string;
			cover_image: string;
		}
}

export {};
