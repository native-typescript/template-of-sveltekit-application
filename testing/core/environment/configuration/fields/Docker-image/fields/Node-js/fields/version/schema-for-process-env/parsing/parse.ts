import type {Version} from "../../Version.ts";
import type {schema} from "../schema.ts";
import type {z} from "zod";
export function parse(processEnv: z.output<typeof schema>): Version {
	const version = processEnv satisfies Version;
	return version;
}
