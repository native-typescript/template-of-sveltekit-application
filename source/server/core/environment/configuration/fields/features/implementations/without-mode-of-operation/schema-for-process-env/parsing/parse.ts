import type {WithoutModeOfOperationFeatures} from "../../WithoutModeOfOperationFeatures.ts";
import type {schema} from "../schema.ts";
export function parse(
	processEnv: typeof schema.infer,
): WithoutModeOfOperationFeatures {
	const features = {} as const satisfies WithoutModeOfOperationFeatures;
	return features;
}
