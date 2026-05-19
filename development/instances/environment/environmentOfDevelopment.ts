import {createEnvironmentOfDevelopmentFromProcessEnv} from "../../core/environment/creating-from-process-env/createEnvironmentOfDevelopmentFromProcessEnv.ts";
import type {EnvironmentOfDevelopment} from "../../core/environment/EnvironmentOfDevelopment.ts";
import {schemaForProcessEnvOfDevelopment} from "../../core/schema-for-process-env/schemaForProcessEnvOfDevelopment.ts";
import {stringifyZodIssues} from "../../core/stringifying-Zod-issues/stringifyZodIssues.ts";
import type {z} from "zod";
const resultOfParsing: z.ZodSafeParseResult<
	z.output<typeof schemaForProcessEnvOfDevelopment>
> = schemaForProcessEnvOfDevelopment.safeParse(process.env);
if (!resultOfParsing.success) {
	console.error(
		`An error occurred while parsing the environment variables for the environment of development:
${stringifyZodIssues(resultOfParsing.error.issues)}`,
	);
	process.exit(1);
}
export const environmentOfDevelopment: EnvironmentOfDevelopment =
	createEnvironmentOfDevelopmentFromProcessEnv(resultOfParsing.data);
