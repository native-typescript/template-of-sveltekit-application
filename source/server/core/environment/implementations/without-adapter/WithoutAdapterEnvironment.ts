import type {Environment} from "../../Environment.ts";
export interface WithoutAdapterEnvironment extends Environment<
	null,
	`withoutAdapter`
> {}
