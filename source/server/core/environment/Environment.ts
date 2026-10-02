import type {configuration_} from "./configuration/module.ts";
import type {fields_} from "./fields/module.ts";
export interface Environment<
	ConfigurationOfAdapterToUse extends
		configuration_.fields_.adapter_.Adapter<string> | null,
	FeaturesToUse extends fields_.features_.Features,
	ModeOfOperationToUse extends configuration_.fields_.modeOfOperation_.Mode,
	TypeOfAdapterToUse extends configuration_.fields_.typeOfAdapter_.Type,
> {
	readonly configurationOfAdapter: ConfigurationOfAdapterToUse;
	readonly features: FeaturesToUse;
	readonly modeOfOperation: ModeOfOperationToUse;
	readonly typeOfAdapter: TypeOfAdapterToUse;
}
