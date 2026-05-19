import {schemaForProcessEnv_} from "../../../schema-for-process-env/module.ts";
import {z} from "zod";
export const schema = z.intersection(
	schemaForProcessEnv_.schema,
	z.object({ADAPTER__NAME: z.literal(`static`)}),
);
