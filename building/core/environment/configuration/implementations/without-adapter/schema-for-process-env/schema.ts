import {fields_} from "../../../fields/module.ts";
import {schemaForProcessEnv_} from "../../../schema-for-process-env/module.ts";
import type {WithoutAdapterConfiguration} from "../WithoutAdapterConfiguration.ts";
import {type} from "arktype";
export const schema = schemaForProcessEnv_.schema
	.and(type({ADAPTER__SHOULD_BE_USED: `'no'`}))
	.pipe(function parse(processEnv): WithoutAdapterConfiguration {
		const hostingOfConfiguration =
			fields_.hosting_.schemaForProcessEnv_.parsing_.parse(
				processEnv,
			) satisfies fields_.hosting_.Hosting;
		const configuration = {
			adapter: null,
			hosting: hostingOfConfiguration,
			type: `none`,
		} as const satisfies WithoutAdapterConfiguration;
		return configuration;
	});
