import type {Configuration} from "../Configuration.ts";
import {z} from "zod";
export const schema = z
	.intersection(
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
		z.discriminatedUnion(`SERVER__BIND__PORT__TLS__IS_ENABLED`, [
			z.object({
				SERVER__BIND__PORT__TLS__INTERMEDIATE_CA__CERTIFICATE: z
					.string()
					.nonempty(),
				SERVER__BIND__PORT__TLS__IS_ENABLED: z.literal(`yes`),
				SERVER__BIND__PORT__TLS__SERVER__CERTIFICATE: z.string().nonempty(),
				SERVER__BIND__PORT__TLS__SERVER__PRIVATE_KEY: z.string().nonempty(),
			}),
			z.object({SERVER__BIND__PORT__TLS__IS_ENABLED: z.literal(`no`)}),
		]),
	)
	.transform<Configuration>(function parse(processEnv): Configuration {
		const configuration: Configuration = {
			server: {
				bind: {
					address: processEnv.SERVER__BIND__ADDRESS,
					port: {
						number: processEnv.SERVER__BIND__PORT__NUMBER,
						tls:
							processEnv.SERVER__BIND__PORT__TLS__IS_ENABLED === `yes` ?
								{
									intermediateCa: {
										certificate:
											processEnv.SERVER__BIND__PORT__TLS__INTERMEDIATE_CA__CERTIFICATE,
									},
									server: {
										certificate:
											processEnv.SERVER__BIND__PORT__TLS__SERVER__CERTIFICATE,
										privateKey:
											processEnv.SERVER__BIND__PORT__TLS__SERVER__PRIVATE_KEY,
									},
								}
							:	null,
					},
				},
			},
		};
		return configuration;
	});
