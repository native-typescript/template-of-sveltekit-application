import type {DebianOfConfigurationOfEnvironmentOfTesting} from "./fields/Debian/DebianOfConfigurationOfEnvironmentOfTesting.ts";
import type {NodeJsOfConfigurationOfEnvironmentOfTesting} from "./fields/Node.js/NodeJsOfConfigurationOfEnvironmentOfTesting.ts";
export type ConfigurationOfEnvironmentOfTesting = {
	readonly debian: DebianOfConfigurationOfEnvironmentOfTesting;
	readonly nodeJs: NodeJsOfConfigurationOfEnvironmentOfTesting;
};
