import {
	DockerComposeEnvironment,
	type StartedDockerComposeEnvironment,
} from "testcontainers";
export async function start(): Promise<StartedDockerComposeEnvironment> {
	const environment: StartedDockerComposeEnvironment =
		await new DockerComposeEnvironment(`./testing`, [
			`docker-compose.yaml`,
		]).up();
	return environment;
}
