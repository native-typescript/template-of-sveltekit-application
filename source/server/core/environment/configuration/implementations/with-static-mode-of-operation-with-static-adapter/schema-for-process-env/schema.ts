import {fields_} from "../../../fields/module.ts";
import type {WithStaticModeOfOperationWithStaticAdapterConfiguration} from "../WithStaticModeOfOperationWithStaticAdapterConfiguration.ts";
import {z} from "zod";
export const schema = z
	.intersection(
		z.intersection(
			z.object({ADAPTER__SHOULD_BE_USED: z.literal(`yes`)}),
			fields_.adapter_.implementations_.static_.schemaForProcessEnv_.schema,
		),
		z.intersection(
			fields_.features_.implementations_.withStaticModeOfOperation_
				.schemaForProcessEnv_.schema,
			z.object({MODE_OF_OPERATION: z.literal(`static`)}),
		),
	)
	.transform<WithStaticModeOfOperationWithStaticAdapterConfiguration>(
		function parse(
			processEnv,
			context,
		): WithStaticModeOfOperationWithStaticAdapterConfiguration {
			const adapterOfConfiguration =
				fields_.adapter_.implementations_.static_.schemaForProcessEnv_.parsing_.parse(
					processEnv,
				) satisfies fields_.adapter_.implementations_.static_.StaticAdapter;
			const featuresOfConfiguration =
				fields_.features_.implementations_.withStaticModeOfOperation_.schemaForProcessEnv_.parsing_.parse(
					processEnv,
				) satisfies fields_.features_.implementations_.withStaticModeOfOperation_.WithStaticModeOfOperationFeatures;
			const configuration = {
				adapter: adapterOfConfiguration,
				features: featuresOfConfiguration,
				modeOfOperation: `static`,
				typeOfAdapter: `static`,
			} as const satisfies WithStaticModeOfOperationWithStaticAdapterConfiguration;
			return configuration;
		},
	);
