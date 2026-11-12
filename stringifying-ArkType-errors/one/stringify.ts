import type {ArkError} from "arktype";
export function stringify(error: ArkError): string {
	if (error.hasCode(`union`)) {
		const stringifiedBranches: string[] = [];
		for (const branch of error.errors) {
			const stringifiedBranch = stringify(branch) satisfies string;
			if (stringifiedBranch === ``) {
				continue;
			} else {
				const indentedBranch: string[] = [];
				for (const line of stringifiedBranch.split(`\n`)) {
					indentedBranch.push(`\t\t${line}`);
					continue;
				}
				stringifiedBranches.push(indentedBranch.join(`\n`));
				continue;
			}
		}
		if (stringifiedBranches.length === 0) {
			return ``;
		} else {
			const stringOfBranches = `one of:\n${stringifiedBranches.join(
				`\n\tor:\n`,
			)}` as const satisfies string;
			return stringOfBranches;
		}
	} else {
		if (error.hasCode(`intersection`)) {
			const stringifiedConstituents: string[] = [];
			for (const constituentError of error.errors) {
				const stringifiedConstituentError = stringify(
					constituentError,
				) satisfies string;
				if (stringifiedConstituentError === ``) {
					continue;
				} else {
					stringifiedConstituents.push(stringifiedConstituentError);
					continue;
				}
			}
			const stringOfConstituents = stringifiedConstituents.join(
				`\n`,
			) satisfies string;
			return stringOfConstituents;
		} else {
			return error.message;
		}
	}
}
