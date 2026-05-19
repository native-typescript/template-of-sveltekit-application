import type {schemaForProcessEnvOfDevelopment} from "../../../../../../../../../../schema-for-process-env/schemaForProcessEnvOfDevelopment.ts";
import {parseTlsOfPortOfBindOfServerOfConfigurationOfEnvironmentOfDevelopmentFromProcessEnv} from "../fields/tls/parsing-from-process-env/parseTlsOfPortOfBindOfServerOfConfigurationOfEnvironmentOfDevelopmentFromProcessEnv.ts";
import type {TlsOfPortOfBindOfServerOfConfigurationOfEnvironmentOfDevelopment} from "../fields/tls/TlsOfPortOfBindOfServerOfConfigurationOfEnvironmentOfDevelopment.ts";
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
