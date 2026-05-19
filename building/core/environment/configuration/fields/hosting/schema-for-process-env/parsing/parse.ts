import type {fields_} from "../../fields/module.ts";
import type {Hosting} from "../../Hosting.ts";
import type {schema} from "../schema.ts";
import type {z} from "zod";
export function parse(processEnv: z.output<typeof schema>): Hosting {
	const basePathOfHosting =
		processEnv.HOSTING__BASE_PATH satisfies fields_.basePath_.BasePath;
	const hosting = {basePath: basePathOfHosting} as const satisfies Hosting;
	return hosting;
}
