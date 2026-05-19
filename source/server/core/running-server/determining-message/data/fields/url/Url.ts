import type {fields_} from "./fields/module.ts";
export type Url = {
	readonly host: fields_.host_.Host;
	readonly port: number;
	readonly protocol: string;
};
