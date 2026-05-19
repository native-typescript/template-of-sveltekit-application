import type {schemaForProcessEnvOfSource} from "../../schema-for-process-env/index.ts";
import {
	parseConfigurationOfEnvironmentOfSourceFromProcessEnv,
	type SupportedConfigurationOfEnvironmentOfSource,
} from "../fields/index.ts";
import type {
	WithNodeAdapterEnvironmentOfSource,
	WithoutAdapterEnvironmentOfSource,
	WithStaticAdapterEnvironmentOfSource,
} from "../implementations/index.ts";
import type {SupportedEnvironmentOfSource} from "../supported/index.ts";
import type {z} from "zod";
export function createEnvironmentOfSourceFromProcessEnv(
	processEnv: z.output<typeof schemaForProcessEnvOfSource>,
): SupportedEnvironmentOfSource {
	const configurationOfEnvironment: SupportedConfigurationOfEnvironmentOfSource =
		parseConfigurationOfEnvironmentOfSourceFromProcessEnv(processEnv);
	switch (configurationOfEnvironment.type) {
		case `withNodeAdapter`: {
			const environment: WithNodeAdapterEnvironmentOfSource = {
				configuration: configurationOfEnvironment,
				type: `withNodeAdapter`,
			};
			return environment;
		}
		case `withoutAdapter`: {
			const environment: WithoutAdapterEnvironmentOfSource = {
				configuration: configurationOfEnvironment,
				type: `withoutAdapter`,
			};
			return environment;
		}
		case `withStaticAdapter`: {
			const environment: WithStaticAdapterEnvironmentOfSource = {
				configuration: configurationOfEnvironment,
				type: `withStaticAdapter`,
			};
			return environment;
		}
	}
}
