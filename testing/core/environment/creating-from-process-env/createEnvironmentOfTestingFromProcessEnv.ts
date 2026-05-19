import type {schemaForProcessEnvOfTesting} from "../../schema-for-process-env/schemaForProcessEnvOfTesting.ts";
import type {EnvironmentOfTesting} from "../EnvironmentOfTesting.ts";
import type {ConfigurationOfEnvironmentOfTesting} from "../fields/configuration/ConfigurationOfEnvironmentOfTesting.ts";
import {parseConfigurationOfEnvironmentOfTestingFromProcessEnv} from "../fields/configuration/parsing-from-process-env/parseConfigurationOfEnvironmentOfTestingFromProcessEnv.ts";
import type {z} from "zod";
export function createEnvironmentOfTestingFromProcessEnv(
	processEnv: z.output<typeof schemaForProcessEnvOfTesting>,
): EnvironmentOfTesting {
	const configurationOfEnvironment: ConfigurationOfEnvironmentOfTesting =
		parseConfigurationOfEnvironmentOfTestingFromProcessEnv(processEnv);
	const environment: EnvironmentOfTesting = {
		configuration: configurationOfEnvironment,
	};
	return environment;
}
