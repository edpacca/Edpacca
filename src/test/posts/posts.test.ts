import { test, describe, expect } from 'vitest';
import * as fs from 'fs';
import path from 'path';
import { parsePostFile } from '$lib/utils/parse';
import { canLoadPost, isPost } from '$lib/utils/post';

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
		const post = parsePostFile(file, path);

		test(`post metadata is valid: ${path}`, () => {
			expect(post).toBeTruthy();
		});
		if (post && (post.published || (post.dev ?? false))) posts.push(post);
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
		test(`published post is not marked for dev: ${post.title}`, () => {
			if (post.published)
			{
				expect(post.dev).toBeFalsy();
			}
		})
	});
})

describe('post loading', () => {

	// such a post should fail validation anyway, but for peace of mind
	const postPublishedAndDev = {
        "title": "Test",
        "slug": "a-valid-slug",
        "description": "A valid description",
        "published": true,
        "dev": true,
        "date": "01/04/2021"
    };

	const PostDevOnly = {
        "title": "Test",
        "slug": "a-valid-slug",
        "description": "A valid description",
        "dev": true,
		"published": false,
        "date": "01/04/2021"
    };

	const PostPublishedOnly = {
        "title": "Test",
        "slug": "a-valid-slug",
        "description": "A valid description",
        "published": true,
        "date": "01/04/2021",
    };

		const PostPublishedOnlyDevFalse = {
        "title": "Test",
        "slug": "a-valid-slug",
        "description": "A valid description",
        "published": true,
        "dev": false,
        "date": "01/04/2021",
    };

	const PostNoDevOrPublished = {
        "title": "Test",
        "slug": "a-valid-slug",
        "description": "A valid description",
        "date": "01/04/2021",
		"published": false,
    };

	test("test posts are valid", () => {
		expect(isPost(postPublishedAndDev)).toBe(true);
		expect(isPost(PostDevOnly)).toBe(true);
		expect(isPost(PostPublishedOnly)).toBe(true);
		expect(isPost(PostNoDevOrPublished)).toBe(true);
		expect(isPost(PostPublishedOnlyDevFalse)).toBe(true);
	})

	test("when in PROD post with 'dev' is not loaded", () => {
		expect(canLoadPost(postPublishedAndDev, true)).toBe(false);
		expect(canLoadPost(PostDevOnly, true)).toBe(false);
	});

	test("when in PROD post with 'published' and not 'dev' is loaded", () => {
		expect(canLoadPost(PostPublishedOnly, true)).toBe(true);
		expect(canLoadPost(PostPublishedOnlyDevFalse, true)).toBe(true);
	});

	test("when not in PROD post with 'dev' or 'published' is always loaded", () => {
		expect(canLoadPost(postPublishedAndDev, false)).toBe(true);
		expect(canLoadPost(PostDevOnly, false)).toBe(true);
		expect(canLoadPost(PostPublishedOnly, false)).toBe(true);
		expect(canLoadPost(PostPublishedOnlyDevFalse, false)).toBe(true);
	});

	test("post without 'dev' or 'published' is never loaded", () => {
	expect(canLoadPost(PostNoDevOrPublished, false)).toBe(false);
		expect(canLoadPost(PostNoDevOrPublished, true)).toBe(false);
	})
})
