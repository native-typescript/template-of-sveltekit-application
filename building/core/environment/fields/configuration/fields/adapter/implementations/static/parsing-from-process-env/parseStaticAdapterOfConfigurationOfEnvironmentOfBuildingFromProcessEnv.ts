import type {schemaForProcessEnvOfBuilding} from "../../../../../../../../schema-for-process-env/index.ts";
import type {StaticAdapterOfConfigurationOfEnvironmentOfBuilding} from "../StaticAdapterOfConfigurationOfEnvironmentOfBuilding.ts";
import type {z} from "zod";
export function parseStaticAdapterOfConfigurationOfEnvironmentOfBuildingFromProcessEnv(
	processEnv: Extract<
		z.output<typeof schemaForProcessEnvOfBuilding>,
		{readonly ADAPTER__NAME: `static`}
	>,
): StaticAdapterOfConfigurationOfEnvironmentOfBuilding {
	const adapter: StaticAdapterOfConfigurationOfEnvironmentOfBuilding = {
		id: `static`,
	};
	return adapter;
}
