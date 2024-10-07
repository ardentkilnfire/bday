<script lang="ts">
	import type { Snippet } from 'svelte';
	import '../app.css';

	const { children } = $props<{ children: Snippet }>();
    
	let title = $state('🎈Happy Birthday!🥳');

	// const interval = setInterval(() => {
	// 	title = title === '🥳Happy Birthday!🎈' ? '🎈Happy Birthday!🥳' : '🥳Happy Birthday!🎈';
	// }, 600);

	// setTimeout(() => {
	// 	clearInterval(interval);
	// }, 50000);
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div id="app">
	{@render children()}
</div>
