import {schemaForProcessEnv_} from "../../../schema-for-process-env/module.ts";
import type {WithoutAdapterConfiguration} from "../WithoutAdapterConfiguration.ts";
import {type} from "arktype";
export const schema = schemaForProcessEnv_.schema
	.and(type({ADAPTER__SHOULD_BE_USED: `'no'`}))
	.pipe(function parse(processEnv): WithoutAdapterConfiguration {
		const configuration = {
			adapter: null,
			type: `none`,
		} as const satisfies WithoutAdapterConfiguration;
		return configuration;
	});
