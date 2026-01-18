import { parsePostFile } from '$lib/utils/parse';
import { canLoadPost } from '$lib/utils/post';
import { json } from '@sveltejs/kit';

/* eslint-disable */
async function getPosts() {
	let posts: Post[] = [];

	const paths = import.meta.glob('/src/posts/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const post = parsePostFile(file, path);
		post && canLoadPost(post) && posts.push(post);
	}

	posts = posts.sort(
		(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	);

	return posts;
}

export async function GET() {
	const posts = await getPosts();
	return json(posts);
}
