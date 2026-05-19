import {fields_} from "../fields/module.ts";
import {z} from "zod";
export const schema = z.object({
	SERVER__BIND__PORT__TLS__SERVER__CERTIFICATE:
		fields_.certificate_.schemaForProcessEnv_.schema,
	SERVER__BIND__PORT__TLS__SERVER__PRIVATE_KEY:
		fields_.privateKey_.schemaForProcessEnv_.schema,
});
