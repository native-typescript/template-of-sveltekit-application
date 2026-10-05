import {fields_} from "../../../fields/module.ts";
import type {WithDynamicModeOfOperationConfiguration} from "../WithDynamicModeOfOperationConfiguration.ts";
import {type} from "arktype";
export const schema =
	fields_.features_.implementations_.withDynamicModeOfOperation_.schemaForProcessEnv_.schema
		.and(type({MODE_OF_OPERATION: `'dynamic'`}))
		.pipe(function parse(processEnv): WithDynamicModeOfOperationConfiguration {
			const featuresOfConfiguration =
				fields_.features_.implementations_.withDynamicModeOfOperation_.schemaForProcessEnv_.parsing_.parse(
					processEnv,
				) satisfies fields_.features_.implementations_.withDynamicModeOfOperation_.WithDynamicModeOfOperationFeatures;
			const configuration = {
				features: featuresOfConfiguration,
				modeOfOperation: `dynamic`,
			} as const satisfies WithDynamicModeOfOperationConfiguration;
			return configuration;
		});
