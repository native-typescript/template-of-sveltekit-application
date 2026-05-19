import type {schemaForProcessEnvOfDevelopment} from "../../../../../../schema-for-process-env/schemaForProcessEnvOfDevelopment.ts";
import type {BindOfServerOfConfigurationOfEnvironmentOfDevelopment} from "../fields/bind/BindOfServerOfConfigurationOfEnvironmentOfDevelopment.ts";
import {parseBindOfServerOfConfigurationOfEnvironmentOfDevelopmentFromProcessEnv} from "../fields/bind/parsing-from-process-env/parseBindOfServerOfConfigurationOfEnvironmentOfDevelopmentFromProcessEnv.ts";
import type {ServerOfConfigurationOfEnvironmentOfDevelopment} from "../ServerOfConfigurationOfEnvironmentOfDevelopment.ts";
import type {z} from "zod";
export function parseServerOfConfigurationOfEnvironmentOfDevelopmentFromProcessEnv(
	processEnv: z.output<typeof schemaForProcessEnvOfDevelopment>,
): ServerOfConfigurationOfEnvironmentOfDevelopment {
	const bindOfServer: BindOfServerOfConfigurationOfEnvironmentOfDevelopment =
		parseBindOfServerOfConfigurationOfEnvironmentOfDevelopmentFromProcessEnv(
			processEnv,
		);
	const server: ServerOfConfigurationOfEnvironmentOfDevelopment = {
		bind: bindOfServer,
	};
	return server;
}
