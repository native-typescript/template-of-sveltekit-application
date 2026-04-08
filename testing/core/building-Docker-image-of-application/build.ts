import type {environment_} from "../environment/module.ts";
import {GenericContainer} from "testcontainers";
import type {z} from "zod";
export async function build(
	buildArgs: z.input<
		typeof environment_.configuration_.schemaForProcessEnv_.schema
	>,
): Promise<GenericContainer> {
	const image: GenericContainer = await GenericContainer.fromDockerfile(
		`.`,
		`Dockerfile`,
	)
		.withBuildArgs(buildArgs)
		.build();
	return image;
}
