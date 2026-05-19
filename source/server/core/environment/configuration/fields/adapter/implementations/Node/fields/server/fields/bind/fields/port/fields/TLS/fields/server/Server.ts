import type {fields_} from "./fields/module.ts";
export interface Server {
	readonly certificate: fields_.certificate_.Certificate;
	readonly privateKey: fields_.privateKey_.PrivateKey;
}
