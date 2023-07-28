import type { PageLoad } from '../$types';
import { PROJECTS } from '$lib/data/projectData';

export const load = (async ({ fetch }) => {
    const response = await fetch("/api/posts");
    const posts: Post[] = await response.json();
	return { 
		posts,
		projects: PROJECTS
	}
}) satisfies PageLoad
