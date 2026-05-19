import type {environment_} from "../environment/module.ts";
import {creating_} from "./creating/module.ts";
import {determiningMessage_} from "./determining-message/module.ts";
export async function run(
	configuration: environment_.configuration_.fields_.adapter_.implementations_.node_.fields_.server_.Server,
): Promise<void> {
	// TODO
	const server = await creating_.create(configuration.bind.port.tls);
	await new Promise<void>(function executePromise(resolve): void {
		server.once(`close`, function handleClose(): void {
			resolve();
			return;
		});
		server.once(`listening`, function handleListening(): void {
			// TODO
			const message: string = determiningMessage_.determine(configuration.bind);
			console.warn(message);
			return;
		});
		server.listen({
			host: configuration.bind.address,
			port: configuration.bind.port.number,
		});
		return;
	});
}
