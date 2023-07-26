<script>
	import { page } from '$app/stores';
    import DarkThemeToggle from '$lib/components/DarkThemeToggle.svelte';
    import Sidebar from '$lib/components/Sidebar.svelte';
    import ThemeSelector from '$lib/components/ThemeSelector.svelte';
    import Footer from './Footer.svelte';
	import Header from './Header.svelte';

	$: showSidebar = $page.url.pathname !== '/' 
		&& !$page.url.pathname.startsWith('/projects')
		&& !$page.url.pathname.startsWith('/weather');
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Eddie Pace's portfolio homepage" />
</svelte:head>

<div class="app">
	<div class="theme-selectors">
		<DarkThemeToggle/>
		<ThemeSelector/>
	</div>
	<Header/>
	<main>
		<div class:main-margin={!$page.url.pathname.startsWith('/weather')}>
			<slot/>
		</div>
	</main>
	{#if showSidebar}
		<!-- <Sidebar posts={$postAttributes}/> -->
	{/if}
	<Footer/>
</div>

<style>
	.main-margin {
		margin-top: 3em;
		margin-left: 10%;
		margin-right: 10%;
	}

	.theme-selectors {
		position: absolute;
		top: 0;
		left: 0;
		margin: var(--margin);
		display: flex;
		gap: 0.5em;
	}
</style>
