import { findIndex } from 'lodash';

export function reducePokeList(pokelist) {
  const reducedPokelist = pokelist.map( (poke, index) => {
    poke.id =  index + 1;
    return poke;
  }).filter(poke => poke.id <= 151);
  return createGroupedArray(reducedPokelist, 18);
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
    flavor_text: getFlavorTexEntryByLan(flavor_text_entries)
  }

}

function getFlavorTexEntryByLan(flavors) {
  const flavorIndex = findIndex(flavors, { 'language': {'name': 'en' }});
  return flavors[flavorIndex].flavor_text;
}

function createGroupedArray(arr, chunkSize) {
  let groups = [], i;
  for (i = 0; i < arr.length; i += chunkSize) {
    groups.push(arr.slice(i, i + chunkSize));
  }
  return groups;
}