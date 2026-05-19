import type {schemaForProcessEnvOfDevelopment} from "../../../../schema-for-process-env/index.ts";
import type {ConfigurationOfEnvironmentOfDevelopment} from "../ConfigurationOfEnvironmentOfDevelopment.ts";
import {
	parseServerOfConfigurationOfEnvironmentOfDevelopmentFromProcessEnv,
	type ServerOfConfigurationOfEnvironmentOfDevelopment,
} from "../fields/index.ts";
import type {z} from "zod";
export function parseConfigurationOfEnvironmentOfDevelopmentFromProcessEnv(
	processEnv: z.output<typeof schemaForProcessEnvOfDevelopment>,
): ConfigurationOfEnvironmentOfDevelopment {
	const serverOfConfigurationOfEnvironment: ServerOfConfigurationOfEnvironmentOfDevelopment =
		parseServerOfConfigurationOfEnvironmentOfDevelopmentFromProcessEnv(
			processEnv,
		);
	const configuration: ConfigurationOfEnvironmentOfDevelopment = {
		server: serverOfConfigurationOfEnvironment,
	};
	return configuration;
}
