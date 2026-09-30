import {stringifyingArktypeErrors_} from "../../../../stringifying-ArkType-errors/module.ts";
import {core_} from "../../core/module.ts";
import {ArkErrors} from "arktype";
const resultOfParsing =
	core_.environment_.configuration_.schemaForProcessEnv_.schema(process.env);
if (resultOfParsing instanceof ArkErrors) {
	console.error(
		`An error occurred while parsing the environment variables for the configuration of source:
${stringifyingArktypeErrors_.many_.stringify(resultOfParsing)}`,
	);
	process.exit(1);
}
export const environment = core_.environment_.creatingFromConfiguration_.create(
	resultOfParsing,
) satisfies core_.environment_.Environment;
