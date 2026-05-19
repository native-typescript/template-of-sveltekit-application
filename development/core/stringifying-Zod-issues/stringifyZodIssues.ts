import {stringifyZodIssuesWithDepth} from "./stringifying-issues-with-depth/stringifyZodIssuesWithDepth.ts";
import type {z} from "zod";
export function stringifyZodIssues(
	issues: readonly z.core.$ZodIssue[],
): string {
	const stringifiedIssues: string = stringifyZodIssuesWithDepth(issues, 0);
	return stringifiedIssues;
}
