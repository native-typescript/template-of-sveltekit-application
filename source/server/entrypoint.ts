import {building, dev} from "$app/environment";
import {core_} from "./core/module.ts";
import {importingInstances_} from "./importing-instances/module.ts";
if (dev) {
	const instances_ = await importingInstances_.import_();
	const environment = instances_.environment_.environment;
	switch (environment.type) {
		/* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition */
		case `withoutAdapter`: {
			await core_.runningEntrypoint_.run(instances_.environment_.environment);
		}
	}
} else {
	if (building) {
		/*
			Building should not have an entrypoint.
		*/
	} else {
		const instances_ = await importingInstances_.import_();
		const environment = instances_.environment_.environment;
		switch (environment.type) {
			/* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition */
			case `withoutAdapter`: {
				await core_.runningEntrypoint_.run(instances_.environment_.environment);
			}
		}
	}
}
