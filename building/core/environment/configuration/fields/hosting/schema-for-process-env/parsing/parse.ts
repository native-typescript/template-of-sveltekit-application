import type {Hosting} from "../../Hosting.ts";
import type {schema} from "../schema.ts";
import type {z} from "zod";
export function parse(processEnv: z.output<typeof schema>): Hosting {
	const hosting = {} as const satisfies Hosting;
	return hosting;
}
