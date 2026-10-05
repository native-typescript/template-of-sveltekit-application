import type {core_} from "./core/module.ts";
import {importingInstances_} from "./importing-instances/module.ts";
const {instances_} = await importingInstances_.import_();
const environment = instances_.environment_
	.environment satisfies core_.environment_.supported_.SupportedEnvironment;
switch (environment.modeOfOperation) {
	// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
	case ``: {
		break;
	}
}
