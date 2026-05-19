import type {fields_} from "../../fields/module.ts";
import type {withStaticAdapter_} from "../with-static-adapter/module.ts";
import type {withStaticModeOfOperation_} from "../with-static-mode-of-operation/module.ts";
export interface WithStaticModeOfOperationWithStaticAdapterConfiguration
	extends
		withStaticAdapter_.WithStaticAdapterConfiguration<
			fields_.features_.implementations_.withStaticModeOfOperation_.WithStaticModeOfOperationFeatures,
			`static`
		>,
		withStaticModeOfOperation_.WithStaticModeOfOperationConfiguration<
			fields_.adapter_.implementations_.static_.StaticAdapter,
			fields_.features_.implementations_.withStaticModeOfOperation_.WithStaticModeOfOperationFeatures,
			`static`
		> {}
