import {fields_} from "../../../fields/module.ts";
import {schemaForProcessEnv_} from "../../../schema-for-process-env/module.ts";
import type {WithDynamicModeOfOperationWithoutAdapterConfiguration} from "../WithDynamicModeOfOperationWithoutAdapterConfiguration.ts";
import {type} from "arktype";
export const schema = schemaForProcessEnv_.schema
	.and(type({ADAPTER__SHOULD_BE_USED: `'no'`}))
	.and(
		fields_.features_.implementations_.withDynamicModeOfOperation_
			.schemaForProcessEnv_.schema,
	)
	.and(type({MODE_OF_OPERATION: `'dynamic'`}))
	.pipe(
		function parse(
			processEnv,
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
