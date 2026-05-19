import {idOfAdapterAtBuildingTime} from "../id-of-adapter/idOfAdapterAtBuildingTime.ts";
export const csr = true as const;
export const {[idOfAdapterAtBuildingTime]: prerender} = {
	node: false,
	static: true,
} as const;
export const ssr = true as const;
export const trailingSlash = `never` as const;
