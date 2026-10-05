import type {WithStaticModeOfOperationFeatures} from "../../WithStaticModeOfOperationFeatures.ts";
import type {schema} from "../schema.ts";
export function parse(
	processEnv: typeof schema.infer,
): WithStaticModeOfOperationFeatures {
	const features = {} as const satisfies WithStaticModeOfOperationFeatures;
	return features;
}
