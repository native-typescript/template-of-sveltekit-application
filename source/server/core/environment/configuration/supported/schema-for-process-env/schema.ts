import {idOfAdapter_} from "../../../../../../id-of-adapter/module.ts";
import {implementations_} from "../../implementations/module.ts";
const id = idOfAdapter_.id;
export const schema =
	/* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition */
	id === null ?
		implementations_.withoutAdapter_.schemaForProcessEnv_.schema
	:	{}[id];
