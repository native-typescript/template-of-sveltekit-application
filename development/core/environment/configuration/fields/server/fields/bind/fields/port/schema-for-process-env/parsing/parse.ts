import {fields_} from "../../fields/module.ts";
import type {Port} from "../../Port.ts";
import type {schema} from "../schema.ts";
export function parse(processEnv: typeof schema.infer): Port {
	const numberOfPort =
		processEnv.SERVER__BIND__PORT__NUMBER satisfies fields_.number_.Number_;
	const tlsOfPort = fields_.tls_.schemaForProcessEnv_.parsing_.parse(
		processEnv,
	) satisfies fields_.tls_.Tls | null;
	const port = {number: numberOfPort, tls: tlsOfPort} as const satisfies Port;
	return port;
}
