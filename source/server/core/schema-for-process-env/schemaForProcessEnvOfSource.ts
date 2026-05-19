import {z} from "zod";
export const schemaForProcessEnvOfSource = z.union([
	z.intersection(
		z.object({ADAPTER__NAME: z.literal(`Node`)}),
		z.intersection(
			z.object({
				SERVER__BIND__ADDRESS: z.string().nonempty(),
				SERVER__BIND__PORT__NUMBER: z
					.string()
					.nonempty()
					.transform<number>(function parse(number: string): number {
						const parsedNumber: number = Number.parseInt(number, 10);
						return parsedNumber;
					})
					.pipe(z.int().positive()),
			}),
			z.union([
				z.intersection(
					z.object({SERVER__BIND__PORT__TLS__IS_ENABLED: z.literal(`yes`)}),
					z.object({
						SERVER__BIND__PORT__TLS__INTERMEDIATE_CA__CERTIFICATE: z
							.string()
							.nonempty(),
						SERVER__BIND__PORT__TLS__SERVER__CERTIFICATE: z.string().nonempty(),
						SERVER__BIND__PORT__TLS__SERVER__PRIVATE_KEY: z.string().nonempty(),
					}),
				),
				z.object({SERVER__BIND__PORT__TLS__IS_ENABLED: z.literal(`no`)}),
			]),
		),
	),
	z.object({ADAPTER__NAME: z.literal(`static`)}),
]);
