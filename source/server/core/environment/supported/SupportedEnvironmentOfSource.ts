import type {WithNodeAdapterEnvironmentOfSource} from "../implementations/with-Node-adapter/WithNodeAdapterEnvironmentOfSource.ts";
import type {WithStaticAdapterEnvironmentOfSource} from "../implementations/with-static-adapter/WithStaticAdapterEnvironmentOfSource.ts";
export type SupportedEnvironmentOfSource =
	| WithNodeAdapterEnvironmentOfSource
	| WithStaticAdapterEnvironmentOfSource;
