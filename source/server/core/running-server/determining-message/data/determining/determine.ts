import type {environment_} from "../../../../environment/module.ts";
import type {Data} from "../Data.ts";
import {fields_} from "../fields/module.ts";
export function determine(
	configuration: environment_.configuration_.fields_.adapter_.implementations_.node_.fields_.server_.fields_.bind_.Bind,
): Data {
	const host = fields_.url_.fields_.host_.determining.determine(
		configuration.address,
	) satisfies string;
	if (configuration.port.tls === null) {
		return {
			kindOfServer: `HTTP`,
			url: {host: host, port: configuration.port.number, protocol: `http`},
		};
	} else {
		return {
			kindOfServer: `HTTPS`,
			url: {host: host, port: configuration.port.number, protocol: `https`},
		};
	}
}
