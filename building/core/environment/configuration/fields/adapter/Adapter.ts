export interface Adapter<IdToUse extends string> {
	readonly id: IdToUse;
}
