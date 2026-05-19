import type {configuration_} from "../../configuration/module.ts";
import type {fields_} from "../../fields/module.ts";
import type {withStaticAdapter_} from "../with-static-adapter/module.ts";
import type {withStaticModeOfOperation_} from "../with-static-mode-of-operation/module.ts";
export interface WithStaticModeOfOperationWithStaticAdapterEnvironment
	extends
		withStaticAdapter_.WithStaticAdapterEnvironment<
			fields_.features_.implementations_.withStaticModeOfOperation_.WithStaticModeOfOperationFeatures,
			`static`
		>,
		withStaticModeOfOperation_.WithStaticModeOfOperationEnvironment<
			configuration_.fields_.adapter_.implementations_.static_.StaticAdapter,
			fields_.features_.implementations_.withStaticModeOfOperation_.WithStaticModeOfOperationFeatures,
			`static`
		> {}
