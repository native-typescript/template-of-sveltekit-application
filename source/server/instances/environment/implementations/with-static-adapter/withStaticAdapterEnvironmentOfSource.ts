import type {WithStaticAdapterEnvironmentOfSource} from "../../../../core/index.ts";
import {environmentOfSource} from "../../environmentOfSource.ts";
if (environmentOfSource.type !== `withStaticAdapter`) {
	throw new Error(
		`Expected a static adapter environment, but got "${environmentOfSource.type}".`,
	);
}
export const withStaticAdapterEnvironmentOfSource: WithStaticAdapterEnvironmentOfSource =
	environmentOfSource;
