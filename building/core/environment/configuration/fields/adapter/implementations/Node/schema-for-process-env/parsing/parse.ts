import type {NodeAdapter} from "../../NodeAdapter.ts";
import type {schema} from "../schema.ts";
export function parse(processEnv: typeof schema.infer): NodeAdapter {
	const nodeAdapter = {id: `node`} as const satisfies NodeAdapter;
	return nodeAdapter;
}
