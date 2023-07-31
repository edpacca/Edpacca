import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = { 
	extensions: [".md"],
	layout: {
		_: './src/mdsvex.svelte'
	},
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
