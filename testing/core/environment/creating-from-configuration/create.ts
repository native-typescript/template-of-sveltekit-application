import type {configuration_} from "../configuration/module.ts";
import type {Environment} from "../Environment.ts";
export function create(
	configuration: configuration_.Configuration,
): Environment {
	const environment: Environment = {
		configurationOfDebian: configuration.debian,
		configurationOfHosting: configuration.hosting,
		configurationOfNodeJs: configuration.nodeJs,
	};
	return environment;
}
