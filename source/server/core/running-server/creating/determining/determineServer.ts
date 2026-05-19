import type {TlsOfPortOfBindOfServerOfWithNodeAdapterConfigurationOfEnvironmentOfSource} from "../../../environment/index.ts";
import {
	createServer as createHttpServer,
	type Server as HttpServer,
	type RequestListener,
} from "node:http";
import {
	createServer as createHttpsServer,
	type Server as HttpsServer,
} from "node:https";
export async function determineServer(
	dataOfTls: null | TlsOfPortOfBindOfServerOfWithNodeAdapterConfigurationOfEnvironmentOfSource,
	handler: RequestListener,
): Promise<HttpServer | HttpsServer> {
	if (dataOfTls === null) {
		const server: HttpServer = createHttpServer({}, handler);
		return server;
	} else {
		const server: HttpsServer = createHttpsServer(
			{
				ca: dataOfTls.intermediateCa.certificate,
				cert: dataOfTls.server.certificate,
				key: dataOfTls.server.privateKey,
			},
			handler,
		);
		return server;
	}
}
