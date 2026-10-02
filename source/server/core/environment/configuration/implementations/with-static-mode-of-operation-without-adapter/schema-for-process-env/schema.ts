import {fields_} from "../../../fields/module.ts";
import {schemaForProcessEnv_} from "../../../schema-for-process-env/module.ts";
import type {WithStaticModeOfOperationWithoutAdapterConfiguration} from "../WithStaticModeOfOperationWithoutAdapterConfiguration.ts";
import {type} from "arktype";
export const schema = schemaForProcessEnv_.schema
	.and(type({ADAPTER__SHOULD_BE_USED: `'no'`}))
	.and(
		fields_.features_.implementations_.withStaticModeOfOperation_
			.schemaForProcessEnv_.schema,
	)
	.and(type({MODE_OF_OPERATION: `'static'`}))
	.pipe(
		function parse(
			processEnv,
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
