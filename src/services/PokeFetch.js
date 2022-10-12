export const getPokemon = async (id) => {
	console.log("consultando a la api");
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
	const resp = await fetch(url);

	if (resp.status !== 200) return null;

	const { name, sprites } = await resp.json();

	return {
		name,
		img: sprites.other.dream_world.front_default,
	};
};
