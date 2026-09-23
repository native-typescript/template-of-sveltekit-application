import type {output_} from "./output/module.ts";
import type {schema_} from "./schema/module.ts";
import {error} from "@sveltejs/kit";
import {ArkErrors} from "arktype";
export function ensure<Data>(
	json: unknown,
	schema: schema_.Schema<Data>,
): output_.Output<Data> {
	const resultOfValidating = schema(json) satisfies
		ArkErrors | output_.Output<Data>;
	if (resultOfValidating instanceof ArkErrors) {
		error(400);
	} else {
		return resultOfValidating;
	}
}
