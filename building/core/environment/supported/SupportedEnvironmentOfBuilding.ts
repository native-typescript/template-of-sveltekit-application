import type {
	WithNodeAdapterEnvironmentOfBuilding,
	WithoutAdapterEnvironmentOfBuilding,
	WithStaticAdapterEnvironmentOfBuilding,
} from "../implementations/index.ts";
export type SupportedEnvironmentOfBuilding =
	| WithNodeAdapterEnvironmentOfBuilding
	| WithoutAdapterEnvironmentOfBuilding
	| WithStaticAdapterEnvironmentOfBuilding;
