import type {configuration_} from "../../configuration/module.ts";
import type {Environment} from "../../Environment.ts";
import type {fields_} from "../../fields/module.ts";
export interface WithoutAdapterEnvironment<
	FeaturesToUse extends fields_.features_.Features,
	ModeOfOperationToUse extends configuration_.fields_.modeOfOperation_.Mode,
> extends Environment<null, FeaturesToUse, ModeOfOperationToUse, `none`> {}
