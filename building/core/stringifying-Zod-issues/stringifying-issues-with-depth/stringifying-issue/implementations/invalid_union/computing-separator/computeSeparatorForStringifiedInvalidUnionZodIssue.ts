import {computeIndentForStringifiedZodIssue} from "../../../computing-indent/computeIndentForStringifiedZodIssue.ts";
export function computeSeparatorForStringifiedInvalidUnionZodIssue(
	depth: number,
): string {
	const indent: string = computeIndentForStringifiedZodIssue(depth);
	const separator: string = `
${indent}or
`;
	return separator;
}
