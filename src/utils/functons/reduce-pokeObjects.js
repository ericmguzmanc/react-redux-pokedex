export function reducePokeList(pokelist) {
  return pokelist.map( (poke, index) => {
    poke.id =  index + 1;
    return poke;
  }).filter(poke => poke.id <= 18);
}

export function reducePokeInfo(pokeInfo) {
  const {
    id,
    name,
    stats,
    type,
    abilities,
    height,
    weight,
    sprites,
    flavor_text_entries
  } = pokeInfo;

  return {
    id,
    name,
    stats,
    type,
    abilities,
    height,
    weight,
    sprites: sprites,
    flavor_text_entries: flavor_text_entries
  }

}