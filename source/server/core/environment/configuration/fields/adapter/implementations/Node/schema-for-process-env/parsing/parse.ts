import {fields_} from "../../fields/module.ts";
import type {NodeAdapter} from "../../NodeAdapter.ts";
import type {schema} from "../schema.ts";
import type {z} from "zod";
export function parse(processEnv: z.output<typeof schema>): NodeAdapter {
	const serverOfNodeAdapter =
		fields_.server_.schemaForProcessEnv_.parsing_.parse(
			processEnv,
		) satisfies fields_.server_.Server | null;
	const nodeAdapter = {
		id: `node`,
		server: serverOfNodeAdapter,
	} as const satisfies NodeAdapter;
	return nodeAdapter;
}
