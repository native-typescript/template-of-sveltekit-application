import {fields_} from "../../../fields/module.ts";
import {schemaForProcessEnv_} from "../../../schema-for-process-env/module.ts";
import type {WithStaticModeOfOperationWithStaticAdapterConfiguration} from "../WithStaticModeOfOperationWithStaticAdapterConfiguration.ts";
import {type} from "arktype";
export const schema = schemaForProcessEnv_.schema
	.and(type({ADAPTER__SHOULD_BE_USED: `'yes'`}))
	.and(fields_.adapter_.implementations_.static_.schemaForProcessEnv_.schema)
	.and(
		fields_.features_.implementations_.withStaticModeOfOperation_
			.schemaForProcessEnv_.schema,
	)
	.and(type({MODE_OF_OPERATION: `'static'`}))
	.pipe(
		function parse(
			processEnv,
		): WithStaticModeOfOperationWithStaticAdapterConfiguration {
			const adapterOfConfiguration =
				fields_.adapter_.implementations_.static_.schemaForProcessEnv_.parsing_.parse(
					processEnv,
				) satisfies fields_.adapter_.implementations_.static_.StaticAdapter;
			const featuresOfConfiguration =
				fields_.features_.implementations_.withStaticModeOfOperation_.schemaForProcessEnv_.parsing_.parse(
					processEnv,
				) satisfies fields_.features_.implementations_.withStaticModeOfOperation_.WithStaticModeOfOperationFeatures;
			const configuration = {
				adapter: adapterOfConfiguration,
				features: featuresOfConfiguration,
				modeOfOperation: `static`,
				typeOfAdapter: `static`,
			} as const satisfies WithStaticModeOfOperationWithStaticAdapterConfiguration;
			return configuration;
		},
	);
