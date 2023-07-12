<script>
    import Footer from './Footer.svelte';
	import Header from './Header.svelte';
</script>

<div class="app">
	<Header/>
	<main>
		<slot/>
	</main>
	<Footer/>
</div>

<style>

</style>
