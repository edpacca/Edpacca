export function sanitizeScriptTags (text: string) {
	return text.replaceAll("<script>", "").replaceAll("</script>", "");
}

export function parsePostFile (file: unknown, path: string): Post | undefined {
	const slug = path.split('/').at(-1)?.replace('.md', '');
	const valid = file && typeof file === 'object' && 'metadata' in file && slug;

	if (valid) {
		const metadata = file.metadata as Omit<Post, 'slug'>;
		const post = { ...metadata, slug } satisfies Post;
		return post;
	}
	return undefined;
}
