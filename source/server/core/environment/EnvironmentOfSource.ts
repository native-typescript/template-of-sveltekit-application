import type {ConfigurationOfEnvironmentOfSource} from "./fields/configuration/ConfigurationOfEnvironmentOfSource.ts";
import type {AdapterOfConfigurationOfEnvironmentOfSource} from "./fields/configuration/fields/adapter/AdapterOfConfigurationOfEnvironmentOfSource.ts";
export type EnvironmentOfSource<
	ConfigurationToUse extends
		ConfigurationOfEnvironmentOfSource<AdapterOfConfigurationOfEnvironmentOfSource<string> | null>,
	TypeToUse extends string,
> = {readonly configuration: ConfigurationToUse; readonly type: TypeToUse};
