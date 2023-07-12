import { convertMarkdown } from '$lib/ts/markdown';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({params}) => {
    try {
        const post = convertMarkdown(`static/posts/${params.slug}.md`);
        return { post };
    } catch {
        throw error(404, "Hmmm, can't find that one");
    }
}) satisfies PageLoad;
