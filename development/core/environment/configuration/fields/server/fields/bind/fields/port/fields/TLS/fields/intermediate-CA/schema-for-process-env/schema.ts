import {fields_} from "../fields/module.ts";
import {type} from "arktype";
export const schema = type({
	SERVER__BIND__PORT__TLS__INTERMEDIATE_CA__CERTIFICATE:
		fields_.certificate_.schemaForProcessEnv_.schema,
});
