import type {configuration_} from "../../../configuration/module.ts";
import {fields_} from "../../../fields/module.ts";
import type {WithStaticAdapterEnvironment} from "../WithStaticAdapterEnvironment.ts";
export function create(
	configuration: Extract<
		configuration_.supported_.SupportedConfiguration,
		{readonly type: `static`}
	>,
): WithStaticAdapterEnvironment {
	const adapterOfEnvironment =
		fields_.adapter_.implementations_.static_.creatingFromConfiguration_.create(
			configuration.adapter,
		) satisfies fields_.adapter_.Adapter;
	const environment = {
		adapter: adapterOfEnvironment,
		configurationOfHosting: configuration.hosting,
		typeOfAdapter: `static`,
	} as const satisfies WithStaticAdapterEnvironment;
	return environment;
}
