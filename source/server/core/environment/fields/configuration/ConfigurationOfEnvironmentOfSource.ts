import type {AdapterOfConfigurationOfEnvironmentOfSource} from "./fields/adapter/AdapterOfConfigurationOfEnvironmentOfSource.ts";
export type ConfigurationOfEnvironmentOfSource<
	AdapterToUse extends
		AdapterOfConfigurationOfEnvironmentOfSource<string> | null,
> = {readonly adapter: AdapterToUse};
