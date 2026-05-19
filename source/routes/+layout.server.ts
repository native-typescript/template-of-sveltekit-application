import {idOfAdapter_} from "../id-of-adapter/module.ts";
const id = idOfAdapter_.id;
export const csr = true as const;
/* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition */
export const prerender = id === null ? `auto` : ({} as const)[id];
export const ssr = true as const;
export const trailingSlash = `never` as const;
