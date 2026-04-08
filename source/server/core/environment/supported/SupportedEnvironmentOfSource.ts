import type {
	WithNodeAdapterEnvironmentOfSource,
	WithStaticAdapterEnvironmentOfSource,
} from "../implementations/index.ts";
export type SupportedEnvironmentOfSource =
	| WithNodeAdapterEnvironmentOfSource
	| WithStaticAdapterEnvironmentOfSource;
