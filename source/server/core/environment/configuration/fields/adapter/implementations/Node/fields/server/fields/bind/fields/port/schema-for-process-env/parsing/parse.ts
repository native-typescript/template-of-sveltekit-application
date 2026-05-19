import {fields_} from "../../fields/module.ts";
import type {Port} from "../../Port.ts";
import type {schema} from "../schema.ts";
import type {z} from "zod";
export function parse(processEnv: z.output<typeof schema>): Port {
	const numberOfPort =
		processEnv.ADAPTER__SERVER__BIND__PORT__NUMBER satisfies fields_.number_.Number_;
	const tlsOfPort = fields_.tls_.schemaForProcessEnv_.parsing_.parse(
		processEnv,
	) satisfies fields_.tls_.Tls | null;
	const port = {number: numberOfPort, tls: tlsOfPort} as const satisfies Port;
	return port;
}
