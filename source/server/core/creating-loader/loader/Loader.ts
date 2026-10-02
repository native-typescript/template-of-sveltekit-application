import type {ServerLoadEvent} from "@sveltejs/kit";
export type Loader<EventToUse extends ServerLoadEvent, OutputData> = (
	event: EventToUse,
) => Promise<OutputData>;
