import type {
	WithNodeAdapterEnvironmentOfSource,
	WithoutAdapterEnvironmentOfSource,
} from "../implementations/index.ts";
export type SupportedEnvironmentOfSource =
	| WithNodeAdapterEnvironmentOfSource
	| WithoutAdapterEnvironmentOfSource;
