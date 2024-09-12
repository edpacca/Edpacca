<script>
	import { page } from '$app/stores';
    import Footer from './Footer.svelte';
	import Header from './Header.svelte';
    // import BurgerMenu from '$lib/components/BurgerMenu.svelte';
    // import DarkThemeToggle from '$lib/components/DarkThemeToggle.svelte';
    // import ThemeSelector from '$lib/components/ColourThemeSelector.svelte';
	import * as config from "$lib/config";

	// let isMenuOpen = false;

	// const closeMenu = () => {
	// 	isMenuOpen = !isMenuOpen;
	// }
</script>

<svelte:head>
	<title>{config.title}</title>
	<meta name="description" content="Eddie Pace's portfolio homepage" />
</svelte:head>

<div class="app">
	<!-- <div class="theme-selectors">
		<BurgerMenu bind:isOpen={isMenuOpen}>
			<div class="toggle-container">
				<DarkThemeToggle callback={closeMenu}/>
				<ThemeSelector callback={closeMenu}/>
			</div>
		</BurgerMenu>
	</div> -->
	<Header/>
	<main>
		<div class:main-margin={!$page.url.pathname.startsWith('/weather')}>
			<slot/>
		</div>
	</main>
	<Footer/>
</div>

<style>
	.main-margin {
		margin-top: 3em;
		margin-left: var(--page-margin);
		margin-right: var(--page-margin);
		max-width: var(--page-width);
	}

	/* .theme-selectors {
		position: absolute;
		top: 0;
		left: 0;
		margin: var(--margin);
		display: flex;
		gap: 0.5em;
	}

	.toggle-container {
		gap: 0.2em;
		display: flex;
		flex-direction: column;
	} */
</style>
