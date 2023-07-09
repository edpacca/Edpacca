import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill';
import nodePolyfills from 'rollup-plugin-polyfill-node';

export default defineConfig({
	plugins: [
		sveltekit(),
	],
	resolve: {
		alias: {
			events: "rollup-plugin-polyfill-node/polyfills/events",
		}
	},
	build: {
		rollupOptions: {
			plugins: [
				nodePolyfills({
					include: ["events"],
				})
			],
		},
	},
	optimizeDeps: {
		esbuildOptions: {
			plugins: [
				NodeGlobalsPolyfillPlugin()
			],
		},      
	},
	server: {
		
	}
});
