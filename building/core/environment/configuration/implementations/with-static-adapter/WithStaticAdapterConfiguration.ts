import type {Configuration} from "../../Configuration.ts";
import type {fields_} from "../../fields/module.ts";
export interface WithStaticAdapterConfiguration extends Configuration<
	fields_.adapter_.implementations_.static_.StaticAdapter,
	`withStaticAdapter`
> {}
