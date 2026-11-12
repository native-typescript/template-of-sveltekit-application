import {one_} from "../one/module.ts";
import type {ArkErrors} from "arktype";
export function stringify(errors: ArkErrors): string {
	const stringifiedErrors: string[] = [];
	for (const error of errors) {
		const stringifiedError = one_.stringify(error) satisfies string;
		if (stringifiedError === ``) {
			continue;
		} else {
			stringifiedErrors.push(stringifiedError);
			continue;
		}
	}
	const stringOfErrors = stringifiedErrors.join(`\n`) satisfies string;
	return stringOfErrors;
}
