import type {fields_} from "./fields/module.ts";
export interface Configuration<
	AdapterToUse extends fields_.adapter_.Adapter<string> | null,
	FeaturesToUse extends fields_.features_.Features,
	ModeOfOperationToUse extends fields_.modeOfOperation_.Mode,
	TypeOfAdapterToUse extends fields_.typeOfAdapter_.Type,
> {
	readonly adapter: AdapterToUse;
	readonly features: FeaturesToUse;
	readonly modeOfOperation: ModeOfOperationToUse;
	readonly typeOfAdapter: TypeOfAdapterToUse;
}
