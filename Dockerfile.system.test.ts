import {testing_} from "./testing/module.ts";
import {describe, test} from "node:test";
import type {StartedTestContainer} from "testcontainers";
await describe(`Docker image`, async function executeTests(): Promise<void> {
	await test(`The built image is runnable`, async function executeTest(): Promise<void> {
		const container =
			(await testing_.instances_.dockerImageOfApplication_.dockerImage.start()) satisfies StartedTestContainer;
		await container.stop();
		return;
	});
	await test(`The server responds to a request`, async function executeTest(): Promise<void> {
		const numberOfPortOfBindOfServer = 5173;
		const container = (await testing_.core_.runningApplication.run(
			testing_.instances_.dockerImageOfApplication_.dockerImage,
			numberOfPortOfBindOfServer,
		)) satisfies StartedTestContainer;
		try {
			const numberOfMappedPort = container.getMappedPort(
				numberOfPortOfBindOfServer,
			) satisfies number;
			(await fetch(
				`http://${container.getHost()}:${numberOfMappedPort.toString(10)}`,
			)) satisfies Response;
			return;
		} finally {
			await container.stop();
		}
	});
	return;
});
