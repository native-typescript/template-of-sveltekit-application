import type {configuration_} from "../../../configuration/module.ts";
import {fields_} from "../../../fields/module.ts";
import type {WithStaticModeOfOperationEnvironment} from "../WithStaticModeOfOperationEnvironment.ts";
export function create(
	configuration: configuration_.implementations_.withStaticModeOfOperation_.WithStaticModeOfOperationConfiguration,
): WithStaticModeOfOperationEnvironment {
	const featuresOfEnvironment =
		fields_.features_.implementations_.withStaticModeOfOperation_.creatingFromConfiguration_.create(
			configuration.features,
		) satisfies fields_.features_.implementations_.withStaticModeOfOperation_.WithStaticModeOfOperationFeatures;
	const environment = {
		features: featuresOfEnvironment,
		modeOfOperation: `static`,
	} as const satisfies WithStaticModeOfOperationEnvironment;
	return environment;
}
