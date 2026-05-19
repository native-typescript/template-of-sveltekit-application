import {sveltekit} from "@sveltejs/kit/vite";
import {type ConfigEnv, defineConfig, type Plugin, type UserConfig} from "vite";
export default defineConfig(async function determineConfig(
	env: ConfigEnv,
): Promise<UserConfig> {
	const svelteKitPlugins: Plugin<unknown>[] = await sveltekit();
	switch (env.mode) {
		case `development`: {
			const {development_} = await import(`./development/module.ts`);
			return {
				build: {rolldownOptions: {external: [], treeshake: false}},
				experimental: {},
				optimizeDeps: {},
				plugins: svelteKitPlugins,
				server: {
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
			return {
				build: {rolldownOptions: {external: [], treeshake: false}},
				experimental: {},
				optimizeDeps: {},
				plugins: svelteKitPlugins,
				ssr: {external: true},
			} as const satisfies UserConfig;
		}
		default: {
			const error: Error = new Error(`Unknown Vite mode: ${env.mode}`);
			throw error;
		}
	}
});
