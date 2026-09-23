import {error} from "@sveltejs/kit";
import type {z} from "zod";
export function ensure<Data>(
	json: unknown,
	schema: z.ZodType<Data, unknown>,
): Data {
	const resultOfValidating = schema.safeParse(
		json,
	) satisfies z.ZodSafeParseResult<Data>;
	if (resultOfValidating.success) {
		return resultOfValidating.data;
	} else {
		error(400);
	}
}
