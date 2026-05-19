import type {schemaForProcessEnvOfBuilding} from "../../schema-for-process-env/index.ts";
import {
	parseConfigurationOfEnvironmentOfBuildingFromProcessEnv,
	type SupportedConfigurationOfEnvironmentOfBuilding,
} from "../fields/index.ts";
import type {WithoutAdapterEnvironmentOfBuilding} from "../implementations/index.ts";
import type {SupportedEnvironmentOfBuilding} from "../supported/index.ts";
import type {z} from "zod";
export function createEnvironmentOfBuildingFromProcessEnv(
	processEnv: z.output<typeof schemaForProcessEnvOfBuilding>,
): SupportedEnvironmentOfBuilding {
	const configurationOfEnvironment: SupportedConfigurationOfEnvironmentOfBuilding =
		parseConfigurationOfEnvironmentOfBuildingFromProcessEnv(processEnv);
	switch (configurationOfEnvironment.type) {
		/* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition */
		case `withoutAdapter`: {
			const adapter = null;
			const environment: WithoutAdapterEnvironmentOfBuilding = {
				adapter: adapter,
				configuration: configurationOfEnvironment,
				type: `withoutAdapter`,
			};
			return environment;
		}
	}
}
