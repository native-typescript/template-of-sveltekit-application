import type {fields_} from "../../fields/module.ts";
import type {IntermediateCa} from "../../IntermediateCa.ts";
import type {schema} from "../schema.ts";
import type {z} from "zod";
export function parse(processEnv: z.output<typeof schema>): IntermediateCa {
	const certificateOfIntermediateCa =
		processEnv.ADAPTER__SERVER__BIND__PORT__TLS__INTERMEDIATE_CA__CERTIFICATE satisfies fields_.certificate_.Certificate;
	const intermediateCa = {
		certificate: certificateOfIntermediateCa,
	} as const satisfies IntermediateCa;
	return intermediateCa;
}
