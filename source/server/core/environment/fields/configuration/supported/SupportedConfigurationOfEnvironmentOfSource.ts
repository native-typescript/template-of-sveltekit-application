import type {
	WithNodeAdapterConfigurationOfEnvironmentOfSource,
	WithoutAdapterConfigurationOfEnvironmentOfSource,
} from "../implementations/index.ts";
export type SupportedConfigurationOfEnvironmentOfSource =
	| WithNodeAdapterConfigurationOfEnvironmentOfSource
	| WithoutAdapterConfigurationOfEnvironmentOfSource;
