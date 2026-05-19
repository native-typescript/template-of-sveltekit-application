import type {EnvironmentOfDevelopment} from "./development/core/environment/EnvironmentOfDevelopment.ts";
import {sveltekit} from "@sveltejs/kit/vite";
import {type ConfigEnv, defineConfig, type Plugin, type UserConfig} from "vite";
const configOfVite = defineConfig(async function determineConfig(
	env: ConfigEnv,
): Promise<UserConfig> {
	const svelteKitPlugins: Plugin<unknown>[] = await sveltekit();
	switch (env.mode) {
		case `development`: {
			const {
				environmentOfDevelopment: environment,
			}: {readonly environmentOfDevelopment: EnvironmentOfDevelopment} =
				await import(
					/* @vite-ignore */ `./development/instances/environment/environmentOfDevelopment.ts`
				);
			return {
				build: {rolldownOptions: {external: [], treeshake: false}},
				experimental: {},
				optimizeDeps: {},
				plugins: svelteKitPlugins,
				server: {
					host: environment.configuration.server.bind.address,
					...(environment.configuration.server.bind.port.tls === null ?
						{}
					:	{
							https: {
								ca: environment.configuration.server.bind.port.tls
									.intermediateCa.certificate,
								cert: environment.configuration.server.bind.port.tls.server
									.certificate,
								key: environment.configuration.server.bind.port.tls.server
									.privateKey,
							},
						}),
					fs: {allow: []},
					port: environment.configuration.server.bind.port.number,
				},
				ssr: {external: true},
			} as const satisfies UserConfig;
		}
		case `production`: {
			return {
				build: {
					minify: false,
					rolldownOptions: {
						experimental: {chunkOptimization: false},
						external: [],
						treeshake: true,
					},
				},
				experimental: {},
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
/* eslint-disable-next-line import-x/no-default-export */
export default configOfVite;
