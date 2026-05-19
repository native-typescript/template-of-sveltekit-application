import type {Adapter} from "../../Adapter.ts";
import type {fields_} from "./fields/module.ts";
export interface NodeAdapter extends Adapter<`node`> {
	readonly server: fields_.server_.Server;
}
