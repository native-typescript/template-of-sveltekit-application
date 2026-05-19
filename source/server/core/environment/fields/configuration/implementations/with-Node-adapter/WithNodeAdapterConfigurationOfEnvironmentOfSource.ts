import type {ConfigurationOfEnvironmentOfSource} from "../../ConfigurationOfEnvironmentOfSource.ts";
import type {NodeAdapterOfConfigurationOfEnvironmentOfSource} from "../../fields/adapter/implementations/node/NodeAdapterOfConfigurationOfEnvironmentOfSource.ts";
import type {ServerOfWithNodeAdapterConfigurationOfEnvironmentOfSource} from "./fields/server/ServerOfWithNodeAdapterConfigurationOfEnvironmentOfSource.ts";
export type WithNodeAdapterConfigurationOfEnvironmentOfSource =
	ConfigurationOfEnvironmentOfSource<NodeAdapterOfConfigurationOfEnvironmentOfSource> & {
		readonly server: ServerOfWithNodeAdapterConfigurationOfEnvironmentOfSource;
	};
