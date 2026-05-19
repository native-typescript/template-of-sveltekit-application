import type {StaticAdapter} from "../../StaticAdapter.ts";
import type {schema} from "../schema.ts";
export function parse(processEnv: typeof schema.infer): StaticAdapter {
	const staticAdapter = {id: `static`} as const satisfies StaticAdapter;
	return staticAdapter;
}
