import type {configuration_} from "../../../configuration/module.ts";
import {fields_} from "../../../fields/module.ts";
import type {WithNodeAdapterEnvironment} from "../WithNodeAdapterEnvironment.ts";
export function create(
	configuration: Extract<
		configuration_.supported_.SupportedConfiguration,
		{readonly type: `node`}
	>,
): WithNodeAdapterEnvironment {
	const adapterOfEnvironment =
		fields_.adapter_.implementations_.node_.creatingFromConfiguration_.create(
			configuration.adapter,
		) satisfies fields_.adapter_.Adapter;
	const environment = {
		adapter: adapterOfEnvironment,
		configurationOfHosting: configuration.hosting,
		typeOfAdapter: `node`,
	} as const satisfies WithNodeAdapterEnvironment;
	return environment;
}
