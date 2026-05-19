import type {environment_} from "../../environment/module.ts";
import {running_} from "../running/module.ts";
export async function run(
	configuration: environment_.configuration_.fields_.adapter_.implementations_.node_.fields_.server_.Server | null,
): Promise<void> {
	if (configuration === null) {
		return;
	} else {
		await running_.run(configuration);
		return;
	}
}
