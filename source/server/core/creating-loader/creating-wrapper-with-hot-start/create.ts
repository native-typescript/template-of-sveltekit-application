import type {environment_} from "../../environment/module.ts";
import type {handler_} from "../handler/module.ts";
import type {loader_} from "../loader/module.ts";
import type {ServerLoadEvent} from "@sveltejs/kit";
export function create<
	EnvironmentToUse extends environment_.supported_.SupportedEnvironment,
	EventToUse extends ServerLoadEvent,
	OutputData,
>(
	environment: EnvironmentToUse,
	handler: handler_.Handler<EnvironmentToUse, EventToUse, OutputData>,
): loader_.Loader<EventToUse, OutputData> {
	return async function wrapWithHotStart(
		event: EventToUse,
	): Promise<OutputData> {
		const outputData = (await handler(environment, event)) satisfies OutputData;
		return outputData;
	};
}
