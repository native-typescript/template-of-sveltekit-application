import type {StaticAdapter} from "../../StaticAdapter.ts";
import type {schema} from "../schema.ts";
import type {z} from "zod";
export function parse(processEnv: z.output<typeof schema>): StaticAdapter {
	const staticAdapter = {id: `static`} as const satisfies StaticAdapter;
	return staticAdapter;
}
