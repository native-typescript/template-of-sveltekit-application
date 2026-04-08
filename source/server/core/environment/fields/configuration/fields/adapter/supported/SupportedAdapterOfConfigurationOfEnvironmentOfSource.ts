import type {
	NodeAdapterOfConfigurationOfEnvironmentOfSource,
	StaticAdapterOfConfigurationOfEnvironmentOfSource,
} from "../implementations/index.ts";
export type SupportedAdapterOfConfigurationOfEnvironmentOfSource =
	| NodeAdapterOfConfigurationOfEnvironmentOfSource
	| StaticAdapterOfConfigurationOfEnvironmentOfSource;
