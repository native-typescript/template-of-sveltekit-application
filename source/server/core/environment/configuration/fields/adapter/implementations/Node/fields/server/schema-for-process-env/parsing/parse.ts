import {fields_} from "../../fields/module.ts";
import type {Server} from "../../Server.ts";
import type {schema} from "../schema.ts";
export function parse(processEnv: typeof schema.infer): null | Server {
	switch (processEnv.ADAPTER__SERVER__IS_ENABLED) {
		case `no`: {
			return null;
		}
		case `yes`: {
			const bindOfServer = fields_.bind_.schemaForProcessEnv_.parsing_.parse(
				processEnv,
			) satisfies fields_.bind_.Bind;
			const server = {bind: bindOfServer} as const satisfies Server;
			return server;
		}
	}
}
