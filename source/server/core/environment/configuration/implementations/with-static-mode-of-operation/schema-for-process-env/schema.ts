import {fields_} from "../../../fields/module.ts";
import type {WithStaticModeOfOperationConfiguration} from "../WithStaticModeOfOperationConfiguration.ts";
import {z} from "zod";
export const schema = z
	.intersection(
		fields_.features_.implementations_.withStaticModeOfOperation_
			.schemaForProcessEnv_.schema,
		z.object({MODE_OF_OPERATION: z.literal(`static`)}),
	)
	.transform<WithStaticModeOfOperationConfiguration>(
		function parse(
			processEnv,
			context,
		): WithStaticModeOfOperationConfiguration {
			const featuresOfConfiguration =
				fields_.features_.implementations_.withStaticModeOfOperation_.schemaForProcessEnv_.parsing_.parse(
					processEnv,
				) satisfies fields_.features_.implementations_.withStaticModeOfOperation_.WithStaticModeOfOperationFeatures;
			const configuration = {
				features: featuresOfConfiguration,
				modeOfOperation: `static`,
			} as const satisfies WithStaticModeOfOperationConfiguration;
			return configuration;
		},
	);
