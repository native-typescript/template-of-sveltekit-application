import type {Preview} from "@storybook/sveltekit";
export default {
	parameters: {a11y: {test: `off`}, controls: {}},
} as const satisfies Preview;
