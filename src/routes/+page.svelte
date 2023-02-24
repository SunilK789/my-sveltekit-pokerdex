<script>
	import { pokemon } from '../stores/pokerstore';
	import PokemanCards from '../components/pokemanCards.svelte';

	let searchTerm = '';
	let filteredPokemon = [];

	$: {
		if (searchTerm) {
			filteredPokemon = $pokemon.filter((pokemon) =>
				pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
			);
		} else {
			filteredPokemon = [...$pokemon];
		}
	}
</script>

<svelte:head>
	<title>Svelte Kit Pokdex</title>
</svelte:head>
<h1 class="text-4xl text-center my-8 uppercase">Svelte Kit Pokerdex</h1>
<input
	type="text"
	class="w-full rounded-md text-lg p-4 border-gray-100 border-2"
	placeholder="Search pokemon"
	bind:value={searchTerm}
/>
<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
	{#each filteredPokemon as pokeman}
		<PokemanCards {pokeman} />
	{/each}
</div>
