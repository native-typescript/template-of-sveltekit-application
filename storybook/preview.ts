import type {Preview} from "@storybook/sveltekit";
/* eslint-disable-next-line import-x/no-default-export */
export default {
	parameters: {a11y: {test: `off`}, controls: {}},
} as const satisfies Preview;
