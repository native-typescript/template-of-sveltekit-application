import {building, dev} from "$app/environment";
if (dev) {
	const {environmentOfSource: environment} = await import(
		`../../instances/environment/environmentOfSource.ts`
	);
	switch (environment.type) {
		/* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition */
		case `withoutAdapter`: {
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
			/* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition */
			case `withoutAdapter`: {
				break;
			}
		}
	}
}
