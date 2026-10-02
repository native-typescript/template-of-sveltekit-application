import {building, dev} from "$app/environment";
import type {core_} from "./core/module.ts";
import {importingInstances_} from "./importing-instances/module.ts";
if (dev) {
	const {instances_} = await importingInstances_.import_();
	const environment = instances_.environment_
		.environment satisfies core_.environment_.supported_.SupportedEnvironment;
	switch (environment.modeOfOperation) {
		case `dynamic`: {
			switch (environment.typeOfAdapter) {
				// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
				case `none`: {
					break;
				}
			}
			break;
		}
		case `static`: {
			switch (environment.typeOfAdapter) {
				// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
				case `none`: {
					break;
				}
			}
			break;
		}
	}
} else {
	if (building) {
		const {instances_} = await importingInstances_.import_();
		const environment = instances_.environment_
			.environment satisfies core_.environment_.supported_.SupportedEnvironment;
		switch (environment.modeOfOperation) {
			case `dynamic`: {
				switch (environment.typeOfAdapter) {
					// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
					case `none`: {
						break;
					}
				}
				break;
			}
			case `static`: {
				switch (environment.typeOfAdapter) {
					// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
					case `none`: {
						break;
					}
				}
				break;
			}
		}
	} else {
		const {instances_} = await importingInstances_.import_();
		const environment = instances_.environment_
			.environment satisfies core_.environment_.supported_.SupportedEnvironment;
		switch (environment.modeOfOperation) {
			case `dynamic`: {
				switch (environment.typeOfAdapter) {
					// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
					case `none`: {
						break;
					}
				}
				break;
			}
			case `static`: {
				switch (environment.typeOfAdapter) {
					// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
					case `none`: {
						break;
					}
				}
				break;
			}
		}
	}
}
