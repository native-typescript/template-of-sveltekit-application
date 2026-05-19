import type {configuration_} from "../../../configuration/module.ts";
import {fields_} from "../../../fields/module.ts";
import type {WithDynamicModeOfOperationWithNodeAdapterEnvironment} from "../WithDynamicModeOfOperationWithNodeAdapterEnvironment.ts";
export function create(
	configuration: configuration_.implementations_.withDynamicModeOfOperationWithNodeAdapter_.WithDynamicModeOfOperationWithNodeAdapterConfiguration,
): WithDynamicModeOfOperationWithNodeAdapterEnvironment {
	const featuresOfEnvironment =
		fields_.features_.implementations_.withDynamicModeOfOperation_.creatingFromConfiguration_.create(
			configuration.features,
		) satisfies fields_.features_.implementations_.withDynamicModeOfOperation_.WithDynamicModeOfOperationFeatures;
	const environment = {
		configurationOfAdapter: configuration.adapter,
		features: featuresOfEnvironment,
		modeOfOperation: `dynamic`,
		typeOfAdapter: `node`,
	} as const satisfies WithDynamicModeOfOperationWithNodeAdapterEnvironment;
	return environment;
}
