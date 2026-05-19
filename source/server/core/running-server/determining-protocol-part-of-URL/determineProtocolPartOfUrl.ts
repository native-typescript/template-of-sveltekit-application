import type {TlsOfPortOfBindOfServerOfWithNodeAdapterConfigurationOfEnvironmentOfSource} from "../../environment/index.ts";
export function determineProtocolPartOfUrl(
	dataOfTls: null | TlsOfPortOfBindOfServerOfWithNodeAdapterConfigurationOfEnvironmentOfSource,
): `http` | `https` {
	if (dataOfTls === null) {
		return `http` as const satisfies string;
	} else {
		return `https` as const satisfies string;
	}
}
