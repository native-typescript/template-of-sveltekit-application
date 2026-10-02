import type {fields_} from "../../fields/module.ts";
import type {withDynamicModeOfOperation_} from "../with-dynamic-mode-of-operation/module.ts";
import type {withoutAdapter_} from "../without-adapter/module.ts";
export interface WithDynamicModeOfOperationWithoutAdapterEnvironment
	extends
		withDynamicModeOfOperation_.WithDynamicModeOfOperationEnvironment<
			null,
			fields_.features_.implementations_.withDynamicModeOfOperation_.WithDynamicModeOfOperationFeatures,
			`none`
		>,
		withoutAdapter_.WithoutAdapterEnvironment<
			fields_.features_.implementations_.withDynamicModeOfOperation_.WithDynamicModeOfOperationFeatures,
			`dynamic`
		> {}
