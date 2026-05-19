import type {configuration_} from "../../../configuration/module.ts";
import type {implementations_} from "../../../implementations/module.ts";
import createStaticAdapter from "@sveltejs/adapter-static";
export function createWithStaticAdapterEnvironment(
	configuration: Extract<
		configuration_.supported_.SupportedConfiguration,
		{readonly type: `withStaticAdapter`}
	>,
): implementations_.withStaticAdapter_.WithStaticAdapterEnvironment {
	const adapter: ReturnType<typeof createStaticAdapter> = createStaticAdapter(
		{},
	);
	const environment: implementations_.withStaticAdapter_.WithStaticAdapterEnvironment =
		{
			adapter: adapter,
			configurationOfHosting: configuration.hosting,
			type: `withStaticAdapter`,
		};
	return environment;
}
