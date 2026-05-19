import {
	createEnvironmentOfBuildingFromProcessEnv,
	schemaForProcessEnvOfBuilding,
	type SupportedEnvironmentOfBuilding,
} from "../../core/index.ts";
import {stringifyZodIssues} from "@native-typescript/stringifying-zod-issues";
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
