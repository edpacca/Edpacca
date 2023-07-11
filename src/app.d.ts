// See https://kit.svelte.dev/docs/types#app

import type { IconType } from "svelte-awesome/components/Icon.svelte";

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
			projectId?: string;
		}

		type ProjectType = {
			name: string,
			id: string,
			description?: string,
			icon?: string
		}
}

export {};
