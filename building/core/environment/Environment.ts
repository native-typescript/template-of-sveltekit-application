import type {configuration_} from "./configuration/module.ts";
import type {fields_} from "./fields/module.ts";
export interface Environment<
	AdapterToUse extends fields_.adapter_.Adapter | null,
	TypeOfAdapterToUse extends configuration_.fields_.typeOfAdapter_.Type,
> {
	readonly adapter: AdapterToUse;
	readonly configurationOfHosting: configuration_.fields_.hosting_.Hosting;
	readonly typeOfAdapter: TypeOfAdapterToUse;
}
