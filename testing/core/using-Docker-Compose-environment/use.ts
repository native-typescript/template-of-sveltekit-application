import {startingDockerComposeEnvironment_} from "../starting-Docker-Compose-environment/module.ts";
import type {doer_} from "./doer/module.ts";
import type {StartedDockerComposeEnvironment} from "testcontainers";
export async function use<Result>(doer: doer_.Doer<Result>): Promise<Result> {
	const dockerComposeEnvironment: StartedDockerComposeEnvironment =
		await startingDockerComposeEnvironment_.start();
	try {
		const result: Result = await doer(dockerComposeEnvironment);
		return result;
	} finally {
		await dockerComposeEnvironment.down();
	}
}
