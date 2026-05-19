import {fields_} from "../../../fields/module.ts";
import {schemaForProcessEnv_} from "../../../schema-for-process-env/module.ts";
import type {WithDynamicModeOfOperationWithNodeAdapterConfiguration} from "../WithDynamicModeOfOperationWithNodeAdapterConfiguration.ts";
import {type} from "arktype";
export const schema = schemaForProcessEnv_.schema
	.and(type({ADAPTER__SHOULD_BE_USED: `'yes'`}))
	.and(fields_.adapter_.implementations_.node_.schemaForProcessEnv_.schema)
	.and(
		fields_.features_.implementations_.withDynamicModeOfOperation_
			.schemaForProcessEnv_.schema,
	)
	.and(type({MODE_OF_OPERATION: `'dynamic'`}))
	.pipe(
		function parse(
			processEnv,
		): WithDynamicModeOfOperationWithNodeAdapterConfiguration {
			const adapterOfConfiguration =
				fields_.adapter_.implementations_.node_.schemaForProcessEnv_.parsing_.parse(
					processEnv,
				) satisfies fields_.adapter_.implementations_.node_.NodeAdapter;
			const featuresOfConfiguration =
				fields_.features_.implementations_.withDynamicModeOfOperation_.schemaForProcessEnv_.parsing_.parse(
					processEnv,
				) satisfies fields_.features_.implementations_.withDynamicModeOfOperation_.WithDynamicModeOfOperationFeatures;
			const configuration = {
				adapter: adapterOfConfiguration,
				features: featuresOfConfiguration,
				modeOfOperation: `dynamic`,
				typeOfAdapter: `node`,
			} as const satisfies WithDynamicModeOfOperationWithNodeAdapterConfiguration;
			return configuration;
		},
	);
