import type {schemaForProcessEnvOfSource} from "../../../../schema-for-process-env/index.ts";
import {
	parseWithoutAdapterConfigurationOfEnvironmentOfSourceFromProcessEnv,
	type WithoutAdapterConfigurationOfEnvironmentOfSource,
} from "../implementations/index.ts";
import type {SupportedConfigurationOfEnvironmentOfSource} from "../supported/index.ts";
import type {z} from "zod";
export function parseConfigurationOfEnvironmentOfSourceFromProcessEnv(
	processEnv: z.output<typeof schemaForProcessEnvOfSource>,
): SupportedConfigurationOfEnvironmentOfSource {
	switch (processEnv.ADAPTER__NAME) {
		/* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition */
		case null: {
			const configuration: WithoutAdapterConfigurationOfEnvironmentOfSource =
				parseWithoutAdapterConfigurationOfEnvironmentOfSourceFromProcessEnv(
					processEnv,
				);
			return configuration;
		}
	}
}
