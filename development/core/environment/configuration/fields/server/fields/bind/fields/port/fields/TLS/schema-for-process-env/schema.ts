import {fields_} from "../fields/module.ts";
import {type} from "arktype";
export const schema = type({SERVER__BIND__PORT__TLS__IS_ENABLED: `'no'`}).or(
	type({SERVER__BIND__PORT__TLS__IS_ENABLED: `'yes'`})
		.and(fields_.intermediateCa_.schemaForProcessEnv_.schema)
		.and(fields_.server_.schemaForProcessEnv_.schema),
);
