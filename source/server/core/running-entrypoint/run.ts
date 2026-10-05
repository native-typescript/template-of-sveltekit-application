import type {environment_} from "../environment/module.ts";
export async function run(
	environment: Extract<
		environment_.supported_.SupportedEnvironment,
		{readonly modeOfOperation: `dynamic`}
	>,
): Promise<void> {
	return;
}
