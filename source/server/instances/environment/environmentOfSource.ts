import {createEnvironmentOfSourceFromProcessEnv} from "../../core/environment/creating-from-process-env/createEnvironmentOfSourceFromProcessEnv.ts";
import type {SupportedEnvironmentOfSource} from "../../core/environment/supported/SupportedEnvironmentOfSource.ts";
import {schemaForProcessEnvOfSource} from "../../core/schema-for-process-env/schemaForProcessEnvOfSource.ts";
import {stringifyZodIssues} from "../../core/stringifying-Zod-issues/stringifyZodIssues.ts";
import type {z} from "zod";
const resultOfParsing: z.ZodSafeParseResult<
	z.output<typeof schemaForProcessEnvOfSource>
> = schemaForProcessEnvOfSource.safeParse(process.env);
if (!resultOfParsing.success) {
	console.error(
		`An error occurred while parsing the environment variables for the environment of source:
${stringifyZodIssues(resultOfParsing.error.issues)}`,
	);
	process.exit(1);
}
export const environmentOfSource: SupportedEnvironmentOfSource =
	createEnvironmentOfSourceFromProcessEnv(resultOfParsing.data);
