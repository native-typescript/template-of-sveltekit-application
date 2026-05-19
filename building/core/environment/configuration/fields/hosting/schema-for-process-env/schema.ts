import {fields_} from "../fields/module.ts";
import {z} from "zod";
export const schema = z.object({
	HOSTING__BASE_PATH: fields_.basePath_.schemaForProcessEnv_.schema,
});
