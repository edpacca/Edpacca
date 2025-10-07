import { PROJECTS } from '$lib/data/projectData';

export async function load({ fetch }) {
	const response = await fetch('/api/posts');
	const posts: Post[] = await response.json();
	return {
		posts,
		projects: PROJECTS
	};
}
