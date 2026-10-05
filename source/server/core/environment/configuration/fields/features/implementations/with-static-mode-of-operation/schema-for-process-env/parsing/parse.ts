import type {WithStaticModeOfOperationFeatures} from "../../WithStaticModeOfOperationFeatures.ts";
import type {schema} from "../schema.ts";
import type {z} from "zod";
export function parse(
	processEnv: z.output<typeof schema>,
): WithStaticModeOfOperationFeatures {
	const features = {} as const satisfies WithStaticModeOfOperationFeatures;
	return features;
}
