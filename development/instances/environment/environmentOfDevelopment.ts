import {
	createEnvironmentOfDevelopmentFromProcessEnv,
	type EnvironmentOfDevelopment,
	schemaForProcessEnvOfDevelopment,
} from "../../core/index.ts";
import {stringifyingZodIssues} from "@native-typescript/stringifying-zod-issues";
import type {z} from "zod";
const resultOfParsing: z.ZodSafeParseResult<
	z.output<typeof schemaForProcessEnvOfDevelopment>
> = schemaForProcessEnvOfDevelopment.safeParse(process.env);
if (!resultOfParsing.success) {
	console.error(
		`An error occurred while parsing the environment variables for the environment of development:
${stringifyingZodIssues.stringifyZodIssues(resultOfParsing.error.issues)}`,
	);
	process.exit(1);
}
export const environmentOfDevelopment: EnvironmentOfDevelopment =
	createEnvironmentOfDevelopmentFromProcessEnv(resultOfParsing.data);
