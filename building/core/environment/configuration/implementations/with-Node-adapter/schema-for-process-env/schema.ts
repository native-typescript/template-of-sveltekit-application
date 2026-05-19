import {fields_} from "../../../fields/module.ts";
import {schemaForProcessEnv_} from "../../../schema-for-process-env/module.ts";
import type {WithNodeAdapterConfiguration} from "../WithNodeAdapterConfiguration.ts";
import {type} from "arktype";
export const schema = schemaForProcessEnv_.schema
	.and(type({ADAPTER__SHOULD_BE_USED: `'yes'`}))
	.and(fields_.adapter_.implementations_.node_.schemaForProcessEnv_.schema)
	.pipe(function parse(processEnv): WithNodeAdapterConfiguration {
		const adapterOfConfiguration =
			fields_.adapter_.implementations_.node_.schemaForProcessEnv_.parsing_.parse(
				processEnv,
			) satisfies fields_.adapter_.implementations_.node_.NodeAdapter;
		const hostingOfConfiguration =
			fields_.hosting_.schemaForProcessEnv_.parsing_.parse(
				processEnv,
			) satisfies fields_.hosting_.Hosting;
		const configuration = {
			adapter: adapterOfConfiguration,
			hosting: hostingOfConfiguration,
			type: `node`,
		} as const satisfies WithNodeAdapterConfiguration;
		return configuration;
	});
