import {fields_} from "../fields/module.ts";
import {type} from "arktype";
export const schema = type({ADAPTER__SERVER__IS_ENABLED: `'no'`}).or(
	type({ADAPTER__SERVER__IS_ENABLED: `'yes'`}).and(
		fields_.bind_.schemaForProcessEnv_.schema,
	),
);
