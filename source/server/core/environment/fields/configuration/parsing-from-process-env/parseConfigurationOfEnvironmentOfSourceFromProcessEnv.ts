import type {schemaForProcessEnvOfSource} from "../../../../schema-for-process-env/index.ts";
import {
	parseWithNodeAdapterConfigurationOfEnvironmentOfSourceFromProcessEnv,
	parseWithoutAdapterConfigurationOfEnvironmentOfSourceFromProcessEnv,
	parseWithStaticAdapterConfigurationOfEnvironmentOfSourceFromProcessEnv,
	type WithNodeAdapterConfigurationOfEnvironmentOfSource,
	type WithoutAdapterConfigurationOfEnvironmentOfSource,
	type WithStaticAdapterConfigurationOfEnvironmentOfSource,
} from "../implementations/index.ts";
import type {SupportedConfigurationOfEnvironmentOfSource} from "../supported/index.ts";
import type {z} from "zod";
export function parseConfigurationOfEnvironmentOfSourceFromProcessEnv(
	processEnv: z.output<typeof schemaForProcessEnvOfSource>,
): SupportedConfigurationOfEnvironmentOfSource {
	switch (processEnv.ADAPTER__NAME) {
		case `Node`: {
			const configuration: WithNodeAdapterConfigurationOfEnvironmentOfSource =
				parseWithNodeAdapterConfigurationOfEnvironmentOfSourceFromProcessEnv(
					processEnv,
				);
			return configuration;
		}
		case `static`: {
			const configuration: WithStaticAdapterConfigurationOfEnvironmentOfSource =
				parseWithStaticAdapterConfigurationOfEnvironmentOfSourceFromProcessEnv(
					processEnv,
				);
			return configuration;
		}
		case null: {
			const configuration: WithoutAdapterConfigurationOfEnvironmentOfSource =
				parseWithoutAdapterConfigurationOfEnvironmentOfSourceFromProcessEnv(
					processEnv,
				);
			return configuration;
		}
	}
}
