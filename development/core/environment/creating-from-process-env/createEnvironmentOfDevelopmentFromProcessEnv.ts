import type {schemaForProcessEnvOfDevelopment} from "../../schema-for-process-env/schemaForProcessEnvOfDevelopment.ts";
import type {EnvironmentOfDevelopment} from "../EnvironmentOfDevelopment.ts";
import {parseServerOfConfigurationOfEnvironmentOfDevelopmentFromProcessEnv} from "../fields/configuration/fields/server/parsing-from-process-env/parseServerOfConfigurationOfEnvironmentOfDevelopmentFromProcessEnv.ts";
import type {ServerOfConfigurationOfEnvironmentOfDevelopment} from "../fields/configuration/fields/server/ServerOfConfigurationOfEnvironmentOfDevelopment.ts";
import type {z} from "zod";
export function createEnvironmentOfDevelopmentFromProcessEnv(
	processEnv: z.output<typeof schemaForProcessEnvOfDevelopment>,
): EnvironmentOfDevelopment {
	const serverOfConfigurationOfEnvironment: ServerOfConfigurationOfEnvironmentOfDevelopment =
		parseServerOfConfigurationOfEnvironmentOfDevelopmentFromProcessEnv(
			processEnv,
		);
	const environment: EnvironmentOfDevelopment = {
		configuration: {server: serverOfConfigurationOfEnvironment},
	};
	return environment;
}
