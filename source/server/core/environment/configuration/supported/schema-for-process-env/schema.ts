import {idOfAdapter_} from "../../../../../../id-of-adapter/module.ts";
import {implementations_} from "../../implementations/module.ts";
export const schema = {
	node: implementations_.withNodeAdapter_.schemaForProcessEnv_.schema,
	static: implementations_.withStaticAdapter_.schemaForProcessEnv_.schema,
}[idOfAdapter_.id];
