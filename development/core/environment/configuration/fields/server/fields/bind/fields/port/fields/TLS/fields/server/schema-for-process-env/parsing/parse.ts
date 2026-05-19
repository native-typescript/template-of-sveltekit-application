import {fields_} from "../../fields/module.ts";
import type {Server} from "../../Server.ts";
import type {schema} from "../schema.ts";
import type {z} from "zod";
export function parse(processEnv: z.output<typeof schema>): Server {
	const certificateOfServer =
		fields_.certificate_.schemaForProcessEnv_.parsing_.parse(
			processEnv.SERVER__BIND__PORT__TLS__SERVER__CERTIFICATE,
		) satisfies fields_.certificate_.Certificate;
	const privateKeyOfServer =
		fields_.privateKey_.schemaForProcessEnv_.parsing_.parse(
			processEnv.SERVER__BIND__PORT__TLS__SERVER__PRIVATE_KEY,
		) satisfies fields_.privateKey_.PrivateKey;
	const server = {
		certificate: certificateOfServer,
		privateKey: privateKeyOfServer,
	} as const satisfies Server;
	return server;
}
