import type {
	AdapterOfConfigurationOfEnvironmentOfBuilding,
	HostingOfConfigurationOfEnvironmentOfBuilding,
} from "./fields/index.ts";
export type ConfigurationOfEnvironmentOfBuilding<
	AdapterToUse extends AdapterOfConfigurationOfEnvironmentOfBuilding<string>,
	TypeToUse extends string,
> = {
	readonly adapter: AdapterToUse;
	readonly hosting: HostingOfConfigurationOfEnvironmentOfBuilding;
	readonly type: TypeToUse;
};
