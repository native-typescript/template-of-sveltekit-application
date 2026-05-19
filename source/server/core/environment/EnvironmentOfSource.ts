import type {
	AdapterOfConfigurationOfEnvironmentOfSource,
	ConfigurationOfEnvironmentOfSource,
} from "./fields/index.ts";
export type EnvironmentOfSource<
	ConfigurationToUse extends ConfigurationOfEnvironmentOfSource<
		AdapterOfConfigurationOfEnvironmentOfSource<string> | null,
		string
	>,
	TypeToUse extends string,
> = {readonly configuration: ConfigurationToUse; readonly type: TypeToUse};
