const parsePinned = (pinned: boolean | undefined) => Number(pinned ?? 0);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const propIsType = (obj: any, prop: string, type: string) => typeof obj[prop] === type;

const isDevPost = (post: Post) => post.dev ?? false;

const canLoadProdPost = (post: Post) => !post.dev && post.published;

export function comparePinnedPosts(p1: Post, p2: Post) {
	return parsePinned(p2.pinned) - parsePinned(p1.pinned);
}

export function isPost(obj: unknown): obj is Post {
	return (
		obj != undefined &&
		typeof obj === 'object' &&
		propIsType(obj, 'title', 'string') &&
		propIsType(obj, 'slug', 'string') &&
		propIsType(obj, 'description', 'string') &&
		propIsType(obj, 'published', 'boolean') &&
		propIsType(obj, 'date', 'string')
	);
}

export function canLoadPost(post: unknown, isEnvProd: boolean): boolean {
	if (isEnvProd || import.meta.env.PROD) // fallback to env
	{
		// if prod ignore dev posts
		return isPost(post) && canLoadProdPost(post);
	}
	// if dev - load dev posts
	return isPost(post) && (post.published || isDevPost(post));
}
