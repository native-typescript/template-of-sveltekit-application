import type {fields_} from "./fields/module.ts";
export interface Port {
	readonly number: number;
	readonly tls: fields_.tls_.Tls | null;
}
