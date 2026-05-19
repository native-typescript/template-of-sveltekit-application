import type {ConfigurationOfEnvironmentOfBuilding} from "./fields/configuration/ConfigurationOfEnvironmentOfBuilding.ts";
import type {AdapterOfConfigurationOfEnvironmentOfBuilding} from "./fields/configuration/fields/adapter/AdapterOfConfigurationOfEnvironmentOfBuilding.ts";
import type {Adapter} from "@sveltejs/kit";
export type EnvironmentOfBuilding<
	AdapterToUse extends Adapter,
	ConfigurationToUse extends ConfigurationOfEnvironmentOfBuilding<
		AdapterOfConfigurationOfEnvironmentOfBuilding<string>
	>,
	TypeToUse extends string,
> = {
	readonly adapter: AdapterToUse;
	readonly configuration: ConfigurationToUse;
	readonly type: TypeToUse;
};
