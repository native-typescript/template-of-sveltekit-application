import {fields_} from "../fields/module.ts";
import {z} from "zod";
export const schema = z.intersection(
	z.object({
		SERVER__BIND__ADDRESS: fields_.address_.schemaForProcessEnv_.schema,
	}),
	fields_.port_.schemaForProcessEnv_.schema,
);
