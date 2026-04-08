import type {
	WithNodeAdapterConfigurationOfEnvironmentOfBuilding,
	WithStaticAdapterConfigurationOfEnvironmentOfBuilding,
} from "../implementations/index.ts";
export type SupportedConfigurationOfEnvironmentOfBuilding =
	| WithNodeAdapterConfigurationOfEnvironmentOfBuilding
	| WithStaticAdapterConfigurationOfEnvironmentOfBuilding;
