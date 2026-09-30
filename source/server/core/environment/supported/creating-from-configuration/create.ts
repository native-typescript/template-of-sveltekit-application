import type {configuration_} from "../../configuration/module.ts";
import {creatingFromConfiguration_} from "../../creating-from-configuration/module.ts";
import type {Environment} from "../../Environment.ts";
import type {SupportedEnvironment} from "../SupportedEnvironment.ts";
export function create(
	configuration: configuration_.supported_.SupportedConfiguration,
): SupportedEnvironment {
	const environment = creatingFromConfiguration_.create(
		configuration,
	) satisfies Environment;
	return environment;
}
