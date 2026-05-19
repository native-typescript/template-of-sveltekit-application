import {z} from "zod";
export const schemaForProcessEnvOfSource = z.union([
	z.object({
		ADAPTER__NAME: z.literal(``).transform<null>(function transform(
			name: ``,
			context,
		): null {
			return null;
		}),
	}),
]);
