// See https://kit.svelte.dev/docs/types#app

import type { IconType } from "svelte-awesome/components/Icon.svelte";

// for information about these interfaces
declare global {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}

		type Post = {
			title: string
			slug: string
			description: string
			coverImage: string
			date: string
			projectId: string
			published: boolean
		}

		type ProjectType = {
			name: string,
			id: string,
			description?: string,
			icon?: string
		}
}

export {};
