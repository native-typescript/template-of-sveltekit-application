import type {schemaForProcessEnvOfSource} from "../../schema-for-process-env/index.ts";
import type {SupportedEnvironmentOfSource} from "../supported/index.ts";
import type {z} from "zod";
export function createEnvironmentOfSourceFromProcessEnv(
	processEnv: z.output<typeof schemaForProcessEnvOfSource>,
): SupportedEnvironmentOfSource {
	const error: Error = new Error();
	throw error;
}
