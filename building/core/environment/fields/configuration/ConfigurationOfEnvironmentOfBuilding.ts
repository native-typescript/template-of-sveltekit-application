import type {AdapterOfConfigurationOfEnvironmentOfBuilding} from "./fields/adapter/AdapterOfConfigurationOfEnvironmentOfBuilding.ts";
import type {HostingOfConfigurationOfEnvironmentOfBuilding} from "./fields/hosting/HostingOfConfigurationOfEnvironmentOfBuilding.ts";
export type ConfigurationOfEnvironmentOfBuilding<
	AdapterToUse extends AdapterOfConfigurationOfEnvironmentOfBuilding<string>,
> = {
	readonly adapter: AdapterToUse;
	readonly hosting: HostingOfConfigurationOfEnvironmentOfBuilding;
};
