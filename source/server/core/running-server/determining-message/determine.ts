import type {environment_} from "../../environment/module.ts";
import {data_} from "./data/module.ts";
export function determine(
	configuration: environment_.configuration_.fields_.adapter_.implementations_.node_.fields_.server_.fields_.bind_.Bind,
): string {
	// TODO
	const data: data_.Data = data_.determining.determine(configuration);
	const localUrl: string = `${data.url.protocol}://${data.url.host}:${data.url.port.toString(10)}`;
	const message: string = `The ${data.kindOfServer} server is listening.
Local URL: ${localUrl}`;
	return message;
}
