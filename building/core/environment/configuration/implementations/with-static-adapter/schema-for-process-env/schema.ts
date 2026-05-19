import {fields_} from "../../../fields/module.ts";
import {schemaForProcessEnv_} from "../../../schema-for-process-env/module.ts";
import type {WithStaticAdapterConfiguration} from "../WithStaticAdapterConfiguration.ts";
import {z} from "zod";
export const schema = z
	.intersection(
		schemaForProcessEnv_.schema,
		z.intersection(
			z.object({ADAPTER__SHOULD_BE_USED: z.literal(`yes`)}),
			fields_.adapter_.implementations_.static_.schemaForProcessEnv_.schema,
		),
	)
	.transform<WithStaticAdapterConfiguration>(
		function parse(processEnv, context): WithStaticAdapterConfiguration {
			const adapterOfConfiguration =
				fields_.adapter_.implementations_.static_.schemaForProcessEnv_.parsing_.parse(
					processEnv,
				) satisfies fields_.adapter_.implementations_.static_.StaticAdapter;
			const hostingOfConfiguration =
				fields_.hosting_.schemaForProcessEnv_.parsing_.parse(
					processEnv,
				) satisfies fields_.hosting_.Hosting;
			const configuration = {
				adapter: adapterOfConfiguration,
				hosting: hostingOfConfiguration,
				type: `static`,
			} as const satisfies WithStaticAdapterConfiguration;
			return configuration;
		},
	);
