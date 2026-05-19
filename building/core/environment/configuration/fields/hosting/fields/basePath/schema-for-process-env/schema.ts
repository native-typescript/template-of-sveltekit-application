import {z} from "zod";
export const schema = z.union([
	z.templateLiteral([z.literal(`/`), z.string()]),
	z.literal(``).transform<null>(function makeNull(basePath, context): null {
		return null;
	}),
]);
