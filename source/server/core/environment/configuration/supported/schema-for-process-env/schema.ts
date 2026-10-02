import {implementations_} from "../../implementations/module.ts";
export const schema =
	implementations_.withDynamicModeOfOperationWithoutAdapter_.schemaForProcessEnv_.schema.or(
		implementations_.withStaticModeOfOperationWithoutAdapter_
			.schemaForProcessEnv_.schema,
	);
