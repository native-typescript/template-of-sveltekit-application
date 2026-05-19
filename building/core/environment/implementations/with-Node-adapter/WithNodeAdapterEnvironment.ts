import type {Environment} from "../../Environment.ts";
import type {Adapter} from "@sveltejs/kit";
export interface WithNodeAdapterEnvironment extends Environment<
	Adapter,
	`withNodeAdapter`
> {}
