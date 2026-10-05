import type {configuration_} from "../../../configuration/module.ts";
import {fields_} from "../../../fields/module.ts";
import type {WithDynamicModeOfOperationEnvironment} from "../WithDynamicModeOfOperationEnvironment.ts";
export function create(
	configuration: configuration_.implementations_.withDynamicModeOfOperation_.WithDynamicModeOfOperationConfiguration,
): WithDynamicModeOfOperationEnvironment {
	const featuresOfEnvironment =
		fields_.features_.implementations_.withDynamicModeOfOperation_.creatingFromConfiguration_.create(
			configuration.features,
		) satisfies fields_.features_.implementations_.withDynamicModeOfOperation_.WithDynamicModeOfOperationFeatures;
	const environment = {
		features: featuresOfEnvironment,
		modeOfOperation: `dynamic`,
	} as const satisfies WithDynamicModeOfOperationEnvironment;
	return environment;
}
