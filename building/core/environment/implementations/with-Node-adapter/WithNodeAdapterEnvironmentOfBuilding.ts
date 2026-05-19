import type {EnvironmentOfBuilding} from "../../EnvironmentOfBuilding.ts";
import type {WithNodeAdapterConfigurationOfEnvironmentOfBuilding} from "../../fields/index.ts";
import type {Adapter} from "@sveltejs/kit";
export type WithNodeAdapterEnvironmentOfBuilding = EnvironmentOfBuilding<
	Adapter,
	WithNodeAdapterConfigurationOfEnvironmentOfBuilding,
	`withNodeAdapter`
>;
