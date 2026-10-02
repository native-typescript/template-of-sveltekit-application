import {implementations_} from "../../implementations/module.ts";
import {z} from "zod";
export const schema = z.union([
	implementations_.withDynamicModeOfOperationWithoutAdapter_
		.schemaForProcessEnv_.schema,
	implementations_.withStaticModeOfOperationWithoutAdapter_.schemaForProcessEnv_
		.schema,
]);
