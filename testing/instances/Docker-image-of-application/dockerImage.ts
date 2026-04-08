import {core_} from "../../core/module.ts";
import {environment_} from "../environment/module.ts";
import type {TestContainer} from "testcontainers";
export const dockerImage: TestContainer =
	await core_.buildingDockerImageOfApplication_.build({
		DEBIAN__DOCKER_IMAGE__TAG__DATE:
			environment_.environment.configurationOfDebian.dockerImage.tag.date,
		HOSTING__BASE_PATH:
			environment_.environment.configurationOfHosting.basePath === null ?
				``
			:	environment_.environment.configurationOfHosting.basePath,
		NODE_JS__VERSION: environment_.environment.configurationOfNodeJs.version,
	});
