import {jsonifyFormData_} from "./JSONifying-form-data/module.ts";
import type {output_} from "./output/module.ts";
import type {readonlyJsonifiedFormData_} from "./readonly-JSONified-form-data/module.ts";
import type {schema_} from "./schema/module.ts";
import {error} from "@sveltejs/kit";
import {ArkErrors} from "arktype";
export function ensure<Data>(
	formData: FormData,
	schema: schema_.Schema<Data>,
): output_.Output<Data> {
	const jsonifiedFormData = jsonifyFormData_.jsonifyFormData(
		formData,
	) satisfies readonlyJsonifiedFormData_.JsonifiedFormData;
	const resultOfValidating = schema(jsonifiedFormData) satisfies
		ArkErrors | output_.Output<Data>;
	if (resultOfValidating instanceof ArkErrors) {
		error(400);
	} else {
		return resultOfValidating;
	}
}
