import type {schemaForProcessEnvOfTesting} from "../schema-for-process-env/schemaForProcessEnvOfTesting.ts";
import {GenericContainer} from "testcontainers";
import type {z} from "zod";
export async function buildDockerImageOfApplication(
	buildArgs: z.input<typeof schemaForProcessEnvOfTesting> & {
		readonly HOSTING__BASE_PATH: `/${string}` | ``;
	},
): Promise<GenericContainer> {
	const image: GenericContainer = await GenericContainer.fromDockerfile(
		`.`,
		`Dockerfile`,
	)
		.withBuildArgs(buildArgs)
		.build();
	return image;
}
