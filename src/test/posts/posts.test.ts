import { test, describe, expect } from 'vitest';
import * as fs from 'fs';
import path from 'path';

const iconCssPath = path.join(
	__dirname,
	'../../../',
	'static/styles/fontawesome-free-6.4.0-web/css/all.min.css'
);
const faIconRegex = /fa-[a-zA-Z0-9-]+/g;

function testFileExists(filePath: string, warnOnly = false) {
	fs.access(filePath, fs.constants.F_OK, (err) => {
		if (err) {
			if (warnOnly) {
				console.warn(`File does not exist for non-published post\n${err.message}`);
			} else {
				throw new Error(err.message);
			}
		}
	});
}

function getCssIcons(): RegExpMatchArray | null {
	try {
		const fileData = fs.readFileSync(iconCssPath, 'utf-8');
		const icons = fileData.match(faIconRegex);
		return icons;
	} catch (err) {
		console.error(err);
	}
	return null;
}

describe('post validation', () => {
	const posts: Post[] = [];
	const paths = import.meta.glob('/src/posts/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');
		const valid = file && typeof file === 'object' && 'metadata' in file && slug;

		test(`post metadata is valid: ${path}`, () => {
			expect(valid).toBeTruthy();
		});

		if (valid) {
			const metadata = file.metadata as Omit<Post, 'slug'>;
			const post = { ...metadata, slug } satisfies Post;
			if (post.published) posts.push(post);
		}
	}

	const icons = getCssIcons();
	test('css icons exist', () => {
		expect(icons).not.toBeNull();
	});

	posts.forEach((post) => {
		if (post.coverImage) {
			const filePath = `./static/images/${post.coverImage}`;
			test(`cover image '${post.coverImage}' is valid for post: ${post.title}`, () => {
				expect(() => {
					testFileExists(filePath, !post.published);
				}).not.toThrowError();
			});
		} else if (post.icon) {
			test(`icon '${post.icon}' is valid for post: ${post.title}`, () => {
				expect(icons).toContain(`fa-${post.icon}`);
			});
		}
	});
});

describe('post gets sanitized', () => {

})
