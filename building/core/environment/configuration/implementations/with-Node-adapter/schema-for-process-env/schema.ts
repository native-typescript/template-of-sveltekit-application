import {schemaForProcessEnv_} from "../../../schema-for-process-env/module.ts";
import type {WithNodeAdapterConfiguration} from "../WithNodeAdapterConfiguration.ts";
import {z} from "zod";
export const schema = z
	.intersection(
		schemaForProcessEnv_.schema,
		z.object({ADAPTER__NAME: z.literal(`Node`)}),
	)
	.transform(function parse(processEnv, context): WithNodeAdapterConfiguration {
		const configuration: WithNodeAdapterConfiguration = {
			adapter: {id: `node`},
			hosting: {basePath: processEnv.HOSTING__BASE_PATH},
			type: `withNodeAdapter`,
		};
		return configuration;
	});
