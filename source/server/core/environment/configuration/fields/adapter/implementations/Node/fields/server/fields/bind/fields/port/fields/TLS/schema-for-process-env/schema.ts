import {fields_} from "../fields/module.ts";
import {z} from "zod";
export const schema = z.union([
	z.object({ADAPTER__SERVER__BIND__PORT__TLS__IS_ENABLED: z.literal(`no`)}),
	z.intersection(
		z.object({ADAPTER__SERVER__BIND__PORT__TLS__IS_ENABLED: z.literal(`yes`)}),
		z.intersection(
			fields_.intermediateCa_.schemaForProcessEnv_.schema,
			fields_.server_.schemaForProcessEnv_.schema,
		),
	),
]);
