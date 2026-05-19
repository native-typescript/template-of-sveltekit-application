import type {Address} from "../../Address.ts";
import type {schema} from "../schema.ts";
import type {z} from "zod";
export function parse(processEnv: z.output<typeof schema>): Address {
	const address = processEnv satisfies Address;
	return address;
}
