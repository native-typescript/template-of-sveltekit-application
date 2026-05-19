import type {schemaForProcessEnvOfSource} from "../../../../../../schema-for-process-env/index.ts";
import type {WithStaticAdapterConfigurationOfEnvironmentOfSource} from "../WithStaticAdapterConfigurationOfEnvironmentOfSource.ts";
import type {z} from "zod";
export function parseWithStaticAdapterConfigurationOfEnvironmentOfSourceFromProcessEnv(
	processEnv: Extract<
		z.output<typeof schemaForProcessEnvOfSource>,
		{readonly ADAPTER__NAME: `static`}
	>,
): WithStaticAdapterConfigurationOfEnvironmentOfSource {
	const configuration: WithStaticAdapterConfigurationOfEnvironmentOfSource = {
		adapter: {id: `static`},
		type: `withStaticAdapter`,
	};
	return configuration;
}
