import type {schemaForProcessEnvOfSource} from "../../../../../../../../schema-for-process-env/schemaForProcessEnvOfSource.ts";
import type {BindOfServerOfWithNodeAdapterConfigurationOfEnvironmentOfSource} from "../fields/bind/BindOfServerOfWithNodeAdapterConfigurationOfEnvironmentOfSource.ts";
import {parseBindOfServerOfWithNodeAdapterConfigurationOfEnvironmentOfSourceFromProcessEnv} from "../fields/bind/parsing-from-process-env/parseBindOfServerOfWithNodeAdapterConfigurationOfEnvironmentOfSourceFromProcessEnv.ts";
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
