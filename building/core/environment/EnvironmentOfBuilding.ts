import type {
	AdapterOfConfigurationOfEnvironmentOfBuilding,
	ConfigurationOfEnvironmentOfBuilding,
} from "./fields/index.ts";
import type {Adapter} from "@sveltejs/kit";
export type EnvironmentOfBuilding<
	AdapterToUse extends Adapter | null,
	ConfigurationToUse extends ConfigurationOfEnvironmentOfBuilding<
		AdapterOfConfigurationOfEnvironmentOfBuilding<string> | null,
		string
	>,
	TypeToUse extends string,
> = {
	readonly adapter: AdapterToUse;
	readonly configuration: ConfigurationToUse;
	readonly type: TypeToUse;
};
