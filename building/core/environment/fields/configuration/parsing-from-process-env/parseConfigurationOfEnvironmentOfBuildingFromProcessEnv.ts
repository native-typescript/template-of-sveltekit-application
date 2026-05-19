import type {schemaForProcessEnvOfBuilding} from "../../../../schema-for-process-env/index.ts";
import {
	parseWithoutAdapterConfigurationOfEnvironmentOfBuildingFromProcessEnv,
	type WithoutAdapterConfigurationOfEnvironmentOfBuilding,
} from "../implementations/index.ts";
import type {SupportedConfigurationOfEnvironmentOfBuilding} from "../supported/index.ts";
import type {z} from "zod";
export function parseConfigurationOfEnvironmentOfBuildingFromProcessEnv(
	processEnv: z.output<typeof schemaForProcessEnvOfBuilding>,
): SupportedConfigurationOfEnvironmentOfBuilding {
	switch (processEnv.ADAPTER__NAME) {
		/* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition */
		case null: {
			const configuration: WithoutAdapterConfigurationOfEnvironmentOfBuilding =
				parseWithoutAdapterConfigurationOfEnvironmentOfBuildingFromProcessEnv(
					processEnv,
				);
			return configuration;
		}
	}
}
