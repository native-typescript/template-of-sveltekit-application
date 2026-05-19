import {fields_} from "../../../fields/module.ts";
import type {WithDynamicModeOfOperationWithNodeAdapterConfiguration} from "../WithDynamicModeOfOperationWithNodeAdapterConfiguration.ts";
import {z} from "zod";
export const schema = z
	.intersection(
		z.intersection(
			z.object({ADAPTER__SHOULD_BE_USED: z.literal(`yes`)}),
			fields_.adapter_.implementations_.node_.schemaForProcessEnv_.schema,
		),
		z.intersection(
			fields_.features_.implementations_.withDynamicModeOfOperation_
				.schemaForProcessEnv_.schema,
			z.object({MODE_OF_OPERATION: z.literal(`dynamic`)}),
		),
	)
	.transform<WithDynamicModeOfOperationWithNodeAdapterConfiguration>(
		function parse(
			processEnv,
			context,
		): WithDynamicModeOfOperationWithNodeAdapterConfiguration {
			const adapterOfConfiguration =
				fields_.adapter_.implementations_.node_.schemaForProcessEnv_.parsing_.parse(
					processEnv,
				) satisfies fields_.adapter_.implementations_.node_.NodeAdapter;
			const featuresOfConfiguration =
				fields_.features_.implementations_.withDynamicModeOfOperation_.schemaForProcessEnv_.parsing_.parse(
					processEnv,
				) satisfies fields_.features_.implementations_.withDynamicModeOfOperation_.WithDynamicModeOfOperationFeatures;
			const configuration = {
				adapter: adapterOfConfiguration,
				features: featuresOfConfiguration,
				modeOfOperation: `dynamic`,
				typeOfAdapter: `node`,
			} as const satisfies WithDynamicModeOfOperationWithNodeAdapterConfiguration;
			return configuration;
		},
	);
