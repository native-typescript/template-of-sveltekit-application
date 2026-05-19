import type {schemaForProcessEnvOfSource} from "../../../../../../../../../../../../../../schema-for-process-env/schemaForProcessEnvOfSource.ts";
import type {TlsOfPortOfBindOfServerOfWithNodeAdapterConfigurationOfEnvironmentOfSource} from "../TlsOfPortOfBindOfServerOfWithNodeAdapterConfigurationOfEnvironmentOfSource.ts";
import type {z} from "zod";
export function parseTlsOfPortOfBindOfServerOfWithNodeAdapterConfigurationOfEnvironmentOfSourceFromProcessEnv(
	processEnv: Extract<
		z.output<typeof schemaForProcessEnvOfSource>,
		{readonly ADAPTER__NAME: `Node`}
	>,
): null | TlsOfPortOfBindOfServerOfWithNodeAdapterConfigurationOfEnvironmentOfSource {
	switch (processEnv.SERVER__BIND__PORT__TLS__IS_ENABLED) {
		case `no`: {
			return null;
		}
		case `yes`: {
			const tls: TlsOfPortOfBindOfServerOfWithNodeAdapterConfigurationOfEnvironmentOfSource =
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
