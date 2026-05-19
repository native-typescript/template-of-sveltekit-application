import {fields_} from "../fields/module.ts";
import {z} from "zod";
export const schema = z.union([
	z.object({ADAPTER__SERVER__IS_ENABLED: z.literal(`no`)}),
	z.intersection(
		z.object({ADAPTER__SERVER__IS_ENABLED: z.literal(`yes`)}),
		fields_.bind_.schemaForProcessEnv_.schema,
	),
]);
