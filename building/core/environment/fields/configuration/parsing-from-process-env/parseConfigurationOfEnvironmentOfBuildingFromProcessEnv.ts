import type {schemaForProcessEnvOfBuilding} from "../../../../schema-for-process-env/index.ts";
import {
	parseWithNodeAdapterConfigurationOfEnvironmentOfBuildingFromProcessEnv,
	parseWithoutAdapterConfigurationOfEnvironmentOfBuildingFromProcessEnv,
	parseWithStaticAdapterConfigurationOfEnvironmentOfBuildingFromProcessEnv,
	type WithNodeAdapterConfigurationOfEnvironmentOfBuilding,
	type WithoutAdapterConfigurationOfEnvironmentOfBuilding,
	type WithStaticAdapterConfigurationOfEnvironmentOfBuilding,
} from "../implementations/index.ts";
import type {SupportedConfigurationOfEnvironmentOfBuilding} from "../supported/index.ts";
import type {z} from "zod";
export function parseConfigurationOfEnvironmentOfBuildingFromProcessEnv(
	processEnv: z.output<typeof schemaForProcessEnvOfBuilding>,
): SupportedConfigurationOfEnvironmentOfBuilding {
	switch (processEnv.ADAPTER__NAME) {
		case `Node`: {
			const configuration: WithNodeAdapterConfigurationOfEnvironmentOfBuilding =
				parseWithNodeAdapterConfigurationOfEnvironmentOfBuildingFromProcessEnv(
					processEnv,
				);
			return configuration;
		}
		case `static`: {
			const configuration: WithStaticAdapterConfigurationOfEnvironmentOfBuilding =
				parseWithStaticAdapterConfigurationOfEnvironmentOfBuildingFromProcessEnv(
					processEnv,
				);
			return configuration;
		}
		case null: {
			const configuration: WithoutAdapterConfigurationOfEnvironmentOfBuilding =
				parseWithoutAdapterConfigurationOfEnvironmentOfBuildingFromProcessEnv(
					processEnv,
				);
			return configuration;
		}
	}
}
