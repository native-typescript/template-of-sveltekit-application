import type {configuration_} from "../../../../../configuration/module.ts";
import type {Adapter} from "../../../Adapter.ts";
import createStaticAdapter from "@sveltejs/adapter-static";
export function create(
	configuration: configuration_.fields_.adapter_.implementations_.static_.StaticAdapter,
): Adapter {
	const adapter = createStaticAdapter({}) satisfies Adapter;
	return adapter;
}
