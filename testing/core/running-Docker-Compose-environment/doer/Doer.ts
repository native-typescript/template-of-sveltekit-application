import type {StartedDockerComposeEnvironment} from "testcontainers";
export type Doer = (
	environment: StartedDockerComposeEnvironment,
) => Promise<void>;
