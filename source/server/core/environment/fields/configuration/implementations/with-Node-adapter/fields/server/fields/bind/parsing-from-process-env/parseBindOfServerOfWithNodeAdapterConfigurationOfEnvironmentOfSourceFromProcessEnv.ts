import type {schemaForProcessEnvOfSource} from "../../../../../../../../../../schema-for-process-env/schemaForProcessEnvOfSource.ts";
import type {BindOfServerOfWithNodeAdapterConfigurationOfEnvironmentOfSource} from "../BindOfServerOfWithNodeAdapterConfigurationOfEnvironmentOfSource.ts";
import {parsePortOfBindOfServerOfWithNodeAdapterConfigurationOfEnvironmentOfSourceFromProcessEnv} from "../fields/port/parsing-from-process-env/parsePortOfBindOfServerOfWithNodeAdapterConfigurationOfEnvironmentOfSourceFromProcessEnv.ts";
import type {PortOfBindOfServerOfWithNodeAdapterConfigurationOfEnvironmentOfSource} from "../fields/port/PortOfBindOfServerOfWithNodeAdapterConfigurationOfEnvironmentOfSource.ts";
import type {z} from "zod";
export function parseBindOfServerOfWithNodeAdapterConfigurationOfEnvironmentOfSourceFromProcessEnv(
	processEnv: Extract<
		z.output<typeof schemaForProcessEnvOfSource>,
		{readonly ADAPTER__NAME: `Node`}
	>,
): BindOfServerOfWithNodeAdapterConfigurationOfEnvironmentOfSource {
	const portOfBind: PortOfBindOfServerOfWithNodeAdapterConfigurationOfEnvironmentOfSource =
		parsePortOfBindOfServerOfWithNodeAdapterConfigurationOfEnvironmentOfSourceFromProcessEnv(
			processEnv,
		);
	const bind: BindOfServerOfWithNodeAdapterConfigurationOfEnvironmentOfSource =
		{address: processEnv.SERVER__BIND__ADDRESS, port: portOfBind};
	return bind;
}
