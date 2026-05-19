import {schemaForProcessEnv_} from "../../../schema-for-process-env/module.ts";
import {fields_} from "../fields/module.ts";
import {type} from "arktype";
export const schema = schemaForProcessEnv_.schema
	.and(type({ADAPTER__NAME: `'Node'`}))
	.and(fields_.server_.schemaForProcessEnv_.schema);
