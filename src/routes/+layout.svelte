<script lang="ts">
	import Header from './Header.svelte';
	import '$lib/style/app.css';
	import { fly } from 'svelte/transition';
	export let data;
</script>

<svelte:head>
	<base href="/sveltekit-simpleapp/build" />
</svelte:head>

<body class="app">
	<Header />
	{#key data.url}
		<main     in:fly={{ x: -200, duration: 300, delay: 300 }}
		out:fly={{ x: 200, duration: 300 }}
	>
			<slot />
		</main>
	{/key}
	<footer>
	</footer>
</body>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
