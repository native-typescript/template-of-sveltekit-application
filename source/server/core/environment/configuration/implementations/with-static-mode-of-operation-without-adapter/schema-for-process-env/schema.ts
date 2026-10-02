import {fields_} from "../../../fields/module.ts";
import type {WithStaticModeOfOperationWithoutAdapterConfiguration} from "../WithStaticModeOfOperationWithoutAdapterConfiguration.ts";
import {z} from "zod";
export const schema = z
	.intersection(
		z.object({ADAPTER__SHOULD_BE_USED: z.literal(`no`)}),
		z.intersection(
			fields_.features_.implementations_.withStaticModeOfOperation_
				.schemaForProcessEnv_.schema,
			z.object({MODE_OF_OPERATION: z.literal(`static`)}),
		),
	)
	.transform<WithStaticModeOfOperationWithoutAdapterConfiguration>(
		function parse(
			processEnv,
			context,
		): WithStaticModeOfOperationWithoutAdapterConfiguration {
			const featuresOfConfiguration =
				fields_.features_.implementations_.withStaticModeOfOperation_.schemaForProcessEnv_.parsing_.parse(
					processEnv,
				) satisfies fields_.features_.implementations_.withStaticModeOfOperation_.WithStaticModeOfOperationFeatures;
			const configuration = {
				adapter: null,
				features: featuresOfConfiguration,
				modeOfOperation: `static`,
				typeOfAdapter: `none`,
			} as const satisfies WithStaticModeOfOperationWithoutAdapterConfiguration;
			return configuration;
		},
	);
