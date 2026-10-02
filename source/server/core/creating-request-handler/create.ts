import {importingInstances_} from "../../importing-instances/module.ts";
import type {modeOfOperationOfEnvironmentDependentHandlers_} from "./mode-of-operation-of-environment-dependent-handlers/module.ts";
import type {RequestEvent} from "@sveltejs/kit";
export function create<EventToUse extends RequestEvent>(
	handlers: modeOfOperationOfEnvironmentDependentHandlers_.Handlers<EventToUse>,
): (event: EventToUse) => Promise<Response> {
	let handler: (event: EventToUse) => Promise<Response> =
		async function handleWithColdStart(event: EventToUse): Promise<Response> {
			const {instances_} = await importingInstances_.import_();
			const environment = instances_.environment_.environment;
			switch (environment.modeOfOperation) {
				case `dynamic`: {
					handler = async function handleDynamic(
						eventOfRequest: EventToUse,
					): Promise<Response> {
						const responseOfDynamic = (await handlers.dynamic(
							environment,
							eventOfRequest,
						)) satisfies Response;
						return responseOfDynamic;
					};
					break;
				}
				case `static`: {
					handler = async function handleStatic(
						eventOfRequest: EventToUse,
					): Promise<Response> {
						const responseOfStatic = (await handlers.static(
							environment,
							eventOfRequest,
						)) satisfies Response;
						return responseOfStatic;
					};
					break;
				}
			}
			const responseOfColdStart = (await handler(event)) satisfies Response;
			return responseOfColdStart;
		};
	return async function handle(event: EventToUse): Promise<Response> {
		const response = (await handler(event)) satisfies Response;
		return response;
	};
}
