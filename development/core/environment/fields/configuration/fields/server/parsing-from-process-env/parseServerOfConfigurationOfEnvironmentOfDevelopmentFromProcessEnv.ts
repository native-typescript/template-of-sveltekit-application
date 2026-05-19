import type {schemaForProcessEnvOfDevelopment} from "../../../../../../schema-for-process-env/index.ts";
import {
	type BindOfServerOfConfigurationOfEnvironmentOfDevelopment,
	parseBindOfServerOfConfigurationOfEnvironmentOfDevelopmentFromProcessEnv,
} from "../fields/index.ts";
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
