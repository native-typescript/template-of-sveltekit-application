import {idOfAdapterAtBuildingTime} from "../id-of-adapter/index.ts";
export const csr = true as const;
export const prerender =
	/* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition */
	idOfAdapterAtBuildingTime === null ? `auto` : (
		({} as const)[idOfAdapterAtBuildingTime]
	);
export const ssr = true as const;
export const trailingSlash = `never` as const;
