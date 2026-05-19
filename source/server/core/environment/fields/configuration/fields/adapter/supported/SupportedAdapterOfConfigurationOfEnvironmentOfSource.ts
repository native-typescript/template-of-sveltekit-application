import type {NodeAdapterOfConfigurationOfEnvironmentOfSource} from "../implementations/node/NodeAdapterOfConfigurationOfEnvironmentOfSource.ts";
import type {StaticAdapterOfConfigurationOfEnvironmentOfSource} from "../implementations/static/StaticAdapterOfConfigurationOfEnvironmentOfSource.ts";
export type SupportedAdapterOfConfigurationOfEnvironmentOfSource =
	| NodeAdapterOfConfigurationOfEnvironmentOfSource
	| null
	| StaticAdapterOfConfigurationOfEnvironmentOfSource;
