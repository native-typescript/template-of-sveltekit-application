import type {Configuration} from "../Configuration.ts";
import {fields_} from "../fields/module.ts";
export const schema =
	fields_.server_.schemaForProcessEnv_.schema.transform<Configuration>(
		function parse(processEnv, context): Configuration {
			const serverOfConfiguration =
				fields_.server_.schemaForProcessEnv_.parsing_.parse(
					processEnv,
				) satisfies fields_.server_.Server;
			const configuration = {
				server: serverOfConfiguration,
			} as const satisfies Configuration;
			return configuration;
		},
	);
