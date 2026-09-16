import type {buildArgs_} from "../../../core/building-Docker-image-of-application/build-args/module.ts";
import {environment_} from "../../environment/module.ts";
export const buildArgs = {
	DEBIAN__DOCKER_IMAGE__TAG__DATE:
		environment_.environment.configurationOfDockerImage.debian.dockerImage.tag
			.date,
	HOSTING__BASE_PATH:
		(
			environment_.environment.configurationOfDockerImage.hosting.basePath
			=== null
		) ?
			``
		:	environment_.environment.configurationOfDockerImage.hosting.basePath,
	NODE_JS__VERSION:
		environment_.environment.configurationOfDockerImage.nodeJs.version,
} as const satisfies buildArgs_.BuildArgs;
