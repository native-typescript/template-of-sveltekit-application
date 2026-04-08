import type {
	AdapterOfConfigurationOfEnvironmentOfBuilding,
	ConfigurationOfEnvironmentOfBuilding,
} from "./fields/index.ts";
import type {Adapter} from "@sveltejs/kit";
export type EnvironmentOfBuilding<
	AdapterToUse extends Adapter,
	ConfigurationToUse extends ConfigurationOfEnvironmentOfBuilding<
		AdapterOfConfigurationOfEnvironmentOfBuilding<string>,
		string
	>,
	TypeToUse extends string,
> = {
	readonly adapter: AdapterToUse;
	readonly configuration: ConfigurationToUse;
	readonly type: TypeToUse;
};
