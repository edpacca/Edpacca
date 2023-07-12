// See https://kit.svelte.dev/docs/types#app

import type { IconType } from "svelte-awesome/components/Icon.svelte";

// for information about these interfaces
declare global {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}

		interface PostAttributes {
			title: string,
			url: string;
			date: Date;
			description: string;
			cover_image: string;
			projectId?: string;
			images?: string[];
		}

		interface PostData {
			attributes: PostAttributes,
			html: any
		}

		type ProjectType = {
			name: string,
			id: string,
			description?: string,
			icon?: string
		}
}

export {};
