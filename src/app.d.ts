// See https://kit.svelte.dev/docs/types#app

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
		date: string
		projectId: string
		published: boolean
		coverImage?: string
		icon?: string
		technologies?: string[]
	}

	type ProjectType = {
		name: string,
		id: string,
		icon: string
		description?: string,
	}

	type Points = [number, number][]

	type JSONValue = { [x: string]: string }

	interface JSONArray extends Array<JSONValue> { }
}

export {};
