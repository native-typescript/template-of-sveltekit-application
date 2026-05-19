import {fields_} from "../fields/module.ts";
import {z} from "zod";
export const schema = z.intersection(
	z.object({
		SERVER__BIND__PORT__NUMBER: fields_.number_.schemaForProcessEnv_.schema,
	}),
	fields_.tls_.schemaForProcessEnv_.schema,
);
