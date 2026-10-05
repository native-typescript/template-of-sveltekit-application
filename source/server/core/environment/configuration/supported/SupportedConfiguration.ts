import type {implementations_} from "../implementations/module.ts";
export type SupportedConfiguration =
	| implementations_.withDynamicModeOfOperation_.WithDynamicModeOfOperationConfiguration
	| implementations_.withoutModeOfOperation_.WithoutModeOfOperationConfiguration;
