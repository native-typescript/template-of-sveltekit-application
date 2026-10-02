import type {ServerLoadEvent} from "@sveltejs/kit";
export type Heater<EventToUse extends ServerLoadEvent, OutputData> = (
	hotStartWrapper: (event: EventToUse) => Promise<OutputData>,
) => void;
