import {schemaForProcessEnv_} from "../../../schema-for-process-env/module.ts";
import type {WithoutAdapterConfiguration} from "../WithoutAdapterConfiguration.ts";
import {z} from "zod";
export const schema = z
	.intersection(
		schemaForProcessEnv_.schema,
		z.object({ADAPTER__SHOULD_BE_USED: z.literal(`no`)}),
	)
	.transform<WithoutAdapterConfiguration>(
		function parse(processEnv, context): WithoutAdapterConfiguration {
			const configuration = {
				adapter: null,
				type: `none`,
			} as const satisfies WithoutAdapterConfiguration;
			return configuration;
		},
	);
