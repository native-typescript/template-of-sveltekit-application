import type {schemaForProcessEnvOfSource} from "../../../../../../schema-for-process-env/index.ts";
import type {
	NodeAdapterOfConfigurationOfEnvironmentOfSource,
	StaticAdapterOfConfigurationOfEnvironmentOfSource,
} from "../implementations/index.ts";
import type {SupportedAdapterOfConfigurationOfEnvironmentOfSource} from "../supported/index.ts";
import type {z} from "zod";
export function parseAdapterOfConfigurationOfEnvironmentOfSourceFromProcessEnv(
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
		case null: {
			return null;
		}
	}
}
