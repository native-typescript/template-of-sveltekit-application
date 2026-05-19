import {fields_} from "../fields/module.ts";
import {z} from "zod";
export const schema = z.object({
	ADAPTER__SERVER__BIND__PORT__TLS__INTERMEDIATE_CA__CERTIFICATE:
		fields_.certificate_.schemaForProcessEnv_.schema,
});
