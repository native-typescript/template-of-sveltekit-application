import type {WithDynamicModeOfOperationFeatures} from "../../WithDynamicModeOfOperationFeatures.ts";
import type {schema} from "../schema.ts";
import type {z} from "zod";
export function parse(
	processEnv: z.output<typeof schema>,
): WithDynamicModeOfOperationFeatures {
	const features = {} as const satisfies WithDynamicModeOfOperationFeatures;
	return features;
}
