import {implementations_} from "../../implementations/module.ts";
export const schema =
	implementations_.withDynamicModeOfOperation_.schemaForProcessEnv_.schema.or(
		implementations_.withStaticModeOfOperation_.schemaForProcessEnv_.schema,
	);
