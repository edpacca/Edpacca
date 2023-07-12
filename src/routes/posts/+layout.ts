import type { LayoutData } from '../$types';
import { getPostPreviewsByDate } from '../../lib/ts/posts';

export const load = (async () => {
	const posts = getPostPreviewsByDate("static/posts/");
    return { posts };
}) satisfies LayoutData
