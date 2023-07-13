<script>
	import { page } from '$app/stores';
    import Sidebar from '$lib/components/Sidebar.svelte';
    import { postAttributes } from '../store';
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
	<Header/>
	<main>
		<div class:main-margin={!$page.url.pathname.startsWith('/weather')}>
			<slot/>
		</div>
	</main>
	{#if showSidebar}
		<Sidebar posts={$postAttributes}/>
	{/if}
	<Footer/>
</div>

<style>
	.main-margin {
		margin: 3em;
	}
</style>
