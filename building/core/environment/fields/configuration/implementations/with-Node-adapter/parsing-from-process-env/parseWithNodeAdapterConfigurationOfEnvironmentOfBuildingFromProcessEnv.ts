import type {schemaForProcessEnvOfBuilding} from "../../../../../../schema-for-process-env/schemaForProcessEnvOfBuilding.ts";
import type {WithNodeAdapterConfigurationOfEnvironmentOfBuilding} from "../WithNodeAdapterConfigurationOfEnvironmentOfBuilding.ts";
import type {z} from "zod";
export function parseWithNodeAdapterConfigurationOfEnvironmentOfBuildingFromProcessEnv(
	processEnv: Extract<
		z.output<typeof schemaForProcessEnvOfBuilding>,
		{readonly ADAPTER__NAME: `Node`}
	>,
): WithNodeAdapterConfigurationOfEnvironmentOfBuilding {
	const configuration: WithNodeAdapterConfigurationOfEnvironmentOfBuilding = {
		adapter: {id: `node`},
		hosting: {basePath: processEnv.HOSTING__BASE_PATH},
	};
	return configuration;
}
