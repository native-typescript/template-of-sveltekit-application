import type {BasePath} from "../../BasePath.ts";
import type {schema} from "../schema.ts";
import type {z} from "zod";
export function parse(processEnv: z.output<typeof schema>): BasePath {
	const basePath = processEnv satisfies BasePath;
	return basePath;
}
