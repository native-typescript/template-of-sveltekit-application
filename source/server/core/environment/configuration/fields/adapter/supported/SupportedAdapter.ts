import type {implementations_} from "../implementations/module.ts";
export type SupportedAdapter =
	implementations_.node_.NodeAdapter | implementations_.static_.StaticAdapter;
