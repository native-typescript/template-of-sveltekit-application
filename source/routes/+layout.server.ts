import {idOfAdapterAtBuildingTime} from "../id-of-adapter/index.ts";
export const csr = true as const;
export const prerender = ({node: false, static: true} as const)[
	idOfAdapterAtBuildingTime
];
export const ssr = true as const;
export const trailingSlash = `never` as const;
