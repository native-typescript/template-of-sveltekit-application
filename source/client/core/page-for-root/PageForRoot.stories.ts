import PageForRoot from "./PageForRoot.svelte";
import type {Meta, StoryObj} from "@storybook/svelte-vite";
export default {component: PageForRoot} satisfies Meta<typeof PageForRoot>;
export const Default = {args: {}} as const satisfies StoryObj<
	typeof PageForRoot
>;
