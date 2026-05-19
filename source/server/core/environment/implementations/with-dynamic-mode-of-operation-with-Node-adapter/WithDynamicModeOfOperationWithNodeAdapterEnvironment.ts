import type {configuration_} from "../../configuration/module.ts";
import type {fields_} from "../../fields/module.ts";
import type {withDynamicModeOfOperation_} from "../with-dynamic-mode-of-operation/module.ts";
import type {withNodeAdapter_} from "../with-Node-adapter/module.ts";
export interface WithDynamicModeOfOperationWithNodeAdapterEnvironment
	extends
		withDynamicModeOfOperation_.WithDynamicModeOfOperationEnvironment<
			configuration_.fields_.adapter_.implementations_.node_.NodeAdapter,
			fields_.features_.implementations_.withDynamicModeOfOperation_.WithDynamicModeOfOperationFeatures,
			`node`
		>,
		withNodeAdapter_.WithNodeAdapterEnvironment<
			fields_.features_.implementations_.withDynamicModeOfOperation_.WithDynamicModeOfOperationFeatures,
			`dynamic`
		> {}
