import type {schemaForProcessEnvOfBuilding} from "../../../../../../schema-for-process-env/index.ts";
import {
	type HostingOfConfigurationOfEnvironmentOfBuilding,
	parseHostingOfConfigurationOfEnvironmentOfBuildingFromProcessEnv,
	parseStaticAdapterOfConfigurationOfEnvironmentOfBuildingFromProcessEnv,
	type StaticAdapterOfConfigurationOfEnvironmentOfBuilding,
} from "../../../fields/index.ts";
import type {WithStaticAdapterConfigurationOfEnvironmentOfBuilding} from "../WithStaticAdapterConfigurationOfEnvironmentOfBuilding.ts";
import type {z} from "zod";
export function parseWithStaticAdapterConfigurationOfEnvironmentOfBuildingFromProcessEnv(
	processEnv: Extract<
		z.output<typeof schemaForProcessEnvOfBuilding>,
		{readonly ADAPTER__NAME: `static`}
	>,
): WithStaticAdapterConfigurationOfEnvironmentOfBuilding {
	const adapterOfConfiguration: StaticAdapterOfConfigurationOfEnvironmentOfBuilding =
		parseStaticAdapterOfConfigurationOfEnvironmentOfBuildingFromProcessEnv(
			processEnv,
		);
	const hostingOfConfiguration: HostingOfConfigurationOfEnvironmentOfBuilding =
		parseHostingOfConfigurationOfEnvironmentOfBuildingFromProcessEnv(
			processEnv,
		);
	const configuration: WithStaticAdapterConfigurationOfEnvironmentOfBuilding = {
		adapter: adapterOfConfiguration,
		hosting: hostingOfConfiguration,
		type: `withStaticAdapter`,
	};
	return configuration;
}
