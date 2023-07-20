export type Categories = 'sveltekit' | 'svelte'

export type Post = {
	title: string
	slug: string
	description: string
    coverImage: string
	date: string
    projectId: string
	published: boolean
}