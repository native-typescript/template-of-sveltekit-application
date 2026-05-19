import type {schemaForProcessEnvOfDevelopment} from "../../schema-for-process-env/index.ts";
import type {EnvironmentOfDevelopment} from "../EnvironmentOfDevelopment.ts";
import {
	type ConfigurationOfEnvironmentOfDevelopment,
	parseConfigurationOfEnvironmentOfDevelopmentFromProcessEnv,
} from "../fields/index.ts";
import type {z} from "zod";
export function createEnvironmentOfDevelopmentFromProcessEnv(
	processEnv: z.output<typeof schemaForProcessEnvOfDevelopment>,
): EnvironmentOfDevelopment {
	const configurationOfEnvironment: ConfigurationOfEnvironmentOfDevelopment =
		parseConfigurationOfEnvironmentOfDevelopmentFromProcessEnv(processEnv);
	const environment: EnvironmentOfDevelopment = {
		configuration: configurationOfEnvironment,
	};
	return environment;
}
