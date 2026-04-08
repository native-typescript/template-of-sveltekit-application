import type {
	WithNodeAdapterConfigurationOfEnvironmentOfSource,
	WithStaticAdapterConfigurationOfEnvironmentOfSource,
} from "../implementations/index.ts";
export type SupportedConfigurationOfEnvironmentOfSource =
	| WithNodeAdapterConfigurationOfEnvironmentOfSource
	| WithStaticAdapterConfigurationOfEnvironmentOfSource;
