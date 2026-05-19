import {createEnvironmentOfTestingFromProcessEnv} from "../../core/environment/creating-from-process-env/createEnvironmentOfTestingFromProcessEnv.ts";
import type {EnvironmentOfTesting} from "../../core/environment/EnvironmentOfTesting.ts";
import {schemaForProcessEnvOfTesting} from "../../core/schema-for-process-env/schemaForProcessEnvOfTesting.ts";
import {stringifyZodIssues} from "../../core/stringifying-Zod-issues/stringifyZodIssues.ts";
import type {z} from "zod";
const resultOfParsing = schemaForProcessEnvOfTesting.safeParse(
	process.env,
) satisfies z.ZodSafeParseResult<z.output<typeof schemaForProcessEnvOfTesting>>;
if (!resultOfParsing.success) {
	console.error(
		`An error occurred while parsing the environment variables for the configuration of testing:
${stringifyZodIssues(resultOfParsing.error.issues)}`,
	);
	process.exit(1);
}
export const environmentOfTesting: EnvironmentOfTesting =
	createEnvironmentOfTestingFromProcessEnv(resultOfParsing.data);
