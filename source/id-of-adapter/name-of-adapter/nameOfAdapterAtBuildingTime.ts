import {ADAPTER__NAME} from "$env/static/private";
import type {schemaForProcessEnvOfSource} from "../../server/core/schema-for-process-env/schemaForProcessEnvOfSource.ts";
import type {z} from "zod";
/* eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion */
export const nameOfAdapterAtBuildingTime = ADAPTER__NAME as unknown as z.input<
	typeof schemaForProcessEnvOfSource
>[`ADAPTER__NAME`];
