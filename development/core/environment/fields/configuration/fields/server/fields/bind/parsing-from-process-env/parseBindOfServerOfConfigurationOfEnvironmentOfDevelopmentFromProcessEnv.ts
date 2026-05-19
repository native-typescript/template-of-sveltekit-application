import type {schemaForProcessEnvOfDevelopment} from "../../../../../../../../schema-for-process-env/schemaForProcessEnvOfDevelopment.ts";
import type {BindOfServerOfConfigurationOfEnvironmentOfDevelopment} from "../BindOfServerOfConfigurationOfEnvironmentOfDevelopment.ts";
import {parsePortOfBindOfServerOfConfigurationOfEnvironmentOfDevelopmentFromProcessEnv} from "../fields/port/parsing-from-process-env/parsePortOfBindOfServerOfConfigurationOfEnvironmentOfDevelopmentFromProcessEnv.ts";
import type {PortOfBindOfServerOfConfigurationOfEnvironmentOfDevelopment} from "../fields/port/PortOfBindOfServerOfConfigurationOfEnvironmentOfDevelopment.ts";
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
