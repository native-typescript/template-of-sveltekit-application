import type {Number_} from "../../Number.ts";
import type {schema} from "../schema.ts";
import type {z} from "zod";
export function parse(processEnv: z.output<typeof schema>): Number_ {
	const number = processEnv satisfies Number_;
	return number;
}
