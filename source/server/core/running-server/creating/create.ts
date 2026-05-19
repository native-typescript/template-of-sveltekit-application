import type {environment_} from "../../environment/module.ts";
import {determining_} from "./determining/module.ts";
import type {
	IncomingMessage,
	RequestListener,
	Server,
	ServerResponse,
} from "node:http";
export async function create(
	tls: environment_.configuration_.fields_.adapter_.implementations_.node_.fields_.server_.fields_.bind_.fields_.port_.fields_.tls_.Tls | null,
): Promise<Server<typeof IncomingMessage, typeof ServerResponse>> {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
	const {handler} = (await import(
		/* @vite-ignore */ `${import.meta.dirname}/../../../handler.js`
	)) as {readonly handler: RequestListener};
	const server = (await determining_.determine(tls, handler)) satisfies Server;
	return server;
}
