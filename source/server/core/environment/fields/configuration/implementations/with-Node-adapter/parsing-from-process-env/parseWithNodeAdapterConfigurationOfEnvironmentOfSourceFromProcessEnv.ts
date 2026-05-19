import type {schemaForProcessEnvOfSource} from "../../../../../../schema-for-process-env/schemaForProcessEnvOfSource.ts";
import {parseServerOfWithNodeAdapterConfigurationOfEnvironmentOfSourceFromProcessEnv} from "../fields/server/parsing-from-process-env/parseServerOfWithNodeAdapterConfigurationOfEnvironmentOfSourceFromProcessEnv.ts";
import type {ServerOfWithNodeAdapterConfigurationOfEnvironmentOfSource} from "../fields/server/ServerOfWithNodeAdapterConfigurationOfEnvironmentOfSource.ts";
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
	};
	return configuration;
}
