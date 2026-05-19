import {computeIndentForStringifiedZodIssue} from "../../computing-indent/computeIndentForStringifiedZodIssue.ts";
import {stringifyPathForStringifiedZodIssue} from "../../stringifying-path/stringifyPathForStringifiedZodIssue.ts";
import type {z} from "zod";
export function stringifyUnknownZodIssueWithDepth(
	issue: z.core.$ZodIssue,
	depth: number,
): string {
	const indent: string = computeIndentForStringifiedZodIssue(depth);
	const stringifiedPath: string = stringifyPathForStringifiedZodIssue(
		issue.path,
	);
	const stringifiedIssue: string = `${indent}${stringifiedPath}${issue.message}`;
	return stringifiedIssue;
}
