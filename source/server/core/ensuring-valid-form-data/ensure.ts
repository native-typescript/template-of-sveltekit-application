import {jsonifyFormData_} from "./JSONifying-form-data/module.ts";
import type {readonlyJsonifiedFormData_} from "./readonly-JSONified-form-data/module.ts";
import {error} from "@sveltejs/kit";
import type {z} from "zod";
export function ensure<Data>(
	formData: FormData,
	schema: z.ZodType<Data, readonlyJsonifiedFormData_.JsonifiedFormData>,
): Data {
	const jsonifiedFormData = jsonifyFormData_.jsonifyFormData(
		formData,
	) satisfies readonlyJsonifiedFormData_.JsonifiedFormData;
	const resultOfValidating = schema.safeParse(
		jsonifiedFormData,
	) satisfies z.ZodSafeParseResult<Data>;
	if (resultOfValidating.success) {
		return resultOfValidating.data;
	} else {
		error(400);
	}
}
