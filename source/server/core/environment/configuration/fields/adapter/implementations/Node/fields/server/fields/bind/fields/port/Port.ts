import type {fields_} from "./fields/module.ts";
export interface Port {
	readonly number: fields_.number_.Number_;
	readonly tls: fields_.tls_.Tls | null;
}
