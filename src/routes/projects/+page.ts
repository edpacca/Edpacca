import type { PageLoad } from '../$types';
import { PROJECTS } from '$lib/ts/data/projectData';

export const load = (async () => {
	return { projects: PROJECTS }
}) satisfies PageLoad
