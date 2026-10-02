import type {configuration_} from "../../../configuration/module.ts";
import {fields_} from "../../../fields/module.ts";
import type {WithDynamicModeOfOperationWithoutAdapterEnvironment} from "../WithDynamicModeOfOperationWithoutAdapterEnvironment.ts";
export function create(
	configuration: configuration_.implementations_.withDynamicModeOfOperationWithoutAdapter_.WithDynamicModeOfOperationWithoutAdapterConfiguration,
): WithDynamicModeOfOperationWithoutAdapterEnvironment {
	const featuresOfEnvironment =
		fields_.features_.implementations_.withDynamicModeOfOperation_.creatingFromConfiguration_.create(
			configuration.features,
		) satisfies fields_.features_.implementations_.withDynamicModeOfOperation_.WithDynamicModeOfOperationFeatures;
	const environment = {
		configurationOfAdapter: configuration.adapter,
		features: featuresOfEnvironment,
		modeOfOperation: `dynamic`,
		typeOfAdapter: `none`,
	} as const satisfies WithDynamicModeOfOperationWithoutAdapterEnvironment;
	return environment;
}
