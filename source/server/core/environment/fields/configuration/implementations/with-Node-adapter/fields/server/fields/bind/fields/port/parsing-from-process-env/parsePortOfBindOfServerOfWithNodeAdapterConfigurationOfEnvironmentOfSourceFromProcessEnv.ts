import type {schemaForProcessEnvOfSource} from "../../../../../../../../../../../../schema-for-process-env/index.ts";
import {
	parseTlsOfPortOfBindOfServerOfWithNodeAdapterConfigurationOfEnvironmentOfSourceFromProcessEnv,
	type TlsOfPortOfBindOfServerOfWithNodeAdapterConfigurationOfEnvironmentOfSource,
} from "../fields/index.ts";
import type {PortOfBindOfServerOfWithNodeAdapterConfigurationOfEnvironmentOfSource} from "../PortOfBindOfServerOfWithNodeAdapterConfigurationOfEnvironmentOfSource.ts";
import type {z} from "zod";
export function parsePortOfBindOfServerOfWithNodeAdapterConfigurationOfEnvironmentOfSourceFromProcessEnv(
	processEnv: Extract<
		z.output<typeof schemaForProcessEnvOfSource>,
		{readonly ADAPTER__NAME: `Node`}
	>,
): PortOfBindOfServerOfWithNodeAdapterConfigurationOfEnvironmentOfSource {
	const tlsOfPort: null | TlsOfPortOfBindOfServerOfWithNodeAdapterConfigurationOfEnvironmentOfSource =
		parseTlsOfPortOfBindOfServerOfWithNodeAdapterConfigurationOfEnvironmentOfSourceFromProcessEnv(
			processEnv,
		);
	const port: PortOfBindOfServerOfWithNodeAdapterConfigurationOfEnvironmentOfSource =
		{number: processEnv.SERVER__BIND__PORT__NUMBER, tls: tlsOfPort};
	return port;
}
