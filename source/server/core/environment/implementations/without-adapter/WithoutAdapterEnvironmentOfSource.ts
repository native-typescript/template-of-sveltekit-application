import type {EnvironmentOfSource} from "../../EnvironmentOfSource.ts";
import type {WithoutAdapterConfigurationOfEnvironmentOfSource} from "../../fields/index.ts";
export type WithoutAdapterEnvironmentOfSource = EnvironmentOfSource<
	WithoutAdapterConfigurationOfEnvironmentOfSource,
	`withoutAdapter`
>;
