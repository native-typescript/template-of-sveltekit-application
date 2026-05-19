import type {
	WithNodeAdapterEnvironmentOfSource,
	WithoutAdapterEnvironmentOfSource,
	WithStaticAdapterEnvironmentOfSource,
} from "../implementations/index.ts";
export type SupportedEnvironmentOfSource =
	| WithNodeAdapterEnvironmentOfSource
	| WithoutAdapterEnvironmentOfSource
	| WithStaticAdapterEnvironmentOfSource;
