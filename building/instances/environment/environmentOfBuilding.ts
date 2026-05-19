import {createEnvironmentOfBuildingFromProcessEnv} from "../../core/environment/creating-from-process-env/createEnvironmentOfBuildingFromProcessEnv.ts";
import type {SupportedEnvironmentOfBuilding} from "../../core/environment/supported/SupportedEnvironmentOfBuilding.ts";
import {schemaForProcessEnvOfBuilding} from "../../core/schema-for-process-env/schemaForProcessEnvOfBuilding.ts";
import {stringifyZodIssues} from "../../core/stringifying-Zod-issues/stringifyZodIssues.ts";
import type {z} from "zod";
const resultOfParsing: z.ZodSafeParseResult<
	z.output<typeof schemaForProcessEnvOfBuilding>
> = schemaForProcessEnvOfBuilding.safeParse(process.env);
if (!resultOfParsing.success) {
	console.error(
		`An error occurred while parsing the environment variables for the environment of building:
${stringifyZodIssues(resultOfParsing.error.issues)}`,
	);
	process.exit(1);
}
export const environmentOfBuilding: SupportedEnvironmentOfBuilding =
	createEnvironmentOfBuildingFromProcessEnv(resultOfParsing.data);
