/** @type {import('./$types').RequestHandler} */
export async function GET({ params }) {
	const url = `https://pokeapi.co/api/v2/pokemon?limit=150`;
	const res = await fetch(url);
	const data = await res.json();

	const pokemon = data.results.map((data, index) => {
		return {
			name: data.name,
			id: index + 1,
			image: `https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/${
				index + 1
			}.png`
		};
	});

	console.log('data: ', pokemon);

	return new Response(JSON.stringify(pokemon));
	// return {
	// 	status: 200,
	// 	body: pokemon
	// };
}
