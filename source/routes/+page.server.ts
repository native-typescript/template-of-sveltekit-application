import {idOfAdapterAtBuildingTime} from "../id-of-adapter/index.ts";
import type {ServerLoadingFunctionsOfPages} from "../server/index.ts";
import type {
	PageServerLoadEvent,
	PageServerParentData,
	RouteId,
	RouteParams,
} from "./$types.d.ts";
type OutputData = {readonly message: string};
export const load = (
	{
		node: async function load(event: PageServerLoadEvent): Promise<OutputData> {
			return {message: `Hello from the Node adapter!`};
		},
		static: async function load(
			event: PageServerLoadEvent,
		): Promise<OutputData> {
			return {message: `Hello from the static adapter!`};
		},
	} as const satisfies ServerLoadingFunctionsOfPages<
		RouteParams,
		PageServerParentData,
		OutputData,
		RouteId
	>
)[idOfAdapterAtBuildingTime];
