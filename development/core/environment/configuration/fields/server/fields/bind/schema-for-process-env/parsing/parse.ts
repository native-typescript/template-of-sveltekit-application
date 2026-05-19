import type {Bind} from "../../Bind.ts";
import {fields_} from "../../fields/module.ts";
import type {schema} from "../schema.ts";
export function parse(processEnv: typeof schema.infer): Bind {
	const addressOfBind =
		processEnv.SERVER__BIND__ADDRESS satisfies fields_.address_.Address;
	const portOfBind = fields_.port_.schemaForProcessEnv_.parsing_.parse(
		processEnv,
	) satisfies fields_.port_.Port;
	const bind = {
		address: addressOfBind,
		port: portOfBind,
	} as const satisfies Bind;
	return bind;
}
