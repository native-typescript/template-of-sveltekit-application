import {fields_} from "../fields/module.ts";
import {type} from "arktype";
export const schema = type({
	ADAPTER__SERVER__BIND__PORT__NUMBER:
		fields_.number_.schemaForProcessEnv_.schema,
}).and(fields_.tls_.schemaForProcessEnv_.schema);
