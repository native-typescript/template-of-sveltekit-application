import type {WithNodeAdapterEnvironmentOfSource} from "../../../../core/index.ts";
import {environmentOfSource} from "../../environmentOfSource.ts";
if (environmentOfSource.type !== `withNodeAdapter`) {
	throw new Error(
		`Expected a node adapter environment, but got "${environmentOfSource.type}".`,
	);
}
export const withNodeAdapterEnvironmentOfSource: WithNodeAdapterEnvironmentOfSource =
	environmentOfSource;
