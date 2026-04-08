import type {
	WithNodeAdapterEnvironmentOfBuilding,
	WithStaticAdapterEnvironmentOfBuilding,
} from "../implementations/index.ts";
export type SupportedEnvironmentOfBuilding =
	| WithNodeAdapterEnvironmentOfBuilding
	| WithStaticAdapterEnvironmentOfBuilding;
