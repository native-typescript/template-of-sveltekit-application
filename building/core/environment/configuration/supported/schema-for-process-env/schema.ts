import {implementations_} from "../../implementations/module.ts";
import {z} from "zod";
export const schema = z.union([
	implementations_.withoutAdapter_.schemaForProcessEnv_.schema,
]);
