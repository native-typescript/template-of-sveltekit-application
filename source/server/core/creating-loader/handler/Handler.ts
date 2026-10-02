import type {environment_} from "../../environment/module.ts";
import type {ServerLoadEvent} from "@sveltejs/kit";
export type Handler<
	EnvironmentToUse extends environment_.supported_.SupportedEnvironment,
	EventToUse extends ServerLoadEvent,
	OutputData,
> = (environment: EnvironmentToUse, event: EventToUse) => Promise<OutputData>;
