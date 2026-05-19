import type {configuration_} from "../../configuration/module.ts";
import type {Environment} from "../../Environment.ts";
export interface WithStaticAdapterEnvironment extends Environment<
	configuration_.fields_.adapter_.implementations_.static_.StaticAdapter,
	`withStaticAdapter`
> {}
