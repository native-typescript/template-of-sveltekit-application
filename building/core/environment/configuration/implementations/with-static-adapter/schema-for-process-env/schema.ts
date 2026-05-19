import {schemaForProcessEnv_} from "../../../schema-for-process-env/module.ts";
import type {WithStaticAdapterConfiguration} from "../WithStaticAdapterConfiguration.ts";
import {z} from "zod";
export const schema = z
	.intersection(
		schemaForProcessEnv_.schema,
		z.object({ADAPTER__NAME: z.literal(`static`)}),
	)
	.transform(
		function parse(processEnv, context): WithStaticAdapterConfiguration {
			const configuration: WithStaticAdapterConfiguration = {
				adapter: {id: `static`},
				hosting: {basePath: processEnv.HOSTING__BASE_PATH},
				type: `withStaticAdapter`,
			};
			return configuration;
		},
	);
