import type {configuration_} from "../../configuration/module.ts";
import {implementations_} from "../../implementations/module.ts";
import type {SupportedEnvironment} from "../SupportedEnvironment.ts";
export function create(
	configuration: configuration_.supported_.SupportedConfiguration,
): SupportedEnvironment {
	switch (configuration.modeOfOperation) {
		case ``: {
			const environment =
				implementations_.withoutModeOfOperation_.creatingFromConfiguration_.create(
					configuration,
				) satisfies implementations_.withoutModeOfOperation_.WithoutModeOfOperationEnvironment;
			return environment;
		}
		case `dynamic`: {
			const environment =
				implementations_.withDynamicModeOfOperation_.creatingFromConfiguration_.create(
					configuration,
				) satisfies implementations_.withDynamicModeOfOperation_.WithDynamicModeOfOperationEnvironment;
			return environment;
		}
	}
}
