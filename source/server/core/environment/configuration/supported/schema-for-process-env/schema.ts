import {idOfAdapter_} from "../../../../../../id-of-adapter/module.ts";
import {implementations_} from "../../implementations/module.ts";
const id = idOfAdapter_.id;
export const schema =
	id === null ?
		implementations_.withoutAdapter_.schemaForProcessEnv_.schema
	:	{
			node: implementations_.withNodeAdapter_.schemaForProcessEnv_.schema,
			static: implementations_.withStaticAdapter_.schemaForProcessEnv_.schema,
		}[id];
