import type {configuration_} from "../../configuration/module.ts";
import {implementations_} from "../../implementations/module.ts";
import type {SupportedEnvironment} from "../SupportedEnvironment.ts";
export function create(
	configuration: configuration_.supported_.SupportedConfiguration,
): SupportedEnvironment {
	switch (configuration.modeOfOperation) {
		case `dynamic`: {
			switch (configuration.typeOfAdapter) {
				case `node`: {
					const environment =
						implementations_.withDynamicModeOfOperationWithNodeAdapter_.creatingFromConfiguration_.create(
							configuration,
						) satisfies implementations_.withDynamicModeOfOperationWithNodeAdapter_.WithDynamicModeOfOperationWithNodeAdapterEnvironment;
					return environment;
				}
				case `none`: {
					const environment =
						implementations_.withDynamicModeOfOperationWithoutAdapter_.creatingFromConfiguration_.create(
							configuration,
						) satisfies implementations_.withDynamicModeOfOperationWithoutAdapter_.WithDynamicModeOfOperationWithoutAdapterEnvironment;
					return environment;
				}
			}
		}
		case `static`: {
			switch (configuration.typeOfAdapter) {
				case `node`: {
					const environment =
						implementations_.withStaticModeOfOperationWithNodeAdapter_.creatingFromConfiguration_.create(
							configuration,
						) satisfies implementations_.withStaticModeOfOperationWithNodeAdapter_.WithStaticModeOfOperationWithNodeAdapterEnvironment;
					return environment;
				}
				case `none`: {
					const environment =
						implementations_.withStaticModeOfOperationWithoutAdapter_.creatingFromConfiguration_.create(
							configuration,
						) satisfies implementations_.withStaticModeOfOperationWithoutAdapter_.WithStaticModeOfOperationWithoutAdapterEnvironment;
					return environment;
				}
				case `static`: {
					const environment =
						implementations_.withStaticModeOfOperationWithStaticAdapter_.creatingFromConfiguration_.create(
							configuration,
						) satisfies implementations_.withStaticModeOfOperationWithStaticAdapter_.WithStaticModeOfOperationWithStaticAdapterEnvironment;
					return environment;
				}
			}
		}
	}
}
