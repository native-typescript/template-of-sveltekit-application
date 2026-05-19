import type {TlsOfPortOfBindOfServerOfWithNodeAdapterConfigurationOfEnvironmentOfSource} from "../../environment/index.ts";
export function determineMessageOfProtocol(
	dataOfTls: null | TlsOfPortOfBindOfServerOfWithNodeAdapterConfigurationOfEnvironmentOfSource,
): `HTTP` | `HTTPS` {
	if (dataOfTls === null) {
		return `HTTP` as const satisfies string;
	} else {
		return `HTTPS` as const satisfies string;
	}
}
