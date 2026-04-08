import type {Configuration} from "../Configuration.ts";
import {z} from "zod";
export const schema = z
	.object({
		DEBIAN__DOCKER_IMAGE__TAG__DATE: z.string().nonempty(),
		HOSTING__BASE_PATH: z.union([
			z.templateLiteral([z.literal(`/`), z.string()]),
			z.literal(``).transform<null>(function makeNull(): null {
				return null;
			}),
		]),
		NODE_JS__VERSION: z.templateLiteral([
			z.string().nonempty(),
			`.`,
			z.string().nonempty(),
			`.`,
			z.string().nonempty(),
		]),
	})
	.transform<Configuration>(function parse(processEnv): Configuration {
		const configuration: Configuration = {
			debian: {
				dockerImage: {tag: {date: processEnv.DEBIAN__DOCKER_IMAGE__TAG__DATE}},
			},
			hosting: {basePath: processEnv.HOSTING__BASE_PATH},
			nodeJs: {version: processEnv.NODE_JS__VERSION},
		};
		return configuration;
	});
