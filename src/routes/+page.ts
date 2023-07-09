import { convertToPostPreview, importMarkdown } from '../lib/ts/markdown';
import type { PageLoad } from './$types';

export const load = (async () => {
	let postFiles = importMarkdown("static/posts/");
    let posts = postFiles.map(file => convertToPostPreview(file));
    return { posts };
}) satisfies PageLoad
