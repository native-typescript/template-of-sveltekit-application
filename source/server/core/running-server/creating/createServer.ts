import type {TlsOfPortOfBindOfServerOfWithNodeAdapterConfigurationOfEnvironmentOfSource} from "../../environment/fields/configuration/implementations/with-Node-adapter/fields/server/fields/bind/fields/port/fields/tls/TlsOfPortOfBindOfServerOfWithNodeAdapterConfigurationOfEnvironmentOfSource.ts";
import {determineServer} from "./determining/determineServer.ts";
import type {
	IncomingMessage,
	RequestListener,
	Server,
	ServerResponse,
} from "node:http";
import {dirname} from "node:path";
import {fileURLToPath} from "node:url";
export async function createServer(
	configuration: null | TlsOfPortOfBindOfServerOfWithNodeAdapterConfigurationOfEnvironmentOfSource,
): Promise<Server<typeof IncomingMessage, typeof ServerResponse>> {
	/*
		eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		----------------------------------------------------------------
		The handler gets generated during the building process, so we need to import it dynamically.
	*/
	const {handler: handler}: {readonly handler: RequestListener} = await import(
		/* @vite-ignore */ `${dirname(fileURLToPath(import.meta.url))}/../../handler.js`
	);
	const server: Server = await determineServer(configuration, handler);
	return server;
}
