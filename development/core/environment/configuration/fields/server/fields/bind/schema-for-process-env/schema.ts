import {fields_} from "../fields/module.ts";
import {type} from "arktype";
export const schema = type({
	SERVER__BIND__ADDRESS: fields_.address_.schemaForProcessEnv_.schema,
}).and(fields_.port_.schemaForProcessEnv_.schema);
