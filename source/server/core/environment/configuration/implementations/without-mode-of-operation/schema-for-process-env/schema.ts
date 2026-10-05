import {fields_} from "../../../fields/module.ts";
import type {WithoutModeOfOperationConfiguration} from "../WithoutModeOfOperationConfiguration.ts";
import {z} from "zod";
export const schema = z
	.intersection(
		fields_.features_.implementations_.withoutModeOfOperation_
			.schemaForProcessEnv_.schema,
		z.object({MODE_OF_OPERATION: z.literal(``)}),
	)
	.transform<WithoutModeOfOperationConfiguration>(
		function parse(processEnv): WithoutModeOfOperationConfiguration {
			const featuresOfConfiguration =
				fields_.features_.implementations_.withoutModeOfOperation_.schemaForProcessEnv_.parsing_.parse(
					processEnv,
				) satisfies fields_.features_.implementations_.withoutModeOfOperation_.WithoutModeOfOperationFeatures;
			const configuration = {
				features: featuresOfConfiguration,
				modeOfOperation: ``,
			} as const satisfies WithoutModeOfOperationConfiguration;
			return configuration;
		},
	);
