import type {configuration_} from "../../../configuration/module.ts";
import type {implementations_} from "../../../implementations/module.ts";
import createNodeAdapter from "@sveltejs/adapter-node";
export function createWithNodeAdapterEnvironment(
	configuration: Extract<
		configuration_.supported_.SupportedConfiguration,
		{readonly type: `withNodeAdapter`}
	>,
): implementations_.withNodeAdapter_.WithNodeAdapterEnvironment {
	const adapter: ReturnType<typeof createNodeAdapter> = createNodeAdapter({});
	const environment: implementations_.withNodeAdapter_.WithNodeAdapterEnvironment =
		{
			adapter: adapter,
			configurationOfHosting: configuration.hosting,
			type: `withNodeAdapter`,
		};
	return environment;
}
