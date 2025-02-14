import adapter from "@sveltejs/adapter-node";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
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
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang: lang ?? undefined }))
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
		adapter: adapter({
			out: "build",
		}),
	}
};

export default config;
