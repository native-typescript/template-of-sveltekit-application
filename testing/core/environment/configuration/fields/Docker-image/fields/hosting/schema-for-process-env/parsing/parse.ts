import type {fields_} from "../../fields/module.ts";
import type {Hosting} from "../../Hosting.ts";
import type {schema} from "../schema.ts";
export function parse(processEnv: typeof schema.infer): Hosting {
	const basePathOfHosting =
		processEnv.DOCKER_IMAGE__HOSTING__BASE_PATH satisfies fields_.basePath_.BasePath;
	const hosting = {basePath: basePathOfHosting} as const satisfies Hosting;
	return hosting;
}
