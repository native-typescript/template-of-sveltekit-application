import type {
	NodeAdapterOfConfigurationOfEnvironmentOfBuilding,
	StaticAdapterOfConfigurationOfEnvironmentOfBuilding,
} from "../implementations/index.ts";
export type SupportedAdapterOfConfigurationOfEnvironmentOfBuilding =
	| NodeAdapterOfConfigurationOfEnvironmentOfBuilding
	| StaticAdapterOfConfigurationOfEnvironmentOfBuilding;
