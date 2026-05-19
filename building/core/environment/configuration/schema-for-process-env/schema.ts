import {z} from "zod";
export const schema = z.object({
	HOSTING__BASE_PATH: z.union([
		z.templateLiteral([z.literal(`/`), z.string()]),
		z.literal(``),
	]),
});
