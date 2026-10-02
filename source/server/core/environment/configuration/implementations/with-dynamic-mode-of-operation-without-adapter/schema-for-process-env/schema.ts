import {fields_} from "../../../fields/module.ts";
import type {WithDynamicModeOfOperationWithoutAdapterConfiguration} from "../WithDynamicModeOfOperationWithoutAdapterConfiguration.ts";
import {z} from "zod";
export const schema = z
	.intersection(
		z.object({ADAPTER__SHOULD_BE_USED: z.literal(`no`)}),
		z.intersection(
			fields_.features_.implementations_.withDynamicModeOfOperation_
				.schemaForProcessEnv_.schema,
			z.object({MODE_OF_OPERATION: z.literal(`dynamic`)}),
		),
	)
	.transform<WithDynamicModeOfOperationWithoutAdapterConfiguration>(
		function parse(
			processEnv,
			context,
		): WithDynamicModeOfOperationWithoutAdapterConfiguration {
			const featuresOfConfiguration =
				fields_.features_.implementations_.withDynamicModeOfOperation_.schemaForProcessEnv_.parsing_.parse(
					processEnv,
				) satisfies fields_.features_.implementations_.withDynamicModeOfOperation_.WithDynamicModeOfOperationFeatures;
			const configuration = {
				adapter: null,
				features: featuresOfConfiguration,
				modeOfOperation: `dynamic`,
				typeOfAdapter: `none`,
			} as const satisfies WithDynamicModeOfOperationWithoutAdapterConfiguration;
			return configuration;
		},
	);
