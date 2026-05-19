import type {Certificate} from "../../Certificate.ts";
import type {schema} from "../schema.ts";
import type {z} from "zod";
export function parse(processEnv: z.output<typeof schema>): Certificate {
	const certificate = processEnv satisfies Certificate;
	return certificate;
}
