export async function import_(): Promise<
	(typeof import("../instances/module.ts"))[`instances_`]
> {
	const {instances_}: typeof import("../instances/module.ts") = await import(
		`../instances/module.ts`
	);
	return instances_;
}
