import type {Config} from "@sveltejs/kit";
import {vitePreprocess} from "@sveltejs/vite-plugin-svelte";
const {building_} = await import(`./building/module.ts`);
const vitePreprocessor = vitePreprocess({});
export default {
	compilerOptions: {runes: true},
	kit: {
		...(building_.instances_.environment_.environment.adapter === null ?
			{}
		:	{adapter: building_.instances_.environment_.environment.adapter}),
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
			serviceWorker: `./source/service-worker.ts`,
			src: `./source`,
		},
		paths: {
			assets: ``,
			base: building_.instances_.environment_.environment.configurationOfHosting
				.basePath,
			relative: false,
		},
	},
	preprocess: [vitePreprocessor],
	vitePlugin: {prebundleSvelteLibraries: false},
} as const satisfies Config;
