import {core_} from "../../core/module.ts";
import {stringifyingZodIssues} from "@native-typescript/stringifying-zod-issues";
import type {z} from "zod";
const resultOfParsing: z.ZodSafeParseResult<core_.environment_.configuration_.supported_.SupportedConfiguration> =
	core_.environment_.configuration_.supported_.schemaForProcessEnv_.schema.safeParse(
		process.env,
	);
if (!resultOfParsing.success) {
	console.error(
		`An error occurred while parsing the environment variables for the environment of building:
${stringifyingZodIssues.stringifyZodIssues(resultOfParsing.error.issues)}`,
	);
	process.exit(1);
}
export const environment: core_.environment_.supported_.SupportedEnvironment =
	core_.environment_.creatingFromConfiguration_.create(resultOfParsing.data);
