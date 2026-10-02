import type {configuration_} from "../../configuration/module.ts";
import type {Environment} from "../../Environment.ts";
import type {fields_} from "../../fields/module.ts";
export interface WithDynamicModeOfOperationEnvironment<
	ConfigurationOfAdapterToUse extends
		configuration_.fields_.adapter_.Adapter<string> | null,
	FeaturesToUse extends fields_.features_.Features,
	TypeOfAdapterToUse extends configuration_.fields_.typeOfAdapter_.Type,
> extends Environment<
	ConfigurationOfAdapterToUse,
	FeaturesToUse,
	`dynamic`,
	TypeOfAdapterToUse
> {}
