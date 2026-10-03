import type {Hosting} from "../../Hosting.ts";
import type {schema} from "../schema.ts";
export function parse(processEnv: typeof schema.infer): Hosting {
	const hosting = {} as const satisfies Hosting;
	return hosting;
}
