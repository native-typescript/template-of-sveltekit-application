import type {configuration_} from "../../../configuration/module.ts";
import type {WithoutAdapterEnvironment} from "../WithoutAdapterEnvironment.ts";
export function create(
	configuration: Extract<
		configuration_.supported_.SupportedConfiguration,
		{readonly type: `none`}
	>,
): WithoutAdapterEnvironment {
	const environment = {
		adapter: null,
		configurationOfHosting: configuration.hosting,
		typeOfAdapter: `none`,
	} as const satisfies WithoutAdapterEnvironment;
	return environment;
}
