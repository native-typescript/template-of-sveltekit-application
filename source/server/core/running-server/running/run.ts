import type {environment_} from "../../environment/module.ts";
import {creating_} from "../creating/module.ts";
import {determiningMessage_} from "../determining-message/module.ts";
import type {IncomingMessage, Server, ServerResponse} from "node:http";
export async function run(
	configuration: environment_.configuration_.fields_.adapter_.implementations_.node_.fields_.server_.Server,
): Promise<void> {
	const server = (await creating_.create(
		configuration.bind.port.tls,
	)) satisfies Server<typeof IncomingMessage, typeof ServerResponse>;
	await new Promise<void>(function executePromise(resolve, reject): void {
		server.once(`close`, function handleClose(): void {
			resolve();
			return;
		});
		server.once(`listening`, function handleListening(): void {
			const message = determiningMessage_.determine(
				configuration.bind,
			) satisfies string;
			console.warn(message);
			return;
		});
		server.listen({
			host: configuration.bind.address,
			port: configuration.bind.port.number,
		});
		return;
	});
	return;
}
