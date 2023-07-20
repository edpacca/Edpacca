import type { PageLoad } from '../$types';
import { PROJECTS } from '$lib/data/projectData';

export const load = (async () => {
	return { projects: PROJECTS }
}) satisfies PageLoad
