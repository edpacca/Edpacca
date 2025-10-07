import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex, escapeSvelte } from 'mdsvex';
import { createHighlighter, bundledThemes, bundledLanguages } from 'shiki';

const codeTheme = 'catppuccin-mocha';

const highlighter = await createHighlighter({
	themes: [bundledThemes[codeTheme]],
	langs: [
		bundledLanguages.cs,
		bundledLanguages.javascript,
		bundledLanguages.typescript,
		bundledLanguages.python
	]
});

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	smartypants: {
		quotes: true,
		ellipses: true,
		dashes: true
	},
	layout: {
		_: `${import.meta.dirname}/src/mdsvex.svelte`
	},
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const html = escapeSvelte(
				highlighter.codeToHtml(code, {
					lang: lang ?? 'text',
					theme: codeTheme
				})
			);
			return `{@html \`${html}\` }`;
		}
	}
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
	kit: {
		adapter: adapter()
	}
};

export default config;
