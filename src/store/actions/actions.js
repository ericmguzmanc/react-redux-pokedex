import {
  REQUEST_POKEMONS,
  RECEIVE_POKEMONS,
  SELECT_POKEMON
} from '../../utils/constants/actions.constants';
import { POKE_API_URL} from '../../utils/constants/poke-api.constants';
import axios from 'axios';
import { reducePokeList } from '../../utils/functons/reduce-pokeList';

export function selectPokemon(pokemon) {
  return {
    type: SELECT_POKEMON,
    pokemon: pokemon
  }
}

export function requestPokemons(pokemon) {
  return {
    type: REQUEST_POKEMONS,
    pokemon
  }
}

export function receivePokemon(data) {
  return {
    type: RECEIVE_POKEMONS,
    pokemon: data,
  }
}

export function fetchPokemon() {
  return dispatch => {
    dispatch(requestPokemons());    
    axios.get(`${POKE_API_URL}/pokemon/`)
      .then(response => dispatch(receivePokemon(reducePokeList(response.data.results))))
  }
}

