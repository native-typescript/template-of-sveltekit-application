import type {schemaForProcessEnvOfSource} from "../../../../../../../../../../schema-for-process-env/index.ts";
import type {BindOfServerOfWithNodeAdapterConfigurationOfEnvironmentOfSource} from "../BindOfServerOfWithNodeAdapterConfigurationOfEnvironmentOfSource.ts";
import {
	parsePortOfBindOfServerOfWithNodeAdapterConfigurationOfEnvironmentOfSourceFromProcessEnv,
	type PortOfBindOfServerOfWithNodeAdapterConfigurationOfEnvironmentOfSource,
} from "../fields/index.ts";
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
