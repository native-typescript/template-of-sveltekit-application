export async function import_(): Promise<
	typeof import("../instances/module.ts")
> {
	return await import(`../instances/module.ts`);
}
