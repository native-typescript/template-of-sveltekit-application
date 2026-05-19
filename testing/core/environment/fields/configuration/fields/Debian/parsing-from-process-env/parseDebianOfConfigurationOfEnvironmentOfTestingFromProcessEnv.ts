import type {schemaForProcessEnvOfTesting} from "../../../../../../schema-for-process-env/schemaForProcessEnvOfTesting.ts";
import type {DebianOfConfigurationOfEnvironmentOfTesting} from "../DebianOfConfigurationOfEnvironmentOfTesting.ts";
import type {DockerImageOfDebianOfConfigurationOfEnvironmentOfTesting} from "../fields/Docker image/DockerImageOfDebianOfConfigurationOfEnvironmentOfTesting.ts";
import {parseDockerImageOfDebianOfConfigurationOfEnvironmentOfTestingFromProcessEnv} from "../fields/Docker image/parsing-from-process-env/parseDockerImageOfDebianOfConfigurationOfEnvironmentOfTestingFromProcessEnv.ts";
import type {z} from "zod";
export function parseDebianOfConfigurationOfEnvironmentOfTestingFromProcessEnv(
	processEnv: z.output<typeof schemaForProcessEnvOfTesting>,
): DebianOfConfigurationOfEnvironmentOfTesting {
	const dockerImageOfDebian: DockerImageOfDebianOfConfigurationOfEnvironmentOfTesting =
		parseDockerImageOfDebianOfConfigurationOfEnvironmentOfTestingFromProcessEnv(
			processEnv,
		);
	const debian: DebianOfConfigurationOfEnvironmentOfTesting = {
		dockerImage: dockerImageOfDebian,
	};
	return debian;
}
