import type {ServerOfWithNodeAdapterConfigurationOfEnvironmentOfSource} from "../environment/fields/configuration/implementations/with-Node-adapter/fields/server/ServerOfWithNodeAdapterConfigurationOfEnvironmentOfSource.ts";
import {createServer} from "./creating/createServer.ts";
import {determineHostPartOfUrl} from "./determining-host-part-of-URL/determineHostPartOfUrl.ts";
import {determineMessageOfProtocol} from "./determining-messsage-of-protocol/determineMessageOfProtocol.ts";
import {determineProtocolPartOfUrl} from "./determining-protocol-part-of-URL/determineProtocolPartOfUrl.ts";
export async function runServer(
	configuration: ServerOfWithNodeAdapterConfigurationOfEnvironmentOfSource,
): Promise<void> {
	const server = await createServer(configuration.bind.port.tls);
	await new Promise<void>(function executePromise(resolve): void {
		server.once(`close`, function handleClose(): void {
			resolve();
			return;
		});
		server.once(`listening`, function handleListening(): void {
			const messageOfProtocol = determineMessageOfProtocol(
				configuration.bind.port.tls,
			) satisfies string;
			const hostPartOfUrl = determineHostPartOfUrl(
				configuration.bind.address,
			) satisfies string;
			const protocolPartOfUrl = determineProtocolPartOfUrl(
				configuration.bind.port.tls,
			) satisfies string;
			const numberOfPortAsString = configuration.bind.port.number.toString(
				10,
			) satisfies string;
			console.warn(
				`The ${messageOfProtocol} server is listening.
URL: ${protocolPartOfUrl}://${hostPartOfUrl}:${numberOfPortAsString}`,
			);
			return;
		});
		server.listen({
			host: configuration.bind.address,
			port: configuration.bind.port.number,
		});
		return;
	});
}
