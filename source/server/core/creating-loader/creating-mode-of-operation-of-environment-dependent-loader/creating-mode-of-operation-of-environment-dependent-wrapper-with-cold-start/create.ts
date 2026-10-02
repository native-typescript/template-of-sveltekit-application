import {importingInstances_} from "../../../../importing-instances/module.ts";
import type {environment_} from "../../../environment/module.ts";
import {creatingWrapperWithHotStart_} from "../../creating-wrapper-with-hot-start/module.ts";
import type {heaterOfWrapper_} from "../../heater-of-wrapper/module.ts";
import type {loader_} from "../../loader/module.ts";
import type {modeOfOperationOfEnvironmentDependentHandlers_} from "../../mode-of-operation-of-environment-dependent-handlers/module.ts";
import type {ServerLoadEvent} from "@sveltejs/kit";
export function create<EventToUse extends ServerLoadEvent, OutputData>(
	heater: heaterOfWrapper_.Heater<EventToUse, OutputData>,
	handlers: modeOfOperationOfEnvironmentDependentHandlers_.Handlers<
		EventToUse,
		OutputData
	>,
): loader_.Loader<EventToUse, OutputData> {
	return async function wrapWithColdStart(
		event: EventToUse,
	): Promise<OutputData> {
		const {instances_} = await importingInstances_.import_();
		const environment = instances_.environment_
			.environment satisfies environment_.supported_.SupportedEnvironment;
		switch (environment.modeOfOperation) {
			case `dynamic`: {
				const hotStartWrapper = creatingWrapperWithHotStart_.create<
					Extract<
						environment_.supported_.SupportedEnvironment,
						{readonly modeOfOperation: `dynamic`}
					>,
					EventToUse,
					OutputData
				>(environment, handlers.dynamic) satisfies loader_.Loader<
					EventToUse,
					OutputData
				>;
				heater(hotStartWrapper);
				const outputData = (await hotStartWrapper(event)) satisfies OutputData;
				return outputData;
			}
			case `static`: {
				const hotStartWrapper = creatingWrapperWithHotStart_.create<
					Extract<
						environment_.supported_.SupportedEnvironment,
						{readonly modeOfOperation: `static`}
					>,
					EventToUse,
					OutputData
				>(environment, handlers.static) satisfies loader_.Loader<
					EventToUse,
					OutputData
				>;
				heater(hotStartWrapper);
				const outputData = (await hotStartWrapper(event)) satisfies OutputData;
				return outputData;
			}
		}
	};
}
