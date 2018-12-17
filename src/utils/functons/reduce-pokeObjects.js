import { findIndex, find, padStart, filter, debounce } from 'lodash';
import { pokeColors, pokeMaxStats } from '../constants/poke-util.constants';
import { _typesOfMeasure, _feetPerMeter, _inchesPerFeet, _poundPerGram, _typesOfWeight } from '../constants/poke-util.constants';

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
  gradient += ")";
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

export function getPokeSize(value, type) {
  let meters = getMeters(value, type),
  feet = meters * _feetPerMeter,
  roundedFeet = Math.floor(feet),
  inches = Math.round((feet - roundedFeet) * _inchesPerFeet);
  return `${roundedFeet}' ${padStart(inches.toString(), 2, '0')}" `;
}

export function getMeters(value, type) {
  let conversion = _typesOfMeasure[type];
  if(conversion == null){
    throw new Error("Could not find type");
  } else {
    return value * conversion; 
  }
}

export function getPokeWeight(value, type, decimals) {
  let grams = getGrams(value, type),
      pounds = grams * _poundPerGram;
  return `${pounds.toFixed(1)} lbs`;
}

export function getGrams(value, type) {
  let conversion = _typesOfWeight[type];
  if(conversion == null) {
    throw new Error("Could not find type");
  } else {
    return value * conversion;
  }
}

export function doPokeQuery(query, pokemon) {

  let a = [];
  pokemon.forEach(group => {
    a = [...a, ...group];
  });

  console.log('query ', query)
  let foundPokemon = filter(a, (pokemon) => {
    return pokemon.name.startsWith(query.toLowerCase());
  })

  return foundPokemon;

}

// export const debouncePokeQuery = debounce(doPokeQuery, 1000);