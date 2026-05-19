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
	tls: environment_.configuration_.fields_.adapter_.implementations_.node_.fields_.server_.fields_.bind_.fields_.port_.fields_.tls_.Tls | null,
	handler: RequestListener,
): Promise<HttpServer | HttpsServer> {
	if (tls === null) {
		const server: HttpServer = createHttpServer({}, handler);
		return server;
	} else {
		const server: HttpsServer = createHttpsServer(
			{
				ca: tls.intermediateCa.certificate,
				cert: tls.server.certificate,
				key: tls.server.privateKey,
			},
			handler,
		);
		return server;
	}
}
