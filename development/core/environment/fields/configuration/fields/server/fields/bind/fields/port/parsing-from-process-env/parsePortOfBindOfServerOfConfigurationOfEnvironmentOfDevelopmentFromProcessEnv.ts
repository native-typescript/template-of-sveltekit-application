import type {schemaForProcessEnvOfDevelopment} from "../../../../../../../../../../schema-for-process-env/index.ts";
import {
	parseTlsOfPortOfBindOfServerOfConfigurationOfEnvironmentOfDevelopmentFromProcessEnv,
	type TlsOfPortOfBindOfServerOfConfigurationOfEnvironmentOfDevelopment,
} from "../fields/index.ts";
import type {PortOfBindOfServerOfConfigurationOfEnvironmentOfDevelopment} from "../PortOfBindOfServerOfConfigurationOfEnvironmentOfDevelopment.ts";
import type {z} from "zod";
export function parsePortOfBindOfServerOfConfigurationOfEnvironmentOfDevelopmentFromProcessEnv(
	processEnv: z.output<typeof schemaForProcessEnvOfDevelopment>,
): PortOfBindOfServerOfConfigurationOfEnvironmentOfDevelopment {
	const tlsOfPort: null | TlsOfPortOfBindOfServerOfConfigurationOfEnvironmentOfDevelopment =
		parseTlsOfPortOfBindOfServerOfConfigurationOfEnvironmentOfDevelopmentFromProcessEnv(
			processEnv,
		);
	const port: PortOfBindOfServerOfConfigurationOfEnvironmentOfDevelopment = {
		number: processEnv.SERVER__BIND__PORT__NUMBER,
		tls: tlsOfPort,
	};
	return port;
}
