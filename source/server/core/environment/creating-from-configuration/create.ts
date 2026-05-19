import type {configuration_} from "../configuration/module.ts";
import type {implementations_} from "../implementations/module.ts";
import type {supported_} from "../supported/module.ts";
export function create(
	configuration: configuration_.supported_.SupportedConfiguration,
): supported_.SupportedEnvironment {
	switch (configuration.type) {
		/* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition */
		case `withoutAdapter`: {
			const environment: implementations_.withoutAdapter_.WithoutAdapterEnvironment =
				{configurationOfAdapter: null, type: `withoutAdapter`};
			return environment;
		}
	}
}
