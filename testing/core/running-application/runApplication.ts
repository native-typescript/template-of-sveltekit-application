import type {schemaForProcessEnvOfSource} from "../../../source/server/core/schema-for-process-env/schemaForProcessEnvOfSource.ts";
import {dockerImageOfApplication} from "../../instances/Docker-image-of-application/dockerImageOfApplication.ts";
import {type StartedTestContainer, Wait} from "testcontainers";
import type {z} from "zod";
export async function runApplication(
	numberOfPortOfBindOfServer: number,
): Promise<StartedTestContainer> {
	const container: StartedTestContainer = await dockerImageOfApplication
		.withAutoRemove(true)
		.withEnvironment({
			SERVER__BIND__ADDRESS: `::`,
			SERVER__BIND__PORT__NUMBER: numberOfPortOfBindOfServer.toString(10),
			SERVER__BIND__PORT__TLS__IS_ENABLED: `no`,
		} satisfies Omit<
			Exclude<
				z.input<typeof schemaForProcessEnvOfSource>,
				{readonly ADAPTER__NAME: `static`}
			>,
			`ADAPTER__NAME`
		>)
		.withExposedPorts(numberOfPortOfBindOfServer)
		.withStartupTimeout(600000)
		.withWaitStrategy(Wait.forListeningPorts())
		.start();
	return container;
}
