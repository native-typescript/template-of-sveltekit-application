import type {WithNodeAdapterEnvironmentOfBuilding} from "../implementations/with-Node-adapter/WithNodeAdapterEnvironmentOfBuilding.ts";
import type {WithStaticAdapterEnvironmentOfBuilding} from "../implementations/with-static-adapter/WithStaticAdapterEnvironmentOfBuilding.ts";
export type SupportedEnvironmentOfBuilding =
	| WithNodeAdapterEnvironmentOfBuilding
	| WithStaticAdapterEnvironmentOfBuilding;
