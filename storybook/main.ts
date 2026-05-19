import type {StorybookConfig} from "@storybook/sveltekit";
/* eslint-disable-next-line import-x/no-default-export */
export default {
	addons: [],
	framework: `@storybook/sveltekit`,
	stories: [`../**/*.stories.ts`],
} as const satisfies StorybookConfig;
