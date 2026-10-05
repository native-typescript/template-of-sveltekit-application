import type {configuration_} from "../../../configuration/module.ts";
import {fields_} from "../../../fields/module.ts";
import type {WithoutModeOfOperationEnvironment} from "../WithoutModeOfOperationEnvironment.ts";
export function create(
	configuration: configuration_.implementations_.withoutModeOfOperation_.WithoutModeOfOperationConfiguration,
): WithoutModeOfOperationEnvironment {
	const featuresOfEnvironment =
		fields_.features_.implementations_.withoutModeOfOperation_.creatingFromConfiguration_.create(
			configuration.features,
		) satisfies fields_.features_.implementations_.withoutModeOfOperation_.WithoutModeOfOperationFeatures;
	const environment = {
		features: featuresOfEnvironment,
		modeOfOperation: ``,
	} as const satisfies WithoutModeOfOperationEnvironment;
	return environment;
}
