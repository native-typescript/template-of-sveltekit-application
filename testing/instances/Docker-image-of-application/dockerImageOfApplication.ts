import {buildDockerImageOfApplication} from "../../core/building-Docker-image-of-application/buildDockerImageOfApplication.ts";
import {environmentOfTesting} from "../environment/environmentOfTesting.ts";
import type {TestContainer} from "testcontainers";
export const dockerImageOfApplication: TestContainer =
	await buildDockerImageOfApplication({
		DEBIAN__DOCKER_IMAGE__TAG__DATE:
			environmentOfTesting.configuration.debian.dockerImage.tag.date,
		HOSTING__BASE_PATH: ``,
		NODE_JS__VERSION: environmentOfTesting.configuration.nodeJs.version,
	});
