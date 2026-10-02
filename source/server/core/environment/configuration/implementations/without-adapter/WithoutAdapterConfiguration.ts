import type {Configuration} from "../../Configuration.ts";
import type {fields_} from "../../fields/module.ts";
export interface WithoutAdapterConfiguration<
	FeaturesToUse extends fields_.features_.Features,
	ModeOfOperationToUse extends fields_.modeOfOperation_.Mode,
> extends Configuration<null, FeaturesToUse, ModeOfOperationToUse, `none`> {}
