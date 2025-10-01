import adapter from "@sveltejs/adapter-node";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { mdsvex, escapeSvelte } from "mdsvex";
import { createHighlighter, bundledThemes, bundledLanguages }from "shiki";

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: [".md"],
	layout: {
		_: './src/mdsvex.svelte'
	},
	highlight: {
		highlighter: async (code, lang = "text") => {
			const highlighter = await createHighlighter({
				themes: [
					bundledThemes["catppuccin-mocha"]
				],
				langs: [
					bundledLanguages.cs,
					bundledLanguages.javascript,
					bundledLanguages.typescript,
					bundledLanguages.python
				 ]
			})
			const html = escapeSvelte(highlighter.codeToHtml(
				code,
				{
					lang: lang ?? "text",
					theme: "catppuccin-mocha"
				})
			)
			return `{@html \`${html}\` }`
		}
	}
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [ ".svelte", ".md" ],
	preprocess: [
		vitePreprocess(),
		mdsvex(mdsvexOptions)
	],
	kit: {
		adapter: adapter(),
	}
};

export default config;
