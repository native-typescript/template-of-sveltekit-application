import {fields_} from "../../../fields/module.ts";
import type {WithStaticModeOfOperationWithNodeAdapterConfiguration} from "../WithStaticModeOfOperationWithNodeAdapterConfiguration.ts";
import {z} from "zod";
export const schema = z
	.intersection(
		z.intersection(
			z.object({ADAPTER__SHOULD_BE_USED: z.literal(`yes`)}),
			fields_.adapter_.implementations_.node_.schemaForProcessEnv_.schema,
		),
		z.intersection(
			fields_.features_.implementations_.withStaticModeOfOperation_
				.schemaForProcessEnv_.schema,
			z.object({MODE_OF_OPERATION: z.literal(`static`)}),
		),
	)
	.transform<WithStaticModeOfOperationWithNodeAdapterConfiguration>(
		function parse(
			processEnv,
			context,
		): WithStaticModeOfOperationWithNodeAdapterConfiguration {
			const adapterOfConfiguration =
				fields_.adapter_.implementations_.node_.schemaForProcessEnv_.parsing_.parse(
					processEnv,
				) satisfies fields_.adapter_.implementations_.node_.NodeAdapter;
			const featuresOfConfiguration =
				fields_.features_.implementations_.withStaticModeOfOperation_.schemaForProcessEnv_.parsing_.parse(
					processEnv,
				) satisfies fields_.features_.implementations_.withStaticModeOfOperation_.WithStaticModeOfOperationFeatures;
			const configuration = {
				adapter: adapterOfConfiguration,
				features: featuresOfConfiguration,
				modeOfOperation: `static`,
				typeOfAdapter: `node`,
			} as const satisfies WithStaticModeOfOperationWithNodeAdapterConfiguration;
			return configuration;
		},
	);
