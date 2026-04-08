import {implementations_} from "../../implementations/module.ts";
import {z} from "zod";
export const schema = z.union([
	implementations_.withNodeAdapter_.schemaForProcessEnv_.schema,
	implementations_.withStaticAdapter_.schemaForProcessEnv_.schema,
]);
