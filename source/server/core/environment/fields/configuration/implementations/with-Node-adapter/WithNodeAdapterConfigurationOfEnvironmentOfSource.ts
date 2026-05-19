import type {ConfigurationOfEnvironmentOfSource} from "../../ConfigurationOfEnvironmentOfSource.ts";
import type {NodeAdapterOfConfigurationOfEnvironmentOfSource} from "../../fields/index.ts";
import type {ServerOfWithNodeAdapterConfigurationOfEnvironmentOfSource} from "./fields/index.ts";
export type WithNodeAdapterConfigurationOfEnvironmentOfSource =
	ConfigurationOfEnvironmentOfSource<
		NodeAdapterOfConfigurationOfEnvironmentOfSource,
		`withNodeAdapter`
	> & {
		readonly server: ServerOfWithNodeAdapterConfigurationOfEnvironmentOfSource;
	};
