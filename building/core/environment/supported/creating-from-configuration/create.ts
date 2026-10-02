import type {configuration_} from "../../configuration/module.ts";
import {implementations_} from "../../implementations/module.ts";
import type {SupportedEnvironment} from "../SupportedEnvironment.ts";
export function create(
	configuration: configuration_.supported_.SupportedConfiguration,
): SupportedEnvironment {
	switch (configuration.type) {
		// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
		case `none`: {
			const environment =
				implementations_.withoutAdapter_.creatingFromConfiguration_.create(
					configuration,
				) satisfies implementations_.withoutAdapter_.WithoutAdapterEnvironment;
			return environment;
		}
	}
}
