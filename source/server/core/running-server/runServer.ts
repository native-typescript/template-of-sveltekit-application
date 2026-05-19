import type {ServerOfWithNodeAdapterConfigurationOfEnvironmentOfSource} from "../environment/index.ts";
import {createServer} from "./creating/index.ts";
import {determineHostAddressPartOfUrl} from "./determining-host-address-part-of-URL/index.ts";
import {determineMessageOfProtocol} from "./determining-messsage-of-protocol/index.ts";
import {determineProtocolPartOfUrl} from "./determining-protocol-part-of-URL/index.ts";
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
			const messageOfProtocol: string = determineMessageOfProtocol(
				configuration.bind.port.tls,
			);
			const hostPartOfUrl: string = determineHostAddressPartOfUrl(
				configuration.bind.address,
			);
			const protocolPartOfUrl: string = determineProtocolPartOfUrl(
				configuration.bind.port.tls,
			);
			const portPartOfUrl: string = configuration.bind.port.number.toString(10);
			console.warn(
				`The ${messageOfProtocol} server is listening.
Local URL: ${protocolPartOfUrl}://${hostPartOfUrl}:${portPartOfUrl}`,
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
