<script>
	import { page } from '$app/stores';
    import BurgerMenu from '$lib/components/BurgerMenu.svelte';
    import DarkThemeToggle from '$lib/components/DarkThemeToggle.svelte';
    import ThemeSelector from '$lib/components/ThemeSelector.svelte';
    import Footer from './Footer.svelte';
	import Header from './Header.svelte';

	$: showSidebar = $page.url.pathname !== '/' 
		&& !$page.url.pathname.startsWith('/projects')
		&& !$page.url.pathname.startsWith('/weather');

	let isMenuOpen = false;

	const closeMenu = () => {
		isMenuOpen = !isMenuOpen;
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Eddie Pace's portfolio homepage" />
</svelte:head>

<div class="app">
	<div class="theme-selectors">
		<BurgerMenu bind:isOpen={isMenuOpen}>
			<div class="toggle-containers">
				<DarkThemeToggle callback={closeMenu}/>
				<ThemeSelector callback={closeMenu}/>
			</div>
		</BurgerMenu>
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
		margin-left: var(--page-margin);
		margin-right: var(--page-margin);
		max-width: var(--page-width);
	}

	.theme-selectors {
		position: absolute;
		top: 0;
		left: 0;
		margin: var(--margin);
		display: flex;
		gap: 0.5em;
	}

	.toggle-containers {
		
	}
</style>
