import type {schemaForProcessEnvOfDevelopment} from "../../../../../../../../../../../../schema-for-process-env/schemaForProcessEnvOfDevelopment.ts";
import type {TlsOfPortOfBindOfServerOfConfigurationOfEnvironmentOfDevelopment} from "../TlsOfPortOfBindOfServerOfConfigurationOfEnvironmentOfDevelopment.ts";
import type {z} from "zod";
export function parseTlsOfPortOfBindOfServerOfConfigurationOfEnvironmentOfDevelopmentFromProcessEnv(
	processEnv: z.output<typeof schemaForProcessEnvOfDevelopment>,
): null | TlsOfPortOfBindOfServerOfConfigurationOfEnvironmentOfDevelopment {
	switch (processEnv.SERVER__BIND__PORT__TLS__IS_ENABLED) {
		case `no`: {
			return null;
		}
		case `yes`: {
			const tls: TlsOfPortOfBindOfServerOfConfigurationOfEnvironmentOfDevelopment =
				{
					intermediateCa: {
						certificate:
							processEnv.SERVER__BIND__PORT__TLS__INTERMEDIATE_CA__CERTIFICATE,
					},
					server: {
						certificate:
							processEnv.SERVER__BIND__PORT__TLS__SERVER__CERTIFICATE,
						privateKey: processEnv.SERVER__BIND__PORT__TLS__SERVER__PRIVATE_KEY,
					},
				};
			return tls;
		}
	}
}
