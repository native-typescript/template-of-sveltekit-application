import type {configuration_} from "./configuration/module.ts";
import type {Adapter} from "@sveltejs/kit";
export interface Environment<
	AdapterToUse extends Adapter,
	TypeToUse extends string,
> {
	readonly adapter: AdapterToUse;
	readonly configurationOfHosting: configuration_.fields_.hosting_.Hosting;
	readonly type: TypeToUse;
}
