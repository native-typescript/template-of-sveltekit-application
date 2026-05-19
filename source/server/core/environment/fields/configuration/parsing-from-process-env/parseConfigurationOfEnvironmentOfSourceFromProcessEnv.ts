import type {schemaForProcessEnvOfSource} from "../../../../schema-for-process-env/index.ts";
import type {SupportedConfigurationOfEnvironmentOfSource} from "../supported/index.ts";
import type {z} from "zod";
export function parseConfigurationOfEnvironmentOfSourceFromProcessEnv(
	processEnv: z.output<typeof schemaForProcessEnvOfSource>,
): SupportedConfigurationOfEnvironmentOfSource {
	const error: Error = new Error();
	throw error;
}
