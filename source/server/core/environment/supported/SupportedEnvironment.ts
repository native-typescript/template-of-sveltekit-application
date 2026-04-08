import type {implementations_} from "../implementations/module.ts";
export type SupportedEnvironment =
	| implementations_.withNodeAdapter_.WithNodeAdapterEnvironment
	| implementations_.withStaticAdapter_.WithStaticAdapterEnvironment;
