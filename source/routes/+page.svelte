<script lang="ts">
	import {PageForRoot} from "../client/index.ts";
	import type {PageProps} from "./$types.d.ts";
	const props: PageProps = $props();
</script>

<PageForRoot message={props.data.message}></PageForRoot>

<style lang="scss"></style>
