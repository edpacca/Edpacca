<script>
	import { page } from '$app/stores';
    import Footer from './Footer.svelte';
	import Header from './Header.svelte';
    import BurgerMenu from '$lib/components/BurgerMenu.svelte';
    import DarkThemeToggle from '$lib/components/utils/DarkThemeToggle.svelte';
    import ThemeSelector from '$lib/components/utils/ColourThemeSelector.svelte';
	import * as config from "$lib/config";
    import { fly } from 'svelte/transition';
    import { onMount } from 'svelte';
    import { resetThemes, setUpThemes } from '../store';
    import FaIcon from '$lib/components/utils/FaIcon.svelte';
    import Tooltip from '$lib/components/utils/Tooltip.svelte';

	let isMenuOpen = false;

	const closeMenu = () => {
		setTimeout(() => {
			isMenuOpen = !isMenuOpen;
		}, 2000);
	}

	onMount(() => {
		setUpThemes();
	});

	const reset = () => {
		resetThemes();
		closeMenu();
	}


</script>

<svelte:head>
	<title>{config.title}</title>
	<meta name="description" content="Eddie Pace's portfolio homepage" />
</svelte:head>

<div class="app">
	<div class="theme-selectors">
		<BurgerMenu bind:isOpen={isMenuOpen}>
			<div class="toggle-container" >
				<div transition:fly={{y: -15}}>
					<DarkThemeToggle callback={closeMenu}/>
				</div>
				<div transition:fly={{delay: 150, x: -30}}>
					<ThemeSelector callback={closeMenu}/>
				</div>
				<div transition:fly={{delay: 300, y: 15}}>
					<Tooltip text={"Reset to default"}>
						<button class="reset-button" on:click={reset}>
							<FaIcon icon={"arrow-rotate-left"}/>
						</button>
					</Tooltip>
				</div>
			</div>
		</BurgerMenu>
	</div>
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

	.theme-selectors {
		position: absolute;
		top: 0;
		left: 0;
		margin: var(--margin);
		display: flex;
		gap: 0.5em;
	}

	.toggle-container {
		margin-top: 0.5em;
		gap: 0.2em;
		display: flex;
		flex-direction: column;
	}

	.reset-button {
        height: 2.5em;
        width: 2.5em;
        border-radius: 100%;
        border: none;
		background-color: var(--secondary-50);
		color: var(--primary);
        transition: var(--transition-time);
	}

	.reset-button:hover {
		color: var(--highlight);
	}

	@media screen and (max-width: 600px) {
        .toggle-container {
			flex-direction: row;
        }
    }
</style>
