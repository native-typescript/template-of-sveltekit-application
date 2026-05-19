import {fields_} from "../../../fields/module.ts";
import {schemaForProcessEnv_} from "../../../schema-for-process-env/module.ts";
import type {WithNodeAdapterConfiguration} from "../WithNodeAdapterConfiguration.ts";
import {z} from "zod";
export const schema = z
	.intersection(
		schemaForProcessEnv_.schema,
		z.intersection(
			z.object({ADAPTER__SHOULD_BE_USED: z.literal(`yes`)}),
			fields_.adapter_.implementations_.node_.schemaForProcessEnv_.schema,
		),
	)
	.transform<WithNodeAdapterConfiguration>(
		function parse(processEnv, context): WithNodeAdapterConfiguration {
			const adapterOfConfiguration =
				fields_.adapter_.implementations_.node_.schemaForProcessEnv_.parsing_.parse(
					processEnv,
				) satisfies fields_.adapter_.implementations_.node_.NodeAdapter;
			const hostingOfConfiguration =
				fields_.hosting_.schemaForProcessEnv_.parsing_.parse(
					processEnv,
				) satisfies fields_.hosting_.Hosting;
			const configuration = {
				adapter: adapterOfConfiguration,
				hosting: hostingOfConfiguration,
				type: `node`,
			} as const satisfies WithNodeAdapterConfiguration;
			return configuration;
		},
	);
