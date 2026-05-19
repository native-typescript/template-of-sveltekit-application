import type {schemaForProcessEnvOfDevelopment} from "../../../../../../../../schema-for-process-env/index.ts";
import type {BindOfServerOfConfigurationOfEnvironmentOfDevelopment} from "../BindOfServerOfConfigurationOfEnvironmentOfDevelopment.ts";
import {
	parsePortOfBindOfServerOfConfigurationOfEnvironmentOfDevelopmentFromProcessEnv,
	type PortOfBindOfServerOfConfigurationOfEnvironmentOfDevelopment,
} from "../fields/index.ts";
import type {z} from "zod";
export function parseBindOfServerOfConfigurationOfEnvironmentOfDevelopmentFromProcessEnv(
	processEnv: z.output<typeof schemaForProcessEnvOfDevelopment>,
): BindOfServerOfConfigurationOfEnvironmentOfDevelopment {
	const portOfBind: PortOfBindOfServerOfConfigurationOfEnvironmentOfDevelopment =
		parsePortOfBindOfServerOfConfigurationOfEnvironmentOfDevelopmentFromProcessEnv(
			processEnv,
		);
	const bind: BindOfServerOfConfigurationOfEnvironmentOfDevelopment = {
		address: processEnv.SERVER__BIND__ADDRESS,
		port: portOfBind,
	};
	return bind;
}
