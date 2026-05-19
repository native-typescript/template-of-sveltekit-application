import type {schemaForProcessEnvOfSource} from "../../../../../../schema-for-process-env/index.ts";
import type {SupportedAdapterOfConfigurationOfEnvironmentOfSource} from "../supported/index.ts";
import type {z} from "zod";
export function parseAdapterOfConfigurationOfEnvironmentOfSourceFromProcessEnv(
	processEnv: z.output<typeof schemaForProcessEnvOfSource>,
): SupportedAdapterOfConfigurationOfEnvironmentOfSource {
	const error: Error = new Error();
	throw error;
}
