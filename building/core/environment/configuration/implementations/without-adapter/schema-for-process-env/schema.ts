import {schemaForProcessEnv_} from "../../../schema-for-process-env/module.ts";
import type {WithoutAdapterConfiguration} from "../WithoutAdapterConfiguration.ts";
import {z} from "zod";
export const schema = z
	.intersection(
		schemaForProcessEnv_.schema,
		z.object({ADAPTER__NAME: z.literal(``)}),
	)
	.transform(function parse(processEnv, context): WithoutAdapterConfiguration {
		const configuration: WithoutAdapterConfiguration = {
			adapter: null,
			hosting: {basePath: processEnv.HOSTING__BASE_PATH},
			type: `withoutAdapter`,
		};
		return configuration;
	});
