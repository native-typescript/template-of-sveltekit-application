import type {environment_} from "../../environment/module.ts";
import type {handler_} from "../handler/module.ts";
import type {ServerLoadEvent} from "@sveltejs/kit";
export type Handlers<EventToUse extends ServerLoadEvent, OutputData> = {
	readonly [
		CurrentEnvironmentToUse in environment_.supported_.SupportedEnvironment as CurrentEnvironmentToUse[`modeOfOperation`]
	]: handler_.Handler<CurrentEnvironmentToUse, EventToUse, OutputData>;
};
