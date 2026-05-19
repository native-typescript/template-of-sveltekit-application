import {z} from "zod";
export const schemaForProcessEnvOfBuilding = z.intersection(
	z.union([
		z.object({ADAPTER__NAME: z.literal(`Node`)}),
		z.object({ADAPTER__NAME: z.literal(`static`)}),
	]),
	z.object({
		HOSTING__BASE_PATH: z.union([
			z.templateLiteral([z.literal(`/`), z.string()]),
			z.literal(``).transform<null>(function transform(basePath: string): null {
				return null;
			}),
		]),
	}),
);
