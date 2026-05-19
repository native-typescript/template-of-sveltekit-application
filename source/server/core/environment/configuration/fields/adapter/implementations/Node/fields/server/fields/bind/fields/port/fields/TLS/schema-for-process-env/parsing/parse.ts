import {fields_} from "../../fields/module.ts";
import type {Tls} from "../../Tls.ts";
import type {schema} from "../schema.ts";
import type {z} from "zod";
export function parse(processEnv: z.output<typeof schema>): null | Tls {
	switch (processEnv.ADAPTER__SERVER__BIND__PORT__TLS__IS_ENABLED) {
		case `no`: {
			return null;
		}
		case `yes`: {
			const intermediateCaOfTls =
				fields_.intermediateCa_.schemaForProcessEnv_.parsing_.parse(
					processEnv,
				) satisfies fields_.intermediateCa_.IntermediateCa;
			const serverOfTls = fields_.server_.schemaForProcessEnv_.parsing_.parse(
				processEnv,
			) satisfies fields_.server_.Server;
			const tls = {
				intermediateCa: intermediateCaOfTls,
				server: serverOfTls,
			} as const satisfies Tls;
			return tls;
		}
	}
}
