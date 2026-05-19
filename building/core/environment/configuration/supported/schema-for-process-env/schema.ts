import {implementations_} from "../../implementations/module.ts";
export const schema =
	implementations_.withNodeAdapter_.schemaForProcessEnv_.schema
		.or(implementations_.withoutAdapter_.schemaForProcessEnv_.schema)
		.or(implementations_.withStaticAdapter_.schemaForProcessEnv_.schema);
