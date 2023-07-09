import type { PageServerLoad } from './$types';
import { PROJECTS } from './projectData';

export const load = (() => {
	return { projects: PROJECTS };
}) satisfies PageServerLoad;

