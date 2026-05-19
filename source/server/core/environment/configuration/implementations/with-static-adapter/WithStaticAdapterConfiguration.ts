import type {Configuration} from "../../Configuration.ts";
import type {fields_} from "../../fields/module.ts";
export interface WithStaticAdapterConfiguration<
	FeaturesToUse extends fields_.features_.Features,
	ModeOfOperationToUse extends fields_.modeOfOperation_.Mode,
> extends Configuration<
	fields_.adapter_.implementations_.static_.StaticAdapter,
	FeaturesToUse,
	ModeOfOperationToUse,
	`static`
> {}
