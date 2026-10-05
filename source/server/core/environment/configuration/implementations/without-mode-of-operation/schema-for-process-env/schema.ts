import {fields_} from "../../../fields/module.ts";
import type {WithoutModeOfOperationConfiguration} from "../WithoutModeOfOperationConfiguration.ts";
import {type} from "arktype";
export const schema =
	fields_.features_.implementations_.withoutModeOfOperation_.schemaForProcessEnv_.schema
		.and(type({MODE_OF_OPERATION: `''`}))
		.pipe(function parse(processEnv): WithoutModeOfOperationConfiguration {
			const featuresOfConfiguration =
				fields_.features_.implementations_.withoutModeOfOperation_.schemaForProcessEnv_.parsing_.parse(
					processEnv,
				) satisfies fields_.features_.implementations_.withoutModeOfOperation_.WithoutModeOfOperationFeatures;
			const configuration = {
				features: featuresOfConfiguration,
				modeOfOperation: ``,
			} as const satisfies WithoutModeOfOperationConfiguration;
			return configuration;
		});
