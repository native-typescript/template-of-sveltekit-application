import {importingInstances_} from "../../../../importing-instances/module.ts";
import type {environment_} from "../../../environment/module.ts";
import {creatingWrapperWithHotStart_} from "../../creating-wrapper-with-hot-start/module.ts";
import type {handler_} from "../../handler/module.ts";
import type {heaterOfWrapper_} from "../../heater-of-wrapper/module.ts";
import type {loader_} from "../../loader/module.ts";
import type {ServerLoadEvent} from "@sveltejs/kit";
export function create<EventToUse extends ServerLoadEvent, OutputData>(
	heater: heaterOfWrapper_.Heater<EventToUse, OutputData>,
	handler: handler_.Handler<
		environment_.supported_.SupportedEnvironment,
		EventToUse,
		OutputData
	>,
): loader_.Loader<EventToUse, OutputData> {
	return async function wrapWithColdStart(
		event: EventToUse,
	): Promise<OutputData> {
		const {instances_} = await importingInstances_.import_();
		const hotStartWrapper = creatingWrapperWithHotStart_.create<
			environment_.supported_.SupportedEnvironment,
			EventToUse,
			OutputData
		>(instances_.environment_.environment, handler) satisfies loader_.Loader<
			EventToUse,
			OutputData
		>;
		heater(hotStartWrapper);
		const outputData = (await hotStartWrapper(event)) satisfies OutputData;
		return outputData;
	};
}
