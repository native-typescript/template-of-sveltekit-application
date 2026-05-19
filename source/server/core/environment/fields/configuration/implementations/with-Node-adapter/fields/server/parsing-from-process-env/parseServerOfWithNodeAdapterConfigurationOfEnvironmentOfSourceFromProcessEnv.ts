import type {schemaForProcessEnvOfSource} from "../../../../../../../../schema-for-process-env/index.ts";
import {
	type BindOfServerOfWithNodeAdapterConfigurationOfEnvironmentOfSource,
	parseBindOfServerOfWithNodeAdapterConfigurationOfEnvironmentOfSourceFromProcessEnv,
} from "../fields/index.ts";
import type {ServerOfWithNodeAdapterConfigurationOfEnvironmentOfSource} from "../ServerOfWithNodeAdapterConfigurationOfEnvironmentOfSource.ts";
import type {z} from "zod";
export function parseServerOfWithNodeAdapterConfigurationOfEnvironmentOfSourceFromProcessEnv(
	processEnv: Extract<
		z.output<typeof schemaForProcessEnvOfSource>,
		{readonly ADAPTER__NAME: `Node`}
	>,
): ServerOfWithNodeAdapterConfigurationOfEnvironmentOfSource {
	const bindOfServer: BindOfServerOfWithNodeAdapterConfigurationOfEnvironmentOfSource =
		parseBindOfServerOfWithNodeAdapterConfigurationOfEnvironmentOfSourceFromProcessEnv(
			processEnv,
		);
	const server: ServerOfWithNodeAdapterConfigurationOfEnvironmentOfSource = {
		bind: bindOfServer,
	};
	return server;
}
