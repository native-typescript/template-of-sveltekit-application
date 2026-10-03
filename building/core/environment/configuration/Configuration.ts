import type {fields_} from "./fields/module.ts";
export interface Configuration<
	AdapterToUse extends fields_.adapter_.Adapter<string> | null,
	TypeToUse extends string,
> {
	readonly adapter: AdapterToUse;
	readonly hosting: fields_.hosting_.Hosting;
	readonly type: TypeToUse;
}
