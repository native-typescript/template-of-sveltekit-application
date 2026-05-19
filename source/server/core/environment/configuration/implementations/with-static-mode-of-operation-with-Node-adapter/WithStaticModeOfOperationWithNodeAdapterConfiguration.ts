import type {fields_} from "../../fields/module.ts";
import type {withNodeAdapter_} from "../with-Node-adapter/module.ts";
import type {withStaticModeOfOperation_} from "../with-static-mode-of-operation/module.ts";
export interface WithStaticModeOfOperationWithNodeAdapterConfiguration
	extends
		withNodeAdapter_.WithNodeAdapterConfiguration<
			fields_.features_.implementations_.withStaticModeOfOperation_.WithStaticModeOfOperationFeatures,
			`static`
		>,
		withStaticModeOfOperation_.WithStaticModeOfOperationConfiguration<
			fields_.adapter_.implementations_.node_.NodeAdapter,
			fields_.features_.implementations_.withStaticModeOfOperation_.WithStaticModeOfOperationFeatures,
			`node`
		> {}
