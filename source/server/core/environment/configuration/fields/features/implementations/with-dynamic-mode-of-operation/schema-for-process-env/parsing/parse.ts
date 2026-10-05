import type {WithDynamicModeOfOperationFeatures} from "../../WithDynamicModeOfOperationFeatures.ts";
import type {schema} from "../schema.ts";
export function parse(
	processEnv: typeof schema.infer,
): WithDynamicModeOfOperationFeatures {
	const features = {} as const satisfies WithDynamicModeOfOperationFeatures;
	return features;
}
