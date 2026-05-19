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
		// eslint-disable-next-line @typescript-eslint/no-deprecated
		files: {
			// eslint-disable-next-line @typescript-eslint/no-deprecated
			appTemplate: `./source/client/HTML-templates/success/success-HTML-template.html`,
			// eslint-disable-next-line @typescript-eslint/no-deprecated
			assets: `./source/static-assets`,
			// eslint-disable-next-line @typescript-eslint/no-deprecated
			errorTemplate: `./source/client/HTML-templates/error/error-HTML-template.html`,
			hooks: {
				// eslint-disable-next-line @typescript-eslint/no-deprecated
				client: `./source/client/hooks.ts`,
				// eslint-disable-next-line @typescript-eslint/no-deprecated
				server: `./source/server/hooks.ts`,
			},
			// eslint-disable-next-line @typescript-eslint/no-deprecated
			lib: `./source`,
			// eslint-disable-next-line @typescript-eslint/no-deprecated
			routes: `./source/routes`,
			// eslint-disable-next-line @typescript-eslint/no-deprecated
			serviceWorker: `./source/service-worker/entrypoint.ts`,
			// eslint-disable-next-line @typescript-eslint/no-deprecated
			src: `./source`,
		},
		paths: {
			assets: ``,
			base:
				(
					building_.instances_.environment_.environment.configurationOfHosting
						.basePath === null
				) ?
					``
				:	building_.instances_.environment_.environment.configurationOfHosting
						.basePath,
			relative: false,
		},
	},
	preprocess: [vitePreprocessor],
	vitePlugin: {prebundleSvelteLibraries: false},
} as const satisfies Config;
