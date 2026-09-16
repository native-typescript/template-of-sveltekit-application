import {fields_} from "../fields/module.ts";
import {z} from "zod";
export const schema = z.object({
	DOCKER_IMAGE__HOSTING__BASE_PATH:
		fields_.basePath_.schemaForProcessEnv_.schema,
});
