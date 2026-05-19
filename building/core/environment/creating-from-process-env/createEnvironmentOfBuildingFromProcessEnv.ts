import type {schemaForProcessEnvOfBuilding} from "../../schema-for-process-env/index.ts";
import {
	parseConfigurationOfEnvironmentOfBuildingFromProcessEnv,
	type SupportedConfigurationOfEnvironmentOfBuilding,
} from "../fields/index.ts";
import type {
	WithNodeAdapterEnvironmentOfBuilding,
	WithoutAdapterEnvironmentOfBuilding,
	WithStaticAdapterEnvironmentOfBuilding,
} from "../implementations/index.ts";
import type {SupportedEnvironmentOfBuilding} from "../supported/index.ts";
import createNodeAdapter from "@sveltejs/adapter-node";
import createStaticAdapter from "@sveltejs/adapter-static";
import type {z} from "zod";
export function createEnvironmentOfBuildingFromProcessEnv(
	processEnv: z.output<typeof schemaForProcessEnvOfBuilding>,
): SupportedEnvironmentOfBuilding {
	const configurationOfEnvironment: SupportedConfigurationOfEnvironmentOfBuilding =
		parseConfigurationOfEnvironmentOfBuildingFromProcessEnv(processEnv);
	switch (configurationOfEnvironment.type) {
		case `withNodeAdapter`: {
			const adapter = createNodeAdapter({});
			const environment: WithNodeAdapterEnvironmentOfBuilding = {
				adapter: adapter,
				configuration: configurationOfEnvironment,
				type: `withNodeAdapter`,
			};
			return environment;
		}
		case `withoutAdapter`: {
			const adapter = null;
			const environment: WithoutAdapterEnvironmentOfBuilding = {
				adapter: adapter,
				configuration: configurationOfEnvironment,
				type: `withoutAdapter`,
			};
			return environment;
		}
		case `withStaticAdapter`: {
			const adapter = createStaticAdapter({});
			const environment: WithStaticAdapterEnvironmentOfBuilding = {
				adapter: adapter,
				configuration: configurationOfEnvironment,
				type: `withStaticAdapter`,
			};
			return environment;
		}
	}
}
