import type {Date_} from "../../Date.ts";
import type {schema} from "../schema.ts";
import type {z} from "zod";
export function parse(processEnv: z.output<typeof schema>): Date_ {
	const date = processEnv satisfies Date_;
	return date;
}
