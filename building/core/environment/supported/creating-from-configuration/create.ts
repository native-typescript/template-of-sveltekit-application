import type {configuration_} from "../../configuration/module.ts";
import {implementations_} from "../../implementations/module.ts";
import type {SupportedEnvironment} from "../SupportedEnvironment.ts";
export function create(
	configuration: configuration_.supported_.SupportedConfiguration,
): SupportedEnvironment {
	switch (configuration.type) {
		case `node`: {
			const environment =
				implementations_.withNodeAdapter_.creatingFromConfiguration_.create(
					configuration,
				) satisfies implementations_.withNodeAdapter_.WithNodeAdapterEnvironment;
			return environment;
		}
		case `none`: {
			const environment =
				implementations_.withoutAdapter_.creatingFromConfiguration_.create(
					configuration,
				) satisfies implementations_.withoutAdapter_.WithoutAdapterEnvironment;
			return environment;
		}
		case `static`: {
			const environment =
				implementations_.withStaticAdapter_.creatingFromConfiguration_.create(
					configuration,
				) satisfies implementations_.withStaticAdapter_.WithStaticAdapterEnvironment;
			return environment;
		}
	}
}
