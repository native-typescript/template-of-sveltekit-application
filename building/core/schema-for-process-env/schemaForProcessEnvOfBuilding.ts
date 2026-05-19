import {z} from "zod";
export const schemaForProcessEnvOfBuilding = z.intersection(
	z.union([
		z.object({
			ADAPTER__NAME: z.literal(``).transform<null>(function transform(
				name: ``,
				context,
			): null {
				return null;
			}),
		}),
		z.object({ADAPTER__NAME: z.literal(`Node`)}),
	]),
	z.object({
		HOSTING__BASE_PATH: z.union([
			z.templateLiteral([z.literal(`/`), z.string()]),
			z.literal(``),
		]),
	}),
);
