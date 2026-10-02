import {fields_} from "../fields/module.ts";
import {z} from "zod";
export const schema = z.object({
	ADAPTER__NAME: fields_.name_.schemaForProcessEnv_.schema,
});
