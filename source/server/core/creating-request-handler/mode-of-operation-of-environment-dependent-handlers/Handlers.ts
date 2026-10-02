import type {environment_} from "../../environment/module.ts";
import type {RequestEvent} from "@sveltejs/kit";
export type Handlers<EventToUse extends RequestEvent> = {
	readonly [
		CurrentEnvironmentToUse in environment_.supported_.SupportedEnvironment as CurrentEnvironmentToUse[`modeOfOperation`]
	]: (
		environment: CurrentEnvironmentToUse,
		event: EventToUse,
	) => Promise<Response>;
};
