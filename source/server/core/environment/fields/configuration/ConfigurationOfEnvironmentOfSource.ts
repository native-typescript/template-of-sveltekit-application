import type {AdapterOfConfigurationOfEnvironmentOfSource} from "./fields/index.ts";
export type ConfigurationOfEnvironmentOfSource<
	AdapterToUse extends
		AdapterOfConfigurationOfEnvironmentOfSource<string> | null,
	TypeToUse extends string,
> = {readonly adapter: AdapterToUse; readonly type: TypeToUse};
