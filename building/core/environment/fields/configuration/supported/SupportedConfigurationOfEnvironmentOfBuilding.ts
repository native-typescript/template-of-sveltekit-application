import type {
	WithNodeAdapterConfigurationOfEnvironmentOfBuilding,
	WithoutAdapterConfigurationOfEnvironmentOfBuilding,
} from "../implementations/index.ts";
export type SupportedConfigurationOfEnvironmentOfBuilding =
	| WithNodeAdapterConfigurationOfEnvironmentOfBuilding
	| WithoutAdapterConfigurationOfEnvironmentOfBuilding;
