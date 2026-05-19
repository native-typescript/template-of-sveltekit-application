import type {Configuration} from "../../Configuration.ts";
import type {fields_} from "../../fields/module.ts";
export interface WithNodeAdapterConfiguration<
	FeaturesToUse extends fields_.features_.Features,
	ModeOfOperationToUse extends fields_.modeOfOperation_.Mode,
> extends Configuration<
	fields_.adapter_.implementations_.node_.NodeAdapter,
	FeaturesToUse,
	ModeOfOperationToUse,
	`node`
> {}
