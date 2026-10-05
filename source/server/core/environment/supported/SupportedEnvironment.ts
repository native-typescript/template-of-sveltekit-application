import type {implementations_} from "../implementations/module.ts";
export type SupportedEnvironment =
	| implementations_.withDynamicModeOfOperation_.WithDynamicModeOfOperationEnvironment
	| implementations_.withoutModeOfOperation_.WithoutModeOfOperationEnvironment
	| implementations_.withStaticModeOfOperation_.WithStaticModeOfOperationEnvironment;
