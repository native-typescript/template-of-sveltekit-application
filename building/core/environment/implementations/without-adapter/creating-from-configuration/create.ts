import type {configuration_} from "../../../configuration/module.ts";
import type {WithoutAdapterEnvironment} from "../WithoutAdapterEnvironment.ts";
export function create(
	configuration: configuration_.implementations_.withoutAdapter_.WithoutAdapterConfiguration,
): WithoutAdapterEnvironment {
	const environment = {
		adapter: configuration.adapter,
		configurationOfHosting: configuration.hosting,
		typeOfAdapter: `none`,
	} as const satisfies WithoutAdapterEnvironment;
	return environment;
}
