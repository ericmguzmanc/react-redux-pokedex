export function reducePokeList(pokelist) {
  return pokelist.map( (poke, index) => {
    poke.id =  index + 1;
    return poke;
  }).filter(poke => poke.id <= 9);
}