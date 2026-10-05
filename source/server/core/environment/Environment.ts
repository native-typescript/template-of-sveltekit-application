import type {configuration_} from "./configuration/module.ts";
import type {fields_} from "./fields/module.ts";
export interface Environment<
	FeaturesToUse extends fields_.features_.Features,
	ModeOfOperationToUse extends configuration_.fields_.modeOfOperation_.Mode,
> {
	readonly features: FeaturesToUse;
	readonly modeOfOperation: ModeOfOperationToUse;
}
