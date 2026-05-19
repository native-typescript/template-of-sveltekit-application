import type {configuration_} from "../../../configuration/module.ts";
import type {implementations_} from "../../../implementations/module.ts";
export function createWithoutAdapterEnvironment(
	configuration: Extract<
		configuration_.supported_.SupportedConfiguration,
		{readonly type: `withoutAdapter`}
	>,
): implementations_.withoutAdapter_.WithoutAdapterEnvironment {
	const environment: implementations_.withoutAdapter_.WithoutAdapterEnvironment =
		{
			adapter: null,
			configurationOfHosting: configuration.hosting,
			type: `withoutAdapter`,
		};
	return environment;
}
