import type {schemaForProcessEnvOfBuilding} from "../../../../../../schema-for-process-env/index.ts";
import type {HostingOfConfigurationOfEnvironmentOfBuilding} from "../HostingOfConfigurationOfEnvironmentOfBuilding.ts";
import type {z} from "zod";
export function parseHostingOfConfigurationOfEnvironmentOfBuildingFromProcessEnv(
	processEnv: z.output<typeof schemaForProcessEnvOfBuilding>,
): HostingOfConfigurationOfEnvironmentOfBuilding {
	const hosting: HostingOfConfigurationOfEnvironmentOfBuilding = {
		basePath: processEnv.HOSTING__BASE_PATH,
	};
	return hosting;
}
