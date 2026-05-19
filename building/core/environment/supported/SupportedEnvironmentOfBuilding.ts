import type {
	WithNodeAdapterEnvironmentOfBuilding,
	WithoutAdapterEnvironmentOfBuilding,
} from "../implementations/index.ts";
export type SupportedEnvironmentOfBuilding =
	| WithNodeAdapterEnvironmentOfBuilding
	| WithoutAdapterEnvironmentOfBuilding;
