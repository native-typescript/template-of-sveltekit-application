import type {configuration_} from "./configuration/module.ts";
export interface Environment {
	readonly configurationOfServer: configuration_.fields_.server_.Server;
}
