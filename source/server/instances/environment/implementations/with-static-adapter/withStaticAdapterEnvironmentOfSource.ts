import type {WithStaticAdapterEnvironmentOfSource as WithStaticAdapterEnvironmentOfSourceOfCore} from "../../../../core/environment/implementations/with-static-adapter/WithStaticAdapterEnvironmentOfSource.ts";
import {environmentOfSource} from "../../environmentOfSource.ts";
if (environmentOfSource.type !== `withStaticAdapter`) {
	throw new Error(
		`Expected a static adapter environment, but got "${environmentOfSource.type}".`,
	);
}
export const withStaticAdapterEnvironmentOfSource: WithStaticAdapterEnvironmentOfSourceOfCore =
	environmentOfSource;
