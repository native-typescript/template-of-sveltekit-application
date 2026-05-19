import type {fields_} from "../../fields/module.ts";
import type {IntermediateCa} from "../../IntermediateCa.ts";
import type {schema} from "../schema.ts";
export function parse(processEnv: typeof schema.infer): IntermediateCa {
	const certificateOfIntermediateCa =
		processEnv.SERVER__BIND__PORT__TLS__INTERMEDIATE_CA__CERTIFICATE satisfies fields_.certificate_.Certificate;
	const intermediateCa = {
		certificate: certificateOfIntermediateCa,
	} as const satisfies IntermediateCa;
	return intermediateCa;
}
