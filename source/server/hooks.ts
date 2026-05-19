import type {RequestEvent, ResolveOptions} from "@sveltejs/kit";
/*
	Ensure Vite keeps this file as a separate chunk by calling `await`.
*/
await Promise.resolve();
/*
	eslint-disable-next-line @typescript-eslint/no-floating-promises
	----------------------------------------------------------------
	This cannot be awaited, because the importing the entrypoint can be a never resolving promise.
*/
import(`./entrypoint/importing-entrypoint/importing-entrypoint.ts`);
export async function handle(input: {
	event: RequestEvent;
	resolve: (event: RequestEvent, opts?: ResolveOptions) => Promise<Response>;
}): Promise<Response> {
	const response: Response = await input.resolve(input.event);
	return response;
}
