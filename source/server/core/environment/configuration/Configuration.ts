import type {fields_} from "./fields/module.ts";
export interface Configuration<
	FeaturesToUse extends fields_.features_.Features,
	ModeOfOperationToUse extends fields_.modeOfOperation_.Mode,
> {
	readonly features: FeaturesToUse;
	readonly modeOfOperation: ModeOfOperationToUse;
}
