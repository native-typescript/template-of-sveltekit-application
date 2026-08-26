import {startingDockerComposeEnvironment_} from "../starting-Docker-Compose-environment/module.ts";
import type {doer_} from "./doer/module.ts";
import type {StartedDockerComposeEnvironment} from "testcontainers";
export async function run(doer: doer_.Doer): Promise<void> {
	const dockerComposeEnvironment: StartedDockerComposeEnvironment =
		await startingDockerComposeEnvironment_.start();
	try {
		await doer(dockerComposeEnvironment);
		return;
	} finally {
		await dockerComposeEnvironment.down();
	}
}
