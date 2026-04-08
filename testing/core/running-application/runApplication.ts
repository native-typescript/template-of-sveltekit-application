import type {schemaForProcessEnvOfSource} from "../../../source/index.ts";
import {
	type StartedTestContainer,
	type TestContainer,
	Wait,
} from "testcontainers";
import type {z} from "zod";
export async function runApplication(
	dockerImageOfApplication: TestContainer,
	numberOfPortOfBindOfServer: number,
): Promise<StartedTestContainer> {
	const container: StartedTestContainer = await dockerImageOfApplication
		.withAutoRemove(true)
		.withEnvironment({
			SERVER__BIND__ADDRESS: `::`,
			SERVER__BIND__PORT__NUMBER: numberOfPortOfBindOfServer.toString(10),
			SERVER__BIND__PORT__TLS__IS_ENABLED: `no`,
		} satisfies z.input<typeof schemaForProcessEnvOfSource>)
		.withExposedPorts(numberOfPortOfBindOfServer)
		.withStartupTimeout(600000)
		.withWaitStrategy(Wait.forListeningPorts())
		.start();
	return container;
}
