export type Post = {
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

export type ProjectType = {
	name: string,
	id: string,
	icon: string
	description?: string,
}

