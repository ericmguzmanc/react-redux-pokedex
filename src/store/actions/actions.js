import {
  RECEIVE_POKEMONS,
  RECEIVE_POKEMON_INFO
} from '../../utils/constants/actions.constants';
import { POKE_API_URL} from '../../utils/constants/poke-api.constants';
import axios from 'axios';
import { reducePokeList, reducePokeInfo } from '../../utils/functons/reduce-pokeObjects';

export function receivePokemon(data) {
  return {
    type: RECEIVE_POKEMONS,
    pokemon: data,
  }
}

export function receivePokemonInfo(data) {
  return {
    type: RECEIVE_POKEMON_INFO,
    pokeInfo: data,
  }
}

export function fetchPokemon() {
  return dispatch => {
    axios.get(`${POKE_API_URL}/pokemon/`)
      .then(response => dispatch(receivePokemon(reducePokeList(response.data.results))))
  }
}

export function fetchPokemonInfo(id) {
  return dispatch => {
    axios.get(`${POKE_API_URL}/pokemon/${id}/`)
      .then((response) => {
        axios.get(`${POKE_API_URL}/pokemon-species/${id}/`)
        .then((pokemonSpecies) => {
          dispatch(receivePokemonInfo(reducePokeInfo({...response.data, ...pokemonSpecies.data})))
        });
      });
  }
}


