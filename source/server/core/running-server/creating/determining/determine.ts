import type {environment_} from "../../../environment/module.ts";
import {
	createServer as createHttpServer,
	type Server as HttpServer,
	type RequestListener,
} from "node:http";
import {
	createServer as createHttpsServer,
	type Server as HttpsServer,
} from "node:https";
export async function determine(
	configuration: environment_.configuration_.fields_.adapter_.implementations_.node_.fields_.server_.fields_.bind_.fields_.port_.fields_.tls_.Tls | null,
	handler: RequestListener,
): Promise<HttpServer | HttpsServer> {
	if (configuration === null) {
		const server = createHttpServer({}, handler) satisfies HttpServer;
		return server;
	} else {
		const server = createHttpsServer(
			{
				ca: configuration.intermediateCa.certificate,
				cert: configuration.server.certificate,
				key: configuration.server.privateKey,
			},
			handler,
		) satisfies HttpsServer;
		return server;
	}
}
