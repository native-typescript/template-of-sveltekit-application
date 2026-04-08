import type {fields_} from "./fields/module.ts";
export interface Configuration {
	readonly debian: fields_.debian_.Debian;
	readonly hosting: fields_.hosting_.Hosting;
	readonly nodeJs: fields_.nodeJs_.NodeJs;
}
