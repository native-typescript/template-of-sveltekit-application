import type {schemaForProcessEnvOfSource} from "../../../../../../schema-for-process-env/schemaForProcessEnvOfSource.ts";
import type {NodeAdapterOfConfigurationOfEnvironmentOfSource} from "../implementations/node/NodeAdapterOfConfigurationOfEnvironmentOfSource.ts";
import type {StaticAdapterOfConfigurationOfEnvironmentOfSource} from "../implementations/static/StaticAdapterOfConfigurationOfEnvironmentOfSource.ts";
import type {SupportedAdapterOfConfigurationOfEnvironmentOfSource} from "../supported/SupportedAdapterOfConfigurationOfEnvironmentOfSource.ts";
import type {z} from "zod";
export function parseAdapterOfConfigurationFromProcessEnv(
	processEnv: z.output<typeof schemaForProcessEnvOfSource>,
): SupportedAdapterOfConfigurationOfEnvironmentOfSource {
	switch (processEnv.ADAPTER__NAME) {
		case `Node`: {
			const adapter: NodeAdapterOfConfigurationOfEnvironmentOfSource = {
				id: `node`,
			};
			return adapter;
		}
		case `static`: {
			const adapterOfConfiguration: StaticAdapterOfConfigurationOfEnvironmentOfSource =
				{id: `static`};
			return adapterOfConfiguration;
		}
	}
}
