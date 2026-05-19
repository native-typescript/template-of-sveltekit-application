import {building, dev} from "$app/environment";
import {core_} from "./core/module.ts";
import {importingInstances_} from "./importing-instances/module.ts";
import {runningEntrypoint_} from "./running-entrypoint/module.ts";
if (dev) {
	const instances_ = await importingInstances_.import_();
	const environment = instances_.environment_.environment;
	switch (environment.type) {
		case `withNodeAdapter`: {
			await runningEntrypoint_.run(environment);
			break;
		}
		case `withoutAdapter`: {
			/*
				Development without adapter should not have an entrypoint.
			*/
			break;
		}
		case `withStaticAdapter`: {
			/*
				Development with static adapter should not have an entrypoint.
			*/
			break;
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
			case `withNodeAdapter`: {
				await Promise.all([
					core_.runningServer_.run(environment.configurationOfAdapter.server),
					runningEntrypoint_.run(environment),
				]);
				break;
			}
			case `withoutAdapter`: {
				/*
					Production without adapter should not have an entrypoint.
				*/
				break;
			}
			case `withStaticAdapter`: {
				/*
					Production with static adapter should not have an entrypoint.
				*/
				break;
			}
		}
	}
}
