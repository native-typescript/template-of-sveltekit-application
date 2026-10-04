import type {configuration_} from "../configuration/module.ts";
import type {Environment} from "../Environment.ts";
export function create(
	configuration: configuration_.supported_.SupportedConfiguration,
): Environment {
	const environment = {} as const satisfies Environment;
	return environment;
}
