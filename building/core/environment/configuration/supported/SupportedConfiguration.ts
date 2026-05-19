import type {implementations_} from "../implementations/module.ts";
export type SupportedConfiguration =
	| implementations_.withNodeAdapter_.WithNodeAdapterConfiguration
	| implementations_.withoutAdapter_.WithoutAdapterConfiguration;
