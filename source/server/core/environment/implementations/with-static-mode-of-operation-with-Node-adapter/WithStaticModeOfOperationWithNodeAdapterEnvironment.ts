import type {configuration_} from "../../configuration/module.ts";
import type {fields_} from "../../fields/module.ts";
import type {withNodeAdapter_} from "../with-Node-adapter/module.ts";
import type {withStaticModeOfOperation_} from "../with-static-mode-of-operation/module.ts";
export interface WithStaticModeOfOperationWithNodeAdapterEnvironment
	extends
		withNodeAdapter_.WithNodeAdapterEnvironment<
			fields_.features_.implementations_.withStaticModeOfOperation_.WithStaticModeOfOperationFeatures,
			`static`
		>,
		withStaticModeOfOperation_.WithStaticModeOfOperationEnvironment<
			configuration_.fields_.adapter_.implementations_.node_.NodeAdapter,
			fields_.features_.implementations_.withStaticModeOfOperation_.WithStaticModeOfOperationFeatures,
			`node`
		> {}
