import {schemaForProcessEnv_} from "../../../schema-for-process-env/module.ts";
import type {WithoutAdapterConfiguration} from "../WithoutAdapterConfiguration.ts";
import {z} from "zod";
export const schema = z
	.intersection(schemaForProcessEnv_.schema, z.object({}))
	.transform(function parse(processEnv): WithoutAdapterConfiguration {
		const configuration: WithoutAdapterConfiguration = {
			adapter: null,
			type: `withoutAdapter`,
		};
		return configuration;
	});
