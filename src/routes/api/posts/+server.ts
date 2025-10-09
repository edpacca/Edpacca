import { json } from '@sveltejs/kit';

/* eslint-disable */
async function getPosts() {
	let posts: Post[] = [];

	const paths = import.meta.glob('/src/posts/*.md', { eager: true });
	var isDev = import.meta.env.DEV;

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');
		const valid = file && typeof file === 'object' && 'metadata' in file && slug;

		if (valid) {
			const metadata = file.metadata as Omit<Post, 'slug'>;
			const post = { ...metadata, slug } satisfies Post;
			(post.published || (metadata.dev && isDev)) && posts.push(post);

		}
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
