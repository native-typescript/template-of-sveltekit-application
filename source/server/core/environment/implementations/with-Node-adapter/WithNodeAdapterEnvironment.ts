import type {configuration_} from "../../configuration/module.ts";
import type {Environment} from "../../Environment.ts";
import type {fields_} from "../../fields/module.ts";
export interface WithNodeAdapterEnvironment<
	FeaturesToUse extends fields_.features_.Features,
	ModeOfOperationToUse extends configuration_.fields_.modeOfOperation_.Mode,
> extends Environment<
	configuration_.fields_.adapter_.implementations_.node_.NodeAdapter,
	FeaturesToUse,
	ModeOfOperationToUse,
	`node`
> {}
