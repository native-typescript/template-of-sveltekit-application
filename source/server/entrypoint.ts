import {building, dev} from "$app/environment";
import {core_} from "./core/module.ts";
import {importingInstances_} from "./importing-instances/module.ts";
if (dev) {
	const {instances_} = await importingInstances_.import_();
	const environment = instances_.environment_
		.environment satisfies core_.environment_.supported_.SupportedEnvironment;
	switch (environment.modeOfOperation) {
		case `dynamic`: {
			switch (environment.typeOfAdapter) {
				case `node`: {
					await core_.runningEntrypoint_.run(environment);
					break;
				}
				case `none`: {
					break;
				}
			}
			break;
		}
		case `static`: {
			switch (environment.typeOfAdapter) {
				case `node`: {
					break;
				}
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
					case `node`: {
						break;
					}
					case `none`: {
						break;
					}
				}
				break;
			}
			case `static`: {
				switch (environment.typeOfAdapter) {
					case `node`: {
						break;
					}
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
					case `node`: {
						await Promise.all([
							core_.runningEntrypoint_.run(environment),
							core_.runningServer_.runningIfIsEnabled_.run(
								environment.configurationOfAdapter.server,
							),
						]);
						break;
					}
					case `none`: {
						break;
					}
				}
				break;
			}
			case `static`: {
				switch (environment.typeOfAdapter) {
					case `node`: {
						await core_.runningServer_.runningIfIsEnabled_.run(
							environment.configurationOfAdapter.server,
						);
						break;
					}
					case `none`: {
						break;
					}
				}
				break;
			}
		}
	}
}
