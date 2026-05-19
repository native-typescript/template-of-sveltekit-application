import {schemaForProcessEnv_} from "../../../schema-for-process-env/module.ts";
import {fields_} from "../fields/module.ts";
import {z} from "zod";
export const schema = z.intersection(
	schemaForProcessEnv_.schema,
	z.intersection(
		z.object({ADAPTER__NAME: z.literal(`Node`)}),
		fields_.server_.schemaForProcessEnv_.schema,
	),
);
