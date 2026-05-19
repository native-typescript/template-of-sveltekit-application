import type {RequestEvent, ResolveOptions} from "@sveltejs/kit";
import(`./entrypoint.ts`);
declare global {
	// eslint-disable-next-line @typescript-eslint/no-namespace
	namespace App {
		interface Locals {
			readonly [key: string]: never;
		}
	}
}
export async function handle(input: {
	readonly event: RequestEvent;
	readonly resolve: (
		event: RequestEvent,
		opts?: ResolveOptions,
	) => Promise<Response>;
}): Promise<Response> {
	const response = (await input.resolve(input.event, {
		transformPageChunk: function transform(inputOfTransformer) {
			return inputOfTransformer.html;
		},
	})) satisfies Response;
	return response;
}
