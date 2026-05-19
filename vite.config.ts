import {sveltekit} from "@sveltejs/kit/vite";
import {type ConfigEnv, defineConfig, type Plugin, type UserConfig} from "vite";
export default defineConfig(async function determineConfig(
	env: ConfigEnv,
): Promise<UserConfig> {
	const svelteKitPlugins =
		(await sveltekit()) satisfies readonly Plugin<unknown>[];
	const plugins = [...svelteKitPlugins] satisfies readonly Plugin<unknown>[];
	switch (env.mode) {
		case `development`: {
			const {development_} = await import(`./development/module.ts`);
			return {
				build: {rolldownOptions: {external: [], treeshake: false}},
				define: {__SHOULD_PRERENDER__: false},
				experimental: {},
				optimizeDeps: {},
				plugins: plugins,
				server: {
					allowedHosts: [],
					host: development_.instances_.environment_.environment
						.configurationOfServer.bind.address,
					...((
						development_.instances_.environment_.environment
							.configurationOfServer.bind.port.tls === null
					) ?
						{}
					:	{
							https: {
								ca: development_.instances_.environment_.environment
									.configurationOfServer.bind.port.tls.intermediateCa
									.certificate,
								cert: development_.instances_.environment_.environment
									.configurationOfServer.bind.port.tls.server.certificate,
								key: development_.instances_.environment_.environment
									.configurationOfServer.bind.port.tls.server.privateKey,
							},
						}),
					fs: {allow: []},
					port: development_.instances_.environment_.environment
						.configurationOfServer.bind.port.number,
				},
				ssr: {external: true},
			} as const satisfies UserConfig;
		}
		case `production`: {
			const {building_} = await import(`./building/module.ts`);
			return {
				build: {
					minify: false,
					rolldownOptions: {
						experimental: {chunkOptimization: false},
						external: [],
						treeshake: true,
					},
				},
				define: {
					__SHOULD_PRERENDER__: (
						{node: false, none: `auto`, static: true} as const
					)[building_.instances_.environment_.environment.typeOfAdapter],
				},
				experimental: {},
				plugins: plugins,
				ssr: {external: true},
			} as const satisfies UserConfig;
		}
		default: {
			const error = new Error(`Unknown Vite mode: ${env.mode}`);
			throw error;
		}
	}
});
