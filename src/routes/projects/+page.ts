import type { PageLoad } from '../$types';
import { PROJECTS } from './projectData';

export const load = (() => {
	return { projects: PROJECTS };
}) satisfies PageLoad;

