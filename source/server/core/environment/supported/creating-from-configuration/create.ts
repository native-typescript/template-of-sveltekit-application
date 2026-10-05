import type {configuration_} from "../../configuration/module.ts";
import {implementations_} from "../../implementations/module.ts";
import type {SupportedEnvironment} from "../SupportedEnvironment.ts";
export function create(
	configuration: configuration_.supported_.SupportedConfiguration,
): SupportedEnvironment {
	switch (configuration.modeOfOperation) {
		// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
		case ``: {
			const environment =
				implementations_.withoutModeOfOperation_.creatingFromConfiguration_.create(
					configuration,
				) satisfies implementations_.withoutModeOfOperation_.WithoutModeOfOperationEnvironment;
			return environment;
		}
	}
}
