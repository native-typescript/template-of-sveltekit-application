import type {schemaForProcessEnvOfBuilding} from "../../../../../../schema-for-process-env/schemaForProcessEnvOfBuilding.ts";
import type {WithStaticAdapterConfigurationOfEnvironmentOfBuilding} from "../WithStaticAdapterConfigurationOfEnvironmentOfBuilding.ts";
import type {z} from "zod";
export function parseWithStaticAdapterConfigurationOfEnvironmentOfBuildingFromProcessEnv(
	processEnv: Extract<
		z.output<typeof schemaForProcessEnvOfBuilding>,
		{readonly ADAPTER__NAME: `static`}
	>,
): WithStaticAdapterConfigurationOfEnvironmentOfBuilding {
	const configuration: WithStaticAdapterConfigurationOfEnvironmentOfBuilding = {
		adapter: {id: `static`},
		hosting: {basePath: processEnv.HOSTING__BASE_PATH},
	};
	return configuration;
}
