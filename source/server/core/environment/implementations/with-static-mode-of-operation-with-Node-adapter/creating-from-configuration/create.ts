import type {configuration_} from "../../../configuration/module.ts";
import {fields_} from "../../../fields/module.ts";
import type {WithStaticModeOfOperationWithNodeAdapterEnvironment} from "../WithStaticModeOfOperationWithNodeAdapterEnvironment.ts";
export function create(
	configuration: configuration_.implementations_.withStaticModeOfOperationWithNodeAdapter_.WithStaticModeOfOperationWithNodeAdapterConfiguration,
): WithStaticModeOfOperationWithNodeAdapterEnvironment {
	const featuresOfEnvironment =
		fields_.features_.implementations_.withStaticModeOfOperation_.creatingFromConfiguration_.create(
			configuration.features,
		) satisfies fields_.features_.implementations_.withStaticModeOfOperation_.WithStaticModeOfOperationFeatures;
	const environment = {
		configurationOfAdapter: configuration.adapter,
		features: featuresOfEnvironment,
		modeOfOperation: `static`,
		typeOfAdapter: `node`,
	} as const satisfies WithStaticModeOfOperationWithNodeAdapterEnvironment;
	return environment;
}
