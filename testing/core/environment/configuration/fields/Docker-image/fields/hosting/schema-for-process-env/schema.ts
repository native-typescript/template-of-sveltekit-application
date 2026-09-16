import {fields_} from "../fields/module.ts";
import {type} from "arktype";
export const schema = type({
	DOCKER_IMAGE__HOSTING__BASE_PATH:
		fields_.basePath_.schemaForProcessEnv_.schema,
});
