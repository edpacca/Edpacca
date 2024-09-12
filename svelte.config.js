import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/kit/vite";
import { mdsvex, escapeSvelte } from "mdsvex";
import shiki from "shiki";

/** @type {import('@sveltejs/kit').Config} */

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: [".md"],
	layout: {
		_: './src/mdsvex.svelte'
	},
	highlight: {
		highlighter: async (code, lang = "text") => {
			const highlighter = await shiki.getHighlighter({
				theme: "dark-plus",
				langs: [ "javascript", "c#", "ts" ]
			})
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang }))
			return `{@html \`${html}\` }`
		}
	}
};

const config = {
	extensions: [ ".svelte", ".md" ],
	preprocess: [
		vitePreprocess(),
		mdsvex(mdsvexOptions)
	],
	kit: {
		adapter: adapter()
	}
};

export default config;
