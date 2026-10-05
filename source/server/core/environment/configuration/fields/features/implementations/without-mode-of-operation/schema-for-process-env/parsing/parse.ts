import type {WithoutModeOfOperationFeatures} from "../../WithoutModeOfOperationFeatures.ts";
import type {schema} from "../schema.ts";
import type {z} from "zod";
export function parse(
	processEnv: z.output<typeof schema>,
): WithoutModeOfOperationFeatures {
	const features = {} as const satisfies WithoutModeOfOperationFeatures;
	return features;
}
