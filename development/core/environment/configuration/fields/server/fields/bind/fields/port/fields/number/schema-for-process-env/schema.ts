import {z} from "zod";
export const schema = z
	.string()
	.nonempty()
	.transform<number>(function parse(number, context): number {
		const parsedNumber = Number(number) satisfies number;
		return parsedNumber;
	})
	.pipe(z.int().positive());
