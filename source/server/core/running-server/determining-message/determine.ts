import type {environment_} from "../../environment/module.ts";
import {data_} from "./data/module.ts";
export function determine(
	bind: environment_.configuration_.fields_.adapter_.implementations_.node_.fields_.server_.fields_.bind_.Bind,
): string {
	const data = data_.determining.determine(bind) satisfies data_.Data;
	const localUrl =
		`${data.url.protocol}://${data.url.host}:${data.url.port.toString(10)}` as const satisfies string;
	const message = `The ${data.kindOfServer} server is listening.
Local URL: ${localUrl}` as const satisfies string;
	return message;
}
