import type {configuration_} from "../configuration/module.ts";
import type {supported_} from "../supported/module.ts";
import {implementations_} from "./implementations/module.ts";
export function create(
	configuration: configuration_.supported_.SupportedConfiguration,
): supported_.SupportedEnvironment {
	switch (configuration.type) {
		case `withNodeAdapter`: {
			return implementations_.withNodeAdapter_.createWithNodeAdapterEnvironment(
				configuration,
			);
		}
		case `withStaticAdapter`: {
			return implementations_.withStaticAdapter_.createWithStaticAdapterEnvironment(
				configuration,
			);
		}
	}
}
