import type {Configuration} from "../Configuration.ts";
import {z} from "zod";
export const schema = z
	.object({})
	.transform<Configuration>(function parse(processEnv): Configuration {
		const configuration: Configuration = {};
		return configuration;
	});
