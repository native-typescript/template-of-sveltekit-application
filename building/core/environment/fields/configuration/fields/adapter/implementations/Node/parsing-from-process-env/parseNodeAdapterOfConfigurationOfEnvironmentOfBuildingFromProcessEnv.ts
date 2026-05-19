import type {schemaForProcessEnvOfBuilding} from "../../../../../../../../schema-for-process-env/index.ts";
import type {NodeAdapterOfConfigurationOfEnvironmentOfBuilding} from "../NodeAdapterOfConfigurationOfEnvironmentOfBuilding.ts";
import type {z} from "zod";
export function parseNodeAdapterOfConfigurationOfEnvironmentOfBuildingFromProcessEnv(
	processEnv: Extract<
		z.output<typeof schemaForProcessEnvOfBuilding>,
		{readonly ADAPTER__NAME: `Node`}
	>,
): NodeAdapterOfConfigurationOfEnvironmentOfBuilding {
	const adapter: NodeAdapterOfConfigurationOfEnvironmentOfBuilding = {
		id: `node`,
	};
	return adapter;
}
