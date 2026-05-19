import type {Config} from "@sveltejs/kit";
import {vitePreprocess} from "@sveltejs/vite-plugin-svelte";
const {environmentOfBuilding: environment} = await import(
	`./building/instances/environment/environmentOfBuilding.ts`
);
const vitePreprocessor = vitePreprocess({});
/* eslint-disable-next-line import-x/no-default-export */
export default {
	compilerOptions: {runes: true},
	kit: {
		adapter: environment.adapter,
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
		paths: {
			assets: ``,
			base:
				environment.configuration.hosting.basePath === null ?
					``
				:	environment.configuration.hosting.basePath,
			relative: false,
		},
	},
	preprocess: [vitePreprocessor],
	vitePlugin: {prebundleSvelteLibraries: false},
} as const satisfies Config;
