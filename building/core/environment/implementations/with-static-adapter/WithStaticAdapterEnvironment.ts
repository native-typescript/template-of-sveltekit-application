import type {Environment} from "../../Environment.ts";
import type {Adapter} from "@sveltejs/kit";
export interface WithStaticAdapterEnvironment extends Environment<
	Adapter,
	`withStaticAdapter`
> {}
