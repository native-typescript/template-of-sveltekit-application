import {idOfAdapter_} from "../id-of-adapter/module.ts";
export const csr = true as const;
export const prerender = ({node: false, static: true} as const)[
	idOfAdapter_.id
];
export const ssr = true as const;
export const trailingSlash = `never` as const;
