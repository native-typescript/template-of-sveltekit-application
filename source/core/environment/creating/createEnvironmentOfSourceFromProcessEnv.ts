import type {schemaOfProcessEnvOfSource} from "../../schema-of-process-env/index.ts";
import type {EnvironmentOfSource} from "../EnvironmentOfSource.ts";
import type {z} from "zod";
export function createEnvironmentOfSourceFromProcessEnv(
	processEnv: z.output<typeof schemaOfProcessEnvOfSource>,
): EnvironmentOfSource {
	const evironmentOfSource: EnvironmentOfSource = {};
	return evironmentOfSource;
}
