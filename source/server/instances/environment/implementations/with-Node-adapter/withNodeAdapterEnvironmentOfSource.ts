import type {WithNodeAdapterEnvironmentOfSource as WithNodeAdapterEnvironmentOfSourceOfCore} from "../../../../core/environment/implementations/with-Node-adapter/WithNodeAdapterEnvironmentOfSource.ts";
import {environmentOfSource} from "../../environmentOfSource.ts";
if (environmentOfSource.type !== `withNodeAdapter`) {
	throw new Error(
		`Expected a node adapter environment, but got "${environmentOfSource.type}".`,
	);
}
export const withNodeAdapterEnvironmentOfSource: WithNodeAdapterEnvironmentOfSourceOfCore =
	environmentOfSource;
