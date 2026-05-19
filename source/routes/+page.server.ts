import {idOfAdapterAtBuildingTime} from "../id-of-adapter/idOfAdapterAtBuildingTime.ts";
import type {ServerLoadingFunctionsOfPages} from "../server/loading-functions-of-pages/ServerLoadingFunctionsOfPages.ts";
import type {
	PageServerLoadEvent,
	PageServerParentData,
	RouteId,
	RouteParams,
} from "./$types.d.ts";
type OutputData = {readonly message: string};
export const {[idOfAdapterAtBuildingTime]: load} = {
	node: async function load(event: PageServerLoadEvent): Promise<OutputData> {
		return {message: `Hello from the Node adapter!`};
	},
	static: async function load(event: PageServerLoadEvent): Promise<OutputData> {
		return {message: `Hello from the static adapter!`};
	},
} satisfies ServerLoadingFunctionsOfPages<
	RouteParams,
	PageServerParentData,
	OutputData,
	RouteId
>;
