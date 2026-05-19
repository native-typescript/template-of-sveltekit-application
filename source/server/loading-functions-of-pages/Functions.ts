import type {LayoutParams, RouteId} from "$app/types";
import type {core_} from "../core/module.ts";
import type {ServerLoad} from "@sveltejs/kit";
export type Functions<
	RouteParams extends LayoutParams<`/`>,
	PageServerParentData extends {readonly [key: string]: unknown},
	OutputData extends undefined | {readonly [key: string]: unknown},
	RouteIdToUse extends null | RouteId,
> = {
	readonly [
		CurrentKey in Exclude<
			core_.environment_.supported_.SupportedEnvironment[`configurationOfAdapter`],
			null
		>[`id`]
	]: ServerLoad<RouteParams, PageServerParentData, OutputData, RouteIdToUse>;
};
