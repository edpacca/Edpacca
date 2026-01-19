import { parsePostFile } from '$lib/utils/parse.js';
import { canLoadPost } from '$lib/utils/post.js';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const file = await import(`../../posts/${params.slug}.md`);
		const post = parsePostFile(file, params.slug);

		if (!canLoadPost(post, import.meta.env.PROD)) {
			throw new Error(`cannot load post: ${params.slug}`)
		}

		return {
			content: file.default,
			meta: file.metadata
		};

	} catch (e) {
		console.error(e);
		error(404, `Hmmm couldn't find ${params.slug}`);
	}
}
