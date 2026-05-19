import type {Configuration} from "../../Configuration.ts";
import type {fields_} from "../../fields/module.ts";
export interface WithNodeAdapterConfiguration extends Configuration<
	fields_.adapter_.implementations_.node_.NodeAdapter,
	`withNodeAdapter`
> {}
