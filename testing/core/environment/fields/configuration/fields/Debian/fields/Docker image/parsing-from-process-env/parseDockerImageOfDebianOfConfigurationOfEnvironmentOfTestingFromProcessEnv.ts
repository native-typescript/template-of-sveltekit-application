import type {schemaForProcessEnvOfTesting} from "../../../../../../../../schema-for-process-env/schemaForProcessEnvOfTesting.ts";
import type {DockerImageOfDebianOfConfigurationOfEnvironmentOfTesting} from "../DockerImageOfDebianOfConfigurationOfEnvironmentOfTesting.ts";
import {parseTagOfDockerImageOfDebianOfConfigurationOfEnvironmentOfTestingFromProcessEnv} from "../tag/parsing-from-process-env/parseTagOfDockerImageOfDebianOfConfigurationOfEnvironmentOfTestingFromProcessEnv.ts";
import type {TagOfDockerImageOfDebianOfConfigurationOfEnvironmentOfTesting} from "../tag/TagOfDockerImageOfDebianOfConfigurationOfEnvironmentOfTesting.ts";
import type {z} from "zod";
export function parseDockerImageOfDebianOfConfigurationOfEnvironmentOfTestingFromProcessEnv(
	processEnv: z.output<typeof schemaForProcessEnvOfTesting>,
): DockerImageOfDebianOfConfigurationOfEnvironmentOfTesting {
	const tagOfDockerImage: TagOfDockerImageOfDebianOfConfigurationOfEnvironmentOfTesting =
		parseTagOfDockerImageOfDebianOfConfigurationOfEnvironmentOfTestingFromProcessEnv(
			processEnv,
		);
	const dockerImage: DockerImageOfDebianOfConfigurationOfEnvironmentOfTesting =
		{tag: tagOfDockerImage};
	return dockerImage;
}
