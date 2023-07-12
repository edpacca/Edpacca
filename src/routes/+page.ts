import { getPostPreviewsByDate } from '../lib/ts/posts';
import type { PageLoad } from './$types';

export const load = (async () => {
	const posts = getPostPreviewsByDate("static/posts/");
    return { posts };
}) satisfies PageLoad
