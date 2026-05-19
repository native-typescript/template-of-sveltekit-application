import {fields_} from "../fields/module.ts";
import {type} from "arktype";
export const schema = type({
	ADAPTER__SERVER__BIND__PORT__TLS__SERVER__CERTIFICATE:
		fields_.certificate_.schemaForProcessEnv_.schema,
	ADAPTER__SERVER__BIND__PORT__TLS__SERVER__PRIVATE_KEY:
		fields_.privateKey_.schemaForProcessEnv_.schema,
});
