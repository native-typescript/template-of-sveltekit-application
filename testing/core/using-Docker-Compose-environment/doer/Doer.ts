import type {StartedDockerComposeEnvironment} from "testcontainers";
export type Doer<Result> = (
	environment: StartedDockerComposeEnvironment,
) => Promise<Result>;
