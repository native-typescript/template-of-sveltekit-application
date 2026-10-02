import type {loader_} from "../loader/module.ts";
import type {modeOfOperationOfEnvironmentDependentHandlers_} from "../mode-of-operation-of-environment-dependent-handlers/module.ts";
import {creatingModeOfOperationOfEnvironmentDependentWrapperWithColdStart_} from "./creating-mode-of-operation-of-environment-dependent-wrapper-with-cold-start/module.ts";
import type {ServerLoadEvent} from "@sveltejs/kit";
export async function create<
	EventToUse extends ServerLoadEvent,
	OutputData extends undefined | {readonly [key: string]: unknown},
>(
	handlers: modeOfOperationOfEnvironmentDependentHandlers_.Handlers<
		EventToUse,
		OutputData
	>,
): Promise<loader_.Loader<EventToUse, OutputData>> {
	let wrapper: loader_.Loader<EventToUse, OutputData> =
		creatingModeOfOperationOfEnvironmentDependentWrapperWithColdStart_.create<
			EventToUse,
			OutputData
		>(function heat(
			hotStartWrapper: loader_.Loader<EventToUse, OutputData>,
		): void {
			wrapper = hotStartWrapper;
			return;
		}, handlers);
	return async function load(event: EventToUse): Promise<OutputData> {
		const outputData = (await wrapper(event)) satisfies OutputData;
		return outputData;
	};
}
