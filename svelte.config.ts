import type {Config} from "@sveltejs/kit";
import {vitePreprocess} from "@sveltejs/vite-plugin-svelte";
const vitePreprocessor = vitePreprocess({});
export default {
	compilerOptions: {runes: true},
	kit: {
		csrf: {trustedOrigins: []},
		env: {dir: `.`},
		files: {
			appTemplate: `./source/client/HTML-templates/success/success-HTML-template.html`,
			assets: `./source/static-assets`,
			errorTemplate: `./source/client/HTML-templates/error/error-HTML-template.html`,
			hooks: {
				client: `./source/client/hooks.ts`,
				server: `./source/server/hooks.ts`,
			},
			lib: `./source`,
			routes: `./source/routes`,
			src: `./source`,
		},
		paths: {assets: ``, base: ``, relative: false},
	},
	preprocess: [vitePreprocessor],
	vitePlugin: {prebundleSvelteLibraries: false},
} as const satisfies Config;
