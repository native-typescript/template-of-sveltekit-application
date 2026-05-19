import type {NodeAdapter} from "../../NodeAdapter.ts";
import type {schema} from "../schema.ts";
import type {z} from "zod";
export function parse(processEnv: z.output<typeof schema>): NodeAdapter {
	const nodeAdapter = {id: `node`} as const satisfies NodeAdapter;
	return nodeAdapter;
}
