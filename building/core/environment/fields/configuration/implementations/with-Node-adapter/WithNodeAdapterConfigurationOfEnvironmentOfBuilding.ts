import type {ConfigurationOfEnvironmentOfBuilding} from "../../ConfigurationOfEnvironmentOfBuilding.ts";
import type {NodeAdapterOfConfigurationOfEnvironmentOfBuilding} from "../../fields/index.ts";
export type WithNodeAdapterConfigurationOfEnvironmentOfBuilding =
	ConfigurationOfEnvironmentOfBuilding<
		NodeAdapterOfConfigurationOfEnvironmentOfBuilding,
		`withNodeAdapter`
	>;
