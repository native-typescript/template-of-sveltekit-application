import {idOfAdapter_} from "../id-of-adapter/module.ts";
export const csr = true as const;
const idOfAdapter = idOfAdapter_.id;
export const prerender =
	idOfAdapter === null ? `auto` : ({node: false} as const)[idOfAdapter];
export const ssr = true as const;
export const trailingSlash = `never` as const;
