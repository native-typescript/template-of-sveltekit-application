import {idOfAdapter_} from "../id-of-adapter/module.ts";
import type {server_} from "../server/module.ts";
import type {
	PageServerLoadEvent,
	PageServerParentData,
	RouteId,
	RouteParams,
} from "./$types.d.ts";
type OutputData = {readonly message: string};
export const load = (
	{
		node: async function nodeLoad(
			event: PageServerLoadEvent,
		): Promise<OutputData> {
			return {message: `Hello from the Node adapter!`};
		},
		static: async function staticLoad(
			event: PageServerLoadEvent,
		): Promise<OutputData> {
			return {message: `Hello from the static adapter!`};
		},
	} as const satisfies server_.loadingFunctionsOfPages_.Functions<
		RouteParams,
		PageServerParentData,
		OutputData,
		RouteId
	>
)[idOfAdapter_.id];
