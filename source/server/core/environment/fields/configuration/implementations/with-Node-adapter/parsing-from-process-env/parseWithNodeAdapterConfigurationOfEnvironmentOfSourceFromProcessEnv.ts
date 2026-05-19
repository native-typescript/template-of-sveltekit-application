import type {schemaForProcessEnvOfSource} from "../../../../../../schema-for-process-env/index.ts";
import {
	parseServerOfWithNodeAdapterConfigurationOfEnvironmentOfSourceFromProcessEnv,
	type ServerOfWithNodeAdapterConfigurationOfEnvironmentOfSource,
} from "../fields/index.ts";
import type {WithNodeAdapterConfigurationOfEnvironmentOfSource} from "../WithNodeAdapterConfigurationOfEnvironmentOfSource.ts";
import type {z} from "zod";
export function parseWithNodeAdapterConfigurationOfEnvironmentOfSourceFromProcessEnv(
	processEnv: Extract<
		z.output<typeof schemaForProcessEnvOfSource>,
		{readonly ADAPTER__NAME: `Node`}
	>,
): WithNodeAdapterConfigurationOfEnvironmentOfSource {
	const server: ServerOfWithNodeAdapterConfigurationOfEnvironmentOfSource =
		parseServerOfWithNodeAdapterConfigurationOfEnvironmentOfSourceFromProcessEnv(
			processEnv,
		);
	const configuration: WithNodeAdapterConfigurationOfEnvironmentOfSource = {
		adapter: {id: `node`},
		server: server,
		type: `withNodeAdapter`,
	};
	return configuration;
}
