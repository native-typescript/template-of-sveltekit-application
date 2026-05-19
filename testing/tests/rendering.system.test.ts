import {runApplication} from "../core/running-application/runApplication.ts";
import {expect} from "expect";
import {describe, test} from "node:test";
import {type Browser, chromium, type Page} from "playwright";
import type {StartedTestContainer} from "testcontainers";
await describe(`Rendering`, async function executeTests(): Promise<void> {
	await test(
		`The app renders a blank page`,
		{timeout: 300000},
		async function executeTest(): Promise<void> {
			const numberOfPortOfBindOfServer: number = 8080;
			const applicationContainer: StartedTestContainer = await runApplication(
				numberOfPortOfBindOfServer,
			);
			try {
				const browser: Browser = await chromium.launch();
				try {
					const page: Page = await browser.newPage();
					await page.goto(
						`http://${applicationContainer.getHost()}:${applicationContainer.getMappedPort(numberOfPortOfBindOfServer).toString(10)}`,
						{waitUntil: `domcontentloaded`},
					);
					expect(await page.locator(`.sveltekit-body`).count()).toBe(1);
				} finally {
					await browser.close();
				}
			} finally {
				await applicationContainer.stop();
			}
			return;
		},
	);
	return;
});
