import type {fields_} from "../../fields/module.ts";
import type {withStaticModeOfOperation_} from "../with-static-mode-of-operation/module.ts";
import type {withoutAdapter_} from "../without-adapter/module.ts";
export interface WithStaticModeOfOperationWithoutAdapterConfiguration
	extends
		withoutAdapter_.WithoutAdapterConfiguration<
			fields_.features_.implementations_.withStaticModeOfOperation_.WithStaticModeOfOperationFeatures,
			`static`
		>,
		withStaticModeOfOperation_.WithStaticModeOfOperationConfiguration<
			null,
			fields_.features_.implementations_.withStaticModeOfOperation_.WithStaticModeOfOperationFeatures,
			`none`
		> {}
