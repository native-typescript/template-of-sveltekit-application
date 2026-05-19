import type {schemaForProcessEnvOfSource} from "../../schema-for-process-env/index.ts";
import {
	parseConfigurationOfEnvironmentOfSourceFromProcessEnv,
	type SupportedConfigurationOfEnvironmentOfSource,
} from "../fields/index.ts";
import type {WithoutAdapterEnvironmentOfSource} from "../implementations/index.ts";
import type {SupportedEnvironmentOfSource} from "../supported/index.ts";
import type {z} from "zod";
export function createEnvironmentOfSourceFromProcessEnv(
	processEnv: z.output<typeof schemaForProcessEnvOfSource>,
): SupportedEnvironmentOfSource {
	const configurationOfEnvironment: SupportedConfigurationOfEnvironmentOfSource =
		parseConfigurationOfEnvironmentOfSourceFromProcessEnv(processEnv);
	switch (configurationOfEnvironment.type) {
		/* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition */
		case `withoutAdapter`: {
			const environment: WithoutAdapterEnvironmentOfSource = {
				configuration: configurationOfEnvironment,
				type: `withoutAdapter`,
			};
			return environment;
		}
	}
}
