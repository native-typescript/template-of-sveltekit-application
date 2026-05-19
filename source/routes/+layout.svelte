<script lang="ts">
	import {asset} from "$app/paths";
	import type {LayoutProps} from "./$types.d.ts";
	const props: LayoutProps = $props();
</script>

<svelte:head
	><link
		href={asset(`/favicon.svg`)}
		rel="icon"
		type="image/svg+xml" />
	<link
		href={asset(`/manifest.json`)}
		rel="manifest" />
	<meta
		content="#ffffff"
		name="theme-color" /></svelte:head
>{@render props.children()}

<style lang="scss">
	:global {
		*,
		*::after,
		*::before {
			box-sizing: border-box;
		}
		input,
		button,
		textarea,
		select {
			font-family: inherit;
		}
	}
</style>
