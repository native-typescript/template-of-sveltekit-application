import type {schemaForProcessEnvOfBuilding} from "../../../../../../schema-for-process-env/index.ts";
import {
	type HostingOfConfigurationOfEnvironmentOfBuilding,
	type NodeAdapterOfConfigurationOfEnvironmentOfBuilding,
	parseHostingOfConfigurationOfEnvironmentOfBuildingFromProcessEnv,
	parseNodeAdapterOfConfigurationOfEnvironmentOfBuildingFromProcessEnv,
} from "../../../fields/index.ts";
import type {WithNodeAdapterConfigurationOfEnvironmentOfBuilding} from "../WithNodeAdapterConfigurationOfEnvironmentOfBuilding.ts";
import type {z} from "zod";
export function parseWithNodeAdapterConfigurationOfEnvironmentOfBuildingFromProcessEnv(
	processEnv: Extract<
		z.output<typeof schemaForProcessEnvOfBuilding>,
		{readonly ADAPTER__NAME: `Node`}
	>,
): WithNodeAdapterConfigurationOfEnvironmentOfBuilding {
	const adapterOfConfiguration: NodeAdapterOfConfigurationOfEnvironmentOfBuilding =
		parseNodeAdapterOfConfigurationOfEnvironmentOfBuildingFromProcessEnv(
			processEnv,
		);
	const hostingOfConfiguration: HostingOfConfigurationOfEnvironmentOfBuilding =
		parseHostingOfConfigurationOfEnvironmentOfBuildingFromProcessEnv(
			processEnv,
		);
	const configuration: WithNodeAdapterConfigurationOfEnvironmentOfBuilding = {
		adapter: adapterOfConfiguration,
		hosting: hostingOfConfiguration,
		type: `withNodeAdapter`,
	};
	return configuration;
}
