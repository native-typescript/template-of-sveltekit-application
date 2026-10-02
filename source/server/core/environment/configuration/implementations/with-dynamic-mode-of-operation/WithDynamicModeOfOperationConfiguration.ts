import type {Configuration} from "../../Configuration.ts";
import type {fields_} from "../../fields/module.ts";
export interface WithDynamicModeOfOperationConfiguration<
	AdapterToUse extends fields_.adapter_.Adapter<string> | null,
	FeaturesToUse extends fields_.features_.Features,
	TypeOfAdapterToUse extends fields_.typeOfAdapter_.Type,
> extends Configuration<
	AdapterToUse,
	FeaturesToUse,
	`dynamic`,
	TypeOfAdapterToUse
> {}
