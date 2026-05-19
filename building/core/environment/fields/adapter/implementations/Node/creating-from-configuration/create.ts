import type {configuration_} from "../../../../../configuration/module.ts";
import type {Adapter} from "../../../Adapter.ts";
import createNodeAdapter from "@sveltejs/adapter-node";
export function create(
	configuration: configuration_.fields_.adapter_.implementations_.node_.NodeAdapter,
): Adapter {
	const adapter = createNodeAdapter({}) satisfies Adapter;
	return adapter;
}
