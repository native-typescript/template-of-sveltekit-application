import {ADAPTER__NAME} from "$env/static/private";
import type {building_} from "../../../building/module.ts";
import type {z} from "zod";
/* eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion */
export const name = ADAPTER__NAME as unknown as z.input<
	typeof building_.core_.environment_.configuration_.supported_.schemaForProcessEnv_.schema
>[`ADAPTER__NAME`];
