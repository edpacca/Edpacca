import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
// import { nodePolyfills } from 'vite-plugin-node-polyfills';
import nodePolyfills from 'rollup-plugin-polyfill-node';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill';

export default defineConfig({
	plugins: [
		sveltekit(),
		// nodePolyfills({
		// 	globals: {
		// 	  Buffer: true, // can also be 'build', 'dev', or false
		// 	  global: true,
		// 	  process: true,
		// 	},
		// 	protocolImports: true,
		//   }),
	],
	optimizeDeps: {
        esbuildOptions: {
            // Enable esbuild polyfill plugins
            plugins: [
                NodeGlobalsPolyfillPlugin({
                    process: true,
                    buffer: true
                })
            ]
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
});
