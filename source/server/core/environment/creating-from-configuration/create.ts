import type {configuration_} from "../configuration/module.ts";
import type {implementations_} from "../implementations/module.ts";
import type {supported_} from "../supported/module.ts";
export function create(
	configuration: configuration_.supported_.SupportedConfiguration,
): supported_.SupportedEnvironment {
	switch (configuration.type) {
		case `withNodeAdapter`: {
			const environment: implementations_.withNodeAdapter_.WithNodeAdapterEnvironment =
				{
					configurationOfAdapter: configuration.adapter,
					type: `withNodeAdapter`,
				};
			return environment;
		}
		case `withoutAdapter`: {
			const environment: implementations_.withoutAdapter_.WithoutAdapterEnvironment =
				{configurationOfAdapter: null, type: `withoutAdapter`};
			return environment;
		}
	}
}
