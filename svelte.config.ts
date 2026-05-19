import type {Config} from "@sveltejs/kit";
import {vitePreprocess} from "@sveltejs/vite-plugin-svelte";
const {environmentOfBuilding: environment} = await import(
	`./building/index.ts`
);
const vitePreprocessor = vitePreprocess({});
export default {
	compilerOptions: {runes: true},
	kit: {
		/* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition */
		...(environment.adapter === null ? {} : {adapter: environment.adapter}),
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
			base: environment.configuration.hosting.basePath,
			relative: false,
		},
	},
	preprocess: [vitePreprocessor],
	vitePlugin: {prebundleSvelteLibraries: false},
} as const satisfies Config;
