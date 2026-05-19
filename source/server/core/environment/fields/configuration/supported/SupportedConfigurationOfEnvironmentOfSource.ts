import type {
	WithNodeAdapterConfigurationOfEnvironmentOfSource,
	WithoutAdapterConfigurationOfEnvironmentOfSource,
	WithStaticAdapterConfigurationOfEnvironmentOfSource,
} from "../implementations/index.ts";
export type SupportedConfigurationOfEnvironmentOfSource =
	| WithNodeAdapterConfigurationOfEnvironmentOfSource
	| WithoutAdapterConfigurationOfEnvironmentOfSource
	| WithStaticAdapterConfigurationOfEnvironmentOfSource;
