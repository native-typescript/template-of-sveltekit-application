import {fields_} from "../../../fields/module.ts";
import type {WithStaticModeOfOperationConfiguration} from "../WithStaticModeOfOperationConfiguration.ts";
import {type} from "arktype";
export const schema =
	fields_.features_.implementations_.withStaticModeOfOperation_.schemaForProcessEnv_.schema
		.and(type({MODE_OF_OPERATION: `'static'`}))
		.pipe(function parse(processEnv): WithStaticModeOfOperationConfiguration {
			const featuresOfConfiguration =
				fields_.features_.implementations_.withStaticModeOfOperation_.schemaForProcessEnv_.parsing_.parse(
					processEnv,
				) satisfies fields_.features_.implementations_.withStaticModeOfOperation_.WithStaticModeOfOperationFeatures;
			const configuration = {
				features: featuresOfConfiguration,
				modeOfOperation: `static`,
			} as const satisfies WithStaticModeOfOperationConfiguration;
			return configuration;
		});
