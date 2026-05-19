import type {PrivateKey} from "../../PrivateKey.ts";
import type {schema} from "../schema.ts";
import type {z} from "zod";
export function parse(processEnv: z.output<typeof schema>): PrivateKey {
	const privateKey = processEnv satisfies PrivateKey;
	return privateKey;
}
