import type {EnvironmentOfBuilding} from "../../EnvironmentOfBuilding.ts";
import type {WithStaticAdapterConfigurationOfEnvironmentOfBuilding} from "../../fields/configuration/implementations/with-static-adapter/WithStaticAdapterConfigurationOfEnvironmentOfBuilding.ts";
import type {Adapter} from "@sveltejs/kit";
export type WithStaticAdapterEnvironmentOfBuilding = EnvironmentOfBuilding<
	Adapter,
	WithStaticAdapterConfigurationOfEnvironmentOfBuilding,
	`withStaticAdapter`
>;
