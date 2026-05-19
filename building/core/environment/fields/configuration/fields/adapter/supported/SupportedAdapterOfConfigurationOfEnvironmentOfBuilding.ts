import type {NodeAdapterOfConfigurationOfEnvironmentOfBuilding} from "../implementations/Node/NodeAdapterOfConfigurationOfEnvironmentOfBuilding.ts";
import type {StaticAdapterOfConfigurationOfEnvironmentOfBuilding} from "../implementations/static/StaticAdapterOfConfigurationOfEnvironmentOfBuilding.ts";
export type SupportedAdapterOfConfigurationOfEnvironmentOfBuilding =
	| NodeAdapterOfConfigurationOfEnvironmentOfBuilding
	| null
	| StaticAdapterOfConfigurationOfEnvironmentOfBuilding;
