export function nextPage(fetchedPokemon, pokemons, page) {
  let actualPage = page + 1;
  const payload = {
    fetchedPokemon: fetchedPokemon,
    pokemons: pokemons,
    page: actualPage
  };
  return payload
}

export function firstCharToUpperCase(str) {
  return (str.length === 2) ? str.toUpperCase() : str.charAt(0).toUpperCase() + str.slice(1);
}