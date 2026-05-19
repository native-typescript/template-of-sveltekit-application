import type {environment_} from "../../../../environment/module.ts";
import type {Data} from "../Data.ts";
import {fields_} from "../fields/module.ts";
export function determine(
	bind: environment_.configuration_.fields_.adapter_.implementations_.node_.fields_.server_.fields_.bind_.Bind,
): Data {
	const host: string = fields_.url_.fields_.host_.determining.determine(
		bind.address,
	);
	if (bind.port.tls === null) {
		return {
			kindOfServer: `HTTP`,
			url: {host: host, port: bind.port.number, protocol: `http`},
		};
	} else {
		return {
			kindOfServer: `HTTPS`,
			url: {host: host, port: bind.port.number, protocol: `https`},
		};
	}
}
