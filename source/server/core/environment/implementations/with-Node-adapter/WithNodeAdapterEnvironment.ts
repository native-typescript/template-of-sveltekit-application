import type {configuration_} from "../../configuration/module.ts";
import type {Environment} from "../../Environment.ts";
export interface WithNodeAdapterEnvironment extends Environment<
	configuration_.fields_.adapter_.implementations_.node_.NodeAdapter,
	`withNodeAdapter`
> {}
