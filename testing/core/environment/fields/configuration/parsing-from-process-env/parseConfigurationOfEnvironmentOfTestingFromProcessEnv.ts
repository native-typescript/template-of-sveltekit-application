import type {schemaForProcessEnvOfTesting} from "../../../../schema-for-process-env/schemaForProcessEnvOfTesting.ts";
import type {ConfigurationOfEnvironmentOfTesting} from "../ConfigurationOfEnvironmentOfTesting.ts";
import type {DebianOfConfigurationOfEnvironmentOfTesting} from "../fields/Debian/DebianOfConfigurationOfEnvironmentOfTesting.ts";
import {parseDebianOfConfigurationOfEnvironmentOfTestingFromProcessEnv} from "../fields/Debian/parsing-from-process-env/parseDebianOfConfigurationOfEnvironmentOfTestingFromProcessEnv.ts";
import type {NodeJsOfConfigurationOfEnvironmentOfTesting} from "../fields/Node.js/NodeJsOfConfigurationOfEnvironmentOfTesting.ts";
import {parseNodeJsOfConfigurationOfEnvironmentOfTestingFromProcessEnv} from "../fields/Node.js/parsing-from-process-env/parseNodeJsOfConfigurationOfEnvironmentOfTestingFromProcessEnv.ts";
import type {z} from "zod";
export function parseConfigurationOfEnvironmentOfTestingFromProcessEnv(
	processEnv: z.output<typeof schemaForProcessEnvOfTesting>,
): ConfigurationOfEnvironmentOfTesting {
	const debianOfConfiguration: DebianOfConfigurationOfEnvironmentOfTesting =
		parseDebianOfConfigurationOfEnvironmentOfTestingFromProcessEnv(processEnv);
	const nodeJsOfConfiguration: NodeJsOfConfigurationOfEnvironmentOfTesting =
		parseNodeJsOfConfigurationOfEnvironmentOfTestingFromProcessEnv(processEnv);
	const configuration: ConfigurationOfEnvironmentOfTesting = {
		debian: debianOfConfiguration,
		nodeJs: nodeJsOfConfiguration,
	};
	return configuration;
}
