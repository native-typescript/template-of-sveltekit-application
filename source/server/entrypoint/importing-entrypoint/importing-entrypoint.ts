import {building, dev} from "$app/environment";
import {runServer} from "../../core/index.ts";
import {runEntrypointOfSource} from "../running-entrypoint/index.ts";
if (dev) {
	const {environmentOfSource: environment} = await import(
		`../../instances/environment/environmentOfSource.ts`
	);
	switch (environment.type) {
		case `withNodeAdapter`: {
			await runEntrypointOfSource(environment);
			break;
		}
		case `withoutAdapter`: {
			break;
		}
		case `withStaticAdapter`: {
			break;
		}
	}
} else {
	if (building) {
		/*
			Building should not have an entrypoint.
		*/
	} else {
		const {environmentOfSource: environment} = await import(
			`../../instances/environment/environmentOfSource.ts`
		);
		switch (environment.type) {
			case `withNodeAdapter`: {
				await Promise.all([
					runServer(environment.configuration.server),
					runEntrypointOfSource(environment),
				]);
				break;
			}
			case `withoutAdapter`: {
				break;
			}
			case `withStaticAdapter`: {
				break;
			}
		}
	}
}
