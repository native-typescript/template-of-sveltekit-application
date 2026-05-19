import type {TlsOfPortOfBindOfServerOfWithNodeAdapterConfigurationOfEnvironmentOfSource} from "../../environment/fields/configuration/implementations/with-Node-adapter/fields/server/fields/bind/fields/port/fields/tls/TlsOfPortOfBindOfServerOfWithNodeAdapterConfigurationOfEnvironmentOfSource.ts";
export function determineProtocolPartOfUrl(
	dataOfTls: null | TlsOfPortOfBindOfServerOfWithNodeAdapterConfigurationOfEnvironmentOfSource,
): `http` | `https` {
	if (dataOfTls === null) {
		return `http` as const satisfies string;
	} else {
		return `https` as const satisfies string;
	}
}
