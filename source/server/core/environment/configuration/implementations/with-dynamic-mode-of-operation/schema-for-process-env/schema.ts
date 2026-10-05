import {fields_} from "../../../fields/module.ts";
import type {WithDynamicModeOfOperationConfiguration} from "../WithDynamicModeOfOperationConfiguration.ts";
import {z} from "zod";
export const schema = z
	.intersection(
		fields_.features_.implementations_.withDynamicModeOfOperation_
			.schemaForProcessEnv_.schema,
		z.object({MODE_OF_OPERATION: z.literal(`dynamic`)}),
	)
	.transform<WithDynamicModeOfOperationConfiguration>(
		function parse(
			processEnv,
			context,
		): WithDynamicModeOfOperationConfiguration {
			const featuresOfConfiguration =
				fields_.features_.implementations_.withDynamicModeOfOperation_.schemaForProcessEnv_.parsing_.parse(
					processEnv,
				) satisfies fields_.features_.implementations_.withDynamicModeOfOperation_.WithDynamicModeOfOperationFeatures;
			const configuration = {
				features: featuresOfConfiguration,
				modeOfOperation: `dynamic`,
			} as const satisfies WithDynamicModeOfOperationConfiguration;
			return configuration;
		},
	);
