import type {TlsOfPortOfBindOfServerOfWithNodeAdapterConfigurationOfEnvironmentOfSource} from "../../environment/fields/configuration/implementations/with-Node-adapter/fields/server/fields/bind/fields/port/fields/tls/TlsOfPortOfBindOfServerOfWithNodeAdapterConfigurationOfEnvironmentOfSource.ts";
export function determineMessageOfProtocol(
	dataOfTls: null | TlsOfPortOfBindOfServerOfWithNodeAdapterConfigurationOfEnvironmentOfSource,
): `HTTP` | `HTTPS` {
	if (dataOfTls === null) {
		return `HTTP` as const satisfies string;
	} else {
		return `HTTPS` as const satisfies string;
	}
}
