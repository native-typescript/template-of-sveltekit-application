import type {LayoutParams, RouteId} from "$app/types";
import type {SupportedEnvironmentOfSource} from "../core/environment/supported/SupportedEnvironmentOfSource.ts";
import type {ServerLoad} from "@sveltejs/kit";
export type ServerLoadingFunctionsOfPages<
	RouteParams extends LayoutParams<`/`>,
	PageServerParentData extends {readonly [key: string]: unknown},
	OutputData extends undefined | {readonly [key: string]: unknown},
	RouteIdToUse extends null | RouteId,
> = {
	readonly [CurrentKey in SupportedEnvironmentOfSource[`configuration`][`adapter`][`id`]]: ServerLoad<
		RouteParams,
		PageServerParentData,
		OutputData,
		RouteIdToUse
	>;
};
