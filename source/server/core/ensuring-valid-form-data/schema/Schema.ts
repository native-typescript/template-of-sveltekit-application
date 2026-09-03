import type {readonlyJsonifiedFormData_} from "../readonly-JSONified-form-data/module.ts";
import type {z} from "zod";
export type Schema<Data> = z.ZodType<
	Data,
	readonlyJsonifiedFormData_.JsonifiedFormData
>;
