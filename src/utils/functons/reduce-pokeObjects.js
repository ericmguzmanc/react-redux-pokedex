import { findIndex, find } from 'lodash';
import { pokeColors, pokeMaxStats } from '../constants/poke-util.constants';

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
    types,
    flavor_text_entries
  } = pokeInfo;

  return {
    id,
    name,
    stats: stats.reverse(),
    type,
    abilities,
    height,
    weight,
    sprites: sprites,
    types: types,
    flavor_text: getFlavorTexEntryByLan(flavor_text_entries)
  }

}

export function getFlavorTexEntryByLan(flavors) {
  const flavorIndex = findIndex(flavors, { 'language': {'name': 'en' }});
  return flavors[flavorIndex].flavor_text;
}

export function createGroupedArray(arr, chunkSize) {
  let groups = [], i;
  for (i = 0; i < arr.length; i += chunkSize) {
    groups.push(arr.slice(i, i + chunkSize));
  }
  return groups;
}

export function getPokemonTypeColor(pokeType) {
  const color = find(pokeColors, ['type', pokeType.type.name.toUpperCase()]);
  return color.color;
}

export function getPokeGradient(pokemon){
  let gradient = "linear-gradient(to right, ";
  pokemon.types.forEach((element, index) => {
    gradient += `${getPokemonTypeColor(element)} ${(index) ? 50 : 0}%,${getPokemonTypeColor(element)} ${(index) ? 100 : 50}%,`;
  });
  gradient = gradient.substring(0, gradient.length - 1);
  gradient += ")"
  return gradient;
}

export function getPokeStatsLimit(stat) {
  const elm = find(pokeMaxStats, ['name', stat.toUpperCase()]);
  return elm.value
}

export function getPokePropertyColor(stat) {
  const color = find(pokeMaxStats, ['name', stat.toUpperCase()]);
  return color.color
}