import type {environment_} from "../../environment/module.ts";
import type {handler_} from "../handler/module.ts";
import type {loader_} from "../loader/module.ts";
import {creatingGenericWrapperWithColdStart_} from "./creating-generic-wrapper-with-cold-start/module.ts";
import type {ServerLoadEvent} from "@sveltejs/kit";
export async function create<OutputData, EventToUse extends ServerLoadEvent>(
	handler: handler_.Handler<
		environment_.supported_.SupportedEnvironment,
		EventToUse,
		OutputData
	>,
): Promise<loader_.Loader<EventToUse, OutputData>> {
	let wrapper: loader_.Loader<EventToUse, OutputData> =
		creatingGenericWrapperWithColdStart_.create<EventToUse, OutputData>(
			function heat(
				hotStartWrapper: (event: EventToUse) => Promise<OutputData>,
			): void {
				wrapper = hotStartWrapper;
				return;
			},
			handler,
		);
	return async function load(event: EventToUse): Promise<OutputData> {
		const outputData = (await wrapper(event)) satisfies OutputData;
		return outputData;
	};
}
