import type {EnvironmentOfBuilding} from "../../EnvironmentOfBuilding.ts";
import type {WithNodeAdapterConfigurationOfEnvironmentOfBuilding} from "../../fields/configuration/implementations/with-Node-adapter/WithNodeAdapterConfigurationOfEnvironmentOfBuilding.ts";
import type {Adapter} from "@sveltejs/kit";
export type WithNodeAdapterEnvironmentOfBuilding = EnvironmentOfBuilding<
	Adapter,
	WithNodeAdapterConfigurationOfEnvironmentOfBuilding,
	`withNodeAdapter`
>;
