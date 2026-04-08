import type {configuration_} from "./configuration/module.ts";
export interface Environment {
	readonly configurationOfDebian: configuration_.fields_.debian_.Debian;
	readonly configurationOfHosting: configuration_.fields_.hosting_.Hosting;
	readonly configurationOfNodeJs: configuration_.fields_.nodeJs_.NodeJs;
}
