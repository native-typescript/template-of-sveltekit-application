import {implementations_} from "../../implementations/module.ts";
import {z} from "zod";
export const schema = z.union([
	implementations_.withDynamicModeOfOperationWithNodeAdapter_
		.schemaForProcessEnv_.schema,
	implementations_.withDynamicModeOfOperationWithoutAdapter_
		.schemaForProcessEnv_.schema,
	implementations_.withStaticModeOfOperationWithNodeAdapter_
		.schemaForProcessEnv_.schema,
	implementations_.withStaticModeOfOperationWithStaticAdapter_
		.schemaForProcessEnv_.schema,
	implementations_.withStaticModeOfOperationWithoutAdapter_.schemaForProcessEnv_
		.schema,
]);
