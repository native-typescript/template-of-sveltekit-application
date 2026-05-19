import type {StorybookConfig} from "@storybook/sveltekit";
export default {
	addons: [],
	framework: `@storybook/sveltekit`,
	stories: [`../**/*.stories.ts`],
} as const satisfies StorybookConfig;
