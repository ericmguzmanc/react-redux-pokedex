export function nextPage(fetchedPokemon, pokemons, page) {
  let actualPage = page + 1;
  const payload = {
    fetchedPokemon: fetchedPokemon,
    pokemons: pokemons,
    page: actualPage
  };
  return payload
}