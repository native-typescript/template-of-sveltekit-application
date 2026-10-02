import {fields_} from "../fields/module.ts";
import {type} from "arktype";
export const schema = type({
	ADAPTER__NAME: fields_.name_.schemaForProcessEnv_.schema,
});
